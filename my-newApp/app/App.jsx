/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoFrom from './ToDoForm';
import ToDoList from './ToDoList';

import { SafeAreaView} from 'react-native';

export default function App() {
  return (
    <div>
      <SafeAreaView>
        <ToDoList />
        <ToDoFrom />
      </SafeAreaView>
    </div>
  );
}
