import echarts from "echarts";

const parkData4 = {
    name:"扬州玖龙湖医养健康城",
    brief: ["近年来,扬州牢固树立“以人民为中心”的发展思想,坚持以“颐养城市”建设为目标,把养老服务工作纳入全市经济社会发展大局进行统筹谋划,制定出台了一系列加快推动养老保障体系、养老服务产业发展等方面的政策文件;坚持以“颐养社区”建设为抓手,大力推进“公园+养老”、“医疗+养老”、“小区+养老”,全面推行10分钟养老服务圈,努力构建居家为基础、社区为依托、机构为补充、医养相结合的养老服务体系,有效满足了老年人的养老服务需求;积极鼓励和引导社会力量参与,不断优化和提升养老服务供给,目前已先后有20多家品牌养老服务企业、70多家嵌入式养老护理机构落户扬州,全市养老服务产业呈现出健康快速发展的良好态势,其中新建的玖龙湖医养健康城是医养中心的特色代表之一.",
        "玖龙湖医养健康城在古运河畔高旻寺旁,居家养老文化养生,医养融合机构服务,乐活享受居家养老,毗邻扬州南部体育公园 西临古运河风光带,北望高旻寺,扬子津生态园 ,九龙湖公园,凤栖湖公园三湖环绕,怡情颐景、生态宜居,多元化经营、高品质服务.扬州玖龙湖医养健康城项目项目位于扬州经济技术开发区临港新城内,占地180亩,建筑面积约40万平方米,总投资约22亿元,项目定位“医、康、养、商”一体化的综合体,其中,项目中的医院按三级医院标准建设,承担扬州经济技术开发区区级医院的功能,并通过与苏北人民医院的合作,借此以高水平的医疗服务带动养老的整体服务质量,是扬州首家真正做到医养结合完整业态的项目.",
        "玖龙湖医养健康城总建筑面积399000平方米.分为A、B两个地块,A地块主要建设三级甲等医院:1600张病床的三甲医院(含600张康复病床),附属颐养护理中心;B地块主要为配套商业服务建筑.A地块:医院主体、附属颐养护理中心部分及附属用房部分分为医院主体、附属颐养护理中心部分两部分.医院主体设计为:地上十七层,地下建筑二层,内设门诊部、急诊部、住院部、医技科室、行政管理、保障系统、院内生活、科研用房、教学用房、设备用房、地下车库等功能.附属颐养护理中心地上五栋,分别为四栋十六层,一栋十八层,一栋二十二层以及二层裙房组成,内设不同规格的老年养护单元和活动中心、行政中心等.总建筑面积为323500平方米,地上建筑面积为220300平方米,地下建筑面积为103200平方米.B地块:商业配套部分设计为,地上二十层,地下建筑二层.总用地面积20188.63平方米,总建筑面积75500平方米,其中地上建筑面积为56500平方米,地下建筑面积为19000平方米.其中医护人员及颐养护理中心工作人员人数大约为1200人,配套商业服务人员大约为800人."],
    miaoShu:[
        "现有配置：普通照明灯具、中央空调、燃气锅炉采暖、无能源监控系统",
        "缺点：1.由于老年活动中心主要集中在建筑物内，对室外光源的利用率较低，耗电量大；2.中央空调缺少变频调控，会造成较大的能量损失，且存在一定程度上的安全隐患；3.从电能替代的角度看，燃气采暖产生较大的环境污染。"
    ],
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
                    data: [0.31,0.31,0.38,0.38,0.34,0.32,0.42,0.49,0.56,0.5,0.5,0.57,0.63,0.58,0.59,0.59,0.61,0.51,0.65,0.58,0.40 ,0.31,0.29,0.32],
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
                        0.57, 0.52, 0.45, 0.43, 0.39, 0.37, 0.37, 0.36, 0.3, 0.26, 0.21, 0.09],
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
                        type: 'bar',
                        data: [1430,1750,1620],
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
                        data: [6.7,9.3,8.9],
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
                            {text: '太阳能节能灯具', max: 800},
                            {text: '空调末端改造', max: 800},
                            {text: '电采暖', max: 800},
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
                            {text: '太阳能节能灯具', max: 800},
                            {text: '空调末端改造', max: 800},
                            {text: '电采暖', max: 800},
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
                            {text: '太阳能节能灯具', max: 800},
                            {text: '空调末端改造', max: 800},
                            {text: '电采暖', max: 800},
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
                                value: [323,589,518],
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
                                value: [614,654,482],
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
                                value: [568,689,363],
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
                    data: ['能源效率（%）'],
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
                        data: [75],
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
                        data: [72],
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
                        data: [75],
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
                    data: ['能源效率（%）'],
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
                        data: [80],
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
                        data: [70],
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
                        data: [72],
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
                    data: ['能源效率（%）'],
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
                        data: [83],
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
                        data: [70],
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
                        data: [77],
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
};


export default parkData4