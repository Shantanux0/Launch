import React from "react";
import { Toaster as Sonner, toast } from "sonner";

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-white text-ly-black border-gray-200 shadow-xl rounded-2xl font-gilroy",
          description: "text-ly-gray",
          actionButton:
            "bg-ly-black text-white rounded-full font-gilroy",
          cancelButton:
            "bg-gray-100 text-ly-gray rounded-full font-gilroy",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };

