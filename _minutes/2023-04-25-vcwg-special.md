---
layout: minutes
date: 2023-04-25
title: Verifiable Credentials Working Group Special Topic Call on open reserved properties — 2023-04-25
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-04-25-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on relationship b/w the VCDM, context, and the vocabulary document — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on relationship b/w the VCDM, context, and the vocabulary document",
        "dateCreated": "2023-04-25",
        "irc": "vcwg-special",
        "datePublished": "2023-04-26",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on relationship b/w the VCDM, context, and the vocabulary documents",
            "startDate": "2023-04-25",
            "endDate": "2023-04-25",
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
                            "name": "Gabe Cohen"
                        },
                        {
                            "@type": "Person",
                            "name": "Dave Longley"
                        },
                        {
                            "@type": "Person",
                            "name": "Michael Prorock"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Phil L"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on relationship b/w the VCDM, context, and the vocabulary document — Minutes
{: .no_toc}



**Date:** 2023-04-25

See also the [Agenda](https://beta.w3.org/events/meetings/9ff74350-6398-41c5-a5d3-11cd54558218/20230425T180000/) and the [IRC Log](https://www.w3.org/2023/04/25-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Gabe Cohen, Manu Sporny, Dave Longley, Joe Andrieu, Phil L, David Lehn, Michael Jones, Orie Steele, Michael Prorock

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Gabe Cohen, Dave Longley, Michael Prorock

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. What is the relationship b/w the VCDM and terms defined there and the vocabulary document?
{: #section1}

**Brent Zundel:** topic for today - "what is the relationship b/w the VCDM and terms defined there and the vocabulary document".  
… partly us getting on the same page, partly what do we need to say normatively about this relationship...in response to a series of PRs `@Orie` raised.  
… Orie please talk us through your staging of this topic.  

**Orie Steele:** raised after reserved properties table. talked about wanting to reserve *things* but if no consensus, we should enable them to be reserved for exploration. not defined normatively.  
… have heard that Manu's interpretation does not align with that..  
… we have the core data model which defines terminology and how to use them. we have a vocabulary which reflects in linked data building blocks those terms we use.  
… vocabulary term definitions always have "2018" in them like XML always has 1999 ... we have LD contexts which have URLs with normative requirements, but not the value of the object that's dereferenced.  
… important for implementers to be able to read the technical recommendation and have all necessary guidance to impl the rec.  
… we can put additional properties in, like today including RDF...in v1 were some complaints about this. now people had moved to using separate contexts.  
… because of the structure of the new Data Integrity proof format we're trying to avoid creating separate contexts for suites. have evolved to where we are today. PRs related to the table PR that establishes these terms as reserved.  
… human readable piece may change, but the URL won't.  
… main concern I have: we've inherited a lot of compromised from v1 where we can't make any changes. would like to make a cleaner spec, vocab, context. opportunity to do that.  
… and leave room for the VC specs directory to do its job. about finding the right balance. this will be intuitive to developers and convey extension data we want. if we do a bad job developers will be confused and/or biased towards one securing format over another.  
… we've split the specs but not the data model to reflect that.  

**Brent Zundel:** want everyone on the same page to what the perceived problem is. Orie has pointed out an ideal state. is that something others agree/disagree with? why?.  

**Dave Longley:** bits of what Orie said I agree with, others we need to explore further. agree w/goals of making things cleaner in the 2.0 work where we can. have been doing that (e.g. multiple context for suites that are used).  

> *Brent Zundel:* +1 to making things cleaner in 2.0.

**Dave Longley:** also prioritizing end users and making compromises that may not match with ideological purity but going for usability. we have made a number of compromises already in how 2.0 works, like adding @vocab. a big component to understand. added to make sure people who are adding new contexts can do it more iteratively - more freedom to make mistakes.  

> *Brent Zundel:* FTR [https://www.w3.org/TR/design-principles/#priority-of-constituencies](https://www.w3.org/TR/design-principles/#priority-of-constituencies).

**Dave Longley:** need to be more careful around being consistent in helping users out. make sure the definitions they're winding up with are the right definitions. don't want to lose @vocab benefits or create additional confusion.  
… more contexts = more chances for term definition mismatch. already favoring common case. need to be careful doing that or we'll be sending a mixed message on our design.  

**Manu Sporny:** regarding these PRs, very strong -1 on them. primarily: it makes developers lives worse. trying to get down to 1 context to make developers lives easier. the more that's included by default the easier it's going to be for people to pick things up and start using it.  
… if we're going to remove these properties we should re-open the `@vocab` discussion. there will be properties that default to the wrong property. big downside. Orie's argument is for academic purity, but we should be prioritizing developers.  

> *Orie Steele:* "We are trying to nudge them towards using Data Integrity stuff"... yep. That is what we are doing..

**Manu Sporny:** if we look at proof, data integrity proof, people are using these properties. have demonstrations of 17+ implementers. one reason to make this change was to remove an additional context they would add in.  

> *Dave Longley:* Orie: yes, nudging towards "DataIntegrityProof type + cryptosuite property" instead of individual contexts for each suite..

**Manu Sporny:** anything that results in more work for developers ... if we split things up more in the name of academic purity we're harming developers.  
… schema.org has an enormous amount of properties in there, no problems. tons of websites use them. having extra unused properties is not problematic for them at all. works against simplicity.  

**Gabe Cohen:** I didn't really understand it until I heard you say that Manu. Is there a way to segment out core properties in a context vs. others? And have a different section for other properties for data integrity proof, etc.? To make it clearer so the distinction is clear?.  

> *Orie Steele:* Yes, data integrity already ships a separate context for DataIntegrityProof. [https://github.com/w3c/vc-data-model/pull/1091#issuecomment-1514806914](https://github.com/w3c/vc-data-model/pull/1091#issuecomment-1514806914).

**Gabe Cohen:** I agree that if this makes it easier on developers to have one context we should do that if it's clear that's the case..  

**Manu Sporny:** have heard it makes developers lives difficult if there are extra properties in the base context. has not been demonstrated that that is true at all.  
… does having an extra property or two really make developers lives harder? have a lot of data with schema.org to the contrary. why is this a burden to devs?.  

**Brent Zundel:** has the problem been laid out clearly? where to go from here?.  

**Michael Jones:** there is an "integrity for the work argument" that stuff in the context should be equivalent to what's in the VCDM spec, no more, no less. we shouldn't have speculative/optional stuff in there. in particular the proof property is optional for many of the VCs and shouldn't be there.  

> *Michael Prorock:* +1 selfissued.

**Orie Steele:** Manu is asking the right question regarding, "what is the real burden for developers?" I would like to try and answer part of it. comparison to schema.org is correct...it is a giant kitchen sink has lots of adoption.  
… meant to define a singular vocabulary in a single vertical / industry domain. it is a thing that does impact developers. first impact is developers looking at it - if its long, its long to read and takes a long time to make sense of it.  
… aware of what's in it and what to do with it. if developers aren't doing anything with the context, they don't need to understand it. so what's the value of the context? what's the dev ex?.  
… JSON-LD context is applied during transforming from JSON-LD to n-quads. also applied if you're ingesting a VC into a graph DB or if you look at term defns in our vocabulary.  
… in v1 main complaint was "I can't make a new data integrity proof suite since it's not shipped in the default context, so I have to add another and now there are term collisions...".  
… if you're a developer and debugging an implementation you will be reviewing the content in a JSON-LD context to make sense of that.  
… not a burden to devs if everything works properly (both in impl and spec)..  
… JSON LD is part of the cost for signing and verifying. not a high cost if the cred is small and context are small. if cred is really large and context is small...ok, want to look at how is the context shaping these N-Quads. are they vocab terms or "properly defined terms".  
… now we just call them automatically mapped terms. still confused - what's the expectation for WG members regarding knowledge of JSON-LD.  
… if they don't need to know what the context is at all, and it doesn't impact them. then why is it required in the way that it is?.  
… made it so we have to add a second context to add support for key types. could be other properties we choose to add to the reserved properties table. let's give ourselves a clean slate and add pieces we have consensus on.  
… if we can't get consensus, add it as an extension to the VC specs directory. better than keeping context remnants from the first version.  

**Dave Longley:** as a developer had a hard time finding where I'd have pain. context is already short. don't worry about it much. happier as a dev to work with a single context if I can. many devs are aware of this and have talked about it. wanted to reduce the number of contexts. also happier as a dev to reduce term conflicts..  
… want to encourage experiments without breaking experimenting...these are all benefits and outweigh anything that seems like it doesn't really bother many developers. can't make out what the problem would be.  

**Manu Sporny:** 2 things. first: to address selfissued comment about proof being in a different spec so let's split it out....there are a lot of impls, last JFF plugfest, 17! broadly used in the ecosystem. the reason we have a base context is to make it useful for broad swaths of the ecosystem.  
… items that we add in the context, not finding the arguments that this is hard for developers compelling. by and large in the implementation community nobody has said "the base context is too big"..  
… the reason we have proof in the base context is because it's helpful.  

> *Orie Steele:* "evidence" is also in there: [https://github.com/w3c/vc-data-model/blob/main/contexts/credentials/v2#L32](https://github.com/w3c/vc-data-model/blob/main/contexts/credentials/v2#L32).

> *Phil L:* mprorock - how are you defining 'independent developers'?.

**Manu Sporny:** not finding the arguments that this is a problem compelling. Orie hear that there's a grab bag of problems. To Mike's point: proof and data integrity are in there because of broad usage. Other arguments Orie...having a hard time.  
… some people speaking against it aren't even familiar with JSON-LD or its usage. not convincing this is a huge burden.  
… not seeing the problem.  

**Michael Prorock:** maybe this is a concrete proposal. to me dev friendly/not is beyond the point. not sure that schema.org is a good comparison since it falls into one of two buckets: describing a standard (limited to things in the standard) or broadly capturing existing patterns of usage on the web.  
… in this case we have a standard we're developing for core use. it clashes with me to have something present, and not flagged as an extension point, to exist in here. concerning to me to see these things in a context. I would say if it normatively exists in the data model then it exists in the core context. edge case is reserved terms.  
… reserved terms are a separate issue. may drop proof, evidence, etc. back in. need to handle them in a way to signify they're handled elsewhere.  

**Gabe Cohen:** better understanding now - issues with json-ld bubbling up into the core data mode.  
… i would rather not have to worry about contexts at all - don't think the best way to handle the issue is to try and get everything in the core data model context.  
… a fan of multiple contexts in this case.  

> *Orie Steele:* [https://github.com/w3c/vc-data-integrity/blob/main/contexts/data-integrity/v1](https://github.com/w3c/vc-data-integrity/blob/main/contexts/data-integrity/v1).

**Orie Steele:** arguing against myself...agree with making data integrity proofs as easy as possible for devs. in the past we've included terms in the core context to avoid developer complexity. if you have `@vocab` you just have one context and can do data integrity proofs now. automatically mapped and data integrity proof benefits.  
… there is another case where I'd use this: places where you need a data integrity proof, not a cred. sometimes you need to sign an object (OCAP, DID Document, mastodon profile) and the object is not a VC. can use a data integrity context to add support.  
… allows for you to secure these data models... there is an open issue for why does data integrity proof have a second context if the credentials v2 context defines the same terms?.  

**Brent Zundel:** 10 min left!.  

> *Phil L:* Phil_L_wonders isn't one of the reasons the `@context` is more flexible than just defining things in the core data model precisely to encourage experimentation, niche uses, or emerging properties?.

> *Michael Prorock:* why not have data integrity context define a base context to the core data model - boom - one context.

**Dave Longley:** got on the queue to say context helps global disambiguation--what terms are. that's what we're interested in doing. important and useful even if terms don't have anything behind them (for experimentation). to respond to Orie: why is there another context for data integrity? reason is so you can use it if you're not using a VC.  
… there is not a default context in that space, you can use either one. if using VCs you can use the VC context, if data integrity...that context.  

**Manu Sporny:** the use case there is for activity pub. looking at extensions to VCs.  

```json
"description": {
  "@id": "https://schema.org/description"
},
```

**Manu Sporny:** other point here: well the base v2 should only have terms in the core data model ... we already have schema.org in the core data model since people asked for them in 1.0 and 1.1. Tobias @ MATTR, and others said it would be nice to have names/descriptions in the base context.  

> *Dave Longley:* contexts are multi-vocab..

**Manu Sporny:** an example of things in the base context that are helpful for developers.  
… the base context is there to help developers. pulls in terms that are frequently used. as the group continues to work and toward 3.0 we will pull things into the base context. not meant to only be reflective of the VCDM full stop.  
… people's mental models of the base contexts are off based on prior consensus of the group.  

> *Dave Longley:* +1 to manu ... contexts are not "documentation".

> *Dave Longley:* +1 to manu, contexts are for developers..

**Dave Longley:** put in chat but want to say +1 to Manu. contexts are not documentation, they are there to help developers. having these mappings is helpful to developers.  

**Brent Zundel:** where to go next?.  

**Orie Steele:** better guidance in the spec regarding JSON-LD and the context values. current spec pastes the JSON-LD context directly into the spec. see terms we're intending to reserve in the core context. the reserve table discussion needs to be squared with the JSON LD context.  

> *Dave Longley:* +1 to give better guidance in the spec and, IMO, close the PRs to remove terms from the contexts.

**Orie Steele:** I would be supportive of making the context object normative if it is helpful to developers and they need to use it to produce data integrity proofs. why do we make the URL normative but don't talk about the value behind it normative?.  

> *Michael Prorock:* +1 orie - if the core data model is a JSON-LD data model, then we need a normative context.

**Orie Steele:** on that thread, where are we missing normative guidance for devs?.  
… is it a mistake we mandate a specific URL because that prevents inlining of the @context. maybe better to make it normative.  

> *Michael Prorock:* and re name and description, there is an easy fix - an addition that you MAY have name or description in a VC per the core data model.

> *Orie Steele:* is the context normative?.

**Manu Sporny:** +1 to better guidance. I don't know exactly what that could be. personally I never liked the fact that the entire context is in the spec. done when we felt we needed to do it. towards the end of the CR process people got scared - what if we had to fix a bug in the context. let's make it non-normative so we can update and fix it.  
… today I don't believe the context is normative. it's in the appendix and hashed. non-normative to give it flexibility to fix bugs.  
… against making the JSON-LD context normative. feels heavy handed. don't know what we accomplish by doing it. unsaid agreement in the group: let's be very careful with the context since we know it'll break impls. have been good for 7 years - don't see that changing.  

> *Dave Longley:* context being "non-normative" is a process issue ... maybe evergreen would fix this :).

**Manu Sporny:** would like to avoid developer concerns Orie spoke to - come across a giant context and think it's complicated. let's remove it from the spec.  
… vocab document is non-normative and just reflects what's in the core spec and we can refer to it by hash.  
… can say -- base context is not purely a reflection of the core data model, it's there to help devs. e.g. added name and description from schema.org, since folks asked for it and deemed it useful.  
… +1 to sections like that to elaborate on design decisions and how we're trying to serve developers.  

> *Orie Steele:* I don't see how we can say "URLs for terms is what we are here to do", and also "a non normative object is how you get them"..

**Orie Steele:** like what Dave said: "we're here to give URLs to terms" - that's the entire point of LD as a core representation. like Manu's comment on giving guidance.  

> *Dave Longley:* I'm sympathetic to Orie's position around making the context normative, just worried about process issues..

> *Michael Prorock:* we say you must have a context.

> *Michael Prorock:* if so, then i get nervous if there is not a baseline normative context that is built off of.

**Orie Steele:** question is on the normative work we're here to do. this object is the only way for verifiable credentials. what is it we mean by normative? I think: you must understand this to implement the spec. seems like the object needs to be normative or explanation for why you don't need to understand it. should focus on better guidance.  

**Manu Sporny:** agree with Orie. maybe what we need to do is list all URLs. by this property we mean this URL...context has to line up with that. worried about a normative context..  

> *Michael Prorock:* +1 manu - this could be bandled spec side as well by defining what a normative context looks like.

**Manu Sporny:** if we define all URLs we could be done.  

**Brent Zundel:** thanks all good conversation.  

---
