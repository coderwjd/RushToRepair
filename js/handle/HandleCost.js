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

import CostEdit from '../common/RTRCostEdit';
import Button from '../common/RTRButton';
import Line from '../common/RTRLine';

class HandleCost extends Component{


    render(){
        return(
            <View style={styles.box}>
                <CostEdit name="人工费" content="0.0元" onPress={() => this.onPress()} isShowIcon={true}/>
                <Line/>
                <CostEdit name="机械费" content="0.0元" onPress={() => this.onPress()} isShowIcon={true}/>
                <Line/>
                <CostEdit name="其他费用" content="0.0元" onPress={() => this.onPress()} isShowIcon={true}/>

                <CostEdit style={{marginTop:16}} name="总费用" content="0.0元" isShowIcon={false}/>

                <Button style={{marginTop:16}} name="上传" onPress={() => this.onPress()}/>
            </View>
        )
    }

    onPress(){

    }
}


const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f5f5f5'
    },


    text: {
        color:'#545454',
        fontSize:18
    }
});
module.exports = HandleCost;
