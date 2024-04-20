import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ViewRoute({ navigation }) {
  const handleScan = () => {
    console.log("Scanning...");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../../assets/images/logo-letters.png")}
            width={100}
            height={100}
            style={{ width: 150, height: 170 }}
          />
        </View>
        <Text>Dirección</Text>
        <Text>Hora de inicio</Text>
        <Image
          source={require("../../../../assets/images/arrow_down.png")}
          width={50}
          height={300}
        />
        <Text>Dirección 2</Text>
        <TouchableOpacity>
          <Text>Finalizar viaje</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
