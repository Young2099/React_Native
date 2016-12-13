/**
 * Created by panguso on 2016/12/12.
 */

import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import NavigationBar from '../../component/NavigationBar';
import theme from '../../constants/theme'
export default class HomeFragment extends Component {
    constructor(props) {
        super(props);
        this.state = {opacity: 1,};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.toolbar, {opacity: this.state.opacity}]}>
                    <NavigationBar title="今日Gank"/></View>
                <ScrollView onScroll={this._onScroll.bind(this)}>
                    <Image source={require('../../assets/a.jpeg')}
                           resizeMode="cover" style={{height: 300, width: theme.screenWidth}}/>
                    <View style={styles.scrollContents}></View>
                </ScrollView>
            </View>
        );
    }

    _onScroll() {

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    toolbar: {
        position: 'absolute',
        width: theme.screenWidth,
        left: 0,
        top: 0,
        elevation: 8 //通过使用Android特定的elevation属性实现了视图阴影。但只能在Android 5.0+上使用。
    },
    scrollContents: {
        height: theme.screenHeight,
    }
});