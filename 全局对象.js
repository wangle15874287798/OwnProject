/*console.time('for');
for ( let i=1;i<=100000000 ;i++ )
{

}
console.timeEnd('for');

console.time('while');
let i=1;
while (i<=100000000)
{
	i++;
}
console.timeEnd('while');

console.time('do_while');
i=1;
do
{
	i++
}
while (i<=100000000);
console.timeEnd('do_while');


//打印3次hello后清除定时器
let count=0;
let timer=setInterval( function(){	
	console.log('hello');
	count++;
	if (count===3)
	{
		clearInterval(timer);
	}
},2000);
*/

/*let timer=setTimeout( function(){
	console.log(2);
},2000);
clearTimeout(timer);
*/

Node.js
global.a global.fn();
JS
window.a window.fn();

console.log();
console.info();
console.warn();
console.error();
console.time('for');
for (; ; )
{
}
console.timeEnd('for');

process.arch
process.platform
process.version
process.kill()
process.env
process.pid

let but=Buffer.alloc(4,'asca');
but.toString();
string(but);

let timer=setTimeout( function(){},2000);/clearTimeout( timer);
setInterval( function(){},2000);/clearInterval( timer);
setImmediate( function(){},2000);/clearImmediate(timer);
process.nextTick( function(){});




