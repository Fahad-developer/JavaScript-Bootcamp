// Imedietly Invoked Function Expression (IIFE)


// (function chai(){
//     console.log(`DB Connected`);
// })(); // () <- Execution call, ; is very Important


// ((name) => {
//     console.log(`DB Connected ${name}`);
// })('Fahad')


// IFFE ka andar koi bhi variable banai ga wo imedielty private ho jata hai. iska matlab wo variable access nahi ho sakta.
// ya variable sirf IFFE ka andar acccess ho sakta hai.
var ans = (function() {
    var privateval = 10;

    return {
        getter: function() {
            console.log(privateval);
        },
        setter: function(arg){
            privateval = arg 
            console.log(privateval);
        }
    };
})();

console.log(ans.setter(3));



