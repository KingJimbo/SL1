import ISL from "interfaces/app";
import SL1 from "entities/app/sl_app";

import MemoryService from "interfaces/helpers/memory";
import MemoryHelper from "entities/helpers/memory/memory";

class Injector {

    private memoryHelper:MemoryService;

    /**
     *
     */
    constructor() {
        this.memoryHelper = new MemoryHelper();
    }

    public getScreepsApplication():ISL {
        throw new Error("Method not implemented.");
        //return new SL1();
    }

    public getMemoryService():MemoryService{
        return this.memoryHelper;
    }
}

export default Injector;
