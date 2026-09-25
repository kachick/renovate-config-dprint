# renovate-config-dprint

[![CI - Nix Status](https://github.com/kachick/renovate-config-dprint/actions/workflows/ci-nix.yml/badge.svg?branch=main)](https://github.com/kachick/renovate-config-dprint/actions/workflows/ci-nix.yml?query=branch%3Amain+)

## Usage

[Renovate sharable config](https://docs.renovatebot.com/config-presets/) for [dprint](https://github.com/dprint/dprint) WASM plugins.

Specify [released versions](https://github.com/kachick/renovate-config-dprint/releases). The main branch may be unstable because it is used for testing.

```json
{
  "extends": [
    "config:recommended",
    "github>kachick/renovate-config-dprint#1.4.0"
  ]
}
```

Both `https://plugins.dprint.dev/...` and `npm:...` (introduced in [dprint 0.55](https://dsherret.dev/posts/dprint-0.55/)) specifiers are supported.\
Note: Renovate updates versions within their existing format. It does not rewrite `https:` URLs to `npm:` specifiers. Please run `dprint config update` to switch to `npm:`.

This config only supports WASM plugins. It does not support process plugins like [dprint-plugin-prettier](https://github.com/kachick/renovate-config-dprint/issues/11) and [dprint-plugin-exec](https://github.com/dprint/dprint-plugin-exec).

When Renovate updates plugins, checking the dprint diff in CI is recommended.\
One way is to integrate [`dprint/check`](https://github.com/dprint/check) into your workflows.

## Targets

Tested against the following plugins.

- Official
  - typescript, markdown, json etc
- g-plane
  - malva, markup_fmt, pretty_yaml, pretty_graphql
- kachick
  - kdl, typstyle, nix, sh
- jakebailey
  - gofumpt

## Example

- [https://plugins.dprint.dev/...](https://github.com/kachick/renovate-config-dprint/pull/1)
- [npm:...](https://github.com/kachick/renovate-config-dprint/pull/572)

## Note

- [Official issues tracker](https://github.com/kachick/renovate-config-dprint/issues/7)
