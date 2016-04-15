var _=require('lodash');
var request=require('request-promise');

request("http://jsonplaceholder.typicode.com/posts")
  .then(function(response){
    console.log(response);

    var posts = JSON.parse(response);
    console.log(posts);

    var impPost= _.filter(posts,function(post){
        return _.startsWith(post.title,"dolor");
    });

    console.log(impPost);
    console.log(impPost.length);
  })
