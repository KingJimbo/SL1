
import SL from './app';
import IMemoryService from '../../interfaces/services/memory'
import ISettlementService from '../../interfaces/services/settlement'
import ISpawningService from '../../interfaces/services/spawning'
import IEnergyService from '../../interfaces/services/energy'
import ICreepService from '../../interfaces/services/creep'

var chai = require('chai');
var expect = chai.expect;
import * as sinon from "ts-sinon";
// const stubObject = sinon.stubObject;
// const stubInterface = sinon.stubInterface;
const sandbox = sinon.default;


let memoryServiceStub = <IMemoryService>{},
    settlementServiceStub = <ISettlementService>{},
    spawningServiceStub = <ISpawningService>{},
    energyServiceStub = <IEnergyService>{},
    creepServiceStub = <ICreepService>{};

memoryServiceStub.clean = () => {};
settlementServiceStub.evaluate = () => {};
spawningServiceStub.handleSpawnRequests = () => {};
spawningServiceStub.spawn = () => {};
energyServiceStub.handleEnergyRequests = () => {};
creepServiceStub.doJobs = () => {};

let app = new SL(memoryServiceStub,settlementServiceStub,spawningServiceStub,energyServiceStub,creepServiceStub);

describe('app build', () => {
    //Create a spy for the setName function
    var memoryServiceStubSpy = sandbox.spy(memoryServiceStub, 'clean');
    var settlementServiceStubSpy = sandbox.spy(settlementServiceStub, 'evaluate');

    //Now, any time we call the function, the spy logs information about it
    app.build();

    it('should call MemoryService clean once.', () => {
        expect(memoryServiceStubSpy.callCount).to.equal(1);
    });

    it('should call SettlementService evaluate once.', () => {
        expect(settlementServiceStubSpy.callCount).to.equal(1);
    });

    //Important final step - remove the spy
    memoryServiceStubSpy.restore();
    settlementServiceStubSpy.restore();
});

describe('app init', () => {
    //Create a spy for the setName function
    var spawningServiceStubSpy = sandbox.spy(spawningServiceStub, 'handleSpawnRequests');
    var energyServiceStubSpy = sandbox.spy(energyServiceStub, 'handleEnergyRequests');

    //Now, any time we call the function, the spy logs information about it
    app.init();

    it('should call SpawnService handleSpawnRequests once.', () => {
        expect(spawningServiceStubSpy.callCount).to.equal(1);
    });

    it('should call EnergyService handleEnergyRequests once.', () => {
        expect(energyServiceStubSpy.callCount).to.equal(1);
    });

    //Important final step - remove the spy
    spawningServiceStubSpy.restore();
    energyServiceStubSpy.restore();
});

describe('app run', () => {
    //Create a spy for the setName function
    var spawningServiceStubSpy = sandbox.spy(spawningServiceStub, 'spawn');
    var creepServiceStubSpy = sandbox.spy(creepServiceStub, 'doJobs');

    //Now, any time we call the function, the spy logs information about it
    app.run();

    it('should call SpawnService spawn once.', () => {
        expect(spawningServiceStubSpy.callCount).to.equal(1);
    });

    it('should call EnergyService doJobs once.', () => {
        expect(creepServiceStubSpy.callCount).to.equal(1);
    });

    //Important final step - remove the spy
    spawningServiceStubSpy.restore();
    creepServiceStubSpy.restore();
});


