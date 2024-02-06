import Button from "@/app/molecules/Button";
import Input from "@/app/molecules/Input";
import React from "react";
import { MdOutgoingMail } from "react-icons/md";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <Input name="name" type="text" placeholder="Your name" />
        <Input name="email" type="email" placeholder="example@address.com" />
      </div>
      <Input name="subject" type="text" />
      <Input name="Project Description" type="textarea" placeholder="" />
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:gap-0">
        <Button hierarchy="primary">Send Message</Button>
        <p className="flex items-center gap-2 font-outfit text-asphalt/80 dark:text-gray-300">
          <MdOutgoingMail size={24} />
          <a href="mailto:nmark.raphael07@gmail.com">nmark.raphael@gmail.com</a>
        </p>
      </div>
    </form>
  );
};

export default Form;
