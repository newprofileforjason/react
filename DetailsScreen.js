import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

export default function DetailsScreen({ navigation, route }) {
  const parameters = route.params;
  return (
    <View>
      <Text>title: {parameters.title}</Text>
      <Text>body: {parameters.body}</Text>

      <Button
        title="dodaj"
        onPress={() => {
          parameters.funkcija(parameters.title, parameters.body);
        }}
      />
    </View>
  );
}
