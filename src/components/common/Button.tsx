import Link from "next/link";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  rel?: string;
  target?: string;
};

function Button({ href, disabled, className, children, target, rel }: Props): JSX.Element {
  return href && !disabled ? (
    <Link className={className} href={href} rel={rel} target={target}>
      {children}
    </Link>
  ) : (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default memo(Button);
