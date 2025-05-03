const API_KEY = "AIzaSyA60uYjIwlPr-jWXS1j7VMIzG8Y9-zcKCY";

export const searchVideos = async (query: string, sort?: "latest" | "oldest" | "popular") => {
  try {
    let order = "relevance";
    if (sort === "latest") {
      order = "date";
    } else if (sort === "popular") {
      order = "viewCount";
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}&type=video&videoDuration=long&order=${order}`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error request YouTube API:", error);
    return [];
  }
};

export const getVideoDetails = async (id: string) => {
  try {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch video details: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.items && data.items.length > 0) {
      return data.items[0];
    } else {
      throw new Error("Video not found");
    }
  } catch (error) {
    console.error("Error fetching video details:", error);
    throw error;
  }
};
