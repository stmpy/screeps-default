jobTransfer = require('job.transfer');
jobCollect = require('job.collect');
Harvester = require('model.harvester');
Harvesters = require('collection.harvesters');
// Builder = require('collection.builders');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
      harvester = Harvesters.get( creep )
      // this.changeRoles( creep )
      // creep.say( "Harvesting" )
      if(creep.carry.energy < creep.carryCapacity) {
        creep.memory.transferring = false;
            var source = jobCollect.available( creep );
            // console.log( "source:", source );
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
            creep.memory.target = source.id;
            creep.memory.collecting = true;
      }
      else {
        // creep.say( "Transferring" );
        creep.memory.collecting = false;
          var target = jobTransfer.available( creep );
          // console.log( "target:", target );
          if( target ) {
              if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(target);
              }
              creep.memory.transferring = true;
              creep.memory.target = target.id;
          }
      }
  },
  changeRoles: function( creep ) {
    // if Game.constructionSite and BUILDERS.length < COUNT_BUILDER
    if( _.keys( Game.constructionSite ).length > 0 &&
      BUILDERS.length < COUNT_BUILDERS ) {
      // convert to builder
      // creep.memory.role == ROLE_BUILDER
    }

    // if all storage is full
    // convert to upgrader
    // regardless of max upgrader count
    // push creep into UPGRADERS
    // delete from HARVESTERS
  }
};

module.exports = roleHarvester;

