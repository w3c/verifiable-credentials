---
layout: minutes
date: 2023-04-11
title: Verifiable Credentials Working Group Special Topic Call on open issues/PRs on VCDM — 2023-04-11
json-ld: |
    {
        "@context": [
            "https://schema.org",
            {
                "resolution": {
                    "@id": "https://w3c.github.io/scribejs/vocab/resolution",
                    "@context": {
                        "@vocab": "https://w3c.github.io/scribejs/vocab/"
                    }
                },
                "irc": {
                    "@id": "https://w3c.github.io/scribejs/vocab/irc"
                }
            }
        ],
        "@type": "CreativeWork",
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-04-11-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on open issues/PRs on VCDM — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on open issues/PRs on VCDM",
        "dateCreated": "2023-04-11",
        "irc": "vcwg-special",
        "datePublished": "2023-04-12",
        "genre": "Meeting Minutes",
        "accessMode": "textual",
        "accessModeSufficient": "textual",
        "encodingFormat": "text/html",
        "publisher": {
            "@type": "Organization",
            "name": "World Wide Web Consortium",
            "url": "https://www.w3.org/"
        },
        "inLanguage": "en-US",
        "recordedAt": {
            "@type": "Event",
            "name": "Verifiable Credentials Working Group Special Topic Call on open issues/PRs on VCDM",
            "startDate": "2023-04-11",
            "endDate": "2023-04-11",
            "location": {
                "@type": "VirtualLocation",
                "description": "Teleconference"
            },
            "attendee": [
                {
                    "@type": "OrganizationRole",
                    "roleName": "chair",
                    "attendee": [
                        {
                            "@type": "Person",
                            "name": "Kristina Yasuda"
                        }
                    ]
                },
                {
                    "@type": "OrganizationRole",
                    "roleName": "scribe",
                    "attendee": [
                        {
                            "@type": "Person",
                            "name": "Michael Prorock"
                        },
                        {
                            "@type": "Person",
                            "name": "Manu Sporny"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Brent Zundel"
                },
                {
                    "@type": "Person",
                    "name": "Kerri Lemoie"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Markus Sabadello"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on open issues/PRs on VCDM — Minutes
{: .no_toc}



**Date:** 2023-04-11

See also the [Agenda](https://www.w3.org/events/meetings/9ff74350-6398-41c5-a5d3-11cd54558218/20230411T180000) and the [IRC Log](https://www.w3.org/2023/04/11-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Michael Prorock, Brent Zundel, Kerri Lemoie, Kristina Yasuda, Manu Sporny, Michael Jones, Shigeya Suzuki, Gabe Cohen, David Lehn, Orie Steele, Markus Sabadello, Ted Thibodeau Jr.

**Regrets:** 

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** Michael Prorock, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Kristina Yasuda:** Discussing agenda - go through issues, find assignments to help guide the work.  

### 1. issue assignment.
{: #section1}

> *Kristina Yasuda:* [https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc+no%3Aassignee](https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc+no%3Aassignee).

**Kristina Yasuda:** will go one by one down the issues.  

#### 1.1. Determine interoperable way for Holder to make claims directly in VPs (issue vc-data-model#860)
{: #section1-1}

_See github issue [vc-data-model#860](https://github.com/w3c/vc-data-model/issues/860)._

<!-- issue w3c/vc-data-model/860 -->



**Kristina Yasuda:** "Determine interoperable way for Holder to make claims directly in VPs".  
… opened by Joe.  
… currently labeled discuss.  

**Joe Andrieu:** The notion of this issue is that right now the only way to handle this is for holders to extend the model on their own, but no interoperable and normative way. also possible to embed a VC, but no standard way of having a VC referencing a VP.  
… thought was to add a property to the VP like "holder claims" to attach this in and sign it just like you do normally.  

**Kristina Yasuda:** question for this call - is there a resolution, or an assignment to take it on.  

**Joe Andrieu:** volunteers to take the issue on.  

#### 1.2. Clarification on when a credentialRefresh service should be used (issue vc-data-model#1020)
{: #section1-2}

_See github issue [vc-data-model#1020](https://github.com/w3c/vc-data-model/issues/1020)._

<!-- issue w3c/vc-data-model/1020 -->



**Kristina Yasuda:** "Clarification on when a credentialRefresh service should be used" - this is a question with some attempts at an answer.  
… is this suitable for pending close tag? or is discussion still going on.  

**Manu Sporny:** on the fence about this - have a proposal to move credential refresh to a property - will assert two implementations.  
… maybe we do something about this if credentialRefresh stays in specification.  
… PR is #1082.  

#### 1.3. Presentations SHOULD expire (issue vc-data-model#937)
{: #section1-3}

_See github issue [vc-data-model#937](https://github.com/w3c/vc-data-model/issues/937)._

<!-- issue w3c/vc-data-model/937 -->



**Kristina Yasuda:** "Presentations SHOULD expire" opened by orie.  
… *reads bits of the issue*.  

**Orie Steele:** notes that the only normative requirements for a VP are that it must have a context and a type.  
… current understanding (of speaker) is that they are either 1) syntactic sugar, or 2) unsecured semantic wrapper - not sure if intended to be secure, and if intended to be secure then there should be an expiration.  
… basically don't stumble on a presentation 1yr after creation and then trust it.  
… feels like VPs have not had sufficient loving and polish.  

**Kristina Yasuda:** asks if anyone is willing to follow up on the issue to get it ready for PR.  

> *Orie Steele:* I don't see the value of Verifiable Presentations, they seem harmful and unrestricted..

**Orie Steele:** notes that he is not sure how to handle anything related to VPs since seldom discussed.  

**Manu Sporny:** VPs are used as noted by Orie - don't feel like there is clear guidance to be made by the WG at this time - perhaps we say nothing.  
… would be nice to talk about this, discuss ephemeral nature, etc - but we likely have more important fish to fry.  

> *Orie Steele:* IMO it is leading to very bad interop issues, nobody is implementing meaningful interoperability from the spec, since the spec only says they are JSON-LD..

**Manu Sporny:** happy to let it expire for now unless someone feels strongly about it.  

**Kerri Lemoie:** agrees with orie and manu - need some work to even understand what VPs are.  
… understands need for a container - have seen external containers defined bc of a lack of desire to use VPs because of lack of understanding.  

**Joe Andrieu:** asks if we have multiple implementations of an expiration in VPs?.  
… i think they are ephemeral and should be short lived.  
… thinks we can't add an expiry without impls.  

**Orie Steele:** notes that he has never seen an expiration and that there is a lot of copy paste, and addition of terms at will, or use of a DI proof, which just adds a proof and no expiry.  
… concerned that way things are written implies that we intend for VPs not to expire.  

**Manu Sporny:** wants to know if this is causing interop issues?.  
… if not, let's move onto things causing interop.  

**Kristina Yasuda:** volunteers to try and get some thoughts on this and perhaps / hopefully lead to a resolve - think there is a need to address security/expiry/etc.  

**Orie Steele:** There are no interop issues with VPs since they have no "requirements"... You can't have meaningful interop other than implementing conformance to JSON-LD 1.1, with VPs....  

#### 1.4. [Terminology] claim (issue vc-data-model#995)
{: #section1-4}

_See github issue [vc-data-model#995](https://github.com/w3c/vc-data-model/issues/995)._

<!-- issue w3c/vc-data-model/995 -->



**Kristina Yasuda:** "[Terminology] claim" - this is about what does a "claim" mean, is the definition clear and precise to what the WG means.  

> *Orie Steele:* is "claim" what we used to call "credential"?.

> *Kristina Yasuda:* Orie, I think so - "An assertion made about a subject.".

> *Orie Steele:* See [https://www.rfc-editor.org/rfc/rfc4949](https://www.rfc-editor.org/rfc/rfc4949) for "claim" and "credential"..

**Michael Jones:** the term claim has industry definitions in RFC4949 and OIDC (possibly borrowed from ISO) - if we are going to tweak, we should align with industry usage.  

> *Michael Prorock:* +1.

**Michael Prorock:** I cannot echo a strong enough plus-whatever to whatever Mike said - there are industry meanings for "claims" and "credentials", we should align our stuff with that, because it causes severe confusion when we're looking at discussions w/ NIST and put profiles/guidance around this..  
… Anyone providing guidance around use cases, the word used in VC WG doesn't match definitions in other places... let's try to align with IETF, then ISO, then others..  

**Ted Thibodeau Jr.:** to answer orie's question in the chat - claims are not what we used to call credentials.  
… claims are sometimes called assertions and vice versa.  
… and a credential is one or more claims grouped together.  

**Kristina Yasuda:** clarification needed potentially since it is such an important topic.  

**Michael Jones:** reluctantly volunteers.  

#### 1.5.  (issue vc-data-model#1012)
{: #section1-5}

_See github issue [vc-data-model#1012](https://github.com/w3c/vc-data-model/issues/1012)._

<!-- issue w3c/vc-data-model/1012 -->



**Kristina Yasuda:** Need to clarify the nature of the media type in relationship to "credential" vs "verifiable-credential" - was this resolved?.  

> *Dave Longley:* +1 to the idea that this is resolved.

**Orie Steele:** agrees that this has been resolved.  

**Joe Andrieu:** suggests to move past this.  

**Kristina Yasuda:** cheers on closing issue.  

#### 1.6.  (issue vc-data-model#914)
{: #section1-6}

_See github issue [vc-data-model#914](https://github.com/w3c/vc-data-model/issues/914)._

<!-- issue w3c/vc-data-model/914 -->



**Kristina Yasuda:** "Dereferencing relative to issuer" - We should add guidance somewhere regarding dereferencing relative to an issuer..  

**Orie Steele:** believes Data Integrity has solved for this and that VC-JWT has not.  

> *Orie Steele:* For the record, this is resolved for data integrity.

> *Orie Steele:* [https://w3c.github.io/vc-data-integrity/#retrieve-verification-method](https://w3c.github.io/vc-data-integrity/#retrieve-verification-method).

**Orie Steele:** this is a fundamental issue - data integrity defining this in DI spec implies this issue should be closed in favor of solving in VC-JWT.  

> *Dave Longley:* +1 to brent.

**Brent Zundel:** feels like this is open elsewhere and should be closed here.  

**Kristina Yasuda:** good. closed..  

#### 1.7. Proposal: Chaining VCs via links and digests (issue vc-data-model#952)
{: #section1-7}

_See github issue [vc-data-model#952](https://github.com/w3c/vc-data-model/issues/952)._

<!-- issue w3c/vc-data-model/952 -->



**Kristina Yasuda:** "Proposal: Chaining VCs via links and digests" - have discussed, prior issues, don't think we ever saw a PR.  
… reads from issue.  
… could attach pending close.  

**Michael Prorock:** Let's either close or mark pending close, it's a complicated enough issue that coming in right before feature freeze is problematic..  
… I'm not disputing the value of it, just question whether it's pragmatic to get consensus and get it done in time..  

> *Orie Steele:* AFAIK, data integrity already added support for it.

> *Orie Steele:* and it was not discussed in great detail.

**Kristina Yasuda:** any objections to pending close?.  

**Orie Steele:** suspects personal hallucination, but thought id was present in proof, and id facilitates possible chaining.  

**Manu Sporny:** did add id for proof chaining, but this is chaining VCs, not proofs - not this issue.  

> *Orie Steele:* This seems like "evidence".

**Kristina Yasuda:** marking pending close lacking objections.  

#### 1.8.  (issue vc-data-model#758)
{: #section1-8}

_See github issue [vc-data-model#758](https://github.com/w3c/vc-data-model/issues/758)._

<!-- issue w3c/vc-data-model/758 -->



**Kristina Yasuda:** "Fix the vc-data-model namespace with [https://www.w3.org/ns/vc/v2"](https://www.w3.org/ns/vc/v2").  

**Orie Steele:** this is a very old issue, suggest close - lots of back and forth with manu/ivan - have since added ns context, etc.  

> *Manu Sporny:* +1 to close.

**Orie Steele:** continued to add new terms to iri space (2018) and we will be stuck there like IRIs and that is best we can do with RDF.  

**Kristina Yasuda:** ok to close?.  

> *Michael Prorock:* *misc discussion around if you opened it you can close it*.

**Brent Zundel:** notes that objection to closing on call is only to do with tooling.  

#### 1.9. Remove requirement for JWT (etc.) support from VC 2.0 & only support Linked Data (issue vc-data-model#1018)
{: #section1-9}

_See github issue [vc-data-model#1018](https://github.com/w3c/vc-data-model/issues/1018)._

<!-- issue w3c/vc-data-model/1018 -->



**Kristina Yasuda:** "Remove requirement for JWT (etc.) support from VC 2.0 & only support Linked Data" is the issue....  

> *Manu Sporny:* +1 to close, since we won't get consensus on it..

**Joe Andrieu:** suggests pending close.  
… does not think we will get consensus.  

**Kristina Yasuda:** marking pending close for now.  

#### 1.10. Add examples of JSON-LD Framing (issue vc-data-model#1029)
{: #section1-10}

_See github issue [vc-data-model#1029](https://github.com/w3c/vc-data-model/issues/1029)._

<!-- issue w3c/vc-data-model/1029 -->



**Kristina Yasuda:** "Add examples of JSON-LD Framing".  

**Orie Steele:** when the JSON-LD context is applied, and then removed all that remains is n-quads - and the n-quads is the canonical representation.  
… mostly applies to data integrity, but also applies when working with more general RDF / JSON-LD tooling and the data model as RDF.  
… you will eventually find term definitions in the graph depending on how far and deep you process the graph.  
… seems like defining JSON-LD behavior is not really a focus of this group, but bc we have defined as JSON-LD we should touch on some of these items in the right place.  
… perhaps in an implementation guide, perhaps in the data integrity.  
… thinks it is odd that we spend a lot of time on the RDF mode, but then don't demonstrate.  

**Manu Sporny:** agree with orie's statement around moving this to a better place - sure let's talk about framing, but in the right place.  
… don't think we can talk about framing in the core data model in a general way.  
… requires concrete examples.  
… most people hopefully don't need to touch this stuff.  

> *Orie Steele:* Framing generally speaking is a way to ask for specific claims, in an existing credential..

> *Orie Steele:* it seems very relevant to the confusion over "claim", "credential" and "proof"..

> *Orie Steele:* For example, you might use a "frame" to obtain a "proof"..

> *Dave Longley:* +1 to talk about framing VCs in BBS or VPs (to, e.g., merge claims across VCs about a single subject into one object) in the implementation guide.

**Michael Prorock:** I agree with the right place for this thing not being in core data model, and if you want to go down the JSON-LD thing, there's a lot of documentation around JSON-LD and RDF and those sorts of things. It might be beneficial to add good examples to an implementation guide -- someone has to do that work? Let's close this in favor, it belongs elsewhere..  

> *Manu Sporny:* +1 to mprorock ^.

**Kristina Yasuda:** would you be ok with closing if addressed elsewhere?.  

**Orie Steele:** thinks we will have to address this in BBS.  
… do not think that we can do BBS without this.  
… thinks it is crazy that we spend all this time on JSON-LD and don't understand how it works.  

#### 1.11. `nonTransferable` property in v2.0? (issue vc-data-model#1037)
{: #section1-11}

_See github issue [vc-data-model#1037](https://github.com/w3c/vc-data-model/issues/1037)._

<!-- issue w3c/vc-data-model/1037 -->



**Kristina Yasuda:** based this "nonTransferable property in v2.0?" question on an issue we closed.  
… asks for volunteers? pending close?.  
… yep - pending close.  

#### 1.12. Proposal: Anchored Resources and Hashlinks for VCs (issue vc-data-model#831)
{: #section1-12}

_See github issue [vc-data-model#831](https://github.com/w3c/vc-data-model/issues/831)._

<!-- issue w3c/vc-data-model/831 -->



**Kristina Yasuda:** suggests pending close on "Proposal: Anchored Resources and Hashlinks for VCs" as well.  
… ....  
… going back to list for one more.  

#### 1.13.  (issue vc-data-model#1039)
{: #section1-13}

_See github issue [vc-data-model#1039](https://github.com/w3c/vc-data-model/issues/1039)._

<!-- issue w3c/vc-data-model/1039 -->



**Kristina Yasuda:** "Add at least one unsigned properties" is the issue.... opened by joe.  

**Orie Steele:** very much related to VPs.  
… you could use a VP as a json wrapper for additional info.  
… in VCs we don't have the ability for an unprotected header like in COSE - don't even really have this in JOSE.  
… seem to possibly be some use for unsecured properties.  

> *Orie Steele:* the data integrity spec lets you define the suite, however you like... sounds like you are just talking about a "new data integrity proof" type..

**Joe Andrieu:** main mechanism desired is an object that is a VC for selective disclosure that permits signing over items outside of one or two that are not signed.  
… note sure if belongs here or DI.  

**Dave Longley:** believes should be in data integrity.  
… probably cryptosuite specific.  
… we will want to avoid problems by learning from similar issues in the past.  

**Joe Andrieu:** volunteers for assignment, but requests assist from dlongley.  

**Kristina Yasuda:** asks for objections to moving to data integrity?.  

**Orie Steele:** notes ok with moving it.  

**Kristina Yasuda:** OKs the move.  
… says that everyone is awesome and thanks for all being here - main call tomorrow.  

---
