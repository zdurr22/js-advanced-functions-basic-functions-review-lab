// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(string="*") {
    return function(param="special") {
        return `You are ${string}${param}${string}!`
    }
}
const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

let actionApplyer = function(start, array) {
    let z = start

    for (let i = 0; i < array.length; i++) {
        z = array[i](z)
    }
    return z
}