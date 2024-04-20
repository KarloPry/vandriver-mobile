import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/images/logo-letters.png")}
          style={styles.imageLogoText}
          width={500}
          height={500}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Correo electrónico"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Contraseña</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Contraseña"
        />
      </View>
      <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "center" ,marginVertical: 20}}>
      <Pressable style={{backgroundColor:"#1C385F", borderRadius: 3, paddingVertical: 4, paddingHorizontal: 20, alignContent: "center", alignItems: "center"}}>
        <Text style={{color: "white", fontSize: 22}}>Iniciar sesión</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "center",
  },
  textInput: {
    paddingHorizontal: 9,
    paddingVertical: 10,
  },
  input: {
    display: "flex",
    backgroundColor: "#f4f4f4",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    textAlign: "left",
  },
  inputContainer: {
    paddingHorizontal: 30,
  },
  imageContainer: {
    alignItems: "center",
  },
});
