function allLongestStrings(inputArray) {
    const stringSizeHash = inputArray.reduce((acc, cur) => {
        acc[cur.length] = (acc[cur.length] || []).concat(cur);
        return acc;
    }, {});

    const longest = Math.max(...Object.keys(stringSizeHash));

    return stringSizeHash[longest];

}
