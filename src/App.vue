<template>
  <div class="container pt-3">
    <template v-if="play===true">
      <div class="section">
        <scanner @result="scanResult=$event"></scanner>
      </div>
      <tool-bar :inventar="inventar"></tool-bar>
      <controls-panel v-if="currentQuestion!==null" :question="currentQuestion" :inventar="inventar"></controls-panel>
    </template>
    <template v-else>
      <div class="alert alert-danger text-center">
        Игра окончена
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
          count: 50,
          addTime: null
        }
      },
      question: {
        question1: {
          text: 'Текст вопроса',
          answer: 'рыба',
          userAnswer: null,
          type: 'variants',
          variants: [
            'Вариант 1',
            'Вариант 2',
            'Вариант 3',
            'Вариант 4',
          ],
          needCristalls: 0,
          actionAnswer: () => {
            this.addInventarItem('cristal_1', true, 10)
          }
        }
      },
      scanResult: null,
      inventar: {},
      play: true,
      currentQuestion: null
    }
  },
  created() {
    this.addInventarItem('health', false)
    this.currentQuestion = this.question.question1;

  },
  mounted() {
    //Init inventar event
    for (let key in this.inventar) {
      let item = this.inventar[key];
      if (item.actionEventStart === 'mount' && item.action) {
        item.action();
      }

    }
  },
  watch: {
    scanResult() {
      if (typeof this.scanResult === "object") {
        let prepareData = this.scanResult.data.split('/');
        switch (prepareData[0]) {
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
    addInventarItem(key, countInc = true, countOverride = null) {
      let prepareKey = key.split('_');

      //Если элемента нет в инвентаре, то добавляем
      if (!this.inventar[key]) {
        this.inventar[key] = {...this.inventarSrc[prepareKey[0]]};
        this.inventar[key].addTime = Date.now()
      }

      //Если дата добавления + дата выдачи нового элемента больше текущей даты, то добавляем
      if (this.inventar[key].addTime + this.inventar[key].refreshTime > Date.now()) {
        if (countInc === true) {
          if (countOverride !== null) {
            this.inventar[key].count += countOverride;
          } else {
            this.inventar[key].count++;
          }
        }
        this.inventar[key].addTime = Date.now()
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
