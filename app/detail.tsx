import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function detail() {
    return (
        <View className="flex-1 relative p-4">

            <View className="">


            </View>

            <View className="absolute top-12 left-5 items-center">
                <View className="bg-white rounded-xl h-10 w-10 justify-center items-center shadow-lg">
                    <MaterialIcons name="keyboard-arrow-left" size={20} color="gray" />
                </View>
            </View>

        </View>
    );
};
