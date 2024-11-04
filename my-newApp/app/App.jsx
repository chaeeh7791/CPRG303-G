/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import {useState} from 'react';
import { SafeAreaView} from 'react-native';

export default function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gum',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <div>
      <SafeAreaView>
        <ToDoList tasks = {tasks} />
        <ToDoForm setTasks = {setTasks} />
        <ToDoForm addTask = {addTask} />
      </SafeAreaView>
    </div>
  );
}
