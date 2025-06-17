import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyle';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <View style={styles.imageShadowWrapper}>
          <Image style={{
            resizeMode: 'contain',
            height:180,
          }} 
          source={require('../../../assets/bat-logo.png')}
          />
        </View>
    </>
  );
}