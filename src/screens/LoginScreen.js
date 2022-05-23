import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	View,
	TextInput,
	StyleSheet,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
	Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../components/useTogglePasswordVisibility";
import { heightToDp, widthToDp } from "../components/dimensions";

const LoginScreen = ({ navigation }) => {
	const { passwordVisibility, rightIcon, handlePasswordVisibility } =
		useTogglePasswordVisibility();
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<View>
				<Image style={styles.image} source={require("../../assets/Cat.png")} />

				<TextInput
					style={styles.login}
					placeholder="Login"
					value={login}
					placeholderTextColor={"black"}
					autoCorrect={false}
					onChangeText={(text) => setLogin(text)}
				/>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.login}
						placeholder="Senha"
						value={password}
						secureTextEntry={passwordVisibility}
						placeholderTextColor={"black"}
						autoCorrect={false}
						onChangeText={(text) => setPassword(text)}
					/>
					<Pressable onPress={handlePasswordVisibility}>
						<MaterialCommunityIcons
							style={styles.icon}
							name={rightIcon}
							size={24}
							color="#232323"
						/>
					</Pressable>
				</View>
				<Text
					style={styles.forgotPassword}
					onPress={() => navigation.navigate("Password")}
				>
					esqueceu a senha ?
				</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Drawer")}
				>
					<Text style={styles.buttontext}>Login</Text>
				</TouchableOpacity>
				<View style={styles.loginbutton}>
					<Text style={styles.subtitle}>Nao tem uma conta ?</Text>
					<Text
						style={styles.signup}
						onPress={() => navigation.navigate("Signup")}
					>
						Inscrever-se
					</Text>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3f223b",
	},
	login: {
		height: 45,
		margin: 12,
		padding: 10,
		borderRadius: 3,
		marginHorizontal: 40,
		backgroundColor: "white",
	},
	image: {
		width: widthToDp(35),
		marginTop: 60,
		marginBottom: 100,
		height: heightToDp(23),
		alignSelf: "center",
	},
	titleImage: {
		maxWidth: 200,
		height: heightToDp(8),
		alignSelf: "center",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#FF6600",
		marginHorizontal: 40,
		padding: 10,
		borderRadius: 5,
		marginTop: 40,
	},
	buttontext: {
		color: "white",
		fontSize: 19,
		fontWeight: "bold",
	},
	subtitle: {
		color: "white",
		marginTop: 130,
		alignSelf: "center",
	},
	signup: {
		color: "#FF6600",
		alignSelf: "center",
		fontWeight: "bold",
	},
	forgotPassword: {
		color: "white",
		marginLeft: 45,
		marginTop: 6,
		fontWeight: "bold",
	},
	icon: {
		position: "absolute",
		left: 340,
		bottom: 22,
	},
	loginbutton: {
		position: "absolute",
		alignSelf: "center",
		top: "100%",
	},
});

export default LoginScreen;
