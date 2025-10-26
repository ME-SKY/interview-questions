// =============================================
// VUE.JS ОСНОВНЫЕ КОНЦЕПЦИИ И ПРИМЕРЫ
// =============================================

// 1. СОЗДАНИЕ ПРИЛОЖЕНИЯ VUE
// ===========================
const { createApp } = Vue;

// Опциональный API (Vue 2 стиль)
const appOptions = {
  data() {
    return {
      message: 'Привет Vue!',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  mounted() {
    console.log('Компонент mounted!');
  }
};

// Composition API (Vue 3 - современный подход)
const app = createApp({
  // ===========================
  // 2. РЕАКТИВНОСТЬ И REF/REACTIVE
  // ===========================
  setup() {
    // ref - для примитивных значений
    const count = Vue.ref(0);
    const message = Vue.ref('Привет Vue!');
    
    // reactive - для объектов
    const user = Vue.reactive({
      name: 'Иван',
      age: 25,
      email: 'ivan@example.com'
    });
    
    // ===========================
    // 3. МЕТОДЫ И ФУНКЦИИ
    // ===========================
    const increment = () => {
      count.value++;
    };
    
    const updateUser = () => {
      user.name = 'Петр';
      user.age = 30;
    };
    
    // ===========================
    // 4. ВЫЧИСЛЯЕМЫЕ СВОЙСТВА (COMPUTED)
    // ===========================
    const doubleCount = Vue.computed(() => count.value * 2);
    
    const userInfo = Vue.computed(() => {
      return `${user.name}, ${user.age} лет`;
    });
    
    // ===========================
    // 5. НАБЛЮДАТЕЛИ (WATCHERS)
    // ===========================
    Vue.watch(count, (newValue, oldValue) => {
      console.log(`Count изменился: ${oldValue} -> ${newValue}`);
    });
    
    Vue.watch(
      () => user.name,
      (newName, oldName) => {
        console.log(`Имя изменилось: ${oldName} -> ${newName}`);
      }
    );
    
    // ===========================
    // 6. ЖИЗНЕННЫЙ ЦИКЛ КОМПОНЕНТА
    // ===========================
    Vue.onMounted(() => {
      console.log('Компонент mounted!');
    });
    
    Vue.onUpdated(() => {
      console.log('Компонент updated!');
    });
    
    Vue.onUnmounted(() => {
      console.log('Компонент unmounted!');
    });
    
    // Возвращаем всё что нужно в шаблоне
    return {
      count,
      message,
      user,
      increment,
      updateUser,
      doubleCount,
      userInfo
    };
  }
});

// =============================================
// 7. ДИРЕКТИВЫ VUE - ОСНОВНЫЕ
// =============================================

/*
v-text:       <span v-text="message"></span>
v-html:       <div v-html="rawHtml"></div>
v-bind:       <div v-bind:id="dynamicId"></div> или :id="dynamicId"
v-on:         <button v-on:click="methodName"> или @click="methodName"
v-model:      <input v-model="text">
v-if/v-else:  <div v-if="isVisible">Показано</div>
v-show:       <div v-show="isVisible">Всегда в DOM</div>
v-for:        <li v-for="item in items" :key="item.id">
*/

// =============================================
// 8. КОМПОНЕНТЫ И PROPS
// =============================================

// Дочерний компонент
app.component('user-card', {
  props: {
    user: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['user-updated'], // Определяем кастомные события
  template: `
    <div :class="{ 'active': isActive }">
      <h3>{{ user.name }}</h3>
      <p>Возраст: {{ user.age }}</p>
      <button @click="$emit('user-updated', user)">Обновить</button>
    </div>
  `
});

// =============================================
// 9. РОУТИНГ (VUE ROUTER) - ПРИМЕР
// =============================================

/*
// Установка: npm install vue-router@4

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: User }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)

// В шаблоне:
// <router-link to="/">Главная</router-link>
// <router-view></router-view>
*/

// =============================================
// 10. УПРАВЛЕНИЕ СОСТОЯНИЕМ (PINIA) - ПРИМЕР
// =============================================

/*
// Установка: npm install pinia

import { createPinia } from 'pinia'

const pinia = createPinia()
app.use(pinia)

// store/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    currentUser: null
  }),
  getters: {
    activeUsers: (state) => state.users.filter(user => user.isActive),
    userCount: (state) => state.users.length
  },
  actions: {
    async fetchUsers() {
      const response = await fetch('/api/users')
      this.users = await response.json()
    },
    addUser(user) {
      this.users.push(user)
    }
  }
})

// В компоненте:
// const userStore = useUserStore()
// userStore.fetchUsers()
*/

// =============================================
// 11. COMPOSABLES - ПЕРЕИСПОЛЬЗУЕМАЯ ЛОГИКА
// =============================================

// useCounter.js пример
const useCounter = (initialValue = 0) => {
  const count = Vue.ref(initialValue);
  
  const increment = () => count.value++;
  const decrement = () => count.value--;
  const reset = () => count.value = initialValue;
  const setValue = (value) => count.value = value;
  
  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  };
};

// Использование в компоненте:
// const { count, increment } = useCounter(0);

// =============================================
// 12. ПРАКТИЧЕСКИЙ ПРИМЕР - TODO APP
// =============================================

const TodoApp = {
  setup() {
    const newTodo = Vue.ref('');
    const todos = Vue.ref([]);
    const filter = Vue.ref('all');
    
    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push({
          id: Date.now(),
          text: newTodo.value,
          completed: false
        });
        newTodo.value = '';
      }
    };
    
    const removeTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    };
    
    const toggleTodo = (id) => {
      const todo = todos.value.find(t => t.id === id);
      if (todo) todo.completed = !todo.completed;
    };
    
    const filteredTodos = Vue.computed(() => {
      switch (filter.value) {
        case 'active':
          return todos.value.filter(todo => !todo.completed);
        case 'completed':
          return todos.value.filter(todo => todo.completed);
        default:
          return todos.value;
      }
    });
    
    return {
      newTodo,
      todos,
      filter,
      addTodo,
      removeTodo,
      toggleTodo,
      filteredTodos
    };
  },
  template: `
    <div class="todo-app">
      <h1>Todo App</h1>
      
      <form @submit.prevent="addTodo">
        <input 
          v-model="newTodo" 
          placeholder="Новая задача..."
          class="todo-input"
        >
        <button type="submit">Добавить</button>
      </form>
      
      <div class="filters">
        <button 
          @click="filter = 'all'"
          :class="{ active: filter === 'all' }"
        >Все</button>
        <button 
          @click="filter = 'active'"
          :class="{ active: filter === 'active' }"
        >Активные</button>
        <button 
          @click="filter = 'completed'"
          :class="{ active: filter === 'completed' }"
        >Завершенные</button>
      </div>
      
      <ul class="todo-list">
        <li 
          v-for="todo in filteredTodos" 
          :key="todo.id"
          :class="{ completed: todo.completed }"
          class="todo-item"
        >
          <input 
            type="checkbox" 
            :checked="todo.completed"
            @change="toggleTodo(todo.id)"
          >
          <span>{{ todo.text }}</span>
          <button @click="removeTodo(todo.id)">Удалить</button>
        </li>
      </ul>
      
      <p>Всего задач: {{ todos.length }}</p>
    </div>
  `
};

