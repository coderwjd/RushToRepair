/**
 * Created by wang on 16/7/1.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

class HandleCost extends Component{


    render(){
        return(
            <View style={styles.box}>
                <Text style={styles.text}>费用信息界面</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    box: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center'
    },


    text: {
        color:'#545454',
        fontSize:18
    }
});
module.exports = HandleCost;
