
import RoomHelper from './room';

/// <reference path='../../../../node_modules/@types/screeps/index'/>

var chai = require('chai');
var expect = chai.expect;
import * as sinon from "ts-sinon";
// const stubObject = sinon.stubObject;
// const stubInterface = sinon.stubInterface;
const sandbox = sinon.default;

var STRUCTURE_SPAWN: "spawn",
    STRUCTURE_EXTENSION: "extension",
    STRUCTURE_ROAD: "road",
    STRUCTURE_WALL: "constructedWall",
    STRUCTURE_RAMPART: "rampart",
    STRUCTURE_KEEPER_LAIR: "keeperLair",
    STRUCTURE_PORTAL: "portal",
    STRUCTURE_CONTROLLER: "controller",
    STRUCTURE_LINK: "link",
    STRUCTURE_STORAGE: "storage",
    STRUCTURE_TOWER: "tower",
    STRUCTURE_OBSERVER: "observer",
    STRUCTURE_POWER_BANK: "powerBank",
    STRUCTURE_POWER_SPAWN: "powerSpawn",
    STRUCTURE_EXTRACTOR: "extractor",
    STRUCTURE_LAB: "lab",
    STRUCTURE_TERMINAL: "terminal",
    STRUCTURE_CONTAINER: "container",
    STRUCTURE_NUKER: "nuker";


let roomHelper = new RoomHelper();

describe('createStructureMap without structures test', () => {
    let structureArrayStub = <AnyOwnedStructure[]>[];
    //Now, any time we call the function, the spy logs information about it
    var map = roomHelper.createStructureMap(structureArrayStub);

    // it('should return an object', () => {
    //     expect(map).to.be.an('object');
    // });

    // it('should return an object with all keys', () => {
    //     expect(map).to.have.all.keys(
    //         'container',
    //         'controller',
    //         'extensions',
    //         'labs',
    //         'links',
    //         'nuker',
    //         'observer',
    //         'powerBank',
    //         'powerSpawn',
    //         'ramparts',
    //         'roads',
    //         'spawns',
    //         'storage',
    //         'terminal',
    //         'towers',
    //         'walls'
    //     );
    // });

    HardTests(map);

    it('should return empty container array', () => {
        expect(map.container).to.be.an('array').that.is.empty;
    });

});

describe('createStructureMap with structures test', () => {
    let structureArrayStub = <AnyOwnedStructure[]>[
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'1',
            structureType:STRUCTURE_CONTROLLER
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'2',
            structureType:STRUCTURE_EXTENSION
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'2',
            structureType:STRUCTURE_EXTRACTOR
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'3',
            structureType:STRUCTURE_LAB,
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'4',
            structureType:STRUCTURE_LINK
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'5',
            structureType:STRUCTURE_NUKER
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'6',
            structureType:STRUCTURE_OBSERVER
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'7',
            structureType:STRUCTURE_POWER_BANK
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'8',
            structureType:STRUCTURE_POWER_SPAWN
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'9',
            structureType:STRUCTURE_RAMPART
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'10',
            structureType:STRUCTURE_ROAD
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'11',
            structureType:STRUCTURE_SPAWN
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'12',
            structureType:STRUCTURE_STORAGE
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'13',
            structureType:STRUCTURE_TERMINAL
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'14',
            structureType:STRUCTURE_TOWER
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'15',
            structureType:STRUCTURE_WALL
        }
    ];

    var map = roomHelper.createStructureMap(structureArrayStub);

    HardTests(map);

    it('should return empty container array', () => {
        expect(map.container).to.be.an('array').that.is.not.empty;
    });
});


function HardTests(map:any){
    it('should return an object', () => {
        expect(map).to.be.an('object');
    });

    it('should return an object with all keys', () => {
        expect(map).to.have.all.keys(
            'container',
            'controller',
            'extensions',
            'labs',
            'links',
            'nuker',
            'observer',
            'powerBank',
            'powerSpawn',
            'ramparts',
            'roads',
            'spawns',
            'storage',
            'terminal',
            'towers',
            'walls'
        );
    });
}



