"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname, redirect } from "next/navigation";

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const pathname = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    if (
        !currentUser &&
        !pathname.includes("/account/signin") &&
        !pathname.includes("/account/signup")
    ) {
        redirect("/account/signin?error=not_logged_in");
    }

    return <>{children}</>;
}
