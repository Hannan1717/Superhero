import { faBolt, faHome, faSkull, faUserAlt, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hero from './Hero';
import Villain from './Villain';
import About from './About';

const BottomTab = createBottomTabNavigator();

const TabBawah = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Hero" component={Hero} options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faUserAstronaut} /> }} />
      <BottomTab.Screen name="Villain" component={Villain} options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faSkull} /> }} />
      <BottomTab.Screen name="About" component={About} options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faUserAlt} /> }} />
    </BottomTab.Navigator>
  );
};

export default TabBawah;
