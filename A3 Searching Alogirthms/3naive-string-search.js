/*
To find short string inside a long string

naiveSearch(long, short)
long - given string
short - target string we have to find

*/

function naiveSearch(long, short){
    for (let i = 0; i < long.length ; i++) {
        for (let j =0 ; j < short.length; j++){
            console.log(long[i], short[j])
            if(short[j] !== long[i+j]){
                console.log('brek')
            }
        }
    }
}


const answer = naiveSearch("lorie loled" , "lol")