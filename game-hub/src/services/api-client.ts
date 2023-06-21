import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bf219f8df1f0494c913ec9d20c2aec30",
  },
});
