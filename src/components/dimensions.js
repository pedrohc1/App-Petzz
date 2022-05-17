import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");
const widthToDp = (number) => {
	const givenWidth = typeof number === "number" ? number : parseFloat(number);
	return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};
const heightToDp = (number) => {
	const givenWidth = typeof number === "number" ? number : parseFloat(number);
	return Number(PixelRatio.roundToNearestPixel((height * givenWidth) / 100));
};
export { widthToDp, heightToDp };
