const User = require('../database/models/User')
const Patient = require('../database/models/Patient')
Query = {
    users: async () =>
    {
        return await User.find({})
    },
    login: async (p, {userName,password}) =>
    {
        
       
        return await User.login(userName, password)
    },
    patient: async (p, {id}) =>{


        return await Patient.findOne({id})
    }

}

module.exports = Query