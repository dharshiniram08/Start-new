import { stdout } from "node:process"
import readline from "readline";
const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
rl.question("Entera word: ", (input) => {
    let str =input.toLowerCase();
    let reversed=""
    for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];

  }

if(str=== reversed) 

  {
    console.log("this is palindrome");
  }
  else{
    console.log("this is not an palindrome");

  }
  rl.close();

  
});

