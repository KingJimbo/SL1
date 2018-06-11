import MemoryService from '../../interfaces/memory';

class SLMemoryService implements MemoryService {
    cleanDeadCreeps(): void {
        // Automatically delete memory of missing creeps
        for (const name in Memory.creeps) {
            if (!(name in Game.creeps)) {
                delete Memory.creeps[name];
            }
        }
    }

}
