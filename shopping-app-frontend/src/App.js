import React, { useState, useEffect } from "react";
import { getItems, addItem, toupdateItem, deleteItem } from "./apiService";


function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", amount: 0 });
  const [updateItem, setUpdateItem] = useState({ name: "", amount: 0 });
  const [deleteName, setDeleteName] = useState("");
  const [error, setError] = useState(null);

  // Fetch all shopping items
  const fetchItems = async () => {
    try {
      const response = await getItems();
      if (response.status === 200){
        setItems(response.data);
        setError(null);
      }
    } catch (err) {
      setError("Failed to fetch items");
    }
  };

  // Add a new shopping item
  const handleAddItem = async () => {
    try {
      const response = await addItem(newItem);
      if (response.status === 201) {
        fetchItems();
        setNewItem({ name: "", amount: 0 });
        setError(null);
      } else {
        setError("Failed to add item. Unexpected response status.");
      }
    } catch (err) {
      if (err.response) {
        const statusCode = err.response.status;
        if (statusCode === 400) {
          setError("Invalid input data. Please check the item details.");
        } else {
          setError(`Failed to add item. Error: ${statusCode}`);
        }
      } else {
        setError("Failed to add item.");
      }
    }
  };

 // Update an existing shopping item
 const handleUpdateItem = async () => {
  try {
    const response = await toupdateItem(updateItem.name, updateItem);
    if (response.status === 200) {
      fetchItems();
      setUpdateItem({ name: "", amount: 0 });
      setError(null);
    } else {
      setError("Failed to update item. Unexpected response status.");
    }
  } catch (err) {
      if (err.response) {
        const statusCode = err.response.status;
        if (statusCode === 404) {
          setError("Item not found to update.");
        } else {
          setError(`Failed to update item. Error: ${statusCode}`);
        }
      } else {
        setError("Failed to update item.");
      }
    }
  };

  const handleDeleteItem = async () => {
    try {
      const response = await deleteItem(deleteName);
      
      fetchItems();
      setDeleteName("");
      setError(null);
      
    } catch (err) {
      if (err.response) {
        const statusCode = err.response.status;
        if (statusCode === 404) {
          setError("Item not found to delete.");
        } else {
          setError(`Failed to delete item. Error: ${statusCode}`);
        }
      } else {
        setError("Failed to delete item.");
      }
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
