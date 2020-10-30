


function simplefunctions()
{
	var greet = function ( person , greeting ) {
		var text = greeting +  ' , ' + person ;
		console. log ( text );
		};
		greet ( ' Rebecca ' , ' Hello ');
	
	
}
function returnvalue()
{
	var greet = function ( person , greeting ) {
		var text = greeting +  ',' + person ;
		return text ;
		};
		console.log ( greet ( ' Rebecca ' , ' hello '));
}
function returnfunctions()
{
	var greet = function ( person , greeting ) {
		var text = greeting + ' , ' + person ;
		return function() { console.log( text ); };
		};
		var greeting = greet ( 'Rebecca ' , ' Hello ');
		greeting ();
		
}
function passingargumnents()
{
	var myFn = function ( fn ) {
		var result = fn ();
		console.log ( result );
		};
		var myOtherFn = function() {
		return ' hello world ';
		};
		myFn ( myOtherFn ); // logs ' h e l l o world '
}