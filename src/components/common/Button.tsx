import Link from "next/link";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  rel?: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

function Button({ href, disabled, className, children, target, rel, onClick }: Props): JSX.Element {
  return href && !disabled ? (
    <Link className={className} href={href} rel={rel} target={target} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(Button);
