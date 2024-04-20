import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const UpcomingRouteCard = ({ hour, quantity }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 5,
        width: 300,
        backgroundColor: "#F4F4F4",
        justifyContent: "center",
        marginTop: 20
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-between",
          alignItems: "stretch",
          gap: 10,
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold" }}>{hour}</Text>
          <Text>{quantity} personas</Text>
        </View>
        <AntDesign
          name="caretright"
          size={24}
          color="black"
          style={{ marginLeft: "50%", marginTop: 5 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default function PendingRoutes({ navigation }) {
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
          <ScrollView>
            <UpcomingRouteCard hour={"12:00 PM"} quantity={20} />
            <UpcomingRouteCard hour={"14:00 PM"} quantity={15} />
            <UpcomingRouteCard hour={"16:00 PM"} quantity={10} />
            <UpcomingRouteCard hour={"18:00 PM"} quantity={10} />
            <UpcomingRouteCard hour={"19:00 PM"} quantity={12} />
            <UpcomingRouteCard hour={"20:00 PM"} quantity={14} />
            <UpcomingRouteCard hour={"20:30 PM"} quantity={16} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
