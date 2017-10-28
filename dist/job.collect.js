/**
 * Find an energy source to collect from
 */
var jobCollect = {
  available: function( creep ) {
    if( creep.memory.collecting && creep.memory.target ) {
      return Game.getObjectById( creep.memory.target );
    }
    var targets = creep.room.find( FIND_SOURCES, {
      filter: (source) => {
        // TODO: locational? the least populated?
        return source.energy > 0
      }
    });
    // for now ... just assign the target at random ... ish
    if( targets.length > 0 )
      return targets[ _.random(targets.length - 1) ];
    else
      return null
  }
}

module.exports = jobCollect
