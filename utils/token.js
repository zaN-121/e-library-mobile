import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import jwtDecode from 'jwt-decode';



export async function getToken(){
    const token = await AsyncStorage.getItem('AccessToken')
    return token
}

export async function removeToken(){
    await AsyncStorage.clear()
}

export const checkToken = async () => {
    const router = useRouter()
    try {
      const token = await AsyncStorage.getItem('AccessToken');
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      console.log(decodedToken.exp)
      if (!token || decodedToken.exp < currentTime) {
        await AsyncStorage.removeItem('AccessToken');
        router.push('login')
      }
    } catch (error) {
      console.error(error);
    }
  };