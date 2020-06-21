import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  ActivityIndicator,
} from "react-native";

export default function UsersScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  function addToList(title, body) {
    setList([
      ...list,
      {
        title: title,
        body: body,
      },
    ]);
    navigation.navigate("Users", {});
  }

  function emptyList() {
    setList([]);
    //         fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue', OVDJE UMJESTO OVOG NAPISI CARTNIZ
//     secondParam: 'yourOtherValue'
//   })
// });
    navigation.navigate("Users", {});
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <Button
        title="cart"
        onPress={() =>
          navigation.navigate("CART", {
            list: list,
            funkcija: emptyList,
          })
        }
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data.map((user) => (
          <ScrollView>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text>{user.title}</Text>
            <Button
              title="detalji"
              onPress={() =>
                navigation.navigate("Details", {
                  title: user.title,
                  body: user.body,
                  funkcija: addToList,
                })
              }
            />
          </ScrollView>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
