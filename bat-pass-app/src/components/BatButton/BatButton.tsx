import React from 'react';
import { Button, View } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View style={styles.container}>
        <Button
            title="Gerar Pass"
            color="#841584"
            accessibilityLabel="Generate Pass Button"
            onPress={() => console.log('Button Pressed')} 
        />
    </View>
  );
}