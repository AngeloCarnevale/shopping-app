import { View, Text, TextInput } from "react-native";
import React from "react";
import ProfilePic from "./ProfilePic";
import { Input } from "./ui/Input";

interface HeaderBarProps {
  title?: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = () => {
 

  return (
    <View className="p-4 flex flex-row items-center justify-between bg-black">
      <Input className="w-[250px] h-10" placeholder="I'm search..."/>
      <ProfilePic />
    </View>
  );
};
