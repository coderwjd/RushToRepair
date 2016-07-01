/**
 * Created by wang on 16/6/21.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

//import Popup from 'react-native-popup';

import Header from '../common/RTRHeader';
import Spinner from '../common/RTRSpinner';
import EditText from '../common/RTREditText';
import Button from '../common/RTRButton';

class SendPage extends Component{

    render() {

        let home = this.props.data;
        return(
          <View style={{flex:1,backgroundColor:'#f5f5f5'}}>

              <Header title="派发"
                      rightItem={[{icon:require('../img/ic_basic_nav_position.png'), onPress:() =>{this.onPress()}},{icon:require('../img/ic_basic_nav_phone.png'), onPress:() =>{this.onPress()}}]}
                      leftItem={{icon:require('../img/ic_back_white.png'),
                      onPress:() => {this.onPress()}}}/>

              <View style={styles.contentHeaderBox}>
                  <Image style={styles.imgIcon}
                         source={require('../home/img/ic_repair_list_pipe_maintain_small.png')}/>

                  <View style={{flex:1,marginLeft:16}}>
                      <View style={styles.repBox}>
                          <View style={{flex:1}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={styles.blueText}>{home.type}</Text>
                                  <Text>{"<" + home.source + ">"}</Text>
                              </View>
                              <Text>{home.num}</Text>
                              <Text>{home.area}</Text>
                          </View>

                      </View>

                  </View>

              </View>

              <View style={styles.sendContentBox}>
                  <Spinner
                      name="执行小组"
                      content="抢修一队"
                      onPress={() => {this.onPress()}}/>

                  <View style={styles.line} />

                  <Spinner
                      name="到场时限"
                      content="30分钟"
                      onPress={() => {this.onPress()}}/>

                  <View style={styles.line} />

                  <Spinner
                      name="完成时限"
                      content="6小时"
                      onPress={() => {this.onPress()}}/>
              </View>

              <View>
                  <EditText
                      style={{marginTop:8}}
                      name="备注        "
                      content="请输入备注信息"/>
              </View>

              <Button name="派发"
                      style={{marginTop:16}}
                      onPress={this.onPress.bind(this)}/>


          </View>
        )
    }

    onPress(){
        this.props.navigator.pop()
    }

}

const styles = StyleSheet.create({

    repBox: {
        paddingBottom:12,
        flexDirection:'row'
    },

    contentHeaderBox:{
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingLeft:16,
        paddingRight:16,
        paddingTop:12
    },

    sendContentBox:{
        backgroundColor:'#fff',
        marginTop:8
    },

    line:{
        flex:1,
        height:1,
        backgroundColor:'#e0e0e0'

    },

    imgIcon:{
        width:48,
        height:48
    },

    blueText:{
        color:'#00a0f2',
        fontSize:14
    },

    pinkText:{
        color:'#ff5d96',
        fontSize:14
    }

});

module.exports = SendPage;