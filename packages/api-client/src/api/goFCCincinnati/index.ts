import consola from "consola";
import { BoilerplateIntegrationContext, TODO } from "../../types";

export const goFCCincinnati = async (
  context: BoilerplateIntegrationContext,
  params: TODO
) => {
  consola.log("goFCCincinnati has been called");

  return { data: "Hello from goFCCincinnati endpoint!" };
};
