const userModel = require('../models/user.model');


module.exports.createUser = async ({
    fullName,
    password, 
    email
}) => {
    if(!fullName || !fullName.firstname|| !password || !email) {
        throw new Error('All field are required');
    }
    const user = userModel.create({
        fullName,
        email, 
        password
    })

    return user;
}
