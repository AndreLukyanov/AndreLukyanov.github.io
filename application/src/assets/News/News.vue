<template>
	<div class="news"> 
		<div class="container">
			<h1>{{title}}</h1> 
			<div class="news__body">
					<div class="news__caption">Выберете селект</div>

					<div class="news__col">
						<p>Selected: {{ selected }}</p>
						<ui-select :options="info" v-model="selected" class="news-select">
							<option value="0">Select one</option>
							<option value="1">Select two</option>
						</ui-select>
  				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
import UiSelect from "../Core/Core/Ui/UiSelect.vue";

export default {

  components: {
    UiSelect
  },

  data() {
    return {
      title: "Новости",
      selected: 1,
      info: [
        {
          id: 2,
          text: "Hello"
        },
        {
          id: 3,
          text: "World"
        },
        {
          id: 4,
          text: "Yes!!!"
        }
      ]
    };
  }

  
};
</script>

<style lang="less">
@import "../Core/Core/props";
@import "../Core/Core/select2";

.news {
  &__caption {
    font-size: 18px;
    font-weight: 900;
  }

  &__select {
    width: 300px;
	}
	
	&__col {
    display: block;
    position: relative;
		margin-top: 20px;
	}
}

.news-select {
	width: 100px;
}
</style>