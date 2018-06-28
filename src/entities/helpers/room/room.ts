import IRoomHelper from "interfaces/helpers/room";

class RoomHelper implements IRoomHelper{
    createStructureProperties(structure:AnyOwnedStructure):any {
        throw new Error("Method not implemented.");
    }
    createStructureMap(structures:AnyOwnedStructure[]):any {

        var structureMap = {
            container:[],
            controller:{},
            extensions:[],
            labs:[],
            links:[],
            nuker:{},
            observer:[],
            powerBank:{},
            powerSpawn:{},
            ramparts:[],
            roads:[],
            spawns:[],
            storage:[],
            terminal:{},
            towers:[],
            walls:[]
        };

        if(structures){
            for(var name in structures){
                var structure = structures[name];

            }
        }

        return structureMap;
    }

}

export default RoomHelper;
