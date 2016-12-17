/**
 * Created by panguso on 2016/12/12.
 */
'use strict';
import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from 'react-native-scrollable-tab-view/ScrollableTabBar';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import TextTabPage from './TabPages/TextTabPage';
import VideoTabPage from './TabPages/VideoTabPage';
import ImageTabPage from './TabPages/ImageTabPage';
import NavigatorBar from '../../component/NavigationBar';
import Avatar from '../../component/Avatar';

import theme from '../../constants/theme';
export default class DiscoveryFragment extends Component {
    constructor(props) {
        super(props);
        this.tabNames = [['Android', 'iOS', '前端'], ['福利', '休息视频', '扩展阅读']];
        this.tabIcon = [['logo-android', 'logo-apple', 'logo-chrome'], ['ios-images', 'ios-film', 'ios-book']];
        this.tabColor = [['rgb(141,192,89)', '#000', 'rgb(51,154,237)'], ['rgb(249,89,58)', 'rgb(154,53,172)', 'rgb(65,87,175)']];

    }

    render() {
        return (
            // //可以滚动的ScrollableTabView..
            // <ScrollableTabView//类似android的TabBar
            //     initialPage={0}
            //     renderTabBar={() => <ScrollableTabBar/>}//所设置的渲染tabBar的组件
            //     tabBarUnderlineStyle={{backgroundColor: '#fff'}}
            //     tabBarBackgroundColor={theme.mainThemeColor}
            //     tabBarTextStyle={{color: '#fff'}}>
            //     <ImageTabPage tabLabel={this.tabNames[0]}/>
            //     <TextTabPage tabLabel={this.tabNames[1]}/>
            //     <TextTabPage tabLabel={this.tabNames[2]}/>
            //     <VideoTabPage tabLabel={this.tabNames[3]}/>
            //     <TextTabPage tabLabel={this.tabNames[4]}/>
            //     <TextTabPage tabLabel={this.tabNames[5]}/>
            // </ScrollableTabView>
            <View style={styles.container}>
                <NavigatorBar title="发现"/>
                <ScrollView>
                    <View style={styles.btnPanel}>
                        {this.tabNames.map((item, i) => {
                            return (
                                <View style={styles.btnRow} key={i}>
                                    {this.tabNames[i].map((subItem, index) => {
                                        return (
                                            <View style={styles.btnCell} key={index}>

                                                <Avatar icon={this.tabIcon[i][index]}
                                                        width={70} backgroundColor={this.tabColor[i][index]}
                                                        onPress={this._clickFragment.bind(this)}/>
                                                <Text style={styles.label}>{subItem}</Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }

    //跳转对应的Fragment的函数
    _clickFragment() {
        // this.props.navigator.push({component: });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor,
    },
    btnPanel: {
        backgroundColor: '#fff',
        height: 270,
        width: theme.screenWidth,
        marginTop: 12,
        borderBottomColor: theme.segment.color,
        borderBottomWidth: theme.segment.width,
        borderTopColor: theme.segment.color,
        borderTopWidth: theme.segment.width
    },
    btnCell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    label: {
        marginTop: 8,
        color: "#000"
    }
});