console.log("Mohammad!");
function bitwiseAND(n1, n2) {
    return n1 & n2;
}
function bitwiseOR(n1, n2) {
    return n1 | n2;
}
function bitwiseXOR(n1, n2) {
    return n1 ^ n2;
}
function addUp(num) {
    return (num * (num + 1)) / 2;
}
function redundant(str) {
    var f1 = function () { return str; };
    return f1;
}
var arrayOfMultiples = function (num, length) {
    return (function (_, i) { return num * (i + 1); });
};
//# sourceMappingURL=main.js.map