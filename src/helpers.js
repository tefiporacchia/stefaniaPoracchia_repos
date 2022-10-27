export const fromArrayToCommaSeparated = (arr, property) => {
    const array = arr.map(({ property }) => property);
    return array.join(', ');
}


export const fromDoubleArrayToCommaSeparated = (arr, property1, property2) => {
        console.log(arr);
        const array = arr?.map(a => a[property1]);
        console.log(array);
        const array2 = array.map(a => a[property2]);
        const slicedArray = array2.slice(0,6);
        return slicedArray.join(', ');
}

export const returnNonNullElements = (elements) => {
    console.log(elements)
    let arr = [];
    for (const elem in elements) {
        console.log(elem);
        if(elements[elem]!=null && typeof elements[elem] === "string"){
            arr.push(elements[elem])
        }
    }
    return arr.slice(0,5);

}