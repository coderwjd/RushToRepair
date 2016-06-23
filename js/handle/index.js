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

class HandlePage extends Component{

    render() {
        console.log("props",this.props);

        let home = this.props.data;
        return(
          <View style={{flex:1,backgroundColor:'#f5f5f5'}}>

              <Header title="处理"
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

                          <View style={{alignItems:'flex-end'}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={styles.pinkText}>{home.arrive}</Text>
                                  <Text>{"到场"}</Text>
                              </View>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={styles.pinkText}>{home.finish}</Text>
                                  <Text>{"完成"}</Text>
                              </View>
                              <Text>{home.sendTime}</Text>
                          </View>

                      </View>

                  </View>

              </View>

              <View style={{backgroundColor:'#fff', flex:1, alignItems:'center',justifyContent:'center', marginTop:8}}>
                  <Text>
                      {"处理TAB界面,尚待研究"}
                  </Text>
              </View>

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

module.exports = HandlePage;