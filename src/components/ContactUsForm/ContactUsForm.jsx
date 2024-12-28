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
                'myth', // Replace with your EmailJS Service ID
                'template_yq9t9a2', // Replace with your EmailJS Template ID
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    company: data.company || "N/A",
                    email: data.email,
                    phone: data.phone,
                    message: data.message
                },
                'tZxQ2uZY_Jj2DYBWm' // Replace with your EmailJS User ID
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
        <div className="w-full max-w-7xl mx-auto py-24 flex flex-col md:flex-row gap-8 px-4">
            {/* Left Section - Form */}
            <div className="w-full md:w-2/3 flex flex-col space-y-6">
                <h1 className="text-black font-sans text-3xl md:text-5xl font-normal mb-10 leading-[1.2] tracking[-1.2px]">
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

            {/* Right Section - Contact Info */}
            <div className="w-full md:w-1/3 px-4 space-y-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
                    <div className="space-y-2">
                        <a href="mailto:sales@waretech.com" className="block text-gray-600 hover:text-gray-800">
                            Email us: sales@waretech.com
                        </a>
                        <a href="mailto:careers@waretech.com" className="block text-gray-600 hover:text-gray-800">
                            Join us: careers@waretech.com
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">USA</h3>
                    <div className="space-y-2 text-gray-600">
                        <p>123456 Roadside Dr, ABC 123,</p>
                        <p>Agoura Hills, New York 123456</p>
                        <a href="tel:+18183180727" className="block hover:text-gray-800">
                            +1 (818) 9090909090
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">INDIA</h3>
                    <div className="space-y-2 text-gray-600">
                        <p>Floor 77, Tower CC, Noida TwoTwo,</p>
                        <p>Sector 62, Noida, Delhi-NCR 201309</p>
                        <a href="tel:+9190909090" className="block hover:text-gray-800">
                            +91 9090909090
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;