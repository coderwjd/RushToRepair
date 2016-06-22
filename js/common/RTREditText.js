/**
 * Created by wang on 16/6/22.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';


class RTREditText extends Component{

    render(){
        return(
            <View style={styles.editTextBox}>
                <Text>
                    {this.props.name}
                </Text>

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
        paddingBottom:12,
        paddingTop:12,
        paddingLeft:16,
        paddingRight:16,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff'
    },

    textInput:{
        flex:1,
        height: 24,
        borderWidth: 0,
        marginLeft:36,
        backgroundColor: '#fff',
        fontSize:14
    }

});

module.exports = RTREditText;