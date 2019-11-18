<template>
	<div class="bitcoin-form">
		<div class="bitcoin-form__body">
			<input v-model="inputFirst" type="text" class="bitcoin-form__input" :placeholder="1">
		</div>
		<div class="bitcoin-form__footer">
			<button type="button">Отправить</button>
		</div>
		<input v-model="inputSecond" type="text" class="bitcoin-form__input" :placeholder="2">
	</div>
</template>

<script>
export default {

	data() {
		return {
			inputFirst: '',
			inputSecond: ''
		};
	},

	methods: {
		buttonSend() {
			this.inputSecond = this.inputFirst;
		}
	}
};
</script>

<style lang="less">
@import "../core/core/props";

.bitcoin-form {
  width: 60%;
  padding: 10px;
  float: left;
  border: 3px solid @GrayBg;
	box-sizing: border-box;
	
	&__body {
		width: 100%;
		margin-bottom: 10px;
	}

	&__input {
		width: 100%;
		margin-bottom: 10px;
		display: block;
		box-sizing: border-box;
		padding-left: 15px;
		height: 30px;
		line-height: 30px;
	}
}
</style>

