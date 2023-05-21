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

export default function Login({onClose}) {
  const toast = useToast();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleFormSubmit = () => {
    toast({
      description: "Giriş Yapıldı. Ana sayfaya yönlendiriliyorsunuz.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Box p={4}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
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
          <Button mt={6} colorScheme="blue" type="submit">
            Giriş Yap
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}
