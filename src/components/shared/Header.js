import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/scales';
import fonts from '../../themes/fonts';
import images from '../../services/images';
import colors from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title,
  goBack,
  backgroundColor = colors.background,
  rightContent,
  leftIcon,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: backgroundColor}}>
      <SafeAreaView />
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          {goBack && (
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={images.backIcon}
                style={styles.back}
                resizeMode="contain"
              />
            </Pressable>
          )}
          <View style={styles.leftIcon}>{leftIcon}</View>
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.rightContainer}>{rightContent}</View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: scale(350),
    alignItems: 'center',
    justifyContent: 'space-between',
    //   height: Platform.OS == 'android' ? vScale(50) : vScale(100),
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: vScale(10),
  },
  title: {
    alignSelf: 'center',
    fontSize: fontScale(18),
    fontFamily: fonts.BOLD,
    color: colors.black,
  },
  back: {
    width: scale(24),
    height: scale(24),
    marginTop: vScale(-5),
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leftIcon: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
