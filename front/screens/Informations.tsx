import * as React from 'react';
import { Button, Image, StyleSheet, Text } from 'react-native';
import CheckBox from 'react-native-check-box';
import { View } from '../components/Themed';
import { UserContext } from '../models/user-context';

export class Informations extends React.Component {

  appName = '1000 JOURS APP\'';
  image = './assets/images/icon.png';
  title = 'Votre profil';
  buttons = [
    { title: 'Commencer', action: () => ""},
    { title: 'Annuler', action: () => ""}
  ]
  situations = [
    {id: 1, label: 'J\'ai en projet d\'avoir un enfant', isChecked: false},
    {id: 2, label: 'Je cherche à concevoir un enfant', isChecked: false},
    {id: 3, label: 'J\'attends un enfant', isChecked: false},
    {id: 4, label: 'J\'ai un enfant', isChecked: false},
    {id: 5, label: 'J\'ai plusieurs enfants', isChecked: false},
    {id: 6, label: 'Je suis un professionnel de santé', isChecked: false},
  ]
  
  userContext: UserContext | null = null;

  render() {
    return (
      <View style={[styles.mainContainer]}>
        <Text style={[styles.appName]}>{this.appName}</Text>
        <View>
          <Image source={{uri: this.image}}/>
        </View>
        <Text style={[styles.title]}>{this.title}</Text>
        <View style={[styles.form]}>
          {this.situations.map((situation, index) =>
            { 
              <CheckBox key={index}
                isChecked={situation.isChecked}
                leftText={situation.label}
                style={{flex: 1, padding: 10}}
                onClick={()=>{
                  situation.isChecked = !situation.isChecked
                }}
              />
            }
          )}
        </View>
        <View style={[styles.buttonsContainer]}>
          {this.buttons.map(({ title, action }, index) =>
            <View style={[styles.buttonContainer]} key={index}>
              <Button title={title} onPress={action}/>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    paddingTop: 100,
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
  form: {
    width: '100%',
    height: 200,
  },
  buttonsContainer: {
    paddingTop: 50,
    flex: 1,
    flexDirection: 'row',
    height: 30,
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  }
});
