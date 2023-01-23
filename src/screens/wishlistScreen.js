import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import laptop from "../../assets/laptop.png";
import { LinearGradient } from "expo-linear-gradient";
import MenubarScreen from "../components/MenubarScreen";
import { AntDesign } from "@expo/vector-icons";

export default function wishlistScreen({ navigation, result }) {
  return (
    <MenubarScreen navigation={navigation}>
      <View style={{}}>
        <View style={styles.wishBar}>
          <TouchableOpacity>
            <Entypo name="share" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.wish}>wishlist</Text>
          <TouchableOpacity>
            <Entypo name="shopping-cart" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.cartFlex}>
            <View>
              <LinearGradient
                style={styles.wishCart}
                colors={["#FFCFD5", "#DFDFFB"]}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
              >
                <View style={styles.cartContent}>
                  
                  <AntDesign
                    style={styles.heart}
                    name="heart"
                    size={15}
                    color="#FF0032"
                  />
                  
                  {/* <Entypo style={styles.addIcon} name="plus" size={24} color="black" /> */}
                  <Image source={laptop}></Image>
                  
                  <Text style={styles.productName}>Huawei Matebook X 13</Text>
                  <View style={styles.priceReview}>
                    <Text style={styles.productPrice}>$ 20,999</Text>
                    <View style={{ flexDirection: "row" }}>
                      <AntDesign name="star" size={11} color="#FFB200" />
                      <AntDesign name="star" size={11} color="#FFB200" />
                      <AntDesign name="star" size={11} color="#FFB200" />
                      <AntDesign name="star" size={11} color="#FFB200" />
                      <AntDesign name="star" size={11} color="#FFB200" />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View>
              <LinearGradient
                style={styles.wishCart}
                colors={["#FFCFD5", "#DFDFFB"]}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
              >
                <View style={styles.cartContent}>
                  <Image source={laptop}></Image>
                  <Text style={styles.productName}>Huawei Matebook X 13</Text>
                  <Text style={styles.productPrice}>$ 20,999</Text>
                  <TouchableOpacity></TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </View>
    </MenubarScreen>
  );
}

const styles = StyleSheet.create({
  wish: {
    fontSize: 25,
    fontWeight: "800",
  },
  wishBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
    marginHorizontal: 25,
  },
  // button:{
  //   borderRadius: 20,
  //   backgroundColor: '#6d6bed'
  // },
  // btnText:{
  //   textAlign: 'center',
  //   paddingHorizontal: 20,
  //   paddingVertical: 7,

  // },
  wishCart: {
    elevation: 10,
    borderRadius: 20,
    marginBottom: 30,
  },
  cartContent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "700",
    marginVertical: 10,
    lineHeight: 14,
  },
  cartFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  priceReview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heart: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 3,
    marginHorizontal: 5,
    marginTop: 5,
  },
  
});
