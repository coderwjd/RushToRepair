/**
 * Created by wang on 16/6/21.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ToolbarAndroid,
    Platform,
    PropTypes,
    StyleSheet,
    Image
} from 'react-native';


class RTRHeaderAndroid extends Component{

    handleActionSelected(position:number){
        let items = [];
        if (this.props.rightItem)
        {
            items = [this.props.rightItem, ...items];
        }
        const item = items[position];
        item && item.onPress && item.onPress();
    }

    render(){
        const {leftItem, rightItem} = this.props;
        let actions = [];
        if (rightItem) {

            //console.log("rightItem",rightItem);
            const {title, icon, layout} = rightItem;

            actions.push({
                icon:layout !== 'title' ? icon : undefined,
                title:title || "",
                show:'always'
            });

            //rightItem.forEach(function(item){
            //
            //});

        }
        return(
            <View style={[styles.toolbarContainer,this.props.style,{backgroundColor:"#00a0f2"}]}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    navIcon={leftItem && leftItem.icon}
                    onIconClicked={leftItem && leftItem.onPress}
                    title={this.props.title}
                    titleColor="#fff"
                    actions={actions}
                    onActionSelected={this.handleActionSelected.bind(this)}
                />
            </View>
        )
    }

}

class RTRHeaderIOS extends Component{

    render(){
        const {title, leftItem, rightItem} = this.props;
        return(
            <View style={styles.header}>
                <View style = {styles.leftItem}>
                    <ItemIOS {...leftItem}/>
                </View>
                <View
                    accessible={true}
                    accessibilityLabel={title}
                    accessibilityTraits="header"
                    style={styles.centerItem}>

                    <Text style={styles.titleText}>
                        {title}
                    </Text>
                </View>
                <View style={styles.rightItem}>
                    <ItemIOS {...rightItem}/>
                </View>
            </View>
        )
    }

}

class ItemIOS extends Component{
    render(){
        const {title, icon, onPress} = this.props;
        var center;
        if (title) {
            center = (
                <Text style={styles.rightText}>
                    {title}
                </Text>
            );
        }else if (icon) {
            center = <Image source = {icon}/>
        }
        if (center){
            return(
                <TouchableOpacity
                    onPress={() => {onPress && onPress()}}
                    style={styles.itemBox}>

                    {center}
                </TouchableOpacity>
            )
        }

        return null
    }
}

const RTRHeader = Platform.OS == 'ios' ? RTRHeaderIOS : RTRHeaderAndroid;

var STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
var HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00a0f2',
        paddingTop: STATUS_BAR_HEIGHT,
        height: HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    toolbarContainer: {
        paddingTop: STATUS_BAR_HEIGHT,
    },
    toolbar: {
        height: HEADER_HEIGHT - STATUS_BAR_HEIGHT
    },
    itemBox:{
        padding:11
    },
    titleText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    centerItem: {
        flex: 2,
        alignItems: 'center'
    },
    leftItem: {
        flex: 1,
        alignItems: 'flex-start'
    },
    rightItem:{
        flex: 1,
        alignItems: 'flex-end'
    },

    rightText: {
        fontSize:12,
        color:'#fff'
    }
});

module.exports = RTRHeader;