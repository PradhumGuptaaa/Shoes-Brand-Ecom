// const paypal = require("../../helpers/paypal");
// const Order = require("../../models/Order");
// const Cart = require("../../models/Cart");
// const Product = require("../../models/Product");

// const createOrder = async (req, res) => {
//   try {
//     const {
//       userId,
//       cartItems,
//       addressInfo,
//       totalAmount,
//       cartId,
//     } = req.body;

//     const create_payment_json = {
//       intent: "sale",
//       payer: {
//         payment_method: "paypal",
//       },
//       redirect_urls: {
//         return_url: "http://localhost:5173/paypal-return",
//         cancel_url: "http://localhost:5173/paypal-cancel",
//       },
//       transactions: [
//         {
//           item_list: {
//             items: cartItems.map((item) => ({
//               name: item.title,
//               sku: item.productId,
//               price: item.price.toFixed(2),
//               currency: "USD", // Make sure seller supports this
//               quantity: item.quantity,
//             })),
//           },
//           amount: {
//             currency: "USD",
//             total: totalAmount.toFixed(2),
//           },
//           description: "Purchase from Shoes Store",
//         },
//       ],
//     };

//     paypal.payment.create(create_payment_json, async (error, paymentInfo) => {
//       if (error) {
//         console.error("PayPal Error:", error.response || error);
//         return res.status(500).json({
//           success: false,
//           message: "PayPal payment creation failed.",
//         });
//       }

//       const approvalURL = paymentInfo.links.find(
//         (link) => link.rel === "approval_url"
//       )?.href;

//       // Save order with status "pending"
//       const order = new Order({
//         userId,
//         cartId,
//         cartItems,
//         addressInfo,
//         orderStatus: "pending",
//         paymentMethod: "paypal",
//         paymentStatus: "unpaid",
//         totalAmount,
//         orderDate: new Date(),
//         orderUpdateDate: new Date(),
//       });

//       await order.save();

//       res.status(201).json({
//         success: true,
//         approvalURL,
//         orderId: order._id,
//       });
//     });
//   } catch (e) {
//     console.error("Create Order Error:", e);
//     res.status(500).json({
//       success: false,
//       message: "Something went wrong while creating order.",
//     });
//   }
// };

// const capturePayment = async (req, res) => {
//   try {
//     const { paymentId, payerId, orderId } = req.body;

//     const order = await Order.findById(orderId);
//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order not found",
//       });
//     }

//     // Update payment and status
//     order.paymentStatus = "paid";
//     order.orderStatus = "confirmed";
//     order.paymentId = paymentId;
//     order.payerId = payerId;
//     order.orderUpdateDate = new Date();

//     // Stock deduction
//     for (let item of order.cartItems) {
//       const product = await Product.findById(item.productId);
//       if (!product || product.totalStock < item.quantity) {
//         return res.status(400).json({
//           success: false,
//           message: `Insufficient stock for: ${item.title}`,
//         });
//       }
//       product.totalStock -= item.quantity;
//       await product.save();
//     }

//     await Cart.findByIdAndDelete(order.cartId);
//     await order.save();

//     res.status(200).json({
//       success: true,
//       message: "Order confirmed and payment captured",
//       data: order,
//     });
//   } catch (e) {
//     console.error("Capture Payment Error:", e);
//     res.status(500).json({
//       success: false,
//       message: "Error while confirming payment",
//     });
//   }
// };

// const getAllOrdersByUser = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const orders = await Order.find({ userId });

//     if (!orders.length) {
//       return res.status(404).json({
//         success: false,
//         message: "No orders found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: orders,
//     });
//   } catch (e) {
//     console.error("Get Orders Error:", e);
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch orders",
//     });
//   }
// };

// const getOrderDetails = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const order = await Order.findById(id);

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: order,
//     });
//   } catch (e) {
//     console.error("Get Order Details Error:", e);
//     res.status(500).json({
//       success: false,
//       message: "Error while fetching order",
//     });
//   }
// };

// module.exports = {
//   createOrder,
//   capturePayment,
//   getAllOrdersByUser,
//   getOrderDetails,
// };


const paypal = require("../../helpers/paypal");
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      totalAmount,
      cartId,
    } = req.body;

    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:5173/paypal-return",
        cancel_url: "http://localhost:5173/paypal-cancel",
      },
      transactions: [
        {
          item_list: {
            items: cartItems.map((item) => ({
              name: item.title,
              sku: item.productId,
              price: item.price.toFixed(2),
              currency: "USD", // currency must be supported
              quantity: item.quantity,
            })),
          },
          amount: {
            currency: "USD",
            total: totalAmount.toFixed(2),
          },
          description: "Purchase from Shoes Store",
        },
      ],
    };

    paypal.payment.create(create_payment_json, async (error, paymentInfo) => {
      if (error) {
        console.error("PayPal Error:", error.response || error);
        return res.status(500).json({
          success: false,
          message: "PayPal payment creation failed.",
        });
      }

      const approvalURL = paymentInfo.links.find(
        (link) => link.rel === "approval_url"
      )?.href;

      // Save order with status "pending"
      const order = new Order({
        userId,
        cartId,
        cartItems,
        addressInfo,
        orderStatus: "pending",
        paymentMethod: "paypal",
        paymentStatus: "unpaid",
        totalAmount,
        orderDate: new Date(),
        orderUpdateDate: new Date(),
      });

      await order.save();

      res.status(201).json({
        success: true,
        approvalURL,
        orderId: order._id,
      });
    });
  } catch (e) {
    console.error("Create Order Error:", e);
    res.status(500).json({
      success: false,
      message: "Something went wrong while creating order.",
    });
  }
};

const capturePayment = async (req, res) => {
  try {
    const { paymentId, payerId, orderId } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // ⚠️ IMPORTANT: Call PayPal to execute the payment
    paypal.payment.execute(paymentId, { payer_id: payerId }, async (error, payment) => {
      if (error) {
        console.error("PayPal Execute Error:", error.response || error);
        return res.status(500).json({
          success: false,
          message: "Failed to capture PayPal payment",
          error: error.response,
        });
      }

      // Payment executed successfully, now confirm order
      order.paymentStatus = "paid";
      order.orderStatus = "confirmed";
      order.paymentId = paymentId;
      order.payerId = payerId;
      order.orderUpdateDate = new Date();

      // Stock deduction
      for (let item of order.cartItems) {
        const product = await Product.findById(item.productId);
        if (!product || product.totalStock < item.quantity) {
          return res.status(400).json({
            success: false,
            message: `Insufficient stock for: ${item.title}`,
          });
        }
        product.totalStock -= item.quantity;
        await product.save();
      }

      await Cart.findByIdAndDelete(order.cartId);
      await order.save();

      res.status(200).json({
        success: true,
        message: "Order confirmed and payment captured",
        data: order,
      });
    });
  } catch (e) {
    console.error("Capture Payment Error:", e);
    res.status(500).json({
      success: false,
      message: "Error while confirming payment",
    });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId });

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    console.error("Get Orders Error:", e);
    res.status(500).json({
      success: false,
      message: "Could not fetch orders",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (e) {
    console.error("Get Order Details Error:", e);
    res.status(500).json({
      success: false,
      message: "Error while fetching order",
    });
  }
};

module.exports = {
  createOrder,
  capturePayment,
  getAllOrdersByUser,
  getOrderDetails,
};
