import echarts from "echarts";

const homeData2 = {
    id: 2,
    value: "高邮风光产业园",
    text:[
        "锂电池产业、充电设备及配件生产、氢燃料应用、光伏发电、光伏电池组件。",
        "基础设施完善、拥有多家重点企业、地理位置优越、物流网络四通八达、产业聚集、生态良好。"
    ],
    barChartData:{
        hasData:true,
        id:2,
        option: {
            title: {
                text:"2010-2019年全球光伏组件产能增长情况",
                textStyle:{
                    color:"#6DE5FF",
                    fontSize: 24,
                    fontWeight: 'normal',
                },
                textAlign:'center',
                left: '50%',
                top: 40,
            },
            grid:{
                y:160
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                name: '年份',
                nameTextStyle:{
                    padding: [64, 0, 0, 0],
                    fontSize: 14,
                    color:'rgba(255, 255, 255, 0.65)'
                },
                data: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
                axisLine:{
                    show:false
                },
                axisTick: {
                    show:false
                },
                offset: 18
            },
            yAxis: {
                type: 'value',
                boundaryGap: false,
                name: '产能（GW）',
                nameTextStyle:{
                    padding: [0, 35, 12, 0],
                    fontSize: 14,
                    color:'rgba(255, 255, 255, 0.65)'
                },
                axisLine:{
                    show:false
                },
                axisTick: {
                    show:false
                },
                splitLine :{    //网格线
                    lineStyle:{
                        type:'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                        color:'rgba(255, 255, 255, 0.15)'
                    },
                    show:true //隐藏或显示
                },
                offset: 12
            },
            textStyle: {
                color: "rgba(255, 255, 255, 0.65)",
                fontFamily: "PingFangSC-Semibold",
                fontSize:14
            },
            series: [
                {
                    type: 'bar',
                    data: [49,70,80,78,90,99,120,150,180,218],
                    itemStyle: {        // 系列级个性化折线样式
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#52FFEA'
                        }, {
                            offset: 1,
                            color: '#20A0FF'
                        }]),//线条渐变色
                    },
                    barWidth: 24
                }
            ]
        }
    },
    lineChartData:{
        id:2,
        option: {
            color:["#FAD961", "#BE3CE9", "#52FFEA"],
            title: {
                text:"负荷曲线",
                textStyle:{
                    color:"#6DE5FF",
                    fontSize: 24,
                    fontWeight: 'normal',
                },
                textAlign:'center',
                left: '50%',
                top: 40,
            },
            grid:{
                y:160
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: 110,
                itemGap:32,
                textStyle:{
                    color:"rgba(255, 255, 255, 0.65)",
                    fontSize: 14,
                    fontWeight: 'normal',
                },
                icon: 'circle',
                data: [ '逐时电负荷特征系数', '逐时热负荷特征系数', '逐时冷负荷特征系数']
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: [0, 5, 10, 15, 20, 25],
                axisLine:{
                    show:false
                },
                axisTick: {
                    show:false
                },
                offset: 16
            },
            yAxis: {
                type: 'value',
                boundaryGap: false,
                max:1.0,
                axisLabel: {
                    formatter: function (v) {
                        return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                    }
                },
                axisLine:{
                    show:false
                },
                axisTick: {
                    show:false
                },
                splitLine :{    //网格线
                    lineStyle:{
                        type:'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                        color:'rgba(255, 255, 255, 0.15)'
                    },
                    show:true //隐藏或显示
                },
                offset: 12
            },
            textStyle: {
                color: "rgba(255, 255, 255, 0.65)",
                fontFamily: "PingFangSC-Semibold",
                fontSize:14
            },
            series: [
                {
                    name: '逐时电负荷特征系数',
                    type: 'line',
                    data: [0.57, 0.69, 0.98, 0.89, 0.51, 0.57],
                    lineStyle: {        // 系列级个性化折线样式
                        width: 3,
                        type: 'solid',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FFD984'
                        }, {
                            offset: 1,
                            color: '#FFC34A'
                        }]),//线条渐变色
                    }
                },
                {
                    name: '逐时热负荷特征系数',
                    type: 'line',
                    data: [0.2, 0.53, 0.85, 0.95, 0.85, 0.20],
                    lineStyle: {        // 系列级个性化折线样式
                        width: 3,
                        type: 'solid',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#BE3CE9'
                        }, {
                            offset: 1,
                            color: '#4D51DA'
                        }]),//线条渐变色
                    }
                },
                {
                    name: '逐时冷负荷特征系数',
                    type: 'line',
                    data: [0.2, 0.5, 0.73, 0.84, 0.59, 0.27],
                    lineStyle: {        // 系列级个性化折线样式
                        width: 3,
                        type: 'solid',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#52FFEA'
                        }, {
                            offset: 1,
                            color: '#20A0FF'
                        }]),//线条渐变色
                    }
                }
            ]
        }
    }
}

export default homeData2