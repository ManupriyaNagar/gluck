import { FiArrowUpRight } from "react-icons/fi";

export default function DeliverySection() {
  return (
    <section className="bg-[#C71D52] min-h-screen text-white px-6 py-20 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        {/* Left: Heading + List */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We deliver on time, in days and weeks <br />
            <span className="text-gray-700 font-normal">—not months.</span>
          </h2>

          <div className="mt-12 space-y-4">
            {[
              { number: "01", text: "Onboard within 1 Day" },
              { number: "02", text: "In-Depth Market Analysis & Strategy Development" },
              { number: "03", text: "nitial Campaign Concepts Delivered in 4–5 Days" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] px-6 py-5 flex justify-between items-center rounded-md"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 font-mono">{item.number}</span>
                  <span className="text-white">{item.text}</span>
                </div>
                <FiArrowUpRight className="text-white text-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Testimonial + Button */}
        <div className="flex-1 max-w-md">
          <p className="text-white text-lg mb-4">
            “Gluckscare Pharmaceuticals provided exceptional marketing and branding expertise, blending industry knowledge with strategic insights. Our team of experts delivered actionable solutions that truly elevated our brand. Highly recommended.”
          </p>
          <div className="flex items-center gap-3 mb-8">
            <img
              src="/matt-kabus.jpg" // Replace with your actual image path
              alt="Rajat Jha"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Rajat Jha</p>
              <p className="text-sm text-gray-400">CEO & Founder @ Gluckscare Pharmaceuticals</p>
            </div>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://cal.com/gluckscare/30min?overlayCalendar=true",
                "_blank"
              )
            }
            className="bg-[#EFA100] text-black font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:brightness-90 transition"
          >
            Book a call <FiArrowUpRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
