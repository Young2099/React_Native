/**
 * Created by panguso on 2016/12/12.
 */

import React,{Component} from 'react';
import {Text,StyleSheet} from 'react-native';
export default class DiscoverFragment extends Component{
    render(){
        return(
            <Text style={styles.textHomeStyle}>
                Hello HomeFragment!
            </Text>

        );
    }

}

const styles = StyleSheet.create({
    textHomeStyle:{
        width:40,
        alignItems:'center'
    }
});