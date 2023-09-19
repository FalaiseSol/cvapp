import React from 'react';
import { View } from "react-native";

export type LineProps = {
  width: string | number;
  color: string;
  height: number;
}

const Line = ({ width, color, height }: LineProps) => {
  return (
    <View style={{
      alignSelf: 'center',
      height: height,
      width: width,
      backgroundColor: color,
    }} />
  );
};

export default Line;