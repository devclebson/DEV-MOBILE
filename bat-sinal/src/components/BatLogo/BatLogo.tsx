import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyle';

export function BatLogo() {
  return (
    <>
        <View style={styles.imageShadowWrapper}>
          <Image style={{
            resizeMode: 'contain',
            height:180,
          }} 
          source={require('../../assets/logo-bat-pequena.png')}
          />
        </View>
    </>
  );
}