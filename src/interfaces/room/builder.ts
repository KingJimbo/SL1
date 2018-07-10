import RoomAssessment from "models/room/assessment";

interface IRoomBuilder{
    assessRoom(room:Room):RoomAssessment;
}

export default IRoomBuilder;
