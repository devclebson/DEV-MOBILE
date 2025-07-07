import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';

export default function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} options={{title:'Main Menu',headerShown:false}} />
      <Screen name="Gallery" component={GalleryScreen} />
    </Navigator>
  );
}