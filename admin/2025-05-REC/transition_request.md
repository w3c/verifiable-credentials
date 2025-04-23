
# Document titles, URLs, estimated publication date

All publications are currently set to a publication date of 15th of May; to be finalized based on the transition approval and coordination with the communication team (a Press Release is planned). As a result, none of the documents are on /TR yet.

- Verifiable Credentials Data Model v2.0
  - short name: vc-data-model
  - current PR snapshot: https://w3c.github.io/vc-data-model/transitions/2025/REC/
  - editors' draft: https://w3c.github.io/vc-data-model/

- Verifiable Credential Data Integrity 1.0
  - short name: vc-data-integrity
  - current PR snapshot: https://w3c.github.io/vc-data-integrity/transitions/2025/REC/
  - editors' draft: https://w3c.github.io/vc-data-integrity/

- Data Integrity EdDSA Cryptosuites v1.0
  - short name: vc-di-eddsa
  - current PR snapshot: https://w3c.github.io/vc-di-eddsa/transitions/2025/REC/
  - editors' draft: https://w3c.github.io/vc-di-eddsa/

- Data Integrity ECDSA Cryptosuites v1.0
  - short name: vc-di-ecdsa
  - current PR snapshot: https://w3c.github.io/vc-di-ecdsa/transitions/2025/REC/
  - editors' draft: https://w3c.github.io/vc-di-ecdsa/

- Securing Verifiable Credentials using JOSE and COSE
  - short name: vc-jose-cose
  - current PR snapshot: https://w3c.github.io/vc-jose-cose/transitions/REC/
  - editors' draft: https://w3c.github.io/vc-jose-cose/

- Controlled Identifiers v1.0
  - short name: cid-1.0
  - current PR snapshot: https://w3c.github.io/cid/transitions/2025/REC/
  - editors' draft: https://w3c.github.io/cid/

- Bitstring Status List v1.0
  - short name: vc-bitstring-status-list
  - current PR snapshot: https://w3c.github.io/vc-bitstring-status-list/transitions/2025/REC/
  - editors' draft: https://w3c.github.io/vc-bitstring-status-list/


# Abstract

See, respectively:

- https://w3c.github.io/vc-data-model/transitions/2025/REC/#abstract
- https://w3c.github.io/vc-data-integrity/transitions/2025/REC/#abstract
- https://w3c.github.io/vc-di-eddsa/transitions/2025/REC/#abstract
- https://w3c.github.io/vc-di-ecdsa/transitions/2025/REC/#abstract
- https://w3c.github.io/vc-jose-cose/transitions/REC/#abstract
- https://w3c.github.io/cid/transitions/2025/REC/#abstract
- https://w3c.github.io/vc-bitstring-status-list/transitions/2025/REC/#abstract

# Status

See, respectively:

- https://w3c.github.io/vc-data-model/transitions/2025/REC/#sotd
- https://w3c.github.io/vc-data-integrity/transitions/2025/REC/#sotd
- https://w3c.github.io/vc-di-eddsa/transitions/2025/REC/#sotd
- https://w3c.github.io/vc-di-ecdsa/transitions/2025/REC/#sotd
- https://w3c.github.io/vc-jose-cose/transitions/REC/#sotd
- https://w3c.github.io/cid/transitions/2025/REC/#sotd
- https://w3c.github.io/vc-bitstring-status-list/transitions/2025/REC/#sotd

# Link to group's decision to request transition

See https://www.w3.org/2017/vc/WG/Meetings/Minutes/2025-02-26-vcwg#resolution1 (Group's decision to start an AC review via a Proposed Recommendation)

# Wide Review

##	Summary of the AC votes

|                                               | VCDM | VCDI | EdDSA | ECDSA | JOSE/COSE | CID | BSL |
| --------------------------------------------- | :--: | :--: | :---: | :---: | :-------: | :-: | :-: |
| **Supports as is**                            |  42  |  42  |  40   |  40   |    39     | 39  | 40  |
| **Suggests changes but supports publication** |  1   |      |       |       |     1     |  2  |  2  |
| **Does not support publication but no FO**    |      |  1   |       |       |     1     |  1  |     |
| **Suggests changes with an FO**               |      |      |       |       |           |     |     |
| **Does not support publication with an FO**   |      |      |       |       |           |     |     |
| **Abstains**                                  |  2   |  2   |   5   |   5   |     4     |  3  |  3  |

There were no changes on the document during AC review. Some editorial changes came in after the AC review as a response to the reviewers' comments, see below.

