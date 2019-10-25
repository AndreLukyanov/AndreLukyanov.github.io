<template>
	<div clas="calculator">
		<div class="container">
			<div class="calculator__container">
				<input class="calculator__input" v-model="number1"/>
				<input class="calculator__input" v-model="number2"/>
				<div class="calculator__body">
					<button class="calculator__button" @click="plus">+</button>
					<button class="calculator__button" @click="minus">-</button>
					<button class="calculator__button" @click="multiplication">*</button>
					<button class="calculator__button" @click="division">/</button>
					<button class="calculator__button" @click="remains">%</button>
					<button class="calculator__button">=</button> 
					<button class="calculator__button" @click="clear">C</button>
				</div>
				<div class="calculator__enter">
					<input v-model="result"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			number1: '',
			number2: '',
			result: '',
			value: ''
		}
	},
	methods:  {
		plus() {
			if( isNaN(this.number1) ) {
				this.result = 'В поле для ввода должно быть число!';
			}
			else if( isNaN(this.number2) ) {
				this.result = 'В поле для ввода должно быть число!';
			}
			else {
				this.result = parseInt(this.number1) + parseInt(this.number2);
			}
		},
		minus() {
			if( isNaN(this.number1) ) {
				this.result = 'В поле для ввода должно быть число!';
			}
			else if( isNaN(this.number2) ) {
				this.result = 'В поле для ввода должно быть число!';
			}
			else {
				this.result = parseInt(this.number1) - parseInt(this.number2);
			}
		},
		multiplication() {
			if( isNaN(this.number1) ) {
				this.result = 'В поле для ввода должно быть число!';
			}
			else if( isNaN(this.number2) ) {
				this.result = 'В поле для ввода должно быть число!';
			}
			this.result = parseInt(this.number1) * parseInt(this.number2);
		},
		division() {
			if( isNaN(this.number1) ) {
				this.result = 'В поле для ввода должно быть число!';
			}
			else if( isNaN(this.number2) ) {
				this.result = 'В поле для ввода должно быть число!';
			}
			this.result = parseInt(this.number1) / parseInt(this.number2);
		},
		remains() {
			this.result = parseInt(this.number1) % parseInt(this.number2);
		},
		clear(value) {
			this.number1 = '';
			this.number2 = '';
			this.$emit("value", this.result);
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
		width: 380px;
		margin-top: 20px;
		border: 3px solid @GrayBg;
		padding: 20px 10px;
		box-sizing: border-box;
	}

	&__input {
		margin-bottom: 20px;
	}

	&__body {
		width: 100%;
		margin: 0 auto;
		width: 150px;
	}

	&__button {
		height: 30px;
		width: 30px;
		cursor: pointer;
		margin: 5px 0;
	}

	&__enter {
		border: 2px solid green;
		height: 30px;
		margin-top: 10px;
		padding-left: 15px;
		line-height: 25px;
		width: 100%;
		box-sizing: border-box;
	}
}

</style>