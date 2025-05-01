const API_KEY = "AIzaSyA60uYjIwlPr-jWXS1j7VMIzG8Y9-zcKCY";

export const searchVideos = async (query: string) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}&type=video&maxResults=5&videoDuration=long`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error request YouTube API:", error);
    return [];
  }
};
