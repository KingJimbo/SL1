import IRoomBuilder from "interfaces/room/builder";
import RoomAssessment from "../../../models/room/assessment";

class RoomBuilder implements IRoomBuilder{
    assessRoom(room: Room): RoomAssessment {
        throw new Error("Method not implemented.");
    }

}

export default RoomBuilder;
