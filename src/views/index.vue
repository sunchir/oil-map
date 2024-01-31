<template>
<div>
  <DetailModal ref="detailModal"/>
  <DetailTable ref="DetailTable" />
  <DetailModal :hasParent="true" name="example2" ref="detailModal" />
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
            <div class="title">
              <span class="title-text">{{`${dataJson.title}`}}</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="['#568aea', '#000000']"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-before"></span>
              <span class="text">项目统计</span>
            </div>
            <div class="react-right ml-3">
              <span class="text"></span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right bg-color-blue mr-3">
              <span class="text fw-b">地图数据看板</span>
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <Left />
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-13>
              <centerLeft2 />
            </dv-border-box-13>
            <!-- <dv-border-box-12>
             <centerRight1 />
            </dv-border-box-12> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import { formatTime } from '../utils/index.js'
import dataJson from '../data/data'
import centerLeft2 from './centerLeft2'
import Left from './Left'
import DetailModal from '../components/modal/DetailModal.vue'
import DetailTable from '../components/modal/DetailTable.vue'
// import centerRight1 from './centerRight1'
// import center from './center'
// import bottomLeft from './bottomLeft'

export default {
  mixins: [ drawMixin ],
  data() {
    return {
      timing: null,
      loading: true,
      dataJson: dataJson,
      dateDay: null,
      dateYear: null,
      dateYearY: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    }
  },
  components: {
    centerLeft2,
    Left,
    DetailModal,
    DetailTable,
    // center,
    // bottomLeft,
  },
  mounted() {
    this.timeFn()
    this.cancelLoading()
  },
  unMounted() {
    clearInterval(this.timing)
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
         this.dateYearY = formatTime(new Date(), 'yyyy')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
</style>
