import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Video from "react-native-video";

type VideoPlayerProps = {
  uri: string;
};

export const VideoPlayer = ({ uri }: VideoPlayerProps) => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Video source={{ uri }} style={styles.video} resizeMode="contain" controls paused={isPaused} />
      <TouchableOpacity style={styles.button} onPress={togglePause}>
        <View style={styles.buttonControl}>
          {isPaused ? (
            <FontAwesome size={14} name="play" color={"#FFFFFF"} />
          ) : (
            <FontAwesome size={14} name="pause" color={"#FFFFFF"} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 280,
  },
  button: {
    marginTop: 20,
    padding: 10,

    borderRadius: 5,
  },
  buttonControl: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 10,
    borderRadius: "50%",
  },
});
