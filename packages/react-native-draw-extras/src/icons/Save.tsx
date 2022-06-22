import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, View } from 'react-native';

const Save = function App() {
  return (
    <View style={styles.screen}>
      <FontAwesomeIcon icon={faSave} size={30} style={{ color: 'green' }} />
    </View>
  );
};

const MemoSave = React.memo(Save);
export default MemoSave;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
