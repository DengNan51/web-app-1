var xlsx = require('node-xlsx');
var fs = require('fs');
var path = require('path')

let listData1 = []
let listData2 = []
var sheets = xlsx.parse(path.resolve('server/public/excel/old.xlsx'));
sheets.forEach(value => {
    if (value.name === 'Sheet1') {
        value.data.forEach(value1 => {
            listData1.push({
                number: value1[0],
                name: value1[1],
                amount: value1[2]
            })
        })
    } else if (value.name === 'Sheet2') {
        value.data.forEach(value1 => {
            listData2.push({
                number: value1[0],
                name: value1[1],
                amount: value1[2]
            })
        })
    }
})


var data = []

for (let i = 0; i < listData1.length; i++) {
    let number = listData1[i].number;
    let name = listData1[i].name;
    let amount = parseFloat(listData1[i].amount);
    for (let j = 0; j < listData2.length; j++) {
        let number1 = listData2[j].number;
        let name1 = listData2[j].name;
        let amount1 = parseFloat(listData2[j].amount);

        if (number == number1 && name == name1) {
            if (amount.toFixed(2).toString() !== amount1.toFixed(2).toString()) {
                console.log(amount + "-----" + amount1)
                data.push([
                    number,
                    name,
                    amount,
                    null,
                    number1,
                    name1,
                    amount1
                ])
            }
        }
    }
}

console.log(data)

let buffer = xlsx.build([
    {
        name: 'Sheet1',
        data: data
    }
]);
fs.writeFileSync(path.resolve('server/public/excel/new.xlsx'), buffer, {'flag': 'w'});//生成excel the_content是excel的名字，大家可以随意命名

