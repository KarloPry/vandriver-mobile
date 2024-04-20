import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
export default function LoginRoute({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/logo-letters.png")}
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
          placeholder="Contraseña"
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#1C385F",
            borderRadius: 3,
            paddingVertical: 4,
            paddingHorizontal: 20,
            alignContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("DriverTab");
          }}
        >
          <Text style={{ color: "white", fontSize: 28 }}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>¿No tienes cuenta? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text>Registrarse</Text>
        </TouchableOpacity>
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
