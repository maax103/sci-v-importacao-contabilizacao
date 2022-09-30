export default function parseCSV(file) {
    let array = file.split('\n');
    const lastIndex = array.length - 1;
    if(array[lastIndex] == ""){
        array.pop();
    }
    const matrix = array.map(item=>item.split(';'))
    return matrix
}