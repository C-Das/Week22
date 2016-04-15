var _= require('lodash');
  var num=[];
_.times(10,function(){
 num.push(_.random(10)) ;
});
  console.log(_.uniq(num));
