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

## What is the [plugins.json](plugins.json)?

It is intentionally keeping in main branch and not to be updated.\
Because of version 1.1.0 actually did not point to tagged version.
I will remove it after few months.

## How to write the regex?

Basically you can check in [regex101.com](https://regex101.com/r/162Ui3/1).

Keep in mind that renovatebot has [RE2](https://github.com/google/re2/wiki/Syntax) limitations.
