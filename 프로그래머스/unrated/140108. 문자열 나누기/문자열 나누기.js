function solution(s) {
    let [count1, count2, result] = [0, 0, 0]
    let ss = s.split('');
    let x = null;
    for (let i = 0; i <= ss.length - 1 ; i++) {
        if (x === null) {
            x = ss[i];
        }
        ss[i] === x ? count1++ : count2++;
        count1 === count2 ? ((x = null), (count1 = 0), (count2 = 0), result++) : '';
 
    }
    return count1 > 0 ? result + 1 : result;
}