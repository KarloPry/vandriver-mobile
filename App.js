import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import LoginRoute from "./app/auth/login/route";
import SignupRoute from "./app/auth/signup/route";
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginRoute} />
        <Stack.Screen name="Signup" component={SignupRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
