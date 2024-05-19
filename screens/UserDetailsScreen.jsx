import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import ApiService from "../services/api.service";
import styles from "../styles";

const UserDetailsScreen = ({navigation}) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    ApiService.me().then(setUserData);
  }, [])

  if (!userData) return <Text>Loading...</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Id: {userData.user.id}</Text>
      <Text style={styles.label}>Email: {userData.user.email}</Text>
      <Text style={styles.label}>Currently games playing: {userData.currentlyGamesPlaying}</Text>
      <Text style={styles.label}>Games lost: {userData.gamesLost}</Text>
      <Text style={styles.label}>Games played: {userData.gamesPlayed}</Text>
      <Text style={styles.label}>Games won: {userData.gamesWon}</Text>
      <Button title={'See games'} onPress={handleSeeGames}/>
    </View>
  );

  function handleSeeGames() {
    navigation.navigate('Games')
  }
}

export default UserDetailsScreen;