import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Root Page</Text>
       <div id="box">
        hi
       </div>
    </View>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4ff",
    borderWidth: 2,
    borderColor: "red",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  box: {
    marginTop: 20,
    width: 120,
    height: 120,
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
