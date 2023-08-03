
export default {
  currencyUSD(value: string): string{
    return '$'+parseInt(value).toLocaleString('en-En')
  },
  ellipsis(s: string, max: number): string {
    if(s) {
      return (s.length > max) ? s.slice(0,max)+'...' : s
    }
    return s
  },
  capitalizeFirstCharOfEachWord(s: string): string {
    // Split the string into words
    const words = s.split(' ');

    // Capitalize the first character of each word
    const capitalizedWords = words.map((word:string) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the words back into a string
    return capitalizedWords.join(' ');
  }
}