import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import ActorForm from "./ActorForm";
import Loading from "../../../components/Loading";
import type { SubmitHandler } from "react-hook-form";
import apiClient from "../../../api/apiClient";
import type Actor from "../models/Actor.model";
import formatDate from "../../../utils/formatDate";
import extractErrors from "../../../utils/extractErrors";
import type { AxiosError } from "axios";
import type ActorCreation from "../models/ActorCreation";
import Swal from "sweetalert2";

export default function EditActor() {
  const { id } = useParams();
  const [model, setModel] = useState<ActorCreation | undefined>(undefined);
  const [errors, setErrors] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get<Actor>(`/actors/${id}`)
      .then((res) => {
        const actor = res.data;
        setModel({
          name: actor.name,
          dateOfBirth: formatDate(actor.dateOfBirth),
          picture: undefined,
        });
      })
      .catch(() => {
        navigate("/actors"); // or show error
      });
  }, [id, navigate]);

  const onSubmit: SubmitHandler<ActorCreation> = async (data) => {
    try {
      await apiClient.putForm(`/actors/${id}`, data);
      navigate(`/actors/${id}`);
    } catch (err) {
      const errors = extractErrors(err as AxiosError);
      setErrors(errors);
    }

    Swal.fire({
      title: "Success",
      icon: "success",
      text: "Your actor was successfully updated",
    });
  };

  return (
    <>
      <h3>Edit Actor</h3>
      {model ? (
        <ActorForm errors={errors} onSubmit={onSubmit} model={model} />
      ) : (
        <Loading />
      )}
    </>
  );
}
