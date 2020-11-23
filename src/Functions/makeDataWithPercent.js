export default (data, totalOfValues) => {
    return {name: data.name, val: data.val / totalOfValues * 100}
}