"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import InputField from "@/src/components/atoms/CustomInputField";
import Button from "@/src/components/atoms/Button";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import { tv } from "tailwind-variants";
import Hero from "@/src/components/modules/Hero";
import { usePage } from "@/src/hooks/usePage";
import Breadcrumb from "@/src/components/baseElements/Breadcrumb"

const styles = tv({
    slots: {
        formWrapper: "flex flex-col gap-[3rem] mx-auto px-[3rem] py-[6rem] max-w-[60rem]",
        formErrorMessage: "text-red-500 text-center",
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

const { formWrapper, formErrorMessage, modalBase, modalContentArea, modalHeading, modalParagraph, modalCloseButton } = styles();

type ContactFormValues = {
    name: string;
    email: string;
    reason: string;
    message: string;
};

<<<<<<< HEAD
type Props = {
  params?: string[];
};

function getSubjectFromReason(reason) {
    switch (reason) {
      case "sav":
        return "Nouvelle demande SAV via le site";
      case "personnalisation":
        return "Nouvelle demande de personnalisation";
      case "partenariat":
        return "Proposition de partenariat";
      default:
        return "Demande de contact";
    }
  }
  
  function getTextBody(data) {
    return (
      `Nom: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Objet: ${getSubjectFromReason(data.reason)}\n` +
      `Message:\n${data.message}`
    );
  }
  
  function getHtmlBody(data) {
    return `
      <h3>Demande de contact reçue</h3>
      <p><strong>Nom :</strong> ${data.name}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p><strong>Objet :</strong> ${getSubjectFromReason(data.reason)}</p>
      <p><strong>Message :</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>
    `;
  }
  

  export default function ContactPage({ params }: Props) {
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const { data, isLoading, isError } = usePage({ filters: { slug: "contact"}, queryKey: ["page"] });

    const segments = Array.isArray(params) ? params : [];
    const breadcrumbItems = [
      { label: "Accueil", href: "/" },
      ...segments.slice(0, -1).map((segment, index) => ({
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        href: "/" + segments.slice(0, index + 1).join("/"),
      })),
      { label: data?.title || "Contact" },
    ];

=======
export default function ContactPage() {
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);

>>>>>>> 019ef93079ef8be55af18db75891274f35ec92c9
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>();

    const onSubmit = async (data: ContactFormValues) => {
<<<<<<< HEAD
        try {
          const response = await fetch("http://localhost:1337/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to: "contact.audelweiss@gmail.com", // Adresse cible
              email: data.email, // Adresse de l’expéditeur (utilisateur)
              subject: getSubjectFromReason(data.reason), // On fait une petite fonction qui adapte le sujet
              text: getTextBody(data),                  // Idem pour le body en texte brut
              html: getHtmlBody(data),                  // ...et pour le body HTML
            }),
          });
          if (!response.ok) throw new Error("Erreur lors de l’envoi du mail");
          setShowConfirmation(true);
        } catch (e) {
          alert("Erreur lors de l’envoi du message");
        }
      };

    return (
        <>
        <Hero title={data.title} imageUrl={process.env.NEXT_PUBLIC_API_URL + data.illustrationImage.url} />
        <Breadcrumb items={breadcrumbItems} />

        <form onSubmit={handleSubmit(onSubmit)} className={formWrapper()}>

=======
        console.log("Formulaire de contact envoyé:", data);
        await new Promise((r) => setTimeout(r, 1000));
        setShowConfirmation(true);
    };

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className={formWrapper()}>
            <CustomTitle level={1} className="text-3xl font-bold text-center">Contact</CustomTitle>
>>>>>>> 019ef93079ef8be55af18db75891274f35ec92c9
            <p className="text-center">Une question ? Une demande personnalisée ? Ce formulaire est là pour ça.</p>

            <InputField label="Nom complet" {...register("name", { required: "Nom requis" })} error={errors.name?.message}/>

            <InputField label="Email" type="email"
                {...register("email", {
                    required: "Email requis",
                    pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Email invalide"},
                })}
                error={errors.email?.message}
            />

            <div>
                <label className="block mb-2 font-semibold">Objet de votre demande</label>
                <select
                    {...register("reason", { required: "Veuillez choisir un objet" })}
<<<<<<< HEAD
                    className="w-full p-1 border border-gray-300 rounded"
=======
                    className="w-full p-3 border border-gray-300 rounded"
>>>>>>> 019ef93079ef8be55af18db75891274f35ec92c9
                >
                    <option value="">-- Sélectionner --</option>
                    <option value="sav">Service après-vente</option>
                    <option value="personnalisation">Demande personnalisée</option>
                    <option value="partenariat">Proposition de partenariat</option>
                    <option value="autre">Autre</option>
                </select>
                {errors.reason && <p className="text-red-500 mt-1">{errors.reason.message}</p>}
            </div>

            <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                    {...register("message", { required: "Message requis" })}
<<<<<<< HEAD
                    className="w-full p-2 border border-gray-300 rounded min-h-[150px]"
=======
                    className="w-full p-3 border border-gray-300 rounded min-h-[150px]"
>>>>>>> 019ef93079ef8be55af18db75891274f35ec92c9
                />
                {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
        </form>

        <div className={modalBase({ visible: showConfirmation })}>
            <div className={modalContentArea()}>
            <CustomTitle level={2} className={modalHeading()}>Merci pour votre message !</CustomTitle>
            <p className={modalParagraph()}>Nous vous répondrons dans les plus brefs délais.</p>
            <Button
                className={modalCloseButton()}
                onClick={() => {
                setShowConfirmation(false);
                router.push("/");
                }}
            >
                Retour à l'accueil
            </Button>
            </div>
        </div>
        </>
    );
}
