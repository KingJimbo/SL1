import IMapStructure from './structureMap';

interface IRoomMap{
    container:IMapStructure[];
    controller:IMapStructure[],
    extension:IMapStructure[],
    extractor:IMapStructure[],
    lab:IMapStructure[],
    link:IMapStructure[],
    nuker:IMapStructure[],
    observer:IMapStructure[],
    powerBank:IMapStructure[],
    powerSpawn:IMapStructure[],
    rampart:IMapStructure[],
    road:IMapStructure[],
    spawn:IMapStructure[],
    storage:IMapStructure[],
    terminal:IMapStructure[],
    tower:IMapStructure[],
    wall:IMapStructure[]
}

export default IRoomMap;
