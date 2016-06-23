/**
 * Created by wang on 16/6/21.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Switch
} from 'react-native';

import Header from '../common/RTRHeader';
import Spinner from '../common/RTRSpinner';
import EditText from '../common/RTREditText';
import DateTimeEdit from '../common/RTRDateTimeEdit';

class AcceptancePage extends Component{

    render() {
        return(
          <View style={{flex:1}}>

              <Header title="受理"
                      leftItem={{icon:require('../img/ic_back_white.png'),
                      onPress:() => {this.onPress()}}}/>

              <View style={styles.contentBox}>

                  <View style={{marginTop:8}}>
                      <Spinner
                          name="任务来源"
                          content="事件中心"
                          onPress={() => {this.onPress()}}/>
                      <View style={styles.line} />
                      <View style={styles.editBox}>
                          <EditText
                              name="编号       "
                              content="请输入正确编号"/>
                          <TouchableOpacity style={styles.buttonBox}>
                              <Text style={styles.buttonText}>
                                  加载
                              </Text>
                          </TouchableOpacity>
                      </View>

                  </View>

                  <View style={{marginTop:8}}>

                      <Spinner
                          name="任务类型"
                          content="管道抢修"
                          onPress={() => {this.onPress()}}/>

                      <View style={styles.line} />

                      <Spinner
                          name="所在区域"
                          content="萧山营业所"
                          onPress={() => {this.onPress()}}/>

                      <View style={styles.line} />

                      <Spinner
                          name="处理级别"
                          content="6小时"
                          onPress={() => {this.onPress()}}/>

                  </View>

                  <View style={{marginTop:8}}>

                      <EditText
                          name="反映人    "
                          content="请输入反映人"/>

                      <View style={styles.line} />

                      <DateTimeEdit
                          name="反应时间"
                          content="2016-06-22 11:33"
                          onPress={() => {this.onPress()}}/>

                      <View style={styles.line} />

                      <EditText
                          name="反映内容"
                          content="请输入反映内容"/>

                  </View>

                  <View style={[styles.contentItemBox,{marginTop:8}]}>
                      <Text style={{flex:1}}>
                          {"委派其他营业所"}
                      </Text>
                      <Switch/>
                  </View>

                  <View style={{marginTop:8}}>
                      <EditText
                          name="备注        "
                          content="请输入备注信息"/>
                  </View>

                  <View style={{flexDirection:'row'}}>

                      <TouchableOpacity style={styles.ActionLeftBox}>
                          <Text style={styles.ActionLeftText}>
                              {"受理"}
                          </Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.ActionRightBox}>
                          <Text style={styles.ActionRightText}>
                              {"受理并派发"}
                          </Text>
                      </TouchableOpacity>

                  </View>


              </View>
          </View>
        )
    }

    onPress(){
        this.props.navigator.pop()
    }

}

const styles = StyleSheet.create({
    contentBox: {
        flex:1,
        backgroundColor: '#F5F5F5'
    },

    contentItemBox: {
        paddingBottom:12,
        paddingTop:12,
        paddingLeft:16,
        paddingRight:16,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor: '#fff'
    },

    editBox:{
        flex:1,
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    line:{
        flex:1,
        height:1,
        backgroundColor:'#e0e0e0'

    },

    buttonBox: {
        backgroundColor:"#00a0f2",
        alignItems:'center',
        marginRight:16,
        justifyContent:'center'
    },

    buttonText: {
        color:'#fff',
        margin:5,
        fontSize:12
    },

    ActionRightBox: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        margin:16,
        justifyContent:'center'
    },

    ActionLeftBox: {
        flex:1,
        backgroundColor:'#00a0f2',
        alignItems:'center',
        margin:16,
        justifyContent:'center'
    },

    ActionRightText: {
        color:'#00a0f2',
        marginBottom:10,
        marginTop:10,
        fontSize:14
    },

    ActionLeftText: {
        color:'#fff',
        marginBottom:10,
        marginTop:10,
        fontSize:14
    }
});

module.exports = AcceptancePage;