console.log("Mohammad!");

// Bitwise Operations @https://edabit.com/challenge/vvuAkYEAArrZvmp6X

function bitwiseAND(n1: number, n2: number) : number { 
    return n1&n2; }

function bitwiseOR(n1: number, n2: number) : number { 
    return n1|n2; }
    
function bitwiseXOR(n1: number, n2: number) : number {
     return n1^n2; }

// Add up the Numbers from a Single Number @https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num: number) {
    return (num * (num + 1))/2;
  }

// A Redundant Function @https://edabit.com/challenge/hzxN9bAebBPNqdQto

function redundant(str: any){
    let f1 = () => str;
    return f1;
  }

// Array of Multiples @https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

const arrayOfMultiples = (num: number, length: any) => {
	return  ((_: any, i: number) => num * (i + 1));
}

