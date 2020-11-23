export default (P, M, B) => {
    const biggerValue = Math.max(P.val, M.val, B.val)
    return ([P, M, B].forEach(element => {
        console.log(element)
        if (element.val === biggerValue) {
            return element;
        }
    }))
}