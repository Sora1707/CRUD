const userRouter = require("./user.route");

module.exports = function router(app) {
    app.use("/user", userRouter);

    // Default route
    // app.use("/", function (req, res, next) {
    //     console.log("Invalid route");
    //     res.send("Hello World");
    // });
};
