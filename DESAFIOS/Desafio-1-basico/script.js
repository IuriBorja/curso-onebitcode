


function calc (a, b, c, d, e, f) {
    return ((((a + b) - c) * d) / e) **f;
}

console.log(calc(6,5,4,3,2,1));
console.log(calc(6,2,1,4,2,3));




/* ----------------- */


function info (text, flag = "start") {
    if (flag === "start") {
        return text.slice(0, 3);
    } else if (flag === "end") {
        return text.slice(-3);
    } else if (text.length < 3){
        return text
    }
}

console.log(info("abcdefg", "start"));
console.log(info("abcdefg", "end"));
console.log(info("abcdefg"));




/* ____________________ */



function info2 (fullname, flag = "") {
    if(flag === "firstname") {
        return fullname.shift();
    } else if (flag === "lastname") {
        return fullname.pop();
    } else if (flag === "" || fullname.length === 1) {
        return fullname;
    }
}


/* console.log(info2("iuri marques borja", "lastname")); */


/* MODO PROFESSOR */

function info3 (fullname, flag = "") {
    const parts = fullname.split(" ");
    if (flag.length == 0 || parts.length <= 1) {
        return fullname;
    } else if (flag === "firstname") {
        return parts[0];
    }
    return parts.slice(1).join(" ");
}

console.log(info3("iuri marques borja", "lastname"));


/* -------------------------------- */




function vf (a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(vf(3));




/* _--------------------- */





function vezes (a, b) {
    if (a.length === "b") {
        a.filter(item => item === "b");
        return a;
    } 
}

console.log(vezes(["a", "b", "c", "d", "b"], ))