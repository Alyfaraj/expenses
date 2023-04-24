import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from '../shared';
import FastImage from 'react-native-fast-image';
import {fontScale, scale, vScale} from '../../themes/scales';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';

const ExpensesList = ({list}) => {
  const getItemWidth = (value, base) => {
    const number = Number(value / base) * scale(211);
    return number;
  };

  const getBackgroundColor = (value, base) => {
    const percentage = Number(value / base) * 100;
    return percentage > 85 ? colors.red : colors.mainColor;
  };

  return (
    <View>
      {list.map((expenses, index) => {
        return (
          <Card key={expenses.id} style={styles.container}>
            <View style={styles.row}>
              <FastImage source={expenses.image} style={styles.icon} />
              <Text style={styles.title}>{expenses.title}</Text>
              <Text style={styles.total}>${expenses.total}</Text>
            </View>
            {expenses.items.map((item, index) => (
              <>
                <View key={item.id} style={[styles.row, styles.margin]}>
                  <Text style={styles.itemText}>{item.title}</Text>
                  <Text style={styles.itemText}>${item.total}</Text>
                </View>
                <View style={[styles.row, styles.margin]}>
                  <View style={styles.mainBar}>
                    <View
                      style={[
                        styles.subBar,
                        {
                          backgroundColor: getBackgroundColor(
                            item.spent,
                            item.total,
                          ),
                          width: getItemWidth(item.spent, item.total),
                        },
                      ]}
                    />
                  </View>
                  <Text style={styles.left}>
                    left ${Number(item.total - item.spent)}
                  </Text>
                </View>
              </>
            ))}
          </Card>
        );
      })}
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    marginTop: vScale(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: scale(45),
    height: scale(45),
  },
  title: {
    flex: 1,
    marginStart: scale(16),
    fontFamily: fonts.REGULAR,
    color: colors.black,
    fontSize: fontScale(16),
  },
  total: {
    fontFamily: fonts.REGULAR,
    color: colors.black,
    fontSize: fontScale(16),
    opacity: 0.6,
  },
  itemText: {
    fontFamily: fonts.BOLD,
    color: colors.black,
    fontSize: fontScale(16),
  },
  margin: {
    marginTop: vScale(16),
  },
  left: {
    fontFamily: fonts.REGULAR,
    color: colors.black,
    fontSize: fontScale(14),
    opacity: 0.6,
  },
  mainBar: {
    width: scale(211),
    height: vScale(4),
    borderRadius: vScale(4),
    backgroundColor: colors.border,
  },
  subBar: {
    height: vScale(4),
    borderRadius: vScale(4),
  },
});
