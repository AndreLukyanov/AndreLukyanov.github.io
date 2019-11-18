<template>
	<div class="bitcoin-board">
		<p class="bitcoin-board__text">{{boardText}}</p>
	</div>
	
</template>

<script>
export default {
  data() {
    return {
			boardText: ''
		};
  },
  methods: {
		getValue() {
			this.boardText = $emit('input-value');
		}
	}
};
</script>

<style lang="less">
@import "../core/core/props";

.bitcoin-board {
  width: 38%;
  margin-left: 2%;
  padding: 10px;
  float: left;
  box-sizing: border-box;
  border: 3px solid @GrayBg;

  &__text {
    margin: 0;
  }
}
</style>


