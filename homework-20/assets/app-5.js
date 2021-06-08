
for(let i=3; i<=1000 ;i++){

        var isSimple = true;

        for(let j=2; j<i; j++){
            if(i%j == 0 && i !== j){
                isSimple = false;
            }
        }
        if(isSimple == true){
            document.writeln(i);
        }
    }