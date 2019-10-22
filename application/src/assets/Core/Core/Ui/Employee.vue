<template>
	<div class="employee">
		<a class="employee__profile" :style="{ backgroundImage: `url(${backgroundUrl})`}"></a>
		<div class="employee__info">
			<div class="employee__name">Анна</div>
			<div class="employee__position">Руководитель</div>
		</div>
	</div>
</template>

<script>
import backgroundUrl from '../img/employee.png';
export default {

	data() {
    return {
			backgroundUrl,
			employee: [
				{
					emps: {
						id: 0,
						firstName: 'Анна',
						position: 'Руководитель'
					}
				}
			]	
		}
  }
}
</script>

<style lang="less">


</style>