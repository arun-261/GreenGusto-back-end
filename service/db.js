const mongoose =  require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/thunder')

const Data = mongoose.model('Data',{
    uname:String,
    pswd:String,
    email:String,
    phone:String
})

const Plant = mongoose.model('Plant',{
    name:String,
    type:String,
    SuitableLocation:String,
    image:String

})

module.exports={
    Data,
    Plant
}

// mongodb://127.0.0.1:27017/