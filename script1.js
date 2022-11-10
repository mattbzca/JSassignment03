// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
let limit = 0;

for (let i = 0; i < limit; i++) {
    let output = "";

    while (output.length <= 1) {
        output += "#";
    }
    console.log(output);
}

for (let i = limit - 2; i >= 0; i--) {
    let output = "";
    
    while (output.length <= 1) {
        output += "#";
    }
    console.log(output);
}


