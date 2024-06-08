import Header from "./component/Header.jsx"
import TaskList from "./component/TaskList.jsx"

import "./App.css"

function App() {
	return [<Header key="header" />, <TaskList key="taskList" />]
}

export default App
