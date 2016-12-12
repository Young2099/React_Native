/**
 * Created by panguso on 2016/12/12.
 */

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import theme from '../constants/theme';
import px2dp from '../utils/px2dp';
export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        const {title} =this.props;
        return (
            <View style={styles.toolbar}>
                <View style={styles.fixedCell}>
                </View>
                <View style={styles.centerCell}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.fixedCell}>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    toolbar: {
        height: theme.toolbar.height,
        backgroundColor: theme.toolbar.barColor,
        flexDirection: 'row',
        paddingTop: Platform.OS === 'android' ? 0 : px2dp(6),
        elevation: 8,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {height: 5, width: 1},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    fixedCell: {
        width: theme.toolbar.height,
        height: theme.toolbar.height,
    },
    centerCell: {
        flex: 1,
        height: theme.toolbar.height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: theme.toolbar.titleSize,
        color: theme.toolbar.titleColor
    }
});