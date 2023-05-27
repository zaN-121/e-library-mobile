import AsyncStorage from "@react-native-async-storage/async-storage"

export async function getToken(){
    const token = await AsyncStorage.getItem('AccessToken')
return token
}

export async function removeToken(){
    await AsyncStorage.clear()
}
