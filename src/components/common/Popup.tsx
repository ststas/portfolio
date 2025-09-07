import Image from "next/image";
import { useEffect } from "react";

import Button from "./Button";
import { ImageSize, PopupMediaType } from "./constants";
import { CloseIcon } from "./icons/CloseIcon";
import { MediaType } from "./types";
import VideoContainer from "./VideoContainer";

interface PopupProps {
  description: string;
  isOpen: boolean;
  mediaSrc: string;
  mediaType?: MediaType;
  title: string;
  onClose: () => void;
}

function Popup({
  description,
  isOpen,
  mediaSrc,
  mediaType = PopupMediaType.image,
  title,
  onClose,
}: PopupProps): JSX.Element {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`relative max-h-[90vh] w-[90vw] transform rounded-lg bg-white shadow-2xl transition-all duration-300 ease-in-out md:w-[70vw] lg:w-[600px] lg:max-w-[600px] xl:w-[600px] xl:max-w-[600px] 2xl:w-[600px] 2xl:max-w-[600px] ${
          mediaType === PopupMediaType.youtube
            ? "lg:w-[960px] lg:max-w-[960px] xl:w-[960px] xl:max-w-[960px] 2xl:w-[960px] 2xl:max-w-[960px]"
            : ""
        } ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <Button
          ariaLabel="Close popup"
          className="bg-opacity-90 hover:bg-opacity-100 absolute -top-4 -right-3 z-40 rounded-lg bg-white p-1.5 text-black shadow-lg transition-colors"
          onClick={onClose}
        >
          <CloseIcon className="h-4 w-4 sm:h-6 sm:w-6" />
        </Button>
        <div
          className={`relative overflow-hidden rounded-t-lg ${
            mediaType === PopupMediaType.image
              ? "h-[260px] w-full sm:h-[400px] md:h-[500px] lg:h-[546px]"
              : "h-[200px] w-full sm:h-[300px] md:h-[400px] lg:h-[540px]"
          }`}
        >
          {mediaType === PopupMediaType.image ? (
            <Image
              priority
              alt={title}
              className="w-full object-contain"
              height={ImageSize.height}
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 600px, 960px"
              src={mediaSrc}
              width={ImageSize.width}
            />
          ) : (
            <VideoContainer mediaSrc={mediaSrc} title={title} />
          )}
        </div>
        <div className="w-full p-4">
          <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>
          <p className="text-sm text-gray-700 sm:text-base">{description}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}

export default Popup;
