ageCount = 1; // start the age count
age = 28;
while(ageCount < age){
    
    if (ageCount >= age/2){
        console.log("Don't ask how old I am!");   
        Process.exit();
    }
    else {
        console.log(`age ${ageCount}`);
    }
        ageCount++;
}
console.log('Jesse is ' + ageCount + 'years old');