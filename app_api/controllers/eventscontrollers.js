var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var Event = mongoose.model('Event');

module.exports.eventsGetAll = function(req, res) {
    console.log('Read All Events');
    Event
      .find()
      .exec(function(err, events) {
          console.log("Found events", events.length);
          res
            .json(events);
      });
};

//changed in iteration 7 to find by event id
module.exports.eventGetOne = function(req, res) {
    var id = req.params.eventid;
    var query =  {"_id" : new ObjectId(id)};
     Event
      .findOne(query)
      .exec(function(err, event) {
          console.log("Found event", event);
              res
                 .json(event);
     });
};

var _splitArray = function(input) {
  var output;
  if (input && input.length > 0) {
    output = input.split(";");
  } else {
    output = [];
  }
  return output;
};

