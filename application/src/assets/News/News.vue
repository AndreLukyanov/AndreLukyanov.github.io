<template>
	<div class="news"> 
		<div class="container">
			<h1>{{title}}</h1> 
		</div>
		<div>
			<!-- <span v-for="(obj, id) in object.work2" :key="id">{{obj}}</span> -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Новости',
			object: {
				work1: {
					id: 0,
					name: 'Nikolai'
				},
				work2: {
					id: 0,
					name: 'Max'
				},
				professii: {

				}
			}
		}
	}
}
</script>

<style lang="less">
	

</style>