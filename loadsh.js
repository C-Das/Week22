var _ = require('lodash');
var presidentialCandidatesOfDoom = [
    {
        "name": "Bern",
        "lairs": [{"name":"Washington"}, {"name": "Vermont"}, {"name": "Brooklyn"}]
    },
    {
        "name": "Hillary",
        "lairs": [{"name":"Washington"}, {"name": "New York"}, {"name": "Arkansas"}]
    },
    {
        "name": "Trump",
        "lairs": [{"name":"New York"}]
    },
    {
        "name": "Cruz",
        "lairs": [{"name": "Washington"}, {"name": "New York"}]
    }
]

// for(var i = 0; i < presidentialCandidatesOfDoom.length; i++){
//     console.log(presidentialCandidatesOfDoom[i].lairs[0].name);
// }

// console.log(_.map(presidentialCandidatesOfDoom, 'lairs[0].name'));

var lairs = _.map(presidentialCandidatesOfDoom, function(president){
    return _.map(president.lairs,function(lair){
        return lair.name;
    });
});

var flattenedLairs = _.flatten(lairs);
var uniqueLairs = _.uniq(flattenedLairs);
var sortedLairs = uniqueLairs.sort();

console.log(sortedLairs);


