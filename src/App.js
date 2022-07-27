import Todo from './components/Todo'
import './App.css'

function App() {
  const todos = [
    {
      id: 1,
      title: 'wash dishes',
      completed: true,
    },
    {
      id: 1,
      title: 'make dinner',
      completed: false,
    },
  ]
  return (
    <div className="App">
      {todos.map((todos) => {
        return <Todo todo={todos} />
      })}
    </div>
  )
}

export default App
