<template>
	<div class="container">
		<div class="news-banner">
				<div :title="title" :alt="title" class="news-banner__images" :style="{ backgroundImage: `url(${BannerImages})`}"></div>
		</div>
	</div>
</template>

<script>
import BannerImages from "../../Core/Core/img/banner-img.jpg";
export default {
  data() {
    return {
			BannerImages,
			title: 'Природа',
    };
  }
};
</script>

<style lang="less">

.news-banner {
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	overflow: hidden;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;

	&__images {
		max-width: 100%;
		height: 400px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		background-size: cover;
	}
}
</style>

