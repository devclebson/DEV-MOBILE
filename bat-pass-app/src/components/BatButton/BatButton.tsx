import React from 'react';
import { Button, View, Text, Pressable} from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View>

        <Pressable style={styles.button}
            onPress={() => {console.log('Copy Pressed')}}>
            <Text style={styles.text}> GENERATE </Text>
        </Pressable>
        <Pressable style={styles.button}
            onPress={() => {console.log('Copy Pressed')}}>
            <Text style={styles.text}> ⚡ COPY </Text>
        </Pressable>
    </View>
  );
}