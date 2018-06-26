import IMemoryService from "../../../interfaces/services/memory";
import SLObject from '../../base/SLObject';

class MemoryService extends SLObject implements IMemoryService {

    /**
     *
     */
    constructor(game:Game = Game, memory:Memory = Memory) {
        super(game,memory);
    }

    clean(): void {
        this.cleanDeadCreeps();
        throw new Error("Method not implemented.");
    }

    cleanDeadCreeps(): void {
        // Automatically delete memory of missing creeps
        for (const name in this.memory.creeps) {
            if (!(name in this.game.creeps)) {
                delete this.memory.creeps[name];
            }
        }
    }
}

export default MemoryService;
