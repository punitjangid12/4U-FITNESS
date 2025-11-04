import React, { useEffect } from "react";
import Button from "../Components/Button";
import { Toast } from "../Components/Common/common_tost/Toast";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
function ContactUs() {
  const { addToast } = Toast();

  // ✅ Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long!")
      .matches(/^[A-Za-z\s]+$/, "Name cannot contain numbers or special characters!")
      .required("Name is required!"),
    email: Yup.string()
      .email("Invalid email format!")
      .test(
        "is-gmail",
        "Email must include '@' and end with 'gmail.com'!",
        (value) => value && value.endsWith("gmail.com")
      )
      .required("Email is required!"),
    problem: Yup.string()
      .min(10, "Please describe your problem in at least 10 characters!")
      .required("Problem description is required!"),
  });

  useEffect(() => {
    // Load saved data from localStorage
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    if (storedName || storedEmail) {
      console.log("Loaded saved values from localStorage");
    }
  }, []);

  return (
    <div  className="min-h-screen flex items-center flex-col bg-black justify-center">
        <motion.h2
      className="text-6xl font-extrabold mb-4 text-red-500 font-orbitron"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Contact <span className="text-white">Us</span>
    </motion.h2>
      <div className="p-8 rounded-lg shadow-md w-full max-w-md bg-transparent">
        <Formik
          initialValues={{
            name: localStorage.getItem("name") || "",
            email: localStorage.getItem("email") || "",
            problem: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            addToast("We will contact you back soon!", "success");
            console.log("Form submitted:", values);
            localStorage.setItem("name", values.name);
            localStorage.setItem("email", values.email);
            resetForm();
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-gray-400 mb-1">Name</label>
                <Field
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={(e) => {
                    handleChange(e);
                    localStorage.setItem("name", e.target.value);
                  }}
                  className="w-full px-4 py-2 border bg-transparent text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your Name"
                  required
                />
                {errors.name && touched.name && (
                  <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-400 mb-1">Email</label>
                <Field
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e) => {
                    handleChange(e);
                    localStorage.setItem("email", e.target.value);
                  }}
                  className="w-full px-4 py-2 border bg-transparent text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your Email"
                  required
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>

              {/* Problem Field */}
              <div>
                <label className="block text-gray-400 mb-1">Problem</label>
                <Field
                  as="textarea"
                  name="problem"
                  value={values.problem}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border bg-transparent text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Describe your problem..."
                  rows="4"
                  required
                />
                {errors.problem && touched.problem && (
                  <div className="text-red-500 text-sm mt-1">{errors.problem}</div>
                )}
              </div>

              {/* Custom Button — unchanged */}
              <Button label="Submit" type="submit" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactUs;
