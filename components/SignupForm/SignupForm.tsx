import React from "react";
import { charcoal } from "theme/colors";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Button from "components/Button";
import Input from "components/Input";
import Typography from "@mui/material/Typography";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please provide a valid email")
    .required("Required field"),
});

const SignupForm = () => {
  const handleSubmit = async (v: { email: string }) => {
    const res = await fetch("api/signup", {
      method: "POST",
      body: JSON.stringify({ email: v.email }),
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched, handleChange }) => (
        <Form>
          <Box
            justifyContent="space-between"
            display="flex"
            borderBottom={`1px solid ${charcoal}`}
            alignItems="flex-end"
          >
            <Input
              placeholder="Email"
              id="email"
              name="email"
              onChange={handleChange}
            />
            <Box my={2}>
              <Button type="submit">Join</Button>
            </Box>
          </Box>

          {touched?.email && Boolean(errors?.email) && (
            <Typography color="error" variant="caption">
              {errors.email}
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
