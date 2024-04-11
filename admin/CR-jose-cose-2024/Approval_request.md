# Document title, URLs, estimated publication date

- Securing Verifiable Credentials using JOSE and COSE
  - Final URL: https://www.w3.org/TR/2024/CR-vc-jose-cose-20240418/
  - Proposed publication date: 18 April 2024
  - Editors' draft: https://w3c.github.io/vc-jose-cose/CR/2024-04-18

# Abstract

- https://w3c.github.io/vc-jose-cose/CR/2024-04-18/#abstract

# Status

- https://w3c.github.io/vc-jose-cose/CR/2024-04-18/#sotd

# Link to group's decision to request transition

- https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-04-10-vcwg#resolution1

# Changes

This is the first Candidate Recommendation for the first Recommendation attempt for this specification. It does not have a changelog other than the changes since FPWD, which can be found here:

https://github.com/w3c/vc-jose-cose/commits/main/?until=2024-04-03

# Requirements satisfied

Yes.

# Dependencies met (or not)

The normative dependencies are on the VC Data Model which is in CR.

There are also dependencies on the IETF work on the SD-JWT primitives listed in the Normative References section of the specification:

* Selective Disclosure for JWTs (SD-JWT). Daniel Fett; Kristina Yasuda; Brian Campbell. IETF. Internet-Draft. URL: https://datatracker.ietf.org/doc/html/draft-ietf-oauth-selective-disclosure-jwt
* SD-JWT-based Verifiable Credentials (SD-JWT VC). Oliver Terbu; Daniel Fett; Brian Campbell. IETF. Internet-Draft. URL: https://datatracker.ietf.org/doc/html/draft-ietf-oauth-sd-jwt-vc

It is critical that these normative references reach an IETF RFC state before this specification can proceed to the Proposed Recommendation state. 

# Wide Review

Issues processed:
- https://github.com/w3c/vc-jose-cose/issues?q=is:issue+

PRs processed:
- https://github.com/w3c/vc-jose-cose/pulls?q=is:pr+

Horizontal reviews:
* TAG: https://github.com/w3ctag/design-reviews/issues/889
* PING: https://github.com/w3cping/privacy-request/issues/125
* Security: https://github.com/w3c/security-request/issues/60
* a11y: https://github.com/w3c/a11y-request/issues/68
* i18n: https://github.com/w3c/i18n-request/issues/218

Additionally, Simone Onofri is gathering reviewers to do a more thorough review of the JOSE-COSE specification during the Candidate Recommendation phase.

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

* Test vectors & test suite (to be improved upon soon)
  * https://github.com/w3c/vc-jose-cose-test-suite
* Existing Implementations (more may come)
  * https://github.com/transmute-industries/verifiable-credentials/
  * More to come from TBD and Mesur.io

# Patent disclosures

None, see

- https://www.w3.org/groups/wg/vc/ipr/

# Extra Note: Media type registration

There are a number of media type cited in the document. These are not yet registered by IETF, 
and we anticipate reviewer questions as [on the CR transition request for VCDM](https://github.com/w3c/transitions/issues/587#issuecomment-1900562225).
At the time, @msporny gave [an answer](https://github.com/w3c/transitions/issues/587#issuecomment-1902276576), referring to the
discussion within IETF regarding [multiple-suffix media types](https://datatracker.ietf.org/doc/draft-ietf-mediaman-suffixes/).

Unfortunately, the discussion at IETF 119 did not result in a clear decision. There is now a [separate discussion](https://github.com/w3c/vc-data-model/issues/1462) 
by the VC Working Group about their best approach; whatever they decide for the VC Data Model will likely affect the JOSE-COSE specification, too.


---

cc: cc: @selfissued @decentralgabe @mprorock @brentzundel
