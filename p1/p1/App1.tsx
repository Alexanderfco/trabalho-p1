import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from './styles1';
import logoclaro from "./assets/logoclaro.png"

const App = () => {
  return (
    <View style={styles.container}>
    <Image source={logoclaro} style={styles.image} />
  </View>
  );
}
export default App;
