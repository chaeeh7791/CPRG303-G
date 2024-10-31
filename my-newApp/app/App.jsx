/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoFrom from './ToDoForm';
import ToDoList from './ToDoList';
import {usesState} from 'react';
import { SafeAreaView} from 'react-native';

export default function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gum',
    'Walk dog'
  ]);

  return (
    <div>
      <SafeAreaView>
        <ToDoList tasks = {tasks} />
        <ToDoFrom setTasks = {setTasks} />
      </SafeAreaView>
    </div>
  );
}
