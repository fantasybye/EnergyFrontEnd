import echarts from "echarts";
import fuHeLineDataGenerator from "@/store/park/Generator/fuHeLineDataGenerator";
import yunXingDataGenerator from "@/store/park/Generator/yunXingDataGenerator";
import fangAnBarDataGenerator from "@/store/park/Generator/fangAnBarDataGenerator";

const nengHaoBar = [3428910,5918208, 10510305, 715000, 15001612,4125300];

const fuHeData =[
    [0.56, 0.56, 0.57, 0.58, 0.6, 0.65, 0.68, 0.74, 0.77, 0.79, 0.8, 0.78,
        0.77, 0.79, 0.8, 0.81, 0.79, 0.77, 0.72, 0.67, 0.63, 0.6, 0.57, 0.56],
    [0.09, 0.09, 0.1, 0.1, 0.12, 0.15, 0.38, 0.54, 0.57, 0.58, 0.59, 0.59,
        0.57, 0.52, 0.45, 0.43, 0.39, 0.37, 0.37, 0.36, 0.3, 0.26, 0.21, 0.09],
    [0.12, 0.11, 0.1, 0.1, 0.1, 0.11, 0.13, 0.2, 0.25, 0.3, 0.36, 0.4,
        0.47, 0.49, 0.5, 0.48, 0.43, 0.35, 0.26, 0.24, 0.2, 0.14, 0.12, 0.1]
];
const fuHeLineData = fuHeLineDataGenerator(fuHeData);

const fangAnDataSet = {
    bar:[[1980, 1660, 1730],[10.43, 14.22, 11.23]],
    fenlei: {
        radar: [[250, 300, 230, 100, 600, 250], [300, 750, 250, 200], [280, 320, 350, 120, 650]]
    },
    zong: {
        radar: [[5,4,5,4,5], [3,3,4,4,4], [4,4,4,4,5]]
    }
}
const tableData =[
    [0.0225,0.0186,0.0198,0.0173,0.005,0.129],
    [0.1675,0.016,0.1521,0.012,0.1912,0.016],
    [0.0079,0.0106,0.0076,0.0072,0.0074,0.0077],
    [0.0043,0.0096,0.0036,0.0065,0.0034,0.0092]
];
const fangAnData = fangAnBarDataGenerator(fangAnDataSet, tableData);

const yunXingDataSet = {
    zongJie:[
        [[76, 80],[92, 72],[85, 73]],
        [[85, 80],[88, 73],[76, 73]],
        [[65, 84],[76, 69],[80, 79]]
    ],
    xia:{
        leng: [[
            [700,650,650,600,550,650,850,850,900,880,920,1060,2050,2150,2130,2070,2100,1950,1750,1750,850,770,750,700],
            [1204,1040,914,897,871,927,1209,2526,3172,3757,4640,5379,5235,5529,5811,5532,4783,3703,2373,1942,2079,1352,1167,935],
            [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760]
        ],[
            [400,0,0,0,0,0,500,1400,1600,1950,2200,2180,2180,2150,2130,2070,2100,1600,800,530,400,300,380,350],
            [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
            [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760]
        ],[
            [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
            [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
            [1920,1760,1600,1520,1600,1680,2080,3440,4240,4800,5680,6480,7360,7840,8000,7760,6960,5680,4240,3840,3120,2320,2000,1760],
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
            [0,50,50,57,28,283,455,780,988,1040,1248,1365,1660,1800,1700,1400,1248,860,560,323,314,250,184,143,],
            [898,880,750,692,583,469,472,686,930,1246,1485,1835,2130,2165,2363,2160,2106,1880,1520,1433,1221,850,740,605,],
            [960,880,800,800,800,880,1040,1600,2000,2400,2880,3200,3760,3920,4000,3840,3440,2800,2080,1920,1600,1120,960,800,],
        ],[
            [80,80,101,110,120,150,175,436,660,980,1080,1065,1053,1120,1190,1200,1200,1180,650,535,450,350,196,84],
            [1429,1585,1484,1446,1417,1608,1450,1939,2583,2667,3341,4268,5178,5850,5781,5612,4667,4070,3268,3154,2631,1973,1564,1388],
            [960,880,800,800,800,880,1040,1600,2000,2400,2880,3200,3760,3920,4000,3840,3440,2800,2080,1920,1600,1120,960,800,],
        ],[
            [700,400,500,600,650,600,780,1050,1250,1650,2360,2650,2960,3550,3468,3325,3060,2430,1650,1350,900,650,550,500],
            [1101,1293,1090,796,812,1016,1140,2333,2923,3103,3146,3677,4250,4098,4478,4313,3792,3205,2559,2309,2166,1510,1415,1154],
            [960,880,800,800,800,880,1040,1600,2000,2400,2880,3200,3760,3920,4000,3840,3440,2800,2080,1920,1600,1120,960,800,],
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
const yunXingData = yunXingDataGenerator(yunXingDataSet);

const parkData0 = {
    name: "江苏扬州化学工业园区",
    brief: ["2003年10月,扬州、仪征两级政府围绕江苏省纵深推进沿江开发、加快打造宁扬沿江化工产业带的战略部署,市县联动,合作开发,在扬州西南部沿江地带的仪征市境内全面启动了扬州化工园区建设.2006年5月,国家发改委正式批准设立省级扬州化工园区,是江苏省仅有的三家专业化工园区之一.经过10多年的开发建设,扬州化工园区区位优势逐步放大,自然禀赋日益彰显,生产要素加速集聚,产业特色更加鲜明,发展空间不断拓展,未来前景更为广阔.",
        "扬州化工园区区位条件优越、交通运输便捷.在国家实施的《长江三角洲地区区域规划》中,扬州是沿江和沿运河两带中的重要城市,接受着上海、南京两大都市圈的辐射.扬州化工园区交通运输便捷.扬州化工园区产业特色鲜明.区内集聚了中石化仪征化纤、中石油昆仑天然气、中化国际、中国华电集团、美国普莱克斯、英国博纳、日本东丽、住友精化、大洋日酸、韩国锦湖韩亚、新加坡凯发集团、台湾远东集团、东联化学、大连化工、香港建滔集团、珠海恒基达鑫、辽宁奥克化学、江苏扬农集团等一批境内外知名的石化大企业,初步形成了以烯烃、芳烃、盐化工为龙头,石油化工、精细化工、化工新材料、石化物流等四大产业集聚发展的态势.特别是石化物流业发展迅速,目前,区内投产、在建储罐250万立方米,总罐容位居江苏省沿江各港口第一,获批保税储罐50.3万立方米.扬州长江石化物流中心分别被江苏省发改委、经信委命名为“江苏省现代服务业集聚区”、 “江苏省重点物流基地”,中心内扬州长江石化交易市场拥有完备的电子交易平台,已有30多家贸易公司进驻."],
    miaoShu:[
        "现有配置：锅炉制热，无余热回收系统，采用传统化工工艺，制冷机和水泵未采用变频节能技术，普通照明灯具，无能源监控系统.",
        "缺点：热电能源耦合度低，余热回收率不高、能效率低，传统化工工艺对资源的利用率低、污染大，水泵和制冷机的能效低且存在安全隐患，普通照明灯具能耗大、对自然光利用率低."
    ],
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
    fuHeLineData: fuHeLineData,
    fangAnData:fangAnData,
    yunXingData: yunXingData
}

export default parkData0