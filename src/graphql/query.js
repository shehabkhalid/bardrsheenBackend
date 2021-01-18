const User = require('../database/models/User')
const Patient = require('../database/models/Patient')
Query = {
    users: async () =>
    {
        return await User.find({})
    },
    login: async (p, { userName, password }) =>
    {
        return await User.login(userName, password)
    },
    patient: async (p, { id }) =>
    {
        return await Patient.findById( id )
    },
    search: async (p, { searchInput }) =>
    {
        if (searchInput[0] >= '0' && searchInput[0] <= '9')
            return await Patient.find({ barcode: { $regex: searchInput, $options: 'm' } }).limit(20);

        else
            return await Patient.find({ name: { $regex: searchInput, $options: 'm' } }).limit(20);
    }

}

module.exports = Query