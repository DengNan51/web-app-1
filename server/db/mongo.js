const mongoose = require('mongoose');
const {host, pass, user} = require('../../config/db.js')

mongoose.connect(host).then(value => {
    console.log('---connect db success---')
});


// const Schema = mongoose.Schema;
//
// const Cat = mongoose.model('Cat',
//     new Schema({
//         username: {
//             type: String,
//             required: true
//         },
//         password: {
//             type: String,
//             required: true
//         },
//         emil: {
//             type: String,
//             required: false,
//         }
//     }));
//
//
// const kitty = new Cat({
//     username: 'dengnan',
//     password: '123456',
//     emil: 'deng.nan@razer.com'
// });
//
// kitty.save().then((err, ert) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(ert)
//     }
// });

// Cat.find({
//     username: 'dengnan'
// },(err, data)=>{
//     console.log(data)
// })

// Cat.remove({
//     username: 'dengnan'
// }, (err, ert) => {
//     console.log(ert)
// })




