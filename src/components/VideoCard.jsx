import React from "react";
import { Link } from "react-router-dom";
import { demoThumbnailUrl } from "../utils/constants";
import noimage from "../assets/no-image.png";

const VideoCard = ({ video }) => {
  // console.log(video);
  return (
    <div className=" flex justify-center items-center max-w-[100%]">
      <Link
        to={video.id.videoId ? `/video/${video.id.videoId}` : ""}
        className=""
      >
        <img
          src={
            video?.snippet?.thumbnails?.high?.url
              ? video?.snippet?.thumbnails?.high?.url
              : noimage
          }
          alt={video?.snippet?.channelTitle}
          style={{ maxWidth: "100%" }}
          className="p-1"
        />
        <div style={{ maxWidth: "100%" }} className=" flex justify-center p-1">
          <span>
            {video?.snippet?.description.slice(0, 60)}{" "}
            {video?.snippet?.description ? "..." : ""}
          </span>
        </div>
        <span className=" text-gray-400 text-[15px] ml-2">
          {video?.snippet?.channelTitle}
        </span>
      </Link>
    </div>
  );
};

export default VideoCard;
