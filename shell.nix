{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20 docker terraform awscli
  ];

  shellHook = ''
    export NODE_ENV=development
    source .env
  '';
}