//helper functions
const isDivisibleBy = (dividend, divisor) => dividend / divisor === Math.round(dividend / divisor);
const getIntegersOneTo = (k) => new Array(k).fill(null).map((_, i) => i + 1);

const getClanKey = (divisors) => (dividend) => divisors.map(divisor => isDivisibleBy(dividend, divisor) ? '1' : '0').join('');
/* Clan Key (my definition): a string of '0s' or '1s' (representing false/true) 
of the givin dividend's divisibility for the entire divisor array.
ex:  divisors = [2,3]
dividend = 1 -> clanKey = '00'
dividend = 2 -> clanKey = '10'
dividend = 6 -> clanKey = '11'
 */

//Main function
function numberOfClans(divisors, k) {
    const dividends = getIntegersOneTo(k);
    const dividendsClanKeys = dividends.map(getClanKey(divisors));

    const uniqueClans = dividendsClanKeys.reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = cur;
            acc.count++;
        }
        return acc;
    }, { count: 0 });

    return uniqueClans.count;

}