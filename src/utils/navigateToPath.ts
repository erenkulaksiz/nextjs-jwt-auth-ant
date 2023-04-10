import { NextRouter } from "next/router";
import { route } from "../router/route";

export function navigateToPath({key, router}: {key: number, router: NextRouter}){
  const object = route[key];
  console.log(object);
  router.push(object.path);
}