/**
 * Created by wang on 16/6/22.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';


class HomeListViewItem extends Component{

    renderSend(home) {
        switch (home.status){
            case 0://派发
                return(
                    <TouchableOpacity style={styles.buttonBox}>
                        <Text style={styles.buttonText}>
                            {"派发"}
                        </Text>
                    </TouchableOpacity>
                )
                break;
            case 1://已派发
                return(
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
                )
                break;
        }
    }

    renderContentItem(item){
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={{flex:1}}>{item.contentKey}</Text>
                <Text>{item.contentValue}</Text>
            </View>
        )
    }

    render(){

        let home = this.props.data;
        return(
            <View style={styles.box}>
                <View style={{flexDirection:'row',flex:1,paddingLeft:16,paddingRight:16}}>
                    <Image style={styles.imgIcon}
                           source={require('./img/ic_repair_list_pipe_maintain_small.png')}/>

                    <View style={{flex:1,marginLeft:16}}>
                        <View style={styles.repBox}>
                            <View style={{flex:1}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.blueText}>{home.type}</Text>
                                    <Text>{"<"+home.source+">"}</Text>
                                </View>
                                <Text>{home.num}</Text>
                                <Text>{home.area}</Text>
                            </View>
                            <View style={{justifyContent:'center'}}>
                                {this.renderSend(this.props.data)}
                            </View>

                        </View>

                        <View style={styles.line} />

                        <View style={{paddingBottom:12, paddingTop:12}}>

                            {this.renderContentItem(home.numItem)}
                            {this.renderContentItem(home.userItem)}
                            {this.renderContentItem(home.timeItem)}
                            {this.renderContentItem(home.phoneNumItem)}
                            {this.renderContentItem(home.contentItem)}
                            {this.renderContentItem(home.addressItem)}
                            {this.renderContentItem(home.remarkItem)}

                        </View>

                    </View>

                </View>

                <View style={styles.line} />
                <View style={styles.actionButtonBox}>
                    <ActionButton name="电话" icon={require('./img/ic_repair_btn_phone_pressed.png')}/>
                    <View style={styles.levelLine} />
                    <ActionButton name="定位" icon={require('./img/ic_repair_btn_position_pressed.png')}/>
                    <View style={styles.levelLine} />
                    <ActionButton name="处理" icon={require('./img/ic_repair_btn_solve_pressed.png')}/>
                </View>
                <View style={styles.line} />
                <View style={styles.lineBox} />

            </View>
        )

    }

}

class ActionButton extends Component{
    render(){
        return (
            <TouchableOpacity
                style={styles.actionButtonItemBox}
                onPress={this.props.onPress}>
                <Image style={styles.actionButtonImg} source = {this.props.icon}/>
                <Text style={styles.actionButtonText}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({

    box: {
        paddingTop:12,
        backgroundColor: '#fff'
    },

    repBox: {
        flex:1,
        paddingBottom:12,
        flexDirection:'row'
    },

    repContentBox: {
        paddingBottom:12,
        paddingTop:12,
        paddingLeft:16,
        paddingRight:16,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor: '#fff'
    },

    imgIcon:{
        width:48,
        height:48
    },

    spinnerIcon:{
        height: 12,
        width:12
    },

    line:{
        flex:1,
        height:1,
        backgroundColor:'#e0e0e0'

    },

    levelLine:{
        width:1,
        backgroundColor:'#e0e0e0'
    },

    lineBox:{
        flex:1,
        height:8,
        backgroundColor:'#f5f5f5'

    },

    spinnerContentText: {
        flex:1,
        color:'#6f6f6f',
        fontSize:14,
        marginLeft:36
    },

    buttonBox: {
        height:18,
        backgroundColor:"#00a0f2",
        alignItems:'center',
        justifyContent:'center'
    },

    buttonText: {
        color:'#fff',
        padding:5,
        fontSize:12
    },

    blueText:{
        color:'#00a0f2',
        fontSize:14
    },

    pinkText:{
        color:'#ff5d96',
        fontSize:14
    },

    actionButtonBox: {

        flexDirection: 'row',
        justifyContent: 'center'
    },

    actionButtonItemBox: {
        flex:1,
        paddingTop:12,
        paddingBottom:12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionButtonImg: {
        height: 16,
        width:16,
        padding:5
    },

    actionButtonText: {
        color:'#00a0f2',
        marginLeft:8,
        fontSize:14
    }
});

module.exports = HomeListViewItem;