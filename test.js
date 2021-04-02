const { whatIsTheMeaningOfLife } = require("./utils");

if(whatIsTheMeaningOfLife() == 42){
    console.log("Test success");
    process.exit(0);
}
else{
    console.log("Test fail");
    process.exit(1);
}
