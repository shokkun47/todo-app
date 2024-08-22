import { 
    TextInput, 
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
} from "react-native";

const TaskInput = ({ taskText, setTaskText, handleSaveTask, isEditing }) => {
  return (
    <View>
        <TextInput
            placeholder="タスクを入力"
            style={styles.input}
            onChangeText={setTaskText}
            value={taskText}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
            <Text style={styles.saveButtonText}>{isEditing ? "編集" : "追加"}</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
  
export default TaskInput