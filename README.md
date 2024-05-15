# renovate-config-dprint

[![CI - Nix Status](https://github.com/kachick/renovate-config-dprint/actions/workflows/ci-nix.yml/badge.svg?branch=main)](https://github.com/kachick/renovate-config-dprint/actions/workflows/ci-nix.yml?query=branch%3Amain+)

## Usage

[Renovate sharable config](https://docs.renovatebot.com/config-presets/) for [dprint](https://github.com/dprint/dprint) plugins.

```json
{
  "extends": [
    "config:base",
    "github>kachick/renovate-config-dprint"
  ]
}
```

Now targets WASM plugins in [dprint official](https://github.com/dprint?q=plugin&type=all&language=&sort=) only.\
It means to exclude process plugins like [dprint-plugin-prettier](https://github.com/kachick/renovate-config-dprint/issues/11) and [dprint-plugin-exec](https://github.com/dprint/dprint-plugin-exec).

When updating by bot as renovate, I recommend to check the dprint diff in CI.\
A way is to integrate [dprint/check](https://github.com/dprint/check) in your GitHub Actions.

## Example

- [Bump plugin](https://github.com/kachick/renovate-config-dprint/pull/1)

## Note

- [Official issues tracker](https://github.com/kachick/renovate-config-dprint/issues/7)
