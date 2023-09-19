import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
    order: "date",
    regionCode: "IN",
  },
  headers: {
    "X-RapidAPI-Key": "ec3db91d4bmshac7bb0c24eaed24p1c0ab9jsn797a688a3fd5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
