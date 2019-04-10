// you can write js here


function runner(age) {
    let obj = {};
    obj.age = age;
    obj.isRegistered = false;
    obj.number = Math.floor(Math.random() * 1000);

    return obj;
}

function isregistered(run) {
    if (!run.isRegistered) {
        run.isRegistered = true;
        run.number += 1000;
    }
    return run;
}
/*
12.30
desk
11 h
9.30
*/

function Depart(run) {

    if (run.age >= 18) {
        if (run.age >= 18 && run.isRegistered) {
            console.log('\'You will race at 9:30 am' + 'Dossard : ' + run.number);
        } else {
            if (run.age >= 18 || run.isRegistered) {
                console.log('You will race at 11:00 am' + 'Dossard : ' + run.number);
            }
        }

    } else {

        if (run.isRegistered) {
            if (run.age < 18 && run.isRegistered) {
                console.log('Go the desk');
            }
        } else {
            if (run.age < 18 || !run.isRegistered) {
                console.log('\'You will race at 12:30 am' + 'Dossard : ' + run.number);
            }

        }
    }
}


let romain = runner(15);

console.log(romain.age);
console.log(romain.number);
console.log(romain.isRegistered);
console.log('avant registration');
Depart(romain);
romain = isregistered(romain);
console.log('après registration');
Depart(romain);

console.log(romain.age);
console.log(romain.number);
console.log(romain.isRegistered);

romain.age = 21;
romain.isRegistered = false;
Depart(romain);
romain = isregistered(romain);
console.log('après registration');
Depart(romain);

