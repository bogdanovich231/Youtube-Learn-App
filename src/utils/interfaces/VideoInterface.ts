export interface IVideo {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    description: string;
    title?: string;
    channelTitle?: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}
