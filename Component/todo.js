import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import List from './list'

export default class Todo extends Component {

        constructor(props) {
            super(props)
            this.state = {
                noteArray : [],
                noteText : '',
                editNote : false,
                updateKey : ''
            }
            this.addNote = this.addNote.bind(this)
            this.editText = this.editText.bind(this)
        }

        addNote(){
            const {noteArray,noteText} = this.state
            if(noteText) {
                let d = new Date();
                noteArray.push({
                    note: noteText,
                    date : d.getDate() + ' / ' + (d.getMonth() + 1) + ' / ' + (d.getDate())
                })
                this.setState({noteArray : noteArray})
                this.setState({noteText:''})

            }
        }

        editText(){
            const {noteText,noteArray,updateKey} = this.state
            if(noteText) {
                let d = new Date();
                
            //  first change the value of not array then update it
            noteArray[updateKey] = {
                        note: noteText,
                        date : d.getDate() + ' / ' + (d.getMonth() + 1) + ' / ' + (d.getDate())
                    } ;
            this.setState({noteArray  })
                this.setState({noteText:''})
            this.setState({editNote:false})

            }
        }

        deleteNote(key){
            const {noteArray} = this.state
            console.log(noteArray[key])
            // swal('noteArray[key].note', "is deleted from the list", "error");
            alert(noteArray[key].note + ' is deleted from the list')
            noteArray.splice(key,1);
            this.setState({noteArray:noteArray})
        }

        editNote(key){
            const {noteArray} = this.state
            console.log(noteArray[key].note)
            this.setState({noteText : noteArray[key].note});
            this.setState({editNote:true , updateKey: key})
        }

    render() { 
        let notes = this.state.noteArray.map(
     (val,key) => <List key={key} keyval={key} val={val} daleteMethod={() => this.deleteNote(key)} editMethod={() => this.editNote(key)}/>
        ) 
    return (
    <View style={styles.container}>

      <View style={{backgroundColor:'blue',
    alignItems:"center",
    justifyContent:"center",
    borderBottomColor:'#ddd',
    borderBottomWidth:10
    }}>

      <Text style={ {
        color:'white',
        fontSize:18,
        padding: 26,
      } }>Todo App</Text>
      </View>

      <ScrollView style={{
        flex:1,
        marginBottom:100
      }}>
            {notes}
      </ScrollView>

      <View style={{ position:'absolute',
          bottom:0,
          left:0,
          right:0,
          zIndex:10
        }
      }>
        <TextInput
          style={{alignSelf:"stretch",
        color:'#fff',
        padding:20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor:'#ededed'
      }}
        placeholder='Add Todo'
        onChangeText={(noteText) => this.setState({noteText})}
        value={this.state.noteText}
        >

        </TextInput>
      </View>
        {
            this.state.editNote ? 
        <TouchableOpacity style={styles.addButton} onPress={this.editText}>
          <Text style={styles.addButtonText}>
          update
          </Text>
        </TouchableOpacity> : <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
          <Text style={styles.addButtonText}>
                Add
          </Text>
        </TouchableOpacity>

        }

    </View>
  );

}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  addButton : {
    position:'absolute',
    zIndex:11,
    right:20,
    bottom:90,
    backgroundColor:'#e91e63',
    width:90,
    height:90,
    alignItems: "center",
    borderRadius:50,
    justifyContent:'center',
    elevation:9
  },
  addButtonText : {
    color:'#fff',
    fontSize:24
  }
});
