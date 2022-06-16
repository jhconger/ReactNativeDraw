import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { CanvasProps } from '@benjeau/react-native-draw';
import type {
  BrushPreviewProps,
  BrushPropertiesProps,
  CanvasControlsProps,
  ColorPickerProps,
} from '@benjeau/react-native-draw-extras';

import {
  ExtrasExample
} from './screens';

export type RootStackParamList = {
  Home: undefined;
  CanvasExample: CanvasProps;
  BrushPreviewExample: BrushPreviewProps;
  BrushPropertiesExample: BrushPropertiesProps;
  CanvasControlsExample: CanvasControlsProps;
  ColorPickerExample: ColorPickerProps;
  ExampleSelection: {
    type:
      | 'canvas'
      | 'brushPreview'
      | 'brushProperties'
      | 'canvasControls'
      | 'colorPicker';
    title: string;
  };
  SimpleExample: undefined;
  MoreComplexExample: undefined;
  ExtrasExample: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default () => {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="#00000000"
        translucent
      />
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="ExtrasExample"
            component={ExtrasExample}
            options={{ title: 'Extras Example' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
