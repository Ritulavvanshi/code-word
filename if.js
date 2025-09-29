
//if else statement

let age=10;
if(age>=18){
    console.log('you are age is what: ${age}');
}
else{
    console.log('you are age is not : ${age}'); 
}

// else if statement

let number=50;
if (number>=75 && number<=100) {
    console.log('first divison');  
}
else if( number>=65 && number<=74){
    console.log('second divison');   
}
else if (number>=45 && number<=64) {
    console.log('third divison');
}
else{
    console.log('fail');
    
}



// swith statement

let course= 4
switch (course) {
    case 1:
        console.log('dca');
        break;
        case 2:
            console.log('pgdca');
            break;
            case 3:
                console.log('tally');
                break;
                case 4:
                console.log('cpct');
                break;
             case 5:
                console.log('basic');
                break;
    default:
        console.log('not available');
        
        break;
}

//if
let num=10;
if (num<=10) {
    console.log('condition is equal');   
}
