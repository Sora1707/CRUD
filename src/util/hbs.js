const hbsUtil = {
    sum(x, y) {
        return x + y;
    },

    toBasicArray(mongooseArray) {
        return mongooseArray.map(object => hbsUtil.toBasicObject(object));
    },

    toBasicObject(mongooseObject) {
        return mongooseObject.toObject();
    },
};

module.exports = hbsUtil;