// =============================================
// 13. ОСНОВНЫЕ ПРАВИЛА И ЛУЧШИЕ ПРАКТИКИ
// =============================================

/*
1. ИМУТАБЕЛЬНОСТЬ: Не изменяйте props напрямую, используйте события
2. КЛЮЧИ В v-for: Всегда используйте :key с уникальными значениями
3. ИМЕНА КОМПОНЕНТОВ: Используйте PascalCase (MyComponent)
4. ИМЕНА ПРОПСОВ: Используйте camelCase, в HTML kebab-case
5. СТИЛИ: Используйте scoped стили для изоляции CSS
6. ПРОИЗВОДИТЕЛЬНОСТЬ: Используйте computed для тяжелых вычислений
7. ОБРАБОТКА ОШИБОК: Используйте errorCaptured для перехвата ошибок
*/

// =============================================
// 14. ПОДКЛЮЧЕНИЕ К DOM
// =============================================

// Монтируем приложение
app.mount('#app');

/*
HTML структура для этого примера:

<div id="app">
  <h1>{{ message }}</h1>
  <p>Счетчик: {{ count }}</p>
  <p>Удвоенный счет: {{ doubleCount }}</p>
  <button @click="increment">+1</button>
  
  <div>
    <h2>Пользователь: {{ userInfo }}</h2>
    <button @click="updateUser">Обновить пользователя</button>
  </div>
  
  <todo-app></todo-app>
</div>
*/

