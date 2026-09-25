# renovate-config-dprint

[![CI - Nix Status](https://github.com/kachick/renovate-config-dprint/actions/workflows/ci-nix.yml/badge.svg?branch=main)](https://github.com/kachick/renovate-config-dprint/actions/workflows/ci-nix.yml?query=branch%3Amain+)

## Usage

[Renovate sharable config](https://docs.renovatebot.com/config-presets/) for [dprint](https://github.com/dprint/dprint) plugins.

Specify [released versions](https://github.com/kachick/renovate-config-dprint/releases). The main branch is flaky because of using for behavior testing.

```json
{
  "extends": [
    "config:recommended",
    "github>kachick/renovate-config-dprint#1.4.0"
  ]
}
```

Both `https://plugins.dprint.dev/...` and `npm:...` specifiers (introduced in [dprint 0.55](https://dsherret.dev/posts/dprint-0.55/)) are supported.\
Note: Renovate updates versions within their existing format. It does not rewrite `https:` URLs to `npm:` specifiers. Please run `dprint config update` to switch to `npm:`.

Now, it targets WASM plugins only.\
This means excluding process plugins like [dprint-plugin-prettier](https://github.com/kachick/renovate-config-dprint/issues/11) and [dprint-plugin-exec](https://github.com/dprint/dprint-plugin-exec).

When updating by bot as renovate, I recommend checking the dprint diff in CI.\
One way is to integrate [dprint/check](https://github.com/dprint/check) into your workflows.

## Targets

Tested against the following plugins.

- Official
  - typescript, markdown, json etc
- g-plane
  - malva, markup_fmt, pretty_yaml, pretty_graphql
- kachick
  - kdl, typstyle

## Example

- [Bump plugin](https://github.com/kachick/renovate-config-dprint/pull/1)

## Note

- [Official issues tracker](https://github.com/kachick/renovate-config-dprint/issues/7)
