import echarts from "echarts";

const parkData2 = {
    name:"高邮风光产业园",
    brief: [
        "光储充产业园占地约为7700亩，现有企业占地约为3200亩，道路及基础设施占地约为1300亩，规划可用面积约为3200亩，现有符合土地利用规划面积约为1950亩。产业园区的道路情况：甓社路、佛塔路、洞庭湖东路、汤南路、汤北路和园区三路等干道路网络已基本形成，配套美化、绿化、亮化工程，2020年底前将完成洞庭湖路连接工程。园区基础设施完善，供电设施建有220KV的专用变电站2座、110KV的专用变电站；供热设施4座建有国信热电厂，主要管网已完成铺设，目前园区内现有企业基本已接入使用；供水设施方面目前500mm环网供水管道已全覆盖园区；建有安源燃气站，主要管网已完成铺设，可满足企业用气需求。供气情况建有国信热电厂，主要管网已完成铺设，目前园区内现有企业基本已接入使用。园区拥有日处理4.5万吨的污水处理厂一座，及专用日处理1500吨的应急污水处理站一座。"
    ],
    miaoShu:[
        "现有配置：220kV、110kV变电站，国信热电厂，安源燃气站，500mm环网供水管道，污水处理厂，无多能耦合设备。",
        "缺点：电、热、气管线分别建设，无多能联供环节，无法满足用户电热冷一站式用能需求，不能充分消纳分布式可再生能源发电，能源利用效率不高，同时电能替代比例不高，环境污染较大。"
    ],
    fuHeLineData: [{
        id:0,
        option:{
            title: {
                text:"逐时电负荷特征系数",
                textStyle:{
                    color:"#6DE5FF",
                    fontSize: 30,
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
                    data: [0.57,0.57,0.61,0.69,0.69,0.72,0.86,0.83,0.86,0.98,0.99,0.76,0.94,0.88,0.89,0.98,0.86,0.79,0.54,0.51,0.63,0.68,0.73,0.57],
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
                    fontSize: 30,
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
                    data: [0.2,0.25,0.34,0.4,0.53,0.54,0.82 ,1.00 ,0.95 ,0.85 ,0.80 ,0.96 ,1.00 ,1.00 ,0.95 ,0.97 ,0.98 ,0.98 ,0.91 ,0.85 ,0.34,0.23,0.25,0.20],
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
                    fontSize: 30,
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
                    data: [0.2,0.25,0.3,0.45,0.5,0.47,0.63,0.7,0.82,0.73,0.86,0.91,1,0.97,0.84,0.86,0.94,0.93,0.68,0.59,0.46,0.39,0.30 ,0.27],
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
                        fontSize: 30,
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
                    fontSize:18
                },
                series: [
                    {
                        type: 'bar',
                        data: [8718060.8,12798252.8,13305752,1952000,9980342,3298300],
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
                        fontSize: 30,
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
                    right: 50,
                    top: 130,
                    data: ['照明', '空调机组', '冷热源机房', '电梯', '工业用电', '动力及消防'],
                    itemGap: 16,
                    itemWidth: 12,
                    itemHeight: 12,
                    textStyle:{
                        color:"rgba(255, 255, 255, 1)",
                        fontSize: 20,
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
                            {value: 8718060.8, name: '照明'},
                            {value: 12798252.8, name: '空调机组'},
                            {value: 13305752, name: '冷热源机房'},
                            {value: 1952000, name: '电梯'},
                            {value: 9980342, name: '工业用电'},
                            {value: 3298300, name: '动力及消防'},
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
                    text:"投资费用对比",
                    textStyle:{
                        color:"#6DE5FF",
                        fontSize: 30,
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
                        interval: 0,
                        fontSize:18
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
                    fontSize:18
                },
                series: [
                    {
                        type: 'bar',
                        data: [2188,2800,2592],
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
                        fontSize: 30,
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
                        interval: 0,
                        fontSize: 18
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
                    fontSize:18
                },
                series: [
                    {
                        type: 'bar',
                        data: [10.43,14.22,11.23],
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
                    fontSize: 18,
                    color: 'rgba(255, 255, 255, 1)'
                },
                radar: [
                    {
                        indicator: [
                            {text: '电能替代', max: 800},
                            {text: '多能联供', max: 800},
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
                            {text: '电能替代', max: 800},
                            {text: '多能联供', max: 800},
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
                            {text: '电能替代', max: 800},
                            {text: '多能联供', max: 800},
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
                                value: [360,650],
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
                                value: [623,798],
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
                                value: [557,750],
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
                    fontSize: 18,
                    color: 'rgba(255, 255, 255, 1)'
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
                                value: [3,3,5,4,5],
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
                                value: [4,5,4,5,4],
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
            [0.0268,0.0174,0.013,0.0173,0.032,0.132],
            [0.1785,0.013,0.1539,0.012,0.1826,0.014],
            [0.0089,0.0092,0.0078,0.0072,0.0075,0.0075],
            [0.0045,0.0087,0.0034,0.0065,0.0023,0.0089]
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
                        fontSize:24,
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
                        interval: 0,
                        fontSize: 24
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
                        data: [78, 80],
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
                        data: [90.5, 71],
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
                        data: [82.5, 74],
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
                        fontSize:24,
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
                        interval: 0,
                        fontSize: 24
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
                        data: [71, 80],
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
                        data: [88, 70],
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
                        data: [73, 72],
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
                        fontSize:24,
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
                        interval: 0,
                        fontSize: 24
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
                        data: [62, 82.5],
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
                        data: [79, 69],
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
                        data: [76, 78],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [847,484,605,726,605,484,605,1573,2299,2359.5,2541,2420,3025,3146,3025,3025,2783,3206.5,2541,1573,1452,1331,968,605
                            ],
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
                            data: [439,463,758,482,439,832,453,712,496,551,527,741,668,704,788,761,617,517,781,752,829,470,703,752],
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
                            data: [1100,1450,1750,1950,2750,2650,3450,3500,3600,3550,3900,4000,4050,4550,4750,5000,4900,4550,4350,4050,3950,1650,1100,1000],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [1084.8,361.2,632.4,529.2,319.2,721.2,416.4,1408.8,2568,2188.8,2800.8,2277.6,3061.2,3408,2679.6,3115.2,3037.2,3230.4,2217.6,1470,1501.2,1075.2,794.4,798],
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
                            data: [220,166,851,305,490,751,540,466,652,521,365,570,776,482,638,476,494,475,1015,647,823,764,760,629],
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
                            data: [1100,1450,1750,1950,2750,2650,3450,3500,3600,3550,3900,4000,4050,4550,4750,5000,4900,4550,4350,4050,3950,1650,1100,1000],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [1004.3,446.6,243.1,518.1,526.9,456.5,728.2,1403.6,1984.4,2445.3,2220.9,2266,2703.8,3183.4,3007.4,2954.6,2361.7,2651,2583.9,1103.3,1254,1279.3,738.1,431.2],
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
                            data: [547,223,626,356,592,1069,729,676,292,590,374,1014,677,725,911,1010,338,418,493,725,703,326,766,755],
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
                            data: [1100,1450,1750,1950,2750,2650,3450,3500,3600,3550,3900,4000,4050,4550,4750,5000,4900,4550,4350,4050,3950,1650,1100,1000],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [0,0,640,800,480,790.4,1088,1260.8,1648,784,552,80,80,193.6,555.2,528,587.2,896,664,416,80,184,209.6,675.2],
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
                            data: [0,720,720,1800,2520,5400,6120,5840,6280,7200,7200,7200,7200,7200,6640,7360,7720,6280,3600,2160,1080,720,360,0],
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
                            data: [4800,4880,4640,5360,5760,6000,6320,6480,7120,7920,7600,7760,8000,8000,7600,7920,7840,7200,6320,4880,4800,5040,4960,5040],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [0,0,641.25,737.25,427.5,778.5,1032,1251,1348.5,794.25,467.25,53.25,128.25,139.5,490.5,463.5,571.5,871.5,687.75,339.75,8.25,181.5,198,558.75],
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
                            data: [0,857.7,423,477.9,1662.57,4157.01,4584.06,5109.39,6151.86,4475.25,4450.68,4917.51,4901.13,4581.72,5591.43,6362.46,5638.23,4446,2127.6,531.9,92.7,137.7,279.9,0],
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
                            data: [4800,4880,4640,5360,5760,6000,6320,6480,7120,7920,7600,7760,8000,8000,7600,7920,7840,7200,6320,4880,4800,5040,4960,5040],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [0,0,597.75,786,403.5,801,951.75,1185.75,1020,768,588.75,300,150,161.25,521.25,453,507.75,868.5,579,411.75,129.75,162.75,172.5,660.75],
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
                            data: [0,491.4,54.6,1037.4,2391.48,3920.28,4733.82,4684.68,6158.88,5378.1,5662.02,5918.64,5951.4,5257.98,6688.5,6775.86,7720.44,6710.34,3549,2167.62,354.9,616.98,649.74,0],
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
                            data: [4800,4880,4640,5360,5760,6000,6320,6480,7120,7920,7600,7760,8000,8000,7600,7920,7840,7200,6320,4880,4800,5040,4960,5040],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [600,300,300,450,750,1350,1800,3450,5250,3450,3450,3450,3300,3450,3450,3450,3525,3525,2700,1500,1350,1200,750,300],
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
                            data: [331.2,585.6,153.6,343.2,72,470.4,237.6,526.8,540,552,478.8,345.6,373.2,277.2,127.2,86.4,459.6,42,379.2,534,234,433.2,350.4,6],
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
                            data: [1260,1560,1860,1980,3120,3900,5100,6000,5700,5400,5880,5940,5100,5280,4860,5400,5100,5400,5280,5700,3780,2400,1260,1440],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [789,114,223.5,544.5,516,1327.5,2020.5,3369,5403,4050,3666,3495,3430.5,3625.5,2100,2040,3115.5,3084,2353.5,1828.5,1143,1191,421.5,736.5],
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
                            data: [9,1132.5,177,532.5,450,534,679.5,384,378,1072.5,841.5,337.5,691.5,729,142.5,153,457.5,240,901.5,775.5,612,604.5,523.5,457.5],
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
                            data: [1260,1560,1860,1980,3120,3900,5100,6000,5700,5400,5880,5940,5100,5280,4860,5400,5100,5400,5280,5700,3780,2400,1260,1440],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [150,304.5,160.5,54,822,976.5,1791,3180,5385,3819,3567,3477,3349.5,3832.5,3250,3441,3228,3493.5,3141,1059,1737,1623,318,96],
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
                            data: [168,260,17,55,93,500,441,358,264,607,117,126,101,45,194,27,314,25,79,682,219,241,511,148],
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
                            data: [1260,1560,1860,1980,3120,3900,5100,6000,5700,5400,5880,5940,5100,5280,4860,5400,5100,5400,5280,5700,3780,2400,1260,1440],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [0,0,450,300,450,367.5,244.5,373.5,574.5,24,402,228,294,720,645,28.5,322.5,85.5,58.5,529.5,660,469.5,454.5,465],
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
                            data: [0,520,520,1300,1820,3900,4420,4940,5200,5200,5200,5200,5200,5200,5200,4680,3640,3380,2600,1560,780,520,260,0],
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
                            data: [4640,6160,5120,6000,5280,5040,5920,6800,7680,7760,7680,7680,7680,7360,7840,7760,7680,8000,7920,5760,5120,4880,4800,5040],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [0,0,570,207.5,15,875,422.5,802.5,327.5,25,707.5,27.5,245,930,1090,700,1152.5,135,652.5,905,1107.5,962.5,1492.5,1187.5],
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
                            data: [0,429,987,2103,2676,3900,4443,6186,6468,6045,6099,6072,6270,5145,5280,5400,3408,3693,2604,1494,801,888,606,576],
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
                            data: [4640,6160,5120,6000,5280,5040,5920,6800,7680,7760,7680,7680,7680,7360,7840,7760,7680,8000,7920,5760,5120,4880,4800,5040],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [0,0,801,16.5,216,219,478.5,495,169.5,255,564,160.5,133.5,274.5,978,187.5,475.5,139.5,328.5,178.5,750,375,675,807],
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
                            data: [0,1005.2,686,660.8,1926.4,4947.6,3953.6,5639.2,5642,5272.4,5952.8,5558,5574.8,5751.2,4785.2,4225.2,3080,3556,2808.4,2108.4,546,912.8,716.8,0],
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
                            data: [4640,6160,5120,6000,5280,5040,5920,6800,7680,7760,7680,7680,7680,7360,7840,7760,7680,8000,7920,5760,5120,4880,4800,5040],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [3.2,352,384,321.6,94.4,169.6,665.6,2393.6,3616,3704,4040,3763.2,5766.4,6134.4,5152,5478.4,5059.2,4401.6,3761.6,2648,1492.8,1705.6,745.6,320],
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
                            data: [143.4,134.4,240,150,24,240,144,525,368.4,317.4,220.2,554.4,448.8,331.8,726,535.2,416.4,328.8,613.2,555,332.4,144.6,458.4,481.2],
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
                            data: [1400,1750,2100,3150,3500,3290,4410,4900,5740,5110,6020,6370,7000,6790,5880,6020,6580,6510,4760,4130,3220,2730,2100,1890],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [288,576,288,0,288,576,288,2016,3168,3312,3744,3456,4896,5184,4896,4896,4320,4320,3744,2016,1728,1440,576,288],
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
                            data: [166.8,195.6,549.6,218.4,166.8,638.4,183.6,494.4,235.2,301.2,272.4,529.2,441.6,484.8,585.6,553.2,380.4,260.4,577.2,542.4,480,204,483.6,542.4],
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
                            data: [1400,1750,2100,3150,3500,3290,4410,4900,5740,5110,6020,6370,7000,6790,5880,6020,6580,6510,4760,4130,3220,2730,2100,1890],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [17.5,732.5,133.75,247.5,125,841.25,111.25,2035,2510,2800,2923.75,2868.75,4542.5,4413.75,4396.25,4055,4012.5,4038.75,3557.5,1386.25,1346.25,1557.5,792.5,88.75],
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
                            data: [2,314,200,133,110,400,465,1088,440,595,187,903,484,919,1024,643,571,668,1058,820,854,154,932,1120],
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
                            data: [1400,1750,2100,3150,3500,3290,4410,4900,5740,5110,6020,6370,7000,6790,5880,6020,6580,6510,4760,4130,3220,2730,2100,1890],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [576,288,288,432,720,1296,1728,3744,3600,3600,3312,3312,3168,3312,3312,3312,3384,3384,2592,1440,1296,1152,720,288],
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
                            data: [276,488,128,286,60,392,198,439,450,460,399,288,311,231,106,72,383,35,316,445,195,361,292,5],
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
                            data: [1200,1500,2040,2400,3180,3240,4920,6000,5700,5100,4800,5760,6000,6000,5700,5820,5880,5880,5460,5100,2040,1380,1500,1200],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [783.3,171.15,539.7,362.25,977.55,1959.3,2658.6,3990,4972.8,4985.4,4833.15,4776.45,4742.85,4870.95,4732.35,4584.3,5246.85,4632.6,3931.2,2311.05,2160.9,1522.5,1273.65,120.75],
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
                            data: [232.5,594.5,39.5,319,96,345.5,171,458.5,546,427,531,214.5,380,279,16,70.5,297.5,147.5,323.5,437.5,60,245.5,178,62],
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
                            data: [1200,1500,2040,2400,3180,3240,4920,6000,5700,5100,4800,5760,6000,6000,5700,5820,5880,5880,5460,5100,2040,1380,1500,1200],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [785.52,164.88,344.16,628.56,817.2,1095.12,1676.16,3819.6,3766.32,3489.84,3184.56,3337.92,3362.4,3113.28,3180.24,3100.32,3349.44,3552.48,2533.68,1470.24,1224.72,1000.8,840.96,283.68],
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
                            data: [325.5,638,207.5,410.5,142.5,486.5,253.5,529,384,376,330,408,329,195,218.5,42,393.5,90.5,466,356.5,63,509.5,409,18.5],
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
                            data: [1200,1500,2040,2400,3180,3240,4920,6000,5700,5100,4800,5760,6000,6000,5700,5820,5880,5880,5460,5100,2040,1380,1500,1200],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [0,0,480,360,480,582,718.8,378,168,370.8,255.6,218.4,408,370.8,656.4,280.8,404.4,135.6,452.4,284.4,679.2,556.8,456,133.2],
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
                            data: [0,620,620,1550,2790,4030,5270,5890,5890,5890,6200,5518,5177,4836,4092,4960,5177,5332,4270,4040,2790,620,310,0],
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
                            data: [4560,4560,4880,5520,5520,5760,6880,6640,6880,7840,7920,6080,7520,7040,7120,7840,6880,6320,4320,4080,5040,5440,5840,4560],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [0,0,302.4,458.4,244.8,752.4,651.6,265.2,247.2,411.6,471.6,199.2,379.2,135.6,726,472.8,186,109.2,634.8,104.4,856.8,736.8,638.4,121.2],
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
                            data: [0,1374,213,681,2844,4692,4407,6447,5781,5439,5442,5997,5775,4923,3771,4395,5874,5655,4069,3803,3492,339,993,0],
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
                            data: [4560,4560,4880,5520,5520,5760,6880,6640,6880,7840,7920,6080,7520,7040,7120,7840,6880,6320,4320,4080,5040,5440,5840,4560],
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
                            fontSize:24,
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
                            fontSize: 18,
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
                            data: [0,0,530.4,544.8,436.8,601.2,788.4,409.2,57.6,186,457.2,391.2,508.8,529.2,418.8,57.6,277.2,104.4,670.8,418.8,530.4,544.8,588,214.8],
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
                            data: [0,933,492,744,3042,4458,5541,5349,5925,5700,5820,4800,4596,4200,3132,5142,5100,5259,3658,3055,1917,1374,258,0],
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
                            data: [4560,4560,4880,5520,5520,5760,6880,6640,6880,7840,7920,6080,7520,7040,7120,7840,6880,6320,4320,4080,5040,5440,5840,4560],
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

export default parkData2