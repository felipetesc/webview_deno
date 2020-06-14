export async function run(
  file: string = Deno.args[0]
) {
  const env: {
    [key: string]: string;
  } = {
    DENO_WEBVIEW_PLUGIN_BASE: "file://./target/release",
    DENO_WEBVIEW_DEBUG: "1",
  };

  const process = Deno.run({
    cmd: ["deno", "run", "-A", "-r", "--unstable", file],
    env,
  });

  if (!(await process.status()).success) {
    Deno.exit(1);
  }
}

if (import.meta.main) {
  await run();
}
