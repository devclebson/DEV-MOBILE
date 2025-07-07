import React, {useReducer} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const reducer = (state: {count: number}, action: {type:string}) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function App() {
  const [state , dispatch] = useReducer(reducer, {count: 0});  

  const incrementCount = () => {
    dispatch({type: 'increment'});
  }

  const decrementCount = () => {
    dispatch({type: 'decrement'});
  
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{state.count}</Text>
      <View style={styles.inline}>
        <Button title='REMOVER'onPress={decrementCount}>  </Button>
        <Button title='ADMICIONAR' onPress={incrementCount}>  </Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
  },
  inline: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',

  }
});
