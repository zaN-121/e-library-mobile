import { useState } from "react";
import { View, Text} from "react-native";
import FormInput from "../../common/form/FormInput";
import FormPassword from "../../common/form/FormPassword";
import FormButton from "../../common/form/FormButton";
import styles from "./LoginUser.style";
import { useRouter } from "expo-router";
import { userLogin } from "../../../services/authApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AnimatedLottieView from "lottie-react-native";


const Login = () => {
    const router = useRouter()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin =  () => {
        userLogin({
            userName,
            password
        }).then( async (result)=>{
            if(result.data.code == 200){
                await AsyncStorage.setItem('AccessToken', result.data.data)
                router.push('home')
            }
            else{
                alert('Login Failed')
            }
        }).catch(err=>{
            alert('Login Failed')
            console.error(err)
        })
    }
    
    
    return (
        <View style={{alignItems: 'center'}}>
            <AnimatedLottieView
            autoPlay={true}
            style={{width: 200, height: 300}}
            source={require('../../../assets/images/87845-hello.json')}
            />
            <View>
            <Text style={styles.text}>Login Page</Text>
            </View>
            <View>
                <View>
                <FormInput
                value={userName}
                onChangeValue={setUserName}
                placeholder={'Enter username'}
                />
                </View>
                <View>
                <FormPassword
                value={password}
                onChangeValue={setPassword}
                placeholder={'Enter your password'}
                />
                </View>
                <FormButton label={'login'} onClick={handleLogin}/>
                <Text style={styles.link}>Don't have an account? </Text>
                <Text onPress={()=> router.push('regist')} style={styles.link}>Create Account</Text>
            </View>
        </View>
    )
}


export default Login