"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";;

import { useUser } from "@/src/hooks/useUser";
import { RegisterCredentials } from "@/src/types/auth";

import InputField from "@/src/components/atoms/CustomInputField";
import Button from "@/src/components/atoms/Button";
import CustomLink from "@/src/components/atoms/CustomLink";

import { tv } from "tailwind-variants";
import CustomTitle from "@/src/components/atoms/CustomTitle";

const styles = tv({
  slots: {
    formWrapper: "flex flex-col gap-[3rem] mx-auto px-[3rem] py-[6rem] max-w-[60rem]",
    formErrorMessage: "text-red-500 text-center",
    formBottomlinks: "text-center",
    bottomLink: "ml-[.5rem] text-primary as--underline-hover",
    modalBase: "fixed inset-0 flex justify-center items-center z-50 after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-50 transition-opacity duration-500",
    modalContentArea: "bg-white p-[5rem] rounded shadow-md text-center w-[85%] max-w-[60rem] z-1",
    modalHeading: "text-[2.2rem] mb-[2rem]",
    modalParagraph: "mb-[3rem]",
    modalCloseButton: "w-fit",
  },
  variants: {
    visible: {
      true: {
        modalBase: "opacity-100 pointer-events-auto",
      },
      false: {
        modalBase: "opacity-0 pointer-events-none",
      },
    },
  },
});

const { formWrapper, formErrorMessage, formBottomlinks, bottomLink, modalBase, modalContentArea, modalHeading, modalParagraph, modalCloseButton } = styles();


export default function RegisterPage() {
  const { register: registerUser, error } = useUser();
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials & { confirmPassword: string }>();

  const onSubmit = async (data: RegisterCredentials & { confirmPassword: string }) => {
    if (data.password !== data.confirmPassword) return;

    try {
      await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      });
      setShowConfirmation(true);
    } catch (err) { }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={formWrapper()}>
        <CustomTitle level={1} className="text-3xl font-bold text-center">Création de votre compte</CustomTitle>
        <p>Posséder un compte vous sera nécessaire pour passer commande, et vous permettra deconserver une trace de vos commandes ! Vous pourrez y modifier vos informations personnelles à tout moment.</p>

        <InputField
          label="Nom d'utilisateur"
          {...register("username", { required: "Nom d'utilisateur requis" })}
          error={errors.username?.message}
        />

        <InputField
          label="Email"
          type="email"
          {...register("email", {
            required: "Email requis",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Email invalide",
            },
          })}
          error={errors.email?.message}
        />

        <InputField
          label="Mot de passe"
          type="password"
          {...register("password", {
            required: "Mot de passe requis",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: "8 caractères min. avec majuscule, minuscule, chiffre et caractère spécial",
            },
          })}
          error={errors.password?.message}
        />

        <InputField
          label="Confirmer le mot de passe"
          type="password"
          {...register("confirmPassword", {
            required: "Confirmation requise",
            validate: value => value === watch("password") || "Les mots de passe ne correspondent pas",
          })}
          error={errors.confirmPassword?.message}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Création en cours..." : "Créer mon compte"}
        </Button>

        {error && <p className={formErrorMessage()}>{error}</p>}

        <p className={formBottomlinks()}>
          Déjà un compte ?
          <CustomLink href="/auth/login" className={bottomLink()}>Se connecter</CustomLink>
        </p>
      </form>

      {/* Confirmation's modal */}
      <div className={modalBase({ visible: showConfirmation })}>
        <div className={modalContentArea()}>
          <CustomTitle level={2} className={modalHeading()}>Félicitations, votre compte a été créé avec succès !</CustomTitle>
          <p className={modalParagraph()}>Vous allez maintenant être redirigé vers la page de connexion.</p>
          <Button
            className={modalCloseButton()}
            onClick={() => {
              setShowConfirmation(false);
              router.push("/auth/login");
            }}
          >
            Accéder à la page de connexion
          </Button>
        </div>
      </div>
    </>
  );
}
