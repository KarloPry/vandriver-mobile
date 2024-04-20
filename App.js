import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import LoginRoute from "./app/auth/login/route";
import SignupRoute from "./app/auth/signup/route";
import RouterMain from "./app/main";
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginRoute}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupRoute}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DriverTab"
          component={RouterMain}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
