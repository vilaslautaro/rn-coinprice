import { View, Text, StyleSheet } from 'react-native'

const CoinItem = ({coin}) => {
  return (
    <View style={styles.container}>
      <Text text={styles.text}>{coin.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#949494"
  },
  text: {
    color: "#fff"
  }
})

export default CoinItem