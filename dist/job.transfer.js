/**
 * Return a structure awaiting energy transfer
 */
var jobTransfer = {
  available: function( creep ) {
    var targets = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_EXTENSION ||
          structure.structureType == STRUCTURE_SPAWN ||
          structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
      }
    });
    return _.first( targets );
  }
}

module.exports = jobTransfer;
