import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black'
  },
  imageShadowWrapper: {
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8, // Necessário para Android
  },
});