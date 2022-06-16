import { StatusBar, View } from 'react-native';
import Image from 'react-native-web/dist/vendor/react-native/Animated/components/AnimatedImage';
import Video from 'react-native-video';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
      }}
    >
      <Video
        source={require('example/src/assets/Serenity.mp4')}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
        }}
        muted={true}
        repeat={true}
        paused={false}
        resizeMode="cover"
      />
      <View>{StatusBar.setBackgroundColor('black', true)}</View>
      <Image
        style={{ width: 500, height: 500 }}
        source={require('example/src/assets/KOKOROlogo.png')}
      />
    </View>
  );
};
