import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, ImageSourcePropType, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { View } from '../components/Themed';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Colors from '../constants/Colors';
import firstSlideImage from '../assets/images/Humaaans-3-Characters.png';
import secondSlideImage from '../assets/images/Humaaans-Sitting.png';
import thirdSlideImage from '../assets/images/Humaaans-2-Characters.png';
import { RootStackParamList } from '../types';
import Button from '../components/form/Button';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

type SlideView = {
  title: string,
  image: ImageSourcePropType,
  description: string,
}

export const Onboarding: React.FC<Props> = ({ navigation }) => {

  const appName = '1000 JOURS APP\'';
  const slideViews: SlideView[] = [
    { 
      title: 'Bienvenue sur l\'application', 
      image: firstSlideImage, 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Purus in mollis nunc sed id.'
    },
    { 
      title: 'Trouver les informations', 
      image: secondSlideImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Purus in mollis nunc sed id.'
    },
    { 
      title: 'Connaître les différentes étapes', 
      image: thirdSlideImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Purus in mollis nunc sed id.'
    }
  ];

  const [swiperCurrentIndex, setSwiperCurrentIndex] = React.useState(0);
  const swiperRef = React.useRef<SwiperFlatList>(null);

  return (
    <View style={[styles.mainContainer]}>
      <View style={[styles.header, styles.justifyContentCenter]}>
        <Text style={[styles.appName]}>{appName}</Text>
      </View>
      <View style={[styles.body, styles.justifyContentCenter]}>
        <SwiperFlatList
          ref={swiperRef}
          onChangeIndex={({ index }) => {
            setSwiperCurrentIndex(index);
          }}
          autoplay={false}
          showPagination
          paginationDefaultColor='lightgray'
          paginationActiveColor={Colors.primaryColor}
          paginationStyleItem={styles.swipePaginationItem}>
          {
            slideViews.map((slideView, index) => {
              return ( 
                <View style={[styles.swipeView, styles.justifyContentCenter]} key={index}>
                  <View style={[styles.justifyContentCenter]}>
                    <Image source={slideView.image}/>
                  </View>
                  <Text style={[styles.title, styles.textAlignCenter]}>{slideView.title}</Text>
                  <Text style={[styles.textAlignCenter]}>{slideView.description}</Text>
                </View>
              )
            })
          }
        </SwiperFlatList>
      </View>
      <View style={[styles.footer, styles.justifyContentCenter]}>
      {
        (swiperCurrentIndex === slideViews.length - 1) ? (
          <View style={[styles.justifyContentCenter]}>
            <Button title="Commencer" rounded={true} disabled={false} action={() => { navigation.navigate('Profile') }}/>
          </View>
        ) : (
          <View style={[styles.buttonsContainer, styles.justifyContentCenter]}>
            <Button title="Passer" rounded={false} disabled={false} action={() => { navigation.navigate('Profile') }}/>
            <Button title="Suivant" rounded={false} disabled={false} action={() => { swiperRef.current?.scrollToIndex({index: swiperCurrentIndex + 1}) }}/>
          </View>
        )
      }
      </View>
    </View>
  );
}

const paddingOfSlideView = 30;
const width = Dimensions.get('window').width - paddingOfSlideView;
const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 0.5,
  },
  body: {
    flex: 4,
  },
  footer: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primaryColor,
  },
  swipeView: {
    width
  },
  swipePaginationItem: {
    width: 30,
    height: 5,
  },
  justifyContentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  title: {
    color: Colors.primaryColor,
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  }
});
