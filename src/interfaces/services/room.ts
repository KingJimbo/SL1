import RoomEvaluation from "models/room/evaluation";

interface IRoomService{
    evaluate():void;
    evaluateRoom(room:Room):RoomEvaluation;
}

export default IRoomService;
