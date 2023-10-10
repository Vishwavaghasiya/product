const { User } = require("../model");

/**create user */
const createUser = async (reqBody) => {
    return User.create(reqBody);
}

/**get user list */
const getUserList = async (req, res) => {
    return User.find();
}

/**get user details by id */
const getUserById = async (userId) => {
    return User.findById(userId);
}

/**update user */
const updateUser = async (userId, updateBody) => {
    return User.findByIdAndUpdate(userId, { $set: updateBody });
}

/**delete user */
const deleteUser = async (userId) => {
    return User.findByIdAndDelete(userId);
}

module.exports = {
    createUser,
    getUserList,
    getUserById,
    updateUser,
    deleteUser
}