import React from "react";
import { Link } from "react-router-dom";
import { demoThumbnailUrl } from "../utils/constants";
import noimage from "../assets/no-image.png";
import { FaRegCheckCircle } from "react-icons/fa";

const VideoCard = ({ video }) => {
  // console.log(video);
  return (
    <div className=" flex mt-3 w-[20rem] gap-20">
      <Link
        to={video.id.videoId ? `/video/${video.id.videoId}` : demoThumbnailUrl}
        className=""
      >
        <img
          src={
            video?.snippet?.thumbnails?.high?.url
              ? video?.snippet?.thumbnails?.high?.url
              : "https://stock.adobe.com/images/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-for-web-site-or-mobile-app/470299797"
          }
          alt={video?.snippet?.channelTitle}
          style={{ maxWidth: "100%" }}
          className="p-1"
        />
        <div style={{ maxWidth: "100%" }} className=" flex justify-center p-1">
          <span className=" text-md">
            {video?.snippet?.description.slice(0, 60)}{" "}
            {video?.snippet?.description ? "..." : ""}
          </span>
        </div>
        <span className=" text-gray-400 text-[15px] ml-2 flex items-center gap-3">
          {video?.snippet?.channelTitle}
          <FaRegCheckCircle />
        </span>
      </Link>
    </div>
  );
};

export default VideoCard;
