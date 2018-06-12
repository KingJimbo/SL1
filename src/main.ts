import { ErrorMapper } from "utils/ErrorMapper";
import Injector from "injector/injector";

var inject = new Injector();
var SL = inject.getScreepsApplication();

export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);


  SL.build();
  SL.init();
  SL.run();

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }


});
