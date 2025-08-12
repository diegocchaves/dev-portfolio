"use client";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [resultMessage, setResultMessage] = useState("");
  const [resultColor, setResultColor] = useState("text-gray-500");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    // Botcheck: If the field is filled, treat as bot/spam
    if (formData.get("botcheck")) {
      setResultMessage("Bot submission detected.");
      setResultColor("text-red-500");
      return;
    }

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    const json = JSON.stringify(object);

    setResultMessage("Please wait...");
    setResultColor("text-gray-500");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResultMessage(data.message);
        setResultColor("text-green-500");
      } else {
        setResultMessage(data.message);
        setResultColor("text-red-500");
      }
    } catch (error) {
      console.error(error);
      setResultMessage("Something went wrong!");
      setResultColor("text-red-500");
    }

    form.reset();
    setTimeout(() => setResultMessage(""), 5000);
  };

  return (
    <section
      name="contact"
      className="flex flex-col items-center justify-center p-4 py-16 text-[#002230] bg-[#F5F9FA] dark:text-gray-300 dark:bg-black md:py-36"
    >
      <div className="flex flex-col text-center md:py-10">
        <p className="inline text-lg font-bold md:text-xl">[ Contact ]</p>
        <p className="py-6 text-[15px] md:text-lg">
          //Submit the form below or shoot me an email -
          diegocchaves21@gmail.com
        </p>
      </div>

      {/* Form at the Right Side */}
      <form
        className="flex flex-col max-w-[600px] w-full border border-gray-700 shadow-lg shadow-gray-300 dark:shadow-none p-4 md:p-8 rounded-lg text-sm dark:bg-[#1e283572] bg-white  "
        ref={formRef}
        onSubmit={handleSubmit}
        id="form"
        autoComplete="off"
      >
        <input
          type="hidden"
          name="access_key"
          value="1d8d766a-8288-4204-a070-685ed55f744c"
        />
        <input
          type="hidden"
          name="subject"
          value="New Submission from Micro Actions Form"
        />
        <input type="checkbox" name="botcheck" className="hidden" />
        <input
          type="hidden"
          name="from_name"
          value="Micro Actions Form"
        ></input>

        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
            autoFocus
            className="w-full px-3 py-2 text-black placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-[#298E9E]"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm custom-placeholder-color"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@company.com"
            required
            autoFocus
            className="w-full px-3 py-2 text-black placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-[#298E9E]"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm">
            Your Message
          </label>
          <textarea
            rows={5}
            name="message"
            id="message"
            placeholder="Your Message"
            className="w-full px-3 py-2 text-black placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-[#298E9E]"
          ></textarea>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-3 py-4 bg-[#298E9E] text-white cursor-pointer rounded-md dark:text-white dark:hover:bg-gray-200 group hover:bg-gray-900 hover:border-gray-50 hover:text-white dark:hover:text-black transition-colors duration-300 flex items-center justify-center"
          >
            Send Message
          </button>
          {resultMessage && (
            <p
              id="result"
              className={`flex items-center mt-4 text-sm ${resultColor} `}
            >
              {resultMessage}
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;

// import React from "react";
// import { useRef, useState } from "react";

// const Contatc = () => {
//   const formRef = useRef(null);
//   const [resultMessage, setResultMessage] = useState("");
//   const [resultColor, setResultColor] = useState("text-gray-500");

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = formRef.current;
//     if (!form) return;

//     const formData = new FormData(form);

//     // Botcheck: If the field is filled, treat as bot/spam
//     if (formData.get("botcheck")) {
//       setResultMessage("Bot submission detected.");
//       setResultColor("text-red-500");
//       return;
//     }

//     const object = {};
//     formData.forEach((value, key) => {
//       object[key] = value;
//     });

//     const json = JSON.stringify(object);

//     setResultMessage("Please wait...");
//     setResultColor("text-gray-500");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       });

//       const data = await response.json();

//       if (response.status === 200) {
//         setResultMessage(data.message);
//         setResultColor("text-green-500");
//       } else {
//         setResultMessage(data.message);
//         setResultColor("text-red-500");
//       }
//     } catch (error) {
//       console.error(error);
//       setResultMessage("Something went wrong!");
//       setResultColor("text-red-500");
//     }

//     form.reset();
//     setTimeout(() => setResultMessage(""), 5000);
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);
//     // Send the form data to the server
//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//     }
//   };

//   return (
//     <div
//       name="contact"
//       className="flex flex-col items-center justify-center p-4 py-16 text-[#002230] bg-[#F5F9FA] dark:text-gray-300 dark:bg-black md:py-36"
//     >
//       <div className="flex flex-col text-center md:py-10 ">
//         <p className="inline text-lg font-bold md:text-xl">[ Contact ]</p>
//         <p className="py-6 text-[15px] md:text-lg">
//           //Submit the form below or shoot me an email -
//           diegocchaves21@gmail.com
//         </p>
//       </div>
//       <form
//         className="flex flex-col max-w-[600px] w-full border border-gray-700 shadow-lg shadow-gray-300 dark:shadow-none p-4 md:p-8 rounded-lg text-sm dark:bg-transparent bg-white  "
//         onSubmit={onSubmit}
//         autoComplete="off"
//       >
//         <input
//           className="p-2 text-gray-800 border border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 "
//           type="text"
//           placeholder="Name"
//           name="name"
//           required
//           autoComplete="name"
//           autoFocus
//         />
//         <input
//           className="p-2 my-4 border border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800"
//           type="email"
//           placeholder="Email"
//           name="email"
//           required
//           autoComplete="name"
//           autoFocus
//         />
//         <textarea
//           className="p-2 border border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800"
//           name="massage"
//           rows="10"
//           placeholder="Message"
//           required
//           autoComplete="name"
//           autoFocus
//         ></textarea>
//         <button
//           type="submit"
//           className="flex items-center px-4 py-3 mx-auto my-8 text-white rounded-md bg-[#298E9E] dark:text-black dark:bg-white dark:hover:bg-gray-200 group hover:bg-gray-900 hover:border-gray-50 hover:text-white"
//         >
//           Let's Collaborate
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contatc;
