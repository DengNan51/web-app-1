var LoginRouter = require('../../model');

const register = async function (req, res) {
    console.log(process.env.DB_PASS);
    console.log(process.env.VUE_APP_TITLE)

    let index = new LoginRouter({
        username: '1',
        password: '2',
        emil: 'deng.nan@razer.com'
    });
    index.save().then(value => {
        if (value) {
            console.log(value)
            res.status(200).json({
                code: 200,
                data: value
            })
        }
    })
}

const find = async function (req, res) {
    LoginRouter.find({
        username: '1',
    }).then(value => {
        if (value) {
            // console.log(value)
            res.status(200).json({
                code: 200,
                data: value
            })
        }
    })
}

module.exports = {
    register, find
}