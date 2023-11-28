"use client";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Formik, Field, Form, FieldProps } from "formik";
import * as Yup from "yup";
import useRegisterForm from "./use-register-form";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function RegisterForm() {
  const { mutate, isPending } = useRegisterForm();

  return (
    <Flex flex={1} p={4} maxWidth={"300px"}>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={async (values) => mutate(values)}
        validationSchema={RegisterSchema}
      >
        <Form>
          <VStack spacing={6}>
            <Field name="name">
              {({ field, form }: FieldProps<any, { name: string }>) => (
                <FormControl
                  isInvalid={(form.errors.name && form.touched.name) as boolean}
                >
                  <FormLabel>Name</FormLabel>
                  <Input {...field} placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: FieldProps<any, { email: string }>) => (
                <FormControl
                  isInvalid={
                    (form.errors.email && form.touched.email) as boolean
                  }
                >
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              alignSelf={"end"}
              colorScheme="blue"
              backgroundColor={"blue.600 !important"}
              size={"sm"}
              isLoading={isPending}
            >
              Submit
            </Button>
          </VStack>
        </Form>
      </Formik>
    </Flex>
  );
}
