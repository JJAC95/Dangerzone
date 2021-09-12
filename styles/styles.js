import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  export default styles