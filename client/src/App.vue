<template>
    <div id="app">
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <div class="navbar-header">

                    <router-link to="/"
                                 class="btn btn-primary btn-margin"
                    >
                        Home
                    </router-link>

                    <router-link to="/about"
                                 class="btn btn-primary btn-margin"
                    >
                        About
                    </router-link>

                    <button
                            class="btn btn-primary btn-margin"
                            @click="login()">
                        Log In
                    </button>

                    <button
                            class="btn btn-primary btn-margin"
                            @click="logout()">
                        Log Out
                    </button>

                </div>
            </div>
        </nav>
        <router-view/>
    </div>
</template>


<script>
    //import AuthService from './auth/AuthService'

    // const auth = new AuthService();
    //
    // const { login, logout, authenticated, authNotifier } = auth;
</script>

<style lang="scss">
    #app {
        width: 1000px;
        margin: auto;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
