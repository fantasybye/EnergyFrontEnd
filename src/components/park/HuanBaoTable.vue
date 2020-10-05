<template>
  <div class="table-wrapper">
    <table>
      <tr>
        <td/><td colspan="2">方案一</td><td colspan="2">方案二</td><td colspan="2">方案三</td>
      </tr>
      <tr>
        <td>指标</td><td>供电</td><td>供热/供冷</td><td>供电</td><td>供热/供冷</td><td>供电</td><td>供热/供冷</td>
      </tr>
      <tr class="border-tr">
        <td>微粉尘（kg/kwh）</td>
        <td class="color-text">{{ tableData[0][0] }}</td>
        <td class="color-text">{{ tableData[0][1] }}</td>
        <td class="color-text">{{ tableData[0][2] }}</td>
        <td class="color-text">{{ tableData[0][3] }}</td>
        <td class="color-text">{{ tableData[0][4] }}</td>
        <td class="color-text">{{ tableData[0][5] }}</td>
      </tr>
      <tr class="border-tr">
        <td>CO2（kg/kwh）</td>
        <td class="color-text">{{ tableData[1][0] }}</td>
        <td class="color-text">{{ tableData[1][1] }}</td>
        <td class="color-text">{{ tableData[1][2] }}</td>
        <td class="color-text">{{ tableData[1][3] }}</td>
        <td class="color-text">{{ tableData[1][4] }}</td>
        <td class="color-text">{{ tableData[1][5] }}</td>
      </tr>
      <tr class="border-tr">
        <td>SO2（kg/kwh）</td>
        <td class="color-text">{{ tableData[2][0] }}</td>
        <td class="color-text">{{ tableData[2][1] }}</td>
        <td class="color-text">{{ tableData[2][2] }}</td>
        <td class="color-text">{{ tableData[2][3] }}</td>
        <td class="color-text">{{ tableData[2][4] }}</td>
        <td class="color-text">{{ tableData[2][5] }}</td>
      </tr>
      <tr class="border-tr">
        <td>NOX（kg/kwh）</td>
        <td class="color-text">{{ tableData[3][0] }}</td>
        <td class="color-text">{{ tableData[3][1] }}</td>
        <td class="color-text">{{ tableData[3][2] }}</td>
        <td class="color-text">{{ tableData[3][3] }}</td>
        <td class="color-text">{{ tableData[3][4] }}</td>
        <td class="color-text">{{ tableData[3][5] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
name: "HuanBaoTable",
  props:{
    tableData:{
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.table-wrapper{
  width: 960px;
  height: 200px;
}
.table-wrapper table{
  width: 960px;
  height: 200px;
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC,serif;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  line-height: 17px;
  text-align: center;
}
.color-text{
  color: #86F4FF;
}
.border-tr{
  border-bottom: 1px solid #7DEDFF;
}
</style>