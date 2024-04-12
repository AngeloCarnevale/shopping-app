import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

export default function User() {
  return (
    <View className={"items-center"}>
        <Avatar  className="w-32 h-32 border border-gray-600">
            <AvatarImage source={{uri: "https://github.com/AngeloCarnevale.png"}}/>
            <AvatarFallback>ÂC</AvatarFallback>
        </Avatar>
      <Text className="font-bold text-white text-2xl mt-4">Ângelo Carnevale</Text>
      <Text className="text-gray-400 text-lg">@tiaoshawty</Text>
    </View>
  );
}
