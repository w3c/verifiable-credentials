# Document title, URLs, estimated publication date

- Data Integrity BBS Cryptosuites v1.0
  - Final URL: https://www.w3.org/TR/2024/CR-vc-di-bbs-20240328/
  - Proposed publication date: 28 March 2024
  - Editors' draft: https://w3c.github.io/vc-di-bbs/CR/2024-03-28/

# Abstract

- https://w3c.github.io/vc-di-bbs/CR/2024-03-28/#abstract

# Status

- https://w3c.github.io/vc-di-bbs/CR/2024-03-28/#sotd

# Link to group's decision to request transition

- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-03-13-vcwg#resolution1

# Changes

This is the first Candidate Recommendation for the first Recommendation attempt for this specification. It does not have a changelog other than the changes since FPWD, which can be found here:

https://github.com/w3c/vc-di-bbs/commits/main/?since=2023-05-18&until=2024-03-14

# Requirements satisfied

Yes.

# Dependencies met (or not)

The normative dependencies are on the VC Data Model and the VC Data Integrity specification, both are in CR as well as on the RCH specification for which a PR transition has been requested.

There are also dependencies on the IETF work on the BBS cryptography primitives listed in the Normative References section of the specification:

* The BBS Signature Scheme. Tobias Looker; Vasilis Kalos; Andrew Whitehead; Mike Lodder. Draft. URL: https://www.ietf.org/archive/id/draft-irtf-cfrg-bbs-signatures-02.html
* Blind BBS Signatures. V. Kalos; G. Bernstein. 2024. URL: https://www.ietf.org/archive/id/draft-kalos-bbs-blind-signatures-00.html#name-proof-generation
* BBS per Verifier Linkability. V. Kalos. 2023. URL: https://basileioskal.github.io/bbs-per-verifier-id/draft-vasilis-bbs-per-verifier-linkability.html

It is critical that the first normative reference reach an IETF RFC state before this specification can proceed to the Proposed Recommendation state. The following two references are desired and must also reach the IETF RFC state for the features that use those specifications, which are marked as at risk in this specification, to be preserved in the final W3C Recommendation.

RFCs for each specification are expected this year, or the following year, after they undergo thorough cryptographic review by the IETF CFRG.

# Wide Review

Issues processed:
- https://github.com/w3c/vc-di-bbs/issues?q=is:issue+

PRs processed:
- https://github.com/w3c/vc-di-bbs/pulls?q=is:pr+

Horizontal reviews:
* TAG: https://github.com/w3ctag/design-reviews/issues/922
* PING: https://github.com/w3cping/privacy-request/issues/126
* Security: https://github.com/w3c/security-request/issues/61
* a11y: https://github.com/w3c/a11y-request/issues/69
* i18n: https://github.com/w3c/i18n-request/issues/221

Additionally, Simone Onofri is gathering reviewers to do a more thorough review of the BBS specification during the Candidate Recommendation phase.

Liaisons:

* There are participants' overlap with the following groups:

  * RDF Canonicalization and Hashing Working Group
  * Decentralized Identifier Working Group
  * Credentials Community Group
  * Internet Engineering Task Force
  * Internet Engineering Task Force Crypto Forum Research Group
  * Hyperledger Aries
  * Decentralized Identity Foundation Interoperability Working Group
  * IMS Global
  * ISO/IEC JTC 1/SC 17/WG 10
  * ISO/IEC JTC 1/SC 17/WG 4
  *
* Web of Things Working Group
  * Joint meeting at W3C TPAC 2023

* APA Working Group
  * See horizontal reviews

* National Institute of Standards and Technology, U.S. Department of Commerce
  * DHS actively engaged w/ NIST over VCWG + Justin Richer NIST SP 800-63-C work

* The American Civil Liberties Union
  * Presentations given to ACLU and CDT over the years via PING and other venues
  * ACLU, EFF, CDT, and EPIC paper speaking positively about VCs:
    https://www.eff.org/document/10-16-2023-aclu-eff-epic-comments-re-tsa-nprm-mdls

* European Telecommunications Standards Institute
  * EU Digital Wallet cites/uses VCWG output + ARF + EBSI + EUDI Wallet

# Formal Objections

None.

# Implementation

* Test vectors
  * https://github.com/w3c/vc-di-bbs/tree/main/TestVectors
* Test suite
  * https://github.com/w3c/vc-di-bbs-test-suite
* Existing Implementations (more may come)
  * https://github.com/Wind4Greg/BBS-VC-Library
  * https://github.com/digitalbazaar/bbs-2023-cryptosuite

# Patent disclosures

None, see

- https://www.w3.org/groups/wg/vc/ipr/

---

cc: @msporny @Wind4Greg @brentzundel
