const express = require("express");
const { userController } = require("../../controller")

const router = express.Router();

/**create user */
router.post(
    "/createUser",
    userController.createUser
);

/**get user list */
router.get(
    "/getUserList",
    userController.getUserList
);

/**get user details */
router.get(
    "/getUserDetails/:userId",
    userController.getUserDetails
);

/**update user */
router.put(
    "/updateUser/:userId",
    userController.updateUser
);

/**delete user */
router.delete(
    "/deleteUser/:userId",
    userController.deleteUser
);

module.exports = router;