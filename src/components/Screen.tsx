import React from 'react';
import { View, SafeAreaView } from 'react-native';

export type ScreenProps = {
  backgroundColor: string;
  style: object;
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({backgroundColor, style, children}) => {
	return (
    <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor}}>
      <View style={[{flex: 1}, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
} 

export default Screen;