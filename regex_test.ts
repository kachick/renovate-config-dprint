// https://github.com/google/re2-wasm is not updated in this few years, however it is easy to be used than node-re2 in deno
import { RE2 } from "npm:re2-wasm@1.0.2";

import { assertEquals, assertExists } from "jsr:@std/assert@1";

import renovateDefault from "./default.json" with { type: "json" };

Deno.test("Given URL matches to correct depNameTemplate", async (t) => {
  const urlToTemplate = new Map<string, string>([
    [`"https://plugins.dprint.dev/typescript-0.91.6.wasm"`, "dprint/dprint-plugin-{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/json-0.19.3.wasm"`, "dprint/dprint-plugin-{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/markdown-0.17.8.wasm"`, "dprint/dprint-plugin-{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/toml-0.6.2.wasm"`, "dprint/dprint-plugin-{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/dockerfile-0.3.2.wasm"`, "dprint/dprint-plugin-{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/sql-0.2.0.wasm"`, "dprint/dprint-plugin-{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/g-plane/malva-v0.10.1.wasm"`, "{{{user}}}/{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/g-plane/markup_fmt-v0.12.0.wasm"`, "{{{user}}}/{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/g-plane/pretty_yaml-v0.5.0.wasm"`, "{{{user}}}/{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/g-plane/pretty_graphql-v0.2.0.wasm"`, "{{{user}}}/{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/kachick/kdl-0.2.0.wasm"`, "{{{user}}}/dprint-plugin-{{{pluginName}}}"],
  ]);

  for (const [url, template] of urlToTemplate) {
    await t.step(url, () => {
      const manager = renovateDefault.customManagers.find((cm) =>
        cm.matchStrings.some((matcher) => {
          const re2 = new RE2(matcher, "u");
          return re2.exec(url);
        })
      );
      assertExists(manager);
      assertEquals(manager.depNameTemplate, template);
    });
  }
});
