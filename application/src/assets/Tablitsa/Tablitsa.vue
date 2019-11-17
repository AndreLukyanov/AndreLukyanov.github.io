<template>
	<div class="container">
		<div class="tablitsa">
      <div v-if="errored">
        <p>Извините, произошла ошибка</p>
      </div>
			<table class="tablitsa__container" id="tablitsa" v-else>
				<thead class="tablitsa__header">
					<tr class="tablitsa__header-row">
						<th class="tablitsa__caption" @click="sortFirstName">Имя</th>
						<th class="tablitsa__caption" @click="sortLastName">Фамилия</th>
						<th class="tablitsa__caption" @click="position">Должность</th>
						<th class="tablitsa__caption" @click="age">Возраст</th>
					</tr>
				</thead>
				<tbody class="tablitsa__body">
						<tr class="tablitsa__body-row" v-for="e in servered" :key="e.id">
							<td class="tablitsa__value">{{e.firstName}}</td>
							<td class="tablitsa__value">{{e.lastName}}</td>
							<td class="tablitsa__value">{{e.position}}</td>
							<td class="tablitsa__value">{{e.age}}</td>
						</tr>
				</tbody>
			</table>


      <div class="tablitsa__button">
        <button type="button" class="button button--radius">Загрузить</button>
      </div>

			<div class="pages">
				<span class="pages__item">1</span>
				<span class="pages__item">2</span>
				<span class="pages__item">3</span>
			</div>

		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "tablitsa",
  data() {
    return {
      servered: Array,
      errored: false
    };
  },

  mounted() {
      axios.get('http://localhost:8080/src/data.json')
      .then(response => {
        this.servered = response.data.employees;
      })
     .catch(error => {
        console.log(error);
        this.errored = true;
      })
  },

  methods: {
    sortFirstName() {
      this.employees.sort((a, z) => {
        if (a.firstName < z.firstName) return -1;
        if (a.firstName > z.firstName) return 1;
      });
    },
    sortLastName() {
      this.employees.sort((a, z) => {
        if (a.lastName < z.lastName) return -1;
        if (a.lastName > z.lastName) return 1;
      });
    },
    position() {
      this.employees.sort((a, z) => {
        if (a.position < z.position) return -1;
        if (a.position > z.position) return 1;
      });
    },
    age() {
      this.employees.sort((a, z) => a.age - z.age);
    }
  },

  computed: {
    loadPage() {
      return this.servered.slice(0, 10);
    }
  }
};
</script>

<style lang="less">
@import "../Core/Core/props";

.tablitsa {
  margin-top: 30px;
  width: 100%;
  border: 1px solid @dark;

  &__container {
    width: 100%;
  }

  &__caption {
    font-size: 22px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: @colorBlue;
    }
  }

  &__body-row {
    text-align: center;
  }

  &__value {
    border: 1px solid @dark;
    padding: 10px;
  }

  &__button {
    text-align: center;
    width: 100%;
    margin: 20px 0;
  }

  .pages {
    text-align: center;
    margin: 30px 0;

    &__item {
      font-size: 24px;
      padding: 10px;
      margin: 5px;
      cursor: pointer;
      border: 1px solid @dark;
    }
  }
}
</style>


