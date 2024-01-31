<template>
<div>
    <modal @before-open="beforeOpen" classes="modal-table" :shiftX="0.2" :shiftY="0.3" :width="1000" :height="800" :minWidth="800" :minHeight="600" draggable reset transition scrollable resizable name="example1">
      <div>
      <div class="modal-table-close"> <span @click="handleClose">×</span></div>
       <vue-good-table
          :columns="columns"
          @on-row-click="onRowClick"
          :rows="data"
          class="modal-table-detail"
          :search-options="{
            enabled: true,
            trigger: 'enter'
          }">
        </vue-good-table>
      </div>
    </modal>
    
</div>
</template>

<script>
import dataJson from "../../data/data.js"
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
export default {
  data() {
    return {
      data:[

      ],
      columns:[
        {
          label: '单项工程名称',
          field: '单项工程名称',
          thClass: 'custom-th-class',
        },{
          label: '所属二级单位',
          field: '所属二级单位',
        },
        {
          label: '所属项目',
          field: '所属项目',
        },
        {
          label: '所属合同',
          field: '所属合同',
        },
        {
          label: '实际项目经理',
          field: '实际项目经理',
        },
        {
          label: '合同项目经理',
          field: '合同项目经理',
        },
         {
          label: '合同金额',
          field: '合同金额',
        },
        {
          label: '合同要求工期',
          field: '合同要求工期',
        },
      ],
      projectName:'',
      companyName:'',
    };
  },
  props: {
    companyNameP: {
      type: String,
      default: '',
    },
  },
  components: {
    VueGoodTable,
  },
  created(){
    this.companyName = this.companyNameP
  },
  methods: {
      openModal(){
          this.initData()
          this.$modal.show('example1')
      },
      beforeOpen(e){
        if(e.params){
          this.$nextTick(() => {
            console.log(e.params.companyName)
            this.companyName = e.params.companyName
            this.initData()
          })
        }
      },
      onRowClick(params) {
        const _this = this
        if(params.row['单项工程名称'] && params.row['单项工程名称'] != '' ){
          this.projectName = params.row['单项工程名称']
          this.$nextTick( () => {
             console.log(this.projectName)
             _this.$modal.show('example2', {projectName: this.projectName  })
          })
        }
      },
      handleClose() {
        this.$modal.hide('example1')
      },
      initData(){
          if(this.companyName !== '' && this.companyName ){
            this.data = dataJson.projectData.filter( item => item['所属二级单位'] == this.companyName )
          }
      }
  }
}
</script>

<style lang="scss">
.modal-table{
  background-color:rgb(0, 194, 255, 0.2);
  border: 1px solid rgb(0, 194, 255);
  position:relative;
  overflow: auto;
  &::after {
    content:' ';
    width:100%;
    height:100%;
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
    position:absolute;
    filter: blur(3px);
    background-color:rgb(80,107,190, 0.8);
  }
  &-close {
    height:30px;
    font-size:30px;
    text-align: right;
    color: rgb(0, 194, 255);
    span {
      cursor: pointer;
      padding-right:10px ;
      margin-top:10px ;
      display: block;
    }
  }

  &-detail{
    color: rgb(0, 194, 255);
    padding: 10px;
    table.vgt-table {
      background-color:rgb(6, 68, 87);
    }
    .vgt-input, .vgt-select {
      background-color:rgb(6, 68, 87);
      border: 1px solid rgb(0, 194, 255);
      color: rgb(0, 194, 255);
    }
    .vgt-global-search {
      background:none;
       border: 1px solid rgb(0, 194, 255);
    }
    .vgt-table thead th {
       background:none;
    }
    .vgt-table.bordered td, .vgt-table.bordered th {
      border: 1px solid rgb(0, 194, 255);
      color: rgb(0, 194, 255);
    }
    table.vgt-table tr.clickable:hover {
        background-color: rgb(57, 82, 90);;
    }
    .vgt-global-search__input .input__icon .magnifying-glass {
      border: 2px solid rgb(0, 194, 255);
    }
    .vgt-global-search__input .input__icon .magnifying-glass:before {
      background: rgb(0, 194, 255);
    }
  }
}

</style>