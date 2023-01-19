import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import cartScreen from "./src/screens/cartScreen";
import checkoutScreen from "./src/screens/checkoutScreen";
import homeScreen from './src/screens/homeScreen'
import loginScreen from "./src/screens/loginScreen";
import onboardingScreen from "./src/screens/onboardingScreen";
import productScreen from "./src/screens/productScreen";
import profileScreen from "./src/screens/profileScreen";
import wishlistScreen from "./src/screens/wishlistScreen";


const navigator = createStackNavigator(
  {
    Home: homeScreen,
    Product: productScreen,
    Checkout: checkoutScreen,
    Onboarding: onboardingScreen,
    Login: loginScreen,
    Cart: cartScreen,
    Profile: profileScreen,
    Wishlist: wishlistScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Tech ecommerce",
    },
  }
)

export default createAppContainer(navigator);
