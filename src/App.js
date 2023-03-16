import logo from './logo.svg';
import './App.css';
import TodoHeader from './Components/TodoHeader';
import TodoFooter from './Components/TodoFooter';
//import styledjs from './Components/styledjs';
import TasksToDo from './Components/TasksToDo';
/*import TaskList from './Components/TaskList';*/
import { useState } from 'react';

const App = () => {
  
return (<main>
    
      <TodoHeader />
      <TasksToDo/>
      <TodoFooter />
  </main>
  );
}
export default App;







/*function App() {

  const [itemlist, setItemList]= useState([]);

  function addItemToList(item){
    setItemList([...itemlist, item]);
  }
  return (<main>
    <TodoHeader />
    <Tasks/>
    <TaskList />
    <TodoFooter />
   </main>);
} 

export default App;*/
