class SpawnService{

    private memory:any;
    /**
     *
     */
    constructor(memory:Memory = Memory, game:Game = Game) {
        // initialise spawn queues
        this.memory = memory as any;
        this.intialiseSpawnMemory();
    }

    addSpawn(spawn:StructureSpawn){
        this.memory
    }

    removeSpawn(spawn:StructureSpawn){

    }

    private intialiseSpawnMemory(){
        if(!this.memory.spawn){
            this.memory.spawn = {
                queues:{
                    availableSpawns:{},
                    creeps:[],
                    creepsPriority:[]
                }
            };
        }
    }
}
