{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20 docker terraform awscli
  ];

  shellHook = ''
    source .env
  '';
}