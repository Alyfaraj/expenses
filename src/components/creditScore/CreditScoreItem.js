import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fonts from '../../themes/fonts';
import {fontScale, vScale} from '../../themes/scales';
import colors from '../../themes/colors';

const CreditScoreItem = ({item}) => {
  const {title, parentage, missed, rate} = item;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text
          style={[
            styles.rate,
            {
              color:
                rate.toLowerCase() == 'good' ? colors.green : colors.orange,
            },
          ]}>
          {rate}
        </Text>
      </View>
      <View>
        <Text style={[styles.title, styles.parentage]}>{parentage}</Text>
        {missed && <Text style={styles.missed}>{missed}</Text>}
      </View>
    </View>
  );
};

export default CreditScoreItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.BOLD,
    fontSize: fontScale(16),
    color: colors.black,
    marginBottom: vScale(5),
  },
  rate: {
    fontFamily: fonts.REGULAR,
    fontSize: fontScale(14),
    color: colors.black,
  },
  missed: {
    fontFamily: fonts.REGULAR,
    fontSize: fontScale(14),
    color: colors.black,
    opacity: 0.7,
    textAlign: 'right',
  },
  parentage: {
    textAlign: 'right',
  },
});
