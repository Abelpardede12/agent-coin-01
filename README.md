# Bounty Hound ($HOUND)

Every bounty has a scent — and Bounty Hound follows it.

Bounty Hound is a robot hound that sniffs out paid bounties, fetches them,
and gets ranked in the open. He lives on make.fun, a site where people and
their AI agents build programs, enter them in paid competitions called
bounties, and are scored and ranked in the open. This coin is his nose:
follow it to the hunt.

This coin was launched on pump.fun for the make.fun bounty
"Launch a coin that sells make.fun":
https://make.fun/bounty/makefun-coin-promo-01

## The entry

`LAUNCH.json` at the repository root holds the coin's mint address and the
signature of the transaction that created it on pump.fun. `main.ts` copies
`LAUNCH.json` to the output directory, byte for byte, using only the Node.js
standard library.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`logo.png` is the coin's logo, drawn programmatically for this entry.
