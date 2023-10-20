// Path: /user

const User = require("../models/User");
const hbsHelper = require("../../util/hbs");

class UserController {
    // [GET] /
    async get(req, res, next) {
        const users = await User.find();
        res.render("contents/user", {
            users: hbsHelper.toBasicArray(users),
        });
    }

    // [GET] /:id
    async getById(req, res, next) {
        const id = req.params.id;
        const user = await User.findById(id);
        res.render("contents/update", {
            user: hbsHelper.toBasicObject(user),
        });
    }

    // [GET] /create
    create(req, res, next) {
        res.render("contents/create");
    }

    // [POST] /create
    async post(req, res, next) {
        const user = { ...req.body };
        const newUser = new User(user);
        newUser.save();
        res.redirect("/user");
    }

    // [PATCH] /:id
    async patch(req, res, next) {
        const id = req.params.id;
        const updatedUser = req.body;
        await User.findByIdAndUpdate(id, updatedUser);
        res.redirect("/user");
    }

    // [DELETE] /:id
    async delete(req, res, next) {
        const id = req.params.id;
        await User.findByIdAndDelete(id);
        res.redirect("/user");
    }
}

module.exports = new UserController();
