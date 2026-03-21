import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Button from "./Button";
motion;

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [cooldown, setCooldown] = useState(false);
  const COOLDOWN_MS = 20000; // 20 seconds cooldown

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot field check
    if (form.current.company.value) {
      return; // Honeypot field filled, likely a bot
    }

    setStatus("sending");
    setCooldown(true);

    // Start cooldown timer
    setTimeout(() => {
      setCooldown(false);
    }, COOLDOWN_MS);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("Email sent successfully");
          setStatus("success");
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          setStatus("error");
        },
      );
  };

  return (
    <section
      id="Contact"
      className="w-full bg-(--color-bg-gray) overflow-hidden"
    >
      <div className="max-w-6xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
        <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl font-medium">
          Any Questions? 
        </h2>
      
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-10 mx-auto max-w-xl lg:max-w-none lg:w-full ">
          {/* LEFT TEXT */}
          <div className="flex flex-col text-left text-black mt-28">
            <div className="font-light sm:text-xl mb-2">

              <p className="mb-2">Fill out the application and we will contact you in a way convenient for you.</p>

              <br/>              
              
              <p className="mb-2">Email: info@homesforsapiens.com</p>

              <p className="mb-2">Phone: 07400049497</p>
            </div>
          </div>

          {/* RIGHT FORM */}

          {/* Successful message */}
          <div className="lg:w-1/2 min-h-[200px] sm:min-h-[520px] flex items-center">
            {status === "success" ? ( // if status = success
              // SHOW this message
              <div className="bg-white rounded-2xl p-12 text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  Thank you!
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Your message has been sent successfully. Out team will get
                  back to you shortly.
                </p>
                <p className="text-sm text-gray-500">
                  We usually respond within 24 hours.
                </p>
              </div>
            ) : (
              // SHOW this form is status != success

              /* FORM STARTS HERE */
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-white rounded-2xl p-3 sm:p-6 space-y-4"
              >
                {/* NAME INPUT */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-left">
                    <label className="block text-base font-medium mb-1">
                      First Name
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 focus:outline-none focus:ring focus:ring-green-500"
                      type="text"
                      name="first_name"
                      placeholder="Your first name"
                      maxLength={80}
                      required
                    />
                  </div>

                  <div className="text-left">
                    <label className="block text-base font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 focus:outline-none focus:ring focus:ring-green-500"
                      type="text"
                      name="last_name"
                      placeholder="Your last name"
                      maxLength={80}
                      required
                    />
                  </div>
                </div>

                {/* EMAIL INPUT */}
                <div className="w-full text-left">
                  <label className="block text-base font-medium mb-1">
                    Email
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 focus:outline-none focus:ring focus:ring-green-500"
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                    maxLength={120}
                    required
                  />
                </div>

                {/* PHONE NUMBER INPUT */}
                {/* <div className="w-full text-left">
                  <label className="block text-base sm:text-xl font-medium mb-1">
                    Phone
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 focus:outline-none focus:ring focus:ring-green-500"
                    type="tel"
                    name="user_phone"
                    placeholder="+44 or 07..."
                    pattern="^(\+44|44|0)7\d{9}$"
                    title="Enter a valid UK phone number"
                    maxLength={20}
                  />
                </div> */}

                {/* MESSAGE INPUT */}
                <div className="my-6 text-left">
                  <label className="block text-base font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full  border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:ring focus:ring-green-500"
                    name="message"
                    placeholder="Message"
                    maxLength={1200}
                    required
                  ></textarea>
                </div>

                {/* Honeypot  */}
                <input
                  type="text"
                  name="company"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />
                {/* End of Honeypot  */}

                {/* Tick to agree to be contacted  */}
                <div className="space-y-2 text-base ml-1">
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      className="mt-1 mr-2 transform scale-150"
                      required
                    />
                    <span className="pr-2">
                      By submitting this form, you agree to be contacted
                      regarding your enquiry. Your details will not be shared. Check <a href="/privacypolicy" className="hover:underline">
                 Privacy Policy
              </a>
                    </span>
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300
                  ${
                    status === "sending" || cooldown
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-(--color-button-primary) hover:bg-(--color-button-primary-hover)"
                  }`}
                >
                  Send Message
                </button>

                {status === "error" && (
                  <p className="text-red-600 font-semibold">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default ContactForm