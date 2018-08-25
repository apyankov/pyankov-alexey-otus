function sum(value) {
    if (value === undefined) return 0; // �� ������, ����� ������ ����� - ��� ����������
    else {
        let counter = value;

        return function innerSum(nextValue) { // ������ ��� ������� - ��������� ��� ������ ����� ������� � ������� sum(1)(2)...
            if (nextValue === undefined) return counter;
            else {
                counter = counter + nextValue;
                return innerSum;
            }
        }
    }
}