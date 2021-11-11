//Name             : Kinyua Jotham Kabasa
//Admission Number : CIT-223-043/2020

function convertToPostfix(infixStr) {
    let postfix = []
    let operators = []
    let top = -1
    let infix = [...infixStr]
    for (let i = 0; i < infix.length; i++) {
        if (isOperand(infix[i])) {
            postfix += infix[i]
        }
        else if (!isOpeningBracket(infix[i]) && !isClosingBracket(infix[i])) {
            while (operators.length !== 0 && !isOpeningBracket(operators[top]) && getPrecedence(infix[i]) <= getPrecedence(operators[top])) {
                postfix += operators[top];
                operators.pop()
                top -= 1
            }
            operators.push(infix[i])
            top += 1
        }
        else if (isOpeningBracket(infix[i])) {
            operators.push(infix[i]);
            top += 1
        }
        else if (isClosingBracket(infix[i])) {
            while (operators.length !== 0 && !isOpeningBracket(operators[top])) {
                postfix += operators[top]
                operators.pop()
                top -= 1
            }
            operators.pop()
            top -= 1
        }
    }
    while (operators.length !== 0) {
        postfix += operators[top]
        operators.pop()
        top -= 1
    }

    console.log(postfix)
}


function convertToPrefix(infixStr){
    let prefix = []
    let operators = []
    let top = -1
    let infix = [...infixStr]
    for (let i = infix.length - 1; i >= 0; i--) {
        if (isOperand(infix[i])) {
            prefix.push(infix[i])
        }
        else if (!isOpeningBracket(infix[i]) && !isClosingBracket(infix[i])) {
            while (operators.length !== 0 && !isOpeningBracket(operators[top]) && getPrecedence(infix[i]) <= getPrecedence(operators[top])) {
                prefix.push(operators[top]);
                operators.pop()
                top -= 1
            }
            operators.push(infix[i])
            top += 1
        }
        else if (isOpeningBracket(infix[i])) {
            operators.push(infix[i]);
            top += 1
        }
        else if (isClosingBracket(infix[i])) {
            while (operators.length !== 0 && !isOpeningBracket(operators[top])) {
                prefix.push(operators[top])
                operators.pop()
                top -= 1
            }
            operators.pop()
            top -= 1
        }
    }
    while (operators.length !== 0) {
        prefix.push(operators[top])
        operators.pop()
        top -= 1
    }

    console.log(prefix.join(''))
}

let q = "A+B-C/D^E*F"
convertToPrefix(q)
convertToPostfix(q)


//Some minor helper functions to make my code more Neat and undnerstandable

function isOperand(letter) {
    return /^[0-9A-Z]$/i.test(letter)
}

function getPrecedence(letter) {
    switch (letter) {
        case "^":
            return 3;
        case "/":
        case "*":
            return 2;
        case "+":
        case "-":
            return 1;
        default:
            return -1;
    }
}

function isOpeningBracket(c) {
    return c === '('
}

function isClosingBracket(c) {
    return c === ')'
}
