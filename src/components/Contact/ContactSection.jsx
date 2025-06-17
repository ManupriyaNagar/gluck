import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="bg-white text-black px-6 py-20 md:px-20">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Heading + CTA */}
        <div className="w-full lg:w-3/4 md:2/3">
  <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
    Got a Query in mind? <br /> Let&apos;s talk.
  </h2>
</div>


        <div className="flex justify-start lg:justify-end w-full">
          <button
            onClick={() =>
              window.open(
                "https://cal.com/gluckscare/30min?overlayCalendar=true",
                "_blank"
              )
            }
            className="bg-[#C71D52] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#EFA100] transition"
          >
            Book a call <FiArrowUpRight className="text-lg" />
          </button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-200 pt-12">
        {/* Bangladesh */}
        <div>
          <h4 className="font-semibold mb-3">Bangladesh</h4>
          <div className="flex items-center gap-2 text-sm mb-1">
            <FiMail /> <a href="mailto:care@gluckscare.com" className="font-semibold">care@gluckscare.com</a>
          </div>
          {/* <div className="flex items-center gap-2 text-sm mb-2">
            <FiPhone /> <a href="https://wa.me/8801785087148" target="_blank" className="underline">+91 99316 44865</a>
          </div> */}
          <p className="text-sm">
            Oriental Gofur Tower, <br />
            88/KA Mohammadpur, Dhaka, Bangladesh.
          </p>
        </div>

        {/* Indonesia */}
        <div>
          <h4 className="font-semibold mb-3">Indonesia</h4>
          <div className="flex items-center gap-2 text-sm mb-1">
            <FiMail /> <a href="mailto:care@gluckscare.com" className="font-semibold">care@gluckscare.com</a>
          </div>
          {/* <div className="flex items-center gap-2 text-sm mb-2">
            <FiPhone /> <a href="https://wa.me/9931644865" target="_blank" className="underline">+91 99316 44865</a>
          </div> */}
          <p className="text-sm">
            Podomoro Park, <br />
            Padmagriya 15/6 Bandung, Indonesia.
          </p>
        </div>

        {/* USA */}
        <div>
          <h4 className="font-semibold mb-3">USA</h4>
          <div className="flex items-center gap-2 text-sm mb-1">
            <FiMail /> <a href="mailto:care@gluckscare.com" className="font-semibold">care@gluckscare.com</a>
          </div>
          {/* <div className="flex items-center gap-2 text-sm mb-2">
            <FiPhone /> <a href="https://wa.me/14705043155" target="_blank" className="underline">+91 99316 44865</a>
          </div> */}
          <p className="text-sm">
            75 E 3rd St <br />
            Sheridan, WY 82801, USA.
          </p>
        </div>

        {/* Business Inquiry & Career */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-1">Business Inquiry</h4>
            <div className="flex items-center gap-2 text-sm">
              <FiMail /> <a href="mailto:care@gluckscare.com">care@gluckscare.com</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Career</h4>
            <p className="text-sm mb-1">Join Us</p>
            <div className="flex items-center gap-2 text-sm">
              <FiMail /> <a href="mailto:career@wavespace.agency">career@wavespace.agency</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
