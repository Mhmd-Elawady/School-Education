import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaChild,
  FaComment,
  FaGraduationCap,
} from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../Styles/Contact/ContactForm.css";
import SectionHeader from "../Home/SectionHeader";
export default function ContactForm() {
  const initialValues = {
    parentName: "",
    email: "",
    phone: "",
    studentName: "",
    studentAge: "",
    program: "",
    message: "",
  };

  const validationSchema = Yup.object({
    parentName: Yup.string().required("Parent name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    studentName: Yup.string().required("Student name is required"),
    studentAge: Yup.number()
      .required("Student age is required")
      .min(3, "Age must be at least 3")
      .max(18, "Age must be 18 or less"),
    program: Yup.string().required("Please select a program"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form submitted:", values);
    alert("Form submitted successfully!");
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="container mt-4 ">
      <SectionHeader
        sectionTitle="Contact Form"
        sectionHeading="Student Information"
        sectionDescription="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
      />
      <div className="row justify-content-center ">
        <div className="col-lg-10">
          <div className="card-contact contact-form-container ">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-2">
                <button className="btn btn-social btn-facebook me-4">
                  <FaFacebook />
                </button>
                <button className="btn btn-social btn-twitter me-4">
                  <FaTwitter />
                </button>
                <button className="btn btn-social btn-linkedin">
                  <FaLinkedin />
                </button>
              </div>

              <hr className="my-4" />

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="parentName" className="form-label">
                          <FaUser className="me-2" />
                          Parent Name
                        </label>
                        <Field
                          type="text"
                          name="parentName"
                          id="parentName"
                          className="form-control"
                          placeholder="Enter Parent Name"
                        />
                        <ErrorMessage
                          name="parentName"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          <FaEnvelope className="me-2" />
                          Email Address
                        </label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Enter Email Address"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">
                          <FaPhone className="me-2" />
                          Phone Number
                        </label>
                        <Field
                          type="tel"
                          name="phone"
                          id="phone"
                          className="form-control"
                          placeholder="Enter Phone Number"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="studentName" className="form-label">
                          <FaChild className="me-2" />
                          Student Name
                        </label>
                        <Field
                          type="text"
                          name="studentName"
                          id="studentName"
                          className="form-control"
                          placeholder="Enter Student Name"
                        />
                        <ErrorMessage
                          name="studentName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="studentAge" className="form-label">
                          <FaChild className="me-2" />
                          Student Age
                        </label>
                        <Field
                          type="number"
                          name="studentAge"
                          id="studentAge"
                          min="3"
                          max="18"
                          className="form-control"
                          placeholder="Enter Student Age"
                        />
                        <ErrorMessage
                          name="studentAge"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="program" className="form-label">
                          <FaGraduationCap className="me-2" />
                          Program of Interest
                        </label>
                        <Field
                          as="select"
                          name="program"
                          id="program"
                          className="form-select"
                        >
                          <option value="">Select Program</option>
                          <option value="preschool">Preschool Program</option>
                          <option value="elementary">Elementary Program</option>
                          <option value="middle">Middle School Program</option>
                          <option value="high">High School Program</option>
                          <option value="summer">Summer Camp</option>
                        </Field>
                        <ErrorMessage
                          name="program"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        <FaComment className="me-2" />
                        Message
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        rows="4"
                        className="form-control"
                        placeholder="Enter your Message"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-subimt btn-lg w-100 py-3"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
