const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let listOfJourneyStartLocations = [];
    const result = this.journeys.map((journey)=>{
      listOfJourneyStartLocations.push(journey.startLocation)
    });
    return listOfJourneyStartLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  let listOfJourneyEndLocations = [];
    const result = this.journeys.map((journey)=>{
      listOfJourneyEndLocations.push(journey.endLocation)
    });
    return listOfJourneyEndLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let listOfJourneysByTransport = [];
    const result = this.journeys.filter((journey)=>{
      if (journey.transport === transport)
        listOfJourneysByTransport.push(journey)
    });
    return listOfJourneysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
      return journey.distance > minDistance;
    })
    return result
  };
  // let listOfJourneysByMinDistance = [];
  //   const result = this.journeys.filter((journey)=>{
  //     if (journey.distance > minDistance);
  //       listOfJourneysByMinDistance.push(journey);
  //   });
  //   return listOfJourneysByMinDistance;
// };

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    const totalDistance = this.journeys.reduce((runningTotal, journey)=>{
      return runningTotal + journey.distance
    },0);
    return totalDistance
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
