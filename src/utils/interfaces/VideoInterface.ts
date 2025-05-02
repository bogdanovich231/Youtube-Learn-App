export interface IVideo {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}
