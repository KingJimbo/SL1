import IRoomHelper from "interfaces/helpers/room";
import IRoomMap from "interfaces/room/map";
import IMapStructure from "interfaces/room/structureMap"

class RoomHelper implements IRoomHelper{
    createStructureProperties(structure:AnyOwnedStructure):any {
        throw new Error("Method not implemented.");
    }

    createRoomMap(structures:AnyOwnedStructure[]):IRoomMap {

        var structureMap = this.createNewRoomMap() as any;

        if(structures){
            for(var name in structures){
                var structure = structures[name];
                (structureMap[structure.structureType] as IMapStructure[]).push({placementOrder:0, pos: structure.pos});
            }
        }

        return structureMap;
    }

    private createNewRoomMap():IRoomMap{
        return {
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
        } as IRoomMap;
    }

}

export default RoomHelper;
