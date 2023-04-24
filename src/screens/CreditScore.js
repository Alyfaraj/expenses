import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {fontScale, sWidth, scale, vScale} from '../themes/scales';
import colors from '../themes/colors';
import fonts from '../themes/fonts';
import {Card, Header} from '../components/shared';
import {CreditScoreItem} from '../components/creditScore';
import {creditScoreList} from '../dummy';

const CreditScore = () => {
  return (
    <View style={styles.container}>
      <Header goBack title="Credit Score" />
      <AnimatedCircularProgress
        duration={1500}
        style={{marginTop: vScale(16)}}
        size={scale(276)}
        width={5}
        rotation={-90}
        fill={80}
        tintColor={colors.mainColor}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        arcSweepAngle={180}
        backgroundColor={colors.border}
        dashedTint={{width: sWidth * 0.3, gap: scale(6)}}>
        {fill => (
          <View>
            <Text style={styles.good}>Good</Text>
            <Text style={styles.count}>660</Text>
            <Text style={styles.plus}>+6 pts</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <View style={styles.textContainer}>
        <Text style={styles.bottomText}>400</Text>
        <Text style={styles.bottomText}>Last update on 20 Jul 2020</Text>
        <Text style={styles.bottomText}>850</Text>
      </View>

      <Card style={styles.card}>
        <FlatList
          data={creditScoreList}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CreditScoreItem {...{item}} />}
          ItemSeparatorComponent={() => <View style={styles.line} />}
        />
      </Card>
    </View>
  );
};

export default CreditScore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  good: {
    fontFamily: fonts.MEDIUM,
    color: colors.black,
    opacity: 0.7,
    fontSize: fontScale(14),
    textAlign: 'center',
    marginTop: scale(-50),
  },
  count: {
    color: colors.black,
    fontSize: fontScale(48),
    fontFamily: fonts.BOLD,
  },
  plus: {
    fontFamily: fonts.MEDIUM,
    color: colors.mainColor,
    fontSize: fontScale(14),
    textAlign: 'center',
    marginBottom: vScale(30),
  },
  textContainer: {
    marginTop: scale(-110),
    width: scale(290),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomText: {
    fontFamily: fonts.REGULAR,
    fontSize: fontScale(13),
    color: colors.icon,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginVertical: vScale(15),
    height: 1,
    width: scale(300),
  },
  card: {
    marginTop: vScale(30),
  },
});
