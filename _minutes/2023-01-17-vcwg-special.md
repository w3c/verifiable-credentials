---
layout: minutes
date: 2023-01-17
title: Verifiable Credentials Working Group Special Topic Call — 2023-01-17
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-01-17-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call",
        "dateCreated": "2023-01-17",
        "irc": "vcwg-special",
        "datePublished": "2023-01-18",
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
            "startDate": "2023-01-17",
            "endDate": "2023-01-17",
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
                            "name": "Michael Jones"
                        },
                        {
                            "@type": "Person",
                            "name": "Michael Prorock"
                        },
                        {
                            "@type": "Person",
                            "name": "Gabe Cohen"
                        },
                        {
                            "@type": "Person",
                            "name": "Brent Zundel"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Kerri Lemoie"
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "David Waite"
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Brian Richter"
                },
                {
                    "@type": "Person",
                    "name": "Kristina Yasuda"
                },
                {
                    "@type": "Person",
                    "name": "Antony Nadalin"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call — Minutes
{: .no_toc}



**Date:** 2023-01-17

See also the [Agenda](https://www.w3.org/mid/0a558f46062b7f1be8e9465dd5b2a6b2@w3.org) and the [IRC Log](https://www.w3.org/2023/01/17-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Michael Prorock, Kerri Lemoie, Manu Sporny, Orie Steele, Michael Jones, Joe Andrieu, Brent Zundel, Dave Longley, Phillip Long, David Waite, Shigeya Suzuki, Gabe Cohen, Brian Richter, Kristina Yasuda, Antony Nadalin

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Michael Jones, Michael Prorock, Gabe Cohen, Brent Zundel

## Content:
{: .no_toc}

* TOC
{:toc}
---


> *Phillip Long:* Phil-ASU has joined #vcwg-special.

### 1.  Add media type registration request (pr data-model#1000)
{: #section1}

_See github pull request [vc-data-model#1000](https://github.com/w3c/vc-data-model/pull/1000)._

<!-- issue w3c/vc-data-model/1000 -->



**Orie Steele:** Any objections to merging PR #1000?.  

> *Phillip Long:* +1 for merging.

**Kristina Yasuda:** I think we should merge it..  

> *Dave Longley:* +1 to merging.

**Orie Steele:** There are more approvals than I've seen on any PR since we resumed working..  
… There were change requests that were accepted, which became approvals..  

**Brent Zundel:** Please give us a summary.  

> *Kerri Lemoie:* Yes - overview would be helpful..

**Brent Zundel:** If there are no objections, I believe it would be appropriate to merge it.  

**Orie Steele:** A credential becomes a Verifiable Credential when it contains an embedded or external proof.  
… The media type describes this core data model type without or possibly with a proof.  
… We can take a step closer to resolving ambiguity in the specification.  
… We can use this content-type to describe the content that is secured in the specification.  
… There are two proof formats in the spec: embedded and external.  
… Data integrity proofs use embedded, VC-JWTs use external.  
… The purpose of this PR is to describe the thing that we're securing.  
… It can become a Verifiable Credential by securing it.  
… Having a media type gives us a way to talk about what it is.  

**Michael Jones:** Merge it.  

**Manu Sporny:** The only thing that prevents divergence is talking to one another across the specs.  

> *Michael Prorock:* +1 manu - editor comms, working group eyes - same as any other media type or external pointer (e.g. to alg combinations).

**Manu Sporny:** It's always possible to register too many media types or create non-interoperability.  
… We need to talk to one another.  
… When there are other media types, we need to ensure that they're aligned with our philosophy across the specifications.  
… If they diverge, they need to do so for very good reasons.  

**Michael Prorock:** There's an important lesson from this PR. The quickness of its approval indicates that this was needed..  
… If things get fuzzy later, at that point we can step back.  
… For this one, we quickly got to something useful.  

**Brent Zundel:** At this stage, we first wanted to talk about PR 1000.  
… We have a lot of approvals. It would be entirely appropriate to merge it..  

**Manu Sporny:** Please provide something for the disposition comments when you merge things..  
… I will add the disposition comments.  

**Brent Zundel:** Can the associated issues be closed?.  

### 2. Requesting content type for credential (pr vc-data-model#978)
{: #section2}

_See github issue [vc-data-model#978](https://github.com/w3c/vc-data-model/issues/978)._

<!-- issue w3c/vc-data-model/978 -->



**Brent Zundel:** Let's look at #978 first.  
… I raised this issue. I believe this can be closed now that PR #1000 has been merge..  
… You can indicate that since PR #1000 was merged, this can be closed.  

**Orie Steele:** The issue is now closed.  

> *Michael Prorock:* depends on length of time open, and sufficient working group input in my mind, which was definitely the case for #1000.

**Brent Zundel:** Tony asked in the Zoom chat if it wouldn't have been more appropriate to merge during a main call.  
… The PR already met criteria for being merged. We merge things not only during calls..  

**Manu Sporny:** Our work mode is that if it's been open for 7 days and there are no objections, it's fine to merge things..  

### 3. Define one or more media types for VCs (pr vc-data-model#421)
{: #section3}

_See github issue [vc-data-model#421](https://github.com/w3c/vc-data-model/issues/421)._

<!-- issue w3c/vc-data-model/421 -->



**Brent Zundel:** Issue #421 by Daniel Hardman may be relevant.  
… Does merging PR #1000 address the media type concerns raised in #421.  

**Orie Steele:** There are additional things to be done.  
… Maybe this issue can be closed in the core data model.  
… There are additional media types being considered for registration.  

> *Dave Longley:* +1 to closing #421 and open any new issues if new media types are required.

**Orie Steele:** I believe the WG should close #421 until such time as there is a new media type being requested for registration in the core data model.  

> *Michael Prorock:* +1 to closing issue #421.

> *Manu Sporny:* +1 to close issue #421.

**Manu Sporny:** +1 to what Orie said.  

> *Phillip Long:* +1 agreed here.

**Brent Zundel:** Considering that the scribe's text will appear as a comment on the issue, I will wait for that and then close it..  

**Manu Sporny:** There is a PR on VC-.  
… ... VC-JWT requesting a new media type registration.  
… Do we want to specify what happens when people use the wrong media type?.  
… Such as application/json.  

> *Michael Prorock:* +1 manu on the application/verifiable+credential, as well as especially the application/json issue.

**Manu Sporny:** We have evidence that people ignore media types.  

**Gabe Cohen:** What implications does a media type have on the representation of the credential?.  
… Will there be separate sections of the spec for different media types and/or separate specifications?.  

**Manu Sporny:** We could really screw up by adding too many media types.  
… Developers could get upset at us for making things too complicated.  
… CBOR and YAML media types could exist in the future.  
… CBOR-LD is already in use.  
… We don't have to change any language in the spec for those media types to exist.  
… Those already implement the existing VC Data Model.  
… Looking at PRs and issues will help guide us.  

### 4. Request media type for 1.1 vc-jwt claim set (pr vc-jwt#40)
{: #section4}

_See github pull request [vc-jwt#40](https://github.com/w3c/vc-jwt/pull/40)._

<!-- issue w3c/vc-jwt/40 -->



**Brent Zundel:** Next we will look at VC-JWT PR #40.  

**Orie Steele:** Now that we've merged PR #1000, we have a media type describing a credential without a proof.  
… There's been commentary on the list for using the media type that we registered.  

> *Orie Steele:* These proposals need to be updated to use our new media type: [https://github.com/w3c/vc-data-model/pull/1000#discussion_r1065931004](https://github.com/w3c/vc-data-model/pull/1000#discussion_r1065931004).

**Orie Steele:** These proposals need to be updated to use the new media type.  
… In JWTs there are two fields that are relevant to the media type: "cty" and "typ".  
… In VC-JWT PR #40, we define a media type for a VC-JWT 1.1 Claims Set.  
… The one that includes "iss", "sub", "vc", etc..  
… This media type defines a VC-JWT credential that will have an external proof.  
… The "cty" and "typ" properties are different.  
… This PR is to define the content type.  

> *Michael Prorock:* +1 orie - that distinction between payload and otherwise is important.

**Manu Sporny:** This PR confused me.  
… I think I followed what you were saying, Orie.  

> *Michael Prorock:* +1 cty.

**Manu Sporny:** I looked at other RFCs that defined media types.  
… These seem to be using the +jwt suffix.  

> *Michael Prorock:* version hurts me.

**Orie Steele:** This is for "cty" - not "typ".  
… We're versioning it because we're pretty unhappy with the 1.1 claims set.  

> *Manu Sporny:* +1, the payload format for VC-JWT is observably bad and has led to non-interoperable implementations..

**Orie Steele:** In particular, the instead-of vs. in-addition-to.  
… We wanted to have a "cty" to refer to 1.1.  

> *Gabe Cohen:* no mention of cty/typ in [https://transmute-industries.github.io/vc-jws](https://transmute-industries.github.io/vc-jws).

**Orie Steele:** We expect developers to switch on the media type.  
… How it's going to be versioned is subject to debate.  
… For instance, there could be parameters.  

> *Dave Longley:* [https://github.com/w3c/vc-jwt/pull/40#discussion_r1072663183](https://github.com/w3c/vc-jwt/pull/40#discussion_r1072663183).

**Orie Steele:** But for sure, they are going to be versioned.  

**Dave Longley:** RFC 7519 recommends against using "cty" for a JWT.  

**Orie Steele:** I've read that section of the RFC and was similarly confused by it.  
… I've seen developers use "cty" in the wild to describe the content.  
… In COSE_Sign1, I've seen code productively switch on "cty".  
… When RFCs are written, sometimes later things are used differently than originally intended.  
… In COSE_Sign1, cty is used to protect other kinds of content.  

**Michael Prorock:** cty is used to actively switch on content.  
… I did approve this PR.  
… The only thing that makes me uncomfortable is the versioning, but we clearly do have to version.  

> *Dave Longley:* seems like we need some kind of "this is a JWT claim set" in the media type name ... because it's not just a credential from the VCDM 1.1 ... it's a credential in a claims set in the "vc" claim :/.

**Michael Prorock:** I would not let versioning being imperfect block us from merging this.  

**Michael Jones:** I wrote that text in 7519... over a decade ago, different environment. since then, JWTs succeeded. used for all types of things we never imagined. secure caller id, others.  
… because of them succeeding IETF asked for a 'best current practices doc' on how to best securely use them. main thing added was strongly typing JWTs. for the `typ` field. used to prevent "cross-JWT-confusion".  
… also appropriate to strongly type the content. only imagined there being one `typ` for a JWT, which is 'JWT' but the world has changed.  
… practice is now on switching on the cty property. unconcerned about violating spec text. it is obsolete.  

> *Michael Prorock:* +1 let's make some progress!.

**Michael Jones:** agree with mprorock. versioning may not be perfect. can refine it. more important to put a stake in the ground, refine something that's versioned. this is a first attempt. shouldn't stand in the way of merging.  

**Brent Zundel:** I will note that JWT-VC PR #40 is not in the same position of PR #1000.  
… There is a change request that still needs to be resolved.  

**Manu Sporny:** We keep saying that this will only be used with "cty", but that may not be true.  
… We currently aren't saying anything about "cty" in the spec.  
… If this is going to be used more broadly, we need to describe how.  
… If you remove the version it starts to look like we have a conflict between the processing for the two media types.  
… The PR doesn't say anything about it being a JWT Claims Set.  
… If this is expressing a Claims Set, it should say so.  
… Can this go in "typ"? Is it forbidden to be in "typ"?.  
… We need to get answers to these questions before we merge it.  

**Dave Longley:** I'd like to see Claims Set in the name.  

**Antony Nadalin:** I'm trying to understand if "cty" is going to mandatory.  

**Orie Steele:** We don't know yet.  
… We didn't answer the similar questions when we merged PR #1000.  
… This is specific to "cty".  
… This is based on the BCP for JWTs.  
… I don't think it's necessary to add all those paragraphs of text before merging the PR.  

> *Dave Longley:* `{"vc": "..."}` <-- is not a "credential" in the VCDM, i think this is the point of confusion.

**Orie Steele:** My gut is that it doesn't need to be required because it's not in current 1.1 VC-JWTs.  

> *Kristina Yasuda:* my gut would be say it is recommended to put a cty and define a de fault behavior when it is not present.

> *Michael Prorock:* manu/dave - see [https://github.com/w3c/vc-jwt/pull/40/files#r1072950447](https://github.com/w3c/vc-jwt/pull/40/files#r1072950447).

> *Michael Prorock:* does that work?.

> *Kristina Yasuda:* and guess it will apply to both cty and typ eg recommendation & de fault.

**Orie Steele:** It's OK to uniquely identify the structured data element before we completely describe it.  

> *Dave Longley:* no, the name should reflect that it's a claimset not a credential.

**Orie Steele:** Doing it the beginning helps us separate 1.1 and 2.0 ideas.  

**Michael Jones:** Very good question from dlongley and others. why not claimset? in the same way we recommend specific content types that are specific as possible for typ. we want to use as specific as possible for cty, for the body, to prevent confusion.  
… everything that is a jwt could have a content type of claim set. did not both defining it for the JWT. did not add value. defining claimset identifier that's a credential (albeit unsecured) does add value. says things about the content type.  

> *Orie Steele:* +1 selfissued, i think using "claimSet" in a cty is sort-of redundant..

> *<brent> ack man:* <brent> ack manu.

> *Michael Prorock:* +1 selfissued.

**Manu Sporny:** That didn't go were I thought Mike was going.  
… People will look at the registry and use it in different place.  
… Orie said that we already merged something with ambiguity but that doesn't mean that we need to merge another thing with ambiguity.  
… We need to ensure that this is not confused with the VC Data Model.  

> *Orie Steele:* please read the proposals that have gone to the list... and compare to what we have shipped in 1.1.

**Dave Longley:** We're talking about two different JSON data objects: One is a credential - one is a Claims Set.  

> *Michael Prorock:* +1 proe.

> *Michael Prorock:* +1 orie.

**Dave Longley:** Those things don't line up to me.  

> *Michael Prorock:* this has been detailed on the list and in 1.1.

> *Manu Sporny:* I have read the proposals, this part of it doesn't make sense..

**Dave Longley:** If we include in the name that it's a Claims Set, then the confusion goes away.  
… This defines a media type for what we've shipped in 1.1.  
… In 1.1, you can secure with an external proof.  
… When using an external proof, this gives you a media type to refer to the secured body.  

> *Manu Sporny:* ok, so this isn't just for cty... this is for "The media type for VCDM v1.1".

**Dave Longley:** You can declare that this is 100% compatible with 1.1 VC-JWT with this cty.  

> *Dave Longley:* does "cty": "application/credential-1.1+json" ... mean you should expect: `{"vc": ...}` ... as the payload?.

> *Michael Prorock:* re: ok, so this isn't just for cty... this is for "The media type for VCDM v1.1 in cty in a jwt".

> *Manu Sporny:* mprorock, that's not clear at all from the PR or from what is being said..

**Michael Jones:** I'm fine adding the clarifying comments folks are asking for. Only intended for 'cty' and we could add it is a media type for a jwt claim set as defined by 1.1 VC JWT section.  

> *Orie Steele:* +1 selfissued.

**Michael Jones:** but am opposed to adding redundant stuff to the name.  

> *Michael Prorock:* does this text work? [https://github.com/w3c/vc-jwt/pull/40#discussion_r1072950447](https://github.com/w3c/vc-jwt/pull/40#discussion_r1072950447).

**Manu Sporny:** I'm hearing multiple things being said.  

> *Dave Longley:* couldn't "application/credential-1.1+json" be confused with `{"id": vc_id, ...}` ?.

> *Dave Longley:* i mean, i fully expect developers to make that mistake.

> *Michael Prorock:* i have suggested text to clarify these items - please comment on the PR.

**Manu Sporny:** I've heard that this isn't just for VC-JWTs.  

**Orie Steele:** This media type is intended to define the payload of a VC-JWT 1.1.  
… Claims Set - not a "typ".  

**Brent Zundel:** I think this was a very productive call.  

> *Dave Longley:* i support a media type for this ... i just think the naming is confusing right now :).

**Brent Zundel:** Please continue conversation in VC-JWT PR #40.  
… Thanks everybody!.  

> *Kerri Lemoie:* Thanks!.

---
