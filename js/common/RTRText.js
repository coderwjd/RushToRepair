/**
 * Created by wang on 16/7/1.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


class RTRText extends Component{

    render(){
        return(
            <Text style={[styles.text,this.props.style]}>
                {this.props.name}
            </Text>
        )

    }

}

const styles = StyleSheet.create({

    text: {
        color:'#545454',
        fontSize:14
    }
});

module.exports = RTRText;