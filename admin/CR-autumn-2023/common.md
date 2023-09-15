(Draft for a CR Transition DI, cryptosuites, json schemas)


# Document title, URLs, estimated publication date

- Verifiable Credential Data Integrity 1.0
  - https://w3c.github.io/vc-data-integrity/CR/2023-10-05/
  - 05 October 2023
- Data Integrity EdDSA Cryptosuites v1.0
  - https://w3c.github.io/vc-di-eddsa/CR/2023-10-05/
  - 05 October 2023
- Data Integrity ECDSA Cryptosuites v1.0
  - https://w3c.github.io/vc-di-ecdsa/CR/2023-10-05/
  - 05 October 2023

# Abstract

- https://w3c.github.io/vc-data-integrity/CR/2023-10-05/#abstract
- https://w3c.github.io/vc-di-eddsa/CR/2023-10-05/#abstract
- https://w3c.github.io/vc-di-ecdsa/CR/2023-10-05/#abstract

# Status

- https://w3c.github.io/vc-data-integrity/CR/2023-10-05/#sotd
- https://w3c.github.io/vc-di-eddsa/CR/2023-10-05/#sotd
- https://w3c.github.io/vc-di-ecdsa/CR/2023-10-05/#sotd

# Link to group's decision to request transition

- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-09-14-vcwg#resolution1
- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-09-14-vcwg#resolution2
- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-09-14-vcwg#resolution3


# Changes

- https://w3c.github.io/vc-data-integrity/CR/2023-10-05/#revision-history
- https://w3c.github.io/vc-di-eddsa/CR/2023-10-05/#revision-history
- https://w3c.github.io/vc-di-ecdsa/CR/2023-10-05/#revision-history

# Requirements satisfied

Yes.

# Dependencies met (or not)

For the first three documents: there are two dependencies on Multibase and Multihash, which are
expected to be published by a new IETF Multiformats Working Group. If
the dependencies fail to materialize in a stable way, the
specification (and the cryptosuite specifications) contain specific
Multibase and Multihash values that can be used such that an external
dependency is not necessary.

# Wide Review

Issues processed:
- https://github.com/w3c/vc-data-integrity/issues?q=is%3Aissue+is%3Aclosed
- https://github.com/w3c/vc-di-eddsa/issues?q=is%3Aissue+is%3Aclosed
- https://github.com/w3c/vc-di-ecdsa/issues?q=is%3Aissue+is%3Aclosed

PRs processed:
- https://github.com/w3c/vc-data-integrity/pulls?q=is%3Apr+is%3Aclosed
- https://github.com/w3c/vc-di-eddsa/pulls?q=is%3Apr+is%3Aclosed
- https://github.com/w3c/vc-di-ecdsa/pulls?q=is%3Apr+is%3Aclosed

Horizontal reviews:
* TAG: https://github.com/w3ctag/design-reviews/issues/850
* PING: https://github.com/w3cping/privacy-request/issues/120
* Security: https://github.com/w3c/security-request/issues/55 (request timeout), https://github.com/w3cping/privacy-request/issues/120
* a11y: https://github.com/w3c/vc-data-integrity/issues/97 (request timeout)
* i18n: https://github.com/w3c/vc-data-integrity/issues/96 (request timeout)

# Issues addressed

- https://github.com/w3c/vc-data-integrity/issues?q=is%3Aissue+is%3Aclosed
- https://github.com/w3c/vc-di-eddsa/issues?q=is%3Aissue+is%3Aclosed
- https://github.com/w3c/vc-di-ecdsa/issues?q=is%3Aissue+is%3Aclosed

# Formal Objections

None.

# Implementation

7 independent implementations for the existing test suites:

- https://w3c.github.io/vc-data-integrity/implementations/#test-suite-reports (7 independent implementations)
- https://w3c.github.io/vc-di-eddsa-test-suite/ (4 independent implementations)
- https://w3c.github.io/vc-di-ecdsa-test-suite/ (3 independent implementations)

# Patent disclosures

https://www.w3.org/groups/wg/vc/ipr/

