# How to develop

## Setup

1. Install [Nix](https://nixos.org/) package manager
2. Run `nix develop` or `direnv allow`
3. You can use development tools

```console
> nix develop
(prepared bash)
> dprint --version
dprint 0.40.0
```

## How to write the regex?

Basically you can check in [regex101.com](https://regex101.com/r/162Ui3/1).

Keep in mind that renovatebot has [RE2](https://github.com/google/re2/wiki/Syntax) limitations.
