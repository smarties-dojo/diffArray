'use strict';

const differ = {};

differ.diffArray = (a1, a2) => {
    return getExclusiveElementsOfFirstArray(a1, a2).concat(getExclusiveElementsOfFirstArray(a2, a1));
}

var getExclusiveElementsOfFirstArray = (a1, a2) => {
    return a1.filter(x => {
        return !a2.some(y => {
            return x == y;
        })
    });
} 

module.exports = differ;