import echarts from "echarts";

const nengHaoBar = [3428910,5918208, 10510305, 715000, 15001612,4125300];
const fuHeData =[
        [0.56, 0.56, 0.57, 0.58, 0.6, 0.65, 0.68, 0.74, 0.77, 0.79, 0.8, 0.78,
        0.77, 0.79, 0.8, 0.81, 0.79, 0.77, 0.72, 0.67, 0.63, 0.6, 0.57, 0.56],
        [0.09, 0.09, 0.1, 0.1, 0.12, 0.15, 0.38, 0.54, 0.57, 0.58, 0.59, 0.59,
        0.57, 0.52, 0.45, 0.43, 0.39, 0.37, 0.37, 0.36, 0.3, 0.26, 0.21, 0.09],
        [0.12, 0.11, 0.1, 0.1, 0.1, 0.11, 0.13, 0.2, 0.25, 0.3, 0.36, 0.4,
        0.47, 0.49, 0.5, 0.48, 0.43, 0.35, 0.26, 0.24, 0.2, 0.14, 0.12, 0.1]
    ]
const newParkData0 = {
    name: "江苏扬州化学工业园区",
    brief: ["2003年10月,扬州、仪征两级政府围绕江苏省纵深推进沿江开发、加快打造宁扬沿江化工产业带的战略部署,市县联动,合作开发,在扬州西南部沿江地带的仪征市境内全面启动了扬州化工园区建设.2006年5月,国家发改委正式批准设立省级扬州化工园区,是江苏省仅有的三家专业化工园区之一.经过10多年的开发建设,扬州化工园区区位优势逐步放大,自然禀赋日益彰显,生产要素加速集聚,产业特色更加鲜明,发展空间不断拓展,未来前景更为广阔.",
        "扬州化工园区区位条件优越、交通运输便捷.在国家实施的《长江三角洲地区区域规划》中,扬州是沿江和沿运河两带中的重要城市,接受着上海、南京两大都市圈的辐射.扬州化工园区交通运输便捷.扬州化工园区产业特色鲜明.区内集聚了中石化仪征化纤、中石油昆仑天然气、中化国际、中国华电集团、美国普莱克斯、英国博纳、日本东丽、住友精化、大洋日酸、韩国锦湖韩亚、新加坡凯发集团、台湾远东集团、东联化学、大连化工、香港建滔集团、珠海恒基达鑫、辽宁奥克化学、江苏扬农集团等一批境内外知名的石化大企业,初步形成了以烯烃、芳烃、盐化工为龙头,石油化工、精细化工、化工新材料、石化物流等四大产业集聚发展的态势.特别是石化物流业发展迅速,目前,区内投产、在建储罐250万立方米,总罐容位居江苏省沿江各港口第一,获批保税储罐50.3万立方米.扬州长江石化物流中心分别被江苏省发改委、经信委命名为“江苏省现代服务业集聚区”、 “江苏省重点物流基地”,中心内扬州长江石化交易市场拥有完备的电子交易平台,已有30多家贸易公司进驻."],
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
                    y2:90,
                    x: 100,
                    x2:0
                },
                color:['#7F56FC', '#52FFEA'],
                legend:{
                    icon:'rect',
                    data:['新增企业', '原有企业'],
                    orient: 'vertical',
                    top: 150,
                    left: 110,
                    textStyle:{
                        color:"rgba(255, 255, 255, 0.65)",
                        fontSize: 12,
                        fontWeight: 'normal',
                    }
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
                        stack: '新增企业',
                        name: '原有企业',
                        data: [3428910,	5918208, 10510305, 715000, 15001612,4125300],
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
                    },
                    {
                        type: 'bar',
                        stack: '新增企业',
                        name: '新增企业',
                        data: nengHaoBar.map(item => item * 0.2),
                        itemStyle: {        // 系列级个性化折线样式
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#7F56FC'
                            }, {
                                offset: 1,
                                color: '#3E42CC'
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
                color:['#6638F0', '#5CC9F5', '#ABE41B', "#B9B9B9", '#0080FF','#FFA07A','#DC143C'],
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
                    data: ['新增企业','照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
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
                            {value: 6125300, name: '新增企业'},
                            {value: 3428910, name: '照明'},
                            {value: 5918208, name: '空调机组'},
                            {value: 10510305, name: '冷热源机房'},
                            {value: 715000, name: '电梯'},
                            {value: 15001612, name: '工业用电'},
                            {value: 4125300, name: '动力及消防'}
                        ],
                        center: [190, 230]
                    }
                ]
            }
        }
    },
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
                y: 80,
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
            color:['#6DE5FF', '#7F56FC'],
            legend:{
                icon:'rect',
                data:['原有企业','新增企业后'],
                // orient: 'vertical',
                top: 40,
                right: 65,
                textStyle:{
                    color:"rgba(255, 255, 255, 0.65)",
                    fontSize: 12,
                    fontWeight: 'normal',
                }
            },
            series: [
                {
                    showSymbol: false,
                    type: 'line',
                    name: '原有企业',
                    data: fuHeData[0],
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
                },
                {
                    showSymbol: false,
                    type: 'line',
                    name: '新增企业后',
                    data: fuHeData[0].map(item => item*(1 + 0.2 * Math.random())),
                    lineStyle: {        // 系列级个性化折线样式
                        width: 2,
                        type: 'solid',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#7F56FC'
                        }, {
                            offset: 1,
                            color: '#3E42CC'
                        }]),//线条渐变色
                    },
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
                y: 80,
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
            color:['#6DE5FF', '#7F56FC'],
            legend:{
                icon:'rect',
                data:['原有企业','新增企业后'],
                // orient: 'vertical',
                top: 40,
                right: 65,
                textStyle:{
                    color:"rgba(255, 255, 255, 0.65)",
                    fontSize: 12,
                    fontWeight: 'normal',
                }
            },
            series: [
                {
                    name: '原有企业',
                    showSymbol: false,
                    type: 'line',
                    data: fuHeData[1],
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
                },
                {
                    name:'新增企业后',
                    showSymbol: false,
                    type: 'line',
                    data: fuHeData[1].map(item => item*(1 + 0.2 * Math.random())),
                    lineStyle: {        // 系列级个性化折线样式
                        width: 2,
                        type: 'solid',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#7F56FC'
                        }, {
                            offset: 1,
                            color: '#3E42CC'
                        }]),//线条渐变色
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
                y: 80,
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
            color:['#6DE5FF', '#7F56FC'],
            legend:{
                icon:'rect',
                data:['原有企业','新增企业后'],
                // orient: 'vertical',
                top: 40,
                right: 65,
                textStyle:{
                    color:"rgba(255, 255, 255, 0.65)",
                    fontSize: 12,
                    fontWeight: 'normal',
                }
            },
            series: [
                {
                    name: '原有企业',
                    showSymbol: false,
                    type: 'line',
                    data: fuHeData[2],
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
                },
                {
                    name: '新增企业后',
                    showSymbol: false,
                    type: 'line',
                    data: fuHeData[2].map(item => item*(1 + 0.2 * Math.random())),
                    lineStyle: {        // 系列级个性化折线样式
                        width: 2,
                        type: 'solid',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#7F56FC'
                        }, {
                            offset: 1,
                            color: '#3E42CC'
                        }]),//线条渐变色
                    }
                }
            ]
        }
    }],
    fangAnData:{
        barData: [{
            id:0,
            option: {
                title: {
                    text:"投资费用对比",
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
                        name:'原有企业',
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
                    },
                    {
                        name:'新增企业后',
                        type: 'bar',
                        data: [2260, 1992, 2076],
                        itemStyle: {        // 系列级个性化折线样式
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#7F56FC'
                            }, {
                                offset: 1,
                                color: '#3E42CC'
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
}

export default newParkData0