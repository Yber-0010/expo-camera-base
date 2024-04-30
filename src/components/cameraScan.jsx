
import { useState } from 'react';
import { Camera as Scan, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ModalAlert } from './ModalAlert';

export const CameraScan = () => {
  const [type, setType] = useState(CameraType.back);
  const [data, setData] = useState('');
  const [permission, requestPermission] = Scan.useCameraPermissions();

  const [scanned, setScanned] = useState(false)

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const handleBarCodeScanned =  async ({ type, data }) => {
    setScanned(true);
    setData(data);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(`--------------`);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setTimeout(() => {
      setScanned(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      {/* <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera> */}
      <Scan
				type={CameraType.back}
				style={styles.Scan}
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				barcodeScannerSettings={{
					barcodeTypes: ["qr", "pdf417"],
				}}
			></Scan>
      {/* {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )} */}
      <View style={{ position: "absolute" }}>
				{scanned && (
					<ModalAlert  time={2000} blue={100} green={100} red={100} message={data} />
				)}
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "black",
	},
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  Scan:{
		position: 'absolute',
		width: '100%',
		height: '65%',
	}
});
