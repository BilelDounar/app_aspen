import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import { useFonts, Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

const categories = ["Location", "Hotels", "Food", "Adventure"];

const popularPlaces = [
    {
        id: "1",
        name: "Gros Horloge",
        image: require("../assets/image-figma/gros-horloge.png"),
        rating: 4.1,
    },
    {
        id: "2",
        name: "Radisson Blue",
        image: require("../assets/image-figma/radisson.jpg"),
        rating: 4.5,
    },
];

const recommendedPlaces = [
    {
        id: "1",
        name: "Aitre saint maclou",
        image: require("../assets/image-figma/aitre.jpg"),
        rating: 3.9,
    },
    {
        id: "2",
        name: "La Couronne",
        image: require("../assets/image-figma/couronne.jpg"),
        rating: 3.9,
    },
];

export default function explore() {
    const [activeCategory, setActiveCategory] = useState("Location");
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) return null;

    return (
        <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
            <View className="px-5 pt-14 pb-6">
                {/* Header */}
                <View className="flex-row justify-between items-start">
                    <View>
                        <Text className="text-sm text-gray-500 font-montserrat">
                            Explore
                        </Text>
                        <Text className="text-3xl font-montserrat-bold text-black">
                            Rouen
                        </Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                        <Ionicons name="location-sharp" size={16} color="#176ff2" />
                        <Text className="text-sm text-gray-500 font-montserrat">
                            Rouen, FR
                        </Text>
                        <Ionicons name="chevron-down" size={14} color="#176ff2" />
                    </View>
                </View>

                {/* Search bar */}
                <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3 mt-6">
                    <Ionicons name="search-outline" size={20} color="#999" />
                    <TextInput
                        placeholder="Find things to do"
                        placeholderTextColor="#999"
                        className="flex-1 ml-2 text-sm font-montserrat"
                    />
                </View>

                {/* Category tabs */}
                <View className="flex-row gap-3 mt-5">
                    {categories.map((cat) => (
                        <TouchableOpacity
                            key={cat}
                            onPress={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full ${
                                activeCategory === cat
                                    ? "bg-primary"
                                    : "bg-transparent border border-gray-200"
                            }`}
                        >
                            <Text
                                className={`text-sm ${
                                    activeCategory === cat
                                        ? "text-white font-montserrat-bold"
                                        : "text-gray-400 font-montserrat"
                                }`}
                            >
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Popular section */}
                <View className="mt-7">
                    <View className="flex-row justify-between items-center">
                        <Text className="text-lg font-montserrat-bold text-black">
                            Popular
                        </Text>
                        <TouchableOpacity>
                            <Text className="text-sm text-primary font-montserrat-bold">
                                See all
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={popularPlaces}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ gap: 16, marginTop: 12 }}
                        renderItem={({ item }) => (
                            <View className="w-44 h-60 rounded-2xl overflow-hidden">
                                <Image
                                    source={item.image}
                                    className="w-full h-full"
                                    resizeMode="cover"
                                />
                                <View className="absolute bottom-0 left-0 right-0 p-3">
                                    <Text className="text-white text-sm font-montserrat-bold">
                                        {item.name}
                                    </Text>
                                    <View className="flex-row items-center gap-1 mt-1">
                                        <Ionicons name="star" size={14} color="#FFD700" />
                                        <Text className="text-white text-xs font-montserrat">
                                            {item.rating}
                                        </Text>
                                    </View>
                                </View>
                                <TouchableOpacity className="absolute bottom-3 right-3 bg-white/30 rounded-full p-1.5">
                                    <Ionicons name="heart" size={16} color="#FF6B6B" />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>

                {/* Recommended section */}
                <View className="mt-7">
                    <Text className="text-lg font-montserrat-bold text-black">
                        Recommended
                    </Text>

                    <FlatList
                        data={recommendedPlaces}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ gap: 16, marginTop: 12 }}
                        renderItem={({ item }) => (
                            <View className="w-40">
                                <View className="w-full h-36 rounded-2xl overflow-hidden">
                                    <Image
                                        source={item.image}
                                        className="w-full h-full"
                                        resizeMode="cover"
                                    />
                                    <View className="absolute bottom-2 right-2 bg-white/80 rounded-full px-2 py-0.5 flex-row items-center gap-1">
                                        <Ionicons name="star" size={12} color="#FFD700" />
                                        <Text className="text-xs font-montserrat-bold text-black">
                                            {item.rating}
                                        </Text>
                                    </View>
                                </View>
                                <Text className="text-sm font-montserrat text-black mt-2">
                                    {item.name}
                                </Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    );
};
