import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class List extends Component {
render() {
    return (
        
        <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText}>
                    {this.props.val.date}
                </Text>

                <Text style={styles.noteText}>
                    {this.props.val.note}
                </Text>

        
            <TouchableOpacity   onPress={this.props.daleteMethod} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>
                Delete
                </Text>
            </TouchableOpacity>

            
            <TouchableOpacity  onPress={this.props.editMethod} style={styles.noteEdit}>
                <Text style={styles.noteDeleteText}>
                Edit
                </Text>
            </TouchableOpacity>
            
        </View>

    
  );

}
}

const styles = StyleSheet.create({
  note: {
    position:"relative",
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor: '#ededed'
    },
    noteText : {
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'#e91e63'
    },
    noteDelete:{
        position:"absolute",
        zIndex:15,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#2980b9',
        padding: 30,
        top:10,
        bottom:10,
        right:10
    },
    noteEdit:{
        position:"absolute",
        marginRight:101,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#2980b9',
        padding: 30,
        top:10,
        bottom:10,
        right:10
    },
    noteDeleteText:{
        color:'white'
    }
});
