import { FontAwesome } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Video from "react-native-video";

type VideoPlayerProps = {
  uri: string;
};

export const VideoPlayer = ({ uri }: VideoPlayerProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<React.ElementRef<typeof Video>>(null);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const seekForward = () => {
    videoRef.current?.seek(15, 1);
  };

  const seekBackward = () => {
    videoRef.current?.seek(-15, 1);
  };

  const toggleFullscreen = () => {
    console.log("Fullscreen toggled");
  };

  const castToDevice = () => {
    console.log("Casting to device");
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri }}
        style={styles.video}
        resizeMode="contain"
        controls={false}
        paused={isPaused}
        muted={isMuted}
      />
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backwardButton} onPress={seekBackward}>
          <FontAwesome size={14} name="backward" color={"#FFFFFF"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonControl} onPress={togglePause}>
          <FontAwesome size={14} name={isPaused ? "play" : "pause"} color={"#FFFFFF"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.forwardButton} onPress={seekForward}>
          <FontAwesome size={14} name="forward" color={"#FFFFFF"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
          <FontAwesome size={14} name={isMuted ? "volume-off" : "volume-up"} color={"#FFFFFF"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.castButton} onPress={castToDevice}>
          <FontAwesome size={14} name="tv" color={"#FFFFFF"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.fullscreenButton} onPress={toggleFullscreen}>
          <FontAwesome size={16} name="arrows-alt" color={"#FFFFFF"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: "100%",
    height: 280,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  backwardButton: {
    position: "absolute",
    left: 70,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
  },
  buttonControl: {
    alignSelf: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
  },
  forwardButton: {
    position: "absolute",
    right: 70,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
  },
  muteButton: {
    position: "absolute",
    top: 18,
    right: 20,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
  },
  castButton: {
    position: "absolute",
    top: 18,
    right: 60,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
  },
  fullscreenButton: {
    position: "absolute",
    bottom: 16,
    right: 9,
  },
});
