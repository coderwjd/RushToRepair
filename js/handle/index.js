/**
 * Created by wang on 16/6/21.
 */
import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    Platform
} from 'react-native';

//import Popup from 'react-native-popup';

import Header from '../common/RTRHeader';
import Photo from './HandlePhoto';
import Implement from './HandleImplement';
import Measures from './HandleMeasures';
import Cost from './HandleCost';
import ActionButton from '../common/RTRActionButton';

import Text from '../common/RTRText';


class HandleButton extends Component{
    render(){
        return(
            <TouchableOpacity style={[styles.btnBox,this.props.isSelect?{backgroundColor:'#545454'}:{}]} onPress={this.props.onPress}>
                <Text style={[styles.actionText,this.props.isSelect?{color:'#fff'}:{}]} name= {this.props.name}/>
            </TouchableOpacity>
        )
    }
}

class HandlePage extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tag:"photo"
        };
    }

    renderHandle(){
        let Component = null;
        switch (this.state.tag)
        {
            case 'photo':
                Component = Photo;
                break;
            case 'implement':
                Component = Implement;
                break;
            case 'measures':
                Component = Measures;
                break;
            case 'cost':
                Component = Cost;
                break;
        }

        return <Component/>
    }

    render() {

        let home = this.props.data;
        return(
          <View style={{flex:1,backgroundColor:'#f5f5f5'}}>

              <Header title="处理"
                      leftItem={{icon:require('../img/ic_back_white.png'),onPress:() => {this.onPress()}}}
                      rightItem={{title:"确认完成",onPress:() => {this.onPress()}}}/>

              <View style={styles.contentHeaderBox}>
                  <Image style={styles.imgIcon}
                         source={require('../home/img/ic_repair_list_pipe_maintain_small.png')}/>

                  <View style={{flex:1,marginLeft:16}}>
                      <View style={styles.repBox}>
                          <View style={{flex:1}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={styles.blueText} name={home.type}/>
                                  <Text name={"<" + home.source + ">"}/>
                              </View>
                              <Text name={home.num}/>
                              <Text name={home.area}/>
                          </View>

                          <View style={{alignItems:'flex-end'}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={styles.pinkText} name={home.arrive}/>
                                  <Text name="到场"/>
                              </View>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={styles.pinkText} name={home.finish}/>
                                  <Text name="完成"/>
                              </View>
                              <Text name={home.sendTime}/>
                          </View>

                      </View>

                  </View>

              </View>

              <View style={styles.handleActionBox}>
                  <View style={styles.lineV}/>
                  <HandleButton name="图片信息" isSelect={this.state.tag === 'photo'} onPress={() => {this.setState({tag:'photo'})}}/>
                  <HandleButton name="执行信息" isSelect={this.state.tag === 'implement'} onPress={() => {this.setState({tag:'implement'})}}/>
                  <HandleButton name="解决措施" isSelect={this.state.tag === 'measures'} onPress={() => {this.setState({tag:'measures'})}}/>
                  <HandleButton name="费用信息" isSelect={this.state.tag === 'cost'} onPress={() => {this.setState({tag:'cost'})}}/>
              </View>

              <View style={styles.lineH}/>

              <View style={{flex:1}}>
                  {this.renderHandle()}
              </View>

              <View style={styles.lineH}/>
              <View style={styles.actionButtonBox}>
                  <ActionButton name="电话" icon={require('../home/img/ic_repair_btn_phone_pressed.png')}
                                onPress={() => this.onPress()}/>
                  <View style={styles.levelLine}/>
                  <ActionButton name="定位" icon={require('../home/img/ic_repair_btn_position_pressed.png')}
                                onPress={() => this.onPress()}/>
                  <View style={styles.levelLine}/>
                  <ActionButton name="用料" icon={require('../home/img/ic_repair_btn_material_pressed.png')}
                                onPress={() => this.onPress()}/>
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

    handleActionBox:{
        paddingTop:16,
        paddingBottom:16,
        paddingLeft:32,
        backgroundColor:'#fff',
        paddingRight:32,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    actionText:{
        fontSize:12,
        color:"#545454",
        alignSelf:'center'
    },

    lineV:{
        backgroundColor:'#545454',
        width:1,
        height:Platform.OS == 'ios' ? 24 : 32
    },

    lineH:{
        backgroundColor:'#e0e0e0',
        height:1
    },

    btnBox:{
        height:Platform.OS == 'ios' ? 24 : 32,
        flex:1,
        justifyContent:'center',
        borderColor:'#545454',
        borderLeftWidth:0,
        borderWidth:1
    },

    contentHeaderBox:{
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingLeft:16,
        paddingRight:16,
        paddingTop:12
    },

    actionButtonBox: {

        backgroundColor:'#fff',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    levelLine:{
        width:1,
        marginTop:5,
        marginBottom:5,
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

module.exports = HandlePage;