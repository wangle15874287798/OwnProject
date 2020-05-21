/*var str=2000;
str%4===0 && str%100!=0 || str%400===0;
console.log('闰年');*/


/* 三目运算
var a=4;
var b=3;
var str=a>b ? a : b;
console.log(str);*/
/*alert,prompt函数
var a=prompt('请输入一个数字');
var b=prompt('请输入一个数字');
a=Number(a);
b=Number(b);

alert(a+b);
*/

//if语句
/*var age=19;
if (true){
	console.log('成年人');
	}


var str='';
if (!str)
{
	console.log('这家伙很懒，什么也没留下');
}
*/

/*var sex=1;
var res='';
if (sex===111)
{ 
	res='男';
}else{
	res='女';
} console.log(res);

var sex=1;
switch (sex)
{
case : '男';
break;
case : '女';
break;

}

var sex=1;
var res=sex===1 ? '男' : '女';
console.log(res);

var uname='root'
var upad='12456';
if (uname==='root' && upad==='123456')
{
	console.log('登录成功');
}else{
	console.log('登录失败');
};*/

/*var price,number,tatle,money=74;
price=prompt('请输入商品的价格');
number=prompt('请输入商品的数量');
tatle=price*number;
if (tatle>=500)
{
	tatle*=0.9;
}
if (money>=tatle)
{
	alert('支付成功');
} alert('余额不足');
*/


/*var date=6;
switch (date)
{
case 0: 
    console.log('星期日');
    break;
case 1:
	console.log('星期一');
    break;
case 2:
	console.log('星期三');
    break;
case 3:
	console.log('星期四');
    break;
case 4:
	console.log('星期五');
    break;
case 5:
	console.log('星期六');
    break;
    default:
    console.log('非法状态');
} 

*/


/*var score=100;
switch (parseInt(score/10))
{
case 10:
	console.log('A');
    break;
case 9:
case 8:	
	console.log('B');
    break;
case 7:
case 6:
	console.log('C');
    break;
	default:
	console.log('D');

}//判断成绩等级;

*/

//while 循环；


/*var i=11;
while (i<=20)
{
	console.log(i);
	i++;
}


var i=70;
while (i>=50)
{
	console.log(i);
	i=i-5;
}

var i=1;
while (i<=100)
{
	if (i%2===0)
	{
		console.log(i);
    }
	i++;
}

var i=1;
var sum=0;
while (i<=100)
{
	
	sum=sum+i;
    i++;
}
console.log(sum);


var i=1;
var sum=0;
while (i<=100)
{
	if (i%2===0)
	{
		sum+=i;
	}
	i++;
}
console.log(sum);

//无限循环；猜数字大小;
var i=360;

while (true)
{
	var str=prompt('请输入要猜的数字');
	if (isNaN(str))
	{
		alert('请输入一个数字');
	}else if (str>i)
	{
		alert('猜大了');
	}else if(str<i){
		alert('猜小了');
	}else{
		alert('猜对了');
		break;
	}
}
*/
//do while;
/*var i=30;
do
{
	console.log(i);
	i++
}
while (i<=50);

var i=100;
do
{
	console.log(i);
	i-=5;
}
while (i>=80);

var i=1;
do
{
	if (i%2===1)
	{
		console.log(i);
	}
	i++;
}
while (i<=100);

var i=1;
var sum=0;
do
{
	if (i%7===0)
	{
		sum+=i;
	}
	i++;
}
while (i<=100);
console.log(sum);


var i=1;
var str=1;
do
{
	if (i%3===0)
	{
		str*=i;
	}
	i++;
}
while (i<=20);
console.log(str);

var puwd='123456';
do
{
	str=prompt('请输入密码');

}
while (str!=puwd);
*/

//for 循环;

