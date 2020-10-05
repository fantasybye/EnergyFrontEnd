import Vue from 'vue';
import Vuex from 'vuex';
import echarts from 'echarts';

Vue.use(Vuex);

const state = {
    home: [{
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
                        data: [0.56, 0.6, 0.79, 0.77, 0.67, 0.56],
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
                        data: [0.09, 0.12, 0.58, 0.45, 0.36, 0.09],
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
                        data: [0.12, 0.1, 0.3, 0.5, 0.24, 0.1],
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
    }, {
        id: 1,
        value: "扬州西区新城电子商务创意园区",
        text:[
            "广播影视、动漫、音像、传媒、视觉艺术、表演艺术、工艺与设计、雕塑、环境艺术、广告装潢、服装设计、软件和计算机服务等.",
            "知识智慧密集型新兴领域,具有高知识性、高附加值、强融合性."
        ],
        barChartData:{
            hasData:true,
            id:1,
            option: {
                title: {
                    text:"2012-2016年中国文化创意园区数量走势",
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
                        data: [0.09, 0.08, 0.39, 0.31, 0.43, 0.10],
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
                        data: [0.11, 0.13, 0.72, 0.53, 0.37, 0.10],
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
                        data: [0.10, 0.02, 0.33, 0.37, 0.29, 0.07],
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
    }, {
        id: 2,
        value: "扬州广陵船舶(重工)产业园",
        text:[
            "园区重点引进各类船舶、海洋工程配套项目、各类工程机械设备以及科技服务型、物流类项目,实现船舶制造专业化、规模化、系列化.“十二五”期末,船舶重工及配套产业产销规模冲击千亿,成为立足扬州、辐射长三角的重要船舶重工及配套产业基地之一.",
            "基础设施完善、拥有多家重点企业、地理位置优越、物流网络四通八达、产业聚集、生态良好."
        ],
        barChartData:{
            hasData:true,
            id:2,
            option: {
                title: {
                    text:"2012-2018年中国造船完工量(单位:万载重吨)",
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
                    data: [2013, 2014, 2015, 2016, 2017, 2018],
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
                    name: '完工量',
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
                        data: [4534, 3905, 4184, 3532, 4268, 3164],
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
    }, {
        id: 3,
        value:"扬州大学(高邮)现代农业科教示范园区",
        text:[
            "学校日常活动具有计划性,因而短时间尺度上负荷需求集中、明确.",
            "学校年内具有明确的寒暑假周期特性,因而长时间尺度上学校负荷具有明显的阶段性和间歇性.",
            "学校冬季有采暖需求, 夏季有供冷需求,还具有饮用热水需求.",
            "住宿中小学以及大学还具有生活热水需求.此外,学校食堂有一定的炊事用能需求.",
            "环境控制需求.学校部分负荷具有相对较高的环境控制需求,比如图书馆和体育馆都具有一定光线和温控需求,也具有一定的调控和响应能力."
        ],
        barChartData:{
            hasData:false
        },
        lineChartData:{
            id:3,
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
                    offset: 18
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
                        data: [0.26, 0.25, 0.52, 0.48, 0.54, 0.24],
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
                        data: [0.05, 0.05, 0.14, 0.15, 0.06, 0.05],
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
                        data: [0.06, 0.07, 0.19, 0.19, 0.19, 0.06],
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
    }, {
        id: 4,
        value: "扬州玖龙湖医养健康城",
        text:[
            "含有I类负荷,电能质量要求高,供能品质要求高.",
            "用能密度高,24小时不间断供能.",
            "北方地区医院的负荷需求具有季节差异性.由于气候原因,冬季有采暖需求、夏季有供冷需求",
            "一般具有饮用热水、生活热水需求",
            "环境控制需求.住院部、化验室、手术室等场所对环境温度和光线有精细调控需求",
            "餐饮用能需求.一般具有餐饮用气、用电等负荷需求.",
            "除常规用能需求外,还需提供消毒蒸汽."
        ],
        barChartData:{
            hasData:false
        },
        lineChartData:{
            id:4,
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
                        data: [0.31, 0.34, 0.5, 0.59, 0.58, 0.32],
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
                        data: [0.54, 0.47, 0.31, 0.34, 0.37, 0.45],
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
                        data: [0.21, 0.2, 0.33, 0.37, 0.29, 0.24],
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
    }],
    park: [{
        name: "江苏扬州化学工业园区",
        brief: ["2003年10月,扬州、仪征两级政府围绕江苏省纵深推进沿江开发、加快打造宁扬沿江化工产业带的战略部署,市县联动,合作开发,在扬州西南部沿江地带的仪征市境内全面启动了扬州化工园区建设.2006年5月,国家发改委正式批准设立省级扬州化工园区,是江苏省仅有的三家专业化工园区之一.经过10多年的开发建设,扬州化工园区区位优势逐步放大,自然禀赋日益彰显,生产要素加速集聚,产业特色更加鲜明,发展空间不断拓展,未来前景更为广阔.",
            "扬州化工园区区位条件优越、交通运输便捷.在国家实施的《长江三角洲地区区域规划》中,扬州是沿江和沿运河两带中的重要城市,接受着上海、南京两大都市圈的辐射.扬州化工园区交通运输便捷.扬州化工园区产业特色鲜明.区内集聚了中石化仪征化纤、中石油昆仑天然气、中化国际、中国华电集团、美国普莱克斯、英国博纳、日本东丽、住友精化、大洋日酸、韩国锦湖韩亚、新加坡凯发集团、台湾远东集团、东联化学、大连化工、香港建滔集团、珠海恒基达鑫、辽宁奥克化学、江苏扬农集团等一批境内外知名的石化大企业,初步形成了以烯烃、芳烃、盐化工为龙头,石油化工、精细化工、化工新材料、石化物流等四大产业集聚发展的态势.特别是石化物流业发展迅速,目前,区内投产、在建储罐250万立方米,总罐容位居江苏省沿江各港口第一,获批保税储罐50.3万立方米.扬州长江石化物流中心分别被江苏省发改委、经信委命名为“江苏省现代服务业集聚区”、 “江苏省重点物流基地”,中心内扬州长江石化交易市场拥有完备的电子交易平台,已有30多家贸易公司进驻."],
        fuHeLineData: [{
            id:0,
            option:{
                title: {
                    text:"逐时电负荷特征系数",
                    textStyle:{
                        color:"#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign:'center',
                    left: '50%',
                },
                grid:{
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                        showSymbol: false,
                        type: 'line',
                        data: [0.56, 0.56, 0.57, 0.58, 0.6, 0.65, 0.68, 0.74, 0.77, 0.79, 0.8, 0.78,
                            0.77, 0.79, 0.8, 0.81, 0.79, 0.77, 0.72, 0.67, 0.63, 0.6, 0.57, 0.56],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }, {
            id: 1,
            option: {
                title: {
                    text: "逐时热负荷特征系数",
                    textStyle: {
                        color: "#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign: 'center',
                    left: '50%',
                },
                grid: {
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    offset: 16
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    max: 1.0,
                    axisLabel: {
                        formatter: function (v) {
                            return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {    //网格线
                        lineStyle: {
                            type: 'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                            color: 'rgba(255, 255, 255, 0.15)'
                        },
                        show: true //隐藏或显示
                    },
                    offset: 12
                },
                textStyle: {
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "PingFangSC-Semibold",
                    fontSize: 14
                },
                series: [
                    {
                        showSymbol: false,
                        type: 'line',
                        data: [0.09, 0.09, 0.1, 0.1, 0.12, 0.15, 0.38, 0.54, 0.57, 0.58, 0.59, 0.59,
                            0.57, 0.52, 0.45, 0.43, 0.39, 0.37, 0.37, 0.36, 0.3, 0.26, 0.21, 0.09
                        ],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }, {
            id: 2,
            option: {
                title: {
                    text: "逐时冷负荷特征系数",
                    textStyle: {
                        color: "#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign: 'center',
                    left: '50%',
                },
                grid: {
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    offset: 16
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    max: 1.0,
                    axisLabel: {
                        formatter: function (v) {
                            return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {    //网格线
                        lineStyle: {
                            type: 'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                            color: 'rgba(255, 255, 255, 0.15)'
                        },
                        show: true //隐藏或显示
                    },
                    offset: 12
                },
                textStyle: {
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "PingFangSC-Semibold",
                    fontSize: 14
                },
                series: [
                    {
                        showSymbol: false,
                        type: 'line',
                        data: [0.12, 0.11, 0.1, 0.1, 0.1, 0.11, 0.13, 0.2, 0.25, 0.3, 0.36, 0.4,
                            0.47, 0.49, 0.5, 0.48, 0.43, 0.35, 0.26, 0.24, 0.2, 0.14, 0.12, 0.1
                        ],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }],
        nengHaoData:{
            barData:{
                id:0,
                option: {
                    title: {
                        text:"用电逐项能耗(kwh)",
                        textStyle:{
                            color:"#6DE5FF",
                            fontSize: 24,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        top: 56,
                    },
                    grid:{
                        y:144,
                        y2:96,
                        x: 100,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                        axisLabel:{
                            interval: 0
                        },
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [3428910,	5918208, 10510305, 715000, 15001612,    4125300
                            ],
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
            pieData:{
                id:0,
                option: {
                    color:['#6638F0', '#5CC9F5', '#ABE41B', "#B9B9B9", '#0080FF','#FFA07A'],
                    title: {
                        text:"用电逐项能耗占比",
                        textStyle:{
                            color:"#6DE5FF",
                            fontSize: 24,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        top: 56,
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        icon: 'circle',
                        orient: 'vertical',
                        right: 80,
                        top: 150,
                        data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                        itemGap: 16,
                        itemWidth: 12,
                        itemHeight: 12,
                        textStyle:{
                            color:"rgba(255, 255, 255, 0.65)",
                            fontSize: 12,
                            fontWeight: 'normal',
                        }
                    },
                    series: [
                        {
                            name:'用电逐项能耗',
                            type: 'pie',
                            radius: ['50', '60'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    formatter:'{d}%',
                                    fontSize: '20',
                                    fontWeight: '600',
                                    verticalAlign: 'middle',
                                    align: 'center'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 3428910, name: '照明'},
                                {value: 5918208, name: '空调机组'},
                                {value: 10510305, name: '冷热源机房'},
                                {value: 715000, name: '电梯'},
                                {value: 15001612, name: '工业用电'},
                                {value: 4125300, name: '动力及消防'},
                            ],
                            center: [190, 230]
                        }
                    ]
                }
            }
        },
        fangAnData:{
            barData: [{
                id:0,
                option: {
                    title: {
                        text:"投资费用与节能效果对比",
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
                        y:108,
                        y2:66,
                        x: 70,
                        x2:25
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['方案一', '方案二', '方案三'],
                        axisLabel:{
                            interval: 0
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        offset: 10
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: false,
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [1980, 1660, 1730],
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
            },{
                id:1,
                option: {
                    title: {
                        text:"回收年限对比",
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
                        y:108,
                        y2:66,
                        x: 70,
                        x2:25
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['方案一', '方案二', '方案三'],
                        axisLabel:{
                            interval: 0
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        offset: 10
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: false,
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [10.43, 14.22, 11.23],
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
            },],
            radarData: [{
                id:0,
                option:{
                    color:['#6DE5FF','#7657F0','#00A7FF'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle:{
                        fontSize: 10,
                        color: 'rgba(255, 255, 255, 0.65)'
                    },
                    radar: [
                        {
                            indicator: [
                                {text: '综合能效服务', max: 800},
                                {text: '分布式清洁能源服务', max: 800},
                                {text: '专属电动汽车', max: 800},
                                {text: '商业模式', max: 800},
                                {text: '供冷供热供电多能服务',max: 800},
                                {text: '能源技术', max: 800}
                            ],
                            center: ['17%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }

                        },
                        {
                            indicator: [
                                {text: '综合能效服务', max: 1000},
                                {text: '供冷供热供电多能服务', max: 1000},
                                {text: '专属电动汽车', max: 1000},
                                {text: '商业模式', max: 1000},
                            ],
                            radius: 60,
                            startAngle: 135,
                            shape: 'circle',
                            center: ['50%', '50%'],
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        },
                        {
                            indicator: [
                                {text: '综合能效服务', max: 1000},
                                {text: '分布式清洁能源服务', max: 1000},
                                {text: '专属电动汽车', max: 1000},
                                {text: '商业模式', max: 1000},
                                {text: '供冷供热供电多能服务', max: 1000}
                            ],
                            center: ['83%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'radar',
                            tooltip: {
                                trigger: 'item'
                            },
                            areaStyle: {},
                            data: [
                                {
                                    value: [250, 300, 230, 100, 600, 250],
                                    name: '方案一'
                                }
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 1,
                            areaStyle: {},
                            data: [
                                {
                                    value: [300, 750, 250, 200],
                                    name: '方案二'
                                },
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 2,
                            areaStyle: {},
                            data: [
                                {
                                    name: '方案三',
                                    value: [280, 320, 350, 120, 650],
                                }
                            ]
                        }
                    ]}
            },{
                id:1,
                option:{
                    color:['#6DE5FF','#7657F0','#00A7FF'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle:{
                        fontSize: 10,
                        color: 'rgba(255, 255, 255, 0.65)'
                    },
                    radar: [
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            center: ['17%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }

                        },
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            radius: 60,
                            startAngle: 90,
                            shape: 'circle',
                            center: ['50%', '50%'],
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        },
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            center: ['83%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'radar',
                            tooltip: {
                                trigger: 'item'
                            },
                            areaStyle: {},
                            data: [
                                {
                                    value: [5,4,5,4,5],
                                    name: '方案一'
                                }
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 1,
                            areaStyle: {},
                            data: [
                                {
                                    value: [3,3,4,4,4],
                                    name: '方案二'
                                },
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 2,
                            areaStyle: {},
                            data: [
                                {
                                    name: '方案三',
                                    value: [4,4,4,4,5],
                                }
                            ]
                        }
                    ]}
            }],
            tableData: [
                [0.0225,0.0186,0.0198,0.0173,0.005,0.129],
                [0.1675,0.016,0.1521,0.012,0.1912,0.016],
                [0.0079,0.0106,0.0076,0.0072,0.0074,0.0077],
                [0.0043,0.0096,0.0036,0.0065,0.0034,0.0092]
            ],
        },
        yunXingData: {
            zongJieData: [{
                id: 0,
                option: {
                    title: {
                        text:"夏季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 40,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [76, 80],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [92, 72],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [85, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }, {
                id: 1,
                option: {
                    title: {
                        text:"冬季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 0,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [85, 80],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [88, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [76, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }, {
                id: 2,
                option: {
                    title: {
                        text:"过渡季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 0,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [65, 84],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [76, 69],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [80, 79],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }],
            xia:{
                leng:[{
                    id:'l0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
            dong:{
                re:[{
                    id:'r0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
            guoDu:{
                leng:[{
                    id:'l0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                re:[{
                    id:'r0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
        }
    },{
        name:"扬州西区新城电子商务创意园区",
        brief: ["扬州西区新城电子商务创意产业园,是由扬州市邗江区与江苏利行文化发展有限责任公司联手打造的集电子商务与文化创意为一体的综合性专业园区.园区总规划办公面积15万㎡,仓储面积45万㎡,拟通过5年左右的时间,打造苏中地区电子商务运营及服务区域中心和江苏省电子商务创业孵化基地.一期办公面积1.5万㎡,仓储面积3.5万㎡,入驻企业30家左右,园区交易额平均达到3亿元/年,初步形成先发优势,打造扬州市电子商务产业先导区、示范区.",
            "园区为入园企业开辟工商注册、劳动社保等绿色通道,提供电商沙龙、公共培训、全天候安保、保洁绿化、生活配套等综合服务,联合淘宝大学提供人力资源整体解决方案,进行代理运营,摄影美工,设计营销,银企对接等服务导入,同时开展物流仓储,政策辅导和网货对接等服务项目.",
            "园区有“四大定位”,“六项服务”和“八项配套”,其中“四项定位”有(1)电商集聚功能:引进和扶持品牌电商,集聚幼稚网店卖家、网货供应商、运营服务商,打造电商企业集聚地;(2)电商创业功能:构建园区创业服务体系,孵化潜力品牌电商,塑造电商创业文化,打造品牌电商孵化器;(3)产业提升功能:优化完善电子商务产业链配套,促进网上规模化,品牌化运营,打造电商产业加速器;(4)示范带动功能:实施传统企业触网工程,拓展优势特色产品网络销售渠道,创新网络销售模式.",
            "“六项服务”分别是(1)物流服务:各大快递公司(韵达、汇通、申通、中通、EMS、顺丰、圆通等)在园区均有服务点,提供低价优质服务;(2)物业管理:先进智能监控系统,24小时无盲点安全服务,专业保洁,优美绿化;(3)综合展厅:入园企业产品及文化、形象的展示平台,有利增进客户直观印象,促进产品市场销售与推广;(4)餐饮服务:园区设有员工餐厅、超市、便利店、各类特色小吃店等一应俱全;(5)人才公寓:全天候水电、宽带服务,独立卫生间,给入园优质企业的员工提供良好的配套;(6)商务休闲中心:咖啡馆、健身房、休闲吧、文化室等,既可放松身心,更可促进商务交流,找寻项目合作、投融资机会.",
            "以及还有绿色通道、人才培养、网货对接、交流分享、服务导入、政策扶持、政府承诺、政府补贴的“八项配套”服务."],
        fuHeLineData: [{
            id:0,
            option:{
                title: {
                    text:"逐时电负荷特征系数",
                    textStyle:{
                        color:"#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign:'center',
                    left: '50%',
                },
                grid:{
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                        showSymbol: false,
                        type: 'line',
                        data: [0.56, 0.56, 0.57, 0.58, 0.6, 0.65, 0.68, 0.74, 0.77, 0.79, 0.8, 0.78,
                            0.77, 0.79, 0.8, 0.81, 0.79, 0.77, 0.72, 0.67, 0.63, 0.6, 0.57, 0.56],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }, {
            id: 1,
            option: {
                title: {
                    text: "逐时热负荷特征系数",
                    textStyle: {
                        color: "#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign: 'center',
                    left: '50%',
                },
                grid: {
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    offset: 16
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    max: 1.0,
                    axisLabel: {
                        formatter: function (v) {
                            return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {    //网格线
                        lineStyle: {
                            type: 'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                            color: 'rgba(255, 255, 255, 0.15)'
                        },
                        show: true //隐藏或显示
                    },
                    offset: 12
                },
                textStyle: {
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "PingFangSC-Semibold",
                    fontSize: 14
                },
                series: [
                    {
                        showSymbol: false,
                        type: 'line',
                        data: [0.09, 0.09, 0.1, 0.1, 0.12, 0.15, 0.38, 0.54, 0.57, 0.58, 0.59, 0.59,
                            0.57, 0.52, 0.45, 0.43, 0.39, 0.37, 0.37, 0.36, 0.3, 0.26, 0.21, 0.09
                        ],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }, {
            id: 2,
            option: {
                title: {
                    text: "逐时冷负荷特征系数",
                    textStyle: {
                        color: "#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign: 'center',
                    left: '50%',
                },
                grid: {
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    offset: 16
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    max: 1.0,
                    axisLabel: {
                        formatter: function (v) {
                            return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {    //网格线
                        lineStyle: {
                            type: 'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                            color: 'rgba(255, 255, 255, 0.15)'
                        },
                        show: true //隐藏或显示
                    },
                    offset: 12
                },
                textStyle: {
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "PingFangSC-Semibold",
                    fontSize: 14
                },
                series: [
                    {
                        showSymbol: false,
                        type: 'line',
                        data: [0.12, 0.11, 0.1, 0.1, 0.1, 0.11, 0.13, 0.2, 0.25, 0.3, 0.36, 0.4,
                            0.47, 0.49, 0.5, 0.48, 0.43, 0.35, 0.26, 0.24, 0.2, 0.14, 0.12, 0.1
                        ],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }],
        nengHaoData:{
            barData:{
                id:0,
                option: {
                    title: {
                        text:"用电逐项能耗(kwh)",
                        textStyle:{
                            color:"#6DE5FF",
                            fontSize: 24,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        top: 56,
                    },
                    grid:{
                        y:144,
                        y2:96,
                        x: 100,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                        axisLabel:{
                            interval: 0
                        },
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [3428910,	5918208, 10510305, 715000, 15001612,    4125300
                            ],
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
            pieData:{
                id:0,
                option: {
                    color:['#6638F0', '#5CC9F5', '#ABE41B', "#B9B9B9", '#0080FF','#FFA07A'],
                    title: {
                        text:"用电逐项能耗占比",
                        textStyle:{
                            color:"#6DE5FF",
                            fontSize: 24,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        top: 56,
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        icon: 'circle',
                        orient: 'vertical',
                        right: 80,
                        top: 150,
                        data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                        itemGap: 16,
                        itemWidth: 12,
                        itemHeight: 12,
                        textStyle:{
                            color:"rgba(255, 255, 255, 0.65)",
                            fontSize: 12,
                            fontWeight: 'normal',
                        }
                    },
                    series: [
                        {
                            name:'用电逐项能耗',
                            type: 'pie',
                            radius: ['50', '60'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    formatter:'{d}%',
                                    fontSize: '20',
                                    fontWeight: '600',
                                    verticalAlign: 'middle',
                                    align: 'center'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 3428910, name: '照明'},
                                {value: 5918208, name: '空调机组'},
                                {value: 10510305, name: '冷热源机房'},
                                {value: 715000, name: '电梯'},
                                {value: 15001612, name: '工业用电'},
                                {value: 4125300, name: '动力及消防'},
                            ],
                            center: [190, 230]
                        }
                    ]
                }
            }
        },
        fangAnData:{
            barData: [{
                id:0,
                option: {
                    title: {
                        text:"投资费用与节能效果对比",
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
                        y:108,
                        y2:66,
                        x: 70,
                        x2:25
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['方案一', '方案二', '方案三'],
                        axisLabel:{
                            interval: 0
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        offset: 10
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: false,
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [1980, 1660, 1730],
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
            },{
                id:1,
                option: {
                    title: {
                        text:"回收年限对比",
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
                        y:108,
                        y2:66,
                        x: 70,
                        x2:25
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['方案一', '方案二', '方案三'],
                        axisLabel:{
                            interval: 0
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        offset: 10
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: false,
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [10.43, 14.22, 11.23],
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
            },],
            radarData: [{
                id:0,
                option:{
                    color:['#6DE5FF','#7657F0','#00A7FF'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle:{
                        fontSize: 10,
                        color: 'rgba(255, 255, 255, 0.65)'
                    },
                    radar: [
                        {
                            indicator: [
                                {text: '综合能效服务', max: 800},
                                {text: '分布式清洁能源服务', max: 800},
                                {text: '专属电动汽车', max: 800},
                                {text: '商业模式', max: 800},
                                {text: '供冷供热供电多能服务',max: 800},
                                {text: '能源技术', max: 800}
                            ],
                            center: ['17%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }

                        },
                        {
                            indicator: [
                                {text: '综合能效服务', max: 1000},
                                {text: '供冷供热供电多能服务', max: 1000},
                                {text: '专属电动汽车', max: 1000},
                                {text: '商业模式', max: 1000},
                            ],
                            radius: 60,
                            startAngle: 135,
                            shape: 'circle',
                            center: ['50%', '50%'],
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        },
                        {
                            indicator: [
                                {text: '综合能效服务', max: 1000},
                                {text: '分布式清洁能源服务', max: 1000},
                                {text: '专属电动汽车', max: 1000},
                                {text: '商业模式', max: 1000},
                                {text: '供冷供热供电多能服务', max: 1000}
                            ],
                            center: ['83%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'radar',
                            tooltip: {
                                trigger: 'item'
                            },
                            areaStyle: {},
                            data: [
                                {
                                    value: [250, 300, 230, 100, 600, 250],
                                    name: '方案一'
                                }
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 1,
                            areaStyle: {},
                            data: [
                                {
                                    value: [300, 750, 250, 200],
                                    name: '方案二'
                                },
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 2,
                            areaStyle: {},
                            data: [
                                {
                                    name: '方案三',
                                    value: [280, 320, 350, 120, 650],
                                }
                            ]
                        }
                    ]}
            },{
                id:1,
                option:{
                    color:['#6DE5FF','#7657F0','#00A7FF'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle:{
                        fontSize: 10,
                        color: 'rgba(255, 255, 255, 0.65)'
                    },
                    radar: [
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            center: ['17%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }

                        },
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            radius: 60,
                            startAngle: 90,
                            shape: 'circle',
                            center: ['50%', '50%'],
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        },
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            center: ['83%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'radar',
                            tooltip: {
                                trigger: 'item'
                            },
                            areaStyle: {},
                            data: [
                                {
                                    value: [5,4,5,4,5],
                                    name: '方案一'
                                }
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 1,
                            areaStyle: {},
                            data: [
                                {
                                    value: [3,3,4,4,4],
                                    name: '方案二'
                                },
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 2,
                            areaStyle: {},
                            data: [
                                {
                                    name: '方案三',
                                    value: [4,4,4,4,5],
                                }
                            ]
                        }
                    ]}
            }],
            tableData: [
                [0.0225,0.0186,0.0198,0.0173,0.005,0.129],
                [0.1675,0.016,0.1521,0.012,0.1912,0.016],
                [0.0079,0.0106,0.0076,0.0072,0.0074,0.0077],
                [0.0043,0.0096,0.0036,0.0065,0.0034,0.0092]
            ],
        },
        yunXingData: {
            zongJieData: [{
                id: 0,
                option: {
                    title: {
                        text:"夏季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 40,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [76, 80],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [92, 72],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [85, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }, {
                id: 1,
                option: {
                    title: {
                        text:"冬季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 0,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [85, 80],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [88, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [76, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }, {
                id: 2,
                option: {
                    title: {
                        text:"过渡季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 0,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [65, 84],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [76, 69],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [80, 79],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }],
            xia:{
                leng:[{
                    id:'l0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
            dong:{
                re:[{
                    id:'r0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
            guoDu:{
                leng:[{
                    id:'l0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                re:[{
                    id:'r0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
        }
    },{
        name:"扬州广陵船舶(重工)产业园",
        brief: ["扬州广陵船舶(重工)产业园是扬州船舶产业“三园一基地”的核心区域,是江苏省船舶配套特色产业园区.规划面积30平方公里,启动12平方公里,拥有优质的长江岸线和丰富的滩涂,是理想的船舶重工业及配套产业基地,致力打造布局合理、功能完备.产业集聚、生态良好的现代化产业园区.",
            "园区重点引进各类船舶、海洋工程配套项目、各类工程机械设备以及科技服务型、物流类项目,实现船舶制造专业化、规模化、系列化.“十二五”期末,船舶重工及配套产业产销规模冲击千亿,成为立足扬州、辐射长三角的重要船舶重工及配套产业基地之一.",
            "园区基础设施完善,扬州沿江高等级公路贯穿园区,产业园内“三纵三横”的道路框架已经形成,现有一座22万伏、三座11万伏变电所,给排水均由扬州市区统一供水和集中处理.便捷交通,充足的电力,清澈的水源,充分彰显了园区软硬环境的完美结合.园区拥有多个国内船舶行业领军企业,其中重点企业有:(1)扬州大洋造船有限公司国内造船前10强、世界排名前50强.主要生产散货船、集装箱船、液化气船、化学品船、特种工程船舶等.产品远销美国、伊朗、德国、日本、挪威、希腊、土耳其、法国、加拿大等国家.几年来.已累计投资36亿元,拥有10万吨级干船坞、17万平方米主体厂房、两座900吨门吊,年产能200万载重吨以上,2010年产销规模率先突破“百亿”.(2)扬州环洲船用材料有限公司由西城钢铁集团、扬子江船业集团两个中国500强企业联合投资兴建,主要生产各类船用型材、中厚板、精密铸造及废钢物流等,成为园区第二个产销过“百亿”企业.(3)中铁宝桥(扬州)有限公司是以成产安装大型钢梁钢结构、铁路道岔、城市交通设施、大型起重机械为主的国家专业骨干企业,建有3000吨级泊位重件码头,拥有各种大型焊接、机加工设备60多台套,已具备钢桥梁钢结构年生产能力12万吨,还将成为城市轻轨、高速铁路道岔及大型吊装机械设备基地.(4)扬州托尼船业有限公司由北方国际集团有限公司控股下的天津机械进出口有限公司收购重组,投资总额为2960万美元,主要从事船舶的设计、制造与修理和各种非标机械及钢结构件的设计、制造."],
        fuHeLineData: [{
            id:0,
            option:{
                title: {
                    text:"逐时电负荷特征系数",
                    textStyle:{
                        color:"#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign:'center',
                    left: '50%',
                },
                grid:{
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                        showSymbol: false,
                        type: 'line',
                        data: [0.56, 0.56, 0.57, 0.58, 0.6, 0.65, 0.68, 0.74, 0.77, 0.79, 0.8, 0.78,
                            0.77, 0.79, 0.8, 0.81, 0.79, 0.77, 0.72, 0.67, 0.63, 0.6, 0.57, 0.56],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }, {
            id: 1,
            option: {
                title: {
                    text: "逐时热负荷特征系数",
                    textStyle: {
                        color: "#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign: 'center',
                    left: '50%',
                },
                grid: {
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    offset: 16
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    max: 1.0,
                    axisLabel: {
                        formatter: function (v) {
                            return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {    //网格线
                        lineStyle: {
                            type: 'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                            color: 'rgba(255, 255, 255, 0.15)'
                        },
                        show: true //隐藏或显示
                    },
                    offset: 12
                },
                textStyle: {
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "PingFangSC-Semibold",
                    fontSize: 14
                },
                series: [
                    {
                        showSymbol: false,
                        type: 'line',
                        data: [0.09, 0.09, 0.1, 0.1, 0.12, 0.15, 0.38, 0.54, 0.57, 0.58, 0.59, 0.59,
                            0.57, 0.52, 0.45, 0.43, 0.39, 0.37, 0.37, 0.36, 0.3, 0.26, 0.21, 0.09
                        ],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }, {
            id: 2,
            option: {
                title: {
                    text: "逐时冷负荷特征系数",
                    textStyle: {
                        color: "#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign: 'center',
                    left: '50%',
                },
                grid: {
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    offset: 16
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    max: 1.0,
                    axisLabel: {
                        formatter: function (v) {
                            return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {    //网格线
                        lineStyle: {
                            type: 'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                            color: 'rgba(255, 255, 255, 0.15)'
                        },
                        show: true //隐藏或显示
                    },
                    offset: 12
                },
                textStyle: {
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "PingFangSC-Semibold",
                    fontSize: 14
                },
                series: [
                    {
                        showSymbol: false,
                        type: 'line',
                        data: [0.12, 0.11, 0.1, 0.1, 0.1, 0.11, 0.13, 0.2, 0.25, 0.3, 0.36, 0.4,
                            0.47, 0.49, 0.5, 0.48, 0.43, 0.35, 0.26, 0.24, 0.2, 0.14, 0.12, 0.1
                        ],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }],
        nengHaoData:{
            barData:{
                id:0,
                option: {
                    title: {
                        text:"用电逐项能耗(kwh)",
                        textStyle:{
                            color:"#6DE5FF",
                            fontSize: 24,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        top: 56,
                    },
                    grid:{
                        y:144,
                        y2:96,
                        x: 100,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                        axisLabel:{
                            interval: 0
                        },
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [3428910,	5918208, 10510305, 715000, 15001612,    4125300
                            ],
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
            pieData:{
                id:0,
                option: {
                    color:['#6638F0', '#5CC9F5', '#ABE41B', "#B9B9B9", '#0080FF','#FFA07A'],
                    title: {
                        text:"用电逐项能耗占比",
                        textStyle:{
                            color:"#6DE5FF",
                            fontSize: 24,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        top: 56,
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        icon: 'circle',
                        orient: 'vertical',
                        right: 80,
                        top: 150,
                        data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                        itemGap: 16,
                        itemWidth: 12,
                        itemHeight: 12,
                        textStyle:{
                            color:"rgba(255, 255, 255, 0.65)",
                            fontSize: 12,
                            fontWeight: 'normal',
                        }
                    },
                    series: [
                        {
                            name:'用电逐项能耗',
                            type: 'pie',
                            radius: ['50', '60'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    formatter:'{d}%',
                                    fontSize: '20',
                                    fontWeight: '600',
                                    verticalAlign: 'middle',
                                    align: 'center'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 3428910, name: '照明'},
                                {value: 5918208, name: '空调机组'},
                                {value: 10510305, name: '冷热源机房'},
                                {value: 715000, name: '电梯'},
                                {value: 15001612, name: '工业用电'},
                                {value: 4125300, name: '动力及消防'},
                            ],
                            center: [190, 230]
                        }
                    ]
                }
            }
        },
        fangAnData:{
            barData: [{
                id:0,
                option: {
                    title: {
                        text:"投资费用与节能效果对比",
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
                        y:108,
                        y2:66,
                        x: 70,
                        x2:25
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['方案一', '方案二', '方案三'],
                        axisLabel:{
                            interval: 0
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        offset: 10
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: false,
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [1980, 1660, 1730],
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
            },{
                id:1,
                option: {
                    title: {
                        text:"回收年限对比",
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
                        y:108,
                        y2:66,
                        x: 70,
                        x2:25
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['方案一', '方案二', '方案三'],
                        axisLabel:{
                            interval: 0
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        offset: 10
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: false,
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [10.43, 14.22, 11.23],
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
            },],
            radarData: [{
                id:0,
                option:{
                    color:['#6DE5FF','#7657F0','#00A7FF'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle:{
                        fontSize: 10,
                        color: 'rgba(255, 255, 255, 0.65)'
                    },
                    radar: [
                        {
                            indicator: [
                                {text: '综合能效服务', max: 800},
                                {text: '分布式清洁能源服务', max: 800},
                                {text: '专属电动汽车', max: 800},
                                {text: '商业模式', max: 800},
                                {text: '供冷供热供电多能服务',max: 800},
                                {text: '能源技术', max: 800}
                            ],
                            center: ['17%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }

                        },
                        {
                            indicator: [
                                {text: '综合能效服务', max: 1000},
                                {text: '供冷供热供电多能服务', max: 1000},
                                {text: '专属电动汽车', max: 1000},
                                {text: '商业模式', max: 1000},
                            ],
                            radius: 60,
                            startAngle: 135,
                            shape: 'circle',
                            center: ['50%', '50%'],
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        },
                        {
                            indicator: [
                                {text: '综合能效服务', max: 1000},
                                {text: '分布式清洁能源服务', max: 1000},
                                {text: '专属电动汽车', max: 1000},
                                {text: '商业模式', max: 1000},
                                {text: '供冷供热供电多能服务', max: 1000}
                            ],
                            center: ['83%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'radar',
                            tooltip: {
                                trigger: 'item'
                            },
                            areaStyle: {},
                            data: [
                                {
                                    value: [250, 300, 230, 100, 600, 250],
                                    name: '方案一'
                                }
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 1,
                            areaStyle: {},
                            data: [
                                {
                                    value: [300, 750, 250, 200],
                                    name: '方案二'
                                },
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 2,
                            areaStyle: {},
                            data: [
                                {
                                    name: '方案三',
                                    value: [280, 320, 350, 120, 650],
                                }
                            ]
                        }
                    ]}
            },{
                id:1,
                option:{
                    color:['#6DE5FF','#7657F0','#00A7FF'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle:{
                        fontSize: 10,
                        color: 'rgba(255, 255, 255, 0.65)'
                    },
                    radar: [
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            center: ['17%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }

                        },
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            radius: 60,
                            startAngle: 90,
                            shape: 'circle',
                            center: ['50%', '50%'],
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        },
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            center: ['83%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'radar',
                            tooltip: {
                                trigger: 'item'
                            },
                            areaStyle: {},
                            data: [
                                {
                                    value: [5,4,5,4,5],
                                    name: '方案一'
                                }
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 1,
                            areaStyle: {},
                            data: [
                                {
                                    value: [3,3,4,4,4],
                                    name: '方案二'
                                },
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 2,
                            areaStyle: {},
                            data: [
                                {
                                    name: '方案三',
                                    value: [4,4,4,4,5],
                                }
                            ]
                        }
                    ]}
            }],
            tableData: [
                [0.0225,0.0186,0.0198,0.0173,0.005,0.129],
                [0.1675,0.016,0.1521,0.012,0.1912,0.016],
                [0.0079,0.0106,0.0076,0.0072,0.0074,0.0077],
                [0.0043,0.0096,0.0036,0.0065,0.0034,0.0092]
            ],
        },
        yunXingData: {
            zongJieData: [{
                id: 0,
                option: {
                    title: {
                        text:"夏季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 40,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [76, 80],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [92, 72],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [85, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }, {
                id: 1,
                option: {
                    title: {
                        text:"冬季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 0,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [85, 80],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [88, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [76, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }, {
                id: 2,
                option: {
                    title: {
                        text:"过渡季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 0,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [65, 84],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [76, 69],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [80, 79],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }],
            xia:{
                leng:[{
                    id:'l0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
            dong:{
                re:[{
                    id:'r0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
            guoDu:{
                leng:[{
                    id:'l0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                re:[{
                    id:'r0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
        }
    },{
        name:"扬州大学(高邮)现代农业科教示范园区",
        brief:[ "扬州大学高邮现代农业科教示范园由江苏省高邮市人民政府、扬州市人民政府、扬州大学三方联合合作建设扬州大学(高邮)现代农业科教示范园,位于高邮市城南经济新区扬州(高邮)国家农业科技园内,作为扬州大学的重要科教创新基地.",
            "园区总体定位为——“以现代农业科技研发、教学及示范推广为主的科教基地,兼顾农业科普与观光”.园区建设将坚持绿色化、信息化、机械化(自动化)和景观化等“四化”同步推进,努力把园区打造成集研究创新、教育培训、示范推广、国际交流、休闲观光、产业带动等多种功能于一体,软硬件条件达国内一流的现代农业综合试验示范基地、农业科技国际合作试验示范基地、科普基地及教育培训基地.",
            "园区秉持四项建设原则:(1)科技卓越.秉承“以一流的设施装备和高效的体制机制支撑农业科技创新,以一流的农业科技创新彰显园区的创新功能”的主旨,瞄准农业科技的制高点,大力开展农业自主性科技创新,同时积极引进和示范适宜推广应用的国内外最新农业科技成果,开展集成应用创新,建设成为苏中乃至苏北地区最高水平的农业科技创新平台.(2)运行绿色.贯彻绿色发展的理念,按照“减量化、再利用、资源化”基本思路,从布局、技术、模式等方面开展绿色化园区建设.对相邻或相近小规模种养殖实行耦合发展,达到自我消化、就地消纳、相互补充、就近处理;另一方面,加强对较大规模种植、养殖废(水)弃物进行多途径综合处理,推进农业“清洁化生产、减量化投入、资源化利用”.(3)管理智慧.综合运用国内外先进的智慧农业发展和智慧园区建设的最新成果,提升信息化水平,实现智能化管理、智能化生产和远程控制,开展作物生产智能灌溉、智能施肥、智能植保和动物智能化精细养殖.建设智能温室、智慧牧场、智慧田园和智慧农业服务中心,使科教园处处有“智慧”.(4)景观优美.基于“精致、秀美、灵韵”的思路,运用生态化、景观化、园林化的设计手法,建设美丽田园、美丽果园、美丽菜园和美丽牧场,将自然与文化、传统农耕与现代农作、植物与动物、时序与秩序有机结合,达到赏心悦目的境界.园区规划结构为“一心、一轴、一带、四区”.“一心”为科教综合服务中心;“一轴”:为农业科技文化景观轴;“一带”为复合型水功能带;“四区”为现代作物科学科教示范区、现代园艺科教示范区、现代动物科学科教示范区和奶牛规模化生态养殖示范区."],
        fuHeLineData: [{
            id:0,
            option:{
                title: {
                    text:"逐时电负荷特征系数",
                    textStyle:{
                        color:"#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign:'center',
                    left: '50%',
                },
                grid:{
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                        showSymbol: false,
                        type: 'line',
                        data: [0.56, 0.56, 0.57, 0.58, 0.6, 0.65, 0.68, 0.74, 0.77, 0.79, 0.8, 0.78,
                            0.77, 0.79, 0.8, 0.81, 0.79, 0.77, 0.72, 0.67, 0.63, 0.6, 0.57, 0.56],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }, {
            id: 1,
            option: {
                title: {
                    text: "逐时热负荷特征系数",
                    textStyle: {
                        color: "#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign: 'center',
                    left: '50%',
                },
                grid: {
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    offset: 16
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    max: 1.0,
                    axisLabel: {
                        formatter: function (v) {
                            return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {    //网格线
                        lineStyle: {
                            type: 'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                            color: 'rgba(255, 255, 255, 0.15)'
                        },
                        show: true //隐藏或显示
                    },
                    offset: 12
                },
                textStyle: {
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "PingFangSC-Semibold",
                    fontSize: 14
                },
                series: [
                    {
                        showSymbol: false,
                        type: 'line',
                        data: [0.09, 0.09, 0.1, 0.1, 0.12, 0.15, 0.38, 0.54, 0.57, 0.58, 0.59, 0.59,
                            0.57, 0.52, 0.45, 0.43, 0.39, 0.37, 0.37, 0.36, 0.3, 0.26, 0.21, 0.09
                        ],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }, {
            id: 2,
            option: {
                title: {
                    text: "逐时冷负荷特征系数",
                    textStyle: {
                        color: "#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign: 'center',
                    left: '50%',
                },
                grid: {
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    offset: 16
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    max: 1.0,
                    axisLabel: {
                        formatter: function (v) {
                            return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {    //网格线
                        lineStyle: {
                            type: 'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                            color: 'rgba(255, 255, 255, 0.15)'
                        },
                        show: true //隐藏或显示
                    },
                    offset: 12
                },
                textStyle: {
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "PingFangSC-Semibold",
                    fontSize: 14
                },
                series: [
                    {
                        showSymbol: false,
                        type: 'line',
                        data: [0.12, 0.11, 0.1, 0.1, 0.1, 0.11, 0.13, 0.2, 0.25, 0.3, 0.36, 0.4,
                            0.47, 0.49, 0.5, 0.48, 0.43, 0.35, 0.26, 0.24, 0.2, 0.14, 0.12, 0.1
                        ],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }],
        nengHaoData:{
            barData:{
                id:0,
                option: {
                    title: {
                        text:"用电逐项能耗(kwh)",
                        textStyle:{
                            color:"#6DE5FF",
                            fontSize: 24,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        top: 56,
                    },
                    grid:{
                        y:144,
                        y2:96,
                        x: 100,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                        axisLabel:{
                            interval: 0
                        },
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [3428910,	5918208, 10510305, 715000, 15001612,    4125300
                            ],
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
            pieData:{
                id:0,
                option: {
                    color:['#6638F0', '#5CC9F5', '#ABE41B', "#B9B9B9", '#0080FF','#FFA07A'],
                    title: {
                        text:"用电逐项能耗占比",
                        textStyle:{
                            color:"#6DE5FF",
                            fontSize: 24,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        top: 56,
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        icon: 'circle',
                        orient: 'vertical',
                        right: 80,
                        top: 150,
                        data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                        itemGap: 16,
                        itemWidth: 12,
                        itemHeight: 12,
                        textStyle:{
                            color:"rgba(255, 255, 255, 0.65)",
                            fontSize: 12,
                            fontWeight: 'normal',
                        }
                    },
                    series: [
                        {
                            name:'用电逐项能耗',
                            type: 'pie',
                            radius: ['50', '60'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    formatter:'{d}%',
                                    fontSize: '20',
                                    fontWeight: '600',
                                    verticalAlign: 'middle',
                                    align: 'center'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 3428910, name: '照明'},
                                {value: 5918208, name: '空调机组'},
                                {value: 10510305, name: '冷热源机房'},
                                {value: 715000, name: '电梯'},
                                {value: 15001612, name: '工业用电'},
                                {value: 4125300, name: '动力及消防'},
                            ],
                            center: [190, 230]
                        }
                    ]
                }
            }
        },
        fangAnData:{
            barData: [{
                id:0,
                option: {
                    title: {
                        text:"投资费用与节能效果对比",
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
                        y:108,
                        y2:66,
                        x: 70,
                        x2:25
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['方案一', '方案二', '方案三'],
                        axisLabel:{
                            interval: 0
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        offset: 10
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: false,
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [1630, 1150, 1420],
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
            },{
                id:1,
                option: {
                    title: {
                        text:"回收年限对比",
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
                        y:108,
                        y2:66,
                        x: 70,
                        x2:25
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['方案一', '方案二', '方案三'],
                        axisLabel:{
                            interval: 0
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        offset: 10
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: false,
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [7.65, 9.56, 8.66],
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
            },],
            radarData: [{
                id:0,
                option:{
                    color:['#6DE5FF','#7657F0','#00A7FF'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle:{
                        fontSize: 10,
                        color: 'rgba(255, 255, 255, 0.65)'
                    },
                    radar: [
                        {
                            indicator: [
                                {text: '综合能效服务', max: 800},
                                {text: '分布式清洁能源服务', max: 800},
                                {text: '专属电动汽车', max: 800},
                                {text: '商业模式', max: 800},
                                {text: '供冷供热供电多能服务',max: 800},
                                {text: '能源技术', max: 800}
                            ],
                            center: ['17%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }

                        },
                        {
                            indicator: [
                                {text: '综合能效服务', max: 1000},
                                {text: '供冷供热供电多能服务', max: 1000},
                                {text: '专属电动汽车', max: 1000},
                                {text: '商业模式', max: 1000},
                            ],
                            radius: 60,
                            startAngle: 135,
                            shape: 'circle',
                            center: ['50%', '50%'],
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        },
                        {
                            indicator: [
                                {text: '综合能效服务', max: 1000},
                                {text: '分布式清洁能源服务', max: 1000},
                                {text: '专属电动汽车', max: 1000},
                                {text: '商业模式', max: 1000},
                                {text: '供冷供热供电多能服务', max: 1000}
                            ],
                            center: ['83%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'radar',
                            tooltip: {
                                trigger: 'item'
                            },
                            areaStyle: {},
                            data: [
                                {
                                    value: [250, 300, 200, 120, 750, 300],
                                    name: '方案一'
                                }
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 1,
                            areaStyle: {},
                            data: [
                                {
                                    value: [300, 750, 175, 140],
                                    name: '方案二'
                                },
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 2,
                            areaStyle: {},
                            data: [
                                {
                                    name: '方案三',
                                    value: [285, 370, 150, 150, 850],
                                }
                            ]
                        }
                    ]}
            },{
                id:1,
                option:{
                    color:['#6DE5FF','#7657F0','#00A7FF'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle:{
                        fontSize: 10,
                        color: 'rgba(255, 255, 255, 0.65)'
                    },
                    radar: [
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            center: ['17%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }

                        },
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            radius: 60,
                            startAngle: 90,
                            shape: 'circle',
                            center: ['50%', '50%'],
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        },
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            center: ['83%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'radar',
                            tooltip: {
                                trigger: 'item'
                            },
                            areaStyle: {},
                            data: [
                                {
                                    value: [4,3,5,4,5],
                                    name: '方案一'
                                }
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 1,
                            areaStyle: {},
                            data: [
                                {
                                    value: [3,5,4,4,4],
                                    name: '方案二'
                                },
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 2,
                            areaStyle: {},
                            data: [
                                {
                                    name: '方案三',
                                    value: [4,5,4,4,5],
                                }
                            ]
                        }
                    ]}
            }],
            tableData: [
                [0.0225,0.0186,0.0198,0.0173,0.005,0.129],
                [0.1675,0.016,0.1521,0.012,0.1912,0.016],
                [0.0079,0.0106,0.0076,0.0072,0.0074,0.0077],
                [0.0043,0.0096,0.0036,0.0065,0.0034,0.0092]
            ]
        },
        yunXingData: {
            zongJieData: [{
                id: 0,
                option: {
                    title: {
                        text:"夏季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 40,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [76, 80],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [92, 72],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [85, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }, {
                id: 1,
                option: {
                    title: {
                        text:"冬季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 0,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [85, 80],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [88, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [76, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }, {
                id: 2,
                option: {
                    title: {
                        text:"过渡季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 0,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [65, 84],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [76, 69],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [80, 79],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }],
            xia:{
                leng:[{
                    id:'l0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
            dong:{
                re:[{
                    id:'r0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
            guoDu:{
                leng:[{
                    id:'l0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                re:[{
                    id:'r0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
        }
    },{
        name:"扬州玖龙湖医养健康城",
        brief: ["近年来,扬州牢固树立“以人民为中心”的发展思想,坚持以“颐养城市”建设为目标,把养老服务工作纳入全市经济社会发展大局进行统筹谋划,制定出台了一系列加快推动养老保障体系、养老服务产业发展等方面的政策文件;坚持以“颐养社区”建设为抓手,大力推进“公园+养老”、“医疗+养老”、“小区+养老”,全面推行10分钟养老服务圈,努力构建居家为基础、社区为依托、机构为补充、医养相结合的养老服务体系,有效满足了老年人的养老服务需求;积极鼓励和引导社会力量参与,不断优化和提升养老服务供给,目前已先后有20多家品牌养老服务企业、70多家嵌入式养老护理机构落户扬州,全市养老服务产业呈现出健康快速发展的良好态势,其中新建的玖龙湖医养健康城是医养中心的特色代表之一.",
            "玖龙湖医养健康城在古运河畔高旻寺旁,居家养老文化养生,医养融合机构服务,乐活享受居家养老,毗邻扬州南部体育公园 西临古运河风光带,北望高旻寺,扬子津生态园 ,九龙湖公园,凤栖湖公园三湖环绕,怡情颐景、生态宜居,多元化经营、高品质服务.扬州玖龙湖医养健康城项目项目位于扬州经济技术开发区临港新城内,占地180亩,建筑面积约40万平方米,总投资约22亿元,项目定位“医、康、养、商”一体化的综合体,其中,项目中的医院按三级医院标准建设,承担扬州经济技术开发区区级医院的功能,并通过与苏北人民医院的合作,借此以高水平的医疗服务带动养老的整体服务质量,是扬州首家真正做到医养结合完整业态的项目.",
            "玖龙湖医养健康城总建筑面积399000平方米.分为A、B两个地块,A地块主要建设三级甲等医院:1600张病床的三甲医院(含600张康复病床),附属颐养护理中心;B地块主要为配套商业服务建筑.A地块:医院主体、附属颐养护理中心部分及附属用房部分分为医院主体、附属颐养护理中心部分两部分.医院主体设计为:地上十七层,地下建筑二层,内设门诊部、急诊部、住院部、医技科室、行政管理、保障系统、院内生活、科研用房、教学用房、设备用房、地下车库等功能.附属颐养护理中心地上五栋,分别为四栋十六层,一栋十八层,一栋二十二层以及二层裙房组成,内设不同规格的老年养护单元和活动中心、行政中心等.总建筑面积为323500平方米,地上建筑面积为220300平方米,地下建筑面积为103200平方米.B地块:商业配套部分设计为,地上二十层,地下建筑二层.总用地面积20188.63平方米,总建筑面积75500平方米,其中地上建筑面积为56500平方米,地下建筑面积为19000平方米.其中医护人员及颐养护理中心工作人员人数大约为1200人,配套商业服务人员大约为800人."],
        fuHeLineData: [{
            id:0,
            option:{
                title: {
                    text:"逐时电负荷特征系数",
                    textStyle:{
                        color:"#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign:'center',
                    left: '50%',
                },
                grid:{
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                        showSymbol: false,
                        type: 'line',
                        data: [0.56, 0.56, 0.57, 0.58, 0.6, 0.65, 0.68, 0.74, 0.77, 0.79, 0.8, 0.78,
                            0.77, 0.79, 0.8, 0.81, 0.79, 0.77, 0.72, 0.67, 0.63, 0.6, 0.57, 0.56],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }, {
            id: 1,
            option: {
                title: {
                    text: "逐时热负荷特征系数",
                    textStyle: {
                        color: "#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign: 'center',
                    left: '50%',
                },
                grid: {
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    offset: 16
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    max: 1.0,
                    axisLabel: {
                        formatter: function (v) {
                            return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {    //网格线
                        lineStyle: {
                            type: 'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                            color: 'rgba(255, 255, 255, 0.15)'
                        },
                        show: true //隐藏或显示
                    },
                    offset: 12
                },
                textStyle: {
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "PingFangSC-Semibold",
                    fontSize: 14
                },
                series: [
                    {
                        showSymbol: false,
                        type: 'line',
                        data: [0.09, 0.09, 0.1, 0.1, 0.12, 0.15, 0.38, 0.54, 0.57, 0.58, 0.59, 0.59,
                            0.57, 0.52, 0.45, 0.43, 0.39, 0.37, 0.37, 0.36, 0.3, 0.26, 0.21, 0.09
                        ],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }, {
            id: 2,
            option: {
                title: {
                    text: "逐时冷负荷特征系数",
                    textStyle: {
                        color: "#6DE5FF",
                        fontSize: 24,
                        fontWeight: 'normal',
                    },
                    textAlign: 'center',
                    left: '50%',
                },
                grid: {
                    y: 60,
                    x2: 60
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    offset: 16
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    max: 1.0,
                    axisLabel: {
                        formatter: function (v) {
                            return v.toFixed(1)//表示整数.其他数值类型以此类推                                    }
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {    //网格线
                        lineStyle: {
                            type: 'dashed',    //设置网格线类型 dotted:虚线   solid:实线
                            color: 'rgba(255, 255, 255, 0.15)'
                        },
                        show: true //隐藏或显示
                    },
                    offset: 12
                },
                textStyle: {
                    color: "rgba(255, 255, 255, 0.65)",
                    fontFamily: "PingFangSC-Semibold",
                    fontSize: 14
                },
                series: [
                    {
                        showSymbol: false,
                        type: 'line',
                        data: [0.12, 0.11, 0.1, 0.1, 0.1, 0.11, 0.13, 0.2, 0.25, 0.3, 0.36, 0.4,
                            0.47, 0.49, 0.5, 0.48, 0.43, 0.35, 0.26, 0.24, 0.2, 0.14, 0.12, 0.1
                        ],
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#52FFEA'
                            }, {
                                offset: 1,
                                color: '#20A0FF'
                            }]),//线条渐变色
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(82,255,234,0.28)'
                            }, {
                                offset: 1,
                                color: 'rgba(32,160,255,0)'
                            }]),
                        }
                    }
                ]
            }
        }],
        nengHaoData:{
            barData:{
                id:0,
                option: {
                    title: {
                        text:"用电逐项能耗(kwh)",
                        textStyle:{
                            color:"#6DE5FF",
                            fontSize: 24,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        top: 56,
                    },
                    grid:{
                        y:144,
                        y2:96,
                        x: 100,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                        axisLabel:{
                            interval: 0
                        },
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [3428910,	5918208, 10510305, 715000, 15001612,    4125300
                            ],
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
            pieData:{
                id:0,
                option: {
                    color:['#6638F0', '#5CC9F5', '#ABE41B', "#B9B9B9", '#0080FF','#FFA07A'],
                    title: {
                        text:"用电逐项能耗占比",
                        textStyle:{
                            color:"#6DE5FF",
                            fontSize: 24,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        top: 56,
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        icon: 'circle',
                        orient: 'vertical',
                        right: 80,
                        top: 150,
                        data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                        itemGap: 16,
                        itemWidth: 12,
                        itemHeight: 12,
                        textStyle:{
                            color:"rgba(255, 255, 255, 0.65)",
                            fontSize: 12,
                            fontWeight: 'normal',
                        }
                    },
                    series: [
                        {
                            name:'用电逐项能耗',
                            type: 'pie',
                            radius: ['50', '60'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    formatter:'{d}%',
                                    fontSize: '20',
                                    fontWeight: '600',
                                    verticalAlign: 'middle',
                                    align: 'center'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 3428910, name: '照明'},
                                {value: 5918208, name: '空调机组'},
                                {value: 10510305, name: '冷热源机房'},
                                {value: 715000, name: '电梯'},
                                {value: 15001612, name: '工业用电'},
                                {value: 4125300, name: '动力及消防'},
                            ],
                            center: [190, 230]
                        }
                    ]
                }
            }
        },
        fangAnData:{
            barData: [{
                id:0,
                option: {
                    title: {
                        text:"投资费用与节能效果对比",
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
                        y:108,
                        y2:66,
                        x: 70,
                        x2:25
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['方案一', '方案二', '方案三'],
                        axisLabel:{
                            interval: 0
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        offset: 10
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: false,
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [1630, 1150, 1420],
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
            },{
                id:1,
                option: {
                    title: {
                        text:"回收年限对比",
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
                        y:108,
                        y2:66,
                        x: 70,
                        x2:25
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['方案一', '方案二', '方案三'],
                        axisLabel:{
                            interval: 0
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        offset: 10
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: false,
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
                        fontSize:10
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [7.65, 9.56, 8.66],
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
            },],
            radarData: [{
                id:0,
                option:{
                    color:['#6DE5FF','#7657F0','#00A7FF'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle:{
                        fontSize: 10,
                        color: 'rgba(255, 255, 255, 0.65)'
                    },
                    radar: [
                        {
                            indicator: [
                                {text: '综合能效服务', max: 800},
                                {text: '分布式清洁能源服务', max: 800},
                                {text: '专属电动汽车', max: 800},
                                {text: '商业模式', max: 800},
                                {text: '供冷供热供电多能服务',max: 800},
                                {text: '能源技术', max: 800}
                            ],
                            center: ['17%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }

                        },
                        {
                            indicator: [
                                {text: '综合能效服务', max: 1000},
                                {text: '供冷供热供电多能服务', max: 1000},
                                {text: '专属电动汽车', max: 1000},
                                {text: '商业模式', max: 1000},
                            ],
                            radius: 60,
                            startAngle: 135,
                            shape: 'circle',
                            center: ['50%', '50%'],
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        },
                        {
                            indicator: [
                                {text: '综合能效服务', max: 1000},
                                {text: '分布式清洁能源服务', max: 1000},
                                {text: '专属电动汽车', max: 1000},
                                {text: '商业模式', max: 1000},
                                {text: '供冷供热供电多能服务', max: 1000}
                            ],
                            center: ['83%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'radar',
                            tooltip: {
                                trigger: 'item'
                            },
                            areaStyle: {},
                            data: [
                                {
                                    value: [250, 300, 200, 120, 750, 300],
                                    name: '方案一'
                                }
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 1,
                            areaStyle: {},
                            data: [
                                {
                                    value: [300, 750, 175, 140],
                                    name: '方案二'
                                },
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 2,
                            areaStyle: {},
                            data: [
                                {
                                    name: '方案三',
                                    value: [285, 370, 150, 150, 850],
                                }
                            ]
                        }
                    ]}
            },{
                id:1,
                option:{
                    color:['#6DE5FF','#7657F0','#00A7FF'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle:{
                        fontSize: 10,
                        color: 'rgba(255, 255, 255, 0.65)'
                    },
                    radar: [
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            center: ['17%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }

                        },
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            radius: 60,
                            startAngle: 90,
                            shape: 'circle',
                            center: ['50%', '50%'],
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        },
                        {
                            indicator: [
                                {text: '投资成本', max: 5},
                                {text: '环保性', max: 5},
                                {text: '节能性', max: 5},
                                {text: '安全性', max: 5},
                                {text: '运行能力',max: 5}
                            ],
                            center: ['83%', '50%'],
                            shape: 'circle',
                            radius: 60,
                            startAngle: 90,
                            axisLine:{
                                show: false
                            },
                            splitLine:{
                                show:false
                            },
                            splitArea:{
                                areaStyle:{
                                    color:['rgba(109, 229, 255,0.5)', 'rgba(109, 229, 255,0.4)','rgba(109, 229, 255,0.3)','rgba(109, 229, 255,0.2)','rgba(109, 229, 255,0.1)']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'radar',
                            tooltip: {
                                trigger: 'item'
                            },
                            areaStyle: {},
                            data: [
                                {
                                    value: [4,3,5,4,5],
                                    name: '方案一'
                                }
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 1,
                            areaStyle: {},
                            data: [
                                {
                                    value: [3,5,4,4,4],
                                    name: '方案二'
                                },
                            ]
                        },
                        {
                            type: 'radar',
                            radarIndex: 2,
                            areaStyle: {},
                            data: [
                                {
                                    name: '方案三',
                                    value: [4,5,4,4,5],
                                }
                            ]
                        }
                    ]}
            }],
            tableData: [
                [0.0225,0.0186,0.0198,0.0173,0.005,0.129],
                [0.1675,0.016,0.1521,0.012,0.1912,0.016],
                [0.0079,0.0106,0.0076,0.0072,0.0074,0.0077],
                [0.0043,0.0096,0.0036,0.0065,0.0034,0.0092]
            ]
        },
        yunXingData: {
            zongJieData: [{
                id: 0,
                option: {
                    title: {
                        text:"夏季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 40,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [76, 80],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [92, 72],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [85, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }, {
                id: 1,
                option: {
                    title: {
                        text:"冬季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 0,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [85, 80],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [88, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [76, 73],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }, {
                id: 2,
                option: {
                    title: {
                        text:"过渡季",
                        textStyle:{
                            color:"#FFF",
                            fontSize: 16,
                            fontWeight: 'normal',
                        },
                        textAlign:'center',
                        left: '50%',
                        bottom: 28,
                    },
                    grid:{
                        y:10,
                        y2:89,
                        x: 0,
                        x2:0
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['可再生能源消耗率（%）', '能源效率（%）'],
                        axisLabel:{
                            interval: 0
                        },
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
                        max: 100,
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
                        offset: 12,
                        name:'%'
                    },
                    textStyle: {
                        color: "rgba(255, 255, 255, 0.65)",
                        fontFamily: "PingFangSC-Semibold",
                        fontSize:12
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [65, 84],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#52FFEA'
                                }, {
                                    offset: 1,
                                    color: '#20A0FF'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [76, 69],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFD984'
                                }, {
                                    offset: 1,
                                    color: '#FF775B'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                        {
                            type: 'bar',
                            data: [80, 79],
                            itemStyle: {        // 系列级个性化折线样式
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFC5A'
                                }, {
                                    offset: 1,
                                    color: '#74ED52'
                                }]),//线条渐变色
                            },
                            barWidth: 44
                        },
                    ]
                }
            }],
            xia:{
                leng:[{
                    id:'l0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
            dong:{
                re:[{
                    id:'r0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
            guoDu:{
                leng:[{
                    id:'l0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'l2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'AC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'EC',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'cload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                re:[{
                    id:'r0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'GP', 'HP', 'hload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'r2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'AC', 'EC', 'cload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'GP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'HP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'hload',
                                showSymbol: false,
                                type: 'line',
                                data: [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }],
                dian:[{
                    id:'d0',
                    option:{
                        title: {
                            text:"方案一",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d1',
                    option:{
                        title: {
                            text:"方案二",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                },{
                    id:'d2',
                    option:{
                        title: {
                            text:"方案三",
                            textStyle:{
                                color:"#6DE5FF",
                                fontSize: 16,
                                fontWeight: 'normal',
                            },
                            textAlign:'center',
                            left: '50%',
                            top: 30
                        },
                        grid:{
                            y: 90,
                            x2: 60
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            top: 60,
                            right:60,
                            itemGap:30,
                            textStyle:{
                                color:"rgba(255, 255, 255, 0.65)",
                                fontSize: 10,
                                fontWeight: 'normal',
                            },
                            itemWidth:9,
                            itemHeight:9,
                            data: [ 'BT', 'CHP', 'eload']
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
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
                                name:'BT',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52FFEA'
                                    }, {
                                        offset: 1,
                                        color: '#20A0FF'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'CHP',
                                showSymbol: false,
                                type: 'bar',
                                stack:'BC',
                                data: [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
                                itemStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFD984'
                                    }, {
                                        offset: 1,
                                        color: '#FF775B'
                                    }]),//线条渐变色
                                }
                            },
                            {
                                name:'eload',
                                showSymbol: false,
                                type: 'line',
                                data: [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
                                lineStyle: {        // 系列级个性化折线样式
                                    width: 2,
                                    type: 'solid',
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FFFC5A'
                                    }, {
                                        offset: 1,
                                        color: '#74ED52'
                                    }]),//线条渐变色
                                }
                            }
                        ]
                    }
                }]
            },
        }
    }]
};

export default new Vuex.Store({
    state
});