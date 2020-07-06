function firstDigit(str) {

 
   let i = 0;
      
      while(isNaN(Number(str[i]))){
          i++;
       } 
      return str[i]; 


      // another solution:
      /*  const strNums = ['0', '1', '2', '3', '4','5','6','7','8','9']
       const chars = str.split('');

       for (let char of chars){
           if (strNums.includes(char)){
               return char;
           } */

      // return str[str.search(/[0-9]/)];
       }


}



/**
* Test Suite 
*/
describe('firstDigit()', () => {
    it('return the first digit in a string', () => {
        // arrange
        const str = "var_1__Int2";
        
        // act
        const result = firstDigit(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('1');
    });
});