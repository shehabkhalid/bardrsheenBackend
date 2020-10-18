const mongoose = require('mongoose')


const patientSchema = new mongoose.Schema({


    barcode: {
        type: Number,
        default: -1,
        unique: true

    },
    nationality: {
        type: String,
        default: 'Egyptian'
    },
    socialStatus: {
        type: String,

    },
    job: {

        type: String
    },

    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
    ,
    yearOfBirth: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        validate(value)
        {

            if (value !== 'Male' && value !== 'Female')
                throw Error('gender must be "Male" or "Female" ')
        },
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    insurance: {
        type: String,
        default: 'none'

    },

})
// patientSchema.statics.getPatients = async ()=>{



//     const patients =  await Patient.find({}).select('name , _id')
//     return patients;


// }
patientSchema.pre('save', async function (next)
{

    const patient  =  this;
    patient.yearOfBirth =  new Date().getFullYear() -  patient.yearOfBirth
    next()

})

patientSchema.pre('find', async function(next){

    const patient =  this

    patient.yearOfBirth =  new Date().getFullYear() -  patient.yearOfBirth


    next()

    

})
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;