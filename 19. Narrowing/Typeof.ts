type Mytype = string | number;

function exampleFunction(value:Mytype) {
    if(typeof value === 'string')
        console.log(value.toUpperCase());
    else
        console.log(value.toFixed(2));
}

exampleFunction('hello');
exampleFunction(67);