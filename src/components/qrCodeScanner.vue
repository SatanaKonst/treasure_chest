<template>
  <video ref="videoArea" class="w-100"></video>
</template>

<script>
import QrScanner from 'qr-scanner';

export default {
  name: 'qrCodeScanner',
  props: {},
  data() {
    return {
      scanner: null
    }
  },
  mounted() {
    this.scanner = new QrScanner(
        this.$refs.videoArea,
        result => {
          this.$emit('result', result)
        },
        {
          /* your options or returnDetailedScanResult: true if you're not specifying any other options */
          highlightScanRegion: true
        },
    );
    this.scanner.start();
  }
}
</script>


<style scoped>
video {
  border-radius: 130px;
  height: 33vh;
}
</style>