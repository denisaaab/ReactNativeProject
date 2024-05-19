import { Text, View } from "react-native";
import styles from "../styles";

const GameCard = ({game}) => {
  return (
    <View style={styles.card}>
        <Text style={styles.label}>Game ID: {game.id}</Text>
        <Text style={styles.label}>Player 1: {game.player1Id}</Text>
        <Text style={styles.label}>Player 2: {game.player2Id}</Text>
    </View>
  );
}

export default GameCard;