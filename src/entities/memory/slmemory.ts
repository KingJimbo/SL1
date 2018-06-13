import MemoryHelper from '../../interfaces/helpers/memory';

class SLMemoryHelper implements MemoryHelper {
    cleanDeadCreeps(): void {
        // Automatically delete memory of missing creeps
        for (const name in Memory.creeps) {
            if (!(name in Game.creeps)) {
                delete Memory.creeps[name];
            }
        }
    }

}

export default SLMemoryHelper;
