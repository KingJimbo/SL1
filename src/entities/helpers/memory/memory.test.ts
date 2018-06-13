
import MemoryHelper from './memory';
//import { expect } from 'chai';
var chai = require('chai');
var expect = chai.expect;
//import 'mocha';

describe('cleanUpDeadCreeps', () => {

  it('should remove any creep memory', () => {
    let memory = new Memory();
    Memory.creeps = {};
    Memory.creeps["Creep1"] = { id: 1};
    Game.creeps["Creeps2"] = { id: 2};
    let memoryHelper = new MemoryHelper();
    memoryHelper.cleanDeadCreeps();
    expect(result).to.equal('Hello world!');
  });

  // it('should return 1', () => {
  //   const result = 1;
  //   expect(result).to.equal(1);
  // });

});
