import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';


const App = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        {/* <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text> */}
        {/* <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        /> */}
        {/* <Text style={styles.paragraph}>
          Swipe from the side or press button below !
        </Text> */}
        
        <TouchableOpacity 
          style={styles.filter}
          onPress={() => drawer.current.openDrawer()}
          >
          <Feather name="filter" size={22} color="#6d7c8f" />
          </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  filter:{
    borderLeftWidth: 0.7,
    borderRightWidth: 0.7,
    borderRightColor: '#87888a',
    borderLeftColor: '#87888a',
    paddingHorizontal: 10,
  },
});

export default App;