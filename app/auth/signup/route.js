import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
export default function SignupRoute({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleSignup = () => {
    console.log(email, password, confirmPassword);
    if (!ValidateEmail(email)) {
      setErrorMessage("Correo electrónico no válido");
      setEmailError(true);
    } else if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      setPasswordError(true);
    }
    setEmailError(false);
    setPasswordError(false);
    console.log("!!!!!!!");
  };
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
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Confirmar Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          secureTextEntry={true}
          onChangeText={(e) => {
            setConfirmPassword(e);
          }}
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
          onPress={handleSignup}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Iniciar sesión</Text>
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
            navigation.navigate("Login");
          }}
        >
          <Text>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "red" }}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
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
