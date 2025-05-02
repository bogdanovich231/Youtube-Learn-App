const API_KEY = "AIzaSyAua9ckowCu9Y9oRpkSLq_SBX1CsoZtiKM";

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
