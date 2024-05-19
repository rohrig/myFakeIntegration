import consola from "consola";
import { BoilerplateIntegrationContext, TODO } from "../../types";

export const goCyclones = async (
  context: BoilerplateIntegrationContext,
  params: TODO
) => {
  consola.log("goCyclones has been called");

  return { data: "Hello from goCyclones endpoint!" };
};
