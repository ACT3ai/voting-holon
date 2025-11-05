# FHE Encryption Privacy & Security

## Overview

This architecture addresses critical problems in blockchain voting systems, building upon Jovan's (@ArtChicken4/@JovanHPulitzer) work on blockchain voting. The solution uses Fully Homomorphic Encryption (FHE) to ensure voter privacy while maintaining accountability and preventing fraud.

## The Problem

1. **Illegitimate ballots**: Currently, illegitimate ballots get cast and voted. For example, 30,000 ballots under the name of undocumented people can go to a single address.

2. **Unmapped ballots**: A pallet of ballots can leave the printer without being mapped to valid citizens, ending up in "mail in voting."

## The Solution: FHE with Accountability Blocks

3. **Fully Homomorphic Encryption (FHE)**: FHE is an advanced branch of encryption that is very powerful. It can often pair up with Zero Knowledge Proof (ZKP).

4. **Architecture**: The fix uses a three-part system:
   - **VOTING ROLLS** (group of 1,000 voters) 
   - **"Accountability Block"** of 1,000 voters 
   - **Ballots cast** (on blockchain)

5. **How it works**: People on the Voting Rolls are grouped into groupings of 1,000 (or 5k or 10k). When they vote, their ballot comes back in. It is tied back to the "Accountability Block." But with FHE you can't tell which voter.

6. **Trusted votes**: The lawful part of voting office workers will send ballots to legitimate voters. Those "Accountability Block" show real voters. You trust those votes.

## Fraud Prevention

7. **Preventing unmapped ballots**: A bad actor has access to the ballot printer. They get a pallet of 30,000 ballots. They send them off. They won't be accepted when received because they don't link to an "Accountability Block" of valid eligible voters.

8. **Second bad actor scenario**: If the bad actor links them to an accountability block of undocumented people, then they can be rejected. Or the voting office employee that does it, then that person can be held criminally accountable, because their name is tied to sending out the ballots and tying them to an "Accountability Block" of undocumented people. When ballots come back, they will be auto-rejected unless tied to an accountability block, that was created by a real voting office employee vouching for no-fraud (when they sent out ballots). And it will only be valid if the Voter Verification services made sure those mapped voters are really eligible.

9. **Voter verification services**: We can have several services that are paid to go over Voting rolls. Each service verifies that the voters are valid:
   - No criminal record
   - Have citizenship
   - Age 18+
   - Live in that district
   
   Scrubbing the voter rolls each month going into an election.

## Privacy with Accountability

10. **FHE enables anonymous voting**: FHE makes the voter's vote anonymous. But allows policing this. The architecture maintains: **VOTING ROLLS** (group of 1,000 voters) <==> **"Accountability Block"** of 1,000 voters <==> **Ballots cast** (on blockchain)

## Research & References

11. **Research papers**: The following research papers by Microsoft Research and Princeton best match the FHE encryption math that would be used:

   * [Microsoft Research - Homomorphic Encryption](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/12/ftnCCS05.pdf)
   * [Microsoft - What is Homomorphic Encryption and How Can It Help in Elections?](https://news.microsoft.com/on-the-issues/2020/04/13/what-is-homomorphic-encryption-and-how-can-it-help-in-elections/)
   * [Microsoft Research Podcast - Securing the Vote with Dr. Josh Benaloh](https://www.microsoft.com/en-us/research/podcast/securing-the-vote-with-dr-josh-benaloh/)
   * [IACR Paper 2024](https://eprint.iacr.org/2024/955.pdf)
   * [IACR Paper 2024 - Additional Research](https://publ.sec.uni-stuttgart.de/huberkuestersliedtkerausch-iacr-2024-1902.pdf)
   * [Microsoft Research - Manual on Homomorphic Encryption](https://www.microsoft.com/en-us/research/wp-content/uploads/2015/11/ManualHE.pdf)

## Related Content

* [Jovan's Rumble Video on Blockchain Voting](https://rumble.com/v6tkruv-blockchain-ballots-or-bullcrap-will-it-secure-our-elections-you-decide-see-.html)
