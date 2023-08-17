import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  params: {
    maxResults: "20",
  },

  headers: {
    "X-RapidAPI-Key": "dd9b30c7d0mshf0c2582389a4dbap142cdejsn256568b45e65",
    //process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
