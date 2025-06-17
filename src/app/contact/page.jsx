"use client";

import FloatingSection from "@/components/Contact/FloatingSection";
import SliderCaurosal from "@/components/Home/SliderCaurosal";
import { WorldMapDemo } from "@/components/Home/WorldMapDemo";
import { useState } from "react";
import { FaCalendarAlt, FaExclamationCircle } from "react-icons/fa";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    designation: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState([]);

  const openCalendar = () => {
    window.open(
      "https://cal.com/gluckscare/30min?overlayCalendar=true",
      "_blank"
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = [];
    if (!formData.name) newErrors.push("Full name is required");
    if (!formData.email) newErrors.push("Email is required");
    if (!formData.mobile) newErrors.push("Mobile number is required");
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // You can send the form data via API here
    }
  };

return (
    <>
        <section className="relative app-container px-6 md:px-20 py-12 flex flex-col md:flex-row gap-10 mt-24 overflow-hidden">

{/* Background Image Layer */}
<div
  className="absolute inset-0 bg-cover bg-center opacity-30"
  style={{ backgroundImage: "url('/back.png')" }}
></div>

{/* Content Layer */}

            {/* LEFT */}
            <div className="md:w-1/2 mt-12 opacity-90">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                    Have a Query? <br /> 
                    <span className="text-[#C71D52]">Let's talk!</span>
                </h1>
                <ul className="space-y-4 text-md text-gray-800 mt-14">
                    <li className="flex items-center gap-2">
                        <span className="text-black">✅</span>
                        Your privacy is a top priority. We'll sign an NDA to ensure confidentiality.
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-black">✅</span>
                        Expect a prompt response with actionable insights within 24 hours.
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-black">✅</span>
                        Collaborate directly with experts in the pharmaceutical industry.
                    </li>
                </ul>

                <div className="mt-14">
                    <p className="text-lg font-semibold mb-2">Schedule a call:</p>
                    <div className="flex items-center gap-4 p-4 bg-white w-fit shadow-sm">
                        <img
                            src="/prashant.jpeg"
                            alt="Prashant Kumar"
                            className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                            <p className="font-bold text-sm">Prashant Kumar</p>
                            <p className="text-xs text-gray-500">Operation Manager</p>
                        </div>
                        <div
                            onClick={openCalendar}
                            className="cursor-pointer inline-block transition-transform hover:scale-105"
                        >
                            <div className="bg-[#C71D52] h-14 w-14 rounded-full flex items-center justify-center">
                                <FaCalendarAlt className="text-white text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <form
                onSubmit={handleSubmit}
                className="md:w-1/2 bg-white p-6 shadow-sm mb-10 rounded-sm  opacity-90"
            >
                {errors.length > 0 && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
                        <ul className="list-disc ml-5 space-y-1">
                            {errors.map((err, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <FaExclamationCircle className="text-red-600" />
                                    {err}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className={`border px-4 py-3 text-lg w-full ${
                            errors.includes("Full name is required")
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                    />
                    <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Organization Name"
                        className="border border-gray-300 px-4 py-3 text-lg w-full"
                    />
                    <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="Designation"
                        className="border border-gray-300 px-4 py-3 text-lg w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={`border px-4 py-3 text-lg w-full ${
                            errors.includes("Email is required")
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                    />
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className={`border px-4 py-3 text-lg w-full ${
                            errors.includes("Mobile number is required")
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                    />

                    <select className="border border-gray-300 px-3 py-3 text-lg w-full">
                        <option>How did you hear about us?</option>
                        <option>Google</option>
                        <option>Meta</option>
                        <option>LinkedIn</option>
                        <option>Referral</option>
                        <option>Newspaper</option>
                    </select>
                </div>

                <textarea
                    rows={1}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, and needs."
                    className="border border-gray-300 px-4 py-3 text-lg w-full mt-4"
                />

                <div className="flex flex-row justify-between items-start w-full">
                    <button
                        type="submit"
                        className="bg-[#C71D52] hover:bg-[#EFA100] text-white text-lg font-medium py-3 px-6 rounded-lg mt-6"
                    >
                        Send message
                    </button>

                    <div className="text-right mt-6">
                        <p className="text-lg text-gray-600">
                            Prefer email? <br />
                            <a
                                href="mailto:care@gluckscare.com"
                                className="underline hover:text-[#EFA100]"
                            >
                                care@gluckscare.com
                            </a>
                        </p>
                    </div>
                </div>
            </form>
        </section>

        <FloatingSection />
        <SliderCaurosal />
        <WorldMapDemo />
    </>
);
}
