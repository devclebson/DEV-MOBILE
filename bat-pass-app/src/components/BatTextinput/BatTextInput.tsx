import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './BatTextStyles';

interface BatTextInputProps {
  pass: string;
}
export function BatTextinput(props : BatTextInputProps) {
  return (    
        <TextInput
            style={styles.inputer}
            placeholder="pass"
            placeholderTextColor="#888"
            value={props.pass}          
        />   
  );
}