/*for (var i=1;i<=50 ;i++ )
{
	if (i%3===0)
	{
		console.log(i);
	}

}



for (var i=101,sum=0;i<=200 ;i++ )
{
	if (i%2===0)
	{
		sum+=i;
		
	}
	
}
	console.log(sum);


for (var i=2000;i<=2100 ;i++ )
{
	if (i%4===0 && i%100!=0 || i%4===0)
	{
		console.log(i);
	}
}
 for (var i=1,str='';i<=5 ;i++ )
 {
	str=str+i+'*5='+i*5+' ';
     
 }

console.log(str);

for (var i=1,sum=0;i<=100 ;i++ )
{
	if (i%2===1)
	{
		continue;
	}
   sum+=i;
}

console.log(sum);

for (var j=1;j<=5 ;j++ )
{
   for (var i=1,str='';i<=j;i++ )
{
	str=str+'*';
}
console.log(str);
}
for (var j=1;j<=9 ;j++ )
{
for (var i=1,str='';i<=j ;i++ )
{
	str+=i+'*'+j+'='+i*j+' ';
 
}
  console.log(str);
}


for (var i=2000,count=0;i<=2100 ;i++ )
{
	
	if (i%4===0 && i%100!==0 || i%400===0)
	{
		console.log(i);
        count++;
	
	
	if (count===10)
	{
		break;
	}
	}
}



 function getRun(a,b){
	 for (var count=0;a<=b ;a++ )
	 {
		 if (a%4===0 && a%100!==0 || a%400===0)
		 {
			 console.log(a);
			 count++;
			 if (count===3)
			 {
				 break;
			 }
		 }
	 }
	
 }

getRun(1969,2004);

function say(a,b){
	return a+b;
}

var res=say(5,6);
console.log(res);

function num(a,b){
	if (a>b)
	{
		return a;

	}else{
		return b;
	}
}

var str=num(66,6);
console.log(str);
    

function num(a,b){

	var res=a>b ? a : b;
	return res;
}

var str1=num(33,9);
console.log(str1);

function num(a,b,c){
	
	 Max1=a>b ? a : b;
    return Max1>c ? Max1 : c;
}

var str=num(333,333,3);
console.log(str);



function num(a,b,c){
	var max;
	if (a>b)
	{
		return a;
	}else{
		return b;
	}
	if (max>c)
	{
		return max;
	}else{
		return c;
	}
}

var str=num(23,543,64);
console.log(str);


function getStatus(n){
	switch (n)
	{
	case 1:
		return '等待付款';
	   break;
	case 2:
		return '等待发货';
	    break;
	case 3:
		return '运输中';
	    break;
    case 4:
		return '已签收';
	    break;
	case 5:
		return '已取消';
        break;
	default:
		return '无法追踪';

	
	}
}

var res=getStatus(5);
console.log(res);




function year(a){
	if (a%4===0 && a%100!==0  || a%400===0)
	{
		return true;
	}else{
		return false;
	}
}
 var str=year(1000);
 console.log(str);

function getJc(n){
	for (var i=1,s=1;i<=n ;i++ )
	{
		s*=i
	}
		return s;
}

function getSum(n){
	for (var i=1,sum=0;i<=n ;i++ )
	{
		sum+=getJc(i);
	}
	
	return sum;

}

var res=getSum(5);
console.log(res);


function num(a,b,c){
	var max;
	if (a>b)
	{
		return max=a;
	}else{
		return max=b;
	}
	if (max>c)
	{
		return max;
	}else{
		return c;
	}
}

var str=num(111111,543,64);
console.log(str);


var i=0;
function say(){
	i++;
	alert('从前有座山');

    if (i===3)
    {

		return;
    }
	say();
	

}

say();
function getSum(n){
	if (n===1)
	{
		return 1;
	}
	return n+getSum(n-1);//5+getSum(5-1),
}
console.log(getSum(100));


function getfb(n){
	if (n===1 || n===2)
	{
		return 1;
	}
	return getfb(n-1)+getfb(n-2);
}
console.log(getfb(5));

var fun=function(a,b){
	for (var i=a,sum=0;i<=b ;i++ )
	{
		sum+=i;
	}
	return sum;

}
console.log(fun(1,100));*/


function fun(a,b){
	var num1=a();
	var num2=b();
	console.log(a()+b());
}
fun(function(){
	return 1;
},
function(){
	return 2;
});









