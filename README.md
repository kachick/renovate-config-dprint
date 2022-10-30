# renovate-config-dprint

## Usage

[Renovate sharable config](https://docs.renovatebot.com/config-presets/) for [dprint](https://github.com/dprint/dprint) and the plugins.

```json
{
  "extends": [
    "config:base",
    "github>kachick/renovate-config-dprint"
  ]
}
```

It targets [dprint official plugins](https://github.com/dprint?q=plugin&type=all&language=&sort=) except WASM based as [dprint-plugin-prettier](https://github.com/kachick/renovate-config-dprint/issues/11).

When updating by bot as renovate, I recommend to check the dprint diff in CI.\
A way is to integrate [dprint/check](https://github.com/dprint/check) in your GitHub Actions.

## Example

- [Bump plugin](https://github.com/kachick/renovate-config-dprint/pull/1)

## Note

- [Official issues tracker](https://github.com/kachick/renovate-config-dprint/issues/7)
