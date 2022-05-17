import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
	SafeAreaView,
} from "react-native";

const PasswordScreen = ({ navigation }) => {
	return (
		<KeyboardAvoidingView style={styles.container}>
			<TextInput
				style={styles.login}
				placeholder="Email"
				placeholderTextColor={"black"}
				autoCorrect={false}
			/>
			<TextInput
				style={styles.login}
				placeholder="Senha novamente"
				secureTextEntry={false}
				icon={<Text>Show</Text>}
				placeholderTextColor={"black"}
				autoCorrect={false}
			/>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#6cb2e6",
	},

	login: {
		height: 45,
		margin: 12,
		padding: 10,
		borderRadius: 7,
		marginHorizontal: 40,
		backgroundColor: "white",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#f99b2a",
		marginHorizontal: 40,
		padding: 10,
		borderRadius: 5,
		marginTop: 20,
	},
	buttontext: {
		color: "white",
		fontSize: 19,
		fontWeight: "bold",
	},
	subtitle: {
		color: "white",
		marginTop: 20,
		alignSelf: "center",
	},
	signup: {
		color: "#FF6600",
		alignSelf: "center",
		fontWeight: "bold",
	},
});

export default PasswordScreen;
