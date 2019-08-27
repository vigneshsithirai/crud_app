const csv = require('csv-parser')
const fs = require('fs')
const results = [];

var dir = 'uploads';

var csvObjectWriter = require('csv-writer').createObjectCsvWriter;
var csvWriter = csvObjectWriter({
    path: 'uploads/user.csv',
    header: [
        {
            id: 'username',
            title: 'Username'
        },
        {
            id: 'firstname',
            title: 'Firstname'
        },
        {
            id: 'lastname',
            title: 'Lastname'
        },
        {
            id: 'phone',
            title: 'Phone'
        }
    ]
});

/**\
 * Funtion to write the data in CSV file.
 */
function writeCSVFile(data, callback) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    csvWriter.writeRecords(data).then(() => {
        callback(null, data);
    }, (error) => {
        callback(error, null);
    });
}

function readCsvFile(filename, callback) {
    if (!filename || (filename && !fs.existsSync(dir + '/' + filename))) {
        callback({
            error: 'File ' + filename + ' does not exists'
        }, null);
        return;
    }
    var filepath = dir + '/' + filename;
    var results = [];
    try {
        fs.createReadStream(filepath)
            .pipe(csv())
            .on('data', (row) => {
                results.push(row);
            })
            .on('end', () => {
                callback(null, results);
            });
    } catch (error) {
        callback(error, null);
    }
}

exports.writeCSVFile = writeCSVFile;
exports.readCsvFile = readCsvFile;