Issue Title: CR Snapshot Update Request for Verifiable Credentials using JOSE and COSE - vc-jose-cose

# Document URLs

- Securing Verifiable Credentials using JOSE and COSE
  - https://w3c.github.io/vc-jose-cose/transitions/CR2/2024-11-05/ (not yet in place on /TR)
  - Proposed publication date: 2024-11-05
  - Editors' draft: https://w3c.github.io/vc-jose-cose/

# Link to group's decision to request transition

- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-10-23-vcwg#resolution1

# Link to previous Candidate Recommendation transition or update request

- https://github.com/w3c/transitions/issues/599

# Substantive changes

See items under "Changes since the v2.0 First Candidate Recommendation":

https://github.com/w3c/vc-jose-cose/pulls?page=1&q=is%3Apr+is%3Amerged+closed%3A%3E%3D2024-04-25

* Remove usage of YAML for noting SD-JWT disclosures.
* Support protected headers in secured payloads.
* Recommend COSE `typ` header parameters
* Remove the use of structure suffixes
* Provide guidance on constructing SD-JWTs
* Recommend against using `nbf`
* Describe encrypting credentials and presentations
* Reference the Controller Document specification
* Set media types (`vc+jwt`, `vp+jwt`, `vc+sd-jwt`, `vp+sd-jwt`, `vc+cose`, `vp+cose`)
* Add guidance on differentiating secured payloads using `cty`

# Any changes in requirements?

None

# Wide Review of substantive changes

Issues processed:
* [https://github.com/w3c/vc-jose-cose/issues?q=is:issue+](https://github.com/w3c/vc-jose-cose/issues?q=is%3Aissue+is%3Aclosed+closed%3A%3E%3D2024-04-25+)

PRs processed:
* [https://github.com/w3c/vc-jose-cose/pulls?q=is:pr+](https://github.com/w3c/vc-jose-cose/pulls?q=is%3Apr+is%3Aclosed+closed%3A%3E%3D2024-04-25)
 
Horizontal reviews:
* TAG: [Allow transferring ArrayBuffer into WebCodecs object constructors w3ctag/design-reviews#889](https://github.com/w3ctag/design-reviews/issues/889)
* PING: [Securing Verifiable Credentials using JOSE and COSE 2022-09-15 w3cping/privacy-request#125](https://github.com/w3cping/privacy-request/issues/125)
* Security: [Securing Verifiable Credentials using JOSE and COSE 2022-09-15 security-request#60](https://github.com/w3c/security-request/issues/60)
* a11y: [W3C Securing Verifiable Credentials using JOSE and COSE 2021-09-18 a11y-request#68](https://github.com/w3c/a11y-request/issues/68)
* i18n: [W3C Securing Verifiable Credentials using JOSE and COSE 2023-09-18 > 2023-10-19 i18n-request#218](https://github.com/w3c/i18n-request/issues/218)

# Issues status

See https://github.com/w3c/vc-jose-cose/issues

# Formal Objections

There is a noted intention to file a formal objection from PING Identity. References to this can be found around the [resoultion here](https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-10-23-vcwg#resolution1) and in [this PR comment](https://github.com/w3c/vc-jose-cose/pull/306#issuecomment-2400789855).

# Any changes in implementation information?

The test suite is undergoing implementation. A new call for implementers will be sent out after CR2 is published. https://github.com/w3c/vc-jose-cose-test-suite.

# Deadline for further comments

30 days

# Any changes in patent disclosures?

None

cc: @brentzundel  @selfissued @decentralgabe
