import frontendRouteMap from "./frontendRouteMap";
import { Home,} from "../../pages";

export default function route() {
  return [
    {
      path: frontendRouteMap.HOME.path,
      name: "Home",
      element:<Home />,
    },
  ];
}
