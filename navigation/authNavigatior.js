import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
const Stack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
