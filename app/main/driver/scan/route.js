import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ScanRoute({ navigation }) {
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
          <Text>Acerca tu teléfono al pasajero</Text>
          <Image source={require("../../../../assets/images/radio-nfc.png")} />
          <TouchableOpacity
            style={{
              backgroundColor: "#416C95",
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              Escanear teléfono
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
