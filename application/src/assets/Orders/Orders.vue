<template>
	<div class="news"> 
		<div class="container">
			<h1>{{title}}</h1>
			<orders-widgets></orders-widgets>
			<orders-widgets></orders-widgets>
			<orders-widgets></orders-widgets>
			<orders-widgets></orders-widgets>
			<orders-widgets></orders-widgets>
		</div>
	</div>
</template>

<script>
import OrdersWidgets from './components/orderswidgets.vue'

export default {

	components: {
    OrdersWidgets: OrdersWidgets
	},
	
	data() {
    return {
      title: 'Опросы'
    }
  }
}
</script>

<style lang="less">

</style>