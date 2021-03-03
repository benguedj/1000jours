import * as React from 'react';
import { Button, Image, ImageSourcePropType, StyleSheet, Text, ScrollView } from 'react-native';
import CheckBox from 'react-native-check-box';
import { colors } from 'react-native-swiper-flatlist/src/themes';
import { View } from '../components/Themed';
import Colors from '../constants/Colors';
import { UserContext } from '../models/user-context';

interface Props {
  navigation: any
}
export class Profile extends React.Component<Props, {userContext: UserContext}> {

  appName = '1000 JOURS APP\'';
  image: ImageSourcePropType = require('../assets/images/Humaaans-Space1.png');
  title = 'Votre profil';
  
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

  constructor(props: Props) {
    super(props);
    this.state = { 
      userContext: this.userContext
    };
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
            checkBoxColor={Colors.primaryColor}
          />
        );
      }
    );
  }

  render() {
    return (
      
      <View style={[styles.mainContainer]}>
        <View style={[styles.header, styles.justifyContentCenter]}>
          <Text style={[styles.appName]}>{this.appName}</Text>
        </View>
        <ScrollView style={[styles.body]}>
          <View style={[styles.justifyContentCenter]}>
            <Image source={this.image}/>
          </View>
          <Text style={[styles.title, styles.textAlignCenter]}>{this.title}</Text>
          <View style={[styles.choices]}>
            {this.getChoices()}
          </View>
          <View style={[styles.footer, styles.justifyContentCenter]}>
            <View style={[styles.buttonContainer]}>
              <Button title="Passer" onPress={()=>{}}/>
            </View>
            <View style={[styles.buttonContainer]}>
              <Button title="Valider" onPress={()=>{
                this.props.navigation.navigate('Root');
              }}/>
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 44,
    margin: 15
  },
  body: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 15
  },
  choices: {
    flex: 1,
    padding: 15,
  },
  mainContainer: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: 'column',
  },
  justifyContentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primaryColor,
  },
  title: {
    color: Colors.primaryColor,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15
  },
  checkbox: {
    height: 40,
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  }
});
