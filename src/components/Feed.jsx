import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <div className="bg-black flex md:gap-20 text-white relative max-w-[100%] overflow-hidden">
      <div>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="  ml-2 font-medium text-lg">
        {selectedCategory} <span className=" text-red-500">videos</span>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
