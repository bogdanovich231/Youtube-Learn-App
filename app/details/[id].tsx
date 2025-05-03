import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { UserName } from "~/components/userName/UserName.tsx";
import { VideoDetails } from "~/components/videoDetails/VideoDetails.tsx";
import { getVideoDetails } from "~/utils/api/VideoApi";
import { IVideo } from "~/utils/interfaces/VideoInterface";

const VideoScreen = () => {
  const { id } = useLocalSearchParams();
  const [videoData, setVideoData] = useState<IVideo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        if (id) {
          const data = await getVideoDetails(id);
          setVideoData(data);
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [id]);

  if (!videoData) {
    return <Text>Video not found</Text>;
  }

  return (
    <>
      <UserName userName={videoData.snippet.channelTitle || "User Name"} />
      <VideoDetails
        description={videoData.snippet.description}
        count={{
          views: Number(videoData.statistics.viewCount),
          likes: Number(videoData.statistics.likeCount),
        }}
      />
    </>
  );
};

export default VideoScreen;
