import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Collaborate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("submitting");
    e.target.submit();
  };

  return (
    <div className="p-4 max-w-[1300px] bg-background mx-auto font-poppins my-6 md:my-32">
      <div className="md:mx-10 lg:flex justify-center gap-20">
        <div className="flex flex-col uppercase font-steelfish py-4 lg:w-[47%] lg:text-right">
          <p className="text-text font-poppins md:text-[18px]">Collaborate</p>
          <div className="text-[60px] lg:text-[90px] font-bold text-primary leading-tight">
            <h2>Want to work </h2>
            <h2 className="text-accentSecondary">with us? Leave us</h2>
            <h2>a message!</h2>
          </div>
          <div className="flex gap-4 mb-6 mt-2 lg:justify-end">
            <FaFacebookF size={20} color="#454543" className="cursor-pointer" />
            <FaInstagram size={20} color="#454543" className="cursor-pointer" />
            <FaTiktok size={20} color="#454543" className="cursor-pointer" />
            <FaXTwitter size={20} color="#454543" className="cursor-pointer" />
            <FaYoutube size={20} color="#454543" className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-10 lg:w-[47%]">
          <form
            action="https://formsubmit.co/acb984c9b768ab2d589aed672a34cb98"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_subject"
              value="New Collaboration Request!"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="http://localhost:5173/" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full border p-4 outline-none focus:border-primary disabled:opacity-50"
              required
              disabled={isSubmitting}
            ></textarea>
            <div className="lg:flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border p-4 mt-2 outline-none focus:border-primary disabled:opacity-50"
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border p-4 mt-2 outline-none focus:border-primary disabled:opacity-50"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border p-4 mt-2 lg:mt-4 bg-primary text-white uppercase disabled:opacity-50 hover:bg-primary/90"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            {submitStatus === "submitting" && (
              <p className=" hidden mt-4 text-primary">
                Sending your message...
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
