import React from 'react';
import View from 'react-native';
import TextInput from 'react-native';
import Button from 'react-native';

export default function ToDoForm({addTask}) {
<View style={styles.form}>
<TextInput
  const {...taskText, setTaskText = React.useState('')}
  style={styles.input}
  placeholder="Add a new task..."
  onChangeText = {(text) => setTaskText(text)}
  value={taskText}
  />
<Button title="Add Task" onPres={() => addTask(taskText)} />
</View>

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
      },
    })};