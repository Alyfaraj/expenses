import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale, vScale} from '../../themes/scales';
import colors from '../../themes/colors';

const Card = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: scale(328),
    backgroundColor: colors.white,
    borderRadius: vScale(18),
    paddingHorizontal: scale(20),
    paddingVertical: vScale(14),
    borderWidth: 1,
    borderColor: colors.border,
    alignSelf: 'center',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.05,
    elevation: 0.6,
  },
});
