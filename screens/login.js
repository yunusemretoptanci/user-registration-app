import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4">Login</Text>
      <View className="w-4/5 mb-4">
        <TextInput
          className="border-b-2 py-2 px-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View className="w-4/5 mb-4">
        <TextInput
          className="border-b-2 py-2 px-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        className="bg-blue-500 py-2 px-4 rounded"
        onPress={handleLogin}
      >
        <Text className="text-white text-lg font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
