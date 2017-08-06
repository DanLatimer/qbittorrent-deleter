"use strict";
var _ = require('lodash');
var request = require('request');
var moment = require('moment');
var RSVP = require('rsvp');

console.log('--------------------------------------------')
console.log('Torrent Deleter Started');
console.log('--------------------------------------------\n')

const torrentSHA = process.argv[2]