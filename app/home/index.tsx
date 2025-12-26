import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, TouchableOpacity, View } from "react-native";
const Home = () => {
  const handleDeleteItem = () => {
    AsyncStorage.clear();
  };
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleDeleteItem}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
