/// <reference path='../../../node_modules/@types/screeps/index.d.ts' />

export module SLMemory {

    export class CreepMemoryManager{
        /**
         *
         */
        constructor() {
            //super();

        }

        public CleanCreepMemory():void{
            // Automatically delete memory of missing creeps
            for (const name in Memory.creeps) {
                if (!(name in Game.creeps)) {
                delete Memory.creeps[name];
                }
            }
        }
    }

}
