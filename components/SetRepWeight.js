import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "./Picker";
import { dumbellWeights } from "../constants/dumbellWeights";
import { setAmounts } from "../constants/setAmounts";
import { repAmounts } from "../constants/repAmounts";

export const SetRepWeight = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        textAlign: "center",
      }}
    >
      <div>
        <Text>Sets</Text>
        <Picker
          style={styles.picker}
          listItems={setAmounts}
          placeholder="Sets"
        />
      </div>
      <div>
        <Text>Reps</Text>
        <Picker
          style={styles.picker}
          listItems={repAmounts}
          placeholder="Reps"
        />
      </div>
      <div>
        <Text>Weight</Text>
        <Picker
          style={styles.picker}
          listItems={dumbellWeights}
          placeholder="Weight"
        />
      </div>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    borderColor: "black",
    borderWidth: 1,
    minWidth: "15%",
    textAlign: "center",
  },
});
