import './global.css';
import { Tabs } from "expo-router";

export default function RootLayout() {
    return <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="about" options={{ title: "About" }} />
        <Tabs.Screen name="contact" options={{ title: "Contact" }} />
        <Tabs.Screen name="news" options={{ title: "News", headerShown: false }} />
    </Tabs>;
};
