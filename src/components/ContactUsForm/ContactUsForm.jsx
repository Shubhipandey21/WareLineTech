'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com'; // EmailJS import
import { useRouter } from 'next/navigation'; // Correct import for App Router

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });
    const router = useRouter(); // Initialize useRouter from next/navigation

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (data) => {
        try {
            const result = await emailjs.send(
                `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`, // Replace with your EmailJS Service ID
                `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`, // Replace with your EmailJS Template ID
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    company: data.company || "N/A",
                    email: data.email,
                    phone: data.phone,
                    message: data.message
                },
                `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}` // Replace with your EmailJS User ID
            );
            console.log(result.text); // For debugging
            console.log('Your message has been sent successfully!');
            router.push('/thankyou'); // Redirect to the thank you page
        } catch (error) {
            console.error(error);
            console.log('Failed to send the message. Please try again later.');
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto py-24 ">
            {/* Centered Left Section - Form */}
            <div className="flex flex-col items-center">
                <div className="w-full md:w-2/3 flex flex-col space-y-6 text-center">
                    <h1 className="text-black font-sans text-3xl md:text-5xl font-normal mb-10 leading-[1.2] tracking-[-1.2px]">
                        Let's co-create your<br />success story!
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Dynamic Input Component */}
                            {[{
                                name: "firstName", label: "First Name", type: "text", validation: { required: "First Name is required" }
                            },
                            {
                                name: "lastName", label: "Last Name", type: "text", validation: { required: "Last Name is required" }
                            },
                            {
                                name: "company", label: "Company", type: "text"
                            },
                            {
                                name: "email", label: "Email", type: "email", validation: {
                                    required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
                                }
                            },
                            {
                                name: "phone", label: "Phone Number", type: "tel", validation: { required: "Phone Number is required" }
                            }
                            ].map(({ name, label, type, validation }) => (
                                <div className="relative" key={name}>
                                    <input
                                        {...register(name, validation)}
                                        name={name}
                                        type={type}
                                        value={formData[name]}
                                        onChange={handleInputChange}
                                        className="peer h-16 border-gray-300 p-2 rounded-md w-full"
                                        placeholder=" "
                                    />
                                    {!formData[name] && (
                                        <label
                                            className="absolute left-2 top-4 text-gray-400 transition-all text-base peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-4 peer-not-placeholder-shown:opacity-0 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm"
                                        >
                                            {label}
                                        </label>
                                    )}
                                    <div className="w-3/4 border-b border-gray-300 mt-1"></div> {/* Short half gray line */}
                                    {errors[name] && <span className="text-red-500 text-sm">{errors[name].message}</span>}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-2">
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="peer min-h-[150px] border-gray-300 p-2 rounded-md w-full"
                                placeholder="How can we help you?"
                            />
                            {!formData.message && (
                                <label
                                    className="absolute left-2 top-4 text-gray-400 transition-all text-base peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-4 peer-not-placeholder-shown:opacity-0 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm"
                                >
                                </label>
                            )}
                            <div className="w-4/5 border-b border-gray-300 mt-1"></div> {/* Short half gray line */}
                            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                        </div>

                        <button type="submit" className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>

            {/* Horizontal Right Section - Contact Info */}
            <div className="mt-16 flex flex-wrap justify-between gap-8 px-4 text-center">
                <div className="w-full md:w-auto space-y-4">
                    <h3 className="text-lg font-bold">GET IN TOUCH</h3>
                    <div className="space-y-2">
                        <a href="mailto:sales@waretech.com" className="block text-gray-600 hover:text-gray-800">
                            Email us: sales@waretech.com
                        </a>
                        <a href="mailto:careers@waretech.com" className="block text-gray-600 hover:text-gray-800">
                            Join us: careers@waretech.com
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-auto space-y-4">
                    <h3 className="text-lg font-bold">INDIA</h3>
                    <div className="space-y-2 text-gray-600">
                        <p>Wareline Technologies, 4th Floor,</p>
                        <p>Plot No. - D-176, Phase 8 B, Industrial Area,</p>
                        <p>Sector 74, Mohali, Punjab, 140501</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
