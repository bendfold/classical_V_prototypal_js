(function(){
	var AnswerPrototype = {
		constructor : function fn0( value ) {
			this._value = value;
		},	
		get : function fn1() {
			return this._val;
		}
	};
	var lifeAnswer = Object.create( AnswerPrototype );
	lifeAnswer.constructor( 42 );
	lifeAnswer.get(); // 42

	var dessertAnswer = Object.create( AnswerPrototype );
	dessertAnswer.constructor( 3.14159 );
	dessertAnswer.get(); // 3.14159

	var FirmAnswerPrototype = Object.create( AnswerPrototype );

	FirmAnswerPrototype.get = function fn2() {
		return AnswerPrototype.get.call( this ) + "!!";
	};

	var luckyAnswer = Object.create( FirmAnswerPrototype );
	luckyAnswer.constructor( 7 );
	luckyAnswer.get(); // 7!!

	var magicAnswer = Object.create( FirmAnswerPrototype );
	magicAnswer.constructor( 3 );
	magicAnswer.get(); // 3!!

})();