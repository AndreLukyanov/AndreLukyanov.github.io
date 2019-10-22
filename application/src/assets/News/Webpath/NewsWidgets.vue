<template>
	<div class="news-widgets"> 
			<h1 class="news-widgets__title">{{title}}</h1>
	</div>
</template>

<script>
export default {

  data() {
    return {
			title: 'Создаю компоненты на Vue.js'
    }
  }

}
</script>

<style lang="less">
@import "../../core/core/props";
@import "../../core/core/main";

	.news-widgets {
		display: flex;
		flex-wrap: wrap;
		min-height: 300px;
		width: 100%;
		background: linear-gradient(45deg, rgba(23,0,73,1) 0%, rgb(89,28,52) 100%);

		&__title {
			padding-top: 100px;
			text-align: center;
			width: 100%;
			color: @white;
			font-family: 'HelveticaBlack'
		}
	}
</style>