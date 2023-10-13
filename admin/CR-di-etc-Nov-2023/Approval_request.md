(Draft for a CR Transition DI, cryptosuites, json schemas)


# Document title, URLs, estimated publication date

- Verifiable Credential Data Integrity 1.0
  - https://www.w3.org/TR/2023/CR-vc-data-integrity-20231107/
  - 07 November 2023
  - Editors' draft: https://w3c.github.io/vc-data-integrity/
- Data Integrity EdDSA Cryptosuites v1.0
  - https://www.w3.org/TR/2023/CR-vc-di-eddsa-20231107/
  - 07 November 2023
  - Editors' draft: https://w3c.github.io/vc-di-eddsa/
- Data Integrity ECDSA Cryptosuites v1.0
  - https://www.w3.org/TR/2023/CR-vc-di-ecdsa-20231107/
  - 07 November 2023
  - Editors' draft: https://w3c.github.io/vc-di-ecdsa/
- Verifiable Credentials JSON Schema Specification
  - https://www.w3.org/TR/2023/CR-vc-json-schema-20231107/
  - 07 November 2023
  - Editors' draft: https://w3c.github.io/vc-json-schema/

# Abstract

- https://www.w3.org/TR/2023/CR-vc-data-integrity-20231107/#abstract
- https://www.w3.org/TR/2023/CR-vc-di-eddsa-20231107#abstract
- https://www.w3.org/TR/2023/CR-vc-di-ecdsa-20231107#abstract
- https://www.w3.org/TR/2023/CR-vc-json-schema-20231107#abstract

# Status

- https://www.w3.org/TR/2023/CR-vc-data-integrity-20231107/#sotd
- https://www.w3.org/TR/2023/CR-vc-di-eddsa-20231107#sotd
- https://www.w3.org/TR/2023/CR-vc-di-ecdsa-20231107#sotd
- https://www.w3.org/TR/2023/CR-vc-json-schema-20231107#sotd
  
# Link to group's decision to request transition

- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-09-14-vcwg#resolution1
- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-09-14-vcwg#resolution2
- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-09-14-vcwg#resolution3
- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-09-14-vcwg#resolution4

New publication date plus reaffirming the publication after some post TPAC changes:

- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-10-11-vcwg#resolution1

# Changes

- https://www.w3.org/TR/2023/CR-vc-data-integrity-20231107/#revision-history
- https://www.w3.org/TR/2023/CR-vc-di-eddsa-20231107#revision-history
- https://www.w3.org/TR/2023/CR-vc-di-ecdsa-20231107#revision-history
- https://www.w3.org/TR/2023/CR-vc-json-schema-20231107#revision-history

# Requirements satisfied

Yes.

# Dependencies met (or not)

For the "Verifiable Credentials JSON Schema document": there is a dependency on JSON-Schema. This is related
to the discussion on W3C's Strategy team, see:

- https://github.com/w3c/strategy/issues/108

The WG's judgement is that a normative dependency is appropriate in this case.

All documents have a dependency on the WG specification:

- Verifiable Credentials Data Model v2.0, https://www.w3.org/TR/vc-data-model-2.0/

this document is planned to go to CR by the end of 2023 or very early 2024.

# Wide Review

Issues processed:
- https://github.com/w3c/vc-data-integrity/issues?q=is%3Aissue+is%3Aclosed
- https://github.com/w3c/vc-di-eddsa/issues?q=is%3Aissue+is%3Aclosed
- https://github.com/w3c/vc-di-ecdsa/issues?q=is%3Aissue+is%3Aclosed
- https://github.com/w3c/vc-json-schema/issues?q=is%3Aissue+is%3Aclosed

PRs processed:
- https://github.com/w3c/vc-data-integrity/pulls?q=is%3Apr+is%3Aclosed
- https://github.com/w3c/vc-di-eddsa/pulls?q=is%3Apr+is%3Aclosed
- https://github.com/w3c/vc-di-ecdsa/pulls?q=is%3Apr+is%3Aclosed
- https://github.com/w3c/vc-json-schema/pulls?q=is%3Apr+is%3Aclosed

Horizontal reviews:
* TAG: https://github.com/w3ctag/design-reviews/issues/850, https://github.com/w3ctag/design-reviews/issues/859
* PING: https://github.com/w3cping/privacy-request/issues/120, https://github.com/w3cping/privacy-request/issues/119; see also [TPAC PING Session](https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-09-15-vcwg#section3)
* Security: https://github.com/w3c/security-request/issues/55 (request timeout), https://github.com/w3cping/privacy-request/issues/120, https://github.com/w3c/security-request/issues/57 (request timeout)
* a11y: https://github.com/w3c/vc-data-integrity/issues/97 (request timeout), https://github.com/w3c/vc-json-schema/issues/163, https://github.com/w3c/a11y-request/issues/64
* i18n: https://github.com/w3c/vc-data-integrity/issues/96 (request timeout), https://github.com/w3c/vc-json-schema/issues/164 (request timeout)

# Issues addressed

- https://github.com/w3c/vc-data-integrity/issues?q=is%3Aissue+is%3Aclosed
- https://github.com/w3c/vc-di-eddsa/issues?q=is%3Aissue+is%3Aclosed
- https://github.com/w3c/vc-di-ecdsa/issues?q=is%3Aissue+is%3Aclosed
- https://github.com/w3c/vc-json-schema/issues?q=is%3Aissue+is%3Aclosed

# Formal Objections

None.

# Implementation

7 independent implementations for the existing test suites:

- https://w3c.github.io/vc-data-integrity/implementations/#test-suite-reports (7 independent implementations)
- https://w3c.github.io/vc-di-eddsa-test-suite/ (4 independent implementations)
- https://w3c.github.io/vc-di-ecdsa-test-suite/ (3 independent implementations)
- https://w3c.github.io/vc-json-schema-test-suite/

# Patent disclosures

None, see

- https://www.w3.org/groups/wg/vc/ipr/

---

cc: @msporny @seabass-labrax, @dmitrizagidulin @Wind4Greg @decentralgabe
