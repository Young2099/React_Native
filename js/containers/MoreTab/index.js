/**
 * Created by panguso on 2016/12/12.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import theme from '../../constants/theme';
import NavigatorBar from '../../component/NavigationBar';

export default class MoreFragment extends Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: theme.pageBackgroundColor}}>
                <NavigatorBar title="更多"/>
            </View>
        );
    }
}
