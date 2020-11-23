export default (P, M, B) => {
    if (P.val === M.val) {
        return {exception: true, data: P}
    }else if (P.val === B.val) {
        return {exception: true, data: P}
    }else if (M.val === B.val) {
        return {exeption: true, data: M}
    }else if (P.val === 0 && M.val === 0 && B.val === 0) {
        return {exception: true, data: null}
    }
    return {exception: false, val: "Uncaught condition"}
 }