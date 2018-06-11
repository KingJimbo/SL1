import ScreepsApplication from "interfaces/app";
import SL1 from "entities/app/sl_app";

class Injector {
    public getScreepsApplication():ScreepsApplication {
        return new SL1();
    }
}

export default Injector;
