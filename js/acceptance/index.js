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
    ListView,
    Switch,
    PixelRatio,
    Dimensions
} from 'react-native';

import Header from '../common/RTRHeader';
import Spinner from '../common/RTRSpinner';
import EditText from '../common/RTREditText';
import DateTimeEdit from '../common/RTRDateTimeEdit';
import Popup from '../common/RTRPopup';

var source;
var type;
var area;
var level;

class AcceptancePage extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            sourceContent:"事件中心",
            typeContent:"管道抢修",
            areaContent:"萧山营业所",
            levelContent:"6小时"
        };
        this.source = this.state.sourceContent;
        this.type = this.state.typeContent;
        this.area = this.state.areaContent;
        this.level = this.state.levelContent;
    }

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
                          content={this.state.sourceContent}
                          onPress={() => {this.onPress('任务来源')}}/>
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
                          content={this.state.typeContent}
                          onPress={() => {this.onPress('任务类型')}}/>

                      <View style={styles.line} />

                      <Spinner
                          name="所在区域"
                          content={this.state.areaContent}
                          onPress={() => {this.onPress('所在区域')}}/>

                      <View style={styles.line} />

                      <Spinner
                          name="处理级别"
                          content={this.state.levelContent}
                          onPress={() => {this.onPress('处理级别')}}/>

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

              <Popup ref={(popup) => {this.popup = popup}}/>
          </View>
        )
    }

    onPress(tag){
        switch (tag) {
            case '任务来源':
                this.popup.showList(this.renderListView(tag,["事件中心","热线系统","电话反映"]));
                break;
            case '任务类型':
                this.popup.showList(this.renderListView(tag,["管道抢修","设备养护","杂工","其他"]));
                break;
            case '所在区域':
                this.popup.showList(this.renderListView(tag,["萧山营业所","城南营业所","江东营业所","余杭营业所"]));
                break;
            case '处理级别':
                this.popup.showList(this.renderListView(tag,["6小时","12小时","24小时","24小时","48小时"]));
                break;
            default:
                this.props.navigator.pop();
                break;
        }

    }

    renderListView(title, content){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(content)
        };

        return(
            <View style={{flex:1}}>
                <Text style={styles.listTitle}>{title || ''}</Text>
                <View style={styles.popupLine}/>
                <ListView
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderRow={(rowData,sectionID,rowID) => this.renderRow(rowData,sectionID,rowID,title)}
                />
            </View>

        )
    }

    renderRow(rowData,sectionID,rowID,title){


        return(

            <TouchableOpacity onPress={() => {this.onPressItem(rowData,title)}}>
                <Text style={styles.itemText}>{rowData}</Text>
            </TouchableOpacity>
        )
    }


    onPressItem(rowData,title){
        switch (title) {
            case '任务来源':
                this.source = rowData;
                this.setState(
                    {
                        sourceContent:rowData,
                        typeContent:this.type,
                        areaContent:this.area,
                        levelContent:this.level
                    }
                );
                break;
            case '任务类型':
                this.type = rowData;
                this.setState(
                    {
                        sourceContent:this.source,
                        typeContent:rowData,
                        areaContent:this.area,
                        levelContent:this.level
                    }
                );
                break;
            case '所在区域':
                this.area = rowData;
                this.setState(
                    {
                        sourceContent:this.source,
                        typeContent:this.type,
                        areaContent:rowData,
                        levelContent:this.level
                    }
                );
                break;
            case '处理级别':
                this.level = rowData;
                this.setState(
                    {
                        sourceContent:this.source,
                        typeContent:this.type,
                        areaContent:this.area,
                        levelContent:rowData
                    }
                );
                break;
        }

        this.popup.close();
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

    popupLine: {
        height: 1 / PixelRatio.get(),
        width: Dimensions.get('window').width - 50,
        backgroundColor: '#ddd'
    },

    itemText: {
        fontSize: 14,
        alignSelf:"center",
        margin:12,
        color: '#149be0'
    },
    listTitle: {
        fontSize: 16,
        fontWeight: '500',
        margin:12,
        textAlign: 'center'
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