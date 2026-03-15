import { useForm,  type SubmitHandler } from "react-hook-form";
import Button from "../../../components/Button";
import { NavLink } from "react-router";
import SelectImage from "../../../components/SelectImage/SelectImage";
import DisplayErrors from "../../../components/DisplayErrors";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import firstLetterUppercase from "../../../validations/firstLetterUppercase";
import noDateFromFuture from "../../../validations/noDateFromFuture";
import type ActorCreation from "../models/ActorCreation";

export default function ActorForm(props: ActorFormProps) {

    const {
        register, handleSubmit, setValue,
        formState: { errors, isValid, isSubmitting }
    } = useForm<ActorCreation>({
        resolver: yupResolver(validationRules),
        defaultValues: props.model ?? { name: '', dateOfBirth: '', picture: undefined },
        mode: 'onChange'
    })
    // console.log("Form errors:", errors);
    // console.log("Form isValid:", isValid);

    const currentImageURL: string | undefined = props.model?.picture ? props.model.picture as string : undefined;

    return (
        <>
            <DisplayErrors errors={ props.errors } />
            <form onSubmit={ 
                handleSubmit(props.onSubmit) }>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" autoComplete="off" className="form-control" { ...register('name') } />
                    { errors.name && <p className="error">{ errors.name.message }</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input id="date" type="date" className="form-control" { ...register('dateOfBirth') } />
                    { errors.dateOfBirth && <p className="error">{ errors.dateOfBirth.message }</p>}
                </div>

                <SelectImage
                imageURL={ currentImageURL }
                selectedImage={ file => setValue('picture', file) } />

                <div className="mt-2">
                    <Button
                        className="btn btn-primary"
                        type="submit" disabled={ !isValid || isSubmitting }>
                        { isSubmitting ? 'Sending...' : 'Send' }</Button>
                        <NavLink to="/actors" className="btn btn-secondary ms-2">Cancel</NavLink>
                </div>
            </form>
        </>
    )

}

interface ActorFormProps {
    onSubmit: SubmitHandler<ActorCreation>;
    model?: ActorCreation;
    errors: string[];
}

const validationRules = yup.object({
    name: yup.string().required('Actor name is required').test(firstLetterUppercase()),
    dateOfBirth: yup.string().required('The date of birth is required').test(noDateFromFuture())
})