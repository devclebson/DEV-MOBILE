import React from "react";
import { View, Text,} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./Style"; // Adjust the import path as necessary
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextinput } from "../../components/BatTextinput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";




export default function Home() {
  return (
    <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
          <BatLogo />
        </View>
        <View style={styles.inputContainer}>
          <BatTextinput />
          <BatButton />
        </View>

        <StatusBar style="light" />
    </View>
  );
}

