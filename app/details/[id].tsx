import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserName } from "~/components/userName/UserName.tsx";
import { VideoDetails } from "~/components/videoDetails/VideoDetails.tsx";
import { VideoPlayer } from "~/components/videoPlayer/VideoPlayer";
import { getVideoDetails } from "~/utils/api/VideoApi";
import { IVideo } from "~/utils/interfaces/VideoInterface";

const VideoScreen = () => {
  const { id } = useLocalSearchParams();
  const [videoData, setVideoData] = useState<IVideo | null>(null);
  const [, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"Details" | "Notes">("Details");

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
      <VideoPlayer uri={`https://www.youtube.com/watch?v=${videoData.id}`} />
      <View style={styles.container}>
        <UserName userName={videoData.snippet.channelTitle || "User Name"} />

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Details" && styles.activeTab]}
            onPress={() => setActiveTab("Details")}
          >
            <Text style={[styles.tabText, activeTab === "Details" && styles.activeTabText]}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Notes" && styles.activeTab]}
            onPress={() => setActiveTab("Notes")}
          >
            <Text style={[styles.tabText, activeTab === "Notes" && styles.activeTabText]}>Notes</Text>
          </TouchableOpacity>
        </View>

        {activeTab === "Details" ? (
          <VideoDetails
            description={videoData.snippet.description}
            count={{
              views: Number(videoData.statistics.viewCount),
              likes: Number(videoData.statistics.likeCount),
            }}
          />
        ) : (
          <View style={styles.notesContainer}>
            <Text style={styles.notesText}>Here notes about the video.</Text>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#C8C8C8",
    marginTop: 16,
  },
  tab: {
    paddingVertical: 10,
    flex: 1,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#2B2D42",
  },
  tabText: {
    fontSize: 12,
    color: "#2B2D42",
    fontFamily: "Poppins-SemiBold",
  },
  activeTabText: {
    color: "#2B2D42",
    fontFamily: "Poppins-SemiBold",
  },
  notesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  notesText: {
    fontSize: 14,
    color: "#2B2D42",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
});

export default VideoScreen;
