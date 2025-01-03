<!-- src/components/ShoppingItems.vue -->
<template>
  <div>
    <h1>Shopping Items</h1>

    <!-- 查詢購物清單 -->
    <div>
      <button @click="getAllItems">Fetch All Items</button>
    </div>

    <!-- 顯示購物清單 -->
    <ul>
      <li v-for="item in shoppingItems" :key="item.name">
        {{ item.name }} - {{ item.amount }}
        <button @click="editItem(item)">Edit</button>
        <button @click="deleteItem(item.name)">Delete</button>
      </li>
    </ul>

    <!-- 新增/修改購物清單表單 -->
    <div>
      <h2>{{ editingItem ? 'Edit Item' : 'Add New Item' }}</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="itemName" placeholder="Item Name" required />
        <input type="number" v-model="itemAmount" placeholder="Amount" required />
        <button type="submit">{{ editingItem ? 'Update' : 'Add' }} Item</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      shoppingItems: [],
      itemName: '',
      itemAmount: '',
      editingItem: null,
    };
  },
  methods: {
    // 查詢所有購物項目
    getAllItems() {
      axios.get('https://supreme-space-engine-g4g49x7wg6r2wpxx-8080.app.github.dev/api/shoppingItems')
        .then(response => {
          this.shoppingItems = response.data;
        })
        .catch(error => {
          console.error('Error fetching items:', error);
        });
    },

    // 新增或修改購物項目
    handleSubmit() {
      if (this.editingItem) {
        this.updateItem();
      } else {
        this.addItem();
      }
    },

    // 新增購物項目
    addItem() {
      axios.post('https://supreme-space-engine-g4g49x7wg6r2wpxx-8080.app.github.dev/api/shoppingItems', {
        name: this.itemName,
        amount: this.itemAmount,
      })
        .then(response => {
          this.shoppingItems.push(response.data);
          this.clearForm();
        })
        .catch(error => {
          console.error('Error adding item:', error);
        });
    },

    // 修改購物項目
    updateItem() {
      axios.put(`https://supreme-space-engine-g4g49x7wg6r2wpxx-8080.app.github.dev/api/shoppingItems/${this.itemName}`, {
        name: this.itemName,
        amount: this.itemAmount,
      })
        .then(response => {
          const index = this.shoppingItems.findIndex(item => item.name === this.itemName);
          this.$set(this.shoppingItems, index, response.data);
          this.clearForm();
        })
        .catch(error => {
          console.error('Error updating item:', error);
        });
    },

    // 刪除購物項目
    deleteItem(name) {
      axios.delete(`https://supreme-space-engine-g4g49x7wg6r2wpxx-8080.app.github.dev/api/shoppingItems/${name}`)
        .then(() => {
          this.shoppingItems = this.shoppingItems.filter(item => item.name !== name);
        })
        .catch(error => {
          console.error('Error deleting item:', error);
        });
    },

    // 設置表單為編輯模式
    editItem(item) {
      this.itemName = item.name;
      this.itemAmount = item.amount;
      this.editingItem = item;
    },

    // 清空表單
    clearForm() {
      this.itemName = '';
      this.itemAmount = '';
      this.editingItem = null;
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 20px;
}

input {
  margin: 5px;
  padding: 5px;
}

button {
  padding: 5px 10px;
  margin: 5px;
}
</style>
