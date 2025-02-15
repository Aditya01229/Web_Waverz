import { Globe, Mail, Phone, User, CheckCircle, Loader } from "lucide-react";
import { useState } from "react";

interface ContactUsProps {
  onClose: () => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
    customDomain: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);  // Added loading state
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Added error message state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDomain = e.target.value;
    setFormData({
      ...formData,
      domain: selectedDomain,
      customDomain: selectedDomain === "Other" ? "" : formData.customDomain,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if any field is empty
    const { name, email, phone, domain, message } = formData;
    if (!name || !email || !phone || !domain || !message) {
      setErrorMessage("Whoa there, surfer! Fill in all the fields before you catch the wave! 🏄‍♂️");
      return; // Prevent sending request if fields are empty
    }

    // Clear any previous error message
    setErrorMessage(null);
    setLoading(true);  // Set loading to true while submitting

    try {
      const response = await fetch("https://www.webwaverz.tech/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Web Waverz has caught your details in the tide! We'll be surfing your way soon! 🌊🤙");
        setFormData({
          name: "",
          email: "",
          phone: "",
          domain: "",
          customDomain: "",
          message: "",
        });

        setTimeout(() => {
          setSuccessMessage(null);
          onClose(); // Close after showing success message
        }, 5000);
      } else {
        setSuccessMessage("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);  // Set loading to false after submission
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-3xl shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black text-center w-full">
            Get in Touch
          </h2>
        </div>

        {errorMessage && (
          <div className="text-center text-red-500 font-semibold mb-4">
            {errorMessage}
          </div>
        )}

        {successMessage ? (
          <div className="flex flex-col items-center p-4">
            <CheckCircle className="text-green-500 mb-2" size={40} />
            <p className="text-center text-gray-700">{successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex items-center border rounded-2xl p-2">
              <User className="text-gray-600 mr-2" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full outline-none text-gray-600"
              />
            </div>

            <div className="flex items-center border rounded-2xl p-2">
              <Mail className="text-gray-600 mr-2" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full outline-none text-gray-600"
              />
            </div>

            <div className="flex items-center border rounded-2xl p-2">
              <Phone className="text-gray-600 mr-2" size={20} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full outline-none text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center border rounded-2xl p-2 bg-white">
                <Globe className="text-gray-600 mr-2" size={20} />
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleDomainChange}
                  required
                  className="w-full outline-none bg-white text-gray-600 appearance-none"
                >
                  <option value="" disabled hidden style={{ color: "gray" }}>
                    Select Your Domain
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="E-Commerce Development">
                    E-Commerce Development
                  </option>
                  <option value="Web Hosting & Maintenance">
                    Web Hosting & Maintenance
                  </option>
                  <option value="WordPress Development">
                    WordPress Development
                  </option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="SEO & Marketing">SEO & Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.domain === "Other" && (
                <input
                  type="text"
                  name="customDomain"
                  placeholder="Enter Your Domain"
                  value={formData.customDomain}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md bg-white text-gray-600 outline-none"
                />
              )}
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-2xl h-24 text-gray-600 outline-none"
            />

            <div className="mt-4 p-3 bg-gray-100 rounded-xl text-black text-sm md:text-base shadow-inner">
              <p className="font-semibold">Prefer a direct call?</p>
              <p className="mt-1">Reach out to us directly:</p>
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href="tel:+919075571005"
                  className="flex items-center gap-2 text-sky-500 hover:text-blue-600"
                >
                  <Phone size={16} className="text-green-600" />
                  <span className="font-medium">Aditya - 9075571005</span>
                </a>
                <a
                  href="tel:+917028228014"
                  className="flex items-center gap-2 text-sky-500 hover:text-blue-600"
                >
                  <Phone size={16} className="text-green-600" />
                  <span className="font-medium">Om - 7028228014</span>
                </a>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading} // Disable the button while loading
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center"
              >
                {loading ? (
                  <Loader className="animate-spin text-white" size={16} />
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
