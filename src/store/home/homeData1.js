import echarts from "echarts";

const homeData1 = {
    id: 1,
    value: "仪征大数据产业园",
    text:[
        "仪征大数据产业园涵盖大数据采集、存储、计算、传导、应用、人工智能及制造等数字经济产业。",
        "土地开发强自度及利用效率高，拥有快速便捷的交通系统；良好的研发及生活服务设施，集工作生活及休闲一体。"
    ],
    barChartData:{
        hasData:true,
        id:1,
        option: {
            title: {
                text:"2012-2016年中国科技产业园区数量走势",
                textStyle:{
                    color:"#6DE5FF",
                    fontSize: 28,
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
                    fontSize: 20,
                    color:'rgba(255, 255, 255, 0.65)'
                },
                data: [ 2012, 2013, 2014, 2015, 2016],
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
                name: '数量(家)',
                nameTextStyle:{
                    padding: [0, 35, 12, 0],
                    fontSize: 20,
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
                fontSize:20
            },
            series: [
                {
                    type: 'bar',
                    data: [1457, 2046, 2570, 2506, 2543],
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
        id:1,
        option: {
            color:["#FAD961", "#BE3CE9", "#52FFEA"],
            title: {
                text:"负荷曲线",
                textStyle:{
                    color:"#6DE5FF",
                    fontSize: 28,
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
                    fontSize: 24,
                    fontWeight: 'normal',
                },
                icon: 'circle',
                data: [ '逐时电负荷特征系数', '逐时热负荷特征系数', '逐时冷负荷特征系数']
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25],
                axisLabel:{
                    interval: 4,
                },
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
                fontSize: 20
            },
            series: [
                {
                    name: '逐时电负荷特征系数',
                    type: 'line',
                    data: [0.09,0.09,0.08,0.05,0.09,0.08,0.28,0.42,0.48,0.49,0.39,0.38,0.40 ,0.30 ,0.29,0.31,0.35,0.39,0.45,0.49,0.43,0.40 ,0.24,0.25,0.10,0.10],
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
                    data: [0.10,0.11,0.09,0.12,0.11,0.13,0.14,0.30 ,0.69,0.74,0.72,0.62,0.62,0.68,0.52,0.53,0.54,0.46,0.42,0.45,0.37,0.34,0.23,0.25,0.10,0.10],
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
                    data: [0.2,0.2,0.2,0.2,0.2,0.2,0.23,0.3,0.32,0.33,0.34,0.36,0.33,0.34,0.33,0.33,0.33,0.33,0.333,0.28,0.25,0.21,0.2,0.20,0.2,0.2],
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

export default homeData1