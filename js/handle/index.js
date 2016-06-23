/**
 * Created by wang on 16/6/21.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

//import Popup from 'react-native-popup';

import Header from '../common/RTRHeader';

class HandlePage extends Component{

    render() {
        return(
          <View style={{flex:1}}>

              <Header title="处理"
                      leftItem={{icon:require('../img/ic_back_white.png'),
                      onPress:() => {this.onPress()}}}/>

          </View>
        )
    }

    onPress(){
        this.props.navigator.pop()
    }

}

module.exports = HandlePage;