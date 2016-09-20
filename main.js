function StarTree(n) {
    for (var i = 0; i <= n; i++) {
        var L = '';
        for (var j = 0; j < n - i; j++) {
            L = L + ' ';
        }
        for (var k = 0; k < 2 * i - 1; k++) {
            L = L + '*';
        }
        console.log(L);
    }
}
var n = process.argv[2];
StarTree(parseInt(n));
