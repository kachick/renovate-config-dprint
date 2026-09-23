{
  inputs = {
    nixpkgs.url = "https://channels.nixos.org/nixpkgs-unstable/nixexprs.tar.xz";
  };

  outputs =
    {
      self,
      nixpkgs,
    }:
    let
      inherit (nixpkgs) lib;
      forAllSystems = lib.genAttrs lib.systems.flakeExposed;
    in
    {
      formatter = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        pkgs.writeShellApplication {
          name = "dprint-fmt";
          runtimeInputs = with pkgs; [
            dprint
          ];
          text = ''
            dprint fmt "$@"
          '';
        }
      );

      devShells = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        {
          default = pkgs.mkShellNoCC {
            buildInputs = (
              with pkgs;
              [
                bashInteractive
                findutils # xargs
                nixd
                go-task
                typos
                gh

                deno

                dprint
                renovate
              ]
            );
          };
        }
      );
    };
}
