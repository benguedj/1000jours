import * as React from 'react';
import { Button, Image, ImageSourcePropType, StyleSheet, Text, Dimensions } from 'react-native';
import { View } from '../components/Themed';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Colors from '../constants/Colors';

interface Props {
  navigation: any
}
interface SlideView {
  title: string,
  image: ImageSourcePropType,
  description: string,
}

export class Onboarding extends React.Component<Props> {

  appName = '1000 JOURS APP\'';
  slideViews: SlideView[] = [
    { 
      title: 'Bienvenue sur l\'application', 
      image: require('../assets/images/Humaaans-3-Characters.png'), 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Purus in mollis nunc sed id.'
    },
    { 
      title: 'Trouver les informations', 
      image: require('../assets/images/Humaaans-Sitting.png'), 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Purus in mollis nunc sed id.'
    },
    { 
      title: 'Connaître les différentes étapes', 
      image: require('../assets/images/Humaaans-2-Characters.png'), 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Purus in mollis nunc sed id.'
    }
  ];
  
  getSlideViews = () => {
    return this.slideViews.map((slideView, index) => {
        return ( 
        <View style={[styles.swipeView, styles.justifyContentCenter]} key={index}>
          <View style={[styles.justifyContentCenter]}>
            <Image source={slideView.image}/>
          </View>
          <Text style={[styles.title, styles.textAlignCenter]}>{slideView.title}</Text>
          <Text style={[styles.textAlignCenter]}>{slideView.description}</Text>
        </View>
      )
    });
  }

  render() {
    return (
      <View style={[styles.mainContainer]}>
        <View style={[styles.header, styles.justifyContentCenter]}>
          <Text style={[styles.appName]}>{this.appName}</Text>
        </View>
        <View style={[styles.body, styles.justifyContentCenter]}>
          <SwiperFlatList
            autoplay={false}
            showPagination
            paginationDefaultColor='lightgray'
            paginationActiveColor={Colors.primaryColor}
            paginationStyleItem={styles.swipePaginationItem}>
            {this.getSlideViews()}
          </SwiperFlatList>
        </View>
        
        <View style={[styles.footer, styles.justifyContentCenter]}>
          <View style={[styles.buttonContainer]}>
            <Button title="Passer" onPress={()=>{}}/>
          </View>
          <View style={[styles.buttonContainer]}>
            <Button title="Suivant" onPress={()=>{
              this.props.navigation.navigate('Profile');
            }}/>
          </View>
        </View>
      </View>
    );
  }
}

const width = Dimensions.get('window').width - 40;
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
    flexDirection: 'row',
  },
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primaryColor,
  },
  swipeView: {
    width: Dimensions.get('window').width - 30,
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
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  }
});
