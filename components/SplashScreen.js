import React, { Component } from 'react';

import { View, Image,  Dimensions, } from 'react-native';

export const { width: width, height: height } = Dimensions.get('window');
var config = require('./Config.js')
import { Container } from 'native-base';
// import RNRestart from 'react-native-restart';
import {observer} from 'mobx-react'

// import firebase from '@react-native-firebase/app';
// import messaging from '@react-native-firebase/messaging';
@observer
export default class SplashScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
 

    };
   
  }

async componentDidMount(){

this.getData()

}
  UNSAFE_componentWillMount() {
    this.loginInterval = setInterval(() => {
      this.renderLoading();
    }, 3000);
  }

  async renderLoading() {

 

    clearInterval(this.loginInterval);
    this.props.navigation.replace("Home" , {});
    



  }

 getData = async () => {

        fetch('https://api.happi.dev/v1/music/artists?page=1&apikey=a12926vqOJ4kOjwwzXg16KuJHeKYSlWLvxlEEvECBrmATkC46eAhWwGT')
            .then((response) => response.json())
            .then(async (responseJson) => {
//                this.setState({ data: responseJson })
                console.log(responseJson)
                    this.props.ListStore.addListItems(responseJson.result)

            }).catch((error) => {
                console.error(error);
            });

    }
  render() {


    return (

      <Container  >
        <View >
          <Image resizeMode={'contain'} style={{ marginTop:200, alignSelf:"center", width:300,height:300}}

            source={require('./images/logo.jpg')} />
            </View>
      </Container>




    )
  }
}
