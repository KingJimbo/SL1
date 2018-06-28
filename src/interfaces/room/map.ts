import IStructureMap from './structureMap';

interface IRoomMap{
    container:IStructureMap[];
    controller:IStructureMap[],
    extension:IStructureMap[],
    extractor:IStructureMap[],
    lab:IStructureMap[],
    link:IStructureMap[],
    nuker:IStructureMap[],
    observer:IStructureMap[],
    powerBank:IStructureMap[],
    powerSpawn:IStructureMap[],
    rampart:IStructureMap[],
    road:IStructureMap[],
    spawn:IStructureMap[],
    storage:IStructureMap[],
    terminal:IStructureMap[],
    tower:IStructureMap[],
    wall:IStructureMap[]
}

export default IRoomMap;
