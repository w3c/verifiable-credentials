PR Request for Verifiable Credentials Suite - vc-data-model-2.0, vc-data-integrity, vc-di-eddsa, vc-di-ecdsa, vc-jose-cose, vc-json-schema, cid-1.0, vc-bitstring-status-list


# Document title, URLs, estimated publication date

All publications are currently set to a publication date of 6 March; to be finalized based on the transition approval. None of the documents are on /TR yet

- Verifiable Credentials Data Model v2.0
  - short name: vc-data-model
  - current PR snapshot: https://w3c.github.io/vc-data-model/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/vc-data-model/

- Verifiable Credential Data Integrity 1.0
  - short name: vc-data-integrity
  - current PR snapshot: https://w3c.github.io/vc-data-integrity/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/vc-data-integrity/

- Data Integrity EdDSA Cryptosuites v1.0
  - short name: vc-di-eddsa/
  - current PR snapshot: https://w3c.github.io/vc-di-eddsa/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/vc-di-eddsa/

- Data Integrity ECDSA Cryptosuites v1.0
  - short name: vc-di-ecdsa/
  - current PR snapshot: https://w3c.github.io/vc-di-ecdsa/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/vc-di-ecdsa/

- Securing Verifiable Credentials using JOSE and COSE
  - short name: vc-jose-cose
  - current PR snapshot: https://w3c.github.io/vc-jose-cose/transitions/PR/
  - editors' draft: https://w3c.github.io/vc-jose-cose/

- Verifiable Credentials JSON Schema Specification
  - short name: vc-json-schema/
  - current PR snapshot: https://w3c.github.io/vc-json-schema/PR/2025/
  - editors' draft: https://w3c.github.io/vc-json-schema/

- Controlled Identifiers v1.0
  - short name: cid-1.0/
  - current PR snapshot: https://w3c.github.io/cid/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/cid/

- Bitstring Status List v1.0
  - short name: vc-bitstring-status-list/
  - current PR snapshot: https://w3c.github.io/vc-bitstring-status-list/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/vc-bitstring-status-list/


# Abstract

See, respectively:

- https://w3c.github.io/vc-data-model/transitions/2025/PR/#abstract
- https://w3c.github.io/vc-data-integrity/transitions/2025/PR/#abstract
- https://w3c.github.io/vc-di-eddsa/transitions/2025/PR/#abstract
- https://w3c.github.io/vc-di-ecdsa/transitions/2025/PR/#abstract
- https://w3c.github.io/vc-jose-cose/transitions/PR/#abstract
- https://w3c.github.io/vc-json-schema/PR/2025/#abstract
- https://w3c.github.io/cid/transitions/2025/PR/#abstract
- https://w3c.github.io/vc-bitstring-status-list/transitions/2025/PR/#abstract


# Status

See, respectively:

- https://w3c.github.io/vc-data-model/transitions/2025/PR/#sotd
- https://w3c.github.io/vc-data-integrity/transitions/2025/PR/#sotd
- https://w3c.github.io/vc-di-eddsa/transitions/2025/PR/#sotd
- https://w3c.github.io/vc-di-ecdsa/transitions/2025/PR/#sotd
- https://w3c.github.io/vc-jose-cose/transitions/PR/$sotd
- https://w3c.github.io/vc-json-schema/PR/2025/#sotd
- https://w3c.github.io/cid/transitions/2025/PR/#sotd
- https://w3c.github.io/vc-bitstring-status-list/transitions/2025/PR/#sotd

# Will new features be allowed to be incorporated in the Recommendation?

@@@@ To be decided by the WG, and noted in respec: `updateableRec: true,` @@@@

# Link to group's decision to request transition

@@@@ T.B.D. @@@@

# Changes

See, respectively

- https://w3c.github.io/vc-data-model/transitions/2025/PR/#revision-history
- https://w3c.github.io/vc-data-integrity/transitions/2025/PR/#revision-history
- https://w3c.github.io/vc-di-eddsa/transitions/2025/PR/#revision-history
- https://w3c.github.io/vc-di-ecdsa/transitions/2025/PR/#revision-history
- @@@@ missing for JOSE Cose @@@@
- https://w3c.github.io/vc-json-schema/PR/2025/#revision-history
- https://w3c.github.io/cid/transitions/2025/PR/#revision-history
- https://w3c.github.io/vc-bitstring-status-list/transitions/2025/PR/#revision-history

# Requirements satisfied

Yes.

# Dependencies met (or not)

All normative dependencies for all documents are either RECs or IETF RFCs, except for:

* VC-JOSE-COSE: which depends on SD_JWT (@@@ Exact IETF terminology to say that it is in "PR" and technically stable@@@@).
* Verifiable Credentials JSON Schema Specification: there is a dependency on JSON-Schema. This is related
to the discussion on W3C's Strategy team, see:
    - https://github.com/w3c/strategy/issues/108

    The WG's judgement is that a normative dependency is appropriate in this case.

# Wide Review

For the official horizontal reviews: all documents have been checked, possibly several times at CR transitions. A series of review calls have also been issued for the more complex specifications:

* https://github.com/w3ctag/design-reviews/issues/1029
* https://github.com/w3cping/privacy-request/issues/153
* https://github.com/w3c/security-request/issues/81
* https://github.com/w3c/a11y-request/issues/99
* https://github.com/w3c/i18n-request/issues/255

The one missing on the list (JSON-Schema) has virtually not changed since and during CR.

With respect to wide review, changes to each specification has been circulated on a weekly basis to the W3C Credentials Community Group, which contains over 560+ individuals, with a number of them providing continued feedback since the CR phases. A recent example

https://lists.w3.org/Archives/Public/public-credentials/2025Feb/0018.html

The test suites run on a weekly basis and implementers actively track how their implementations are performing. Ecosystem reports are also available and are tracked and commented on by organizations adopting vendor solutions: 

https://canivc.com/

# Issues addressed

See the issues' list, respectively:

- https://github.com/w3c/vc-data-model/issues?q=is%3Aissue%20-label%3Afuture%20
- https://github.com/w3c/vc-data-integrity/issues?q=is%3Aissue
- https://github.com/w3c/vc-di-eddsa/issues?q=is%3Aissue
- https://github.com/w3c/vc-di-ecdsa/issues?q=is%3Aissue
- https://github.com/w3c/vc-jose-cose/issues?q=is%3Aissue
- https://github.com/w3c/vc-json-schema/issues?q=is%3Aissue%20-label%3Afuture
- https://github.com/w3c/cid/issues?q=is%3Aissue
- https://github.com/w3c/vc-bitstring-status-list/issues?q=is%3Aissue%20

# Formal Objections

None.

# Implementation

Implementations reports, respectively:

- https://w3c.github.io/vc-data-model-2.0-test-suite/
- https://w3c.github.io/vc-data-integrity/implementations/
- https://w3c.github.io/vc-di-eddsa-test-suite/
- https://w3c.github.io/vc-di-ecdsa-test-suite/
- https://w3c.github.io/vc-jose-cose-test-suite/
- https://w3c.github.io/vc-json-schema-test-suite/
- https://w3c.github.io/cid/implementations/1.0/
- https://w3c.github.io/vc-bitstring-status-list-test-suite/

@@@ Worth adding some words on existing public adoptions or adoption plans: GS1, DHS, European Identity Wallets, etc. @@@

# Patent disclosures

- https://www.w3.org/groups/wg/vc/ipr/ (Note that the list has been, unfortunately, polluted what can be considered as a spam.)
