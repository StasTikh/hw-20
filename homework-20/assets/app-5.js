simpleNumbers:
for (let number = 3; number <= 1000; number++) { 
  for (let check = 2; check < number; check++) {
    if (number % check == 0) {
     continue simpleNumbers;
    }
  }
  document.writeln(number);
}