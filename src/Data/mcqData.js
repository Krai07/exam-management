

const JavaData = [
    {
        questionNo: 1,
        question: "Which of the following options leads to the portability and security of Java?",
        options: ["Bytecode is executed by JVM", "The applet makes the Java code secure and portable", "Use of exception handling", "Dynamic binding between objects"],
        answer: "Bytecode is executed by JVM"
    },
    {
        questionNo: 2,
        question: "Which of the following is not a Java features?",
        options: ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
        answer: "Use of pointers"
    },
    {
        questionNo: 3,
        question: "The \\u0021 article referred to as a",
        options: ["Unicode escape sequence", "Octal escape", "Hexadecimal", "Line feed"],
        answer: "Unicode escape sequence"
    },
    {
        questionNo: 4,
        question: "_____ is used to find and fix bugs in the Java programs.",
        options: ["JVM", "JRE", "JDK", "JDB"],
        answer: "JDB"
    },
    {
        questionNo: 5,
        question: "Which of the following is a valid declaration of a char?",
        options: ["char ch = '\\utea';", "char ca = 'tea';", "char cr = \\u0223;", "char cc = '\\itea';"],
        answer: "char ch = '\\utea';"
    },
    {
        questionNo: 6,
        question: "What is the return type of the hashCode() method in the Object class?",
        options: ["Object", "int", "long", "void"],
        answer: "Object"
    },
    {
        questionNo: 7,
        question: "Which of the following is a valid long literal?",
        options: ["ABH8097", "L990023", "904423", "0xnf029L"],
        answer: "0xnf029L"
    },
    {
        questionNo: 8,
        question: "What does the expression float a = 35 / 0 return?",
        options: ["0", "Not a Number", "Infinity", "Run time exception"],
        answer: "Infinity"
    },
    {
        questionNo: 9,
        question: "Evaluate the following Java expression, if x=3, y=5, and z=10: {*++z + y - y + z + x++*}",
        options: ["24", "23", "20", "25"],
        answer: "25"
    },
    {
        questionNo: 10,
        question: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
        options: ["javap tool", "javaw command", "Javadoc tool", "javah command"],
        answer: "Javadoc tool"
    },
    {
        questionNo: 11,
        question: "Which of the following creates a List of 3 visible items and multiple selections abled?",
        options: ["new List(false, 3)", "new List(3, true)", "new List(true, 3)", "new List(3, false)"],
        answer: "new List(3, true)"
    },
    {
        questionNo: 12,
        question: "Which of the following for loop declaration is not valid?",
        options: ["for ( int i = 99; i >= 0; i / 9 )", "for ( int i = 7; i <= 77; i += 7 )", "for ( int i = 20; i >= 2; - -i )", "for ( int i = 2; i <= 20; i = 2* i )"],
        answer: "for ( int i = 99; i>=0; i / 9)"
    },
    {
        questionNo: 13,
        question: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
        options: ["getClass()", "intern()", "getName()", "toString()"],
        answer: "getName()"
    },
    {
        questionNo: 14,
        question: "In which process, a local variable has the same name as one of the instance variables?",
        options: ["Serialization", "Variable Shadowing", "Abstraction", "Multi-threading"],
        answer: "Variable Shadowing"
    },
    {
        questionNo: 15,
        question: "Which of the following is true about the anonymous inner class?",
        options: ["It has only methods", "Objects can't be created", "It has a fixed class name", "It has no class name"],
        answer: "It has no class name"
    },
    {
        questionNo: 16,
        question: "Which package contains the Random class?",
        options: ["java.util package", "java.lang package", "java.awt package", "java.io package"],
        answer: "java.util package"
    },
    {
        questionNo: 17,
        question: "What do you mean by nameless objects?",
        options: ["An object created by using the new keyword.", "An object of a superclass created in the subclass.", "An object without having any name but having a reference.", "An object that has no reference."],
        answer: "An object that has no reference."
    },
    {
        questionNo: 18,
        question: "An interface with no fields or methods is known as a ______.",
        options: ["Runnable Interface", "Marker Interface", "Abstract Interface", "CharSequence Interface"],
        answer: "Marker Interface"
    },
    {
        questionNo: 19,
        question: "Which of the following is an immediate subclass of the Panel class?",
        options: ["Applet class", "Window class", "Frame class", "Dialog class"],
        answer: "Applet class"
    },
    {
        questionNo: 20,
        question: "Which option is false about the final keyword?",
        options: ["A final method cannot be overridden in its subclasses.", "A final class cannot be extended.", "A final class cannot extend other classes.", "A final method can be inherited."],
        answer: "A final class cannot extend other classes."
    },
    {
        questionNo: 21,
        question: "Which of these classes are the direct subclasses of the Throwable class?",
        options: ["RuntimeException and Error class", "Exception and VirtualMachineError class", "Error and Exception class", "IOException and VirtualMachineError class"],
        answer: "Error and Exception class"
    },
    {
        questionNo: 22,
        question: "What do you mean by chained exceptions in Java?",
        options: ["Exceptions occurred by the VirtualMachineError", "An exception caused by other exceptions", "Exceptions occur in chains with discarding the debugging information", "None of the above"],
        answer: "An exception caused by other exceptions."
    },
    {
        questionNo: 23,
        question: "In which memory a String is stored, when we create a string using new operator?",
        options: ["Stack", "String memory", "Heap memory", "Random storage space"],
        answer: "Heap memory"
    },
    {
        questionNo: 24,
        question: "What is the use of the intern() method?",
        options: ["It returns the existing string from memory", "It creates a new string in the database", "It modifies the existing string in the database", "None of the above"],
        answer: "It returns the existing string from the memory"
    },
    {
        questionNo: 25,
        question: "Which of the following is a marker interface?",
        options: ["Runnable interface", "Remote interface", "Readable interface", "Result interface"],
        answer: "Remote interface"
    },
    {
        questionNo: 26,
        question: "Which of the following is a reserved keyword in Java?",
        options: ["object", "strictfp", "main", "system"],
        answer: "strictfp"
    },
    {
        questionNo: 27,
        question: "Which keyword is used for accessing the features of a package?",
        options: ["package", "import", "extends", "export"],
        answer: ""
    },
    {
        questionNo: 28,
        question: "In java, jar stands for_____.",
        options: ["Java Archive Runner", "Java Application Resource", "Java Application Runner", "None of the above"],
        answer: "None of the above"
    },
    {
        questionNo: 29,
        question: "Which of the following is false?",
        options: ["The rt.jar stands for the runtime jar", "It is an optional jar file", "It contains all the compiled class files", "All the classes available in rt.jar is known to the JVM"],
        answer: "It is an optional jar file."
    },
    {
        questionNo: 30,
        question: "What is the use of \w in regex?",
        options: ["Used for a whitespace character", "Used for a non-whitespace character", "Used for a word character", "Used for a non-word character"],
        answer: "Used for a word character"
    },
]

