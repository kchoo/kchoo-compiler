const primitiveTypes = [
	'boolean',
	'int',
	'int8',
	'int16',
	'int32',
	'int64',
	'uint',
	'uint8',
	'uint16',
	'uint32',
	'uint64',
	'float',
	'double',
];

class Token {
	constructor(literal) {
		if(this.constructor.isValidToken(literal)) {
			this.literal = literal;
		}
	}

	static isValidToken() {
		return true;
	}
}

class TypeToken extends Token {
	constructor(literal) {
		super(literal);
	}

	static get validationRegex() {
		// all types that aren't primitives must start with a capital letter,
		// and are made up of alphanumeric characters and underscores
		return /[A-Z][A-Za-Z0-9_]*/;
	}

	static isValidToken(literal) {
		return primitiveTypes.indexOf(literal) !== -1 || this.constructor.validationRegex.test(literal);
	}
}

class Lexer {

}

module.exports = Lexer;
