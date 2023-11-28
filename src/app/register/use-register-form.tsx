"use client";

import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup";

interface RegisterDTO {
  email: string;
  name: string;
}

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function useRegisterForm() {
  const toast = useToast();
  const { mutate, isPending } = useMutation<any, Error, RegisterDTO>({
    mutationFn: async (data) => {
      return await fetch(`https://delman-fe-api.fly.dev/users`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (!res.ok) throw new Error((await res.json()).message);

        return res.json();
      });
    },
    onSuccess: (data) => {
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      form.resetForm();
    },
    onError: (error) => {
      toast({
        title: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    },
  });
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (values) => mutate(values),
    validationSchema: RegisterSchema,
  });

  return { mutate, isPending, form };
}
