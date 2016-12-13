/**
 * Created by panguso on 2016/12/12.
 */
/**
 * Created by panguso on 2016/12/12.
 */

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SimpleRoItem from '../../component/SimpleRowItem';
import theme from '../../constants/theme';
import px2dp from '../../utils/px2dp';
import NavigationBar from '../../component/NavigationBar';
export default class CollectionFragment extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="收藏" leftBtnPress={this._itemClickCallback.bind(this)} leftBtnIcon="arrow-back"
                               isBackBtnOnLeft={true}/>
                <Text>me</Text>
                <View style={styles.block}>

                    <SimpleRoItem title="主题" icon="md-brush" onPress={this._itemClickCallback.bind(this)}/>
                    <SimpleRoItem title="主题" icon="md-brush" onPress={this._itemClickCallback.bind(this)}/>
                    <SimpleRoItem title="主题" icon="md-brush" renderSegment={false}
                                  onPress={this._itemClickCallback.bind(this)}/>
                </View>
            </View>
        );
    }

    _itemClickCallback() {
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    block: {
        marginTop: px2dp(15),
        borderBottomColor: theme.segment.color,
        borderBottomWidth: theme.segment.width,
        borderTopColor: theme.segment.color,
        borderTopWidth: theme.segment.width
    }
});