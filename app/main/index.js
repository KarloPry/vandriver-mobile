import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import ScanRoute from "./driver/scan/route";
import ViewRoute from "./driver/route/route";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import PendingRoutes from "./driver/pending/route";

const Tab = createBottomTabNavigator();

export default function RouterMain() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Scan"
        component={ScanRoute}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="id-card" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Route"
        component={ViewRoute}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="route" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Pending"
        component={PendingRoutes}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="upcoming" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
