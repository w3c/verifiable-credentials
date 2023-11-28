---
layout: minutes
date: 2023-11-28
title: Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — 2023-11-28
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-11-28-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs",
        "dateCreated": "2023-11-28",
        "irc": "vcwg-special",
        "datePublished": "2023-11-28",
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
            "startDate": "2023-11-28",
            "endDate": "2023-11-28",
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
                            "name": "Manu Sporny"
                        },
                        {
                            "@type": "Person",
                            "name": "Dmitri Zagidulin"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Ivan Herman"
                },
                {
                    "@type": "Person",
                    "name": "Sebastian Crane"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Nas Hajia"
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
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Benjamin Young"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — Minutes
{: .no_toc}



**Date:** 2023-11-28

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20231128T110000/) and the [IRC Log](https://www.w3.org/2023/11/28-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ivan Herman, Brent Zundel, Sebastian Crane, Ted Thibodeau Jr., Kaliya Young, Dmitri Zagidulin, Manu Sporny, Michael Jones, Andres Uribe, Dave Longley, Nas Hajia, Phillip Long, Orie Steele, Joe Andrieu, David Chadwick, Will Abramson, Benjamin Young

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Michael Jones, Manu Sporny, Dmitri Zagidulin

## Content:
{: .no_toc}

* TOC
{:toc}
---


> *Michael Jones:* Nas Hajia is a security architect representing Autodesk (new WG member).

**Brent Zundel:** Our agenda is straightforward.  

### 1. Issue Processing.
{: #section1}

> *Brent Zundel:* [https://github.com/w3c/vc-data-model/issues?q=is%3Aopen+is%3Aissue+label%3Abefore-CR+sort%3Aupdated-asc+-label%3A%22pr+exists%22+-label%3A%22ready+for+PR%22+](https://github.com/w3c/vc-data-model/issues?q=is%3Aopen+is%3Aissue+label%3Abefore-CR+sort%3Aupdated-asc+-label%3A%22pr+exists%22+-label%3A%22ready+for+PR%22+).

**Brent Zundel:** We are going to do issue processing.  
… We are going through pre-CR issues.  
… The goal is to be ready for CR on the core data model by mid-December.  

#### 1.1. Make validation normative (issue vc-data-model#1328)
{: #section1-1}

_See github issue [vc-data-model#1328](https://github.com/w3c/vc-data-model/issues/1328)._

<!-- issue w3c/vc-data-model/1328 -->



**Manu Sporny:** This would be a lot of work.  
… There might be a way to do this in the future.  
… This could take months to resolve.  
… Joe is going to do a review.  
… Maybe validation doesn't need to be made normative.  

#### 1.2. Add mechanism to cryptographically secure non-credential VP properties (contexts etc) (issue vc-data-model#1360)
{: #section1-2}

_See github issue [vc-data-model#1360](https://github.com/w3c/vc-data-model/issues/1360)._

<!-- issue w3c/vc-data-model/1360 -->



**Dmitri Zagidulin:** We want to be able to lock these down cryptographically.  
… We have only added this for verifiable credentials.  
… But not for related resources.  
… We need to do this for VPs.  

**Brent Zundel:** Can the solution be as simple as saying "this section also refers to VPs".  

**Manu Sporny:** Do you mean "related resources"?  
… I can volunteer to write a PR for this.  

> *Joe Andrieu:* correct. id we need to secure contexts we should do that. arbitrary resources is a layer violation.

> *Phillip Long:* pdl-asu has joined #vcwg-special.

> *Joe Andrieu:* happy to review pr.

#### 1.3. Improve Verification Algorithms section (issue vc-data-model#1362)
{: #section1-3}

_See github issue [vc-data-model#1362](https://github.com/w3c/vc-data-model/issues/1362)._

<!-- issue w3c/vc-data-model/1362 -->



**Brent Zundel:** There is a PR in progress that adds a verification algorithm to the spec.  
… It seems to be progressing well.  

_See github pull request [vc-data-model#1338](https://github.com/w3c/vc-data-model/pull/1338)._

<!-- issue w3c/vc-data-model/1338 -->



**Manu Sporny:** There was at least one thing - it's not clear if we're going to be able to make the PR.  
… We need WG consensus.  
… We need to define an interface in the securing mechanism.  
… Jeffrey wants us to do that.  
… We need a uniform interface.  
… Currently we provide instructions for DI and jose-cose.  
… about the extraction and verification functions.  

**Michael Jones:** as pointed out by Brent on the Editors call yesterday, we're explicitly not chartered to to APIs.  
… what's being proposed here is an API, so therefore out of scope. It's fine to define normative language in the two securing specs.  
… but providing an API to do it goes against charter.  

> *Manu Sporny:* This is not an API: [https://github.com/w3c/vc-data-model/pull/1338#issuecomment-1828821192](https://github.com/w3c/vc-data-model/pull/1338#issuecomment-1828821192).

**Manu Sporny:** We do define algorithms.  
… That's in scope.  

**Michael Jones:** Then call them algorithms - not a uniform interface.  

**Manu Sporny:** Done.  

**Brent Zundel:** The concern I have is that what we have in #1338 is in response to comments from a W3C member saying that if this isn't addressed, they will formally object.  
… On the other hand, we have charter language prohibiting creating APIs.  
… From my perspective, the safe route is to figure out an algorithm to address this.  

**Manu Sporny:** Jeffrey has approved the PR.  
… It is definitely a grey area.  
… If there is concern about somebody objecting to the charter, we have a strong defense.  
… This can't work without algorithms.  
… We have a path to defend against formal objections.  

**Brent Zundel:** We will have a more thorough conversation about #1338 tomorrow.  

> *Orie Steele:* lets make sure the algorithm does not contradict any of our terminology or definitions, particularly the "extract" vs "credential" definitions.

> *Manu Sporny:* The algorithm is meant to defer to the securing specs for all important implementation details.

> *Manu Sporny:* agree with Orie that we don't want those algorithms to contradict any terminology/definitions in the securing mechanism specifications.

> *Dave Longley:* and agree it's important that the algorithm not impede things like SD-JWT and ECDSA-SD.

**Brent Zundel:** If we get agreement on #1338 then #1362 can be closed.  

#### 1.4. Request profile parameter from `application/vc` (issue vc-data-model#1363)
{: #section1-4}

_See github issue [vc-data-model#1363](https://github.com/w3c/vc-data-model/issues/1363)._

<!-- issue w3c/vc-data-model/1363 -->



**Brent Zundel:** The current path we are on relies on media types with multiple suffixes.  
… The spec for multiple suffixes in IETF has been more contentious than anticipated.  
… And possibly a whole lot more work than anticipated.  
… This issue is another path to sidestep this.  

**Orie Steele:** This issue can be used with or without multiple suffixes.  
… Our current registrations require multiple suffixes, even though this isn't possible at present.  
… Even for application/vc the subtype can contain media type parameters.  
… Those parameters can express characteristics of the media type.  
… Specifying the text type is a common usage.  
… This tracks the intended use of the profile parameter.  
… We should provide guidance on the use of profile.  
… We could say not to use it.  
… We could say to use it in the same way as ld+json.  

**Brent Zundel:** Thank you for clarifying the relationship between the parameters.  
… We can register media types with multiple suffixes.  
… The current interpretation of a+b+c is that a is the prefix and b+c is the suffix.  

> *Orie Steele:* we can request registrations that rely on multiple suffixes, but they cannot be registered, until their interpretation is clear... it is a mistake to request registrations that we know cannot be approved.

**Ted Thibodeau Jr.:** The first thing after the slash isn't what matters.  
… The subtype is what's after the last + sign.  
… There are multiple layers of subtyping.  
… I don't know why the IETF did this.  

> *Orie Steele:* if you have questions regarding media types, you can ask the media type list. see [https://datatracker.ietf.org/doc/draft-ietf-mediaman-suffixes/](https://datatracker.ietf.org/doc/draft-ietf-mediaman-suffixes/).

**Ted Thibodeau Jr.:** You process as many of the subtypes that you understand.  
… This is complex and esoteric.  

> *Orie Steele:* +1 TallTed, its complicated : (.

**Ted Thibodeau Jr.:** The problem with multiple + signs is that the interpretation is undefined.  
… There may be many more drafts.  
… We can specify what our media types mean but those will only apply to people who understand our spec.  
… It's to let people who don't understand what's to the left of the +s to still work with what's to the right of the +s.  

> *Orie Steele:* here is the repo: [https://github.com/ietf-wg-mediaman/suffixes](https://github.com/ietf-wg-mediaman/suffixes) ... TallTed, eager to see your PR : ).

**Manu Sporny:** I am the editor of that spec.  
… There is only one remaining issue.  
… It's about whether to register all the things in between.  

> *Dave Longley:* for "application/vc+ld+json" processing is: "application", then "json", then "ld+json", then "vc+ld+json" ... another way to understand this subclass processing is: "application/square+rectangle+shape" ... you can understand any "application" content, then, if you want, more specifically any "shape", ... then any "rectangle" ... "square".

**Manu Sporny:** The chair of the WG wants to take it to last call.  
… I don't think the multiple structured suffixes draft is in a place that it's not going to be ratified soon.  
… Ted is right that we can just specify what our media types mean.  
… We don't need to change anything about the media types used in the spec.  
… The profile problem is problemantic.  
… Many people don't prrocess it.  

> *Orie Steele:* My recommendation would be to not depend on multiple suffixes, we raised a PR to remove the dependency from vc-jose-cose ... [https://github.com/w3c/vc-jose-cose/pull/186](https://github.com/w3c/vc-jose-cose/pull/186).

> *Orie Steele:* related registration for [https://www.iana.org/assignments/media-types/application/ld+json](https://www.iana.org/assignments/media-types/application/ld+json).

> *Orie Steele:* related specification Manu mentioned: [https://www.w3.org/TR/activitystreams-core/#media-type](https://www.w3.org/TR/activitystreams-core/#media-type).

**Manu Sporny:** You can have multiple different IETF registrations stomp over it.  
… I realize we used it in JSON-LD. I wish we hadn't.  
… We can tell people not to use it.  
… What we've learned is that people don't implement it correctly.  
… It's often destroyed or mangled as it goes through HTTP servers.  
… We can only pick one filename suffix.  
… We can't use profile to do that.  

> *Orie Steele:* feels like implementing profile correctly, is easier than using multiple suffixes consistently.

> *Dmitri Zagidulin:* `@orie` - agree.

> *Ted Thibodeau Jr.:* *sighs* people who don't conform to specs (e.g., by misconfiguring servers or otherwise breaking the `profile` option) should not be justification for not conforming to specs!

> *Manu Sporny:* It's not easier to implement profile correctly, Orie. :) -- We have multiple decades of experience now that people don't implement it correctly.

> *Dave Longley:* as long as multiple suffixes follows the rule that each subtype fits within the same wider syntax, things are kept clean (and correct) ... i think trouble has come from people thinking it's for enveloping, when it isn't.

> *Manu Sporny:* ^ yes, that.

> *Manu Sporny:* (to what dlongley said).

**Dmitri Zagidulin:** I want to agree with Orie that hierarchical multiple suffixes is way more trouble than it's worth.  
… I don't think there's any need for hierarchical multiple suffixes.  

> *Orie Steele:* +1 ivan.

> *Dmitri Zagidulin:* +1 to at risk.

**Ivan Herman:** If we want to keep multiple suffixes, we should put the whole concept as being at risk in the document.  
… Put it as at risk.  
… We can see what happens at the IETF.  
… If it goes through at IETF, we can remove the at risk.  
… Otherwise we can reconsider.  
… We have to defend ourselves.  

**Brent Zundel:** We're relying on multiple suffixes but not normatively pointing to them.  

> *Manu Sporny:* Note that JSON-LD has gone through multiple RECs w/ this in there: [https://w3c.github.io/json-ld-syntax/#structured-extension-ld-json](https://w3c.github.io/json-ld-syntax/#structured-extension-ld-json).

**Ivan Herman:** On the other hand, we are supposed to register media types we use during CR and we can't do it now.  
… We can't ignore this.  
… That's why we have to mark it as at-risk.  

**Orie Steele:** I spoke to our W3C liaison at the IETF - Martin.  
… It might be fine to go into CR that way.  
… To become a recommendation, we have to finish the IETF work.  
… It's OK to go into CR with the references are they are.  
… If we have to correct this, it would be good to be able to do this without going through CR.  
… If marking it as at-risk helps, let's do that.  
… I don't know how the DID spec got to Rec with multiple suffixes.  
… If this isn't resolved before REC, I will formally object.  

> *Orie Steele:* thats not true manu.

> *Orie Steele:* I added the +ld+json structured suffix.

**Manu Sporny:** The DID and JSON-LD specs have gone through REC with multiple structured suffixes.  
… You can treat it as an opaque thing.  
… We can change it to application/vc if we need to.  
… But that's doing the wrong thing.  
… We should fix the IETF's broken suffixes.  
… We should stop routing around this damage at the IETF.  

_See github pull request [json-ld-syntax#415](https://github.com/w3c/json-ld-syntax/pull/415)._

<!-- issue w3c/json-ld-syntax/415 -->



> *Brent Zundel:* [https://www.w3.org/TR/did-core/#application-did-ld-json](https://www.w3.org/TR/did-core/#application-did-ld-json).

> *Orie Steele:* seems like the W3C is responsible for the broken behavior, and I agree that it needs to be fixed.

> *Orie Steele:* I am trying to fix it FWIW.

**Brent Zundel:** The DID spec said that it will be registered as soon as the IETF spec is done.  

**Ivan Herman:** The only thing I don't want is to go there and not even mention the problem.  
… If we include a note like we did in the DID spec, that may be enough.  

**Brent Zundel:** What are the steps forward for the profile parameter issue?  
… We could prohibit their use or say how to use them.  

**Manu Sporny:** We tell people how to use profile parameters correctly.  
… Expect people to break this and it not to work correctly across the ecosystem.  
… We should warn them that it has never worked out well when people rely on the profile parameter.  

> *Ivan Herman:* +1 to manu's direction.

**Brent Zundel:** We don't need to include doomsaying.  
… We would need someone willing to be assigned to the issue.  
… If you feel strongly that doing nothing is the right approach, then please volunteer to be assigned.  
… If noone is assigned, then by default, we will be doing nothing about this.  

> *Orie Steele:* the media types impact the "verification algorithm".

**Ivan Herman:** All these options we are talking about are editorial?  

> *Orie Steele:* are they still editorial?

**Brent Zundel:** The media types affect the verification algorithm.  
… We don't have anyone willing to be assigned.  

> *Orie Steele:* the reason I am not volunteering is that we are removing the dependency from vc-jose-cose.

#### 1.5. JSON-only processors and VCDM 2.0 conformance (issue vc-data-model#1290)
{: #section1-5}

_See github issue [vc-data-model#1290](https://github.com/w3c/vc-data-model/issues/1290)._

<!-- issue w3c/vc-data-model/1290 -->



**Brent Zundel:** I believe this has been overtaken by events.  
… But we received a comment on it by Oliver yesterday.  

**Manu Sporny:** Oliver may be requesting a minor modification to the text.  
… We may want to ask Oliver to propose text that we can remove.  
… We don't use "JSON-only processing" anymore.  

> *Orie Steele:* +1 to JSON-LD processing and RDF processing.... there is no JSON processing.

**Brent Zundel:** I can tag Oliver.  
… We will ask for a concrete suggestion from Oliver.  
… I'm going to leave pending close on there for now.  
… We will meet tomorrow to dive more deeply into 1338 - the verification algorithm.  
… We are in good standing to enter CR by mid-December, which is our goal.  

---
