# kchoo-compiler

Compiler for kchoo

## Roadmap

This is a first attempt at any sort of compiler, so this first attempt will just be a simple source-to-binary translation. Subsequent compilers will be properly split up into front- and back-ends, with an intermediate representation I come up with myself, then there will probably be optimizers, tree-shakers, etc. For now this will generate binaries for Ubuntu running on whichever Intel X86 processor this computer has.

Now for the roadmap:

1. Lexer
	- Come up with token scheme
	- Parse file and output a JSON array of tokens

1. Parser
	- Take in an array of tokens and spit out an AST
	- Come up with AST classes
		- Identifier extends Token etc. 

1. Code Generator
	- Take in AST and spit out binary
	- Will definitely evolve along with the next steps

1. Empty file
	- Create binary with all the proper headers
	- Initialize stack
	- Return 0

1. Simple variable declaration/initialization
	- Prepares space on the stack for it
	- Assigns a value to the variable
	- Return that value?
	- Start with int or boolean and then generalize to other primitives

1. Arithmetic
	- Handling precendence and parentheses
	- Variable re-assignment should generate a compiler error