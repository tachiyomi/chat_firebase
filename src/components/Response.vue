<template>
    <div class="card text-white bg-dark m-2 d-table">
      <div class="card-body">
        {{ name }}：{{ text }}
      </div>
    </div>
</template>

<script>
export default {
    props: {
      name: String,
      text: String
    }
}
</script>

<style scoped>
  .card-body{
    font-size: 20px;
    color: #f5eaea;
    background: #4d4646;
    padding: 18px;
  }
</style>
