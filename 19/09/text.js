var arr1 = [{
    "province": "广东省",
    "children": [{
        "city": "东莞市",
        "children": [{
            "orgName": "广东-尚迪",
            "children": [{
                "text": "刘屋巷无人门店",
                "value": "刘屋巷无人门店"
            }, {
                "text": "唯佳无人门店",
                "value": "唯佳无人门店"
            }, {
                "text": "自营铺机投放",
                "value": "自营铺机投放"
            }, {
                "text": "生产自营测试区",
                "value": "生产自营测试区"
            }]
        }, {
            "orgName": "广东-智仁实业",
            "children": [{
                "text": "万科小区",
                "value": "万科小区"
            }, {
                "text": "翠景小区",
                "value": "翠景小区"
            }, {
                "text": "智仁内部",
                "value": "智仁内部"
            }]
        }, {
            "orgName": "广东-迪品名坊",
            "children": [{
                "text": "迪品名坊-桥头门店",
                "value": "迪品名坊-桥头门店"
            }]
        }, {
            "orgName": "广东-华兰海",
            "children": [{
                "text": "内部厂区",
                "value": "内部厂区"
            }]
        }, {
            "orgName": "东莞-益果超市",
            "children": [{
                "text": "益果-东城分区",
                "value": "益果-东城分区"
            }]
        }, {
            "orgName": "东莞-聚篮子",
            "children": [{
                "text": "聚篮子-东城分区",
                "value": "聚篮子-东城分区"
            }]
        }, {
            "orgName": "东莞-塘厦明德电线",
            "children": [{
                "text": "塘厦明德饭堂",
                "value": "塘厦明德饭堂"
            }]
        }, {
            "orgName": "东莞顺新贸易",
            "children": [{
                "text": "向上派骏捷篮球馆",
                "value": "向上派骏捷篮球馆"
            }]
        }, {
            "orgName": "东莞-赛小西",
            "children": [{
                "text": "赛西维学校",
                "value": "赛西维学校"
            }]
        }, {
            "orgName": "东莞-远梦家居",
            "children": [{
                "text": "牛山远梦工厂",
                "value": "牛山远梦工厂"
            }]
        }, {
            "orgName": "东莞-和万众科技",
            "children": [{
                "text": "常平山水雅居",
                "value": "常平山水雅居"
            }, {
                "text": "和万众内部",
                "value": "和万众内部"
            }]
        }]
    }, {
        "city": "深圳市",
        "children": [{
            "orgName": "深圳-华强北",
            "children": [{
                "text": "华南城-傲基公司",
                "value": "华南城-傲基公司"
            }, {
                "text": "华强北-无人门店",
                "value": "华强北-无人门店"
            }]
        }, {
            "orgName": "深圳-约范信息",
            "children": [{
                "text": "约范-南山分区",
                "value": "约范-南山分区"
            }]
        }]
    }, {
        "city": "广州市",
        "children": [{
            "orgName": "广州-增城",
            "children": [{
                "text": "增城-合汇门店",
                "value": "增城-合汇门店"
            }]
        }, {
            "orgName": "广州-安华汇",
            "children": [{
                "text": "越秀区中军集团",
                "value": "越秀区中军集团"
            }, {
                "text": "安华汇七楼金加利小吃店",
                "value": "安华汇七楼金加利小吃店"
            }, {
                "text": "安华汇六楼无人微超",
                "value": "安华汇六楼无人微超"
            }]
        }]
    }, {
        "city": "佛山市",
        "children": [{
            "orgName": "广东-利达隆",
            "children": [{
                "text": "山水桃",
                "value": "山水桃"
            }, {
                "text": "南海碧桂园",
                "value": "南海碧桂园"
            }, {
                "text": "佛山金域南湾",
                "value": "佛山金域南湾"
            }]
        }]
    }]
}, {
    "province": "福建省",
    "children": [{
        "city": "泉州市",
        "children": [{
            "orgName": "福建-泉州",
            "children": [{
                "text": "泉州-展示样机",
                "value": "泉州-展示样机"
            }]
        }]
    }]
}, {
    "province": "上海市",
    "children": [{
        "city": "上海市",
        "children": [{
            "orgName": "上海-人工智能展会",
            "children": [{
                "text": "上海浦东新区",
                "value": "上海浦东新区"
            }]
        }]
    }]
}]

var arr2 = ["运营总部", "江西尚迪", "东莞-聚篮子", "唯佳内部测试", "越秀区中军集团", "增城-合汇门店", "刘屋巷无人门店", "常平山水雅居", "赛西维学校", "广东-华兰海", "向上派骏捷篮球馆", "广东-迪品名坊", "山水桃", "内部厂区", "安华汇七楼金加利小吃店", "东莞-益果超市", "唯佳无人门店", "深圳-华强北", "聚篮子-东城分区", "塘厦明德饭堂", "东莞-远梦家居", "东莞-塘厦明德电线", "东莞-唯佳电子", "益果-东城分区", "东莞-湘华餐饮", "广东-利达隆", "深圳-约范信息", "塘厦明德工厂", "自营铺机投放", "东莞顺新贸易", "东莞-和万众科技", "上海浦东新区", "华南城-傲基公司", "东莞-赛小西", "广州-增城", "约范支付分-龙岗分区", "和万众内部", "华强北-无人门店", "南海碧桂园", "广东-尚一", "牛山远梦工厂", "约范-南山分区", "利达隆支付分-上线测试", "广东-尚迪", "上海-人工智能展会", "迪品名坊-桥头门店", "生产自营测试区", "华西工地", "佛山金域南湾", " 自行批发选购", "安华汇六楼无人微超", "广州-安华汇", "供应商"]

function processAreaOrgList(areaOrgList, ownOrgList) {
    let pickerInfo = []
    //循环最外层
    for (let province of areaOrgList) {
        //循环市级数据
        for (let city of province.children) {
            //循环区级数据
            for (let org of city.children) {
                //判断如果区级数据里在数据库数据中不存在后给新数组赋值新数据
                if (ownOrgList.indexOf(org.orgName) !== -1) {
                    if (!pickerInfo.length) {
                        pickerInfo.push({
                            "text": province.province,
                            "value": province.province,
                            "children": [{
                                "text": city.city,
                                "value": city.city,
                                "children": [{
                                    "text": org.orgName,
                                    "value": org.orgName,
                                    "children": org.children
                                }]
                            }]
                        })
                    } else {
                        pickerInfo.map(item1 => {
                            if (item1.value !== province.province) {
                                pickerInfo.push({
                                    "text": province.province,
                                    "value": province.province,
                                    "children": [{
                                        "text": city.city,
                                        "value": city.city,
                                        "children": [{
                                            "text": org.orgName,
                                            "value": org.orgName,
                                            "children": org.children
                                        }]
                                    }]
                                })
                            } else {
                                const flag = item1.children.every(item2 => {
                                    return item2.value !== city.city
                                })
                                if (flag) {
                                    item1.children.push({
                                        "text": city.city,
                                        "value": city.city,
                                        "children": [{
                                            "text": org.orgName,
                                            "value": org.orgName,
                                            "children": org.children
                                        }]
                                    })
                                } else {
                                    item1.children.map(item2 => {
                                        if (item2.value === city.city) {
                                            item2.children.push({
                                                "text": org.orgName,
                                                "value": org.orgName,
                                                "children": org.children
                                            })
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            }
        }
    }
    console.log(`pickerInfo`,pickerInfo )
}
processAreaOrgList(arr1, arr2)