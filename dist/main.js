var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

ROLE_HARVESTER='harvester'
ROLE_BUILDER='builder'
ROLE_WORKER='worker'
ROLE_UPGRADER='upgrader'

COUNT_HARVESTERS=4
COUNT_BUILDERS=2
COUNT_UPGRADERS=3
COUNT_TOTAL=parseInt( COUNT_HARVESTERS ) +
  parseInt( COUNT_BUILDERS ) +
  parseInt( COUNT_UPGRADERS );

BUILDERS=_.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
HARVESTERS=_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
UPGRADERS=_.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
WORKERS=_.filter(Game.creeps, (creep) => creep.memory.role == 'worker' );

module.exports.loop = function () {

    // var tower = Game.getObjectById('7fdc72d1f974e4129cb63408');
    // if(tower) {
    //     var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
    //         filter: (structure) => structure.hits < structure.hitsMax
    //     });
    //     if(closestDamagedStructure) {
    //         tower.repair(closestDamagedStructure);
    //     }

    //     var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //     if(closestHostile) {
    //         tower.attack(closestHostile);
    //     }
    // }

    if(parseInt( HARVESTERS.length ) < COUNT_HARVESTERS) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: ROLE_HARVESTER});
        console.log('Spawning new harvester: ' + newName);
    }

    if(UPGRADERS.length < COUNT_UPGRADERS) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: ROLE_UPGRADER});
        console.log('Spawning new upgrader: ' + newName);
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        // TODO: combine builder and harvester
        // if resources are above 50% and there are things to build, then go build, if not then harvest
        if(creep.memory.role == ROLE_HARVESTER) {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == ROLE_UPGRADER) {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == ROLE_BUILDER) {
            roleBuilder.run(creep);
        }
    }
}
