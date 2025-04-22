CR Request for Controlled Identifiers 1.0 - cid-1.0

# Document title, URLs, estimated publication date

- Controlled Identifiers 1.0
    - Final URL: https://www.w3.org/TR/2025/CR-cid-1.0-20250130/ (not yet installed)
    - Proposed publication date: 30 January 2025 (if it can be done earlier, we are happy to do it)
    - Drafts: 
      - Frozen version: https://w3c.github.io/cid/transitions/2025/CR1/
      - Editor's draft: https://w3c.github.io/cid/

Note: the document started its Recommendation track journey under the title "Controller Documents 1.0", with short name `controller-document`. The Working group resolved to [change the document title](https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-12-04-vcwg#resolution1); the final name was then agreed [on the meeting in January](https://www.w3.org/2017/vc/WG/Meetings/Minutes/2025-01-08-vcwg#section2). That also led to the change of the short name (and the name of the underlying Github repository.) The plan is to do the change of the short name in conjunction with the publication of the CR (including adapting the document's header to ensure proper history). This also explains why some header entries lead to a 404 (name change of a github repository does not create a redirect on the corresponding github.io URLs).

This request is also a formal request for the approval of "cid-1.0" short name.  

# Abstract

- https://w3c.github.io/cid/transitions/2025/CR1/#abstract

# Status

- https://w3c.github.io/cid/transitions/2025/CR1/#sotd

# Link to group's decision to request transition

- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-12-18-vcwg#resolution1. 
  
    This also includes the resolution to change the `controller-document` short name to `cid-1.0`.

# Changes

This is the first Candidate Recommendation for the planned Recommendation for this specification. This document is a minor re-working of the [DID v1.0 specification](https://www.w3.org/TR/2022/REC-did-core-20220719/) to generalize the technology to allow non-decentralized identifiers and systems It has a changelog based on changes made since the Decentralized Identifiers v1.0 specification here:

https://w3c.github.io/cid/#revision-history

(Note: there is currently work going on in the DID Working Group to produce a new version of DID that would then depend on this document. See [current PR on this](https://github.com/w3c/did-core/pull/877).)

# Requirements satisfied

Yes.

# Dependencies met (or not)

Yes. Most of the normative dependencies are RFCs.

# Wide Review

Issues processed:
- https://github.com/w3c/cid/issues?q=is:issue+

PRs processed:
- https://github.com/w3c/cid/pulls?q=is:pr+

Horizontal reviews:

* TAG: https://github.com/w3ctag/design-reviews/issues/960
  * Extra discussions happened during TPAC 2024
  * Done; WG has completed the requirements, TAG has noted satisfactory resolution
    * https://github.com/w3ctag/design-reviews/issues/960#issuecomment-2549847485
* PING: https://github.com/w3cping/privacy-request/issues/137
  * Done; Issue was officially closed by PING on Sep 16
* SING: https://github.com/w3c/security-request/issues/70
  * Pinged for review in August:
    * https://github.com/w3c/security-request/issues/70#issuecomment-2270081900
  * Met with SING to review VCDM v2.0; they are aware that we are waiting on a review for this specification and will do so as soon as they have availability.
    * https://www.w3.org/2024/12/12-sing-minutes.html#c30d
* a11y: https://github.com/w3c/a11y-request/issues/86
  * Pinged for review in November
    * https://github.com/w3c/a11y-request/issues/86#issuecomment-2480731232
  * a11y has reviewed much of the text in the CID spec when they reviewed DIDs and VC Data Integrity. They are actively triaging the review request as of last week.
* i18n: https://github.com/w3c/i18n-request/issues/234
  * Done; officially closed on Jun 14
    * https://github.com/w3c/i18n-request/issues/234

As said before, this document is a minor re-working of the [DID v1.0 specification](https://www.w3.org/TR/2022/REC-did-core-20220719/) to generalize the technology to allow non-decentralized identifiers and systems; it also incorporates other CR documents that have been reviewed and published by the Working Group, namely the [Verifiable Credential Data Integrity 1.0](https://www.w3.org/TR/vc-data-integrity/) specification. Those documents had lots of text, terms, and concepts in common, which have been migrated into this document to serve as a common reference. This means that the horizontal reviews on those documents largely apply to this document as well.

Liaisons:

* There are participants' in the VCWG that overlap with the following groups:

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

Since the CID specification is a generalization of the DID specification, the [test suite results for the DID v1.0 Recommendation](https://w3c.github.io/did-test-suite/) proves that the features in this specification are implementable. There were 51 implementations of the DID v1.0 specification. Since using an HTTPS URL vs. a DID was effectively the only significant change to the specification, proving that level of conformance was deemed trivial (as a valid DID is a valid URL). Additionally, the [VC Data Integrity implementation reports](https://w3c.github.io/vc-data-integrity/implementations/) and the [VC JOSE COSE implementation reports](https://w3c.github.io/vc-jose-cose-test-suite/) further prove conformance as they require controlled identifier documents / decentralized identifier documents to function.

# Patent disclosures

None, see

- https://www.w3.org/groups/wg/vc/ipr/


---

cc: @msporny @selfissued @brentzundel
