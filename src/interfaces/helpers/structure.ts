import IStructureMap from 'interfaces/room/map';
interface IStructureHelper{
    assignStructure(structure:AnyOwnedStructure,map:IStructureMap):IStructureMap;
}

export default IStructureHelper;
