import Link from "next/link";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  href?: string;
  rel?: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

function Button({
  children,
  ariaLabel,
  className,
  disabled,
  href,
  rel,
  target,
  onClick,
}: Props): JSX.Element {
  return href && !disabled ? (
    <Link className={className} href={href} rel={rel} target={target} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button aria-label={ariaLabel} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(Button);
