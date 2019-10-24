<template>
	<div clas="calculator">
		<input class="calculator__input" v-model="number" v-on:keyup.enter="addNumber"/>
		<input class="calculator__input"/>
		<div class="calculator__body" v-for="l in numberList">
			<button type="button" class="calculator__button" @click="delete(n)">C</button>
			<button class="calculator__button">x</button>
			<button class="calculator__button">/</button>
			<button class="calculator__button">*</button>
			<button class="calculator__button">-</button>
			<button class="calculator__button">+</button>
			<button class="calculator__button">=</button> 
			{{l}}
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			number: '',
			numberList: []
		}
	},
	methods:  {
		addNumber() {
			let num = this.number
			this.numberList.push(n)
		},
		delete(n) {
			let clear = this.numberList.indexOf(n)
			this.numberList.splice(index, 1)
		}
	}
}

</script>

<style lang="less">
@import "../core/core/props";

.calculator {
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
	min-width: 300px;

	&__input {
		margin-bottom: 20px;
		display: inline-flex;
		
	}

	&__body {
		width: 100%;
	}
}

</style>