# Issues addressed

Summary of the comments received during AC review

## VCDM

- *Suggests changes but supports publication:*
    - "§5.11 Ecosystem Compatibility should explicitly list SD-JWT and SD-JWT-VC to paragraph 1 which lists digital credential formats that do not natively use the VCDM. SD-JWT-VC even explicitly specifies it does not use the VCDM v1.0, v1.1, or v2.0. As SD-JWT(-VC) is a popular VC format for eIDAS it should be explicitly stated like the others."
  
        [comment source](https://lists.w3.org/Archives/Member/w3c-archive/2025Apr/0606.html)

## VC Data Integrity (VCDI)

- *Does not support publication but no FO:*
     - "In our opinion, one of the lessons learned from XML Signatures was that complex canonicalization tied to a signature mechanism tends to lead to complex implementations and a higher likelihood of security vulnerabilities. Those lessons learned lead to the design of simpler signature mechanisms like those in JWT/CWT to avoid the complexity of canonicalization at least when doing cryptographic operations. We understand the general appeal of the ideas behind Data Integrity Proofs but fear that it will lead to overly complex and insecure implementations by forcing implementations to perform rather complex RDF Dataset Canonicalization before any basic signature operation (sign, prove, verify) as is the case for some of the DI Cryptosuites, e.g., the ECDSA one. Semantics and signature mechanisms should be in their own respective layers to facilitate robust and secure implementations."
  
        [comment source](https://lists.w3.org/Archives/Member/w3c-ac-forum/2025AprJun/0020.html)

## EdDSA

None

## ECDSA

None

## JOSE/COSE

- *Suggests changes but supports publication:*
    - "Since it is not a normative portion in this specification, it may not be a particular issue to change, but I would like to confirm one thing for the correctness of spec before publishing. I understand that all examples of COSE Sign1 within the CR (for example, EX-7) are protected by ES384. However, it appears that the signature is only 64 bytes, rather than the typical 96 bytes for P-384 signature. I am not an expert in COSE, so if such pruning or bit truncation is correct in the viewpoint of COSE, there should be no problem."
  
        [comment source](https://lists.w3.org/Archives/Member/w3c-archive/2025Apr/0444.html)

    - "The way this specification utilizes SD-JWT is sub-optimal as it double base64 encodes credentials in order to present them and it is more complex than needed as it uses SD-JWT as container for the presentation where there is no need for the SD-JWT capabilities."
  
        [comment source](https://lists.w3.org/Archives/Member/w3c-ac-forum/2025AprJun/0020.html)

## Controlled Identifiers (CID)

- *Suggests changes but supports publication:*
    - "Too similar to the code did specification.  I wish it were presented as a clear extension of the did core specification that was clear about what’s different"
  
        [comment source](https://lists.w3.org/Archives/Member/w3c-archive/2025Apr/0401.html)

        [answered by team contact](https://lists.w3.org/Archives/Team/team-vc-review/2025Apr/0009.html)

    - "§1 Introduction should note why the CID specification is necessary as those with less experience might see it as a recommendation over Decentralized Identifiers (DIDs) v1.0 rather than providing an abstraction to further make the case of DIDs."
  
        [comment source](https://lists.w3.org/Archives/Member/w3c-archive/2025Apr/0606.html)

- *Does not support publication but no FO:*
    - "As stated in the Revision History section, this specification was created "to use non-decentralized identifiers and systems".  Those are already inclusively supported in DIDs, which chose a federated approach. If the editors wish to propose any other reason for this specification's existence, they should add a Motivation section in the Introduction explaining the reason."
  
        [comment source](https://lists.w3.org/Archives/Member/w3c-archive/2025Apr/0579.html)

## Bitstring Status List (BSL)

- *Suggests changes but supports publication:*
    - "§2 Data Model has a table that is not titled/labeled. Additionally, it should consider the factor of a scheme that proves status without revealing correlatable global identifiers. The authors do indirectly acknowledge this later in §6 but it is a very desirable trait and should be mentioned upfront in the overview.  §6 Privacy Considerations should also discuss the ability/inability of using Zero-knowledge proofs for proving status."
  
        [comment source](https://lists.w3.org/Archives/Member/w3c-archive/2025Apr/0606.html)


# Link to internal AC Review results

See https://www.w3.org/wbs/33280/vc20/results/

# Formal Objections

[TODO: All Formal Objects must have a public record in [public-review-comments](https://lists.w3.org/Archives/Public/public-review-comments/)]
