import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../themes/colors';
import {fontScale, sWidth, vScale} from '../../themes/scales';
import fonts from '../../themes/fonts';

const Tabs = ({selected, setSelected}) => {
  return (
    <View style={styles.container}>
      {buttons.map(item => {
        const isSelected = item.id == selected;
        return (
          <Pressable onPress={() => setSelected(item.id)}>
            <View
              style={[
                styles.itemContainer,
                {
                  borderBottomColor: isSelected
                    ? colors.mainColor
                    : colors.transparent,
                },
              ]}
              key={item.id}>
              <Text
                style={[
                  styles.text,
                  {
                    color: isSelected ? colors.mainColor : colors.black,
                  },
                ]}>
                {item.title}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: vScale(11),
    alignSelf: 'center',
  },
  itemContainer: {
    width: sWidth * 0.3,
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingBottom: vScale(11),
  },
  text: {
    fontFamily: fonts.BOLD,
    fontSize: fontScale(14),
    color: colors.black,
  },
});

const buttons = [
  {
    id: 1,
    title: 'Bills',
  },
  {
    id: 2,
    title: 'Payments',
  },
  {
    id: 3,
    title: 'Subscription',
  },
];
