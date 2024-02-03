import Form from "@/app/components/Form";
import Badge from "@/app/molecules/Badge";
import Bar from "@/app/molecules/Bar";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import React from "react";

const Contact = () => {
  return (
    <CustomContainer>
      <div className="mx-auto w-full space-y-2 lg:w-3/4">
        <Badge text="Contact" />
        <CustomText type="heading">
          {" "}
          With <span className="text-amber-500 underline">
            great ideas
          </span>{" "}
          come great websites. Let&apos;s build something amazing together!
        </CustomText>
      </div>
      <div className="mx-auto w-full lg:w-3/4">
        <Form></Form>
      </div>
    </CustomContainer>
  );
};

export default Contact;
