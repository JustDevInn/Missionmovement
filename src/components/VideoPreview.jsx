import React, { useState } from "react";

const VideoPreview = ({ videoId = "YHffzTVE_9Q" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden border border-[#2A2A2A] shadow-xl bg-black">
      {isPlaying ? (
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title="Program Preview"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full group"
          aria-label="Play program preview video"
        >
          <img
            src={thumbnail}
            alt="Video preview thumbnail"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition group-hover:bg-black/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-yellow drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoPreview;

// import React, { useState } from "react";
// import { FaPlay } from "react-icons/fa";

// const VideoPreview = ({ videoId = "YHffzTVE_9Q", thumbnailUrl }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlay = () => {
//     setIsPlaying(true);
//   };

//   return (
//     <div className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden border border-[#2A2A2A] shadow-xl relative bg-black">
//       {!isPlaying ? (
//         <div
//           className="w-full h-full relative cursor-pointer"
//           onClick={handlePlay}
//         >
//           {/* Thumbnail */}
//           <img
//             src={
//               thumbnailUrl ||
//               `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
//             }
//             alt="Video Preview"
//             className="w-full h-full object-cover"
//           />
//           {/* Custom Play Button */}
//           <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition hover:bg-black/70">
//             <div className="bg-white rounded-full p-4 shadow-lg hover:scale-105 transition-transform">
//               <FaPlay className="text-red-600 text-2xl" />
//             </div>
//           </div>
//         </div>
//       ) : (
//         <iframe
//           className="w-full h-full"
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
//           title="Program Preview"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//         />
//       )}
//     </div>
//   );
// };

// export default VideoPreview;
