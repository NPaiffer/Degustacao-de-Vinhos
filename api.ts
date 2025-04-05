import axios from "axios";

export interface Wine {
  wine: string;
  winery: string;
  rating: {
    average: string;
    reviews: string;
  };
  location: string;
  image: string;
  id: number;
}

const API_URL = "https://api.sampleapis.com/wines/reds";

export const fetchSessions = async (): Promise<Wine[]> => {
  const response = await axios.get<Wine[]>(API_URL);
  return response.data;
};
