import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { CartContext } from "../Provider/Cart/CartContext";

export default function AddToCart({ styles, navigation, item }) {
  const { addToCart,cart } = useContext(CartContext);
  
  return (
    <>
      
      <TouchableOpacity
        style={styles.secFCart}
        onPress={() => {
        
          navigation.push("Cart");
            
        }}
      >
        <View style={styles.increaseBtn}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
