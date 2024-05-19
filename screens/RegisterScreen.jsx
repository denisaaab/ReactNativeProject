import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../styles";
import ApiService from "../services/api.service";

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [error, setError] = useState('');


  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" textContentType="emailAddress" onChangeText={setEmail}/>
      <TextInput placeholder="Password" textContentType="password" onChangeText={setPassword}/>
      <TextInput placeholder="Repeat password" textContentType="password" onChangeText={setRepeatedPassword}/>
      <Button title="Register" onPress={handleRegisterButton}/>
      <Text onPress={handleGoToLogin}>Allready have an account? Login</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );

  function handleRegisterButton() {
    if (password != repeatedPassword) {
      setError("Passwords do not match");
      return;
    }
    
    ApiService.register(email, password)
      .then(() => {
        navigation.navigate('UserDetails')
      })
      .catch((e) => {
        console.log(e)
        if (e.response && e.response.data.message)
          setError(e.response.data.message)
        else
          setError('Opperation could not be finished')
      })

  }

  function handleGoToLogin() {
    navigation.navigate("Login");
  }

}

export default RegisterScreen;