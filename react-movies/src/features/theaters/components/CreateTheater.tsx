import type { SubmitHandler } from "react-hook-form";
import TheaterForm from "./TheaterForm";
import apiClient from "../../../api/apiClient";
import extractErrors from "../../../utils/extractErrors";
import type { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import type TheaterCreation from "../models/TheaterCreations";

export default function CreateTheater() {

    const navigate = useNavigate();
    const [errors, setErrors] = useState<string[]>([]); 

    const onSubmit: SubmitHandler<TheaterCreation> = async (data) => {
        try {
            await apiClient.post('/theaters', data);
            navigate('/theaters');
        } catch (err) {
            const errors = extractErrors(err as AxiosError);
            setErrors(errors);
        }
    }

    return (
        <>
            <h3>Create Theater</h3>
            <TheaterForm onSubmit={ onSubmit } errors={ errors } /> 
        </>
    )
}