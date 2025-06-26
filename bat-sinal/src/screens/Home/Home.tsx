import React, { useState } from "react";
import { View, ImageBackground, StatusBar } from "react-native";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";
import BatForm from "../../components/BatForm/BatForm";
import styles from "./Style";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return showForm ? (
    // Quando o formulário deve aparecer, fundo preto
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <BatForm />
      <StatusBar barStyle="light-content" />

    </View>
  ) : (
    // Quando o formulário ainda não foi acionado, imagem de fundo
    <ImageBackground
      source={require('../../assets/backgroud.jpg')}
      style={{ flex: 1, width: '100%', height: '100%' }}
    >
      <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
          <BatLogo />
        </View>
        <View style={styles.buttonContainer}>
          <BatButton onPress={() => setShowForm(true)} />
        </View>
        <StatusBar barStyle="light-content" />

      </View>
    </ImageBackground>
  );
}
