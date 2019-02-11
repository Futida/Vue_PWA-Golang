<template>
    <div class="container">
        <div class="row col-md-6 offset-md-3">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
        <div class="row col-md-6 offset-md-3">
            <CreateTodo/>
            <ListTodo/>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import CreateTodo from '@/components/CreateTodo.vue'
    import ListTodo from '@/components/ListTodo.vue'

    export default {
        name: 'home',
        components: {
            CreateTodo,
            ListTodo
        }
    }
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
