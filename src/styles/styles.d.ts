import "styled-components";
import { ColorsTypes, DeviceTypes, FontSizeTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    device: DeviceTypes;
  }
}
