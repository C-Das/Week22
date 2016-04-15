var _=require('lodash');
var request=require('request-promise');

request("http://jsonplaceholder.typicode.com/albums")
  .then(function(response){
    console.log(response);

    var albums = JSON.parse(response);
    var results = {};

    var results = _.groupBy(albums,'userId');
    console.log(results);

    // _.each(albums,function(album){
    //   console.log(album);
    //  if(results[album.userId]){
    //   results[album.userId].push(album);
    // } else {
    //   results[album.userId]= [album];
    //   // console.log(album.userId);
    // }
    // });
  })
