module.exports = function getZerosCount(number) {
    var count = 0;
    var i = 5;

    while (i<=number){
        count += Math.floor(number/i);
        i = i*5
    }

    return count;
}