<template>
  <div class="container pt-3">
    <div class="section">
      <scanner @result="scanResult=$event"></scanner>
    </div>
    <template v-if="team!==null">
      <template v-if="play===true">
        <tool-bar :inventar="inventar"></tool-bar>
        <controls-panel v-if="currentQuestion!==null"
                        :question="currentQuestion"
                        :inventar="inventar"
                        @close="currentQuestion=null"></controls-panel>
      </template>
      <template v-else>
        <div class="alert alert-danger text-center">
          Игра окончена
        </div>
      </template>
    </template>
    <template v-else>
      <div class="alert alert-info text-center">
        Для начала игры отсканируейте QR Код c номером команды
      </div>
    </template>


  </div>

</template>

<script>
import qrCodeScanner from "@/components/qrCodeScanner.vue";
import ControlsPanel from "@/components/controlsPanel.vue";
import ToolBar from "@/components/toolBar.vue";

export default {
  name: 'App',
  components: {
    ToolBar,
    ControlsPanel,
    scanner: qrCodeScanner,
  },
  data() {
    return {
      inventarSrc: {
        cristal: {
          icon: this.$attrs.publicPath + 'assets/icons/cristal.png',
          actionEventStart: null,
          action: null,
          refreshTime: 30000,
          count: 0,
        },
        aid: {
          icon: this.$attrs.publicPath + 'assets/icons/aid.png',
          actionEventStart: 'iconClick',
          action: () => {
            this.inventar.health.count = 100;
            delete this.inventar.aid;
          },
          refreshTime: 30000,
          count: 0,
        },
        health: {
          icon: this.$attrs.publicPath + 'assets/icons/health.png',
          actionEventStart: 'mount',
          action: () => {
            setInterval(() => {
              if (this.inventar.health.count <= 0) {
                this.play = false;
              } else {
                this.inventar.health.count -= 10;
              }
            }, 60 * 1000)
          },
          refreshTime: 0,
          count: 100
        },
        team: {
          icon: this.$attrs.publicPath + 'assets/icons/team.png',
          actionEventStart: null,
          action: null,
          refreshTime: 0,
          count: 0
        }
      },
      question: null, // В глобальном объекте на странице запуска приложения
      scanResult: null,
      inventar: {},
      inventarHistory: {},
      play: true,
      currentQuestion: null,
      team: null
    }
  },
  mounted() {

  },
  watch: {
    team() {
      /* eslint-disable */
      if (gameQuestions && typeof gameQuestions === "object") {
        this.question = {...gameQuestions};
        //Переопределим контекст для события ответа
        for (let key in this.question) {
          if (typeof this.question[key].actionAnswer === "function") {
            this.question[key].actionAnswer = this.question[key].actionAnswer.bind(this);
          }
        }
      }
      /* eslint-enable */

      //Добавим иконку команды в инвентарь
      this.addInventarItem('team', false, this.team);

      //Добавим жизнь
      this.addInventarItem('health', false);

      //Запустим события инвенторя на монтирование
      this.initMountInventarActions();
    },
    scanResult() {
      if (typeof this.scanResult === "object") {
        let prepareData = this.scanResult.data.split('/');
        switch (prepareData[0]) {
          case 'team':
            this.team = Number(prepareData[1]);
            break;
          case 'inventar':
            this.addInventarItem(prepareData[1], true)
            break;
          case 'question':
            this.currentQuestion = this.question[prepareData[1]];
            break;
        }

      }
    }
  },
  methods: {
    initMountInventarActions() {
      //Init inventar event
      for (let key in this.inventar) {
        let item = this.inventar[key];
        if (item.actionEventStart === 'mount' && item.action) {
          item.action();
        }
      }
    },
    addInventarItem(key, countInc = true, count = null) {
      let prepareKey = key.split('_');
      let inventarKey = prepareKey[0];
      let inventarIndex = prepareKey[1];

      //Если элемента нет в инвентаре, то добавляем
      if (!this.inventar[inventarKey]) {
        if (
            this.inventarHistory[key] &&
            this.inventarSrc[inventarKey].refreshTime &&
            this.inventarHistory[key] + this.inventarSrc[inventarKey].refreshTime > Date.now()
        ) {
          return false;
        }

        this.inventar[inventarKey] = {...this.inventarSrc[inventarKey]};
      } else {
        //Если дата добавления + дата выдачи нового элемента больше текущей даты, то не добавляем
        if (
            inventarIndex !== undefined &&
            this.inventarHistory[key] &&
            this.inventar[inventarKey].refreshTime &&
            this.inventarHistory[key] + this.inventar[inventarKey].refreshTime > Date.now()
        ) {
          return false;
        }
      }

      this.inventarHistory[key] = Date.now()

      //Инкремент кол-ва если разрешено
      if (countInc === true) {
        this.inventar[inventarKey].count++;
      }

      //Если установлена переписывание значения
      if (count !== null) {
        this.inventar[inventarKey].count += Number(count);
      }
    }
  }
}
</script>

<style>
#app {
  height: 100vh;
  background-image: url('./assets/images/background.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center
}
</style>
