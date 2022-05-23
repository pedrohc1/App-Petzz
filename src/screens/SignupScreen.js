import React, { useState } from "react";
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
	SafeAreaView,
} from "react-native";

const SignupScreen = ({ navigation }) => {
	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<Image style={styles.image} source={require("../../assets/petbox.png")} />

			<TextInput
				style={styles.login}
				placeholder="Nome"
				placeholderTextColor={"black"}
				autoCorrect={false}
			/>
			<TextInput
				style={styles.login}
				placeholder="Email"
				placeholderTextColor={"black"}
				autoCorrect={false}
				keyboardType={"email-address"}
			/>
			<TextInput
				style={styles.login}
				placeholder="CPF"
				placeholderTextColor={"black"}
				autoCorrect={false}
			/>
			<TextInput
				style={styles.login}
				placeholder="Senha"
				placeholderTextColor={"black"}
				autoCorrect={false}
			/>
			<TextInput
				style={styles.login}
				placeholder="Senha novamente"
				placeholderTextColor={"black"}
				autoCorrect={false}
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Home")}
			>
				<Text style={styles.buttontext}>Cadastre-se</Text>
			</TouchableOpacity>
			<Text style={styles.subtitle}>Já tem uma conta ?</Text>
			<Text style={styles.signup} onPress={() => navigation.navigate("Login")}>
				Faça o login
			</Text>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3f223b",
	},
	image: {
		width: 270,
		height: 270,
		alignSelf: "center",
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
		backgroundColor: "#FF6600",
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

export default SignupScreen;
