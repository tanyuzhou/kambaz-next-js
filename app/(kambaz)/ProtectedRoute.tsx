"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const pathname = usePathname();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (
            isClient &&
            !currentUser &&
            !pathname.includes("/account/signin") &&
            !pathname.includes("/account/signup")
        ) {
            router.push("/account/signin?error=not_logged_in");
        }
    }, [isClient, currentUser, pathname, router]);

    if (!isClient) return null;

    if (
        !currentUser &&
        !pathname.includes("/account/signin") &&
        !pathname.includes("/account/signup")
    ) {
        return null;
    }

    return <>{children}</>;
}
