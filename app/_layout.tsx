import { Tabs } from "expo-router";
import '../global.css';


export default function RootLayout() {
    return <Tabs>
        <Tabs.Screen name="index" options={{
            title: "Home",
            headerShown: false,
            tabBarStyle: { display: "none" },
        }} />
        <Tabs.Screen name="explore" options={{
            title: "Map",
            headerShown: false,
            href: null,
        }} />
        <Tabs.Screen name="map" options={{
            title: "Map",
            headerShown: false,
            href: null,
        }} />
        <Tabs.Screen name="detail" options={{
            title: "Map",
            headerShown: false,
            href: null,
        }} />
    </Tabs>;
};
