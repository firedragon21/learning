//字串反轉
var a=prompt('字串',a);
var b=[];

for (let i=a.length;i>0;i--)
    {
        b.push(a[i-1]);
        //b[i]=a[a.length-i-1];
    }
let spaceStr = b.join('')
console.log(b)
console.log(spaceStr)
