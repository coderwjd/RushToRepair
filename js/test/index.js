/**
 * Created by wang on 16/6/21.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';


class TestPage extends Component{

    render() {

        return(
          <View style={{flex:1,backgroundColor:'#f5f5f5'}}>


              <View style={{backgroundColor:'#fff', flex:1, alignItems:'center',justifyContent:'center', marginTop:8}}>
                  <Text>
                      {"处理TAB界面,尚待研究"}
                  </Text>
              </View>

          </View>
        )
    }

    onPress(){
        this.props.navigator.pop()
    }

}

const styles = StyleSheet.create({

    repBox: {
        paddingBottom:12,
        flexDirection:'row'
    },

    contentHeaderBox:{
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingLeft:16,
        paddingRight:16,
        paddingTop:12
    },

    imgIcon:{
        width:48,
        height:48
    },

    blueText:{
        color:'#00a0f2',
        fontSize:14
    },

    pinkText:{
        color:'#ff5d96',
        fontSize:14
    }

});

module.exports = TestPage;