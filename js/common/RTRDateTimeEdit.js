/**
 * Created by wang on 16/6/22.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';


class RTRDateTimeEdit extends Component{

    render(){
        return(
            <TouchableOpacity style={styles.spinnerBox} onPress={this.props.onPress}>
                <Text>
                    {this.props.name}
                </Text>
                <Text style={styles.spinnerContentText}>
                    {this.props.content}
                </Text>
                <Image style={styles.spinnerIcon}
                       source={require('./img/ic_basic_list_next.png')}></Image>
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
        height: 14,
        width:14
    },


    spinnerContentText: {
        flex:1,
        color:'#6f6f6f',
        fontSize:14,
        marginLeft:36
    }
});

module.exports = RTRDateTimeEdit;