// -------------------------------------------------------------------------
//C- Programing MCQ
export const CData = [
    {
        questionNo: 1,
        question: "Who is the father of C language?",
        options:[ "Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorft"],
        answer: "Dennis Ritchie"
    },
    {
        questionNo: 2,
        question: "Which of the following is true for variable names in C?",
        options:["They can contain alphanumeric characters as well as special characters", "It is not an error to declare a variable to be one of the keywords(like goto, 	static)", " Variable names cannot start with a digit", "Variable can be of any length"],
        answer: " Variable names cannot start with a digit"
    },
    {
        questionNo: 3,
        question: "Which is valid C expression?",
        options:["int my_num = 100,000;", "int my_num = 100000;", "int my num = 1000;", "int $my_num = 10000;"],
        answer: "int my_num = 100000;"
    },
    {
        questionNo: 4,
        question: "Which of the following is not a valid C variable name?",
        options:["int number;", "float rate;", "int variable_count;", "int $main;"],
        answer: "int $main;"
    },
    {
        questionNo: 5,
        question: "All keywords in C are in ____________",
        options:["LowerCase letters", "UpperCase letters", "CamelCase letters", "None of the mentioned"],
        answer: "LowerCase letters"
    },
    {
        questionNo: 6,
        question: "Which of the following cannot be a variable name in C?",
        options:["volatile", "true", "friend", "export"],
        answer: "volatile"
    },
    {
        questionNo: 7,
        question: "What is short int in C programming?",
        options:["The basic data type of C", "Qualifier", "Short is the qualifier and int is the basic data type", "All of the mentioned"],
        answer: "Short is the qualifier and int is the basic data type"
    },
    {
        questionNo: 8,
        question: "Which of the following declaration is not supported by C language?",
        options:["String str;", "char *str;", "float str = 3e2;", "Both “String str;” and “float str = 3e2;”"],
        answer: "String str;"
    },
    {
        questionNo: 9,
        question: "Which keyword is used to prevent any changes in the variable within a C program?",
        options:["immutable", "mutable", "const", "volatile"],
        answer: "const"
    },
    {
        questionNo: 10,
        question: "What is the result of logical or relational expression in C?",
        options:["True or False", "0 or 1", "0 if an expression is false and any positive number if an expression is true", "None of the mentioned"],
        answer: "0 or 1"
    },
    {
        questionNo: 11,
        question: "Which of the following typecasting is accepted by C language?",
        options:["Widening conversions", "Narrowing conversions", "Widening & Narrowing conversions", "None of the mentioned"],
        answer: "Widening & Narrowing conversions"
    },
    {
        questionNo: 12,
        question: "Where in C the order of precedence of operators do not exist?",
        options:["Within conditional statements, if, else", "Within while, do-while", "Within a macro definition", "None of the mentioned"],
        answer: "Within a macro definition"
    },
    {
        questionNo: 13,
        question: "Which of the following is NOT possible with any 2 operators in C?",
        options:["Different precedence, same associativity", "Different precedence, different associativity", "Same precedence, different associativity", "All of the mentioned"],
        answer: "Same precedence, different associativity"
    },
    {
        questionNo: 14,
        question: "What is an example of iteration in C?",
        options:["for", "while", "do-while", "all of the mentioned"],
        answer: "all of the mentioned"
    },
    {
        questionNo: 15,
        question: "Functions can return enumeration constants in C?",
        options:["true", "false", "depends on the compiler", "depends on the standard"],
        answer: "true"
    },
    {
        questionNo: 16,
        question: "Functions in C Language are always _________",
        options:["Internal", "External", "Both Internal and External", "External and Internal are not valid terms for functions"],
        answer: "External"
    },
    {
        questionNo: 17,
        question: "Which of following is not accepted in C?",
        options:["static a = 10; //static as", "static int func (int); //parameter as static", "static static int a; //a static variable prefixed with static", "all of the mentioned"],
        answer: "static static int a; //a static variable prefixed with static"
    },
    {
        questionNo: 18,
        question: "Property which allows to produce different executable for different platforms in C is called?",
        options:["File inclusion", "Selective inclusion", "Conditional compilation", "Recursive macros"],
        answer: "Conditional compilation"
    },
    {
        questionNo: 19,
        question: "What is #include <stdio.h>?",
        options:["Preprocessor directive", "Inclusion directive", "File inclusion directive", "None of the mentioned"],
        answer: "Preprocessor directive"
    },
    {
        questionNo: 20,
        question: "C preprocessors can have compiler specific features.",
        options:["True", "False", "Depends on the standard", "Depends on the platform"],
        answer: "True"
    },
    {
        questionNo: 21,
        question: "Which of the following are C preprocessors?",
        options:["#ifdef", "#define", " #endif", "all of the mentioned"],
        answer: "all of the mentioned"
    },
    {
        questionNo: 22,
        question: "The C-preprocessors are specified with _________ symbol.",
        options:["#", "$", " ” ”", "&"],
        answer: "#"
    },
    {
        questionNo: 23,
        question: "How is search done in #include and #include “somelibrary.h” according to C standard?",
        options:["When former is used, current directory is searched and when latter is used, standard directory is searched", "When former is used, standard directory is searched and when latter is used, current directory is searched", " When former is used, search is done in implementation defined manner and when latter is used, current directory is searched", "For both, search for ‘somelibrary’ is done in implementation-defined places"],
        answer: "When former is used, standard directory is searched and when latter is used, current directory is searched"
    },
    {
        questionNo: 24,
        question: "How many number of pointer (*) does C have against a pointer variable declaration?",
        options:["7", "127", "255", "No limits"],
        answer: "No Limits"
    },
    {
        questionNo: 25,
        question: "Which of the following is not possible statically in C language?",
        options:["Jagged Array", "Rectangular Array", "Cuboidal Array", "Multidimensional Array"],
        answer: "Jagged Array"
    },
    {
        questionNo: 26,
        question: "Which of the following return-type cannot be used for a function in C?",
        options:["char *", "struct", "void", "none of the mentioned"],
        answer: "none of the mentioned"
    },
    {
        questionNo: 27,
        question: "The standard header _______ is used for variable list arguments (…) in C.",
        options:["<stdio.h >", "<stdlib.h>", " <math.h>", "<stdarg.h>"],
        answer: "<stdarg.h>"
    },
    {
        questionNo: 28,
        question: "When a C program is started, O.S environment is responsible for opening file and providing pointer for that file?",
        options:[" Standard input", "Standard output", "Standard error", "All of the mentioned"],
        answer: "All of the mentioned"
    },
    {
        questionNo: 29,
        question: " In C language, FILE is of which data type?",
        options:["int", "char *", "struct", "None of the mentioned"],
        answer: "None of the mentioned"
    },
    {
        questionNo: 30,
        question: "What is the sizeof(char) in a 32-bit C compiler?",
        options:["1 bit", "2 bits", " 1 Byte", "2 Bytes"],
        answer: "2 Bytes"
    },
    {
        questionNo: 31,
        question: "Which of the following is not an operator in C?",
        options:[",", "sizeof()", " ~", "None of the mentioned"],
        answer: "None of the mentioned"
        
    },
    {
        questionNo: 32,
        question: " scanf() is a predefined function in______header file.",
        options:["stdlib. h", " ctype. h", "stdio. h", "stdarg. h"],
        answer: "stdio. h"
    },
    {
        questionNo: 33,
        question: "What is meant by 'a' in the following C operation?{*fp = fopen('Random.txt', 'a');'}",
        options:["Attach", "Append", "Apprehend", "Add"],
        answer: "Append"
    },
    {
        questionNo: 34,
        question: "How do you insert COMMENTS in C code?",
        options:["//", "--", "*", "#"],
        answer: "--"
    },
    {
        questionNo: 35,
        question: "How can you create a variable with the numeric value 5?",
        options:["num=5 int;", "num = 5;", "val num = 5;", "int num=5;"],
        answer: "num = 5;"
    }
   
];













