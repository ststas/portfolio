import { memo } from "react";

import { getYouTubeVideoId } from "@/utils/helpers";

type Props = {
  mediaSrc: string;
  title: string;
};

function VideoContainer({ mediaSrc, title }: Props): JSX.Element {
  return (
    <div className="grid h-full w-full place-items-center">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${getYouTubeVideoId(mediaSrc)}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&vq=hd1080`}
        style={{
          border: "none",
          minWidth: "100%",
          minHeight: "100%",
        }}
        title={title}
      />
    </div>
  );
}

export default memo(VideoContainer);
