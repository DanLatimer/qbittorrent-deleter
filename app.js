"use strict";
var _ = require('lodash');
var moment = require('moment');
var RSVP = require('rsvp');
var request = require('request')

console.log('--------------------------------------------')
console.log('Torrent Deleter Started');
console.log('--------------------------------------------\n')

const torrentSHA = process.argv[2]

request.post({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'http://127.0.0.1:9000/command/delete',
    body: `hashes=${torrentSHA}`
}, (error, response, body) => console.log(`${response.statusCode} ${response.statusMessage}`))