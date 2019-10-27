<template>
	<div clas="calculator">
		<div class="container">
			<div class="calculator__container">
				<input class="calculator__input" v-model="result"/>
				<div class="calculator__body">
					<button type="button" class="calculator__button" @click="operat(op)" v-for="op in operation" :key="o"> {{op}} </button>
					<button type="button" class="calculator__button" @click="calc">=</button> 
					<button type="button" class="calculator__button" @click="clear">C</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			result: '',
			operation: [
				'+',
				'-',
				'*',
				'/'
			]
		}
	},
	methods:  {
		operat(symbol) {
			this.result = this.result.toString();
			this.result = this.result + symbol;
		},
		calc() {
			this.result = eval(this.result);
		},
		clear() {
			this.result = '';
		}
	}
}

</script>

<style lang="less">
@import "../core/core/props";

.calculator {
	display: block;

	&__container {
		width: 100%;
		margin-top: 20px;
		padding: 20px 10px;
		box-sizing: border-box;
		.gradient-green;
	}

	&__input {
		margin-bottom: 20px;
		width: calc(100% / 12 * 12 - 30px);
		margin: 0 14px;
		height: 50px;
		padding-left: 15px;
		line-height: 50px;
		.placeholder-green();
		box-sizing: border-box;
		outline: none;
	}

	&__body {
		width: 100%;
		margin: 30px auto;
		width: 350px;
		display: flex;
		flex-wrap: wrap;
		
	}

	&__button {
		height: 100px;
		width: 100px;
		cursor: pointer;
		display: inline-block;
		border: none;
		margin: 5px 5px;
		outline: none;
		border-radius: 4px;

		&:hover {
			background: @white;
		}
	}

	&__enter {
		margin-top: 10px;
		width: 100%;
		box-sizing: border-box;
	}
}

</style>