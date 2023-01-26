import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contentLogo}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      <View style={styles.contentInputs}>
        <TextInput
          placeholder="Login"
          placeholderTextColor="#dedede"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#dedede"
          style={styles.input}
        />
        <Text style={styles.forgot}> Esqueci minha senha</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("home")}
        >
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              color: "#fff",
              fontSize: 14,
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#121214",
    flex: 1,

    alignItems: "center",
  },
  contentLogo: {
    padding: 10,
    height: 420,
  },
  contentInputs: {
    padding: 10,
    margin: 10,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    height: 650,
    width: 250,
  },
  input: {
    backgroundColor: "#121214",
    height: 60,
    width: "80%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    color: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    elevation: 4,
  },
  forgot: {
    color: "#fff",
    fontSize: 12,
    textAlign: "right",
    width: "80%",
    marginTop: 20,
  },
  button: {
    height: 60,
    width: "80%",
    backgroundColor: "#00875F",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
