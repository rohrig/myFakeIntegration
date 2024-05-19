import consola from "consola";
import { BoilerplateIntegrationContext, TODO } from "../../types";

export const goReds = async (
  context: BoilerplateIntegrationContext,
  params: TODO
) => {
  consola.log("goReds has been called");

  return { data: "Hello from goReds endpoint!" };
};
