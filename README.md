# renovate-config-dprint

[![CI - Nix Status](https://github.com/kachick/renovate-config-dprint/actions/workflows/ci-nix.yml/badge.svg?branch=main)](https://github.com/kachick/renovate-config-dprint/actions/workflows/ci-nix.yml?query=branch%3Amain+)

## Usage

[Renovate sharable config](https://docs.renovatebot.com/config-presets/) for [dprint](https://github.com/dprint/dprint) plugins.

Specify [released versions](https://github.com/kachick/renovate-config-dprint/releases). The main branch is flaky because of using for behavior testing.

```json
{
  "extends": [
    "config:recommended",
    "github>kachick/renovate-config-dprint#1.3.0"
  ]
}
```

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
