import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {fontScale, scale, sWidth, vScale} from '../themes/scales';
import {Expenses} from '../screens';
import colors from '../themes/colors';
import FastImage from 'react-native-fast-image';
import images from '../services/images';
import fonts from '../themes/fonts';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    id: 1,
    name: 'Overview',
    label: 'Overview',
    icon: images.chart,
    component: Expenses,
  },
  {
    id: 2,
    name: 'ThisMonth',
    label: 'This Month',
    icon: images.calendar,
    component: Expenses,
  },
  {
    id: 3,
    name: 'Offers',
    label: 'Offers',
    icon: images.ticket,
    component: Expenses,
  },
  {
    id: 4,
    name: 'Settings',
    label: 'Settings',
    icon: images.setting,
    component: Expenses,
  },
];

const MainTab = ({}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    color: focused ? colors.mainColor : colors.icon,
                  },
                ]}>
                {item.label}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <FastImage
                source={item.icon}
                style={styles.image}
                tintColor={focused ? colors.mainColor : colors.placeholder}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    height: vScale(80),
    width: sWidth,
    alignSelf: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: scale(20),
    height: scale(20),
    marginTop: vScale(4),
  },
  label: {
    fontFamily: fonts.LIGHT,
    fontSize: fontScale(12),
  },
});
export default MainTab;
