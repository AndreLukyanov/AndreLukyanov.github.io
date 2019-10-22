<template>
	<div class="idea-add">
	<div class="idea-add__header">
		<input placeholder="Ввести значение" v-model="newIdea" class="idea-add__input"/> 
		<button type="button" @click="ideaItems.push(newIdea)" class="idea-add__button">Добавить</button>
	</div>

		<ul class="idea-add__list">
			<li v-for="(i, index) in ideaItems" class="idea-add__item">
			<p class="idea-add__text">{{i}}</p>
			<button @click="ideaItems.splice(index, 1)">Удалить</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {


	data() {
    return {
			newIdea: '',
      ideaItems: [
				'Первая Идея',
				'Вторая Идея',
				'Третья Идея'
			]
    }
  }
}
</script>

<style lang="less">
@import "../../core/core/props";

.idea-add {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;

	&__header {
		width: 100%;
	}

	&__input {
		height: 30px;
		padding-left: 15px;
		box-sizing: border-box;
	}

	&__button {
		height: 30px;
		cursor: pointer;
	}

	&__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 20px;
	}

	&__item {
		width: 100%;
	}

	&__text {
		display: inline-flex;
	}
}

</style>