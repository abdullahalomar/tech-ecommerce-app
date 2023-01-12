import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import checkoutScreen from "./src/screens/checkoutScreen";
import homeScreen from './src/screens/homeScreen'
import onboardingScreen from "./src/screens/onboardingScreen";
import productScreen from "./src/screens/productScreen";


const navigator = createStackNavigator(
  {
    Home: homeScreen,
    Product: productScreen,
    Checkout: checkoutScreen,
    Onboarding: onboardingScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Tech ecommerce",
    },
  }
)

export default createAppContainer(navigator);
