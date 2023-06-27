import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import InputForm from "./InputForm";
import { db } from "../firebase/firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
} from "firebase/firestore";
export default function Main() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let todoArray = [];
      QuerySnapshot.forEach((doc) => {
        todoArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todoArray);
    });
    return () => unsub();
  }, []);
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { complete: !todo.complete });
  };

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="App">
      <InputForm />
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}
