import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/scales';
import {Card} from '../shared';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';

const MonthlyBudget = () => {
  const data = {
    monthlyBudget: '2550',
    spent: '1560',
    spentList: ['460', '300', '800'],
  };
  const navigation = useNavigation();

  const colorsBarList = [colors.orange, colors.semiBlue, colors.mainColor];

  const getItemWidth = value => {
    const number = Number(value / data.monthlyBudget) * scale(286);
    return number;
  };

  return (
    <Pressable onPress={() => navigation.navigate('Bills')}>
      <Card style={styles.container}>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Left to spend</Text>
            <Text style={styles.value}>
              ${Number(data.monthlyBudget - data.spent)}
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Monthly budget</Text>
            <Text style={styles.value}>${data.monthlyBudget}</Text>
          </View>
        </View>
        <View style={styles.mainBar}>
          {data.spentList.map((item, index) => {
            const isFirstItem = index == 0;
            const isLastItem = index == data.spentList.length - 1;
            return (
              <View
                key={index}
                style={[
                  styles.smallBar,
                  {
                    width: getItemWidth(item),
                    backgroundColor: colorsBarList[index % 3],
                    borderTopStartRadius: isFirstItem ? vScale(8) : 0,
                    borderBottomStartRadius: isFirstItem ? vScale(8) : 0,
                    borderTopEndRadius: isLastItem ? vScale(8) : 0,
                    borderBottomEndRadius: isLastItem ? vScale(8) : 0,
                  },
                ]}
              />
            );
          })}
        </View>
      </Card>
    </Pressable>
  );
};

export default MonthlyBudget;

const styles = StyleSheet.create({
  container: {
    marginTop: vScale(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.REGULAR,
    color: colors.black,
    opacity: 0.4,
    fontSize: fontScale(14),
    marginBottom: vScale(2),
  },
  value: {
    fontFamily: fonts.BOLD,
    color: colors.black,
    fontSize: fontScale(18),
  },
  mainBar: {
    width: scale(286),
    height: vScale(8),
    borderRadius: vScale(8),
    backgroundColor: colors.border,
    marginTop: vScale(15),
    flexDirection: 'row',
  },
  smallBar: {
    height: vScale(8),
  },
});
