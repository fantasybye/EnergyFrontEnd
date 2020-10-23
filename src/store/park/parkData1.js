import echarts from "echarts";
import fuHeLineDataGenerator from "@/store/park/Generator/fuHeLineDataGenerator";
import yunXingDataGenerator from "@/store/park/Generator/yunXingDataGenerator";
import fangAnBarDataGenerator from "@/store/park/Generator/fangAnBarDataGenerator";

const nengHaoBar = [5448788,7998908, 10510305, 715000, 15001612,4125300];
const fuHeData = [
    [0.09,0.08,0.05,0.09,0.08,0.28,0.42,0.48,0.49,0.39,0.38,0.40 ,0.30 ,0.29,0.31,0.35,0.39,0.45,0.49,0.43,0.40 ,0.24,0.25,0.10],
    [0.11,0.09,0.12,0.11,0.13,0.14,0.30 ,0.69,0.74,0.72,0.62,0.62,0.68,0.52,0.53,0.54,0.46,0.42,0.45,0.37,0.34,0.23,0.25,0.10],
    [0.2,0.2,0.2,0.2,0.2,0.23,0.3,0.32,0.33,0.34,0.36,0.33,0.34,0.33,0.33,0.33,0.33,0.333,0.28,0.25,0.21,0.2,0.20 ,0.2]
];
let fuHeLineData = fuHeLineDataGenerator(fuHeData);
const fangAnDataSet = {
    bar:[[840,1750, 1620],[7.75,10.83,8.65]],
    fenlei: {
        radar: [[460,0,0,380], [523,454,331,442], [457,454,309,400]]
    },
    zong: {
        radar: [[3,3,5,4,5], [4,5,4,5,4], [4,4,4,4,5]]
    }
}
const tableData =[
    [0.0268,0.0174,0.013,0.0173,0.032,0.132],
    [0.1785,0.013,0.1539,0.012,0.1826,0.014],
    [0.0089,0.0092,0.0078,0.0072,0.0075,0.0075],
    [0.0045,0.0087,0.0034,0.0065,0.0023,0.0089]
];
let fangAnData = fangAnBarDataGenerator(fangAnDataSet, tableData);


