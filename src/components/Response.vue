<template>
    <div class="card text-white bg-dark m-2 d-table">
      <div class="card-body">
        {{ name }}：{{ text }}
        <button v-show="UserIsLogined" type="button" class="btn btn-sm btn-outline-light" @click="remove">DELETE</button>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      name: String,
      text: String,
      UserIsLogined: Boolean
    },
    methods: {
      remove(){
        this.$emit('remove');
      }
    }
}
</script>

<style scoped>
  .card-body{
    font-size: 20px;
    color: #FFFFFF;
    background: #B39980;
    padding: 18px;
  }
</style>
