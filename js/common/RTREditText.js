/**
 * Created by wang on 16/6/22.
 */
import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

import Text from './RTRText';


class RTREditText extends Component{

    render(){
        return(
            <View style={[styles.editTextBox, this.props.style]}>
                <Text name={this.props.name}/>
                <TextInput
                    style={styles.textInput}
                    placeholder={this.props.content}
                    placeholderTextColor="#b5b5b5"
                />

            </View>
        )

    }

}

const styles = StyleSheet.create({

    editTextBox: {
        flex:1,
        paddingLeft:16,
        paddingRight:16,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff'
    },

    textInput:{
        flex:1,
        height: 50,
        borderWidth: 0,
        marginLeft:36,
        fontSize:14,
        backgroundColor:'#fff',
        color:'#000'
    }

});

module.exports = RTREditText;