import Link from "next/link";
import { memo, useCallback, useRef, useState } from "react";

import { usePortfolioTranslations } from "@/i18n/usePortfolioTranslations";

import BurgerButton from "./Menus/BurgerButton";
import DesktopMenu from "./Menus/DesktopMenu";
import MobileMenu from "./Menus/MobileMenu";
import { useMenuItems } from "./Menus/useMenuItems";

function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuItems = useMenuItems();

  const {
    header: { title },
  } = usePortfolioTranslations();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = e.currentTarget.href.split("#")[1];

      if (targetId) {
        const element = document.getElementById(targetId);

        if (element && headerRef.current) {
          const headerHeight = headerRef.current.offsetHeight;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
      closeMenu();
    },
    [closeMenu]
  );

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-[#495057] bg-[lightgray]">
      <nav className="w-full px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            className="text-xl font-bold text-black hover:text-gray-700"
            href="#hello-area"
            onClick={handleClick}
          >
            {title}
          </Link>
          <DesktopMenu items={menuItems} onItemClick={handleClick} />
          <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
        <MobileMenu
          isOpen={isMenuOpen}
          items={menuItems}
          onCloseMenu={closeMenu}
          onItemClick={handleClick}
        />
      </nav>
    </header>
  );
}

export default memo(Header);
