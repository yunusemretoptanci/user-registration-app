import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Handle registration logic here
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />

      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      <Text>Confirm Password:</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your password"
        secureTextEntry
      />

      <TouchableOpacity onPress={handleRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
