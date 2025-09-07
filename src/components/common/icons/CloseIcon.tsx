import { type SVGProps, forwardRef } from "react";

export const CloseIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  function CloseIcon(props, ref) {
    return (
      <svg
        ref={ref}
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M6 18L18 6M6 6l12 12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    );
  }
);
