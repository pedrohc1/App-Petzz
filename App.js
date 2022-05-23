import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import PasswordScreen from "./src/screens/PasswordScreen";
import CustomDrawer from "./src/components/CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
	"ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types",
]);

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				drawerActiveBackgroundColor: "#3f223b",
				drawerActiveTintColor: "#fff",
				headerTintColor: "#fff",
				headerStyle: {
					backgroundColor: "#3f223b",
				},
			}}
		>
			<Drawer.Screen
				name="Menu"
				backgroundColor={"black"}
				component={HomeScreen}
				options={{
					drawerIcon: ({ color }) => (
						<Ionicons name="home" size={22} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="Configurações"
				component={PasswordScreen}
				options={{
					drawerIcon: ({ color }) => (
						<Ionicons name="settings" size={22} color={color} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			{
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="Drawer"
						component={DrawerRoutes}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Signup"
						component={SignupScreen}
						options={{
							title: "Cadastro",
							headerStyle: {
								backgroundColor: "#3f223b",
							},
							headerTintColor: "#fff",
							headerTitleStyle: {
								fontWeight: "bold",
							},
							headerShown: "false",
						}}
					/>
					<Stack.Screen name="Password" component={PasswordScreen} />
				</Stack.Navigator>
			}
		</NavigationContainer>
	);
}
