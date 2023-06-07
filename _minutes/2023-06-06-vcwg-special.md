---
layout: minutes
date: 2023-06-06
title: Verifiable Credentials Working Group Special Topic Call — 2023-06-06
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-06-06-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call",
        "dateCreated": "2023-06-06",
        "irc": "vcwg-special",
        "datePublished": "2023-06-07",
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
            "name": "Verifiable Credentials Working Group Special Topic Call",
            "startDate": "2023-06-06",
            "endDate": "2023-06-06",
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
                            "name": "Brent Zundel"
                        }
                    ]
                },
                {
                    "@type": "OrganizationRole",
                    "roleName": "scribe",
                    "attendee": [
                        {
                            "@type": "Person",
                            "name": "Manu Sporny"
                        },
                        {
                            "@type": "Person",
                            "name": "Dave Longley"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call — Minutes
{: .no_toc}



**Date:** 2023-06-06

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20230606T180000) and the [IRC Log](https://www.w3.org/2023/06/06-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Manu Sporny, Shigeya Suzuki, Brent Zundel, Dave Longley, Andres Uribe, Joe Andrieu, Phillip Long, Orie Steele, David Lehn, Ted Thibodeau Jr.

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Manu Sporny, Dave Longley

## Content:
{: .no_toc}

* TOC
{:toc}
---


> *Andres Uribe:* Hi hi! Is this happening?

### 1. Issue handling
{: #section1}

**Brent Zundel:** See https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc.

**Brent Zundel:** We are going through issues today... we need to decide if we are going to do this before CR... or during CR.  

#### 1.1. Normative definition of credentialSubject including legal types (issue vc-data-model#875)
{: #section1-1}

_See github issue [vc-data-model#875](https://github.com/w3c/vc-data-model/issues/875)._

<!-- issue w3c/vc-data-model/875 -->



**Brent Zundel:** Normative definition of legal types -- Orie, thoughts on what to do here?  

**Orie Steele:** Multiple subjects conversation, multiple subjects is allowed in JSON-LD and Data Integrity Proofs and VC-JWT, we should close this since VC-JWT has support for it as does Data Integrity. Whether this is a good idea to have multiple subjects is a separate question.  

**Brent Zundel:** ok, so closing? Any objections?  

**all:** None, closing.  

#### 1.2. Definition of evidence should align with NIST (issue vc-data-model#926)
{: #section1-2}

_See github issue [vc-data-model#926](https://github.com/w3c/vc-data-model/issues/926)._

<!-- issue w3c/vc-data-model/926 -->



> *Orie Steele:* suggest applying post CR label.

**Brent Zundel:** Definition of evidence as defined by NIST -- do we need to address this before CR? Editorial? Normative changes?  

> *Andres Uribe:* +1 to post Cr.

**Brent Zundel:** Suggestion to set as post-CR - any objections?  

> *Phillip Long:* Post CR works for me.

**all:** No objections, marking as post-CR.  

> *Orie Steele:* We have no required RDF types for evidence.

> *Orie Steele:* best we have are community drafts that are not interoperable, which claim to use evidence.

**Joe Andrieu:** Do we have implementers that have used evidence, isn't it still at risk? I like it, personally, anyone using it?  

**Brent Zundel:** We do need to understand if it's used.  

**Joe Andrieu:** I'm fine w/ moving on.  

**Andres Uribe:** We are debating using this for identity proofing -- right now, thinking of using it.  

#### 1.3. Standardize recording a pre-issuance DID Auth VP as evidence property (issue vc-data-model#896)
{: #section1-3}

_See github issue [vc-data-model#896](https://github.com/w3c/vc-data-model/issues/896)._

<!-- issue w3c/vc-data-model/896 -->



**Brent Zundel:** Add DIDAuth as evidence property -- is this pre/post CR?  

**Joe Andrieu:** Unfortunately, same concerns, I think it's the right way to do things, but no one is doing it? We should ask if anyone is doing this, and mark it pending close.  

**Brent Zundel:** ok, done, any opposition to marking as pending close? (with the additional details)?  

**all:** No objections, marked as pending close.  

#### 1.4. PresentationSchema for VPs (issue vc-data-model#839)
{: #section1-4}

_See github issue [vc-data-model#839](https://github.com/w3c/vc-data-model/issues/839)._

<!-- issue w3c/vc-data-model/839 -->



**Brent Zundel:** presentation schema for VPs, the associated PR is closed because we couldn't come to consensus to merge it. Suggest marking this as pending close in light of that.  

> *Joe Andrieu:* +1.

> *Orie Steele:* +1.

**Manu Sporny:** +1.  

**Brent Zundel:** ok, not hearing objections, marking pending close and moving on.  

#### 1.5. Representing Multi Issuer Credentials in the VCDM (issue vc-data-model#932)
{: #section1-5}

_See github issue [vc-data-model#932](https://github.com/w3c/vc-data-model/issues/932)._

<!-- issue w3c/vc-data-model/932 -->



**Brent Zundel:** Representing multi-issuer credentials. Question remains, is this something we want to tackle before CR?  

**Orie Steele:** Similar to multiple subject, all representations and securing mechanisms allow it... I think it can be handled post-CR, if at all. If there aren't strong examples in core spec, by default, not a good thing to be doing, don't think we need to do anything w/ this - close issue, if it remains open, someone should create a good example or issue should be closed.  

**Brent Zundel:** proposal to mark as pending close, any other comments on issue?  

> *Orie Steele:* anything is an object if you are brave enough... especially javascript arrays.

**Andres Uribe:** To Orie's point, we do have a lot of examples of real life use cases, but not clear how it works... co-tweets, parents claims about their children, co-signers on loan... what examples do we need for this?  

> *Orie Steele:* I meant a single spec example, with multiple issuers.

> *Orie Steele:* the `@context` allows multiple issuers, and that is what is signed over in both representations.

**Dave Longley:** Agree with most of what Brent said, but maybe disagree w/ having multiple IDs... what spec says today doesn't allow multiple issuers. Don't think it's actually supported today, if people want a change, that needs to happen before CR.  

**Brent Zundel:** does this need to change before CR, any volunteers?  

> *Manu Sporny:* pdl-ASU: Does this involve guardianship, or is that different?

**Brent Zundel:** multi-issuer VCs could be one way, but not the only way.  

> *Orie Steele:* yep, multi issuer and multi subject are both related / required for some scenarios.

> *Orie Steele:* but afaik, nobody is using them (either).

**Joe Andrieu:** I'd be hard pressed to understand how that would work.  

**Manu Sporny:** Just to highlight, I don't think that's an issue, Phil. You can always do multi-issuer by issuing multiple VCs. That may be distasteful in some cases but it works. You can have two VCs claiming a child, and so on.  
… We're covered as far as use cases are concerned, the question is, is that the most ideal form. To be clear, I don't think we need to deal with this in 2.0.  

> *Dave Longley:* pdl-ASU: Very good.

> *Andres Uribe:* +1 for future.

**Brent Zundel:** ok, so suggestion that this is not a VC2.0 thing -- do we mark pending close, or mark future?  

**Joe Andrieu:** Do you want to keep this around, Phil?  

> *Manu Sporny:* pdl-ASU: I just want to make sure we consider this in v3.0... however we keep it around is good.

**Manu Sporny:** I guess the only concern I have with keeping it around is that our issuer tracker ends up collecting a lot of cruft over time. Things that are continuously not addressed. If this is an important enough use case it will be raised again saying they want the spec changed. My preference is to close as many issues as possible if they haven't been worked on.  
… The WG has been operating since 1.0 and 2+ years since then and no one hasn't worked on it. The history will still be there if we close it.  

> *Dave Longley:* pdl-ASU: I will check with some people I know doing guardianship and see if they are ok with handling it.

**Joe Andrieu:** We would accept use cases in the VC use cases document.  

> *Manu Sporny:* pdl-ASU: That's a good suggestion, thanks Joe.

> *Joe Andrieu:* +1.

> *Dave Longley:* +1 to brent.

**Brent Zundel:** So, mark this pending close because there is not consensus to do it. Any objections?  

**Manu Sporny:** +1.  

**Brent Zundel:** ok, marking pending close.  

#### 1.6. Provide guidance when media type is incorrect (issue vc-data-model#1015)
{: #section1-6}

_See github issue [vc-data-model#1015](https://github.com/w3c/vc-data-model/issues/1015)._

<!-- issue w3c/vc-data-model/1015 -->



**Brent Zundel:** provide guidance when media type is incorrect.  

**Manu Sporny:** We should provide guidance on this.  

> *Orie Steele:* +1 Manu.

**Brent Zundel:** ok, I'll assign it to manu -- ready for PR.  
… and before CR.  

#### 1.7. Specify allowed Verifier interactions with Verifiable Data Registries  (issue vc-data-model#1016)
{: #section1-7}

_See github issue [vc-data-model#1016](https://github.com/w3c/vc-data-model/issues/1016)._

<!-- issue w3c/vc-data-model/1016 -->



**Brent Zundel:** Specify allowed verifier interactions w/ verifiable data registries.  
… Not much discussion... before/after CR, or pending close.  

> *Orie Steele:* Verifiable Data Registries are blockchains?

**Ted Thibodeau Jr.:** We should indicate who's issue this is when introduced.  

**Brent Zundel:** noted.  
… before/after CR, or pending close?  

**Joe Andrieu:** I'm struggling to make sense of the comment.  

**Brent Zundel:** pending close unless we get more information?  

> *Orie Steele:* Seems he is interested in VDRs as trust stores.

**Joe Andrieu:** VDRs are not a thing in the VC universe?  
… This is about DIDs... not this spec/work?  

**Brent Zundel:** so pending close, but for other reasons?  
… any objections to pending close?  

> *Orie Steele:* +1.

> *Phillip Long:* pending closed for 1016.

**Manu Sporny:** +1.  

**all:** None heard, marking as pending close.  

**Brent Zundel:** I'll ask David for more information if he wants to keep it open.  

#### 1.8. Add "credential boilerplates" as examples (issue vc-data-model#935)
{: #section1-8}

_See github issue [vc-data-model#935](https://github.com/w3c/vc-data-model/issues/935)._

<!-- issue w3c/vc-data-model/935 -->



**Brent Zundel:** Add credential boilerplates as examples, ready for PR -- we could add he post-CR label because this has to do with examples, or it could be closed.  

> *Orie Steele:* Manu solved this, this can be closed.

**Orie Steele:** I think it's been addressed by certain PRs, if it's my issue, I'm happy to close it.  

**Brent Zundel:** Ok, marking pending close and it'll get closed.  

#### 1.9. 'issued' vs. 'validFrom' (formerly 'issuanceDate')  (issue vc-data-model#965)
{: #section1-9}

_See github issue [vc-data-model#965](https://github.com/w3c/vc-data-model/issues/965)._

<!-- issue w3c/vc-data-model/965 -->



**Brent Zundel:** Issued vs. validFrom -- raised by Ivan, two properties have identical descriptions -- is this something that needs to be done.  

**Manu Sporny:** I don't know. I remember this being tricky.  
… Looking at it.  
… We're trying to figure out if we still need `issued`; it's not in the v2 context, since the vocab is not normative right now. If it becomes normative, we will have to do it before CR.  
… I'd say it's safe to close this and I don't think it will blow up on us, hopefully.  
… Everyone needs to remember that if we make the vocabulary normative, it may create issues for us if the definitions in there are not perfectly aligned.  
… Mark pending close is my suggestion.  

> *Shigeya Suzuki:* +1 Orie.

**Orie Steele:** I think we have a bunch of terms that were previously used in v1.1 that are anchored in the vocabulary -- a bit crazy to me that they're not normative, we need to clean that up -- processing v1.1 or v2.0, and if you click through them, you'll hit term definitions that (if they're not understood), we handle that. We should be cautious about this, this is an example of one of those terms. You're expecting the term to have a definition and you'll either see valid information or not.  
… If we are living in a world w/ v1 and v2 credentials, we have to clean this up.  

**Joe Andrieu:** I'm ok w/ any of the proposals, but wanted to note that we're still bumping in to this confusion about "the thing we're talking about"... validFrom/validUntil will be used by the credential, but not the VC itself.  
… I have a DL and it's valid for 3 years vs. the digital signature... there is confusion about what these properties refer to that are not the VC but are being represented by the VC.  

**Brent Zundel:** I've heard a number of folks saying pending close, if vocab is made normative and we have to clean it up, this being closed wouldn't stop us from cleaning that up.  
… Is there text that should go into the data model to fix this and if so, is the text going to be normative.  

**Phillip Long:** Is this something that would be better as a non-normative thing in an implementation guide? So there is a place where distinctions that Joe was making are clearly expressed? We keep running into it because two versions, need to address it, can we raise it in a non-normative way to help?

> *Orie Steele:* if there is confusion at this layer, we have failed to write the core spec properly.

> *Orie Steele:* http-range-14 strikes again.

**Joe Andrieu:** I do like the idea that we could have some of this stuff in implementation guide -- might it have an effect on normative text, might change meaning of validFrom -- VC vs. credential represented by the VC -- if we learned how to talk about it, might change definitions of properties.  

**Brent Zundel:** This tells me that we might need to talk about this, mark as before CR and move on. any opposition?  

**all:** None heard.  

#### 1.10. What is the action associated with issuing/creating a Verifiable Presentation? (issue vc-data-model#887)
{: #section1-10}

_See github issue [vc-data-model#887](https://github.com/w3c/vc-data-model/issues/887)._

<!-- issue w3c/vc-data-model/887 -->



**Brent Zundel:** This was created and assigned to Manu.  
… I don't think this is potentially normative, could be post-CR.  

> *Orie Steele:* "issuing" seems only relevant when the presentation is signed... which is not always the case.

> *Dave Longley:* poll results were: composing and then presenting.

**Manu Sporny:** I think we ran a giant poll in the CCG and we got an answer through ranked choice voting, IIRC.  
… We have a clear indication on top four choices that we could discuss in the group.  
… "compose, create, generate, and produce".  
… "compose" eeked out over create, etc.  

> *Orie Steele:* those all seem great, as long as you don't actually sign the presentation.

> *Joe Andrieu:* +1 to picking one and going to PR.

**Manu Sporny:** We could rerun it with a smaller set, the group could debate / bikeshed those 4 things, or we can raise a PR.  
… Maybe someone could raise a PR and we could discuss there.  

> *Orie Steele:* in general, presentations need a lot of help.

> *Phillip Long:* =1.

**Brent Zundel:** ok labeled ready for pr and post cr.  

#### 1.11. Fix media type registration language (issue vc-data-model#1052)
{: #section1-11}

_See github issue [vc-data-model#1052](https://github.com/w3c/vc-data-model/issues/1052)._

<!-- issue w3c/vc-data-model/1052 -->



> *Phillip Long:* close it!

**Brent Zundel:** This looks like it has been addressed, pending close?  

**all:** No objections.  

#### 1.12. Add references in vocabulary that link back to the VCDM document (issue vc-data-model#1061)
{: #section1-12}

_See github issue [vc-data-model#1061](https://github.com/w3c/vc-data-model/issues/1061)._

<!-- issue w3c/vc-data-model/1061 -->



**Brent Zundel:** Don't know if this is pre/post CR -- depends on making vocab and/or base context normative.  
… Going to mark this before CR, unless there are objections?  

> *Manu Sporny:* No objections.

#### 1.13. Add guidance on ignoring optional fields (issue vc-data-model#1027)
{: #section1-13}

_See github issue [vc-data-model#1027](https://github.com/w3c/vc-data-model/issues/1027)._

<!-- issue w3c/vc-data-model/1027 -->



**Brent Zundel:** Adding guidance on ignoring optional fields -- pre/post CR?  

**Manu Sporny:** I think we could end up with normative guidance, there's always a risk of that, so a pre-CR thing probably.  

**Brent Zundel:** Any opposition for before CR?  

> *Orie Steele:* +1 to fixing this before CR.

**Joe Andrieu:** I have a question -- optional fields are issuer things, not that they can be ignored by a Verifier -- it's about whether or not the issuer needs to put it in.  

**Orie Steele:** In general, a Verifier can ignore 100% of what an issuer has put in there. In terms of requirement, there are required fields, optional fields that are supposed to be understood -- part of why our vocab should be normative if fields are going to be present.  

**Brent Zundel:** Thanks for everyone coming today -- this was fantastic and satisfying, let's do this again tomorrow.  

> *Phillip Long:* "The magnificent 10".

**Brent Zundel:** We'll try to figure out the call details.  
… pleasure to work with you all, bye.  

---
