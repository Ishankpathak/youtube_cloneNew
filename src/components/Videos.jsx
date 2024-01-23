import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  // console.log(videos);
  return (
    <div className=" flex flex-wrap justify-center items-center gap-5 mt-12 md:mt-0">
      {videos.map((item, idx) => (
        <div key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
