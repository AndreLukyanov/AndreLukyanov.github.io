<template>
	<div class="container">
		<div class="bitcoin-item">
			<div class="bitcoin-item__body">
				<p class="bitcoin-item__text">Биткоин</p>
				<div class="bitcoin-item__info" v-if="bitcoinValue">
						<p>{{bitcoinCode.EUR.description}} - {{bitcoinCode.EUR.code}}</p>
						<p>{{bitcoinCode.GBP.description}} - {{bitcoinCode.GBP.code}}</p>
						<p>{{bitcoinCode.USD.description}} - {{bitcoinCode.USD.code}}</p>
				</div>
			</div>
			<button type="button" class="bitcoin-item__button" @click="bitcoinValue = ! bitcoinValue">Узнать</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ["bitcoinCode"],

  data() {
    return {
      bitcoinValue: false
    };
  }
};
</script>

<style lang="less">
@import "../../core/core/props";

.bitcoin-item {
  width: 100%;
  border: 3px solid @GrayBg;
  padding: 10px;
  margin-top: 20px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;

  &__body {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
	}
	
	&__info { 
		border: 3px solid @GrayBg;
		padding: 10px;
		box-sizing: border-box;
	}

  &__button {
    background: @GrayBg;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    outline: none;
    display: inline-block;
    position: absolute;
    top: 22px;
    right: 20px;
  }
}
</style>


