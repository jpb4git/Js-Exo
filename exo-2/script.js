// you can write js here


function runner(age) {
    let runner = {};
    runner.age = age;
    runner.isRegistered = false;
    runner.number = Math.floor(Math.random() * 1000);

    return runner;
}

function isregistered(run) {
    if (!run.isRegistered) {
        run.isRegistered = true;
        run.number += 1000;
    }
    return run;
}
function depart(run) {


    if (run.age > 18 && run.isRegistered){
        console.log('\'You will race at 9:30 am' + 'Dossard : ' + run.number);
    }else if(run.age > 18 && !run.isRegistered){
        console.log('You will race at 11:00 am' + 'Dossard : ' + run.number);
    }else if (run.age < 18 && run.isRegistered){
        console.log('\'You will race at 12:30 am' + 'Dossard : ' + run.number);
    }else{
        console.log('registration Desk  !')
    }

}


let romain = runner(15);

//console.log(romain.age);
//console.log(romain.number);
//console.log(romain.isRegistered);
console.log('romain 15 ans unregistered')
console.log('avant registration');
depart(romain);
romain = isregistered(romain);
console.log('après registration');
depart(romain);




//console.log(romain.age);
//console.log(romain.number);
//console.log(romain.isRegistered);
console.log('romain 21 ans unregistered');
console.log('avant registration');
romain.age = 21;
romain.isRegistered = false;
Depart(romain);
romain = isregistered(romain);
console.log('après registration');
Depart(romain);

