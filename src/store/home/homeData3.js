import echarts from "echarts";

const homeData3 = {
    id: 3,
    value:"扬州大学(高邮)现代农业科教示范园区",
    text:[
        "学校年内具有明确的寒暑假周期特性,因而长时间尺度上学校负荷具有明显的阶段性和间歇性.",
        "学校冬季有采暖需求, 夏季有供冷需求,还具有饮用热水需求."
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
                    fontSize: 36,
                    fontWeight: 'normal',
                },
                textAlign:'center',
                left: '50%',
                top: 30,
            },
            grid:{
                y:160
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: 95,
                itemGap:32,
                textStyle:{
                    color:"rgba(255, 255, 255, 1)",
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
                    fontSize: 28,
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
                max:1.0,
                axisLabel: {
                    fontSize: 28,
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
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "PingFangSC-Semibold",
                fontSize:28
            },
            series: [
                {
                    name: '逐时电负荷特征系数',
                    type: 'line',
                    data: [0.25,0.26,0.25,0.28,0.26,0.25,0.36,0.46,0.53,0.56,0.52,0.43,0.36,0.35,0.37,0.48,0.53,0.51,0.53,0.56,0.54,0.43,0.34,0.26,0.24,0.24],
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
                    data: [0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.12,0.14,0.16,0.15,0.15,0.16,0.15,0.14,0.15,0.14,0.12,0.06,0.05,0.05,0.05,0.05,0.05],
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
                    data: [0.06,0.06,0.06,0.07,0.06,0.07,0.06,0.07,0.06,0.08,0.19,0.17,0.18,0.18,0.18,0.19,0.2,0.19,0.18,0.18,0.19,0.18,0.17,0.07 ,0.06,0.06],
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

export default homeData3