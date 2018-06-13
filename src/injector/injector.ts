import ScreepsApplication from "interfaces/app";
import SL1 from "entities/app/sl_app";

import MemoryService from "interfaces/helpers/memory";
import SLMemoryHelper from "entities/memory/slmemory";

class Injector {

    private memoryHelper:MemoryService;

    /**
     *
     */
    constructor() {
        this.memoryHelper = new SLMemoryHelper();
    }

    public getScreepsApplication():ScreepsApplication {
        return new SL1(this.memoryHelper,);
    }

    public getMemoryService():MemoryService{
        return this.memoryHelper;
    }
}

export default Injector;
