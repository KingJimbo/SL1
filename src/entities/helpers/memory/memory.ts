import IMemoryHelper from '../../../interfaces/services/memory';
import SLObject from '../../base/SLObject';

class MemoryHelper extends SLObject implements IMemoryHelper {

    /**
     *
     */
    constructor(game:Game = Game, memory:Memory = Memory) {
        super(game,memory);
    }

    public clean(): void {
        // Automatically delete memory of missing creeps
        for (const name in this.memory.creeps) {
            if (!(name in this.game.creeps)) {
                delete this.memory.creeps[name];
            }
        }
    }

}

export default MemoryHelper;
