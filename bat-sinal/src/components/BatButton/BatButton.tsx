import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './BatButtonStyles';

type Props = {
  onPress: () => void;
};

export function BatButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Enviar Sinal</Text>
    </TouchableOpacity>
  );
}
