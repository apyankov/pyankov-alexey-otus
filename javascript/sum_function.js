function sum(value) {
    if (value === undefined) return 0; // на случай, когда первый вызов - без параметров
    else {
        let counter = value;

        return function innerSum(nextValue) { // именно эта функция - принимает все вызовы после первого в цепочке sum(1)(2)...
            if (nextValue === undefined) return counter;
            else {
                counter = counter + nextValue;
                return innerSum;
            }
        }
    }
}