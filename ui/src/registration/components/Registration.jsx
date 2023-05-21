import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Registration({ onClose }) {
  const toast = useToast();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
  });

  const handleFormSubmit = () => {
    toast({
      description: "Kayıt Olundu. Ana sayfaya yönlendiriliyorsunuz.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Box p={4}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <Field name="firstName">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.firstName && form.touched.firstName}
              >
                <FormLabel htmlFor="firstName">İsim</FormLabel>
                <Input
                  {...field}
                  id="firstName"
                  placeholder="İsminizi giriniz"
                />
                <ErrorMessage name="firstName" component={FormErrorMessage} />
              </FormControl>
            )}
          </Field>
          <Field name="lastName">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.lastName && form.touched.lastName}
                mt={4}
              >
                <FormLabel htmlFor="lastName">Soyisim</FormLabel>
                <Input
                  {...field}
                  id="lastName"
                  placeholder="Soyisminizi giriniz"
                />
                <ErrorMessage name="lastName" component={FormErrorMessage} />
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
                mt={4}
              >
                <FormLabel htmlFor="email">E-posta</FormLabel>
                <Input {...field} id="email" placeholder="E-postanızı giriniz" />
                <ErrorMessage name="email" component={FormErrorMessage} />
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
                mt={4}
              >
                <FormLabel htmlFor="password">Şifre</FormLabel>
                <Input
                  {...field}
                  type="password"
                  id="password"
                  placeholder="Şifrenizi giriniz"
                />
                <ErrorMessage name="password" component={FormErrorMessage} />
              </FormControl>
            )}
          </Field>
          <Field name="phoneNumber">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.phoneNumber && form.touched.phoneNumber}
                mt={4}
              >
                <FormLabel htmlFor="phoneNumber">Telefon Numarası</FormLabel>
                <Input
                  {...field}
                  id="phoneNumber"
                  placeholder="Telefon numaranızı giriniz"
                />
                <ErrorMessage name="phoneNumber" component={FormErrorMessage} />
              </FormControl>
            )}
          </Field>
          <Button mt={6} colorScheme="blue" type="submit">
            Kaydol
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}
