<template>
  <div class="container pt-3">
    <div class="section">
      <scanner @result="scanResult=$event"></scanner>
    </div>
    <template v-if="team!==null">
      <template v-if="play===true">
        <tool-bar :inventar="inventar"></tool-bar>
        <controls-panel v-if="currentQuestion!==null" :question="currentQuestion" :inventar="inventar"></controls-panel>
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
          icon: './assets/icons/cristal.png',
          actionEventStart: null,
          action: null,
          refreshTime: 30000,
          count: 0,
          addTime: null
        },
        aid: {
          icon: './assets/icons/aid.png',
          actionEventStart: 'iconClick',
          action: () => {
            this.inventar.health.count = 100;
            delete this.inventar.aid;
          },
          refreshTime: 30000,
          count: 0,
          addTime: null
        },
        health: {
          icon: './assets/icons/health.png',
          actionEventStart: 'mount',
          action: () => {
            setInterval(() => {
              if (this.inventar.health.count <= 0) {
                this.play = false;
              } else {
                this.inventar.health.count--
              }
            }, 10000)
          },
          refreshTime: 0,
          count: 50,
          addTime: null
        },
        team: {
          icon: './assets/icons/team.png',
          actionEventStart: null,
          action: null,
          refreshTime: 0,
          count: null,
          addTime: null
        }
      },
      question: null, // В глобальном объекте на странице запуска приложения
      scanResult: null,
      inventar: {},
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
        this.question = gameQuestions[`team${this.team}`];
      }
      /* eslint-enable */

      //Добавим иконку команды в инвентарь
      this.addInventarItem('team', true, this.team);

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
            if (this.inventarSrc[prepareData[1]]) {
              this.addInventarItem(prepareData[1])
            }
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

      //Если элемента нет в инвентаре, то добавляем
      if (!this.inventar[key]) {
        this.inventar[key] = {...this.inventarSrc[prepareKey[0]]};
        this.inventar[key].addTime = Date.now()
      }

      //Если дата добавления + дата выдачи нового элемента больше текущей даты, то добавляем
      if (
          this.inventar[key].addTime &&
          this.inventar[key].refreshTime &&
          this.inventar[key].addTime + this.inventar[key].refreshTime > Date.now()
      ) {
        if (countInc === true) {
          this.inventar[key].count++;
        }
        this.inventar[key].addTime = Date.now()
      }

      //Если установлена переписывание значения
      if (count !== null) {
        this.inventar[key].count += Number(count);
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
