import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import All from "./src/components/All";
import allOrder from "./src/components/allOrder";
import MyOrders from "./src/components/MyOrders";
import ReturnDetails from "./src/components/ReturnDetails";
import Success from "./src/components/Success";
import cartScreen from "./src/screens/cartScreen";
import checkoutScreen from "./src/screens/checkoutScreen";
import homeScreen from './src/screens/homeScreen'
import loginScreen from "./src/screens/loginScreen";
import onboardingScreen from "./src/screens/onboardingScreen";
import productScreen from "./src/screens/productScreen";
import profileScreen from "./src/screens/profileScreen";
import shopScreen from "./src/screens/shopScreen";
import wishlistScreen from "./src/screens/wishlistScreen";
import Review from "./src/components/Review";
import Notification from "./src/components/Notification";
import Cancel from "./src/components/Cancel";
import CancelDetail from "./src/components/CancelDetail";
import CouponModal from "./src/components/CouponModal";


const navigator = createStackNavigator(
  {
    Home: homeScreen,
    Product: productScreen,
    Checkout: checkoutScreen,
    Onboarding: onboardingScreen,
    Login: loginScreen,
    Cart: cartScreen,
    Profile: profileScreen,
    Wishlist: wishlistScreen,
    Shop: shopScreen,
    MyOrder: MyOrders,
    Order: allOrder,
    AllOrder: All,
    Return: ReturnDetails,
    Success: Success,
    Review: Review,
    Notification: Notification,
    Cancel: Cancel,
    CancelDetail: CancelDetail,
    CouponModal: CouponModal,
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      // title: "Tech ecommerce",
    },
  }
)

export default createAppContainer(navigator);
