import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "../styles";
import { useEffect, useState } from "react";
import ApiService from "../services/api.service";
import GameCard from "../components/GameCard";

const GamesScreen = () => {
  const [games, setGames] = useState(null)

  useEffect(() => {
    ApiService.getAllGames().then(setGames)
  }, [])

  if (!games) return <Text>Loading...</Text>

  return (
    <ScrollView style={styles.container}>
      <FlatList 
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item}) => <GameCard game={item}/>}
      />
    </ScrollView>
  );
}

export default GamesScreen;