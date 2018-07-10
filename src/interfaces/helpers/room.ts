import IRoomMap from '../room/map';
interface IRoomHelper{
    createRoomMap(structures:AnyOwnedStructure[]):IRoomMap;
    createStructureProperties(structure:AnyOwnedStructure):any;
}

export default IRoomHelper;
