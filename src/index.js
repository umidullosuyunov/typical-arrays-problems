exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let minValue = array[0];
        for (let i = 0; i < array.length; i++) {
            if (minValue > array[i]) {
                minValue = array[i];
            }
        }
        return minValue;
    }
};

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let maks = array[0];
        for (let i = 0; i < array.length; i++) {
            if (maks < array[i]) {
                maks = array[i];
            }
        }
        return maks;
    }
};

exports.avg = function avg(array) {
    let sum = 0;
    if (!array || !array.length) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let average = sum / array.length;
        return average;
    }
};
