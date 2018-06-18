
import MemoryHelper from './memory';
var chai = require('chai');
var expect = chai.expect;
//import * as sinon from "ts-sinon";
// const stubObject = sinon.stubObject;
// const stubInterface = sinon.stubInterface;
// const sandbox = sinon.default;

describe('cleanUpDeadCreeps', () => {

  let creepStub = <Creep>{name:"Creep2"};

  let gameStub = <Game>{};
  gameStub.creeps = {"Creep2": creepStub};

  let creepMemoryStub1 = <CreepMemory>{name:'Creep1'};
  let creepMemoryStub2 = <CreepMemory>{name:'Creep2'};

  const memoryStub = <Memory>{};
  memoryStub.creeps = {
      "Creep1": creepMemoryStub1,
      "Creep2": creepMemoryStub2
  };

  let memoryHelper = new MemoryHelper(gameStub, memoryStub);

  memoryHelper.cleanDeadCreeps();

  it('should remove dead creep from memory', () => {
    expect(memoryStub.creeps.Creep1).to.be.undefined;
  });

  it('should not remove defined creeps from memory', () => {
    expect(memoryStub.creeps.Creep2).to.equal(creepMemoryStub2);
  });

  //return it('logs', ()=>{ console.log('Test End')});

});
