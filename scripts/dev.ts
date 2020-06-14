import { build } from "./build.ts";
import { run } from "./run.ts";

export async function dev(
  file: string = Deno.args[0]
) {
  await build();
  await run();
}

if (import.meta.main) {
  await dev();
}
