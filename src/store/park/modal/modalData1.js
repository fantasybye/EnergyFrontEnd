const modalData1 = [
    {
        name: "经济性最优方案（方案一）",
        imgNo: "1-0",
        labelData:[
            {
                name: "投资费用",
                value: "842",
                unit: "万元"
            },
            {
                name: "回收年限",
                value: "7.75",
                unit: "年"
            },
            {
                name: "单位碳排放",
                value: "0.1785",
                unit: "kg/kWh"
            }
        ]
    },
    {
        name: "环保性最优方案（方案二）",
        imgNo: "1-1",
        labelData:[
            {
                name: "投资费用",
                value: "1753",
                unit: "万元"
            },
            {
                name: "回收年限",
                value: "10.83",
                unit: "年"
            },
            {
                name: "单位碳排放",
                value: "0.1539",
                unit: "kg/kWh"
            }
        ]
    },
    {
        name: "经济环保均衡方案（方案三）",
        imgNo: "1-2",
        labelData:[
            {
                name: "投资费用",
                value: "1629",
                unit: "万元"
            },
            {
                name: "回收年限",
                value: "8.65",
                unit: "年"
            },
            {
                name: "单位碳排放",
                value: "0.1626",
                unit: "kg/kWh"
            }
        ]
    },
    {
        single:[
            {
                id:"1-0",
                name:"综合能效(%)",
                value:[75.23,113.24,90.56]
            },
            {
                id:"1-1",
                name:"单位碳排放(kg/kWh)",
                value:[0.1785,0.1539,0.1626]
            },
            {
                id:"1-2",
                name:"终端电能比(%)",
                value:[62.78,72.25,71.76]
            }
        ],
        double:[
            {
                id:"1-3",
                name:"投资费用对比(万元)",
                value:[842,1753,1629]
            },
            {
                id:"1-4",
                name:"回收年限对比(年)",
                value:[7.75,10.83,8.65]
            }
        ]
    }
]

export default modalData1;