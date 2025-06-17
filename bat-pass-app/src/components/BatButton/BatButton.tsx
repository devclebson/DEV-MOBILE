import React, {useState} from 'react';
import { Text, Pressable} from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';
import { BatTextinput } from '../BatTextinput/BatTextInput';
import generatePassword from '../../services/passwordService';

export function BatButton() {
  const [pass, setPass] = useState('')
  
  function handleGenerateButton() {
    let generateToken = generatePassword()
    setPass(generateToken)
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
    console.log('Password copied to clipboard:', pass);
  }

  return (
    <>
      <BatTextinput pass={pass}/>

      <Pressable style={styles.button}
          onPress={handleGenerateButton}>
          <Text style={styles.text}> GENERATE </Text>
      </Pressable>

      <Pressable style={styles.button}
          onPress={handleCopyButton}>
          <Text style={styles.text}> ⚡ COPY </Text>
      </Pressable>
    </>
  );
}