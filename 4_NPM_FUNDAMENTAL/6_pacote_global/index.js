const _ = require("lodash");

const a = [1, 1, 2, 3, 3, 2, 4, 6, 3, 4, 5];

const uniq = _.sortedUniq(a);

console.log(uniq);
