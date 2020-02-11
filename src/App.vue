<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" />
    <img src="./images/logo.png" />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "default text data"
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const promiseData = function() {
        return new Promise((resolve, reject) => {
          resolve("changed text data");
        });
      };
      this.msg = await promiseData();
    }
  }
};
</script>

<style lang="scss">
#app {
  img {
    margin-top: 20px;
    width: 200px;
  }
}
</style>