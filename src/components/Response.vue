<template>
    <div class="card text-white bg-dark mb-2 d-table">
      <div class="card-body">
        {{ name }}：{{ text }}
        <button v-if="loginUser" type="button" class="btn btn-sm btn-outline-danger" @click="remove">DELETE</button>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      name: String,
      text: String,
      loginUser: Boolean
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
}

.card-body button{
  vertical-align: top;
}
</style>
