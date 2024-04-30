import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
	globalMargin: {
		marginHorizontal: 20,
		marginTop: 0,
		flexGrow: 1
	},
	title: {
		fontSize: 35,
		fontWeight: 'bold'
	},
	Floattoprigth: {
		position: 'absolute',
		top: 40,
		right: 20,
		borderWidth: 1,
		borderColor: 'white',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 100,
		backgroundColor: 'white'
	},
	header: {
		flex: 1,
		position: 'absolute',
		width: '100%',
		height: 100,
		top: 0,
		flexDirection: 'row',
		zIndex: 100,
	},
	iconStatus: {
		flex: 1,
		position: 'absolute',
		// width: '100%',
		height: 100,
		top: 110,
		right: 10,
		flexDirection: 'row',
	},
	backgroundIconStatus: {
		backgroundColor: 'black',
		color: 'white',
		// height: 30,
		borderRadius: 10,
		paddingHorizontal: 6,
		paddingVertical: 5,
	},
	HeaderWidth: {
		flex: 1,
		backgroundColor: 'black'
	},
	HeaderButton: {
		top: 40,
		marginHorizontal: 5,
		paddingHorizontal: 1,
		paddingVertical: 5,
		borderRadius: 100,
	},
	HeaderTextButton: {
		fontSize: 13,
		color: "black",
		paddingHorizontal: 20,
		textAlign: 'center',
		height: 40,
		textAlignVertical: 'center'
	},
	FloatBottomrigth: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		paddingVertical: 5,
		backgroundColor: 'black',
		borderWidth: 1,
		borderColor: 'black',
	},
	FloattoprigthList: {
		position: 'absolute',
		bottom: 45,
		borderWidth: 1,
		borderColor: 'black',
		paddingHorizontal: 1,
		paddingVertical: 10,
		borderRadius: 0,
		width: screenWidth,
		backgroundColor: 'black',
	},
	Floatbuttonrigth: {
		position: 'absolute',
		bottom: 50,
		right: 20,
		borderWidth: 1,
		borderColor: 'white',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 100,
		backgroundColor: 'white'
	}
});