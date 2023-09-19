import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  // console.log(searchTerm);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <div className="bg-black  text-white">
      <div></div>
      <div className=" ml-2  font-medium text-lg">
        <div className=" ml-10">
          Search Results for:{" "}
          <span className=" text-red-500">{searchTerm}</span> videos
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchFeed;
