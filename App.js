import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  const handleSaveTask = () => {
    if (!taskText.trim()) return;
    if(isEditing) {
      setTasks(
        tasks.map((task) =>
          task.id === isEditing ? {...task, text: taskText } : task
        )
      );
      setIsEditing(null);
    } else {
      const newTask = { id: Date.now().toString(), text: taskText };
      setTasks([...tasks, newTask]);  
    }
    setTaskText("");
  };
  
  const handleEdit = (item) => {
    setTaskText(item.text);
    setIsEditing(item.id);
  };
  
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todoアプリ</Text>
      <TaskInput
        taskText={taskText}
        setTaskText={setTaskText}
        handleSaveTask={handleSaveTask}
        isEditing={isEditing}
      />
      <FlatList
        data={tasks} 
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccceee",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadious: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
  },
  taskText: {
    maxWidth: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
