import React from "react";

type ButtonProps = {
  onClick: () => void;
  name: string;
  label: string;
  variant: "primary" | "rainbow" | "nsfw" | "dark";
};

export function Button({ onClick, name, label, variant }: ButtonProps) {
  // Define the base classes for the button
  const baseClasses =
    "p-4 text-white cursor-pointer tracking-tight rounded-lg max-w-[250px] text-lg text-center flex justify-center items-center h-12";

  // Define the variant-specific classes
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600",
    rainbow: "bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500",
    nsfw: "bg-gradient-to-r from-red-500 to-orange-500",
    dark: "bg-gradient-to-r from-slate-900 to-slate-700",
  };

  // Apply the variant-specific classes dynamically
  const buttonClasses = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <div className={buttonClasses} onClick={onClick} aria-label={name}>
      {label}
    </div>
  );
}
