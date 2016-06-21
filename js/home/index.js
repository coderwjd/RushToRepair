/**
 * Created by wang on 16/6/21.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import HandlePage from '../handle';

class HomePage extends Component{

    render() {
        return(
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={() => {this.onPress()}}>
                  <Text>
                      我是主页
                  </Text>
              </TouchableOpacity>
          </View>
        )
    }

    onPress(){
        let component = {
            name:"Handle",
            component:HandlePage
        };

        this.props.navigator.push(component)
    }

}

module.exports = HomePage;