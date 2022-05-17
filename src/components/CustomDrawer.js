import React from "react";
import { View, Text, Image } from "react-native";
import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View
					style={{
						backgroundColor: "#3f223b",
						width: "100%",
						height: 100,
						alignItems: "center",
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					<Image source={require("../../assets/man.png")} style={{}} />
					<Text
						style={{
							color: "white",
							marginLeft: 10,
							fontSize: 17,
							fontWeight: "bold",
						}}
					>
						Pedro Henrique
					</Text>
				</View>
				<DrawerItemList
					{...props}
					contentContainerStyle={{ backgroundColor: "#3f223b" }}
				/>
			</DrawerContentScrollView>
		</View>
	);
};

export default CustomDrawer;
