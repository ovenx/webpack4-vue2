<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <input type="text" v-model="msg">
        <img src="./images/logo.png">
    </div>
</template>

<script>

    import getData from './utils';
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js'
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            async fetchData() {
                const data = await getData();
                this.msg = data;
            },
            onChange(date, dateString) {
                console.log(date, dateString);
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;

        h1 {
            color: #CC3333;
        }
        img{
            margin-top:20px;
            width:200px;
        }
    }
</style>