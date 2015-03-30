(function(){
	function Answer( value ) {
		this._val = value;
	}
	Answer.prototype.get = function fn1() {
		return this._val;
	};
	
	var lifeAnswer = new Answer( 42 );
	lifeAnswer.get(); // 42

	var dessertAnswer = new Answer( 3.14159 );
	dessertAnswer.get(); // 3.14159

	function FirmAnswer( value ) {
		Answer.call( this, value );
	}
	FirmAnswer.prototype = Object.create( Answer.prototype );
	FirmAnswer.prototype.constructor = FirmAnswer;

	FirmAnswer.prototype.get = function fn2() {
		return Answer.prototype.get.call( this ) + "!!"
	};

	var luckyAnswer = new FirmAnswer( 7 );
	luckyAnswer.get(); // 7!!;

	var magicAnswer = new FirmAnswer( 3 );
	magicAnswer.get(); // 3!!
})();