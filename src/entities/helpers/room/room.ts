import IRoomHelper from "interfaces/helpers/room";
import IRoomMap from "interfaces/room/map";

class RoomHelper implements IRoomHelper{
    createStructureProperties(structure:AnyOwnedStructure):any {
        throw new Error("Method not implemented.");
    }
    createStructureMap(structures:AnyOwnedStructure[]):any {

        var structureMap = {
            container:[],
            controller:[],
            extension:[],
            extractor:[],
            lab:[],
            link:[],
            nuker:[],
            observer:[],
            powerBank:[],
            powerSpawn:[],
            rampart:[],
            road:[],
            spawn:[],
            storage:[],
            terminal:[],
            tower:[],
            wall:[]
        } as any;

        if(structures){
            for(var name in structures){
                var structure = structures[name];
                (structureMap[structure.structureType] as string[]).push(structure.id);
            }
        }

        return structureMap;
    }

}

export default RoomHelper;
