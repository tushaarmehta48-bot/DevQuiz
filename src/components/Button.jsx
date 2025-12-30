import React from "react";
import { cn } from "../utils/cn";

const Button = ({ children, className, ...props }) => {
  return <button {...props} className={cn("px-4 py-2 rounded bg-blue-600 hover:bg-blue-500", className)}>{children}</button>;
};

export default Button;
