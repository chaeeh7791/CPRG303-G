import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';
 
function HomeScreen ({navigation}){
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
 
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask('');
    }
  };
 
  return (
<MainLayout>
  <View style={styles.container}>
  <Text style={styles.title}>To-Do List</Text>
  <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.task}>{item.text}</Text>}
      />
  <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
  <Button title="Add Task" 
        onPress={() => NavigationPreloadManager.navigate('About')}/>
  </View>
</MainLayout>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  task: {
    fontSize: 18,
    marginVertical: 5,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
 
export default HomeScreen;

