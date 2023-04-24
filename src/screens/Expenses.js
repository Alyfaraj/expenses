import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../components/shared';
import images from '../services/images';
import {fontScale, scale, vScale} from '../themes/scales';
import {
  ExpensesList,
  MonthlyBudget,
  TotalExpenses,
} from '../components/expense';
import colors from '../themes/colors';
import {expensesList} from '../dummy';
import FastImage from 'react-native-fast-image';

const Expenses = () => {
  return (
    <View style={styles.container}>
      <Header
        goBack
        title="Expenses"
        rightContent={<FastImage source={images.add} style={styles.addIcon} />}
      />
      <ScrollView>
        <TotalExpenses />
        <MonthlyBudget />
        <ExpensesList list={expensesList} />
        <Text style={styles.dots}>...</Text>
      </ScrollView>
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.background},
  addIcon: {
    width: scale(24),
    height: scale(24),
  },
  dots: {
    color: colors.black,
    marginBottom: vScale(20),
    fontSize: fontScale(40),
    alignSelf: 'center',
  },
});
