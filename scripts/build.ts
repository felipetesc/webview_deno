export async function build() {
  const command = ["cargo", "build", "--release", "--locked"];

  const cargo = Deno.run({
    cmd: command,
  });

  if (!(await cargo.status()).success) {
    Deno.exit(1);
  }
}

if (import.meta.main) {
  await build();
}
