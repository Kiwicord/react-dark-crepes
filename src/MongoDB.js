// 
// Code ist noch nicht fertig da ich in letzer zeit wenigus bockus habus aber morgen mach ich weiter lul
// 

const mongoose = require('mongoose')
const mongoUri = 'mongodb+srv://kiwious:iyCnc4g0DIv1XyUL@cluster0.ju2ct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    profileImgLink: String,
    friendsCount: Number
})

async function run() {
    const user = new userSchema({ 
        id: 1,
        username: 'Kiwious',
        password: 'heheheha',
        profileImgLink: 'https://pornhub.com/kids',
        friendsCount: 1
    })
    
    await user.save()
    console.log(user)
}

run()