PR Request for Verifiable Credentials Suite - vc-data-model-2.0, vc-data-integrity, vc-di-eddsa, vc-di-ecdsa, vc-jose-cose, cid-1.0, vc-bitstring-status-list


# Document title, URLs, estimated publication date

All publications are currently set to a publication date of 20th of March; to be finalized based on the transition approval. None of the documents are on /TR yet.

- Verifiable Credentials Data Model v2.0
  - short name: vc-data-model
  - current PR snapshot: https://w3c.github.io/vc-data-model/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/vc-data-model/

- Verifiable Credential Data Integrity 1.0
  - short name: vc-data-integrity
  - current PR snapshot: https://w3c.github.io/vc-data-integrity/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/vc-data-integrity/

- Data Integrity EdDSA Cryptosuites v1.0
  - short name: vc-di-eddsa
  - current PR snapshot: https://w3c.github.io/vc-di-eddsa/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/vc-di-eddsa/

- Data Integrity ECDSA Cryptosuites v1.0
  - short name: vc-di-ecdsa
  - current PR snapshot: https://w3c.github.io/vc-di-ecdsa/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/vc-di-ecdsa/

- Securing Verifiable Credentials using JOSE and COSE
  - short name: vc-jose-cose
  - current PR snapshot: https://w3c.github.io/vc-jose-cose/transitions/PR/
  - editors' draft: https://w3c.github.io/vc-jose-cose/

- Controlled Identifiers v1.0
  - short name: cid-1.0
  - current PR snapshot: https://w3c.github.io/cid/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/cid/

- Bitstring Status List v1.0
  - short name: vc-bitstring-status-list
  - current PR snapshot: https://w3c.github.io/vc-bitstring-status-list/transitions/2025/PR/
  - editors' draft: https://w3c.github.io/vc-bitstring-status-list/


# Abstract

See, respectively:

- https://w3c.github.io/vc-data-model/transitions/2025/PR/#abstract
- https://w3c.github.io/vc-data-integrity/transitions/2025/PR/#abstract
- https://w3c.github.io/vc-di-eddsa/transitions/2025/PR/#abstract
- https://w3c.github.io/vc-di-ecdsa/transitions/2025/PR/#abstract
- https://w3c.github.io/vc-jose-cose/transitions/PR/#abstract
- https://w3c.github.io/cid/transitions/2025/PR/#abstract
- https://w3c.github.io/vc-bitstring-status-list/transitions/2025/PR/#abstract


# Status

See, respectively:

- https://w3c.github.io/vc-data-model/transitions/2025/PR/#sotd
- https://w3c.github.io/vc-data-integrity/transitions/2025/PR/#sotd
- https://w3c.github.io/vc-di-eddsa/transitions/2025/PR/#sotd
- https://w3c.github.io/vc-di-ecdsa/transitions/2025/PR/#sotd
- https://w3c.github.io/vc-jose-cose/transitions/PR/#sotd
- https://w3c.github.io/cid/transitions/2025/PR/#sotd
- https://w3c.github.io/vc-bitstring-status-list/transitions/2025/PR/#sotd

# Will new features be allowed to be incorporated in the Recommendation?

No. This is out of scope for the Working Group per its charter:

- https://www.w3.org/2024/10/vc-wg-charter.html#scope

# Link to group's decision to request transition

- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2025-02-26-vcwg#resolution1

# Changes

See, respectively

- https://w3c.github.io/vc-data-model/transitions/2025/PR/#revision-history
- https://w3c.github.io/vc-data-integrity/transitions/2025/PR/#revision-history
- https://w3c.github.io/vc-di-eddsa/transitions/2025/PR/#revision-history
- https://w3c.github.io/vc-di-ecdsa/transitions/2025/PR/#revision-history
- https://w3c.github.io/vc-jose-cose/transitions/PR/#revision-history
- https://w3c.github.io/cid/transitions/2025/PR/#revision-history
- https://w3c.github.io/vc-bitstring-status-list/transitions/2025/PR/#revision-history

# Requirements satisfied

Yes.

# Dependencies met (or not)

All normative dependencies for all documents are either RECs or IETF RFCs, except for:

* VC-JOSE-COSE: depends on SD_JWT which has completed working group last call at the IETF and is currently being shepherded towards IESG review, which indicates that it is a stable document.

# Wide Review


## Horizontal reviews

For the official horizontal reviews: all documents have been checked, possibly several times at CR transitions. On December 15 a series of horizontal review requests were issued, covering 7 documents, making it clear that this is a request on a Proposed Rec in preparation, focussing on the changes since CR. Here are the results:

* [TAG](https://github.com/w3ctag/design-reviews/issues/1029) no response, consider it as timed out
* [Privacy](https://github.com/w3cping/privacy-request/issues/153) no response, consider it as timed out
* [Security](https://github.com/w3c/security-request/issues/81) discussed with SING, see also [summary](https://www.w3.org/2017/vc/WG/Meetings/Minutes/2025-02-06-vcwg#section1) on a VC Call
* [A11y](https://github.com/w3c/a11y-request/issues/99), properly [approved](https://github.com/w3c/a11y-request/issues/99#issuecomment-2612618858). There is a minor issue on how to refer to the appropriate WCAG document, which is also an APA problem; if resolved after Rec, this can be taken care of as part of the maintenance work.
* [I18n](https://github.com/w3c/i18n-request/issues/255) partially [approved](https://github.com/w3c/i18n-request/issues/255#issuecomment-2544027079) but timed out since.

## Other wide review

With respect to wide review, changes to each specification has been circulated on a weekly basis to the W3C Credentials Community Group, which contains over 560+ individuals, with a number of them providing continued feedback since the CR phases. A recent example:

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
- https://w3c.github.io/cid/implementations/1.0/
- https://w3c.github.io/vc-bitstring-status-list-test-suite/

In addition to the implementations listed in the above links, there are public adoptions plans for this technology by GS1, DHS, European Identity Wallets, California mobile driver's licences, the TruAge verification system, and others.

# Patent disclosures

- https://www.w3.org/groups/wg/vc/ipr/ 
 

