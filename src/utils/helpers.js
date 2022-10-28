export const toUppercase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const fromDoubleArrayToCommaSeparated = (arr, property1, property2) => {
        const array = arr?.map(a => a[property1]);
        const array2 = array.map(a => a[property2]);
        const slicedArray = array2.slice(0,6);
        return slicedArray.join(', ');
}

export const returnNonNullElements = (elements) => {
    let arr = [];
    for (const elem in elements) {
        if(elements[elem]!=null && typeof elements[elem] === "string"){
            arr.push(elements[elem])
        }
    }
    return arr.slice(0,5);

}