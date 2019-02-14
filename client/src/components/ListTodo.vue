<template>
    <div>
        <div class="col-md-12" v-show="todos.length>0">
            <h3>Todo Items</h3>
            <div class="row mrb-10" v-for="todo in todos">
                <div class="input-group m-b-5">
                    <span class="form-check-input">
                        <input type="checkbox"
                               v-model="todo.done"
                               @checked="todo.done"
                               :value="todo.done"
                               @change="updateTodo(todo)"
                        />
                    </span>
                    <input type="text"
                           class="form-control"
                           :class="todo.done ? 'todo__done' : ''"
                           v-model="todo.todo"
                           @keypress="todo.editing = true"
                           @keyup.enter="updateTodo(todo)"
                    />
                    <button
                            type="button"
                            class="btn btn-danger"
                            @click="deleteTodo(todo._id)"
                    >
                        Delete
                    </button>
                </div>
                <span class="help-block small" v-show="todo.editing">Hit enter to update</span>
            </div>
        </div>
        <div class="row alert alert-info text-center" v-show="todos.length === 0">
            <p class="alert alert-info">
                <strong>All Caught Up</strong>
                <br/>
                You do not have any todo items</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { eventBus } from '@/main.js'

    export default {
        data() {
            return {
                todos: []
            }
        },
        created() { // get todoitems and start listening to events once component is created
            this.fetchTodo();
            this.listenToEvents();
        },
        methods: {
            fetchTodo() {
                let uri = 'http://localhost:4000/api/all';
                axios.get(uri).then((response) => {
                    this.todos = response.data;
                });
            },
            updateTodo(todo) {
                let id = todo._id;
                let uri = 'http://localhost:4000/api/update/' + id;
                todo.editing = false;
                axios.post(uri, todo).then((response) => {
                    console.log('response>>>>>', response);
                }).catch((error) => {
                    console.log(error);
                })
            },
            deleteTodo(id) { //delete todo item
                let uri = 'http://localhost:4000/api/delete/' + id;
                axios.get(uri);
                this.fetchTodo();
            },
            listenToEvents() {
                eventBus.$on('refreshTodo', ($event) => {
                    this.fetchTodo(); // referesh or update todolist on the page
                })
            }
        }
    }
</script>
<style scoped>
    .delete__icon {
    }

    .todo__done {
        text-decoration: line-through !important
    }

    .no_border_left_right {
        border-left: 0;
        border-right: 0;
    }

    .flat_form {
        border-radius: 0;
    }

    .mrb-10 {
        margin-bottom: 10px;
    }

    .addon-left {
        /*background-color: none !important;*/
        border-left: 0 !important;
        cursor: pointer !important;
    }

    .addon-right {
        /*background-color: none !important;*/
        border-right: 0 !important;
    }
</style>