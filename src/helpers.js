export const fromArrayToCommaSeparated = (arr, property) => {
    const array = arr.map(({ property }) => property);
    return array.join(', ');
}

export const fromDoubleArrayToCommaSeparated = (arr, property1, property2) => {
        console.log(arr);
        const array = arr?.map(({ property1 }) => property1);
        console.log(array);
        const array2 = array.map(({ property2 }) => property2);
        return array2.join(', ');


}