//Python MCQ
export const PythonData = [
    {
        questionNo: 1,
        question: "Who developed Python Programming Language?",
        options:["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"],
        answer: "Guido van Rossum"
    },
    {
        questionNo: 2,
        question: "Which type of Programming does Python support?",
        options:["object-oriented programming", "structured programming", "functional programming", "all of the mentioned"],
        answer: "all of the mentioned"
    },
    {
        questionNo: 3,
        question: "Is Python case sensitive when dealing with identifiers?",
        options:[" no", "yes", "machine dependent", "none of the mentioned"],
        answer: "yes"
    },
    {
        questionNo: 4,
        question: "Which of the following is the correct extension of the Python file?",
        options:[".python", ".pl", " .py", " .p"],
        answer: " .py"
    },
    {
        questionNo: 5,
        question: "Is Python code compiled or interpreted?",
        options:["Python code is both compiled and interpreted", "Python code is neither compiled nor interpreted", "Python code is only compiled", "Python code is only interpreted"],
        answer: "Python code is both compiled and interpreted"
    },
    {
        questionNo: 6,
        question: " All keywords in Python are in _________",
        options:["Capitalized", "lower case", "UPPER CASE", " None of the mentioned"],
        answer: " None of the mentioned"
    },
    {
        questionNo: 7,
        question: "What will be the value of the following Python expression?{*4 + 3 % 5*}",
        options:["7", "4", "2", "1"],
        answer: "7"
    },
    {
        questionNo: 8,
        question: "Which of the following is used to define a block of code in Python language?",
        options:["Indentation", "Key", "Brackets", "All of the mentioned"],
        answer: "Indentation"
    },
    {
        questionNo: 9,
        question: "Which keyword is used for function in Python language?",
        options:["Function", "def", "Fun", "Define"],
        answer: "def"
    },
    {
        questionNo: 10,
        question: " Which of the following character is used to give single-line comments in Python?",
        options:["//", "#", "!", "/*"],
        answer: "#"
    },
    {
        questionNo: 11,
        question: " Which of the following functions can help us to find the version of python that we are currently working on?",
        options:["sys.version(1)", "sys.version(0)", " sys.version()", " sys.version"],
        answer:  " sys.version"
    },
    {
        questionNo: 12,
        question: " Python supports the creation of anonymous functions at runtime, using a construct called __________",
        options:[" pi", "anonymous", "lambda", "none of the mentioned"],
        answer: "lambda"
    },
    {
        questionNo: 13,
        question: " What is the order of precedence in python?",
        options:["Exponential, Parentheses, Multiplication, Division, Addition, Subtraction", "Exponential, Parentheses, Division, Multiplication, Addition, Subtraction", "Parentheses, Exponential, Multiplication, Division, Subtraction, Addition", "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction"],
        answer: "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction"
    },
    {
        questionNo: 14,
        question: " What will be the output of the following Python code snippet if x=1?{*x<<2*}",
        options:["4", "2", "1", "8"],
        answer: "4"
    },
    {
        questionNo: 15,
        question: "What does pip stand for python?",
        options:["Pip Installs Python", "Pip Installs Packages", "Preferred Installer Program", "All of the mentioned"],
        answer: "Preferred Installer Program"
    },
    {
        questionNo: 16,
        question: " Which of the following is true for variable names in Python?",
        options:["underscore and ampersand are the only two special characters allowed", "unlimited length", "all private members must have leading and trailing underscores", "all private members must have leading and trailing underscores"],
        answer: "unlimited length"
    },
    {
        questionNo: 17,
        question: "Which of the following is the truncation division operator in Python?",
        options:["|", "//", " /", "%"],
        answer: "//"
    },
    {
        questionNo: 18,
        question: " Which of the following is the use of id() function in python?",
        options:["Every object doesn’t have a unique id", "Id returns the identity of the object", "All of the mentioned", " None of the mentioned"],
        answer: "Id returns the identity of the object"
    },
    {
        questionNo: 19,
        question: "Which of these is the definition for packages in Python?",
        options:["A set of main modules", "A folder of python modules", "A number of files containing Python definitions and statements", "A set of programs making use of Python modules"],
        answer: "A folder of python modules"
    },
    {
        questionNo: 20,
        question: "What is the order of namespaces in which Python looks for an identifier?",
        options:["Python first searches the built-in namespace, then the global namespace and finally the local namespace", "Python first searches the built-in namespace, then the local namespace and finally the global namespace", "Python first searches the local namespace, then the global namespace and finally the built-in namespace", "Python first searches the global namespace, then the local namespace and finally the built-in namespace"],
        answer: "Python first searches the local namespace, then the global namespace and finally the built-in namespace"
    },
    {
        questionNo: 21,
        question: " Which module in the python standard library parses options received from the command line?",
        options:["getarg", "getopt", "main", "os"],
        answer: "getopt"
    },
    {
        questionNo: 22,
        question: "What arithmetic operators cannot be used with strings in Python?",
        options:["*", "-", "+", "All of the mentioned"],
        answer: "-"
    },
    {
        questionNo: 23,
        question: "Which of the following statements is used to create an empty set in Python?",
        options:["[]", "()", "{}", "set()"],
        answer: "set()"
    },
    {
        questionNo: 24,
        question: "Which one of the following is the use of function in python?",
        options:["Functions don’t provide better modularity for your application", "you can’t also create your own functions", "Functions are reusable pieces of programs", "All of the mentioned"],
        answer:  "Functions are reusable pieces of programs"
    },
    {
        questionNo: 25,
        question: "What is the maximum possible length of an identifier in Python?",
        options:["79 characters", "31 characters", "63 characters", "none of the mentioned"],
        answer: "none of the mentioned"
    },
    {
        questionNo: 26,
        question: "What are the two main types of functions in Python?",
        options:["System function", "Custom function", "Built-in function & User defined function", "User function"],
        answer: "Built-in function & User defined function"
    },
    {
        questionNo: 27,
        question: "Which of the following is a Python tuple?",
        options:["{1, 2, 3}", "{}", "[1,2,3]", "(1,2,3)"],
        answer: "(1,2,3)"
    },
    {
        questionNo: 28,
        question: "What will be the output of the following Python expression?{*round(4.576)*}",
        options:["4", "4.5", "4.6", "5"],
        answer: "4.6"
    },
    {
        questionNo: 29,
        question: "Which of the following is a feature of Python DocString?",
        options:[" In Python all functions should have a docstring", "Docstrings can be accessed by the __doc__ attribute on objects", "It provides a convenient way of associating documentation with Python modules, functions, classes, and methods", "All of the mentioned"],
        answer: "All of the mentioned"
    },
    {
        questionNo: 30,
        question: "What is output of print(math.pow(3, 2))?",
        options:["9.0", "None", "9", " None of the mentioned"],
        answer: "9.0"
    },
    {
        questionNo: 31,
        question: "Which of the following is the use of id() function in python?",
        options:["Every object in Python doesn’t have a unique id", "In Python Id function returns the identity of the object", "None of the mentioned", "All of the mentioned"],
        answer: "In Python Id function returns the identity of the object"
    },
    {
        questionNo: 32,
        question: "The process of pickling in Python includes ____________",
        options:["conversion of a Python object hierarchy into byte stream", "conversion of a datatable into a list", "conversion of a byte stream into Python object hierarchy", "conversion of a list into a datatable"],
        answer: "conversion of a Python object hierarchy into byte stream"
    },
    {
        questionNo: 33,
        question: " Is the following Python code valid?{*>>> a,b,c=1,2,3*}{*>>> a,b,c*}",
        options:["Yes, [1,2,3] is printed", " No, invalid syntax", "Yes, (1,2,3) is printed", "1 is printed"],
        answer: "Yes, (1,2,3) is printed"
    },
    {
        questionNo: 34,
        question: "What will be the output of the following Python code?{*>>> a=(1,2)*}{*>>> b=(3,4)*}{*>>> c=a+b*}{*>>> c*}",
        options:["(4,6)", "(1,2,3,4)", "Error as tuples are immutable", "None"],
        answer: "Error as tuples are immutable"
    },
    {
        questionNo: 35,
        question: "Is the following Python code valid?{*>>> a,b=1,2,3*}",
        options:["Yes, this is an example of tuple unpacking. a=1 and b=2", "Yes, this is an example of tuple unpacking. a=(1,2) and b=3", "No, too many values to unpack", "Yes, this is an example of tuple unpacking. a=1 and b=(2,3)"],
        answer:  "No, too many values to unpack"
    },
    
];
//CPP MCQ
export const CppData = [
    {
        questionNo: 1,
        question: "Wrapping data and its related functionality into a single entity is known as _____________",
        options:["Abstraction", "Encapsulation", "Polymorphism", " Modularity"],
        answer: "Encapsulation"
    },
    {
        questionNo: 2,
        question: "How structures and classes in C++ differ?",
        options:["In Structures, members are public by default whereas, in Classes, they are private by default", "In Structures, members are private by default whereas, in Classes, they are public by default", "Structures by default hide every member whereas classes do not", "Structures cannot have private members whereas classes can have"],
        answer: "In Structures, members are public by default whereas, in Classes, they are private by default"
    },
    {
        questionNo: 3,
        question: "What does polymorphism in OOPs mean?",
        options:["Concept of allowing overiding of functions", "Concept of hiding data", "Concept of keeping things in differnt modules/files", "Concept of wrapping things into a single unit"],
        answer: "Concept of allowing overiding of functions"
    },
    {
        questionNo: 4,
        question: "Which concept allows you to reuse the written code?",
        options:["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
        answer: "Polymorphism"
    },
    {
        questionNo: 5,
        question: "Which of the following shows multiple inheritances?",
        options:["A->B->C", "A->B; A->C", "A,B->C", " B->A"],
        answer: "A,B->C"
    },
    {
        questionNo: 6,
        question: "How access specifiers in Class helps in Abstraction?",
        options:["They does not helps in any way", "They allows us to show only required things to outer world", "Abstraction concept is not used in classes", "They help in keeping things together"],
        answer: "They allows us to show only required things to outer world"
    },
    {
        questionNo: 7,
        question: "C++ is ______________",
        options:["procedural programming language", "object oriented programming language", "functional programming language", "both procedural and object oriented programming language"],
        answer: "both procedural and object oriented programming language"
    },
    {
        questionNo: 8,
        question: "What does modularity mean?",
        options:["Hiding part of program", "Subdividing program into small independent parts", "Overriding parts of program", "Wrapping things into single unit"],
        answer: "Subdividing program into small independent parts"
    },
    {
        questionNo: 9,
        question: "Which of the following class allows to declare only one object of it?",
        options:["Abstract class", "Virtual class", "Singleton class", "Friend class"],
        answer: "Singleton class"
    },
    {
        questionNo: 10,
        question: "Which of the following is not a type of Constructor?",
        options:["Friend constructor", "Copy constructor", "Default constructor", " Parameterized constructor"],
        answer: "Friend constructor"
    },
    {
        questionNo: 11,
        question: "Which of the following is correct?",
        options:["Base class pointer object cannot point to a derived class object", "Derived class pointer object cannot point to a base class object", "A derived class cannot have pointer objects", "A base class cannot have pointer objects"],
        answer:  "Derived class pointer object cannot point to a base class object"
    },
    {
        questionNo: 12,
        question: "Out of the following, which is not a member of the class?",
        options:["Static function", "Friend function", "Constant function", "Virtual function"],
        answer: "Friend function"
    },
    {
        questionNo: 13,
        question: " What is the other name used for functions inside a class?",
        options:["Member variables", "Member functions", "Class functions", "Class variables"],
        answer: "Member functions"
    },
    {
        questionNo: 14,
        question: "Which of the following cannot be a friend?",
        options:["Function", "Class", "Object", "Operator function"],
        answer: "Object"
    },
    {
        questionNo: 15,
        question: "Why references are different from pointers?",
        options:["A reference cannot be made null", "A reference cannot be changed once initialized", "No extra operator is needed for dereferencing of a reference", "All of the mentioned"],
        answer: "All of the mentioned"
    },
    {
        questionNo: 16,
        question: " Which of the following provides a programmer with the facility of using object of a class inside other classes?",
        options:["Inheritance", "Composition", "Abstraction", "Encapsulation"],
        answer:  "Composition"
    },
    {
        questionNo: 17,
        question: "How many types of polymorphism are there in C++?",
        options:["1", "2", "3", "4"],
        answer: "2"
    },
    {
        questionNo: 18,
        question: "How run-time polymorphisms are implemented in C++?",
        options:["Using Inheritance", "Using Virtual functions", "Using Templates", "Using Inheritance and Virtual functions"],
        answer: "Using Inheritance and Virtual functions"
    },
    {
        questionNo: 19,
        question: "Which of the following is an abstract data type?",
        options:["int", "float", "class", "string"],
        answer: "class"
    },
    {
        questionNo: 20,
        question: " How compile-time polymorphisms are implemented in C++?",
        options:["Using Virtual functions", "Using Templates", "Using Inheritance", "Using Inheritance and Virtual functions"],
        answer: "Using Templates"
    },
    {
        questionNo: 21,
        question: " Which concept means the addition of new components to a program as it runs?",
        options:["Data hiding", "Dynamic binding", "Dynamic loading", " Dynamic typing"],
        answer: "Dynamic loading"
    },
    {
        questionNo: 22,
        question: "Which of the following explains the overloading of functions?",
        options:["Virtual polymorphism", "Transient polymorphism", "Ad-hoc polymorphism", "Pseudo polymorphism"],
        answer:  "Ad-hoc polymorphism"
    },
    {
        questionNo: 23,
        question: " Which of the following approach is used by C++?",
        options:["Top-down", "Bottom-up", "Left-right", "Right-left"],
        answer: "Bottom-up"
    },
    {
        questionNo: 24,
        question: "Which of the following is correct about new and malloc?",
        options:["Both are available in C", "Pointer object initialization of a class with both new and malloc calls the constructor of that class", "Pointer object initialization of a class using new involves constructor call whereas using malloc does not involve constructor call", "Pointer object initialization of a class using malloc involves constructor call whereas using new does not involve constructor call"],
        answer:  "Pointer object initialization of a class using new involves constructor call whereas using malloc does not involve constructor call"
    },
    {
        questionNo: 25,
        question: "What is virtual inheritance?",
        options:[" C++ technique to avoid multiple copies of the base class into children/derived class", "C++ technique to avoid multiple inheritances of classes", "C++ technique to avoid multiple inheritances of classes", "C++ technique to ensure that a private member of the base class can be accessed somehow"],
        answer: " C++ technique to avoid multiple copies of the base class into children/derived class"
    },
    {
        questionNo: 26,
        question: " What is the difference between delete and delete[] in C++?",
        options:["delete is used to delete normal objects whereas delete[] is used to pointer objects", "delete is a keyword whereas delete[] is an identifier", "delete is used to delete single object whereas delete[] is used to multiple(array/pointer of) objects", "delete is syntactically correct but delete[] is wrong and hence will give an error if used in any case"],
        answer: "delete is used to delete single object whereas delete[] is used to multiple(array/pointer of) objects"
    },
    {
        questionNo: 27,
        question: "What is the correct syntax of declaring array of pointers of integers of size 10 in C++?",
        options:["int arr = new int[10];", "int **arr = new int*[10];", "int *arr = new int[10];", "int *arr = new int*[10];"],
        answer: "int **arr = new int*[10];"
    },
    {
        questionNo: 28,
        question: "Which of the following is correct about new and malloc?{*i) new is an operator whereas malloc is a function*}{*ii) new calls constructor malloc does not*}{*iii) new returns required pointer whereas malloc returns void pointer and needs to be typecast*}",
        options:["i and ii", " ii and iii", " i and iii", " i, ii and iii"],
        answer: " i, ii and iii"
    },
    {
        questionNo: 29,
        question: " Which operator is overloaded for a cout object?",
        options:[">>", "<<", "<", ">"],
        answer: "<<"
    },
    {
        questionNo: 30,
        question: "Which of the following cannot be used with the virtual keyword?",
        options:["Class", "Member functions", "Constructors", "Destructors"],
        answer:  "Constructors"
    },
    {
        questionNo: 31,
        question: " Which concept is used to implement late binding?",
        options:["Virtual functions", "Operator functions", "Constant functions ", " Static functions"],
        answer: "Virtual functions"
    },
    {
        questionNo: 32,
        question: "Which of the following is correct?",
        options:["C++ allows static type checking", "C++ allows dynamic type checking.", "C++ allows static member function to be of type const.", "C++ allows both static and dynamic type checking"],
        answer: "C++ allows both static and dynamic type checking"
    },
    {
        questionNo: 33,
        question: "Which of the following supports the concept that reusability is a desirable feature of a language?",
        options:["It reduces the testing time", " It reduces maintenance cost", "It decreases the compilation time", "It reduced both testing and maintenance time"],
        answer: "It reduced both testing and maintenance time"
    },
    {
        questionNo: 34,
        question: " Which of the following is a static polymorphism mechanism?",
        options:["Function overloading", "Operator overloading", "Templates", " All of the mentioned"],
        answer: " All of the mentioned"
    },
    {
        questionNo: 35,
        question: "What happens if a class does not have a name?",
        options:["It will not have a constructor", " It will not have a destructor", " It is not allowed", "It will neither have a constructor or destructor"],
        answer: " It will not have a destructor"
    },



];


export const assessment = [
    {
        name: "JAVA",
        NoOfTest: 0,
        data: JavaData
    },
    {
        name: "PYTHON",
        NoOfTest: 0,
        data: PythonData
    },
    {
        name: "C",
        NoOfTest: 0,
        data: CData
    },
    {
        name: "C++",
        NoOfTest: 0,
        data: CppData
    }
]