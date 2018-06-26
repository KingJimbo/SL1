import ScreepApplication from "../../interfaces/app";
import IMemoryService from "../../interfaces/services/memory";
//import ICreepHelper from "../../interfaces/helpers/creep";
//import ICacheService from "../../interfaces/services/cache";
import IRoomService from "../../interfaces/services/room";
import ISpawningService from "../../interfaces/services/spawning";
import IEnergyService from "../../interfaces/services/energy";
import ICreepService from "../../interfaces/services/creep";
//import IEconomyService from "../../interfaces/services/economy";

class SL1 implements ScreepApplication {
    /**
     *
     */
    constructor(
        private memoryService: IMemoryService,
        //private creepHelper: ICreepHelper,
        //private cacheService: ICacheService, // Not required yet
        private roomService: IRoomService,
        private spawningService: ISpawningService,
        private energyService: IEnergyService,
        private creepService: ICreepService
        //private economyService: IEconomyService // Not required yet
    ) {
        //super();
    }

    // clean memory and evaluate settlements
    build(): void {
        this.memoryService.clean();
        this.roomService.evaluate();
    }

    // Spawning and energy requests
    init(): void {
        this.spawningService.handleSpawnRequests();
        this.energyService.handleEnergyRequests();
    }

    // state changing actions
    run(): void {
        this.spawningService.spawn();
        this.creepService.doJobs();
    }
}

export default SL1;
