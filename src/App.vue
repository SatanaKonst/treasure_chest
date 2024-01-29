<template>
  <div class="container pt-3">
    <template v-if="play===true">
      <div class="section">
        <scanner @result="scanResult=$event"></scanner>
      </div>
      <tool-bar :inventar="inventar"></tool-bar>
      <controls-panel></controls-panel>
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
      scanResult: null,
      inventar: {},
      play: true,
    }
  },
  created() {
    this.addInventarItem('health', false)
    this.addInventarItem('aid')

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
      console.log(this.scanResult)
    }
  },
  methods: {
    addInventarItem(key, countInc = true) {
      let add = false;
      if (this.inventar[key]) {
        //Проверим дату добавления
        add = this.inventar[key].addTime + this.inventar[key].refreshTime <= Date.now();
      } else {
        this.inventar[key] = {...this.inventarSrc[key]};
        add = true;
      }

      if (add === true) {
        if (countInc === true) {
          this.inventar[key].count++;
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
