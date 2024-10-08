// Funçao geradora 
function* geradora1() {
    // codigo qualquer ...
    yield 'Valor 1';
    // codigo qualquer ...
    yield 'Valor 2';
    // codigo qualquer ...
    yield 'Valor 3';
}

const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}

function* geradora2() {
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

function* geradora3() {
    yield* geradora3();
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

//const g4 = geradora4();

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };
    yield function(){
        console.log('Vim do return');
    };

    yield function() {
        console.log('Vim do y3');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();