//A.01 - START
function findOppositeNumber(n,inputNumber) {
    if (n % 2 == 0 && 4 <= n <= 20 && 0 <= inputNumber <= n) {
        let avg = n / 2;
        if (inputNumber < avg) {
            let oppNum = avg + inputNumber;
            console.log(`Số đối diện là: ${oppNum}`);
        } else {
            oppNum = inputNumber - avg;
            console.log(`Số đối diện là: ${oppNum}`);
        }
        return true;
    } else {
        console.log("Tham số đầu vào chưa hợp lệ. Vui lòng thử lại!");
    }
}
//Testcase
findOppositeNumber(10,2);
findOppositeNumber(10,6);
//A.01 - END

//A.02 - START
function merge2String(s1, s2) {
    let x = Math.min(s1.length,s2.length);
    let s3 = '';
    for(i = 0; i < x; i++)
    {
        s3 += s1[i] + s2[i];
    }
    if(s1.length > x)
    {
        console.log(`Chuỗi mới là: ${s3 + s1.slice(x,s1.length)}`);
    }
    else if(s2.length > x)
    {
        console.log(`Chuỗi mới là: ${s3 + s2.slice(x,s2.length)}`);
    }
    else
    {
        console.log(`Chuỗi mới là: ${s3}`);
    }
}
//Testcase
merge2String("abc", "123");
merge2String("abc", "0123");
merge2String("abcd", "123");
//A.02 - END