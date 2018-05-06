import superagent from 'superagent'
let superagentResult = superagent.get('www.baidu.com')
export default superagentResult

// let iter = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
//   d: 'd',
//   [Symbol.iterator] () {
//     let keys = Object.keys(this);
//     let i = 0, len = keys.length;
//     return {
//       next(){
//         console.log(keys);
//         if (i === keys) {
//           return this.return();
//         }
//         i = i+1;
//         return {value: keys[i-1], done: false};
//       },
//       return(){
//         return {value: undefined, done: true}
//       }
//     }
//   }
// };

// for(let key of iter) {
//   console.log(key, iter.key)
// }
