
function romanToInts(s: string): number {
    let ans: number = 0;
    let num: number = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        switch (s.charAt(i)) {
                  case 'I':
                    num = 1;
                    break;
                  case 'V':
                    num = 5;
                    break;
                  case 'X':
                    num = 10;
                    break;
                  case 'L':
                    num = 50;
                    break;
                  case 'C':
                    num = 100;
                    break;
                  case 'D':
                    num = 500;
                    break;
                  case 'M':
                    num = 1000;
                    break;
                }
                // get number equal the charcter 
        if (4 * num < ans) {
            // if number * 4 less than saved answer 
            // subtract cuz that reverse loop
            // like IV  subtract one then add 5 = 4
            ans -= num
        } else {
            // that mean 
            ans += num
        }
    }
    return ans;
};

console.log(romanToInts("III"));
console.log(romanToInts("LVIII"));
console.log(romanToInts("MCMXCIV"));










