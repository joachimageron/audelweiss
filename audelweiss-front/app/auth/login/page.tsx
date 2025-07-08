"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useUser } from "@/src/hooks/useUser";
import { LoginCredentials } from "@/src/types/auth";

import InputField from "@/src/components/atoms/CustomInputField";
import Button from "@/src/components/atoms/Button";
import CustomLink from "@/src/components/atoms/CustomLink";
import CustomTitle from "@/src/components/atoms/CustomTitle";

import { tv } from "tailwind-variants";

const styles = tv({
  slots: {
    formWrapper: "flex flex-col gap-[3rem] mx-auto px-[3rem] py-[6rem] max-w-[60rem]",
    formTitle: "text-3xl font-bold text-center",
    formErrorMessage: "text-red-500 text-center",
    formBottomlinks: "text-center",
    bottomLink: "ml-[.5rem] text-primary as--underline-hover"
  },
});

const { formWrapper, formTitle, formErrorMessage, formBottomlinks, bottomLink } = styles();

export default function LoginPage() {
  const { login, error } = useUser();
  const router = useRouter();
  const [localError, setLocalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>();

  const onSubmit = async (data: LoginCredentials) => {
    setLocalError(null);
    try {
      await login(data);
      router.push("/compte");
    } catch (err: any) {
      setLocalError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formWrapper()}>
      <CustomTitle level={1} className={formTitle()}>Connexion à votre compte</CustomTitle>
      <p>Connectez-vous pour passer commande et accéder à votre historique.</p>

      <InputField
        label="Nom d'utilisateur ou email"
        type="text"
        {...register("identifier", { required: "Identifiant requis" })}
        error={errors.identifier?.message}
      />

      <InputField
        label="Mot de passe"
        type="password"
        {...register("password", { required: "Mot de passe requis" })}
        error={errors.password?.message}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Connexion en cours..." : "Se connecter"}
      </Button>

      {localError && <p className={formErrorMessage()}>{localError}</p>}

      <p className={formBottomlinks()}>
        Pas encore de compte ?
        <CustomLink href="/auth/register" className={bottomLink()}>
          Créer un compte
        </CustomLink>
      </p>
    </form>
  );
}
