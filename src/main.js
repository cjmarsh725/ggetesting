import config from "./config";
import { renderer } from "./renderer";

export const setup = () => {
  renderer.foo = "foo";
  console.log(config());
}