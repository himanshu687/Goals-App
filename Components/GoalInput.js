import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const GoalInput = ({ onGoalAdd, visible, setModalIsVisible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (text) => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    onGoalAdd(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          autoFocus={true}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color={"#f31282"}
              onPress={setModalIsVisible}
            />
          </View>
          <View style={styles.button}>
            <Button
              disabled={enteredGoalText.length == 0}
              title="Add Goal"
              color={"#b180f0"}
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    height: 55,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
});
