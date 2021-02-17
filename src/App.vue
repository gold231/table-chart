<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FCFCFC;
  margin-top: 60px;
}

.text-blue, thead {
  color: #19568E;
}
.table-3 tbody tr:first-child, .table-3 tr:nth-child(3), .table-3 tr:nth-child(7) {
  color: #83C6AC;
}
.table-3 tr:nth-child(2), .table-3 tr:nth-child(4), .table-3 tr:nth-child(5){
  color: red;
}
</style>
