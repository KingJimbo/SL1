import ScreepsApplication from "interfaces/app";
import SL1 from "entities/app/sl_app";

import MemoryService from "interfaces/memory";
import SLMemoryService from "entities/memory/slmemory";

class Injector {
    public getScreepsApplication():ScreepsApplication {
        return new SL1();
    }

    public getMemoryService():MemoryService{
        return new SLMemoryService();
    }
}

export default Injector;
