
import MemoryHelper from './memory';
//import { expect } from 'chai';
var chai = require('chai');
var expect = chai.expect;
// var sinon = require('ts-sinon');
// var stubObject = sinon.stubObject;
//import 'mocha';

import * as sinon from "ts-sinon";
const stubObject = sinon.stubObject;
const stubInterface = sinon.stubInterface;



describe('cleanUpDeadCreeps', () => {

  it('should remove any creep memory', () => {
    const creepStub = stubInterface<Creep>();

    const memoryStub = stubInterface<Memory>();
    const gameStub = stubInterface<Game>();

    expect(memoryStub.creeps).to.be.undefined;
    memoryStub.creeps = {
      "Creep1":{ id: 1},
      "Creep2":{ id: 2}
    };

    gameStub.creeps = [

      {
      "Creep2":{ id: 2}
    }]

    let memoryHelper = new MemoryHelper();
    memoryHelper.cleanDeadCreeps();
    expect(result).to.equal('Hello world!');
  });

  // it('should return 1', () => {
  //   const result = 1;
  //   expect(result).to.equal(1);
  // });

});
