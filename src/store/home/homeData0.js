import echarts from "echarts";

const homeData0 = {
    id: 0,
    value: "江苏扬州化学工业园区",
    text:[
        "工业一直被称为国民经济的主导产业.中国的工业主要以有基础工业部门为主.包括能源工业,钢铁工业,机械工业,高新工业等.",
        "重工业与轻工业交错密集,对于供冷和供热需求较大,由于具有工作轮班制,供能需求存在一定规律性,且节假日与工作日负荷曲线具有差异性."
    ],
    barChartData:{
        hasData:true,
        id:0,
        option: {
            title: {
                text:"2010-2019年中国化工园区平均产值走势",
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
                data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
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
                name: '亿元',
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
                    data: [90, 100, 120, 170, 200, 230, 239, 255, 350, 500],
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
        id:0,
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
                offset: 12,
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
                }
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
                    data:   [0.55,0.56, 0.56, 0.57, 0.58, 0.6, 0.65, 0.68, 0.74, 0.77, 0.79, 0.8, 0.78,
                        0.77, 0.79, 0.8, 0.81, 0.79, 0.77, 0.72, 0.67, 0.63, 0.6, 0.57, 0.56,0.55],
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
                    data: [0.09,0.09, 0.09, 0.1, 0.1, 0.12, 0.15, 0.38, 0.54, 0.57, 0.58, 0.59, 0.59,
                        0.57, 0.52, 0.45, 0.43, 0.39, 0.37, 0.37, 0.36, 0.3, 0.26, 0.21, 0.09,0.09],
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
                    data: [0.11,0.12, 0.11, 0.1, 0.1, 0.1, 0.11, 0.13, 0.2, 0.25, 0.3, 0.36, 0.4,
                        0.47, 0.49, 0.5, 0.48, 0.43, 0.35, 0.26, 0.24, 0.2, 0.14, 0.12, 0.1,0.1],
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

export default homeData0;