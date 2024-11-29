/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from '../src/components/ToDoList';
import {useState} from 'react';
import { SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gum',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  const Stack = createStackNavigator();


  return (
    <div>
      <SafeAreaView>
        <ToDoList tasks = {tasks} />
        <ToDoForm setTasks = {setTasks} />
        <ToDoForm addTask = {addTask} />
      </SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
        {/*******************/}
      </NavigationContainer>
    </div>
  );
}
