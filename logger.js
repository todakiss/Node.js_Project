var winston = require('winston');
var moment = require('moment');

var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            colorize: true
        })/*,
        new winston.transports.DailyRotateFile({
            level: 'debug',
            filename:'app-debug',
            maxsize: 10000*1024,
            datePattern:'.yyyy-MM-dd.log',
            timestamp: function () {
                return moment().format("YYYY-MM-DD HH:mm:ss.SSS");
            }
        })*/
    ]
});

module.exports = logger;