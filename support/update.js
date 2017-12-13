#!/usr/bin/env node

'use strict';

/*eslint-disable no-console*/

var p        = require('path');
var fs       = require('fs');
var _        = require('lodash');
var emojiIndex = require('emoji-mart').emojiIndex;
var mapKeys = require('lodash').mapKeys;
var mapValues = require('lodash').mapValues;
var invertBy = require('lodash').invertBy;

var keyedEmojis = mapKeys(emojiIndex.emojis, function (value) {
  // e.g. emoji regex \u{1f92f}
  return '\\u{' + value.unified + '}';
});
var nativeEmojies = mapValues(keyedEmojis, function (value) {
  return value.native;
});

console.log(nativeEmojies);
fs.writeFileSync(p.join(__dirname, '../lib/data/native_full.json'), JSON.stringify(nativeEmojies, null, 2), 'utf8');

var emojies = mapValues(emojiIndex.emojis, function (value) {
  return value.native;
});

console.log(emojies);
fs.writeFileSync(p.join(__dirname, '../lib/data/full.json'), JSON.stringify(emojies, null, 2), 'utf8');

var shortcuts = invertBy(emojiIndex.emoticons);
console.log('NEED MANUALY UPDATE IN FILE: ./lib/shortcuts.js');
console.log(shortcuts);

var visible = fs.readFileSync(p.join(__dirname, 'visible.txt'), 'utf8');

var emoji_light = _.omitBy(emojies, function (val) {
  return visible.indexOf(val.replace(/\uFE0F/g, '')) < 0;
});
fs.writeFileSync(p.join(__dirname, '../lib/data/light.json'), JSON.stringify(emoji_light, null, 2), 'utf8');
