"use client";

import translations from "@/translations/translations.pl";
import Link from "next/link";

import { useAppSelector } from "@/lib/store";
import { useEffect } from "react";

import useTopNav from "./useTopNav";

export default function TopNav() {
  const state = useAppSelector((state) => state.userStoreSlice);
  const { handleLogut } = useTopNav();

  return (
    <ul className="list-unstyled">
      <li className="wishlist">
        <Link href="/wishlist"> {translations.navigation["wishlist"]}</Link>
      </li>
      <li className="header_cart hidden-xs">
        <Link href="/basket">{translations.navigation["basket"]}</Link>
      </li>
      <li className="check">
        <Link href="/basket">{translations.navigation["check-out"]}</Link>
      </li>
      <li className="login">
        {state?.isLoggedIn === true ? (
          <>
            <Link href="/profile">{`${state?.name} ${state?.surname} - ${translations.navigation["my-account"]}`}</Link>
          </>
        ) : (
          <Link href="/sign-in">{translations.navigation["login"]}</Link>
        )}
      </li>

      {state?.isLoggedIn === true && (
        <li className="login">
          <Link href="/" onClick={handleLogut}>
            {translations.navigation["logout"]}
          </Link>
        </li>
      )}
    </ul>
  );
}
