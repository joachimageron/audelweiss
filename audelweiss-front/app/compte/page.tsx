"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/hooks/useUser";
import Button from "@/src/components/atoms/Button";

export default function ComptePage() {
    const router = useRouter();
    const { isAuthenticated, loading, logout, user } = useUser();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.replace("/auth/login");
        }
    }, [loading, isAuthenticated, router]);

    if (loading || !isAuthenticated) {
        return null;
    }

    return (
        <div className="inner-wrap">
            <h1 className="text-2xl font-bold mb-4">Bienvenue, {user?.username} !</h1>

            <Button onClick={() => { logout(); router.push("/auth/login"); }}>
                Se déconnecter
            </Button>
        </div>
    );
}
