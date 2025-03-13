import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Loader } from "lucide-react";

const ContactUsWithWhatsApp: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{
    message: string;
    error: boolean;
  } | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    if (formRef.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
          "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
          formRef.current,
          "YOUR_USER_ID" // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            setStatus({ message: "ההודעה נשלחה בהצלחה!", error: false });
            setSending(false);
            formRef.current?.reset();
          },
          (error) => {
            console.error("Error sending email:", error.text);
            setStatus({
              message: "ארעה שגיאה, נסה שוב מאוחר יותר.",
              error: true,
            });
            setSending(false);
          }
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white" dir="rtl">
      {/* Contact Form Section */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">צור קשר</h2>
        <p className="mb-6 text-gray-600 text-center">
          נשמח לשמוע ממך. מלא את הפרטים ואנחנו ניצור איתך קשר בהקדם.
        </p>
        <form ref={formRef} onSubmit={sendEmail} className="w-full max-w-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              שם:
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="הכנס את שמך"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              אימייל:
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="הכנס את האימייל שלך"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              הודעה:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="כתוב הודעה..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition resize-y"
            ></textarea>
          </div>
          {status && (
            <div
              className={`mb-4 text-center text-sm font-semibold ${
                status.error ? "text-red-600" : "text-blue-600"
              }`}
            >
              {status.message}
            </div>
          )}
          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? (
              <>
                <Loader className="animate-spin" size={20} />
                <span>שולח...</span>
              </>
            ) : (
              <span>שלח</span>
            )}
          </button>
        </form>
      </div>
      {/* WhatsApp Section with Conditional Diagonal Divider */}
      <div
        className="md:w-1/2 flex flex-col justify-center items-center p-8 bg-blue-50 relative"
        style={{
          clipPath: isMobile
            ? "none"
            : "none",
        }}
      >
        <div className="mb-4">
          {/* Replace with your WhatsApp logo */}
          <img
            src="/whatsapp-logo.png"
            alt="WhatsApp Logo"
            className="w-16 h-16"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">WhatsApp</h2>
        <p className="mb-6 text-gray-600 text-center">
          פנה אלינו דרך WhatsApp לקבלת תשובות מהירות לכל שאלה.
        </p>
        <a
          href="https://wa.me/050-76080617"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition"
        >
          פתח WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactUsWithWhatsApp;
