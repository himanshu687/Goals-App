import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({ text, handleDelete, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#201644" }}
        onPress={handleDelete.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 14,
    color: "#ffffff",
  },
});
