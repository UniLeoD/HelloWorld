

function StarTree (n:number):void {
    
    for(var i:number = 0;i <= n;i++) {
        var L:string = '';
        for(var j:number = 0;j < n-i;j++) {
            L = L + ' ';
        }
        for(var k:number = 0;k < 2*i-1;k++) {
            L = L + '*';
        }
        console.log(L);
    }

}

var n:string = process.argv[2];

StarTree(parseInt(n));