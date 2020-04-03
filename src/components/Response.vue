<template>
    <div class="card text-white bg-dark mb-2 d-table">
      <div class="card-body">
        {{ name }}：{{ text }}
        <button v-if="loginUser" type="button" class="btn btn-sm btn-outline-danger" @click="remove">DELETE</button>
        <p class="dates text-muted m-0">{{timestamp}}</p>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      name: String,
      text: String,
      timestamp: String,
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
  font-size: 100%;
  color: #FFFFFF;
  background: #B39980;
}

.dates{
  font-size: 80%;
}

.card-body button{
  vertical-align: top;
}
</style>
