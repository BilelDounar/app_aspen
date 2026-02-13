import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, TextInput, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Map() {
    return (
        <View className="flex-1 relative">
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 49.4431,
                    longitude: 1.0993,
                    latitudeDelta: 0.02,    // plus petit = plus zoomé
                    longitudeDelta: 0.05,
                }}
            />

            <View className="absolute top-12 left-5 items-center">
                <View className="bg-white rounded-xl h-10 w-10 justify-center items-center shadow-lg">
                    <MaterialIcons name="keyboard-arrow-left" size={20} color="gray" />
                </View>
            </View>

            <View className="absolute top-25 left-5 items-center z-100">
                <View className=" rounded-xl h-10 w-fit justify-center items-center shadow-lg ">
                    <TextInput
                        placeholder="Rechercher..."
                        className="absolute left-0 placeholder:text-gray-500 top-0 bg-white h-14 w-88 px-4 rounded-full flex-1 justify-center items-center shadow-lg "
                    >
                        <Fontisto name="search" size={20} color="lightgray" />
                    </TextInput>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});
