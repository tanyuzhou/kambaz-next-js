"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["profile"] : ["signin", "signup"];
  const pathname = usePathname();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          className={`list-group-item border-0 ${pathname.includes(link) ? "active text-danger" : "text-danger"
            }`}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </Link>
      ))}
    </div>
  );
}
