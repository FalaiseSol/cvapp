import React from 'react';
import { TouchableOpacity, Text, View } from "react-native";

export type ButtonProps = {
  onPress: Function;
  style: object;
  color?: string;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ onPress, style, color = "white", text }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => onPress()}>
      <View style={[styles.base, style]}>
        {text.length ?
          <Text style={[{color: color}, styles.textStyle]}>
            {text}
          </Text>
        : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  base: {
    flexDirection: "row",
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: 'hidden',
    backgroundColor: "#B154DE",
  },
  textStyle: {
    fontSize: 24,
  },
};

export default Button;
