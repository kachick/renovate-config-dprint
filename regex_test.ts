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
    [`"https://plugins.dprint.dev/kachick/typstyle-0.1.0.wasm"`, "{{{user}}}/dprint-plugin-{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/kachick/nix-0.1.0.wasm"`, "{{{user}}}/dprint-plugin-{{{pluginName}}}"],
    [`"https://plugins.dprint.dev/kachick/sh-0.1.0.wasm"`, "{{{user}}}/dprint-plugin-{{{pluginName}}}"],
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

Deno.test("Given npm specifier matches to correct depName and datasource", async (t) => {
  const specifierToDepName = new Map<string, string>([
    [`"npm:@dprint/typescript@0.96.1"`, "@dprint/typescript"],
    [`"npm:@dprint/json@0.24.0"`, "@dprint/json"],
    [`"npm:@dprint/markdown@0.24.0"`, "@dprint/markdown"],
    [`"npm:@dprint/toml@0.8.0"`, "@dprint/toml"],
    [`"npm:@dprint/dockerfile@0.6.0"`, "@dprint/dockerfile"],
    [`"npm:dprint-plugin-malva@0.16.0"`, "dprint-plugin-malva"],
    [`"npm:dprint-plugin-markup@0.27.5"`, "dprint-plugin-markup"],
    [`"npm:dprint-plugin-yaml@0.6.0"`, "dprint-plugin-yaml"],
    [`"npm:dprint-plugin-graphql@0.2.3"`, "dprint-plugin-graphql"],
    [`"npm:@jakebailey/dprint-plugin-gofumpt@0.0.18"`, "@jakebailey/dprint-plugin-gofumpt"],
  ]);

  for (const [specifier, expectedDepName] of specifierToDepName) {
    await t.step(specifier, () => {
      let matchedGroups: Record<string, string> | undefined;
      const manager = renovateDefault.customManagers.find((cm) =>
        cm.matchStrings.some((matcher) => {
          const re2 = new RE2(matcher, "u");
          const result = re2.exec(specifier);
          if (result?.groups) {
            matchedGroups = result.groups;
            return true;
          }
          return false;
        })
      );
      assertExists(manager);
      assertEquals(manager.datasourceTemplate, "npm");
      assertExists(matchedGroups);
      assertEquals(matchedGroups.depName, expectedDepName);
    });
  }
});
