<template>
  <modal
    @before-open="beforeOpen"
    classes="modal-detail"
    @before-close="beforeClose"
    :shiftX="0.5"
    :shiftY="0.5"
    :width="1000"
    :height="800"
    :minWidth="800"
    :minHeight="600"
    draggable
    reset
    transition
    scrollable
    resizable
    :name="name"
  >
    <div class="modal-detail-close"><span @click="handleClose">×</span></div>
    <div class="modal-detail-body">
      <div
        :class="convertClass(item)"
        :key="item"
        v-for="item in Object.keys(data)"
      >
        <span v-if="item !== '所属项目'" class="modal-detail-title">{{
          item + ":"
        }}</span>
        <dv-percent-pond
          v-if="item == '项目进度'"
          :config="{ value: data[item] * 100 }"
          style="width:200px;height:100px;"
        />
        <span v-else>{{ data[item] }}</span>
      </div>
    </div>
  </modal>
</template>

<script>
import dataJson from "../../data/data.js";
export default {
  data() {
    return {
      data: {},
      projectName: "",
      hasParent: "",
    };
  },
  props: {
    projectNameP: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "example",
    },
    hasParentP: {
      type: Boolean,
      default: false,
    },
  },
  mounted(){
    this.projectName = this.projectNameP
    this.hasParent = this.hasParentP
  },
  methods: {
    openModal() {
      this.initData();
      this.$modal.show(this.name);
    },
    beforeOpen(e) {
      this.$nextTick(() => {
        this.projectName = e.params.projectName;
        this.initData();
      });
    },
    beforeClose() {
      if (this.hasParent) {
        this.$modal.show("example1");
      }
    },
    handleClose() {
      this.$modal.hide(this.name);
    },
    convertClass(value) {
      let className = "modal-detail";
      switch (value) {
        case "所属项目":
          className = className + "-h1";
          break;
        case "项目进度":
          className = className + "-data";
          break;
        case "目前存在问题":
          className = className + "-error";
          break;
        default:
          className = className + "-text";
      }
      return className;
    },
    initData() {
      if (this.projectName !== "" && this.projectName) {
        this.data = dataJson.projectData.find(
          (item) => item["单项工程名称"] == this.projectName
        );
      }
    },
  },
};
</script>

<style lang="scss">
.modal-detail {
  background-color: rgba(21, 41, 99, 0.9);
  border: 1px solid rgb(0, 194, 255);
  color: rgb(0, 194, 255);
  position: relative;
  &::after {
    content: " ";
    width: 100%;
    height: 100%;
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    filter: blur(3px);
  }
  &-close {
    height: 30px;
    font-size: 30px;
    text-align: right;
    color: rgb(0, 194, 255);
    span {
      cursor: pointer;
      padding-right: 10px;
      padding-top: 10px;
      display: block;
    }
  }
  &-body {
    padding: 0 20px;
  }
  &-title {
    padding-right: 20px;
  }
  &-h1 {
    font-size: 25px;
    text-align: center;
  }
  &-data {
    display: flex;
    align-content: center;
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
  }
  &-error {
    color: #cc0000;
    font-size: 18px;
    padding-top: 20px;
  }
  &-text {
    font-size: 18px;
    padding-top: 20px;
  }
}
</style>
