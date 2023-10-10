const { orderService, emailService } = require("../services");

/**create order */
const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;
        const order = await orderService.createOrder(reqBody);

        if (!order) {
            throw new Error("opss...! , something wents wrong !");
        }

        res.status(200).json({
            success: true,
            message: order
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get order list */
const getOrderList = async (req, res) => {
    try {
        const getList = await orderService.getOrderList();
        if (!getList) { throw new Error("Oppss... !, Something wents wrong !!") }

        res.status(200).json({ getList });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

/**get details */
const getOrderDetails = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const getDetails = await orderService.getOrderById(orderId);
        if (!getDetails) {
            throw new Error("Oppss...! , Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "order get successsfully !",
            data: getDetails
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**update order details */
const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId
        const orderExist = await orderService.getOrderById(orderId);
        if (!orderExist) {
            throw new Error("order not found !");
        }

        await orderService.updateOrder(orderId, req.body);

        res.status(200).json({
            success: true,
            message: "order is updated successfully !",
            data: orderExist
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Oppss... ! , Something wents wrong , please try again or later !"
        });
    }
}

/**delete order */
const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orderExists = await orderService.getOrderById(orderId);
        if (!orderExists) {
            throw new Error("order not found !");
        }

        await orderService.deleteOrder(orderId);

        res.status(200).json({
            success: true,
            message: "order record is deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Oppss...! , Something wents wrong , please try again or later !"
        });
    }
}

/**Send mail */
const sendMail = async (req, res) => {
    try {
        const reqBody = req.body;
        const sendMail = await emailService.sendMail(
            reqBody.email,
            reqBody.subject,
            reqBody.text
        );

        if (!sendMail) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "Email send successfully !"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createOrder,
    getOrderList,
    getOrderDetails,
    updateOrder,
    deleteOrder,
    sendMail
}