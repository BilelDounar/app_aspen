import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts, PermanentMarker_400Regular } from "@expo-google-fonts/permanent-marker";
import { Montserrat_300Light, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { useRouter } from "expo-router";

export default function index() {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        PermanentMarker_400Regular,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) return null;

    return (
        <ImageBackground
            source={require("../assets/image-figma/st-catherine.jpg")}
            className="flex-1"
            resizeMode="cover"
        >
            <View className="flex-1 justify-between px-8 pt-24 pb-12">
                {/* Title */}
                <View className="items-center">
                    <Text className="text-white text-7xl font-permanent-marker">
                        Aspen
                    </Text>
                </View>

                {/* Bottom section */}
                <View className="gap-6">
                    <View>
                        <Text className="text-white text-lg font-montserrat-light">
                            Explore your
                        </Text>
                        <Text className="text-white text-5xl font-montserrat-bold">
                            City
                        </Text>
                    </View>

                    <TouchableOpacity
                        className="bg-primary rounded-full py-4 items-center"
                        onPress={() => router.push("/explore")}
                        activeOpacity={0.8}
                    >
                        <Text className="text-white text-lg font-montserrat-bold tracking-wider">
                            GO !
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="light" translucent />
        </ImageBackground>
    );
};
