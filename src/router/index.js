import Vue from "vue";
import VueRouter from "vue-router";
import Screen from "../components/Screen.vue"
import Chart from "../components/Chart.vue"
import Table_1 from "../components/Table_1.vue"
import Table_2 from "../components/Table_2.vue"
import Table_3 from "../components/Table_3.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes:  [
    {
      path: "",
      name: "Screen",
      component: Screen
    },
    {
      path: "/chart",
      name: "Chart",
      component: Chart
    },
    {
      path: "/table-1",
      name: "Table_1",
      component: Table_1
    },
    {
      path: "/table-2",
      name: "Table_2",
      component: Table_2
    },
    {
      path: "/table-3",
      name: "Table_3",
      component: Table_3
    },
  ]
});
