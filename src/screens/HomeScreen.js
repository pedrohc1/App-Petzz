import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	StatusBar,
	Image,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.93;

const carouselItens = [
	{
		title: "Luna",
		image: require("../../assets/petsimg/cat_1_1.jpg"),
		description: "Aceita Cães, Amigavel, Curioso, Bravo",
		health: "Vacinas em dia, castrado",
	},
	{
		title: "Tom",
		image: require("../../assets/petsimg/cat_2_1.jpg"),
		descriptiona: "Aceita Cães",
	},
	{
		title: "Cachorro",
		image: require("../../assets/petsimg/dog_1_1.jpg"),
		description: "Aceita Cães",
	},
];

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<StatusBar barStyle={"light-content"} />
			<Carousel
				data={carouselItens}
				renderItem={({ item }) => (
					<View style={styles.carouselItemContainer}>
						<View style={styles.Pet}>
							<Image style={styles.carouselImage} source={item.image} />
							<Text style={styles.carouselTitle}>{item.title}</Text>
							<Text style={styles.description}>
								Caracteristicas:{item.description}
							</Text>
							<Text style={styles.description}>vacina</Text>
						</View>

						<TouchableOpacity onPress={() => navigation.navigate("login")}>
							<View style={styles.button}>
								<Text style={{ color: "white" }}>Saiba mais</Text>
							</View>
						</TouchableOpacity>
					</View>
				)}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				useScroll={true}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	carouselItemContainer: {
		marginTop: 10,
		borderRadius: 8,
		heigth: 10,
		borderColor: "black",
		borderWidth: 1,
		backgroundColor: "#3f223b",
	},
	carouselTitle: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 22,
		alignSelf: "center",
		marginBottom: 10,
	},
	carouselImage: {
		width: "100%",
		height: 300,
		borderRadius: 7,
	},
	button: {
		alignItems: "center",
		backgroundColor: "# 0",
		marginHorizontal: 40,
		padding: 10,
		borderRadius: 5,
		marginTop: 20,
	},
	description: {
		color: "#fff",
	},
});
