CR Request for Controlled Identity Document - cid


# Document title, URLs, estimated publication date

- Controlled Identifier Documents 1.0
    - Final URL: https://www.w3.org/TR/2024/CR-cid-202501@day@/
    - Proposed publication date: @day@ January 2025
    - Editors' draft: https://w3c.github.io/cid/transitions/2025/CR1/

Note: the document started its Rec track under the title "Controller Documents 1.0", with short name 
`controller document`. The Working group resolved to [change the document title](https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-12-04-vcwg#resolution1) 
to change the title; the plan is to do that at the publication of the CR (that also means adapting the document's header
to ensure proper history.)

# Abstract

- https://w3c.github.io/cid/transitions/2025/CR1/#abstract

# Status

- https://w3c.github.io/cid/transitions/2025/CR1/#sotd

# Link to group's decision to request transition

- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-12-@@@@-vcwg#resolution1

# Changes

This is the first Candidate Recommendation for the first Recommendation attempt
for this specification. It does not have a changelog other than the changes
since FPWD, which can be found here:

https://github.com/w3c/controller-document/commits/main/?until=2024-12-@@@@

# Requirements satisfied

Yes.

# Dependencies met (or not)

Most of the normative dependencies are all RFCs.

# Wide Review

Issues processed:
- https://github.com/w3c/controller-document/issues?q=is:issue+

PRs processed:
- https://github.com/w3c/controller-document/pulls?q=is:pr+

Horizontal reviews:

* TAG: https://github.com/w3ctag/design-reviews/issues/960
  * Extra discussions happened during TPAC 2024
  * WG has completed the requirements, waiting for an official TAG reaction:
    * https://github.com/w3ctag/design-reviews/issues/960#issuecomment-2480730376
* PING: https://github.com/w3cping/privacy-request/issues/137
  * Issue was officially closed by PING on Sep 16
* SING: https://github.com/w3c/security-request/issues/70
  * Pinged for review in August, no reply until now, see
    * https://github.com/w3c/security-request/issues/70#issuecomment-2270081900
* a11y: https://github.com/w3c/a11y-request/issues/86
  * Pinged for review in November, no reply until now, see
    * https://github.com/w3c/a11y-request/issues/86#issuecomment-2480731232
* i18n: https://github.com/w3c/i18n-request/issues/234
  * Officially closed on Jun 14
    * https://github.com/w3c/i18n-request/issues/234

Note that this document is special; it is, essentially, an editorial spin-off from other CR documents published by the
Working Group, namely the [Verifiable Credential Data Integrity 1.0](https://www.w3.org/TR/vc-data-integrity/) and [Securing Verifiable Credentials using JOSE and COSE](https://www.w3.org/TR/vc-jose-cose/). 
The two document had lots of texts, terms, concepts in common, which have been removed into this document to serve as a 
common reference. It also has large overlap with the [Decentralized Identifiers (DIDs) v1.0](https://www.w3.org/TR/did-core/). 
No new normative feature has been added. This also means that the horizontal reviews on those documents apply to this document as well.

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

There is no separate implementation report for this document; the tests running for the aforementioned Specifications
(Data Integrity and Jose-Cose) automatically cover this document as well. Furthermore, there is an overlap with the
DID Recommendation as well, whose tests automatically test this document as well.

# Patent disclosures

None, see

- https://www.w3.org/groups/wg/vc/ipr/


---

cc: cc: @msporny @selfissued
