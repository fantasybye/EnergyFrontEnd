const modalData0 = [
    {
        name: "经济性最优方案（方案一）",
        imgNo: "0-0",
        labelData:[
            {
                name: "投资费用",
                value: "1232",
                unit: "万元"
            },
            {
                name: "回收年限",
                value: "10.42",
                unit: "年"
            },
            {
                name: "单位碳排放",
                value: "0.1875",
                unit: "kg/kWh"
            }
        ]
    },
    {
        name: "环保性最优方案（方案二）",
        imgNo: "0-1",
        labelData:[
            {
                name: "投资费用",
                value: "1985",
                unit: "万元"
            },
            {
                name: "回收年限",
                value: "14.23",
                unit: "年"
            },
            {
                name: "单位碳排放",
                value: "0.1521",
                unit: "kg/kWh"
            }
        ]
    },
    {
        name: "经济环保均衡方案（方案三）",
        imgNo: "0-2",
        labelData:[
            {
                name: "投资费用",
                value: "1736",
                unit: "万元"
            },
            {
                name: "回收年限",
                value: "11.42",
                unit: "年"
            },
            {
                name: "单位碳排放",
                value: "0.1612",
                unit: "kg/kWh"
            }
        ]
    },
    {
        single:[
            {
                id:"0-0",
                name:"综合能效(%)",
                value:[84.53,198.98,126.67]
            },
            {
                id:"0-1",
                name:"单位碳排放(kg/kWh)",
                value:[0.1875,0.1521,0.1612]
            },
            {
                id:"0-2",
                name:"终端电能比(%)",
                value:[47.63,56.87,53.09]
            }
        ],
        double:[
            {
                id:"0-3",
                name:"投资费用对比(万元)",
                value:[1232,1985,1736]
            },
            {
                id:"0-4",
                name:"回收年限对比(年)",
                value:[10.42,14.32,11.42]
            }
        ]
    }
]

export default modalData0;