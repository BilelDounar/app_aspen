import { MaterialIcons } from "@expo/vector-icons";
import { ImageBackground, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function detail() {
    return (
        <View className="flex-1 relative p-4">

            <ImageBackground
                source={require("../assets/image-figma/radisson.jpg")}
                className="flex-1 max-h-1/2 rounded-3xl overflow-hidden mt-7 relative"
                resizeMode="cover"
            >
                <View className="absolute bottom-5 right-5 items-center">
                    <View className="bg-white rounded-full h-10 w-10 justify-center items-center shadow-lg">
                        <AntDesign name="heart" size={20} color="red" />
                    </View>
                </View>
            </ImageBackground>

            <View className="mt-4">
                <View className="flex-row items-center justify-between">
                    <View>
                        <Text className="text-2xl font-bold">Radisson Blu Hotel</Text>
                        <View className="flex-row items-baseline mt-4">
                            <AntDesign name="star" size={16} color="gold" />
                            <Text className="ml-1 text-gray-700"> 4.5 (150 reviews)</Text>
                        </View>
                    </View>
                    <Text className="text-primary font-bold">Show Map</Text>
                </View>
                <Text className="text-gray-500 font-light mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis molestias tenetur quod voluptates cumque earum dicta, in unde repellat, provident dolores vitae repudiandae animi repellendus.</Text>
                <View className="flex-row mt-1">
                    <Text className="text-primary font-bold">Show more </Text>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color="#176ff2" />
                </View>



                <Text className="text-xl font-bold mt-4">Facilities</Text>

                <View className="flex-row mt-4">
                    <View className="flex-col justify-center  items-center mr-6 h-25 w-25 bg-gray-200 p-2 rounded-lg">
                        <AntDesign name="wifi" size={40} color="gray" />
                        <Text className="mt-2 text-gray-700">Free Wi-Fi</Text>
                    </View>
                    <View >
                        <View className="flex-col justify-center  items-center mr-6 h-25 w-25 bg-gray-200 p-2 rounded-lg">
                            <AntDesign name="car" size={40} color="gray" />
                            <Text className="mt-2 text-gray-700">Parking</Text>
                        </View>
                    </View>
                    <View >
                        <View className="flex-col justify-center  items-center mr-6 h-25 w-25 bg-gray-200 p-2 rounded-lg">
                            <AntDesign name="heart" size={40} color="gray" />
                            <Text className="mt-2 text-gray-700">Spa</Text>
                        </View>
                    </View>
                </View>

                <View className="flex-row mt-4 items-center justify-between">
                    <View>
                        <Text className="text-base font-bold">Price</Text>
                        <Text className="text-2xl font-bold text-green-500">150$</Text>
                    </View>
                    <View className="bg-primary px-20 py-3 rounded-xl flex-row items-center">
                        <Text className="text-base font-bold text-white">Book now </Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />

                    </View>
                </View>
            </View>
            <View className="absolute top-14 left-8 items-center">
                <View className="bg-white rounded-xl h-10 w-10 justify-center items-center shadow-lg">
                    <MaterialIcons name="keyboard-arrow-left" size={20} color="gray" />
                </View>
            </View>
        </View >);
};
