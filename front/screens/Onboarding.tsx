import * as React from 'react';
import { Button, Image, StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed';
import ViewPager from '@react-native-community/viewpager';
import CheckBox from 'react-native-check-box';
import { UserContext } from '../models/user-context';

interface Props {
  navigation: any
}
interface SlideView {
  title: string,
  image: string,
  description: string,
}

export class Onboarding extends React.Component<Props, {userContext: UserContext}> {

  userContext: UserContext = {
    situations: [
      {id: 1, label: 'J\'ai en projet d\'avoir un enfant',  isChecked: false},
      {id: 2, label: 'Je cherche à concevoir un enfant',    isChecked: false},
      {id: 3, label: 'J\'attends un enfant',                isChecked: false},
      {id: 4, label: 'J\'ai un enfant',                     isChecked: false},
      {id: 5, label: 'J\'ai plusieurs enfants',             isChecked: false},
      {id: 6, label: 'Je suis un professionnel de santé',   isChecked: false},
    ],
    childBirthday: null
  };

  appName = '1000 JOURS APP\'';
  slideViews: SlideView[] = [
    { 
      title: 'Bienvenue sur l\'application', 
      image: './assets/images/icon.png', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Purus in mollis nunc sed id.'
    },
    { 
      title: 'Trouver les informations', 
      image: './assets/images/icon.png', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Purus in mollis nunc sed id.'
    },
    { 
      title: 'Connaître les différentes étapes', 
      image: './assets/images/icon.png', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Purus in mollis nunc sed id.'
    }
  ];

  screen2 = {
    title: 'Votre profil',
    image: './assets/images/icon.png',
  };

  constructor(props: Props) {
    super(props);
    this.state = { 
      userContext: this.userContext
    };
  }
  
  getSlideViews = () => {
    return this.slideViews.map((slideView, index) => {
        return ( 
        <View key={index}>
          <View>
            <Image source={{uri: slideView.image}}/>
          </View>
          <Text style={[styles.title]}>{slideView.title}</Text>
          <Text style={[styles.description]}>{slideView.description}</Text>
        </View>
      )
    });
  }

  getChoices = () => {
    return this.userContext.situations.map((situation, index) =>
      { 
        return (
          <CheckBox 
            key={index}
            style={[styles.checkbox]}
            onClick={()=>{
              situation.isChecked = !situation.isChecked;
              this.setState({ 
                userContext: this.userContext
              });
            }}
            isChecked={situation.isChecked}
            rightText={situation.label}
          />
        );
      }
    );
  }

  render() {
    return (
      <View style={[styles.mainContainer]}>
        <Text style={[styles.appName]}>{this.appName}</Text>
        <ViewPager style={[styles.flex]} initialPage={0}>
          <View key="1">
            
            <ViewPager style={[styles.flex]} initialPage={0} showPageIndicator={true}>
              {this.getSlideViews()}
            </ViewPager>
            
            <View style={[styles.buttonsContainer]}>
              <View style={[styles.buttonContainer]}>
                <Button title="Passer" onPress={()=>{}}/>
              </View>
              <View style={[styles.buttonContainer]}>
                <Button title="Suivant" onPress={()=>{}}/>
              </View>
            </View>
          </View>
          <View style={[styles.flex]} key="2">
            <View>
              <Image source={{uri: this.screen2.image}}/>
            </View>
            <Text style={[styles.title]}>{this.screen2.title}</Text>
            <View style={[styles.flex]}>
              {this.getChoices()}
            </View>
            <View style={[styles.buttonsContainer]}>
              <View style={[styles.buttonContainer]}>
                <Button title="Passer" onPress={()=>{}}/>
              </View>
              <View style={[styles.buttonContainer]}>
                <Button title="Valider" onPress={()=>{
                  this.props.navigation.navigate('Root');
                }}/>
              </View>
            </View>
          </View>
        </ViewPager>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: 'white',
    paddingTop: 44,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: 'column',
  },
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 30
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  },
  description: {

  },
  checkbox: {
    height: 40,
  },
  buttonsContainer: {
    paddingTop: 50,
    paddingBottom: 25,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  }
});
