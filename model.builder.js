let builder = {
  ROLE: 'builder',
  all: () => {
    return _.filter( Game.creeps, (creep) => creep.memory.role == this.ROLE )
  }
}

module.exports = harvester;
