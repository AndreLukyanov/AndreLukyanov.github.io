<template>
	<div class="container">
		<div class="tablet">
			<table class="tablet__container">
				<thead class="tablet__header">
					<tr class="tablet__header-row">
						<th class="tablet__caption" @click="sortFirstName">Имя</th>
						<th class="tablet__caption" @click="sortLastName">Фамилия</th>
						<th class="tablet__caption" @click="position">Должность</th>
						<th class="tablet__caption" @click="age">Возраст</th>
					</tr>
				</thead>
				<tbody class="tablet__body">
						<tr class="tablet__body-row" v-for="e in employees.slice(0,10)" :key="e.id">
							<td class="tablet__value">{{e.firstName}}</td>
							<td class="tablet__value">{{e.lastName}}</td>
							<td class="tablet__value">{{e.position}}</td>
							<td class="tablet__value">{{e.age}}</td>
						</tr>
				</tbody>
			</table>

			<div class="pages">
				<span class="pages__item" @click="loadPage">1</span>
				<span class="pages__item" >2</span>
				<span class="pages__item" >3</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "tablet",
  data() {
    return {
      hi: "Привет",
      employees: [
        {
          id: 1,
          firstName: "Андрей",
          lastName: "Лукьянов",
          position: "Инженер",
          age: "24"
        },
        {
          id: 2,
          firstName: "Максим",
          lastName: "Максимов",
          position: "Инженер2",
          age: "25"
        },
        {
          id: 3,
          firstName: "Олег",
          lastName: "Климов",
          position: "Инженер3",
          age: "26"
        },
        {
          id: 4,
          firstName: "Татьяна",
          lastName: "Климова",
          position: "Инженер4",
          age: "20"
        },
        {
          id: 5,
          firstName: "Ольга",
          lastName: "Медведева",
          position: "Инженер5",
          age: "22"
        },
        {
          id: 6,
          firstName: "Владимир",
          lastName: "Владимирович",
          position: "Главный инженер",
          age: "65"
        },
        {
          id: 7,
          firstName: "Света",
          lastName: "Степанова",
          position: "Инженер6",
          age: "30"
        },
        {
          id: 8,
          firstName: "Дмитрий",
          lastName: "Климов",
          position: "Инженер7",
          age: "26"
        },
        {
          id: 9,
          firstName: "Матильда",
          lastName: "Матильдовна",
          position: "Инженер S-класса",
          age: "99"
        },
        {
          id: 10,
          firstName: "Степан",
          lastName: "Михайлин",
          position: "Ведущий конструктор",
          age: "28"
        },
        {
          id: 11,
          firstName: "Дмитрий",
          lastName: "Силютин",
          position: "Главный-инженер",
          age: "30"
        },
        {
          id: 12,
          firstName: "Татьяна",
          lastName: "Федотова",
          position: "Инженер-химик",
          age: "55"
        },
        {
          id: 13,
          firstName: "Владимир",
          lastName: "Туманов",
          position: "Технический директор",
          age: "60"
        },
        {
          id: 14,
          firstName: "Наталья",
          lastName: "Пугачева",
          position: "Бухгалтер",
          age: "49"
        },
        {
          id: 15,
          firstName: "Олег",
          lastName: "Смирнов",
          position: "Заведующий складом",
          age: "40"
        },
        {
          id: 16,
          firstName: "Евгений",
          lastName: "Костылев",
          position: "Главный технолог",
          age: "32"
        },
        {
          id: 17,
          firstName: "Валентина",
          lastName: "Колоскова",
          position: "Ведущий специалист",
          age: "27"
        },
        {
          id: 18,
          firstName: "Михаил",
          lastName: "Солопов",
          position: "Ведущий инженер конструктор",
          age: "28"
        },
        {
          id: 19,
          firstName: "Евгений",
          lastName: "Замятин",
          position: "Менеджер по продажам",
          age: "22"
        },
        {
          id: 20,
          firstName: "Сергей",
          lastName: "Кузьмин",
          position: "Инженер технолог",
          age: "26"
        },
        {
          id: 21,
          firstName: "Артем",
          lastName: "Хропов",
          position: "Гланый технолог",
          age: "28"
        },
        {
          id: 22,
          firstName: "Рита",
          lastName: "Полякова",
          position: "Главный технолог",
          age: "32"
        },
        {
          id: 23,
          firstName: "Владимир",
          lastName: "Пожарный",
          position: "Наладчик",
          age: "23"
        },
        {
          id: 24,
          firstName: "Валентин",
          lastName: "Иванов",
          position: "Специалист маркетинга",
          age: "30"
        },
        {
          id: 25,
          firstName: "Мария",
          lastName: "Хорошая",
          position: "Бухгалтер",
          age: "32"
        },
        {
          id: 26,
          firstName: "Ксения",
          lastName: "Блинкова",
          position: "Технолог",
          age: "24"
        },
        {
          id: 27,
          firstName: "Ольга",
          lastName: "Стукалова",
          position: "Фандрайзер",
          age: "24"
        },
        {
          id: 28,
          firstName: "Дмитрий",
          lastName: "Буханов",
          position: "Инженер",
          age: "99"
        },
        {
          id: 29,
          firstName: "Николай",
          lastName: "Праздный",
          position: "Директор",
          age: "38"
        },
        {
          id: 30,
          firstName: "Евгений",
          lastName: "Жаринов",
          position: "Главный специалист",
          age: "26"
        }
      ]
    };
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
			this.employees.sort((a,z) => a.age - z.age);
		},
    loadPage() {
      alert(this.hi);
    }
  }
};
</script>

<style lang="less">
@import "../Core/Core/props";

.tablet {
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


