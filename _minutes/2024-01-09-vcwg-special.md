---
layout: minutes
date: 2024-01-09
title: Verifiable Credentials Working Group Special Topic Call on Outstanding Issues/PRs — 2024-01-09
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-01-09-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding Issues/PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Outstanding Issues/PRs",
        "dateCreated": "2024-01-09",
        "irc": "vcwg-special",
        "datePublished": "2024-01-09",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding Issues/PRs",
            "startDate": "2024-01-09",
            "endDate": "2024-01-09",
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
                            "name": "Will Abramson"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Ivan Herman"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Steve McCown"
                },
                {
                    "@type": "Person",
                    "name": "Paul Dietrich"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                }
            ]
        },
        "resolution": [
            {
                "@type": "Resolution",
                "resolution_number": 1,
                "resolution_text": "VC JOSE COSE will add JWS signing before CR."
            }
        ]
    }

---

# Verifiable Credentials Working Group Special Topic Call on Outstanding Issues/PRs — Minutes
{: .no_toc}



**Date:** 2024-01-09

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20240109T110000/) and the [IRC Log](https://www.w3.org/2024/01/09-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ivan Herman, David Chadwick, Brent Zundel, Ted Thibodeau Jr., Andres Uribe, Will Abramson, Dmitri Zagidulin, Michael Jones, Joe Andrieu, Manu Sporny, Steve McCown, Paul Dietrich, Phillip Long, Chris Abernethy, Dave Longley

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Will Abramson

## Content:
{: .no_toc}

* TOC
{:toc}
---


> *Michael Jones:* [https://github.com/w3c/vc-data-model/pull/1404#pullrequestreview-1809578744](https://github.com/w3c/vc-data-model/pull/1404#pullrequestreview-1809578744).

### 1. VC JOSE COSE spec prs.
{: #section1}

**Brent Zundel:** welcome, special topic this week is the vc jose cose spec.  
… nearing candidate rec.  
… leaving it to mike to point us in the direction for this discussion.  

**Michael Jones:** over the hols manu and DavidC did thorough review. Resulting in some issues to address.  
… A couple need some VG discussion to proceed.  

#### 1.1. Support JWT-secured VCs (issue vc-jose-cose#201)
{: #section1-1}

_See github issue [vc-jose-cose#201](https://github.com/w3c/vc-jose-cose/issues/201)._

<!-- issue w3c/vc-jose-cose/201 -->



**Michael Jones:** this issue asks us to reinstate signing of jose jws.  

**Michael Jones:** Currently the signing method in the spec is sd-jwt.  
… in a degenerate case it is compatible with jws accept it includes a tilde.  
… manu and DavidC pointed out that people were using JWS in v1.  
… given sd-jwt is not fully compatible with JWS maybe we should add JWS back in.  
… if we use JWS signature there is nothing selectively disclosable.  
… I am a proponent that standards should rely on standards, not working drafts.  

**David Chadwick:** been looking at the specs. I raised an issue suggesting a draft saying how we create sd-jwt's for vcs. Then learnt it was in the JOSE spec.  
… not opposed to sd-jwt, think it is a good enhancement.  
… because you can produce both selectively and non selectively disclosable VC.  
… think there are incompatibilities in the title and abstract because it still refers to JOSE when it doesn't use this.  
… I raised three PRs to address this.  
… examples in the spec are quite confusing.  
… Two points. First we need to stop saying that sd-jwt is compatible with regular jwts. It is not.  
… at least going to be a single char difference in the degenerate case.  
… if you are doing selective disclose your system needs to think differently.  
… we need to say this in the spec and be very clear about this.  
… point 2 - with respect to support of sd-jwts, there is a lot of hope that sd-jwts will be the next big thing.  
… we need to support use cases that do not require selective disclosure.  
… if using json you can do selective disclosure. if using CBOR you can't. This is problematic.  
… need to specify how you can just use regular JOSE rather than sd-jwt claims.  

**Andres Uribe:** sd-jwt have requirement to go from vc data model to the payload that will be blinded by the issuer to decide which statments are selectively disclosable.  
… I suggest we start with these JOSE first, sd-jwt is not a standard. Unclear what the timeline is for this.  
… went through a lot of debates about how to figure out the mapping. Want this to make it into the specs.  
… especially how we are mapping vc data model into claims in the JWS payload.  

> *Manu Sporny:* +1 to what andres is saying.

**Andres Uribe:** Think we need a way to secure things with regular JWS.  

**David Chadwick:** sounds like a way forward would be to revert current spec to previous JOSE version.  
… Then have a new spec that is a profile of sd-jwt for VCs.  
… that can progress at the speed of the sd-jwt standard.  

**Michael Jones:** let me respond to a few points.  
… manu you are right JOSE signing does not support selective disclosure.  
… might be added in future, but not reliable.  
… Adoption of VCs in market is the ability to do selective dislosure and other privacy techniques.  
… not willing to rip of sd-jwt at this point. Would be willing to put JOSE back.  
… don't think this is that hard.  

**Manu Sporny:** +1 to keep sd-jwt. Would be bad to take it out.  

**Michael Jones:** Proposal: VC JOSE COSE will add JWS signing before CR.  

**Manu Sporny:** clarification on this proposal. This is how to take a VC and express it in a vanilla JWT.  
… any other variations of jose that you feel important to add in scope selfissued?  

**Michael Jones:** that is contentious, would rather leave that for now.  

**Brent Zundel:** and clarifications of the proposal?  

> **Proposed resolution: VC JOSE COSE will add JWS signing before CR.** *(Brent Zundel)*
{: .proposed_resolution}

> *Manu Sporny:* +1.

> *Ivan Herman:* +1.

> *Michael Jones:* +1.

> *Brent Zundel:* +1.

> *Will Abramson:* +1.

> *Andres Uribe:* +1.

> *Phillip Long:* +1.

> *David Chadwick:* +1.

> *Chris Abernethy:* +1.

> *Joe Andrieu:* +1.

> *Ted Thibodeau Jr.:* +1.

> *Dmitri Zagidulin:* +1.

> *Steve McCown:* +1.

> ***Resolution #1: VC JOSE COSE will add JWS signing before CR.***
{: #resolution1 .resolution}

**Brent Zundel:** issue 201 is open to track this.  

#### 1.2. Unclear semantics wrt. JWT claims vs. VC properties (issue vc-jose-cose#205)
{: #section1-2}

_See github issue [vc-jose-cose#205](https://github.com/w3c/vc-jose-cose/issues/205)._

<!-- issue w3c/vc-jose-cose/205 -->



**Manu Sporny:** one of the big mistakes with the jwt stuff in v1 and 1.1. was the mapping or not of iss to issuer.  
… we should not provide two ways to do this mapping this time round. We should be consistent.  
… hoping for text that makes this very clear.  
… think there are only three fields that we need to provide explicit guidance on.  
… raised issue 205 to track this.  

**Michael Jones:** gabe has agreed to take this on. we agree there should be one way to do the mapping.  
… agree there is a small number of fields we want to say something about.  
… think we are on track.  

_See github issue [vc-jose-cose#195](https://github.com/w3c/vc-jose-cose/issues/195)._

<!-- issue w3c/vc-jose-cose/195 -->



**Michael Jones:** moving on to issue 195. To do with horizontal review.  
… more of a progress report.  

#### 1.3. Horizontal Review Tracking (issue vc-jose-cose#195)
{: #section1-3}

_See github issue [vc-jose-cose#195](https://github.com/w3c/vc-jose-cose/issues/195)._

<!-- issue w3c/vc-jose-cose/195 -->



_See github issue [vc-jose-cose#192](https://github.com/w3c/vc-jose-cose/issues/192)._

<!-- issue w3c/vc-jose-cose/192 -->



**Michael Jones:** This is related to issue 192.  
… kyle didn't like language in the spec around securing with sd-jwt and JOSE. Neither result in a testable conformant statement.  
… manu raised an issue around conformance classes.  
… can satisfy Kyle by using conformance profiles to create testable statements.  

**Manu Sporny:** +1 I agree this would address mine and kyles concerns.  
… on issue 195, the TAG isn't in the HR tracking, may want to add.  
… We need to get a response from security before we close the issue.  
… Don't need it to go into CR, but don't close issues on other groups trackers.  

**Brent Zundel:** I know review request was submitted in May 2023.  

> *Manu Sporny:* -> [https://github.com/w3ctag/design-reviews/issues/899](https://github.com/w3ctag/design-reviews/issues/899).

**Brent Zundel:** TAG has an issue that is design review, that is closed on orie's request because of text changes.  
… new one has been opened. Issue 899 in September 23.  
… Looks like they are planning to discuss in the f2f in London this month.  

**Michael Jones:** can you add this to Horizontal Review issue 195.  
… another progress report - issue 206.  

#### 1.4. Algorithms are poorly defined / unimplementable (issue vc-jose-cose#206)
{: #section1-4}

_See github issue [vc-jose-cose#206](https://github.com/w3c/vc-jose-cose/issues/206)._

<!-- issue w3c/vc-jose-cose/206 -->



**Michael Jones:** this tracks the ask for more actionable description of verification and validation.  
… I have assigned this to myself.  

#### 1.5. Inconsistent versions (issue vc-jose-cose#214)
{: #section1-5}

_See github issue [vc-jose-cose#214](https://github.com/w3c/vc-jose-cose/issues/214)._

<!-- issue w3c/vc-jose-cose/214 -->



**Michael Jones:** sounds like this says the drafts published in diff places have different content.  
… maybe I misunderstood though.  

**David Chadwick:** it may well be a tooling issue. All I know is two links take you to specs with different examples.  
… neither examples are wholly correct.  
… The examples should be a superset of both.  
… not sure what the base document is here.  
… there is some JSON in the spec with a VC. In one spec the spec contains the JSON of the VC. In the other it just shows the sd-jwt without showing the original VC.  
… we should include both.  

**Ivan Herman:** The github action seem to be okay. Not looking into this further.  
… I know in VCDM document, there is some transformation of the VC JSON in the document that happens.  
… maybe this is not in the JOSE spec.  
… looks like something to do with that tooling.  

**Manu Sporny:** I know the details, issue here is that the extension to respec. Called respec-vc has been modified to support sd-jwt.  
… believe this has been done in a way that is not compatible at publication time.  
… Think this is a known issue, needs to be fixed.  
… this is a non trivial exercise.  
… code written for respec, does not work in publication.  
… handed respec over to W3C.  
… All examples need to be updated to use software to generate the examples.  
… We need to put effort and work into fixing respec vc to support all securing methods.  
… Do we pull in orie's code for sd-jwt into the respec-vc extension. I suggest we do this.  

**Michael Jones:** does the vc extension work when publishing in both cases.  

**Manu Sporny:** two options, we either hack on orie's code to get this working. Or we integrate some of orie's code into respec-vc.  
… our intention with respec vc is to get it into a form that will work across all different specifications.  

**Michael Jones:** no need to bikeshed, but orie did custom code to be able to represent all forms of sd-jwt.  

**Brent Zundel:** this is affecting the examples, which are non-normative. Can handle after CR.  

**David Chadwick:** most of the tabs on the right had side of the example are good. The disclosed tab is not good. No description.  
… We need another tab that shows the raw example.  
… show the raw VC and how it has been manipulated.  

**Manu Sporny:** The examples DavidC is pointing to, I have not seen this before.  
… where has this notation come from. It is the expression of a VC in yaml format.  
… is this being specified anywhere.  

**Michael Jones:** my understanding is this was copied from how the sd-jwt test suite works.  
… I agree this is not clear.  

**Andres Uribe:** I know where this .yaml comes from.  
… selfissued is correct, these come from the testing suite.  
… sd-jwt has reference implementations. These include tests with the.yaml files.  
… .yaml files specify which claims will be made selectively disclosable in the payload.  
… If you are designing an api that allows issuers to select which statements are disclosable, you need something like that.  

**Brent Zundel:** thanks everyone, look forward to the spec moving into CR.  

---


### 2. Resolutions
{: #res}

* [Resolution #1](#resolution1): VC JOSE COSE will add JWS signing before CR.
