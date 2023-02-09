import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { Entypo } from "@expo/vector-icons";
import Review from "../components/Review";
import useSingleProduct from "../hooks/useSingleProduct";
import Loading from "../components/Loading";
import { CartProvider } from "../Provider/Cart/CartProvider";
import AddToCart from "../components/AddToCart";

export default function productScreen({ navigation }) {
  const [counter, setCounter] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const singleProducts = useSingleProduct(navigation.state.params.id);
  const [image, setImage] = useState({});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const [circle, setCircle] = useState("");

  const colors = ["#645CBB", "#D9ACF5", "#CF4DCE"];

  return (
    <CartProvider>
      <View style={styles.background}>
        {singleProducts.loading == false ? (
          <View style={styles.body}>
            {/* menu */}
            <View style={styles.IconFlex}>
              <TouchableOpacity style={styles.firstIcon}></TouchableOpacity>

              <TouchableOpacity style={styles.shareIcon}></TouchableOpacity>
              <TouchableOpacity
                style={styles.secondIcon}
                onPress={() => navigation.navigate("Wishlist")}
              >
                <AntDesign
                  style={styles.secondArrow}
                  name="heart"
                  size={22}
                  color="#F94A29"
                />
              </TouchableOpacity>
            </View>
            {/* menu */}

            <ScrollView>
              <View style={styles.productBody}>
                <LinearGradient
                  colors={["white", "white"]}
                  style={styles.container}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setImage({ uri: singleProducts.data.images[0].src });
                      toggleModal();
                    }}
                  >
                    <Image
                      style={styles.head}
                      source={{ uri: singleProducts.data.images[0].src }}
                      resizeMode="contain"
                    ></Image>
                  </TouchableOpacity>
                </LinearGradient>

                <View style={styles.dotLineBox}>
                  {/* <View style={styles.dotLineOne}></View>
        <View style={styles.dotLineTwo}></View>
        <View style={styles.dotLineOne}></View> */}
                </View>

                {/* Featured */}
                <View style={styles.featured}>
                  {singleProducts.data.images.map((image, id) => (
                    <TouchableOpacity
                      key={id}
                      onPress={() => {
                        setImage({ uri: image.src });
                        toggleModal();
                      }}
                    >
                      <Image
                        style={styles.headSet}
                        source={{ uri: image.src }}
                        resizeMode="contain"
                      ></Image>
                    </TouchableOpacity>
                  ))}
                </View>
                <Modal style={styles.modalBody} isVisible={isModalVisible}>
                  <TouchableOpacity style={styles.okBox} onPress={toggleModal}>
                    <Entypo name="circle-with-cross" size={28} color="white" />
                  </TouchableOpacity>
                  <View>
                    <Image style={styles.headSetModal} source={image}></Image>
                  </View>
                </Modal>

                {/* Featured */}

                {/* product details */}
                <View>
                  <LinearGradient
                    style={styles.fifthSection}
                    colors={["#fcfcfc", "#f0f0f0"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                  >
                    <View style={styles.fifth}>
                      <Text style={styles.free}>FREE SHIPPING</Text>
                      <Text style={styles.twoHun}>
                        <AntDesign name="star" size={18} color="#E6BB66" />{" "}
                        <Text style={styles.point}>
                          {singleProducts?.data.average_rating}
                        </Text>
                        ({singleProducts?.data.average_rating})
                      </Text>
                    </View>

                    <View style={styles.six}>
                      <Text style={styles.sony}>
                        {singleProducts.data.name}
                      </Text>
                      <Text style={styles.long}>
                        {singleProducts.data.description}
                      </Text>
                    </View>
                    <Review />
                  </LinearGradient>
                </View>
              </View>
            </ScrollView>

            <View style={styles.productCounting}>
              <View style={{ paddingVertical: 25 }}>
                <View style={styles.seven}>
                  <Text style={styles.sevenNumber}>
                    $ {singleProducts.data.price * counter}
                  </Text>

                  <View style={styles.sevenFlex}>
                    {colors.map((color, id) => {
                      return (
                        <TouchableOpacity
                          key={id}
                          style={circle == color && styles.firstBox}
                          onPress={() => {
                            setCircle(color);
                          }}
                        >
                          <View
                            style={{ ...styles.circle, backgroundColor: color }}
                          ></View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
                <View style={styles.lastSection}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.firstF}>
                      <TouchableOpacity
                        style={styles.decreaseBtn}
                        onPress={decrement}
                      >
                        <FontAwesome
                          style={styles.decrease}
                          name="minus"
                          size={17}
                          color="#4b85e3"
                        />
                      </TouchableOpacity>
                      <Text style={styles.iCNumber}>{counter}</Text>
                      <TouchableOpacity
                        style={styles.increaseBtn}
                        onPress={increment}
                      >
                        <FontAwesome
                          style={styles.increase}
                          name="plus"
                          size={17}
                          color="#4b85e3"
                        />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={styles.secF}
                      onPress={() => navigation.navigate("Checkout")}
                    >
                      <Text style={styles.buttonText}>Buy Now</Text>
                    </TouchableOpacity>

                    <AddToCart styles={styles} navigation={navigation} item={singleProducts.data}/>
                  </View>
                </View>
              </View>
            </View>

            {/* product details */}
          </View>
        ) : (
          <Loading />
        )}
      </View>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ffff",
    width: "100%",
    height: "85%",
  },
  container: {
    width: 200,
    height: 260,
    borderRadius: 10,
    marginHorizontal: 95,
    marginTop: 80,
  },

  head: {
    width: 200,
    height: 280,
    position: "absolute",
  },
  dotLineOne: {
    width: 8,
    height: 8,
    backgroundColor: "#CFCFCF",
  },
  dotLineTwo: {
    width: 30,
    height: 8,
    backgroundColor: "#729bd6",
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  dotLineOne: {
    width: 8,
    height: 8,
    backgroundColor: "#CFCFCF",
    borderRadius: 10,
  },
  dotLineBox: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 160,
  },
  featured: {
    flexDirection: "row",
    marginBottom: 20,
    marginHorizontal: 70,
  },
  headSet: {
    marginTop: 10,
    marginLeft: 10,
    width: 70,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1862db",
  },
  point: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3F4343",
  },
  firstBox: {
    width: 28,
    height: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "Black",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 50,
  },

  // productInformation
  fifthSection: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",

    elevation: 10,
  },
  fifth: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 20,
  },
  twoHun: {
    color: "#909090",
  },
  free: {
    fontSize: 15,
    color: "#F2921D",
  },
  six: {
    marginHorizontal: 25,
  },
  sony: {
    fontSize: 22,
    fontWeight: "600",
    color: "#343A40",
    marginBottom: 10,
  },
  long: {
    color: "#909090",
    marginBottom: 20,
  },
  seven: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  sevenNumber: {
    fontSize: 20,
    fontWeight: "600",
    color: "#252526",
  },
  sevenFlex: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  lastSection: {
    marginHorizontal: 25,
    marginTop: 22,
  },
  firstF: {
    width: 94,
    height: 34,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingRight: 5,
  },
  increase: {
    marginTop: 8,
  },
  decrease: {
    marginTop: 8,
    marginLeft: 6,
  },
  iCNumber: {
    fontSize: 18,
    marginTop: 2.5,
    paddingHorizontal: 5,
    color: "#252526",
  },
  secF: {
    width: 100,
    height: 48,
    backgroundColor: "#6d6bed",
    borderRadius: 55,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    marginTop: 13,
    textAlign: "center",
  },
  secFCart: {
    width: 100,
    height: 48,
    backgroundColor: "#70d491",
    borderRadius: 55,
  },
  productCounting: {
    position: "absolute",
    marginTop: "156%",
    backgroundColor: "#8ca3db",
    width: "100%",
    height: "24%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  // productBody:{
  //     height: 640,
  // },
  // modal
  modalBody: {
    width: "75%",
    marginHorizontal: 40,
    borderRadius: 20,
    marginVertical: 100,
    position: "absolute",
  },
  closeButton: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 4,
    color: "white",
  },
  okBox: {
    marginLeft: "90%",
  },
  editProfile: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#5585d4",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 25,
  },
  headSetModal: {
    marginTop: 10,
    marginLeft: 10,
    width: "100%",
    height: 400,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1862db",
  },

  // menu
  IconFlex: {
    flexDirection: "row",
    backgroundColor: "#fafafa",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  firstIcon: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  arrow: {
    marginLeft: 10,
    marginTop: 11,
  },
  secondIcon: {
    width: 45,
    height: 45,
    backgroundColor: "#DDDDDD",
    borderRadius: 30,
    marginLeft: 218,
    marginRight: 10,
    marginVertical: 8,
  },
  secondArrow: {
    marginLeft: 12,
    marginTop: 13,
  },
  shareIcon: {
    width: 45,
    height: 45,

    borderRadius: 30,
  },
});
