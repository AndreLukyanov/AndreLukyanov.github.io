<template>
	<div class="container">
		<div class="bitcoin">
			<div v-if="errored">
        <p>Извините, произошла ошибка</p>
      </div>

      <div class="bitcoin" v-else>
        <div v-if="loading">Загрузка...</div>
        
          <div class="bitcoin__currency bitcoin__currency--eur">
            {{info.EUR.description}} {{info.EUR.rate_float | currencydecimal }}
          </div>
          <div class="bitcoin__currency bitcoin__currency--gbp">
            {{info.GBP.description}} {{info.GBP.rate_float | currencydecimal}}
          </div>
          <div class="bitcoin__currency bitcoin__currency--usd">
            {{info.USD.description}} {{info.USD.rate_float | currencydecimal}}
          </div>

          <div>{{time.updated | dataFilter}}</div>
      </div>
      <!-- https://developer.github.com/apps/quickstart-guides/using-the-github-api-in-your-app/ -->

      <bitcoin-item :bitcoinCode="info"/>
      <div class="bitcoin__footer">
        <bitcoin-form @input-value="inputValue"/>
        <bitcoin-board />
      </div>

      <div class="block">
        <textarea class="block__textarea"></textarea>
      </div>
      
		</div>
	</div>
	
</template>

<script>
import axios from "axios";
import moment from "moment";
import BitcoinItem from "./Components/BitcoinItem.vue";
import BitcoinForm from "./BitcoinForm.vue";
import BitcoinBoard from "./BitcoinBoard.vue";

export default {
  components: {
    BitcoinItem,
    BitcoinForm,
    BitcoinBoard
  },
  data() {
    return {
      info: null,
      time: null,
      errored: false,
      loading: false,
      inputValue: ''
    };
  },

  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
      // toFixed -->
      // Метод преобразует число путем добавления или удаления
      // желаемого количества знаков после запятой
    },
    dataFilter(date) {
      return moment(date)
        .lang("ru")
        .format("DD MMMM YYYY, HH:mm");
    }
  },

  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        this.info = response.data.bpi;
        this.time = response.data.time;
      })
      .catch(error => {
        // Обработка ошибок
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    // ИНдикатор загрузки, чтобы сообщать пользователю,
    // что не можем получить данные
  }
};
</script>

<style lang="less">

.bitcoin {

  &__footer {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    box-sizing: border-box;
    margin-top: 30px;
  }
}

.block {
  width: 100%;
  padding: 20px;
  margin: 20px 0 0 0;
  box-sizing: border-box;
  &__textarea {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>


