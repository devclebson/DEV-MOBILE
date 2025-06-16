import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyle';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            Bat Pass Generator
        </Text>
        <Image style={{
          resizeMode: 'contain',
          height:180
        }} 
        source={require('../../../assets/bat-logo.png')}
        />
    </>
  );
}