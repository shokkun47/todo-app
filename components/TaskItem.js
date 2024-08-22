import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
import { Icon } from "react-native-elements";
  
const TaskItem = ({ item, handleEdit, handleDelete }) => {
    return (
        <View style={styles.task}>
            <Text style={styles.taskText}>{item.text}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => handleEdit(item)}
                >
                    <Icon name="edit" color="#4caf50">
                        編集
                    </Icon>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDelete(item.id)}
                >
                <Icon name="delete" color="#f44336">
                    削除
                </Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default TaskItem