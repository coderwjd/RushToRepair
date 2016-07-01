/**
 * Created by wang on 16/6/22.
 */

import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Text from './RTRText';

class RTRActionButton extends Component{
    render(){

        return (
            <TouchableOpacity
                style={styles.actionButtonItemBox}
                onPress={this.props.onPress}>
                <Image style={styles.actionButtonImg} source = {this.props.icon}/>
                <Text style={[styles.actionButtonText,this.props.style]} name={this.props.name}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    actionButtonBox: {

        flexDirection: 'row',
        justifyContent: 'center'
    },

    actionButtonItemBox: {
        flex:1,
        paddingTop:10,
        paddingBottom:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionButtonImg: {
        height: 16,
        width:16,
        padding:5
    },

    actionButtonText: {
        color:'#00a0f2',
        marginLeft:8,
        fontSize:14
    }
});

module.exports = RTRActionButton;