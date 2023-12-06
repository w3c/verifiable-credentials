---
layout: minutes
date: 2023-12-05
title: Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — 2023-12-05
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-12-05-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs",
        "dateCreated": "2023-12-05",
        "irc": "vcwg-special",
        "datePublished": "2023-12-06",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs",
            "startDate": "2023-12-05",
            "endDate": "2023-12-05",
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
                            "name": "Joe Andrieu"
                        },
                        {
                            "@type": "Person",
                            "name": "Manu Sporny"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Sebastian Crane"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — Minutes
{: .no_toc}



**Date:** 2023-12-05

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20231205T180000/) and the [IRC Log](https://www.w3.org/2023/12/05-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ted Thibodeau Jr., Dave Longley, Manu Sporny, Joe Andrieu, Sebastian Crane, Brent Zundel, Andres Uribe, David Lehn, Hiroyuki Sano, Michael Jones, Gabe Cohen, Kaliya Young, Will Abramson

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Joe Andrieu, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Brent Zundel:** todays' agenda: open pull requests followed by issue triage.  

### 1. PR Review.
{: #section1}

**Brent Zundel:** ok. let's dive in to pull requests.  

> *Brent Zundel:* [https://github.com/w3c/vc-data-model/pulls](https://github.com/w3c/vc-data-model/pulls).

**Brent Zundel:** we'll start at the top.  

#### 1.1. Add `relatedResource` property to `VerifiablePresentation` (pr vc-data-model#1370)
{: #section1-1}

_See github pull request [vc-data-model#1370](https://github.com/w3c/vc-data-model/pull/1370)._

<!-- issue w3c/vc-data-model/1370 -->



**Brent Zundel:** only has approvals.  
… likely to get merged within the week.  

**Joe Andrieu:** I still think this is a layering error. I don't know why Verifier would know how to interpret related resource, they didn't ask for it, it's not a VC, I think most use cases could be handled w/ a VC or how to secure contexts for ... generic mechanism seems wrong.  

**Manu Sporny:** I largely agree with Joe on his use cases. We should probably have a context securing mechanism.  
… and have something for enveloped VCs.  
… a fear is that some implementers are going to use related resources as a dumping ground for all sorts of things.  
… I want to express XYZ, I'm going to put that in there.  
… All that to say, Joe has a point.  
… But if folks want to use the data model in that way, they can.  

**Joe Andrieu:** I want to note that anyone can add to the context and they can add properties. What we're talking about here is that everyone has to respect... we aren't preventing people that want to use relatedResource. I don't see reason for extensibility in this way.  

**Brent Zundel:** I see the benefit of having more specific mechanisms for the different things.  
… would the related resource be seen as a stepping stone?  

**Joe Andrieu:** I think a lot of it is lessons learned from extensible HTTP headers, which was "X-something"... if people start using it, they won't stop using it. If burden is you have your own context that does something specific. That's the path towards getting new things into VCDM. I'm afraid of setting the wrong direction here.  

> *Dave Longley:* +1 to Joe that once people start using things they won't stop ... there are advantages for putting slight speed bumps in the way to make people do things in better ways.

**Brent Zundel:** this PR has nothing but approvals.  

#### 1.2. Incorporate status checking into verification algorithm (pr vc-data-model#1369)
{: #section1-2}

_See github pull request [vc-data-model#1369](https://github.com/w3c/vc-data-model/pull/1369)._

<!-- issue w3c/vc-data-model/1369 -->



**Brent Zundel:** incorporate status checking into the verification algorithm.  
… this was in part in response to a threatened FO from Google.  

**Manu Sporny:** I think Joe requested this.  
… Andres also had some good things to say.  
… It's an extension to the existing algorithm, but there is quite a bit of conversation.  
… maybe some of this should be under verification.  
… It does pull us into validation land, more-so than other algorithms.  

**Brent Zundel:** this one is not as clear cut. one approval one request for changes.  
… please indicate your approval or commentary.  

**Manu Sporny:** I will note that Orie is objecting because this is about validation not verification.  
… but elsewhere Orie has said that verifiers are doing validation, so the waters have gotten muddied.  
… It's safe to say that some of the things we are doing is debatable as validation.  
… If you're reading "validation" it may not mean what we've traditionally meant.  
… That makes it a bit challenging to read.  
… Likely closed in the week without further support.  
… Andres, could you vocalize your comment?  

> *Manu Sporny:* [https://github.com/w3c/vc-data-model/pull/1369#issuecomment-1838964960](https://github.com/w3c/vc-data-model/pull/1369#issuecomment-1838964960).

**Andres Uribe:** We have two terms we are defining, verification (securing and currency).  
… Does the issuer stand by what they said?  
… I think we should modify and update that term so that it does not include currency.  
… because cryptographic verification is well understood in the industry and does not include currency.  
… So, I think it would be better to remove currency from verification.  

> *Manu Sporny:* FWIW, I agree with andres' take on what we could do to make this cleaner in the spec.

> *Ted Thibodeau Jr.:* business logic!

**Joe Andrieu:** It's a compelling argument, we are not just doing cryptographic securing, we're doing semantic securing. If we were just cryptographically securing, we'd just use a JWT. We are doing more here... knowing issuer stands by statement is in nature of whether or not statement is attributable to the author. That is different from timeliness about expiry. That the issuer is committed to this is what we're doing that's different than other cryptographic based mechanisms for verification.  

**Ted Thibodeau Jr.:** VCs are defined to say anything about the issuer standing by the statement.  
… rather "they said this about Pat".  
… forcing them together is not going to help.  

**Brent Zundel:** TallTed's definition matches my definition.  
… that the VC is something said at some point.  
… the status property might not even be there.  
… so that doesn't seem wholly involved so far.  
… otherwise, wouldn't we have made status a require.  

**Joe Andrieu:** What VCs say are not about "that they said it" that "they DO say it" -- present tense -- that's important. Verifier is in present tense, am I going to rely on the information, but if issuer no longer stands by it, why would I rely on it?  

> *Ted Thibodeau Jr.:* "said" is not in the present "say" tense in any of our documents, to date.

**Manu Sporny:** knowing someone had a valid driver's license, even if they don't stand by it right now, might be useful.  
… so there are use cases where you would ignore the currency.  
… but I think the main point is that verifiers should apply their business logic, without restriction.  
… so if you don't care about currency, then we're saying that you can't use VCs?  
… verifiers will check if its important, I don't think we need to instruct them.  
… maybe a separate validation algorithm in the future.  

> *Dave Longley:* i think, when acting as a verifier, "now" is itself an input parameter to some algorithm.

**Andres Uribe:** answering Joe's point about semantic verification. That's a blurry line that is difficult to define. Who is to say that status is part of that or not?  
… if you care about it, you do it.  
… We should make verification as clear as possible.  
… These need to be secure. So we need clear verification.  

**Dave Longley:** I'm sympathetic with tightening up what verification means. Modulo status check, there are other things that we do during verification, such as formedness.  
… the real question we've used is about business rules.  
… There are certain things that need to be done to gather the information needed to validate.  
… So, some part of verification requires you to go out an check a list. Then you should do that.  
… If we say it's just checking cryptography, that's not going to work.  
… The business rules get to are we going to accept something.  

**Brent Zundel:** this conversation will go into the PR.  
… this one is not as cut and dried.  

#### 1.3. Update context to match spec for name/description. (pr vc-data-model#1367)
{: #section1-3}

_See github pull request [vc-data-model#1367](https://github.com/w3c/vc-data-model/pull/1367)._

<!-- issue w3c/vc-data-model/1367 -->



**Brent Zundel:** update context to match spec.  
… lots of approvals. does what it advertises.  
… I anticipate this will be merged soon.  

#### 1.4. Remove unnecessary vocab comments in vocabulary.yml (pr vc-data-model#1361)
{: #section1-4}

_See github pull request [vc-data-model#1361](https://github.com/w3c/vc-data-model/pull/1361)._

<!-- issue w3c/vc-data-model/1361 -->



**Brent Zundel:** moving to 1361.  
… remove comments. nothing but approvals. does what it says.  

#### 1.5. Add mechanism to embed enveloped VCs in VPs. (pr vc-data-model#1358)
{: #section1-5}

_See github pull request [vc-data-model#1358](https://github.com/w3c/vc-data-model/pull/1358)._

<!-- issue w3c/vc-data-model/1358 -->



**Brent Zundel:** enveloped VCs.  
… raised to enable externally proofed VCs in VPs.  

**Manu Sporny:** originally had a concept to introduce related resource. group said "no" we have two different cases, securing contexts and expressing JWT-protected VCs in VP.  
… This is an attempt to do that.  
… we know people want to embed "enveloped VCs" JWTs, Gordian, AC/DC, etc.  
… This PR creates a new attribute called "envelopeVerifiableCredential".  
… Orie is objecting, I believe based on expressing it directly as a VC (which seems to blow up current processors).  
… The argument is don't do this specific thing, we can shove it into related resources, which is exactly what Joe and I are concerned about.  
… Mike also objected to the terminology? Not the feature?  
… Unless Orie changes his mind, I don't think we'll be able to get this in there.  

**mike:** This seemed to be changing established terminology for not commensurate benefit. No proportional benefit.  

> *Dave Longley:* "envelopedVerifiableCredential" is better than "externallySecuredVerifiableCredential" based on length alone :).

**Sebastian Crane:** Manu, can you provide a link to the original discussion that brought up the idea of an enveloped VC, which seems like a radical new concept from what we have already.  

**Manu Sporny:** it's [#1265](https://github.com/w3c/vc-data-model/issues/1265). It's a long thread. See in particular, [this comment](https://github.com/w3c/vc-data-model/issues/1265#issuecomment-1824796746).  
… responding to Mike, yes. This PR tried to do two things at once.  
… one was changing the terminology, embedded proof / external proofs.  
… some subset of people get confused by those terms.  
… tried "watermarking proofs" v "external proofs".  
… "envelope" is that the secured thing goes inside. "watermark" is that you amend the thing.  
… that was the thought, but if that isn't resonating, that's ok.  

> *Dave Longley:* we can keep embedded and use enveloped as a compromise there.

**mike:** watermarking doesn't work for me.  

**Brent Zundel:** I think I understand the reasoning behind this mechanism, that the way VC property is defined makes is so you can't just shove a JWT in there.  
… would another possible path be that we adjust that property so it matches the likely behavior?  

**Dave Longley:** this comes down to the fact that we have two different proof mechanisms.  
… because of that, we need two different properties.  
… because we need to keep the statements from the VC graph separate.  
… The envelope mechanism functions differently. To reference one, the envelope itself has a different data format.  
… It's not expressed in JSON-LD, so we need a place to express that.  
… We need two things. Either related resource or this enveloped property or we can't put VCs into a VP.  

**Brent Zundel:** I think I tracked most of that.  
… note: you said you can't put this in JSON-LD.  

> *Ted Thibodeau Jr.:* all JSON-LD is JSON, but some JSON is not JSON-LD.

**Dave Longley:** JSON-LD is a subset of JSON, so you *can* put anything in a JSON and so you CAN add that to JSON LD.  
… We either have two properties of we say this property "has JSON" and nothing more (just a blob) or we can have a property where JSON-LD processors know what to do with the information.  
… Are the values in the term going to be JSON or JSON-LD?  

**Brent Zundel:** in other properties, we had a type property to say how you handle different variations.  
… why can't we do that here?  
… Related Q: if we need a different property for embedded v enveloped, are we going to need more properties for other securing mechanisms?  

**Andres Uribe:** I propose we separate these into two terms (whatever those are).  
… my main concern is that its confusing from the previous version of the data model was interpreted to put the JWT in that property.  
… So, if we are keeping the name but saying you can't put a JWT in there, that's going to confuse.  

**Dave Longley:** so you never were able to put a JWT into that property. That was never conformant.  
… so you're not putting a VC in that field, because they aren't VCs.  
… We could adjust the spec where you have terms for enveloped credentials.  
… Brent was suggesting we keep `verifiableCredential` they way it is, and allow it to also have a typed value.  
… or we have a different property, which is where you would put the envelop.  
… I think both ways could work, but we'll still need a new term to put this other thing into some place.  

**Manu Sporny:** if this is a data URL can we just use an ID property to slap type on it?  
… the data url includes the type in the URL itself. So this could be used for any future securing mechanisms.  

> *Dave Longley:* `{"id": "data:...", "type": "EnvelopedVerifiableCredential"}` <-- this would work i think.

**Manu Sporny:** this would be a better design than using relatedResource.  

> *Manu Sporny:* ^ yes, that should work.

**Brent Zundel:** if I'm understanding, then we keep `verifiableCredential` as an array of objects.  
… each object would have a type. in that array of objects, you could have either type embedded or otherwise.  

**Joe Andrieu:** For the object in the array, for a JSON-LD credential, would have A property that is the credential and a type. That object isn't directly a VC, it's a new thing that's wrapping around the VC as JSON-LD, not as a new data format.  

**Dave Longley:** I think we also need to put the context back onto that object.  
… in the VC work we have cleared the context so that V2 presentations can work with V1 VCs.  
… technically, we are going to need three things on those objects: id, type, context.  


---
