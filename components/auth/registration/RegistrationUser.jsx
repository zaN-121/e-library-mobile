import { useState } from "react";
import { View, Text } from "react-native";
import FormButton from "../../common/form/FormButton";
import FormInput from "../../common/form/FormInput";
import FormPassword from "../../common/form/FormPassword";
import styles from "./RegistrationUser.style";
import { useRouter } from "expo-router";
import { userRegistration } from "../../../services/authApi";

const Registration = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirsName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')



    const route = useRouter()

    const handleRegister = () => {
        userRegistration({
            email,
            password,
            firstName,
            lastName,
            userName,
            phone
        }).then((result)=> {
            if(result.data.code == 200){
                alert("Registration Success")
                route.push('login') 
            }
        }).catch(err=>{
            console.error(err)
        })
    }
    return(
        <View>
            <View>
                <Text style={styles.text}>Registration Page</Text>
            </View>
            <View>
                <FormInput
                value={firstName}
                onChangeValue={setFirsName}
                placeholder={'firstname'}
                />
                <FormInput
                value={lastName}
                onChangeValue={setLastName}
                placeholder={'lastname'}
                />
                <FormInput
                value={userName}
                onChangeValue={setUserName}
                placeholder={'username'}
                />
                 <FormInput
                value={email}
                onChangeValue={setEmail}
                placeholder={'Email'}
                keyboard={'email-address'}
                />
                <FormPassword
                value={password}
                onChangeValue={setPassword}
                placeholder={"password"}
                />
                <FormInput
                value={phone}
                onChangeValue={setPhone}
                placeholder={'phone number'}
                keyboard={'numeric'}
                />
                <FormButton
                label={"Register"}
                onClick={handleRegister}
                />
                <Text style={styles.link}>Already have an account?<Text onPress={()=> route.push('login')}> click here</Text></Text>
            </View>
        </View>
    )
}

export default Registration