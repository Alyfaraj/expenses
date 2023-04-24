import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../themes/colors';
import {fontScale, scale, vScale} from '../../themes/scales';
import fonts from '../../themes/fonts';
import {Icon} from 'react-native-elements';

const TotalExpenses = () => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.month}>September 2020</Text>
        <Icon name="caret-down" type="font-awesome" size={scale(16)} />
      </View>
      <Text style={styles.total}>$1,812</Text>
    </View>
  );
};

export default TotalExpenses;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  month: {
    color: colors.black,
    fontSize: fontScale(14),
    fontFamily: fonts.REGULAR,
    marginEnd: scale(4),
  },
  total: {
    fontFamily: fonts.BOLD,
    color: colors.black,
    marginTop: vScale(4),
    fontSize: fontScale(48),
    alignSelf: 'center',
  },
});
