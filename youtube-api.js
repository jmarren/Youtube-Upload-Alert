require("dotenv").config();
const axios = require("axios");

module.exports = async function getYoutubeData(channelId) {
  const url = `https://youtube.googleapis.com/youtube/v3/activities?part=snippet&channelId=${channelId}&maxResults=5&key=${process.env.GOOGLE_API_KEY}`;

  try {
    const response = await axios.get(url);
    const responseData = response.data.items;
    const uploads = responseData
      .filter((item) => item.snippet.type === "upload")
      .map((item) => ({
        title: item.snippet.title,
        publishedAt: item.snippet.publishedAt,
      }));

    return uploads;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
