/**
 * Created by wang on 16/7/1.
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';


class RTRText extends Component{

    render(){
        return(
            <View style={[styles.line, this.props.style]}/>
        )

    }

}

const styles = StyleSheet.create({

    line:{
        flex:1,
        height:1,
        backgroundColor:'#e0e0e0'

    }
});

module.exports = RTRText;