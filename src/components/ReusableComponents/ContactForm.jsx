import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/LanguageContext";


const ContactForm = () => {

  const { t } = useLanguage();
  const content = t.contactForm;

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
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <h2 className="text-(--color-text-dark) text-2xl sm:text-4xl lg:text-5xl  mb-5">
          {content.title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 mx-auto max-w-xl lg:max-w-none lg:w-full ">
          {/* LEFT TEXT */}
          <div className="flex flex-col text-left text-black mt-5 lg:mt-28">
            <div className="text-base sm:text-xl mb-2 text-gray-700 leading-relaxed">
              <p className="mb-2">
                 {content.paragraph}
              </p>

              <br />

              <p className="mb-2">{content.emailAddress}</p>

              <p className="mb-2">{content.phone}</p>
            </div>
          </div>

          {/* RIGHT FORM */}

          {/* Successful message */}
          <div className="lg:w-1/2 min-h-50 sm:min-h-130 flex items-center">
            {status === "success" ? ( // if status = success
              // SHOW this message
              <div className="bg-white rounded-2xl p-12 text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  {content.respondMessage.text1}
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  {content.respondMessage.text2}
                </p>
                <p className="text-sm text-gray-500">
                  {content.respondMessage.text3}
                </p>
              </div>
            ) : (
              // SHOW this form is status != success

              /* FORM STARTS HERE */
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-(--color-bg-gray) rounded-2xl p-3 sm:p-6 space-y-4"
              >
                {/* NAME INPUT */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-left">
                    <label className="block text-xl text-gray-700 font-medium mb-1">
                      {content.formFirstName}
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 focus:outline-none focus:ring focus:ring-green-500"
                      type="text"
                      name="first_name"
                      placeholder={content.formFirstNamePlaceholder}
                      maxLength={80}
                      required
                    />
                  </div>

                  <div className="text-left">
                    <label className="block text-xl text-gray-700 font-medium mb-1">
                      {content.formLastName}
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 focus:outline-none focus:ring focus:ring-green-500"
                      type="text"
                      name="last_name"
                      placeholder={content.formLastNamePlaceholder}
                      maxLength={80}
                      required
                    />
                  </div>
                </div>

                {/* EMAIL INPUT */}
                <div className="w-full text-left">
                  <label className="block text-xl text-gray-700 font-medium mb-1">
                    {content.formEmail}
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 focus:outline-none focus:ring focus:ring-green-500"
                    type="email"
                    name="user_email"
                    placeholder={content.formEmailPlaceholder}
                    maxLength={120}
                    required
                  />
                </div>

                {/* MESSAGE INPUT */}
                <div className="my-6 text-left">
                  <label className="block text-xl text-gray-700 font-medium mb-1">
                    {content.formMessage}
                  </label>
                  <textarea
                    className="w-full  border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:ring focus:ring-green-500"
                    name="message"
                    placeholder={content.formMessage}
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
                       {content.formtTickBoxText}{" "}
                      <a href="/privacy-policy" className="hover:underline">
                        {content.formPolicyButton}
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
                  {content.formButton}
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
      </div>
    </section>
  );
};

export default ContactForm;
