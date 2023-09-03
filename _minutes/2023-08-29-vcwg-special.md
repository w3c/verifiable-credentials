---
layout: minutes
date: 2023-08-29
title: Verifiable Credentials Working Group Special Topic Call on PR Discussions — 2023-08-29
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-08-29-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on PR Discussions",
        "dateCreated": "2023-08-29",
        "irc": "vcwg-special",
        "datePublished": "2023-09-03",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on PR Discussions",
            "startDate": "2023-08-29",
            "endDate": "2023-08-29",
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
                            "name": "David Waite"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
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
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes
{: .no_toc}



**Date:** 2023-08-29

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20230829T180000/) and the [IRC Log](https://www.w3.org/2023/08/29-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Manu Sporny, David Waite, Ted Thibodeau Jr., Dave Longley, Michael Jones, Kristina Yasuda, David Lehn, Dmitri Zagidulin, Phillip Long

**Regrets:** 

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** David Waite

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Kristina Yasuda:** still working on TPAC agenda, hoping to present to the working group soon.  

**Manu Sporny:** heads up to group - data integrity specifications have PRs in for every pre-CR issue - those should be merged in towards end of the week. That will mean that none have any pre-CR issues and will be ready for candidate rec. Should be in good shape for TPAC and DI being ready for CR. Status list and VCDM still have work to go.  
… feedback from horizontal review from DI - internationalization did not respond, three months for the request means that we are good but may re-ask.  

### 1. VCDM PRs.
{: #section1}

> *Kristina Yasuda:* [https://github.com/w3c/vc-data-model/pulls](https://github.com/w3c/vc-data-model/pulls).

#### 1.1. Add validation section regarding holder (pr vc-data-model#1199)
{: #section1-1}

_See github pull request [vc-data-model#1199](https://github.com/w3c/vc-data-model/pull/1199)._

<!-- issue w3c/vc-data-model/1199 -->


**Manu Sporny:** waiting on JoeAndrieu re-review.  

**Joe Andrieu:** will look at again.  

#### 1.2.  (pr vc-data-model#1252)
{: #section1-2}

_See github pull request [vc-data-model#1252](https://github.com/w3c/vc-data-model/pull/1252)._

<!-- issue w3c/vc-data-model/1252 -->



**Manu Sporny:** changes requested by aphillips, waiting on review of changes.  
… can add description to the issuer or to the credential itself. Issue raised were internationalization based, now allows for language tags and has examples. Still raised issue of setting a default language for entire credential. That raises issues on side effects on languages being applied to other strings such as encoded images.  

#### 1.3. Address optionality of fields (pr vc-data-model#1256)
{: #section1-3}

_See github pull request [vc-data-model#1256](https://github.com/w3c/vc-data-model/pull/1256)._

<!-- issue w3c/vc-data-model/1256 -->



**Manu Sporny:** optionality of fields and requirement on verifying required fields.  

**Joe Andrieu:** concerned about "validate" as a defined term.  

**Manu Sporny:** defined in a non-normative section.  

> *Brent Zundel:* I'm happy to take suggestions.

**Joe Andrieu:** I don't think we have defined what that means in a conformant way.  

> *Brent Zundel:* me lol.

**Manu Sporny:** suggests that we do specify what an appropriate syntax is for those fields, if "validate" makes people uneasy we can say it must meet the normative requirements for the format of the field.  

> *Brent Zundel:* works for me.

**Joe Andrieu:** describing in that manner frees up the term "validate" which has been used to describe business rules post verification.  

#### 1.4.  (pr vc-data-model#1257)
{: #section1-4}

_See github pull request [vc-data-model#1257](https://github.com/w3c/vc-data-model/pull/1257)._

<!-- issue w3c/vc-data-model/1257 -->



**Manu Sporny:** describes use in HTTP, specifically appropriate use of media types. However, be liberal in what you accept.  

#### 1.5. Guidance around arrays (pr vc-data-model#1258)
{: #section1-5}

_See github pull request [vc-data-model#1258](https://github.com/w3c/vc-data-model/pull/1258)._

<!-- issue w3c/vc-data-model/1258 -->



**Manu Sporny:** provides guidance on array/multi-dimensional array usage with JSON-LD, to make sure ordering is preserved.  

#### 1.6. Sync and fix bugs in v2 context. (pr vc-data-model#1259)
{: #section1-6}

_See github pull request [vc-data-model#1259](https://github.com/w3c/vc-data-model/pull/1259)._

<!-- issue w3c/vc-data-model/1259 -->



**Manu Sporny:** at the point where we need to lock down the JSON-LD context, Dave Longley and Manu have taken passes to fix issues in the context.  
… one new issue - concern about JWT properties are defined. They are currently defined as having to be URLs, may not be the right thing for all properties. For example, kid is defined as being a URL value.  

**Michael Jones:** kid has no semantics, it is a string.  

**Manu Sporny:** asks for note from selfisused on 1259 to kid, needs general review of types.  

#### 1.7. Add Verification Method types to v2 context (pr vc-data-model#1260)
{: #section1-7}

_See github pull request [vc-data-model#1260](https://github.com/w3c/vc-data-model/pull/1260)._

<!-- issue w3c/vc-data-model/1260 -->



**Manu Sporny:** adds key types to base context. Don't know if we have general use cases for expressing keys in a verifiable credential. Don't know if it is a good idea until we have use cases warranting this.  

**Kristina Yasuda:** will bring this up in tomorrow's working group call.  

> *Phillip Long:* Why would anyone want to publish their private key in a VC???

> *Manu Sporny:* exactly :).

> *David Waite:* (zk selective disclosure).

**Manu Sporny:** add support for DIDs issue is providing a controller document, danger here is that definitions will deviate due to copies in DID core, DI and vc-jose-cose.  

**Michael Jones:** a reason we can't just cite did-core?  

**Manu Sporny:** we need to update the text without a mandate to update did-core.  
… the point in which the group should get concerned is if these copy-pasted sections start giving opposite advice.  

### 2. issue triaging.
{: #section2}

> *Kristina Yasuda:* [https://github.com/w3c/vc-data-model/issues?q=is%3Aopen+is%3Aissue+-label%3Abefore-CR+-label%3Apost-CR](https://github.com/w3c/vc-data-model/issues?q=is%3Aopen+is%3Aissue+-label%3Abefore-CR+-label%3Apost-CR).

#### 2.1. are `domain` and `range` correct for all properties in data model? (issue vc-data-model#1263)
{: #section2-1}

_See github issue [vc-data-model#1263](https://github.com/w3c/vc-data-model/issues/1263)._

<!-- issue w3c/vc-data-model/1263 -->



> *Kristina Yasuda:* `@dmitri`: here is the issue: [https://github.com/w3c/vc-jose-cose/issues/140](https://github.com/w3c/vc-jose-cose/issues/140).

> *Kristina Yasuda:* on the controller doc I mean.

**Ted Thibodeau Jr.:** `<`refering to properties`>` most properties apply to VCs and not VPs - one property supports both, one is VP-specific. Concerns this is incorrect.  

**Manu Sporny:** some difficulties in evaluating the diagram - the properties can exist on the VP and VC simulataneously.  

**Ted Thibodeau Jr.:** credentialSchema vs presentationSchema, the conversation settled on a VP being a VC with some specialness to it.  

**Manu Sporny:** the VP has different properties, can hold a bundle of verifiable credentials.  

**Ted Thibodeau Jr.:** can you not put VCs in VCs?  

**Manu Sporny:** you can put them in spots but not in the way that you can do so with a VP.  

**Ted Thibodeau Jr.:** people want to associate a verifiable credential with a holder, this diagram makes that impossible.  

**Manu Sporny:** I think this comes down to suggested use - since it is an open world model, they can add whatever properties they want.  

#### 2.2. Add `revoked` and `expired` to verification method classes (issue vc-data-model#1262)
{: #section2-2}

_See github issue [vc-data-model#1262](https://github.com/w3c/vc-data-model/issues/1262)._

<!-- issue w3c/vc-data-model/1262 -->



> *David Waite:* kristina, TallTed: mark as discuss.

**Manu Sporny:** Orie noticed that JWK didn't have the expired and revoked properties that multikey had.  
… alignment would mean JWK would have all the same properties.  
… being aligned in DI, after that may need to be aligned in base context.  
… may be able to do it post-CR since the context can be modified, but not preferred.  

---
