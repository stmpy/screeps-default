Builder = require( 'model.builder' );
let builders = {
  model: Builder,
  all: () => {
    return _.filter( Game.creeps, (creep) => creep.memory.role == this.model.ROLE )
  },

  get: ( creep ) => {
    return creep;
  }

};

export.modules = builders;
