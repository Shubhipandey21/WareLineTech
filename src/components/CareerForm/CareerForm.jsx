// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const CareerForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     noticePeriod: "",
//     additionalMessage: "",
//     resume: null,
//   });

//   const [formStatus, setFormStatus] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, resume: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value) formDataToSend.append(key, value);
//     });

//     emailjs
//       .sendForm(
//         "your_service_id",
//         "your_template_id",
//         formDataToSend,
//         "your_user_id"
//       )
//       .then(
//         () => {
//           setFormStatus("Your application has been submitted successfully.");
//           setFormData({
//             firstName: "",
//             lastName: "",
//             email: "",
//             contactNumber: "",
//             noticePeriod: "",
//             additionalMessage: "",
//             resume: null,
//           });
//         },
//         (error) => {
//           console.error(error);
//           setFormStatus("There was an error submitting your application. Please try again later.");
//         }
//       );
//   };

//   const inputClasses = "p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white";
//   const labelClasses = "mb-2 text-gray-700 font-medium";

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-[60vh] bg-white overflow-hidden">
//       <div className="absolute inset-0">
//         <svg
//           className="w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#f8f8ff"
//             fillOpacity="0.8"
//             d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,149.3C672,160,768,128,864,133.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           />
//         </svg>
//       </div>

//       <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-4">
//         <h2 className="text-sm font-bold text-gray-800 uppercase">Career Opportunities</h2>
//         <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
//           Join Our Team
//         </h1>
//         <p className="mt-4 text-gray-600">
//           Take the next step in your career journey with us
//         </p>

//         <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-left">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex flex-col">
//               <label htmlFor="firstName" className={labelClasses}>First Name</label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//                 className={inputClasses}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="lastName" className={labelClasses}>Last Name</label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//                 className={inputClasses}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex flex-col">
//               <label htmlFor="email" className={labelClasses}>Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className={inputClasses}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="contactNumber" className={labelClasses}>Contact Number</label>
//               <input
//                 type="tel"
//                 id="contactNumber"
//                 name="contactNumber"
//                 value={formData.contactNumber}
//                 onChange={handleChange}
//                 required
//                 className={inputClasses}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="noticePeriod" className={labelClasses}>Notice Period</label>
//             <input
//               type="text"
//               id="noticePeriod"
//               name="noticePeriod"
//               value={formData.noticePeriod}
//               onChange={handleChange}
//               required
//               className={inputClasses}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="additionalMessage" className={labelClasses}>Additional Message</label>
//             <textarea
//               id="additionalMessage"
//               name="additionalMessage"
//               value={formData.additionalMessage}
//               onChange={handleChange}
//               rows="4"
//               className={inputClasses}
//             ></textarea>
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="resume" className={labelClasses}>Resume</label>
//             <input
//               type="file"
//               id="resume"
//               name="resume"
//               onChange={handleFileChange}
//               accept=".pdf,.doc,.docx"
//               required
//               className={`${inputClasses} file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100`}
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full px-6 py-3 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:opacity-90"
//             style={{
//               backgroundImage: "linear-gradient(to right, #4facfe, #00f2fe)",
//             }}
//           >
//             Submit Application
//           </button>
//         </form>

//         {formStatus && (
//           <div className="mt-4 p-4 rounded-lg bg-gray-50">
//             <p className="text-gray-700 font-medium">{formStatus}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CareerForm;




import React from "react";

const ContactUsSection = ({
  title,
  subtitle,
  description,
  buttonText,
  highlightText,
  highlightGradient, // New prop for gradient colors of the highlighted text
  buttonGradientFrom, // New prop for button gradient start color
  buttonGradientTo, // New prop for button gradient end color
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] bg-white overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f8f8ff"
            fillOpacity="0.8"
            d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,149.3C672,160,768,128,864,133.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-bold text-gray-800 uppercase">{title}</h2>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          {subtitle}
        </h1>
        <p className="mt-4 text-gray-600">
          {description}{" "}
          <span
            className={`bg-clip-text text-transparent font-bold`}
            style={{
              backgroundImage: `linear-gradient(to right, ${highlightGradient.from}, ${highlightGradient.to})`,
            }}
          >
            {highlightText}
          </span>
        </p>
        <button
          className="px-6 py-3 mt-6 text-white rounded-full focus:outline-none focus:ring-2"
          style={{
            backgroundImage: `linear-gradient(to right, ${buttonGradientFrom}, ${buttonGradientTo})`,
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ContactUsSection;
