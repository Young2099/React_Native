/**
 * Created by panguso on 2016/12/12.
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import theme from '../constants/theme';
import {Image, Platform} from 'react-native';
import HomeFragment from '../containers/HomeFragment';
import MeFragment from '../containers/MeFragment';
import DiscoverFragment from '../containers/DiscoverFragment';
import CollectionFragment from '../containers/CollectionFragment';
import Icon from 'react-native-vector-icons/Ionicons';
import px2dp from '../utils/px2dp';
export default class MainPage extends Component {
    render() {
        return (
            <BottomTabBar/>
        );
    }
}

class BottomTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'me'};
        this.tabNames = ['首页', '发现', '收藏', '更多'];
    }

    render() {
        return (
            <TabNavigator style={styles.tabBarStyle}
                          hidesTabTouch={true}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title={this.tabNames[0]}
                    selectedTitleStyle={{color: theme.tabButton.selectedColor}}
                    renderIncon={() => <Image style={styles.tabBarItemIcon} source={this.state.homeNormal}/>}
                    renderSelectedIcon={() => <Image style={styles.tabBarItemIcon} source={this.state.homeSelected}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    {<HomeFragment/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'discovery'}
                    title={this.tabNames[1]}
                    selectedTitleStyle={{color: theme.tabButton.selectedColor}}
                    renderIncon={() => <Image style={styles.tabBarItemIcon} source={this.state.compassNormal}/>}
                    renderSelectedIcon={() => <Image style={styles.tabBarItemIcon}
                                                     source={this.state.compassSelected}/>}
                    onPress={() => this.setState({selectedTab: 'discovery'})}>
                    {<DiscoverFragment/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'me'}
                    title={this.tabNames[2]}
                    selectedTitleStyle={{color: theme.tabButton.selectedColor}}
                    renderIncon={() => <Image style={styles.tabBarItemIcon} source={this.state.moreNormal}/>}
                    renderSelectedIcon={() => <Image style={styles.tabBarItemIcon} source={this.state.moreSelected}/>}
                    onPress={() => this.setState({selectedTab: 'me'})}>
                    {<MeFragment/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'collection'}
                    title={this.tabNames[3]}
                    selectedTitleStyle={{color: theme.tabButton.selectedColor}}
                    renderIncon={() => <Image style={styles.tabBarItemIcon} source={this.state.collectionNormal}/>}
                    renderSelectedIcon={() => <Image style={styles.tabBarItemIcon}
                                                     source={this.state.collectionSelected}/>}
                    onPress={() => this.setState({selectedTab: 'collection'})}>
                    {<CollectionFragment/>}
                </TabNavigator.Item>
            </TabNavigator>

        );

    }

    componentWillMount() {
        Icon.getImageSource('md-home', 100, theme.tabButton.normalColor).then((source) =>
            this.setState({homeNormal: source}));
        Icon.getImageSource('md-home', 100, theme.tabButton.selectedColor).then((source) =>
            this.setState({homeSelected: source}));
        Icon.getImageSource('md-aperture', 100, theme.tabButton.normalColor).then((source) =>
            this.setState({compassNormal: source}));
        Icon.getImageSource('md-aperture', 100, theme.tabButton.selectedColor).then((source) =>
            this.setState({compassSelected: source}));
        Icon.getImageSource('md-person', 100, theme.tabButton.normalColor).then((source) =>
            this.setState({moreNormal: source}));
        Icon.getImageSource('md-person', 100, theme.tabButton.selectedColor).then((source) =>
            this.setState({moreSelected: source}));
        Icon.getImageSource('md-cube', 100, theme.tabButton.normalColor).then((source) =>
            this.setState({collectionNormal: source}));
        Icon.getImageSource('md-cube', 100, theme.tabButton.selectedColor).then((source) =>
            this.setState({collectionSelected: source}));
    }

}
const styles = {

    tabBarItemIcon: {
        width: px2dp(20),
        height: px2dp(20)
    },
    tabBarStyle: {
        height: px2dp(45),
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? px2dp(6) : px2dp(3)
    }
}

