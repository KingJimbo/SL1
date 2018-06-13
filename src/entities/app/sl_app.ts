import ScreepApplication from "../../interfaces/app";
import MemoryHelper from "../../interfaces/helpers/memory";
import CreepHelper from "../../interfaces/helpers/creep";
import CacheService from "../../interfaces/services/cache";
import SettlementService from "../../interfaces/services/settlement";

class SL1 implements ScreepApplication {

    /**
     *
     */
    constructor(
        private memoryService: MemoryHelper,
        private creepHelper: CreepHelper,
        private cacheService: CacheService,
        private settlementService: SettlementService) {
        //super();
    }

    // initiate caches & colony components
    build(): void {
        this.memoryService.cleanDeadCreeps();
        throw new Error("Method not implemented.");
    }

    // Spawning and energy requests
    init(): void {
        throw new Error("Method not implemented.");
    }

    // state changing actions
    run(): void {
        throw new Error("Method not implemented.");
    }
}

export default SL1;
