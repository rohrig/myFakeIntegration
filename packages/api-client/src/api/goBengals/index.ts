import consola from "consola";
import { BoilerplateIntegrationContext, TODO } from "../../types";

export const goBengals = async (
  context: BoilerplateIntegrationContext,
  params: TODO
) => {
  consola.log("goBengals has been called");

  return { data: "Hello from goBengals endpoint!" };
};
