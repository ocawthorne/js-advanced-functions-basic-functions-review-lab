// Your code here
function mondayWork(action="go to the office") {
   return `This Monday, I will ${action}.`
}

function wrapAdjective(str="*") {
   return function(param="special") {
      return `You are ${str+param+str}!`
   }
}

function saturdayFun(arg="roller-skate") {
   return `This Saturday, I want to ${arg}!`   
}

let Calculator = {
   add: function() { return 1 + 3 },
   subtract: function() { return 1 - 3 },
   multiply: function() { return 1 * 3 },
   divide: function() { return 10 / 5 }
}

function actionApplyer(int=0, arr=[]) {
   let a = int
   for (let i = 0; i < arr.length; i++){ a = arr[i](a) }
   return a
}
