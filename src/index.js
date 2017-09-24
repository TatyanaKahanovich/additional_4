module.exports = function multiply(first, second){
	var resultMultiply = [],
        first = first.split('').reverse(),
        second = second.split('').reverse(),
	    lenFirst = first.length,
	    lenSecond = second.length;


    for (var i = 0; i < lenFirst; i++){
        for (var j = 0; j < lenSecond; j++){
            if (!resultMultiply[i + j]){
                resultMultiply[i + j] = 0;
            }
            resultMultiply[i + j] += first[i] * second[j];
        }
    }
	var lenRes = resultMultiply.length;
    for (var i = 0; i < lenRes; i++){
        if (resultMultiply[i] >= 10){
            if (!resultMultiply[i + 1]){
                resultMultiply[i + 1] = 0;
            }
            resultMultiply[i + 1] += parseInt(resultMultiply[i] / 10);
            resultMultiply[i] %= 10;
        }
    }

    return resultMultiply.reverse().join('');
}