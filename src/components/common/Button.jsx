import React from "react";

export default function Button({ children, href, variant = "primary", className = "", ...props }) {
  const cls = `btn btn-${variant} ${className}`;
  if (href) return <a className={cls} href={href} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}