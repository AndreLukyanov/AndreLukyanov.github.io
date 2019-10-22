<template>
	<div class="orders-widgets"> 
		<div class="orders-widgets__items">
			<h3 class="orders-widgets__title">Аккардеон</h3>
			<button id="accordeonBtn" class="button button--md button--radius button--absolute" @click="show =! show">{{btnName}}</button>
			<transition name="component-fade">
				<div class="orders-widgets__block-text" v-show="show">
					<p v-for="(ipsum, id) in lorem.loremIpsum" :key="id">{{ipsum.loremIpsum}}</p>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	data() {
    return {
			show: false,
			lorem: {	
					loremIpsum: {
						text: {
							id: 1,
							loremIpsum: 'Tempor minim duis magna reprehenderit ullamco nostrud non.' 
						},
						text: {
							id: 2,
							loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						}
					}
			}
    }
  },
	computed: {
		btnName: function() {
			if(this.show) {
				return 'Закрыть';
			}
			else {
				return 'Показать';
			}
		}
	}
}
</script>

<style lang="less">
@import "../../core/core/props";

.component-fade-enter-active, .component-fade-leave-active {
  transition: all .3s;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

.orders-widgets {
	margin-bottom: 10px;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	background: #eee;
	padding: 5px 0;
	box-sizing: border-box;
	position: relative;
	transition: all .3s;
	min-height: 140px;

	&__items {
		width: 100%;
		box-sizing: border-box;
	}

	&__title {
		padding: 0 0 0 20px;
	}

	&__block-text {
		width: 100%;
		padding: 0 20px;
		font-size: 14px;
		box-sizing: border-box;
	}
}

</style>