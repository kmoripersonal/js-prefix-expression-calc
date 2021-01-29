const isOperator = (txt) => {
    return ["+", "-", "*", "/"].includes(txt);
};

const calcPrefixExpression = (exp) => {
    const ops = exp.split(" ");
    const stk = [];

    ops.reverse().forEach((op) => {
        if (!isOperator(op)) {
            stk.push(parseInt(op));
        } else {
            const o1 = stk.pop();
            const o2 = stk.pop();

            if (op === "+") stk.push(o1 + o2);
            else if (op === "-") stk.push(o1 - o2);
            else if (op === "*") stk.push(o1 * o2);
            else stk.push(o1 / o2);
        }
    })

    return stk.pop();
};

console.log("+ + 12 16 * 10 4");
