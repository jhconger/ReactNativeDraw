import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, useColorScheme, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
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

import { ExtrasExample } from './screens';

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
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 10));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <>
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onLayout={onLayoutRootView}
      >
        <Text>Kokoro</Text>
        <Entypo name="rocket" size={30} />
      </View>

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
