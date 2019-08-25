(function () {
    var mongoose = require('mongoose');
    var user = mongoose.model('User');
    /**
     * Function to execute the create query to create the users.
     * @param {*} data user data
     * @param {*} callback callback function.
     */
    exports.createUser = function (data, callback) {
        user.create(data).then((response) => {
            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };

    /**
     * Funtion to find the user from collections.
     * @param {*} query condition or expression to find the user from collection.
     * @param {*} callback callback function
     */
    exports.findUser = function (query, callback) {
        user.findOne(query, callback);
    }

    /**
     * Function to execute the update query by user ID
     * @param {*} id user id
     * @param {*} data user data which we need to update.
     */
    exports.updateUserById = function (id, data, callback) {
        user.findByIdAndUpdate({
            _id: id
        }, data, (err, response) => {
            callback(err, response);
        });
    }

    /**
     * Function to execute the update query.
     * @param {*} query Condition or filter to find the user.
     * @param {*} data data which we need to update.
     * @param {*} options 
     */
    exports.updateUser = function (query, data, options, callback) {
        user.findOneAndUpdate(query, data, options, (err, response) => {
            callback(err, response);
        });
    }

    exports.deleteUser = function (query, callback) {
        user.deleteOne(query, callback);
    }

})()