
for(var num = 0; num < 15; num++){
    console.log(num);
}

// print num to console 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14

for (var i = 1; i < 10; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// print i to console all remainders of 3 --- 3,6,9

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

//print j to console all instances of j after j is increased by either 1 or 2 based on the conditionals.
// --1,4,5,8,10,11,14,16