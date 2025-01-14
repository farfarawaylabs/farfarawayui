import { useState } from "react";
import { Button } from "../ui/button";
import { XCircle } from "lucide-react";

interface WatchVideoButtonProps {
  label?: string;
  videoUrl: string;
}

const WatchVideoButton: React.FC<WatchVideoButtonProps> = ({ label = "Watch video", videoUrl }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoOverlay = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <>
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          onClick={toggleVideoOverlay}
        >
          <div className="relative w-full max-w-3xl p-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-2 -right-12 m-4 text-white hover:text-gray-300 transition-colors"
              onClick={toggleVideoOverlay}
            >
              <XCircle className="w-8 h-8" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div>
        <Button variant="outline" onClick={toggleVideoOverlay}>
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span>{label}</span>
        </Button>
      </div>
    </>
  );
};

export default WatchVideoButton;