const yunXingDataSet = {
    zongJie:[
        [[80, 78],[90, 72],[83, 75]],
        [[70, 80],[89, 71],[74, 72]],
        [[62, 83],[79, 70],[77, 77]]
    ],
    xia:{
        leng: [[
            [2520,2275,2625,2800,2448,2482,2590,2962.5,2850,2946.5,3150,3060,3349.5,3105,2970,3150,3285,2932.5,3278.5,3000,2962.5,2346,2470,2387],
            [439,463,758,482,439,832,453,712,496,551,527,741,668,704,788,761,617,517,781,752,829,470,703,752,],
            [3150,3250,3500,3500,3600,3650,3700,3750,3800,4150,4200,4250,4350,4500,4500,4500,4500,4250,4150,4000,3950,3450,3250,3100]
        ],[
            [2142,2665,2765,3080,2736,2518.5,2220,2587.5,2850,3237,3696,3315,3784.5,3510,2835,3870,3240,2805,2656,2560,3357.5,2242.5,2210,2697],
            [439,463,758,482,439,832,453,712,496,551,527,741,668,704,788,761,617,517,781,752,829,470,703,752],
            [3150,3250,3500,3500,3600,3650,3700,3750,3800,4150,4200,4250,4350,4500,4500,4500,4500,4250,4150,4000,3950,3450,3250,3100]
        ],[
            [2583,2080,2695,2345,3240,2701,2220,3300,2318,3071,3612,3527.5,3915,3150,3420,3780,4005,2720,3569,3400,2725.5,3001.5,2892.5,2325],
            [439,463,758,482,439,832,453,712,496,551,527,741,668,704,788,761,617,517,781,752,829,470,703,752],
            [3150,3250,3500,3500,3600,3650,3700,3750,3800,4150,4200,4250,4350,4500,4500,4500,4500,4250,4150,4000,3950,3450,3250,3100]
        ]],
        dian:[[
            [510,550,625,650,1250,1475,2250,2345,2510,2150,1800,1650,1910,1825,2250,2530,2560,2570,2680,2760,2160,1260,630,510],
            [4406,4410,4237,4250,4225,4650,4767,5330,5365,5829,6101,6155,5846,5925,5390,4872,4593,4345,3785,3559,3836,4326,4720,4438],
            [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
        ],[
            [250,250,250,1050,1560,1860,2050,2430,2560,2650,2550,2430,2400,2300,2210,2050,1880,1650,1430,1050,303,250,250,250],
            [4601,4626,4597,3989,3875,4345,4959,5227,5260,5347,5272,5324,5282,5312,5390,5382,5295,5240,5033,5263,5605,5270,4982,4590],
            [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
        ],[
            [200,200,200,1050,1290,1605,2046,2040,1590,936,750,1050,1236,2478,2505,2625,2640,2583,2394,2319,1875,1794,1596,1200],
            [4696,4729,4515,3887,4187,4563,4865,5497,6543,6998,7065,6778,6516,5850,4983,4798,4457,4225,3941,3965,4034,3607,3651,3633],
            [4960,4960,4880,5040,5520,6320,7040,7680,7920,8000,7920,7840,7760,7760,7680,7440,7200,6960,6480,6320,6000,5600,5360,4960],
        ]]
    },
    dong:{
        re:[[
            [396,56,112,303,288,742,2016,2184,2688,2940,2688,2520,2450,2520,2268,2184,1918,1898,1447,1125,613,639,224,394,],
            [1757,1917,1665,2049,4373,5998,5742,5730,4985,4686,4741,5121,5189,4954,4938,4859,5112,4664,4855,4974,4787,3819,3238,1620,],
            [2160,2000,1920,2400,4720,6880,7920,8000,7840,7680,7600,7760,7680,7520,7360,7200,7040,6640,6400,6240,5440,4640,3600,2160,],
        ],[
            [0,508,608,980,1860,2050,2050,1650,1560,1650,2050,2200,2100,2450,2560,2680,2750,2663,2771,2550,1950,1050,312,0,],
            [1993,1456,1116,1295,2761,4659,5827,6154,6198,5930,5395,5377,5508,4926,4740,4390,4240,3883,3458,3603,3377,3391,3095,2038,],
            [2160,2000,1920,2400,4720,6880,7920,8000,7840,7680,7600,7760,7680,7520,7360,7200,7040,6640,6400,6240,5440,4640,3600,2160,],
        ],[
            [125,250,225,330,2352,3050,2965,2865,2950,3050,2965,2865,2753,2802,2991,2835,2650,2561,2303,1850,1135,1089,532,223,],
            [1933,1725,1516,2048,2262,3697,4833,5077,4756,4477,4453,4807,4845,4557,4197,4307,4311,3918,4066,4190,4191,3497,2902,1806,],
            [2160,2000,1920,2400,4720,6880,7920,8000,7840,7680,7600,7760,7680,7520,7360,7200,7040,6640,6400,6240,5440,4640,3600,2160,],
        ]],
        dian:[[
            [12,66,135,204,129,477,675,1680,2200,2500,2500,2500,2488,2580,2500,2500,2500,2500,2430,2160,540,270,309,72,],
            [4655,4650,4568,4490,5055,4700,4669,4348,3974,3946,4257,4673,5122,5285,5437,5264,5177,4926,4273,4051,5190,4768,4304,4550],
            [4800,4800,4880,4880,5200,5360,5520,6080,6320,6560,6880,7360,7680,7920,8000,7920,7840,7520,6880,6400,5760,5200,4800,4720,],
        ],[
            [0,300,300,750,1050,2250,2550,2850,3000,3000,3000,3000,3000,3000,3000,2700,2100,1950,1500,900,450,300,150,0],
            [4683,4471,4516,4104,4065,3035,2784,3147,3276,3391,3843,4201,4502,4867,4941,5063,5598,5549,5380,5347,5284,4839,4556,4647,],
            [4800,4800,4880,4880,5200,5360,5520,6080,6320,6560,6880,7360,7680,7920,8000,7920,7840,7520,6880,6400,5760,5200,4800,4720],
        ],[
            [0,324,350,360,621,1430,1680,2060,2721,2680,2650,2720,2688,2769,2307,2037,2307,2037,1485,1746,1386,1017,860,350],
            [4730,4451,4424,4488,4538,3757,3653,3500,3428,3813,4084,4515,4994,5044,5658,5795,5509,5359,5203,4488,4221,4101,3860,4191],
            [4800,4800,4880,4880,5200,5360,5520,6080,6320,6560,6880,7360,7680,7920,8000,7920,7840,7520,6880,6400,5760,5200,4800,4720],
        ]]
    },
    guoDu:{
        leng:[[
            [720,690,800,670,790,759,1035,1056,1204.5,1173,1242,1303.5,1156,1254,1155,1122,1204.5,1332,924,937.5,714,750,650,770],
            [139,163,458,182,139,532,153,412,196,251,227,441,368,404,488,461,317,217,481,452,400,170,403,452],
            [1000,1000,1000,1000,1000,1150,1500,1600,1650,1700,1800,1650,1700,1650,1650,1650,1650,1665,1400,1250,1050,1000,1000,1000],
        ],[
            [670,810,600,850,600,816.5,1095,1136,1056,1224,1152,1023,1411,1402.5,1056,1369.5,1221,1115.55,1176,800,798,820,730,850],
            [139,163,458,182,139,532,153,412,196,251,227,441,368,404,488,461,317,217,481,452,400,170,403,452],
            [1000,1000,1000,1000,1000,1150,1500,1600,1650,1700,1800,1650,1700,1650,1650,1650,1650,1665,1400,1250,1050,1000,1000,1000],
        ],[
            [710,850,840,690,850,1035,1155,1328,1320,1241,1278,1155,1428,1402.5,1452,1336.5,1122,1481.85,1190,812.5,913.5,800,720,820],
            [139,163,458,182,139,532,153,412,196,251,227,441,368,404,488,461,317,217,481,452,400,170,403,452],
            [1000,1000,1000,1000,1000,1150,1500,1600,1650,1700,1800,1650,1700,1650,1650,1650,1650,1665,1400,1250,1050,1000,1000,1000],
        ]],
        re:[[
            [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
            [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
            [720,720,800,800,960,1200,3040,4320,4560,4640,4720,4720,4560,4160,3600,3440,3120,2960,2960,2880,2400,2080,1680,720,],
        ],[
            [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
            [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
            [720,720,800,800,960,1200,3040,4320,4560,4640,4720,4720,4560,4160,3600,3440,3120,2960,2960,2880,2400,2080,1680,720,],
        ],[
            [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
            [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
            [720,720,800,800,960,1200,3040,4320,4560,4640,4720,4720,4560,4160,3600,3440,3120,2960,2960,2880,2400,2080,1680,720,],
        ]],
        dian:[[
            [0,150,150,562,1012,1462,1912,2137,2650,2850,2760,2670,2505,2340,1980,1800,1877,1935,1912,1575,1012,150,75,0,],
            [4340,4211,4281,3965,3749,3563,3385,3460,3388,3281,3450,3498,3559,3973,4384,4605,4246,4140,3731,3645,3869,4471,4479,4344],
            [4480,4480,4560,4640,4800,5200,5440,5920,6160,6320,6400,6240,6160,6320,6400,6480,6320,6160,5760,5360,5040,4800,4560,4480,],
        ],[
            [0,505,860,1360,1647,2080,2307,2360,2467,2375,2425,2560,2650,2660,2530,2480,2460,2230,2160,1680,1037,742,137,0,],
            [4350,3916,3552,3226,2999,3093,3129,3418,3682,3770,3841,3553,3359,3501,3697,3842,3708,3871,3496,3656,3907,3952,4380,4331],
            [4480,4480,4560,4640,4800,5200,5440,5920,6160,6320,6400,6240,6160,6320,6400,6480,6320,6160,5760,5360,5040,4800,4560,4480,],
        ],[
            [350,330,330,378,393,525,543,1560,1920,2036,2080,2102,2160,2295,2145,2077,2130,2328,2145,1460,1150,498,421,400],
            [3940,4067,4159,4229,4335,4669,4737,4344,4060,4179,4254,4000,3836,3861,4133,4287,4009,3825,3607,3748,3890,4209,4068,3881,],
            [4480,4480,4560,4640,4800,5200,5440,5920,6160,6320,6400,6240,6160,6320,6400,6480,6320,6160,5760,5360,5040,4800,4560,4480,],
        ]]
    }
};
let yunXingData = yunXingDataGenerator(yunXingDataSet);

const parkData1 = {
    name:"仪征大数据产业园",
    brief: ["大数据产业园总规划面积约4平方公里，先期规划约2平方公里，其中产业集聚区1600亩，主要承载数据存储、交互及基于数据支撑的产品" +
    "制造、设施配套等硬件类项目。总部、研发和公寓等配套区600亩，重点建设大数据产业相关的总部、研发及系统、应用开发等软件类项目和公寓等配套设施。预留扩展区900亩。",
    "仪征大数据产业园区的发展方向：大数据存储集聚基地、大数据应用基地、大数据关联装备制造基地。应用配套区联动周边" +
    "产业板块，引入创新载体与平台，通过高品质环境及配套建设吸引区域创新人群。围绕不同层次人群的多元化需求，以优质的生态、生活" +
    "环境“筑巢引凤”吸引高素质人才，以人才吸引企业与生产要素集聚。大数据产业园目前集聚了：腾讯仪征东升云计算数据中心、中星北斗卫星" +
    "遥感产业园、电信云数据中心、中国移动数据中心、梓潇数据中心、云征双路由网络传输系统、" +
    "德国诺德云电机等项目，全部建成后机柜数量达8万台，容纳服务器约120万台。"],
    miaoShu:[
        "现有配置：集中供冷，普通照明灯具，锅炉制热，无能源监控系统，无储能系统。",
        "缺点：清洁能源消纳率低、空气污染大、供能形式单一、能源浪费大。"
    ],
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
                        data: nengHaoBar,
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
                            {value: 5448788, name: '照明'},
                            {value: 7998908, name: '空调机组'},
                            {value: 8316095, name: '冷热源机房'},
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
    fuHeLineData: fuHeLineData,
    fangAnData:{
        barData: fangAnData.barData,
        tableData: fangAnData.tableData,
        radarData: [{
            id:0,
            option:{
                color:['#6DE5FF','#7657F0','#00A7FF'],
                tooltip: {
                    trigger: 'axis'
                },
                textStyle:{
                    fontSize: 16,
                    color: 'rgba(255, 255, 255, 1)'
                },
                radar: [
                    {
                        indicator: [
                            {text: '空调末端变频改造', max: 600},
                            {text: '电能替代', max: 600},
                            {text: '智慧路灯', max: 600},
                            {text: '峰谷储能', max: 600},
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
                            {text: '空调末端变频改造', max: 600},
                            {text: '电能替代', max: 600},
                            {text: '智慧路灯', max: 600},
                            {text: '峰谷储能', max: 600},
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
                            {text: '空调末端变频改造', max: 600},
                            {text: '电能替代', max: 600},
                            {text: '智慧路灯', max: 600},
                            {text: '峰谷储能', max: 600},
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
                                value: fangAnDataSet.fenlei.radar[0],
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
                                value: fangAnDataSet.fenlei.radar[1],
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
                                value: fangAnDataSet.fenlei.radar[2],
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
                    fontSize: 16,
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
                                value: fangAnDataSet.zong.radar[0],
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
                                value: fangAnDataSet.zong.radar[1],
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
                                value: fangAnDataSet.zong.radar[2],
                            }
                        ]
                    }
                ]}
        }],
    },
    yunXingData: yunXingData
};

export default parkData1

