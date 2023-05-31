import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";


export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("./assets/skulls.jpg")}
      >
        <View style={styles.detail}>
          <Text style={{ color: '#fff', fontSize: 35, fontWeight: "bold" }}>CovidStats</Text>
          <Text style={{ color: 'orange', lineHeight: 25, marginTop: 15, textTransform: 'uppercase' }}>Daily Updates</Text>
          <View style={styles.button}>
            <Text style={{ fontWeight: "bold", color: '#fff' }}>Powered by ToolzTech</Text>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
  },
  detail: {
    height: "50%",
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    paddingHorizontal: 40,
  },
  button: {
    marginTop: 15,
    justifyContent: "flex-end",
    alignItems: "center"
  },
});
