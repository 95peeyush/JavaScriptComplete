const day = 'monday';


switch (day) {
    case 'monday': //day==='monday' strict checking
        console.log(`It's Monday sprint Planning`);
        console.log(`Join the planning meeting`);
        break;
    case 'tuesday':
        console.log(`It's Tuesday let have knowledge sharing session`);
        break;
    case 'wednesday':
    case 'thrusday':
        console.log(`Wed and thrus are for picking up stories`);
        break;
    case 'friday':
        console.log(`Friday it is try to finish story`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`It's weekend let's prepare for ourself !!`);
        break;
    default:
        console.log(`Not a valid weekday 😭`);

}


if (day === 'monday') {
    console.log(`It's Monday sprint Planning`);
    console.log(`Join the planning meeting`);
} else if (day === 'tuesday') {
    console.log(`It's Tuesday let have knowledge sharing session`);
} else if (day === 'wednesday' || day === 'thrusday') {
    console.log(`Wed and thrus are for picking up stories`);
} else if (day === 'friday') {
    console.log(`Friday it is try to finish story`);
} else if (day == 'saturday' || day == 'sunday') {
    console.log(`It's weekend let's prepare for ourself !!`);
} else {
    console.log(`Not a valid weekday 😭`);
}