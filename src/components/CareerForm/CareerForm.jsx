import React, { useState } from "react";
import emailjs from "emailjs-com";
// import "./CareerForm.css";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    noticePeriod: "",
    additionalMessage: "",
    resume: null,
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contactNumber", formData.contactNumber);
    formDataToSend.append("noticePeriod", formData.noticePeriod);
    formDataToSend.append("additionalMessage", formData.additionalMessage);
    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formDataToSend,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setFormStatus("Your application has been submitted successfully.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contactNumber: "",
            noticePeriod: "",
            additionalMessage: "",
            resume: null,
          });
        },
        (error) => {
          console.error(error);
          setFormStatus("There was an error submitting your application. Please try again later.");
        }
      );
  };

  return (
    <div className="career-form-container">
      <h2>Apply for a Career Opportunity</h2>
      <form onSubmit={handleSubmit} className="career-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="noticePeriod">Notice Period</label>
          <input
            type="text"
            id="noticePeriod"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="additionalMessage">Additional Message</label>
          <textarea
            id="additionalMessage"
            name="additionalMessage"
            value={formData.additionalMessage}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="resume">Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Application
        </button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default CareerForm;
