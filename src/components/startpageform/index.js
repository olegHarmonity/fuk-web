import React, { useState } from "react";
import "./startpageform.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import ValidationError from "../validationError";

const registerOrganizationSchema = Yup.object().shape({
  "organization-name": Yup.string().min(2, "Najmanje 2 slova!").max(50, "Too Long!").required("Required"),
  "superadmin-email": Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(2, "Too Short!").max(10, "Too Long!"),
  "superadmin-password": Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  "repeat-superadmin-password": Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
});

export default function Startpageform() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="startpage-form-wrapper">
      <Formik
        initialValues={{
          "organization-name": "",

          password: "",
          "superadmin-email": "",
          "superadmin-password": "",
          "repeat-superadmin-password": "",
        }}
        validationSchema={registerOrganizationSchema}
        onSubmit={async (values) => {}}
      >
        {({ errors, touched }) => (
          <Form className="startpage-form">
            <div className="form-field-wrapper">
              <label for="password" className="form-field-label">
                Lozinka za registraciju organizacije:*
              </label>
              <Field name="password" type={showPassword ? "text" : "password"} className="textfield" />
              {errors.password && <ValidationError error={errors.password} />}
              <button className="show-password-button" onClick={handleShowPassword}>
                <img src="/images/showpassword.png" />
              </button>
            </div>
            <div className="form-field-wrapper">
              <label for="organization-name" className="form-field-label">
                Pun naziv organizacije:*
              </label>
              <Field name="organization-name" type="text" className="textfield" />
            </div>
            <div className="form-field-wrapper">
              <label for="superadmin-email" className="form-field-label">
                Imejl-adresa Super Admina:*
              </label>
              <Field name="superadmin-email" type="email" className="textfield" />
            </div>
            <div className="form-field-wrapper">
              <label for="superadmin-password" className="form-field-label">
                Lozinka Super Admina:*
              </label>
              <Field name="superadmin-password" type="text" className="textfield" />
            </div>
            <div className="form-field-wrapper">
              <label for="repeat-superadmin-password" className="form-field-label">
                Ponovi lozinku Super Admina:*
              </label>
              <Field name="repeat-superadmin-password" type="text" className="textfield" />
            </div>
            <button type="submit" className="startpage-form-button">
              Dalje
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
