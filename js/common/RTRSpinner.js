/**
 * Created by wang on 16/6/22.
 */

import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

import Text from './RTRText';

class RTRSpinner extends Component{

    render(){
        return(
            <TouchableOpacity style={styles.spinnerBox} onPress={this.props.onPress}>
                <Text name={this.props.name}/>
                <Text style={styles.spinnerContentText} name={this.props.content}/>
                <Image style={styles.spinnerIcon}
                       source={require('./img/ic_spinner_icon.png')}></Image>
            </TouchableOpacity>
        )

    }

}

const styles = StyleSheet.create({

    spinnerBox: {
        paddingBottom:12,
        paddingTop:12,
        paddingLeft:16,
        paddingRight:16,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor: '#fff'
    },

    spinnerIcon:{
        height: 12,
        width:12
    },


    spinnerContentText: {
        flex:1,
        color:'#6f6f6f',
        fontSize:14,
        marginLeft:36
    }
});

module.exports = RTRSpinner;