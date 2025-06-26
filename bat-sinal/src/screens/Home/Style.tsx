import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    flexDirection: 'column',    
    justifyContent: 'center',
    alignSelf: 'center',
    marginBlock: 50,
    paddingTop: 20,
    paddingBottom: 10,    
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    
  }
});
export default styles;