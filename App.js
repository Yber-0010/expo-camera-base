
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CameraScan } from './src/components/cameraScan';
import { CameraScanNext } from './src/components/cameraScanNext';

export default function App() {
  return (
    <View style={styles.container}>
      
      <CameraScan />
      {/* <CameraScanNext /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
