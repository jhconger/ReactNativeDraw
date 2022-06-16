import { useTheme } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import type { RootStackParamList } from '../App';
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: React.FC<HomeProps> = ({ navigation }) => {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerTop: {
    flexDirection: 'row',
  },
  footerBottom: {
    flexDirection: 'row',
    marginTop: 5,
  },
  title: { marginVertical: 10, fontSize: 18 },
  description: { marginBottom: 10 },
});

export default Home;
