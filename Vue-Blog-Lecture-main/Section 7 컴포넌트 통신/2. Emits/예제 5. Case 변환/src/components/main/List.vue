<template>
  <ul class="list">
    <li
      v-for="post of list"
      :key="post.id"
      @click="$emit('changeId', post.id)"
    >
      <span>{{ post.title }}</span>
      <span
        class="category"
        v-bind:class="post.category.toLowerCase()"
      >
        {{ post.category }}
      </span>
    </li>
  </ul>
</template>

<script setup>
import { getPageTable } from "vue-notion";
import { ref } from "vue";

const list = ref([]);

getPageTable("a0521cd6f36a4c73b9af3b35aa00c4cc").then(
  (value) => {
    list.value = value;
  }
);
</script>

<style>
.list {
  list-style-type: none;
  padding: 0;
  border: 1px solid #ddd;
}

.list li {
  border-bottom: 1px solid #ddd;
  padding: 10px;
  display: flex;
}

.list li:hover {
  background-color: #eee;
  cursor: pointer;
}

.list .category {
  margin-left: auto;
  color: white;
  border-radius: 5px;
  padding: 2px 5px;
}

.list .category.html {
  background-color: coral;
}

.list .category.css {
  background-color: cornflowerblue;
}

.list .category.javascript {
  background-color: gold;
}
</style>
