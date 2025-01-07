import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://urban-fiesta-q7w7rvpg565f4gpp-8080.app.github.dev/api/shoppingItems";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", amount: 0 });
  const [updateItem, setUpdateItem] = useState({ name: "", amount: 0 });
  const [deleteName, setDeleteName] = useState("");
  const [error, setError] = useState(null);

  // Fetch all shopping items
  const fetchItems = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch items");
    }
  };

  // Add a new shopping item
  const handleAddItem = async () => {
    try {
      await axios.post(API_BASE_URL, newItem);
      fetchItems();
      setNewItem({ name: "", amount: 0 });
      setError(null);
    } catch (err) {
      setError("Failed to add item");
    }
  };

  // Update an existing shopping item
  const handleUpdateItem = async () => {
    try {
      await axios.put(`${API_BASE_URL}/${updateItem.name}`, updateItem);
      fetchItems();
      setUpdateItem({ name: "", amount: 0 });
      setError(null);
    } catch (err) {
      setError("Failed to update item");
    }
  };

  // Delete a shopping item by name
  const handleDeleteItem = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/${deleteName}`);
      fetchItems();
      setDeleteName("");
      setError(null);
    } catch (err) {
      setError("Failed to delete item");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Items</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>All Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.name} - {item.amount}
          </li>
        ))}
      </ul>

      <h2>Add Item</h2>
      <input
        type="text"
        placeholder="Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={newItem.amount}
        onChange={(e) => setNewItem({ ...newItem, amount: parseInt(e.target.value) })}
      />
      <button onClick={handleAddItem}>Add</button>

      <h2>Update Item</h2>
      <input
        type="text"
        placeholder="Name"
        value={updateItem.name}
        onChange={(e) => setUpdateItem({ ...updateItem, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={updateItem.amount}
        onChange={(e) => setUpdateItem({ ...updateItem, amount: parseInt(e.target.value) })}
      />
      <button onClick={handleUpdateItem}>Update</button>

      <h2>Delete Item</h2>
      <input
        type="text"
        placeholder="Name"
        value={deleteName}
        onChange={(e) => setDeleteName(e.target.value)}
      />
      <button onClick={handleDeleteItem}>Delete</button>
    </div>
  );
}

export default App;
