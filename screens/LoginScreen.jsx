import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../styles";
import ApiService from "../services/api.service";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" textContentType="emailAddress" onChangeText={setEmail}/>
      <TextInput placeholder="Password" textContentType="password" onChangeText={setPassword}/>
      <Button title="Login" onPress={handleLoginButton}/>
      <Text onPress={handleGoToRegister}>Don't have an account? Register</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );

  function handleLoginButton() {
    ApiService.login(email,password)
      .then(() => {
        navigation.navigate('UserDetails')
      })
      .catch((e) => {
        if (e.response.data.message)
          setError(e.response.data.message)
        else
          setError('Opperation could not be finished')
      })
  }

  function handleGoToRegister() {
    navigation.navigate("Register")
  }
}

export default LoginScreen;