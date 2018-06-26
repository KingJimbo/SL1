import IRoomService from "interfaces/services/room";
import RoomEvaluation from "models/room/evaluation";
import ISettlementService from "interfaces/services/settlement";
import IStructureHelper from 'interfaces/helpers/structure';
import IRoomHelper from "interfaces/helpers/room";

class RoomService implements IRoomService{


    /**
     *
     */
    constructor(
        private structureHelper:IStructureHelper,
        private settlementService:ISettlementService,
        private roomHelper:IRoomHelper
    ) {

    }

    private initialiseRoomStructures(room:Room){

    }

    public evaluate(): void {
        // check each rooms current level
        // define what can be built at each level
        // check what should then be built to currently built
        // check current rooms for resources
        // map settlement building locations

        throw new Error("Method not implemented.");
    }

    evaluateRoom(room: Room): RoomEvaluation {
        throw new Error("Method not implemented.");
    }

    evaluateStructure():void{

    }

    mapRoomStructures(room:Room): void {
        var structures = room.find(FIND_MY_STRUCTURES);
        var structureMap = this.roomHelper.createNewStructureMap();

        for(var structureName in structures){
            var structure = structures[structureName];
            structureMap[structure.structureType][structure.id] = this.roomHelper.createStructureProperties(structure);
        }

        throw new Error("Method not implemented.");
    }

    evaluateRoomLevel0(room:Room){
        // find road

        var structures = room.find(FIND_MY_STRUCTURES);
        var spawns: Array<StructureSpawn> = room.find(FIND_MY_SPAWNS);

        var containers: Array<Structure> = _.filter(room.find(FIND_STRUCTURES), function(structure: Structure){
            return (structure.structureType == STRUCTURE_CONTAINER)
        })

        var extensions = _.filter(structures, function(structure: Structure){
            return (structure.structureType == STRUCTURE_EXTENSION)
          })
        // container
    }

    evaluateRoomLevel1(room:Room){
        //spawn
        //road
        //container
    }

    evaluateRoomLevel2(room:Room){
        //spawn
        //extension
        //road
        //constructed wall
        //rampart
        //container

    }

    evaluateRoomLevel3(room:Room){
        //spawn
        //extension
        //road
        //constructed wall
        //rampart
        //tower
        //container

    }

    evaluateRoomLevel4(room:Room){
        //spawn
        //extension
        //road
        //constructed wall
        //rampart
        //storage
        //tower
        //container

    }

    evaluateRoomLevel5(room:Room){
        //spawn
        //extension
        //link
        //road
        //constructed wall
        //rampart
        //storage
        //tower
        //container

    }

    evaluateRoomLevel6(room:Room){
        //spawn
        //extension
        //link
        //road
        //constructed wall
        //rampart
        //storage
        //tower
        //extractor
        //terminal
        //lab
        //container

    }

    evaluateRoomLevel7(room:Room){
        //spawn
        //extension
        //link
        //road
        //constructed wall
        //rampart
        //storage
        //tower
        //extractor
        //terminal
        //lab
        //container

    }

    evaluateRoomLevel8(room:Room){
        //spawn
        //extension
        //link
        //road
        //constructed wall
        //rampart
        //storage
        //tower
        //observer
        //powerspawn
        //extractor
        //terminal
        //lab
        //container
        //nuker
    }



}

export default RoomService;
