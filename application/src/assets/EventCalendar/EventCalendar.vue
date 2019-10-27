<template>
	<!--<div class="event-calendar">
		<div class="event-calendar__header">
			<div class="event-calendar__year">{{year}}</div>
			<div class="event-calendar__month" >{{getMonth}}</div>
			<div class="nav">
				<button type="button" class="nav__arrows nav__arrows--left"></button>
				<button type="button" class="nav__arrows nav__arrows--right"></button>
			</div>
			<span class="event-calendar__days">Пн</span>
			<span class="event-calendar__days">Вт</span>
			<span class="event-calendar__days">Ср</span>
			<span class="event-calendar__days">Чт</span>
			<span class="event-calendar__days">Пт</span>
			<span class="event-calendar__days">Сб</span>
			<span class="event-calendar__days">Вс</span>
		</div>
		<div class="event-calendar__body">

		</div>
	</div>-->
</template>

<script>

export default {
	data() {
		return {
			month: [{
				0: "Январь",
				1: "Февраль",
				2: "Март",
				3: "Апрель",
				4: "Май",
				5: "Июнь",
				6: "Июль",
				7: "Август",
				8: "Сентябрь",
				9: "Октябрь",
				10: "Ноябрь",
				11: "Декабрь"
			}],
			year: '2019'
		}
	},
	computed: {
		getMonth: function() {
			var date = new Date();
			this.month[date.getMonth()];
		}
	}
}

</script>

<style lang="less">
@import "../core/core/props";

.event-calendar {
	border: 1px solid red;
	max-width: 300px;
	padding: 10px;

	&__header {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		border-bottom: 1px solid #333;
		position: relative;
	}

	&__year {
		display: flex;
		width: 100%;
		justify-content: center;
		font-size: 20px;
		margin-bottom: 10px;
	}

	&__days {
		display: flex;
		font-size: 18px;
		padding: 0 10px;
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		width: 100%;

		&__arrows {
			height: 20px;
			width: 20px;
			outline: none;
			border: none;
			position: absolute;
			top: 10px;
			cursor: pointer;

			&--left {
				left: 0
			}

			&--right {
				right: 0;
			}
		}
	}
}

</style>