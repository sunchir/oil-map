<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">任务完成排行榜</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ['项目名称', '对应业主', '完成情况'],
        data: [
          ['项目1', '业主dev-1', "<span  class='colorGrass'>↑75%</span>"],
          ['项目2', '业主dev-2', "<span  class='colorRed'>↓33%</span>"],
          ['项目3', '业主dev-3', "<span  class='colorGrass'>↑100%</span>"],
          ['项目4', '业主rea-1', "<span  class='colorGrass'>↑94%</span>"],
          ['项目5', '业主rea-2', "<span  class='colorGrass'>↑95%</span>"],
          ['项目6', '业主fix-2', "<span  class='colorGrass'>↑63%</span>"],
          ['项目7', '业主fix-4', "<span  class='colorGrass'>↑84%</span>"],
          ['项目8', '业主fix-7', "<span  class='colorRed'>↓46%</span>"],
          ['项目9', '业主dev-2', "<span  class='colorRed'>↓13%</span>"],
          ['项目10', '业主dev-9', "<span  class='colorGrass'>↑76%</span>"]
        ],
        rowNum: 5, //表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: true,
        columnWidth: [50, 100, 100],
        align: ['center']
      }
    }
  },
  components: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
$box-height: 310px;
$box-width: 100%;
#centerRight1 {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 100%;
      height: 230px;
    }
  }
}
</style>
