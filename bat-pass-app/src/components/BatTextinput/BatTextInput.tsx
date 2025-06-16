import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextStyles';

export function BatTextinput() {
  return (    
        <TextInput
            style={styles.inputer}
            placeholder="pass"
            placeholderTextColor="#888"
        />   
  );
}