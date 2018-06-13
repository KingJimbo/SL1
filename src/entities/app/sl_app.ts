import ScreepApplication from "../../interfaces/app";
import IMemoryHelper from "../../interfaces/helpers/memory";
import ICreepHelper from "../../interfaces/helpers/creep";
import ICacheService from "../../interfaces/services/cache";
import ISettlementService from "../../interfaces/services/settlement";

class SL1 implements ScreepApplication {

    /**
     *
     */
    constructor(
        private memoryService: IMemoryHelper,
        private creepHelper: ICreepHelper,
        private cacheService: ICacheService,
        private settlementService: ISettlementService) {
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
