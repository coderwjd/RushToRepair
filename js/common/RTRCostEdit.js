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

class RTRDateTimeEdit extends Component{

    renderIcon(){

        if (this.props.isShowIcon){
            return(
                <Image style={styles.icon}
                       source={require('./img/ic_basic_list_next.png')}/>
            )
        }

        return null;
    }

    render(){
        return(
            <TouchableOpacity style={[styles.box, this.props.style]} onPress={this.props.onPress}>
                <Text style={styles.keyText} name={this.props.name}/>
                <Text style={styles.valueText} name={this.props.content}/>
                {this.renderIcon()}
            </TouchableOpacity>
        )

    }

}

const styles = StyleSheet.create({

    box: {
        paddingBottom:12,
        paddingTop:12,
        paddingLeft:16,
        paddingRight:16,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor: '#fff'
    },

    icon:{
        height: 16,
        width:16
    },

    keyText:{
        flex:1
    },

    valueText: {
        marginRight:12
    }
});

module.exports = RTRDateTimeEdit;