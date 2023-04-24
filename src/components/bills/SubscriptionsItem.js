import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Icon} from 'react-native-elements';
import {fontScale, scale, vScale} from '../../themes/scales';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';

const SubscriptionsItem = ({item}) => {
  return (
    <View style={styles.container}>
      <FastImage style={styles.logo} source={{uri: item.logo}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.package}>{item.package}</Text>
      </View>
      <Icon
        name="right"
        type="ant-design"
        size={scale(18)}
        color={colors.icon}
      />
    </View>
  );
};

export default SubscriptionsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: vScale(12),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.REGULAR,
    color: colors.black,
    opacity: 0.7,
    fontSize: fontScale(14),
    marginBottom: vScale(3),
  },
  package: {
    fontFamily: fonts.BOLD,
    color: colors.black,
    fontSize: fontScale(16),
  },
  logo: {
    width: scale(36),
    height: scale(36),
    marginEnd: scale(12),
    borderRadius: scale(18),
  },
});
