"use client";

import Button from "@/app/molecules/Button";
import Input from "@/app/molecules/Input";
import React, { useEffect, useRef, useState } from "react";
import { MdOutgoingMail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { BiSolidCommentError } from "react-icons/bi";
import { FaPaperPlane } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [resultMessage, setResultMessage] = useState<string>("");
  const [resultStatus, setResultStatus] = useState<"success" | "error" | "">(
    "",
  );
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
          },
        )
        .then(
          () => {
            setResultMessage(
              "Your message has been sent successfully. I'll review it and get back to you shortly.",
            );
            setResultStatus("success");

            setTimeout(() => {
              handleClearMessage();
            }, 10000);
          },
          (error) => {
            setResultMessage("Failed to send message. Please try again later.");
            setResultStatus("error");
          },
        )
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleClearMessage = () => {
    setResultMessage("");
    setResultStatus("");
    setFormData({
      name: "",
      email: "",
      subject: "",
      projectDescription: "",
    });
  };

  useEffect(() => {
    if (resultMessage !== "" || loading) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [resultMessage, loading]);

  return (
    <AnimatePresence>
      <form
        className="relative flex flex-col gap-4"
        onSubmit={handleSubmit}
        ref={form}
      >
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          <Input
            name="name"
            type="text"
            label="Name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="example@address.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <Input
          name="subject"
          label="Subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
        />
        <Input
          name="projectDescription"
          label="Project Description"
          type="textarea"
          placeholder=""
          value={formData.projectDescription}
          onChange={handleChange}
        />
        <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:gap-0">
          <Button hierarchy="primary" type="submit">
            Send Message
          </Button>
          <p className="flex items-center gap-2 font-outfit text-asphalt/80 dark:text-gray-300">
            <MdOutgoingMail size={24} />
            <a href="mailto:nmark.raphael07@gmail.com">
              nmark.raphael@gmail.com
            </a>
          </p>
        </div>
        {resultMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-0 left-0 z-10 flex h-full w-full items-center backdrop-blur-sm"
          >
            <div
              className={twMerge(
                "mx-auto w-96 gap-4 space-y-6 rounded-lg border  bg-white p-6 font-outfit text-lg",
                resultStatus === "success"
                  ? "border-amber-500"
                  : "border-asphalt",
              )}
            >
              {resultStatus === "success" ? (
                <FaPaperPlane
                  size={36}
                  className="fill-current text-amber-500"
                />
              ) : (
                <BiSolidCommentError size={45} />
              )}
              <p>{resultMessage}</p>
              <div className="">
                {resultStatus === "success" ? (
                  <Button
                    hierarchy="primary"
                    className="text-sm"
                    onClick={handleClearMessage}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    hierarchy="secondary"
                    className="text-sm"
                    onClick={handleClearMessage}
                  >
                    Try Again
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
        {loading && (
          <motion.div
            className="fixed bottom-0 left-0 z-10 flex h-full w-full items-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="loader"></span>
          </motion.div>
        )}
      </form>
    </AnimatePresence>
  );
};

export default Form;
