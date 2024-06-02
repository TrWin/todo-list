import React, { useState } from 'react';
import '../styles/Card.scss';

const ToDoList = () => {
  const [tasks, setTasks] = useState(
    [
        {
            type: 'Fruit',
            name: 'Apple',
        },
        {
            type: 'Vegetable',
            name: 'Broccoli',
        },
        {
            type: 'Vegetable',
            name: 'Mushroom',
        },
        {
            type: 'Fruit',
            name: 'Banana',
        },
        {
            type: 'Vegetable',
            name: 'Tomato',
        },
        {
            type: 'Fruit',
            name: 'Orange',
        },
        {
            type: 'Fruit',
            name: 'Mango',
        },
        {
            type: 'Fruit',
            name: 'Pineapple',
        },
        {
            type: 'Vegetable',
            name: 'Cucumber',
        },
        {
            type: 'Fruit',
            name: 'Watermelon',
        },
        {
            type: 'Vegetable',
            name: 'Carrot',
        },
    ]
  );
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  const updatedTask = (item) => {
    const updatedTasks = tasks.filter((task, i) => task.name !== item.name);
    setTasks(updatedTasks);

    if (item.type === 'Fruit') {
        setFruits([...fruits, item]);
    }else{
        setVegetables([...vegetables, item]);
    }
  };

  const removedFruit = (newFruit) => {
    const updatedFruit = fruits.filter((item, i) => item.name !== newFruit.name);
    setFruits(updatedFruit);
    
    setTasks([...tasks, newFruit]);
  }

  const removedVeg = (newVegetable) => {
    const updatedTasksVeg = vegetables.filter((task, i) => task.name !== newVegetable.name);
    setVegetables(updatedTasksVeg);

    setTasks([...tasks, newVegetable]);
  }

  const reverseTask = (type, item, index) => {
    console.log(item)
    if (item !== undefined) {
        if (type === 'Fruit' && fruits.length !== 0) {

            let todo = [...fruits]
            todo.splice(index, 1)
            setFruits(todo)

        }else if(type === 'Vegetable' && vegetables.length !== 0){

            let todo = [...vegetables]
            todo.splice(index, 1)
            setVegetables(todo)

        }
        setTasks([...tasks, item]);

    }
    
  }

  return (
    <div className="tasks-grid">
        <div className="todo-list">
            <ul>
                {tasks.map((task, index) => (
                <li key={index} className="task-card" onClick={() => updatedTask(task)}>
                    <span>{task.name}</span>
                </li>
                ))}
            </ul>
        </div>
        <div className="todo-list">
            <h1>Fruit</h1>
            <ul>
                {fruits.map((task, index) => (
                <li key={index} className="task-card" onClick={() => removedFruit(task)}>
                    <span>{task.name}</span>
                </li>
                ))}
            </ul>
            <div onClick={() => reverseTask('Fruit', fruits[fruits.length-1], fruits.length -1)}></div>
        </div>
        <div className="todo-list">
            <h1>Vegetable</h1>
            <ul>
                {vegetables.map((task, index) => (
                <li key={index} className="task-card" onClick={() => removedVeg(task)}>
                    <span>{task.name}</span>
                </li>
                ))}
            </ul>
            <div onClick={() => reverseTask('Vegetable', vegetables[vegetables.length-1], vegetables.length -1)}></div>
        </div>
    </div>
  );
};

export default ToDoList;
