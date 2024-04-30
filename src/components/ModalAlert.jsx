import React, { useEffect, useState } from "react";
import { Modal, Text, View } from "react-native";
import { styles } from "../theme";

export const ModalAlert = ({
	itisVisible = true,
	red = 100,
	green = 100,
	blue = 100,
	title = "",
	message = "",
	time = 3000,
}) => {
	const [isVisible, setIsVidible] = useState(false);
	useEffect(() => {
		itisVisible == true ? setIsVidible(true) : setIsVidible(false);
		setTimeout(() => {
			setIsVidible(false);
		}, time);
	}, [itisVisible]);

	return (
		<View style={styles.globalMargin}>
			{/* modal */}
			<Modal animationType="fade" visible={isVisible} transparent={true}>
				{/* backgroung */}
				<View
					style={{
						flex: 1,
						backgroundColor: `rgba(${red},${green},${blue},0.9)`,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{/* contenido del modal */}
					<View
						style={{
							width: 300,
							height: 300,
							backgroundColor: `rgba(${red},${green},${blue},1)`,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 20,
						}}
					>
						{title ? (
							<Text
								style={{
									fontSize: 35,
									fontWeight: "bold",
									textAlign: "center",
								}}
							>
								{title}
							</Text>
						) : (
							""
						)}
						{message ? (
							<Text
								style={{
									fontSize: 28,
									fontWeight: "bold",
									textAlign: "center",
								}}
							>
								{message}
							</Text>
						) : (
							""
						)}
					</View>
				</View>
			</Modal>
		</View>
	);
};
