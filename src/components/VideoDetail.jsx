import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineQuickreply } from "react-icons/md";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState([]);

  const [showComments, setShowComments] = useState(false);

  const { id } = useParams();
  // console.log(videoDetail);
  // console.log(comments);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideo=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then((data) =>
      setComments(data.items)
    );
  }, [id]);
  return (
    <div className="flex bg-black text-white flex-wrap lg:flex-nowrap">
      <div className="w-[100%] p-3 md:pl-10" style={{ maxWidth: "100%" }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="flex flex-col">
          <span style={{ maxWidth: "100%" }}>
            {videoDetail?.snippet?.title}
          </span>
          <span style={{ maxWidth: "100%" }} className=" text-gray-400 mt-3">
            {videoDetail?.snippet?.channelTitle}
          </span>
        </div>
        <div className=" flex justify-between mt-3">
          <div className=" flex flex-col">
            <span>{videoDetail?.statistics?.viewCount}</span>
            <span>Views</span>
          </div>
          <div className=" flex flex-col">
            <span>{videoDetail?.statistics?.likeCount}</span>
            <span>Likes</span>
          </div>
        </div>
        {/* showing comments  */}
        <div>
          <div className=" flex justify-between mt-5">
            <span>{videoDetail?.statistics?.commentCount} comments</span>
            <button
              className=" bg-gray-500 p-1 rounded-md"
              onClick={() => setShowComments(!showComments)}
            >
              {showComments ? "Hide comments" : "showComments"}
            </button>
          </div>
          <ul>
            {showComments && (
              <div>
                {comments?.map((item) => {
                  return (
                    <li key={item?.id} className="flex items-center mt-4 gap-3">
                      <img
                        src={
                          item?.snippet?.topLevelComment?.snippet
                            ?.authorProfileImageUrl
                        }
                        alt=""
                        className=" rounded-full w-10"
                      />
                      <div className="flex flex-col">
                        <span className=" text-gray-400">
                          {
                            item?.snippet?.topLevelComment?.snippet
                              ?.authorDisplayName
                          }
                        </span>
                        <span>
                          {item?.snippet?.topLevelComment?.snippet?.textDisplay}
                        </span>
                        <span className=" flex gap-5 items-center mt-2">
                          <span className=" flex items-center gap-1">
                            <AiFillLike />
                            {item?.snippet?.topLevelComment?.snippet?.likeCount}
                          </span>

                          <span>
                            {new Date(
                              item?.snippet?.topLevelComment?.snippet.updatedAt
                            ).toLocaleTimeString()}
                          </span>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </div>
            )}
          </ul>
        </div>
      </div>

      <div>{videos && <Videos videos={videos} />}</div>
    </div>
  );
};

export default VideoDetail;
