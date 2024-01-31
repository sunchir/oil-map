<template>
  <div id="bottomLeft">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-bar" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">项目统计表格</span>
        </div>
      </div>
      <div class="contain">
       <div class="text">
         <dv-scroll-board @click="mouseOver" class="dv-scr-board" :config="config" />
       </div>
       <div class="text">
         <dv-scroll-board @click="mouseOver" class="dv-scr-board" :config="config1" />

       </div>
       <!-- <div style="border-bottom:none;" class="text">
         <dv-scroll-board @click="mouseOver" class="dv-scr-board" :config="config2" />
       </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import projectData from '../data/data';
export default {
  data() {
    return {
      // 中石油项目
      config: {},
      // 中石化项目
      config1: {
      },
      // 其他项目
      config2: {
      },
      projectName:"",
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    mouseOver(e){
      if(e.row[1] && e.row[1] != ''){
        this.projectName = e.row[1]
        this.$nextTick(() => {
          this.$modal.show('example', {projectName:this.projectName})
        })
      }
    },
    initData() {
      const data = projectData.projectData
      if(data.length > 0){
        // 中石油
        const dataZSY = data.filter( item => item['业主单位'] == "中石油")
        this.config = this.convertData(dataZSY)
        // 中石化
        const dataZSH = data.filter( item => item['业主单位'] == "中石化")
        this.config1 = this.convertData(dataZSH)
        // 其他
        const dataQT = data.filter( item => item['业主单位'] == "其他单位")
        this.config2 = this.convertData(dataQT)
      }
    },
    convertData(data){
      const convertName = (v) => {
        // return `<span title="${v}" >${v}</span>`
        return v;
      }
      const convertPresent = (v) => {
        return v> 0.5 ? ` <span class='colorGrass' title="${v}" >${v*100 + '%'}</span>` : `<span class='colorRed' title="${v}" >${v*100 + '%'}</span>`
      }
      const dataView = data.map( item => {
        const data = [convertName(item['单项工程名称']), item['业主单位'], convertPresent(item['项目进度']),item['项目年份'],`<span class='colorGrass'>详情</span>`]
        return data
      })
      const config = {
        header: ['单项工程名称', '业主单位', '完成情况', '项目年份','操作'],
        data: dataView,
        rowNum: 8, //表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: true,
        columnWidth: [50, 250, 100, 100,80],
        align: ['center']
      }
      return config
    }
  }
}
</script>

<style lang="scss" scoped>
$box-height: 520px;
$box-width: 100%;
#bottomLeft {
  padding: 20px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .contain {
    width: 640px;
    
    .text {
      line-height: 480px;
      border-bottom: 1px solid rgb(101, 134, 236);
      display: block;
      height: 480px;
      text-align: center;
      color: #5cd9e8;
      font-size: 75px;
    }
  }
  .bg-color-black {
    border-radius: 10px;
    height: 886px;
    border: 1px solid rgb(101, 134, 236);
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>
