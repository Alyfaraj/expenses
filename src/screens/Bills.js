import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../themes/colors';
import {Card, Header} from '../components/shared';
import FastImage from 'react-native-fast-image';
import images from '../services/images';
import {fontScale, scale, vScale} from '../themes/scales';
import fonts from '../themes/fonts';
import {FlatList} from 'react-native';
import {subscriptionsList} from '../dummy';
import {SubscriptionsItem, Tabs} from '../components/bills';

const Bills = ({navigation}) => {
  const [selected, setSelected] = useState(3);
  return (
    <View style={styles.container}>
      <Header
        title="Bills"
        goBack
        rightContent={<FastImage source={images.add} style={styles.addIcon} />}
      />
      <Tabs {...{selected, setSelected}} />
      <Text
        style={styles.title}>{`Your monthly payment \n for subcriptions`}</Text>
      <Pressable onPress={() => navigation.navigate('CreditScore')}>
        <Text style={styles.total}>$61.88</Text>
      </Pressable>
      <Card style={styles.card}>
        <FlatList
          data={subscriptionsList}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <SubscriptionsItem {...{item}} />}
        />
      </Card>
    </View>
  );
};

export default Bills;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.background},
  addIcon: {
    width: scale(24),
    height: scale(24),
  },
  title: {
    fontFamily: fonts.REGULAR,
    color: colors.black,
    fontSize: fontScale(14),
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: vScale(29),
    marginBottom: vScale(12),
  },
  total: {
    fontFamily: fonts.BOLD,
    color: colors.black,
    marginTop: vScale(4),
    fontSize: fontScale(48),
    alignSelf: 'center',
  },
  card: {
    marginTop: vScale(32),
  },
});
