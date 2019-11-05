<template>
	<div class="container">
		<div class="recognitions-widget">
			<div class="recognitions-widget__title">{{title}}</div>
			<div class="recognitions-widget__container">
				<div class="recognitions-widget__item">
					<employee class="employee employee--dark employee--lg employee--border employee--outline employee--inline employee--size"/>
				</div>
				<div class="recognitions-widget__item">
					<employee class="employee employee--dark employee--lg employee--border employee--outline employee--inline employee--size"/>
				</div>
				<div class="recognitions-widget__item">
					<employee class="employee employee--dark employee--lg employee--border employee--outline employee--inline employee--size"/>
				</div>
				<div class="recognitions-widget__item">
					<employee class="employee employee--dark employee--lg employee--border employee--outline employee--inline employee--size"/>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import Employee from '../../Core/Core/Ui/Employee.vue';
export default {

	components: {
		Employee
	},

	data() {
		return {
			title: 'Благодарности'
		};
	}
}
</script>

<style lang="less">
@import '../../Core/Core/Css/Component/employee';

.recognitions-widget {
	margin-top: 30px;

	&__title {
		font-size: 24px;
	}

	&__container {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
	}

	&__item {
		flex: 4;
	}
}

</style>

