function fibonacci(n){
    let Series = [];
    if (n >= 1){
        Series.push(0);
    }
    if (n >= 2){
        Series.push(1);
    }
    for (let i=2; i<n; i++){
        Series[i] = Series[i-1] + Series[i-2];
    }
    return Series;
}
const num = 6;
const Series = fibonacci (num);
console.log(Series);
