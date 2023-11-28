"use client";

import { useEffect, useState } from "react";
import * as Yup from "yup";

const emailSchema = Yup.string().email("Invalid email").required("Required");

export default function useSearchForm() {
  const [searchText, setSearchText] = useState("");
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setEmail(null);
    setError(null);
    if (!searchText) return;

    const isValid = emailSchema.isValidSync(searchText);
    if (!isValid) {
      setError("Please input valid email!");
      return;
    }

    let getUser = setTimeout(() => {
      setEmail(searchText);
    }, 400);

    return () => {
      clearTimeout(getUser);
    };
  }, [searchText]);

  return {
    searchText,
    setSearchText,
    email,
    error,
  };
}
