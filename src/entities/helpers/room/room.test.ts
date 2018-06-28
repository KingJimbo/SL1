
import RoomHelper from './room';

/// <reference path='../../../../node_modules/@types/screeps/index'/>

var chai = require('chai');
var expect = chai.expect;
import * as sinon from "ts-sinon";
import IRoomMap from 'interfaces/room/map';
const sandbox = sinon.default;

let roomHelper = new RoomHelper();

describe('createStructureMap without structures test', () => {
    let structureArrayStub = <AnyOwnedStructure[]>[];

    var map = roomHelper.createStructureMap(structureArrayStub);

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
            structureType:"controller"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'2',
            structureType:"extension"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'2',
            structureType:"extractor"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'3',
            structureType:"lab",
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'4',
            structureType:"link"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'5',
            structureType:"nuker"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'6',
            structureType:"observer"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'7',
            structureType:"powerBank"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'8',
            structureType:"powerSpawn"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'9',
            structureType:"rampart"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'10',
            structureType:"road"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'11',
            structureType:"spawn"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'12',
            structureType:"storage"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'13',
            structureType:"terminal"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'14',
            structureType:"tower"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'15',
            structureType:"wall"
        },
        {
            pos:{},
            room:{},
            hits:0,
            hitsMax:0,
            id:'16',
            structureType:"container"
        }
    ];

    var map = roomHelper.createStructureMap(structureArrayStub) as IRoomMap;

    HardTests(map);

    it('should return an array for all properties', () => {
        expect(map.container).to.be.an('array').that.is.not.empty;
        expect(map.controller).to.be.an('array').that.is.not.empty;
        expect(map.extension).to.be.an('array').that.is.not.empty;
        expect(map.extractor).to.be.an('array').that.is.not.empty;
        expect(map.lab).to.be.an('array').that.is.not.empty;
        expect(map.link).to.be.an('array').that.is.not.empty;
        expect(map.nuker).to.be.an('array').that.is.not.empty;
        expect(map.observer).to.be.an('array').that.is.not.empty;
        expect(map.powerBank).to.be.an('array').that.is.not.empty;
        expect(map.powerSpawn).to.be.an('array').that.is.not.empty;
        expect(map.rampart).to.be.an('array').that.is.not.empty;
        expect(map.road).to.be.an('array').that.is.not.empty;
        expect(map.spawn).to.be.an('array').that.is.not.empty;
        expect(map.storage).to.be.an('array').that.is.not.empty;
        expect(map.terminal).to.be.an('array').that.is.not.empty;
        expect(map.tower).to.be.an('array').that.is.not.empty;
        expect(map.wall).to.be.an('array').that.is.not.empty;
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
            'extension',
            'extractor',
            'lab',
            'link',
            'nuker',
            'observer',
            'powerBank',
            'powerSpawn',
            'rampart',
            'road',
            'spawn',
            'storage',
            'terminal',
            'tower',
            'wall'
        );
    });
}



