import CustomContainer from "@/app/molecules/CustomContainer";
import CustomImage from "@/app/molecules/CustomImage";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";

interface ImageModalProps {
  src: string;
  onClose?: () => void;
}

const ImageModal = ({ src, onClose }: ImageModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed left-0 top-0 h-full w-full bg-gray-200/50 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform p-0 shadow-lg lg:w-2/3"
      >
        <button className="absolute right-4 top-4" onClick={onClose}>
          <IoCloseCircle className=" stroke-white text-amber-500 " size={30} />
        </button>
        <CustomImage
          src={src}
          alt={src}
          width={1000}
          height={1000}
        ></CustomImage>
      </div>
    </motion.div>
  );
};

export default ImageModal;
