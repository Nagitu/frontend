import React, { useRef } from "react";
import { useOptimistic } from "react";

// Fungsi pengiriman data ke API
const deliverMessage = async (formData: FormData): Promise<string> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const response = await fetch("https://backend-portofolio-tau.vercel.app/api/contact", requestOptions);
  if (!response.ok) {
    throw new Error("Failed to send message");
  }
  console.log(response);
  

  return formData.get("message") as string;
};

// Tipe untuk pesan
interface Message {
  text: string;
  sending: boolean;
}

const ContactMe: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[], string>(
    [],
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  // Fungsi untuk menangani submit form
  const formAction = async (formData: FormData) => {
    const message = formData.get("message") as string;
    addOptimisticMessage(message);
    formRef.current?.reset();

    try {
      await sendMessage(formData);
      // Setelah pesan berhasil dikirim, ubah status 'sending' menjadi false
      updateMessageStatus(message, false);
    } catch (error) {
      console.error("Failed to send message:", error);
      // Jika terjadi kesalahan, kamu bisa mengatur penanganan error di sini
    }
  };

  const updateMessageStatus = (messageText: string, sending: boolean) => {
    // Perbarui status pengiriman pesan
    optimisticMessages.forEach((msg) => {
      if (msg.text === messageText && msg.sending) {
        msg.sending = sending;
      }
    });
  };

  const sendMessage = async (formData: FormData) => {
    await deliverMessage(formData);
  };

  return (
    <div className="mx-10 flex flex-col md:flex-row h-full">
      {/* Left Section (Contact Me Text) */}
      <div className="w-full md:w-1/2 text-gray-500 flex flex-col justify-center items-center p-4 md:p-8">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="w-1/2 text-md md:text-lg">
          I&apos;d love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
        </p>
      </div>

      {/* Right Section (Contact Form) */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <form
          className="w-full max-w-sm text-gray-500"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            formAction(formData);
          }}
          ref={formRef}
        >
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows={3}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Display Optimistic Messages */}
      <div className="w-full md:w-1/2 mt-4">
        {optimisticMessages.map((message, index) => (
          <div key={index} className="text-gray-700 text-6xl">
            {message.text}
            {message.sending && <small> (Sending...)</small>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
