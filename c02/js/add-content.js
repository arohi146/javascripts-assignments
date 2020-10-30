


function basicoperators()
{
	//Your Code Goes Here
	var foo =  'hello';
var bar =  'world';
console.log( foo + '' + bar ); // ’ h e l l o world ’
	
	
	
}
function arithmeticoperators()
{
	console.log('mul of two num ');
	console.log(2*3);
	console.log('div of two num ');
	console.log(2/3);
	var i = 1;
	var j = ++ i ; // pre - i n c r e m e n t : j e q u a l s 2; i e q u a l s 2
	var k = i ++; // post - i n c r e m e n t : k e q u a l s 2; i e q u a l s 3
	console.log(k+k);
}
function numberandstrings()
{
	var foo = 1;
	var bar = '2';
	console.log( foo + bar ); // 12. uh oh
	var foo = 1;
	var bar = '2';
		// coerce the string to a number
	console.log( foo + Number( bar ));
}
function logicaloperators()
{
	var foo = 1;
	var bar = 0;
	var baz = 2;
	foo || bar ; // returns 1 , which is true	
	bar || foo ; // returns 1 , which is true
	foo && bar ; // returns 0 , which is false
	foo && baz ; // returns 2 , which is true
	baz && foo ; // returns 1 , which is true
	console.log(foo+bar);
}
function comparisonoperators()
{
	var foo = 1;
	var bar = 0;
	var baz = '1';
	var bim = 2;
	foo == bar ; //  returns false
	foo != bar ; //  returns true
	foo == baz ; //  returns true ; careful !
	foo === baz ; //  returns false
	foo !== baz ; //  returns true
	foo === parseInt( baz ); // returns true
	foo > bim ; // returns false
	bim > baz ; // returns true
	foo <= baz ; // returns true
	console.log(foo==baz);
}