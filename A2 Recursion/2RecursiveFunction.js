// 1. EASY RECURSIVE FUNCTION

function countDown(num){
    if (num<=0){
        return console.log('Done')
    }

    console.log(num)
    num--
    countDown(num)
}

countDown(5)

// ----------------------------------------------------------------