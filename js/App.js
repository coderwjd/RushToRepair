/**
 * Created by wang on 16/6/21.
 */

import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Navigator,
    Platform
} from 'react-native';

import HomePage from './home';

class Root extends Component{

    render() {
        return(
            <View style = {{flex:1}}>

                <StatusBar
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 0.2)"
                    barStyle="light-content"
                />
                <Navigator
                    initialRoute = {{name:'home', component:HomePage, param:{...this.props}}}
                    configureScene = {this.configureScene}
                    renderScene = {this.renderScene}
                />
            </View>
        )
    }



    configureScene(){
        if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
        }
        return {...Navigator.SceneConfigs.HorizontalSwipeJump,gestures:null};
    }

    renderScene(route, navigator){
        switch (route.name){
            case 'home':
                return <HomePage {...route.params} navigator={navigator}/>;
            default:
                var Component = route.component;
                if (route.component) {
                    return <Component {...route.params} navigator={navigator}/>
                }
        }
    }

}
module.exports = Root;