import React, { PropsWithChildren } from "react";

const Container = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>) => {
  return (
    <section
      className={`max-w-[1000px] m-auto bg-slate-50 p-5 rounded-sm shadow-md ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Container;
