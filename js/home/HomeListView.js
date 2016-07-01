/**
 * Created by wang on 16/6/22.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ListView,
    Image
} from 'react-native';

import ListViewItem from './HomeListView.Item';
import HandlePage from '../handle';
import SendPage from '../send';
import TestPage from '../test';
import Popup from '../common/RTRPopup';


var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2, sectionHeaderHasChanged: (prev, next) => prev !== next});

class HomeListView extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            homes:[]
        };
        this.initData();
    }

    initData(){
        let home;
        for (let i = 0; i<6; i++)
        {
            home = {
                type : "管网抢修",
                source : "事件中心",
                num : "DP2234566",
                area : "萧山营业所",
                arrive : "30min",
                finish : "12h",
                sendTime : "13:34",
                numItem:{
                    contentKey:"事件编号",
                    contentValue:"112345"
                },
                userItem:{
                    contentKey:"反映人",
                    contentValue:"张果老"
                },
                timeItem:{
                    contentKey:"反映时间",
                    contentValue:"2016-06-11 13:45"
                },
                phoneNumItem:{
                    contentKey:"联系方式",
                    contentValue:"13566556677"
                },
                contentItem:{
                    contentKey:"反应内容",
                    contentValue:"阀门漏水"
                },
                addressItem:{
                    contentKey:"发生地址",
                    contentValue:"人民路33号"
                },
                remarkItem:{
                    contentKey:"备注",
                    contentValue:"--"
                },
                status : i % 2 == 0 ? 0 : 1
            }

            this.state.homes.push(home);
        }
    }

    onPressSend(rowData){
        this.props.navigator.push({
            component:SendPage,
            params:{data:rowData}
        })

    }

    onPressTelPhone(rowData){
        this.props.navigator.push({
            component:TestPage,
            params:{data:rowData}
        })

    }

    onPressPositioning(rowData){
        if (rowData)
        {
            this.popup.alert(rowData.addressItem.contentValue)
        }

    }

    onPressHandle(rowData){
        if (rowData.status == 1) {
            this.props.navigator.push({
                component:HandlePage,
                params:{data:rowData}
            })
        }

    }


    renderRow(rowData,sectionID,rowID){

        return(
            <ListViewItem data={rowData}
                          onPressSend={this.onPressSend.bind(this)}
                          onPressTelPhone={this.onPressTelPhone.bind(this)}
                          onPressPositioning={this.onPressPositioning.bind(this)}
                          onPressHandle={this.onPressHandle.bind(this)}/>
        )
    }

    render(){
        return(
            <View style={{flex:1}}>
                <ListView
                    dataSource={ds.cloneWithRows(this.state.homes)}
                    //renderHeader={this.renderHeader}
                    enableEmptySections={true}
                    renderRow={this.renderRow.bind(this)}/>

                <Popup ref={(popup) => {this.popup = popup}}/>
            </View>

        )
    }
}

module.exports = HomeListView;