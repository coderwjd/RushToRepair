/**
 * Created by wang on 16/6/21.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class HandlePage extends Component{

    render() {
        return(
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={() => {this.onPress()}}>
                  <Text>
                      我是抢修处理界面
                  </Text>
              </TouchableOpacity>
          </View>
        )
    }

    onPress(){
        this.props.navigator.pop()
    }

}

module.exports = HandlePage;