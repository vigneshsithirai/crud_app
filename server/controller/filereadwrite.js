var fileService = require('../service/filereadwrite');

class CsvReadWrite {
    constructor(data) {
        this.username = data.username || '';
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.phone = data.phone || '';
    }
}

function writeCsvFile(req, res) {
    var body = req.body;
    if (!body.data) {
        res.status(400).send({
            error: 'Bad request'
        });
        return;
    }
    var data = new CsvReadWrite(body.data);
    fileService.writeCSVFile([data], (error, response) => {
        if (error) {
            res.status(400).send(error);
            return;
        }
        if (response) {
            res.status(201).send(response);
            return;
        }
    });
}

function readCsvFile(req, res) {
    var params = req.params;
    var filename = params.filename;
    fileService.readCsvFile(filename, (error, response) => {
        if (error) {
            res.status(400).send(error);
            return;
        }
        if (response) {
            res.status(200).send(response);
            return;
        }
    });
}

exports.writeCSVFile = writeCsvFile;
exports.readCsvFile = readCsvFile;