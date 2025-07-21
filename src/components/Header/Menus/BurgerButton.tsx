import { memo } from "react";

import { BurgerIcon } from "components/common/BurgerIcon";
import { CloseIcon } from "components/common/CloseIcon";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

function BurgerButton({ isOpen, onClick }: Props): JSX.Element {
  return (
    <button
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="rounded-lg p-2 text-black transition-colors hover:bg-gray-200 md:hidden"
      onClick={onClick}
    >
      {isOpen ? <CloseIcon className="h-6 w-6" /> : <BurgerIcon className="h-6 w-6" />}
    </button>
  );
}

export default memo(BurgerButton);
