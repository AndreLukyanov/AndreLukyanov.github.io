<template>
	<div class="news"> 
		<div class="container">
			<h1>{{title}}</h1> 
		</div>
		<news-slider />
	</div>
</template>

<script>
import NewsSlider from './Webpath/NewsWidgets.vue';

export default {
	components: {
		NewsSlider
	},
	data() {
		return {
			title: 'Новости'
		}
	}
}
</script>

<style lang="less">
	

</style>