
export const decimalFormatter = (input: string) => {
    return decimalParser(input).toLocaleString('cs-CZ', { maximumFractionDigits: 2 });
};

export const decimalNumberFormatter = (input: number) => {
    return input.toLocaleString('cs-CZ', { maximumFractionDigits: 2 });
};

export const decimalParser = (input: string) => {
    const separator = getDecimalSeparator();
    const pattern = `[^\\d\\${separator}\\-]`;

    const inputForParsing = input.replace(new RegExp(pattern,"g"), '').replace(separator, '.');
    const parsedFloat = parseFloat(inputForParsing);
    if(isNaN(parsedFloat)) {
        return 0;
    }
    return parsedFloat;
};

const getDecimalSeparator = () => {
    const n = 1.1;
    return n.toLocaleString('cs-CZ').substring(1, 2);
};