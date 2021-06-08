import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { Dimensions, View, Image, Text, TouchableOpacity, I18nManager, StyleSheet, ActivityIndicator,FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {observer} from 'mobx-react'

export const { width: width, height: height } = Dimensions.get('window');
var IS_RTL = I18nManager.isRTL;

const styles2 = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        minHeight: 400
    },
});
@observer

export default class Home extends Component {
//                    this.props.ListStore.removeListItem(item)

    constructor(props) {
        super(props);
        this.state = {
            list:this.props.ListStore.list
        };
//                    const  list  = this.props.ListStore.list

    }
     

    async componentDidMount() {    

    }
    removeListItem(item){
                       this.props.ListStore.removeListItem(item)
                       this.setState({  list:this.props.ListStore.list})

    }
    render() {


        return (
            <Container style={{backgroundColor:"#f2f0e3"}}>

 <FlatList 
            columnWrapperStyle={{ alignSelf:'center' ,  justifyContent: "space-between",
            padding: 15,
            }}
            numColumns={2}
            data={this.state.list}
            renderItem={({ item, index }) => (
    <View
            style={{margin:5 ,padding:10,borderRadius: 30, backgroundColor:'#d9ecda', alignItems: 'center',width:'50%'}}
            >
            <TouchableOpacity onPress={()=>{
              this.removeListItem(item)
        }} style={{width:'100%',paddingBottom:10,}}><Text style={{ width:'90%', textAlign:'right',color:'#fff'}}>Hide</Text></TouchableOpacity>
     <Image resizeMode='cover'style={{         borderRadius: 40,
                    width:150,height:150}} source={require('./images/img.jpg')}/>
     <Text style={{color:'#000000',textAlign:'center'}}>{item.artist}</Text>

    </View>
          
  )}    
    keyExtractor={(item,index) => item.id_artist+' '+index}
      />
            
            </Container>
        )
    }


}