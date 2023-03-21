function combinations (n) {
    if (n == 1) {
        return ['a', 'b']
    } else {
        const tails = combinations(n - 1)
        const answer = []
        for (let i = 0; i < tails.length; i++) {
            answer.push('a' + tails[i])
            answer.push('b' + tails[i])
        }
        return answer
    }
}

console.log(combinations(8))
