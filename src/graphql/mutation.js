
const User = require('../database/models/User')
const Patient = require('../database/models/Patient')

Mutation = {

    addUser: async(_,{input})=>{
        
       return await new User(input).save()
    },
    addPatient: async (_,{input})=>{
      
      
        return await  new Patient(input).save()
    },
    updatePatient: async(_,{input})=>{

       
      console.log(input)
        const oldPatient = await Patient.findById(input._id)
      
        const fields = Object.keys(input)

        
        fields.forEach(element =>
        {
            oldPatient[element] = input[element]
        });

      return  await  oldPatient.save()
    },
    deletePatient: async(_,{_id}) =>{

        // in Future Delete everyThing
        await Patient.deleteOne({_id})
        
        return true
    }
}


module.exports = Mutation