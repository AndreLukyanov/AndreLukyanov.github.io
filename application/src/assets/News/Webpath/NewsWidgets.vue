<template>
	<div class="container">
		<div class="news-widgets"> 
				<div class="news-widgets__slider">
					<div class="news-widgets__nav">
						<button type="button" v-on:click.prevent="activeImage === 1">left</button>
						<button type="button" v-on:click.prevent="activeImage === 2">right</button>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      images: [imageOne, imageTwo],
      activeImage: undefined
    };
  },
  methods: {}
};
</script>

<style lang="less">
@import "../../core/core/props";
@import "../../core/core/main";

.news-widgets {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  &__slider {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    align-items: center;
  }

  &__nav {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1;
  }

  &__body {
    min-width: 700px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    height: 450px;
    overflow: hidden;
    margin: 0 auto;
  }

  &__images {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
}

.active {
  opacity: 1;
}
</style>