// Emoticons -> Emoji mapping.
//
// (!) Some patterns skipped, to avoid collisions
// without increase matcher complicity. Than can change in future.
//
// Places to look for more emoticons info:
//
// - http://en.wikipedia.org/wiki/List_of_emoticons#Western
// - https://github.com/wooorm/emoticon/blob/master/Support.md
// - http://factoryjoe.com/projects/emoticons/
//
'use strict';

// :\ and :-\ not used because of conflict with markdown escaping
module.exports = {
  monkey_face: [ ":o)" ],
  smiley: [ "=)", "=-)" ],
  smile: [ "C:", "c:", ":D", ":-D" ],
  laughing: [ ":>", ":->" ],
  wink: [ ";)", ";-)" ],
  sunglasses: [ "8)" ],
  kissing_heart: [ ":*", ":-*" ],
  slightly_smiling_face: [ ":)", "(:", ":-)" ],
  neutral_face: [ ":|", ":-|" ],
  open_mouth: [ ":o", ":-o", ":O", ":-O" ],
  stuck_out_tongue: [ ":p", ":-p", ":P", ":-P", ":b", ":-b" ],
  stuck_out_tongue_winking_eye: [ ";p", ";-p", ";b", ";-b", ";P", ";-P" ],
  confused: [ ":/", ":-/" ],
  disappointed: [ "):", ":(", ":-(" ],
  cry: [ ":'(" ],
  anguished: [ "D:" ],
  angry: [ ">:(", ">:-(" ],
  heart: [ "<3" ],
  broken_heart: [ "</3" ]
};
