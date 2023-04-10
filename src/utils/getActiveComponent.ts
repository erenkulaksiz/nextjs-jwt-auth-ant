import { route } from "../router/route";

export function getActiveComponent(key: number) {
  const activeComponent = route[key];
  return activeComponent.component;
}