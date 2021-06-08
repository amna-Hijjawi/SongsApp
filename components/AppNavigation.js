import React, { Component } from 'react';
import {
    Image,
    Dimensions,
    I18nManager,
    ScrollView,
    Platform,
    View,
    Text,
    BackHandler,
    TextInput,

    Alert,
    Keyboard, TouchableOpacity,
} from 'react-native';
import ListStore from './store'
import StoreProvider from './s2'

import { createAppContainer, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import MainStyle from './style/mainStyle';
import Home from './Home'

import SplashScreen from './SplashScreen';

//import AsyncStorage from '@react-native-community/async-storage';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

export let drawer = React.createRef();
var IS_RTL = I18nManager.isRTL;



export const { width: width, height: height } = Dimensions.get('window');
export default class MainNavigator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRTL: IS_RTL,
        }
        this.isOpen = false

        this._onDirectionChange = this._onDirectionChange.bind(this);
       
    }

    async componentDidMount() { }

    onBackPress = () => {
        if (this.currentRouteName == 'SplashScreen') {
            BackHandler.exitApp()
            return true;
        }
        return false;
    };


    async _onDirectionChange(navigation) {
        IS_RTL = !IS_RTL
        I18nManager.forceRTL(true);
        RNRestart.Restart();
    }




    render() {
        const Stack = createStackNavigator();

        backBtn = !IS_RTL ? 'arrow-back' : 'arrow-forward'

       

        const BackBtn = ({ navigation }) => {
            return (
                <TouchableOpacity style={{ marginLeft: 6, marginRight: 0 }}>
                    <IconMaterial
                        name={backBtn} color={'#fff'} size={25} onPress={() => this.backNav(navigation)}
                    />
                </TouchableOpacity>
            )
        }

        let HeaderWithLogo = (props, title) => {
            // { console.log(props); }

            const { navigation } = props;
            const { state, setParams } = navigation;
           
            global.navigation = props.navigation

            return {
                title: title,
                headerStyle: {
                    backgroundColor: '#f2e0e0',
                    elevation: 0,

                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    elevation: 0,
                    fontWeight: '500',

                },



            }

        };
        
        return (
            <NavigationContainer >

                <Stack.Navigator 
            
              initialRoute={{
          component: "SplashScreen",
          passProps: {
          }
        }} >

                    <Stack.Screen name="SplashScreen"  
//            component={SplashScreen}
                        options={{ headerShown: false }} >
            
            {props=> <SplashScreen  {...props}  ListStore={ListStore} /> }
            </Stack.Screen >

                    <Stack.Screen name='Home'  
//            component={Home}
                        options={(props) => HeaderWithLogo(props,'All Artists')} >
     {props=> <Home  {...props}  ListStore={ListStore} /> }
            </Stack.Screen >

                </Stack.Navigator>


            </NavigationContainer>
        )

    }
}