let str = '1VIagrA9XX0';

function checkSpam(str) {
    let newStr = str.toLowerCase();

    if(newStr.includes('viagra') || newStr.includes('xxx')) {
        return true;
    } else return false;
}

const value = checkSpam(str);

console.log(value);