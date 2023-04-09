// RECURSIVIDADE

function fatorial(n) {
    if ( n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))


/*

Fatorial é n!, ex: 5!

5! = 5 x 4 x 3 x 2 x 1
ou 
5! = 5 x 4!

n! = n x (n-1)!

como excecção, o fatorial de 1 o resultado é 1, 1! = 1.
*/