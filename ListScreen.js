import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button,
} from "react-native";

export default function ListScreen({ navigation, route }) {
  const parameters = route.params.list;
  const funkcija = route.params.funkcija;
  return (
    <View>
      {parameters.map((param) => (
        <ScrollView>
          <Text>{param.title}</Text>
        </ScrollView>
      ))}

      <Button
        title="kupi"
        onPress={() => {
          funkcija();
        }}
      />
    </View>
  );
}
