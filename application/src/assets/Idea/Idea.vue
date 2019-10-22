<template>
<div class="container">
	<div class="idea"> 
			<h1 class="idea__title">{{title}}</h1> 

			<ul class="idea__list">
				<li class="idea__item">
					<div class="idea__container">
						<employee class="employee employee--white employee--md employee--border employee--outline employee--inline employee--size"/>
					</div>
				</li>
				<li class="idea__item">
					<div class="idea__container">
						<employee class="employee employee--white employee--md employee--border employee--outline employee--inline employee--size"/>
					</div>
				</li>
				<li class="idea__item">
					<div class="idea__container">
						<employee class="employee employee--white employee--md employee--border employee--outline employee--inline employee--size"/>
					</div>
				</li>
				<li class="idea__item">
					<div class="idea__container">
						<employee class="employee employee--white employee--md employee--border employee--outline employee--inline employee--size"/>
					</div>
				</li>
				<li class="idea__item">
					<div class="idea__container">
						<employee class="employee employee--white employee--md employee--border employee--outline employee--inline employee--size"/>
					</div>
				</li>
				<li class="idea__item">
					<div class="idea__container">
						<employee class="employee employee--white employee--md employee--border employee--outline employee--inline employee--size"/>
					</div>
				</li>
				<li class="idea__item">
					<div class="idea__container">
						<employee class="employee employee--white employee--md employee--border employee--outline employee--inline employee--size"/>
					</div>
				</li>
				<li class="idea__item">
					<div class="idea__container">
						<employee class="employee employee--white employee--md employee--border employee--outline employee--inline employee--size"/>
					</div>
				</li>
				<li class="idea__item">
					<div class="idea__container">
						<employee class="employee employee--white employee--md employee--border employee--outline employee--inline employee--size"/>
					</div>
				</li>
			</ul>
			<idea-add />
		</div>
	</div>
</template>

<script>
import Employee from '../Core/Core/Ui/Employee.vue';
import IdeaAdd from './Components/IdeaAdd.vue';
export default {

	components: {
    Employee,
		IdeaAdd
  },

	data() {
    return {
      title: 'Идеи'
    }
  }
}
</script>

<style lang="less">
@import "../core/core/css/component/employee";
@import "../core/core/props";

.idea {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	.boxsizing();

	&__title {
		width: 100%;
	}

	&__list {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		margin: 0 -10px;
	}

	&__item {
		border-radius: 23px;
		.gradient();
		.boxsizing();
		margin: 0 10px 20px 10px;
		width: calc(100% / 12 * 4 - 20px);
	}

	&__container {
		padding: 20px;
		.boxsizing();
	}
}

</style>