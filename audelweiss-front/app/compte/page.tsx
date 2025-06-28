"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/hooks/useUser";

import CustomTitle from "@/src/components/atoms/CustomTitle";
import Button from "@/src/components/atoms/Button";
import CustomInputField from "@/src/components/atoms/CustomInputField";

import { tv } from "tailwind-variants";

const styles = tv({
  slots: {
    pageContainer: "inner-wrap py-[6rem]",
    pageHeader: "flex justify-between items-center mb-[4rem]",
    pageTitle: "text-[3.5rem]",
    sectionTitle: "text-[2.5rem] mb-[2rem]",
    formSection: "max-w-[70rem] mb-[5rem]",
    formWrapper: "flex flex-col gap-[3rem]",
    twoColumns: "grid grid-cols-1 md:grid-cols-2 gap-[3rem]",
    buttonsRow: "flex justify-end gap-[2rem] mt-[2rem]",
    saveButton: "bg-primary hover:bg-dark-primary",
    logoutButton: "bg-gray-200 hover:bg-gray-300 text-dark-primary",
  },
});

const {
  pageContainer,
  pageHeader,
  pageTitle,
  sectionTitle,
  formSection,
  formWrapper,
  twoColumns,
  buttonsRow,
  saveButton,
  logoutButton,
} = styles();

export default function ComptePage() {
  const router = useRouter();
  const { isAuthenticated, loading, logout, user, updateUser } = useUser();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    addressDetail: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // Initialize form with user data when available
  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        address: user.address || "",
        addressDetail: user.addressDetail || "",
        city: user.city || "",
        postalCode: user.postalCode || "",
        country: user.country || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/auth/login");
    }
  }, [loading, isAuthenticated, router]);

  if (loading || !isAuthenticated) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(formData);
      // Succès - l'utilisateur est automatiquement mis à jour
    } catch (error) {
      // Erreur gérée automatiquement via le state error
      console.error('Erreur lors de la mise à jour:', error);
    }
  };

  return (
    <div className={pageContainer()}>
      <div className={pageHeader()}>
        <CustomTitle level={1} className={pageTitle()}>
          Mon compte
        </CustomTitle>
        <Button
          className={logoutButton()}
          onClick={() => {
            logout();
            router.push("/auth/login");
          }}
        >
          Se déconnecter
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={formSection()}>
          <CustomTitle level={2} className={sectionTitle()}>
            Informations personnelles
          </CustomTitle>
          <div className={formWrapper()}>
            <div className={twoColumns()}>
              <CustomInputField
                label="Nom d'utilisateur"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <CustomInputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={twoColumns()}>
              <CustomInputField label="Prénom" name="firstName" value={formData.firstName} onChange={handleChange} />
              <CustomInputField label="Nom" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <CustomInputField label="Téléphone" name="phone" value={formData.phone} onChange={handleChange} />

          </div>
        </div>

        <div className={formSection()}>
          <CustomTitle level={2} className={sectionTitle()}>
            Adresse de livraison
          </CustomTitle>
          <div className={formWrapper()}>
            <div className={twoColumns()}>
              <CustomInputField label="Adresse" name="address" value={formData.address} onChange={handleChange} />
              <CustomInputField
                label="Complément d'adresse"
                name="addressDetail"
                value={formData.addressDetail}
                onChange={handleChange}
              />
            </div>
            <div className={twoColumns()}>
              <CustomInputField label="Ville" name="city" value={formData.city} onChange={handleChange} />
              <CustomInputField
                label="Code postal"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>
            <div>
              <CustomInputField label="Pays" name="country" value={formData.country} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className={buttonsRow()}>
          <Button type="submit" className={saveButton()} withIcon>
            Enregistrer les modifications
          </Button>
        </div>
      </form>
    </div>
  );
}
