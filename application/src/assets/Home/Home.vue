<template>
	<div class="home">
		<news-banner />
		<recognitions-widget />
	</div>

</template>

<script>
import NewsBanner from '../News/Components/NewsBanner.vue';
import RecognitionsWidget from '../Recognitions/Components/RecognitionsWidget.vue';
export default {

	components: {
		NewsBanner,
		RecognitionsWidget
	}
	
}
</script>

<style lang="less">

</style>

