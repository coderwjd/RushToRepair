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
import Header from '../common/RTRHeader';

class HomePage extends Component{

    render() {
        return(
          <View style={{flex:1}}>
              <Header title="抢修养护"/>
              <TouchableOpacity
                  style={{flex:1, alignItems:'center',justifyContent:'center'}}
                  onPress={() => {this.onPress()}}>
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