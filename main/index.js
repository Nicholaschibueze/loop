/*let y = 2;
while (y <= 100) {
    console.log(y);
    y++;
}*/

/*let v = 2
let increment = 4
v += increment
v = v + increment
console.log(v)*/

/*function printer(surname, firstname, lastname) {
    let fullname = surname + " " + firstname; // michael nicholas
    fullname += " lastname : " + lastname; // michael: chibueze   
    console.log(fullname)


}
printer("michael", "nicholas", "chibueze")
console.log(printer)*/

function num(start, end, incr) {
    for (start = 0; start <= end; start += incr)
        console.log(start);

}

num(0, 100, 5)