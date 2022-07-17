import React, { useState } from "react";
import { Formik, Form } from "formik";
import Box from "@mui/material/Box";
import Button from "components/Button";
import Input from "components/Input";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { GERENIC_ERROR } from "utils/constants";
import { charcoal } from "theme/colors";
import { s4, s9 } from "theme/spacing";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please provide a valid email")
    .required("Required field"),
});

const SignupForm = ({
  handleSignupSuccess,
}: {
  handleSignupSuccess: () => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  const handleSubmit = async (v: { email: string }) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("api/signup", {
        method: "POST",
        body: JSON.stringify({ email: v.email }),
      });

      if (res.status !== 200) {
        throw new Error("API did not respond with 200");
      }
      const data = await res.json();

      if (data?.errors[0]?.error_code === "ERROR_CONTACT_EXISTS") {
        throw new Error("Contact already exist");
      }

      if (data?.errors[0]?.error) {
        throw new Error(data?.errors[0]?.error);
      }

      handleSignupSuccess();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(GERENIC_ERROR);
      }
    } finally {
      setLoading(false);
    }
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
            mt={s9}
            mb={s4}
          >
            <Input
              placeholder="Email"
              id="email"
              name="email"
              onChange={handleChange}
            />

            <Button type="submit" loading={loading}>
              Join
            </Button>
          </Box>

          {/* Errors coming from Formik */}
          {touched?.email && Boolean(errors?.email) && (
            <Typography color="error" variant="caption">
              {errors.email}
            </Typography>
          )}
          {/* Error coming from the API */}
          {error && (
            <Typography color="error" variant="caption">
              {error}
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
