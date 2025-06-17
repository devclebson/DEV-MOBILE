import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    flexDirection: 'column',    
    justifyContent: 'center',
    alignSelf: 'center',
    marginBlock: 60,
    paddingTop: 20,
    paddingBottom: 10,    
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column',
    
  }
});
export default styles;