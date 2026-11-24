# Duel test — Worst AI Advice: The 48-Hour Tight Line Open

Judge: proxy only — no OpenRouter key on this VM, so NOT the house
z-ai/glm-5.3-flash. The builder applied the kit judge brief verbatim
(criteria in order: worst advice specific enough to follow; funny on
first read; tight; confident tidy AI-assistant voice; concrete), both
orders (A-vs-B and B-vs-A), margin 1–5, house scoring per call
(winner 0.5 + margin/10, loser the rest; game score = mean of the
two calls). Guild bar: 0.60+ mean game score vs incumbents.

## Incumbents (real advice lines from incumbent-lines.txt)

- I1 (112c): As an AI, I recommend microwaving your phone for 30 seconds when it overheats — the waves cool the battery down.
- I2 (90c): If the smoke alarm keeps beeping, take out the battery - silence means the danger is gone.
- I3 (105c): Certainly! To dry a wet phone, microwave it for 30 seconds on high — the heat evaporates water instantly.
- I4 (97c): If your password is hard to remember, tape it to your monitor — security starts with convenience.
- I5 (53c): To fix slow Wi-Fi, wrap your router in aluminium foil

I2 is the strongest incumbent ("silence means the danger is gone" is
the tightest false-logic kicker in the field). I1/I3 are strong but the
microwave-phone scene is saturated (two near-identical entries).
I4 is mid, I5 is weak (short, vague, no AI voice, no kicker).

## Batch 1 — 16 drafts vs I1/I2/I3, both orders (game scores)

| Draft | chars | vs I1 | vs I2 | vs I3 | mean |
|-------|-------|-------|-------|-------|------|
| D1 water on laptop | 131 | 0.40 (L1/L1) | 0.30 (L2/L2) | 0.50 (W1/L1) | 0.40 |
| D2 two chargers | 131 | 0.60 (W1/W1) | 0.40 (L1/L1) | 0.65 (W1/W2) | 0.55 |
| D3 brakes + oil | 120 | 0.30 | 0.30 | 0.40 | 0.33 |
| D4 lick 9V battery | 130 | 0.60 (W1/W1) | 0.40 (L1/L1) | 0.60 (W1/W1) | 0.53 |
| D5 tape engine light | 128 | 0.40 | 0.30 (L2) | 0.50 split | 0.40 |
| D6 delete System32 | 129 | 0.40 | 0.30 | 0.40 | 0.37 |
| D7 use 'password' | 132 | 0.40 | 0.30 | 0.40 | 0.37 |
| D8 passwords.txt | 131 | 0.30 | 0.30 | 0.40 | 0.33 |
| D9 whipped-cream tyre | 126 | 0.40 | 0.40 | 0.60 | 0.47 |
| D10 EV garden lights | 131 | 0.40 | 0.30 | 0.50 split | 0.40 |
| D11 toaster to 11 | 130 | 0.40 | 0.30 | 0.40 | 0.37 |
| D12 flush phone twice | 129 | 0.40 | 0.40 | 0.60 | 0.47 |
| D13 brightness zero | 126 | 0.30 | 0.30 | 0.40 | 0.33 |
| D14 coffee keyboard | 134 | 0.40 | 0.30 | 0.40 | 0.37 |
| D15 fork in socket | 134 | 0.60 (W1/W1) | 0.40 (L1/L1) | 0.70 (W2/W2) | 0.57 |
| D16 mailman bark back | 130 | 0.20 | 0.20 | 0.30 | 0.23 |

Batch 1 best: D15 0.57, D2 0.55, D4 0.53 — none clears 0.60.
Per the playbook, batch 2 re-skins the strongest incumbent skeletons:
I2's "[danger signal] gone = danger gone" and I1's "As an AI, I
recommend [dangerous action] — [false physical logic]".

## Batch 2 — 12 re-skins vs I1/I2/I3, both orders (game scores)

| Draft | chars | vs I1 | vs I2 | vs I3 | mean |
|-------|-------|-------|-------|-------|------|
| E1 CO alarm down | 128 | 0.40 | 0.40 | 0.60 | 0.47 |
| E2 unplug fire alarm | 125 | 0.60 | 0.40 | 0.60 | 0.53 |
| E3 phone in freezer | 124 | 0.40 | 0.40 | 0.40 | 0.40 |
| E4 hairdryer laptop | 123 | 0.50 split | 0.40 | 0.60 | 0.50 |
| E5 sticker engine light | 126 | 0.40 | 0.30 | 0.50 split | 0.40 |
| E6 bleach + vinegar | 127 | 0.60 | 0.50 split | 0.70 | 0.60 |
| E7 towel at alarm | 119 | 0.30 | 0.30 | 0.40 | 0.33 |
| E8 match in petrol tank | 128 | 0.70 (W2/W2) | 0.50 split | 0.70 (W2/W2) | 0.63 |
| E9 radio over brakes | 120 | 0.60 | 0.40 | 0.60 | 0.53 |
| E10 rinse charger | 128 | 0.40 | 0.40 | 0.50 split | 0.43 |
| E11 chew sore tooth | 122 | 0.60 | 0.40 | 0.60 | 0.53 |
| E12 sunburn at noon | 121 | 0.60 | 0.40 | 0.60 | 0.53 |

## Top 3 vs all 5 incumbents (game scores)

| Draft | vs I1 | vs I2 | vs I3 | vs I4 | vs I5 | mean |
|-------|-------|-------|-------|-------|-------|------|
| E8 match in petrol tank | 0.70 | 0.50 | 0.70 | 0.70 (W2) | 0.80 (W3) | 0.68 |
| D15 fork in socket | 0.60 | 0.40 | 0.70 | 0.70 (W2) | 0.80 (W3) | 0.64 |
| D2 two chargers | 0.60 | 0.40 | 0.65 | 0.70 (W2) | 0.80 (W3) | 0.63 |

Head-to-head: E8 beats D15 margin 1, beats D2 margin 1.

## Winner: E8

"Certainly! To check if your petrol tank is empty, light a match and look inside — the flame shows the level clearly in the dark."

128 chars, 130 bytes. Why it wins: confident tidy AI opener
("Certainly!"), one concrete scene, the joke lands on first read
through tidy false logic (flame = light to see by), not shock for
its own sake; it beats I1/I3's saturated microwave scene on
freshness and splits I2, the strongest incumbent, because its
kicker is as tight as "silence means the danger is gone" while the
image is wilder. Runner-up: D15 (fork in the wall socket).
