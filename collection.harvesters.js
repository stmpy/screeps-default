Harvester = require( 'model.harvester' );

let harvesters = {
  model: Harvester,
  all: () => {
    return _.filter( Game.creeps, (creep) => creep.memory.role == this.model.ROLE )
  },

  get: ( creep ) => {
    return creep;
  }

};

module.exports = harvesters;
