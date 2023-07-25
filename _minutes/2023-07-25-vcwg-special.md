---
layout: minutes
date: 2023-07-25
title: Verifiable Credentials Working Group Special Topic Call on JSON Schemas — 2023-07-25
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-07-25-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on JSON Schemas — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on JSON Schemas",
        "dateCreated": "2023-07-25",
        "irc": "vcwg-special",
        "datePublished": "2023-07-25",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on JSON Schemas",
            "startDate": "2023-07-25",
            "endDate": "2023-07-25",
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
                        },
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
                            "name": "Sebastian Crane"
                        },
                        {
                            "@type": "Person",
                            "name": "Manu Sporny"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Ivan Herman"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
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
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Paul Dietrich"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on JSON Schemas — Minutes
{: .no_toc}



**Date:** 2023-07-25

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20230725T110000/) and the [IRC Log](https://www.w3.org/2023/07/25-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Ivan Herman, Andres Uribe, Shigeya Suzuki, Sebastian Crane, Phillip Long, David Chadwick, Ted Thibodeau Jr., Dmitri Zagidulin, Hiroyuki Sano, Dave Longley, Kristina Yasuda, Manu Sporny, Will Abramson, Paul Dietrich, Joe Andrieu, Gabe Cohen

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel, Kristina Yasuda

**Scribe(s):** Sebastian Crane, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. vc-data-model PRs.
{: #section1}

> *Manu Sporny:* [https://github.com/w3c/vc-data-model/pulls/](https://github.com/w3c/vc-data-model/pulls/).

#### 1.1. Add confidenceMethod to table of reserved terms and v2 `@context` (pr vc-data-model#1142)
{: #section1-1}

_See github pull request [vc-data-model#1142](https://github.com/w3c/vc-data-model/pull/1142)._

<!-- issue w3c/vc-data-model/1142 -->



**Manu Sporny:** Pull request 1142 is waiting for CCG members to review.  

#### 1.2. Add "author" and "party" to terminology, rewrite "claim" terminology (pr vc-data-model#1172)
{: #section1-2}

_See github pull request [vc-data-model#1172](https://github.com/w3c/vc-data-model/pull/1172)._

<!-- issue w3c/vc-data-model/1172 -->



**Manu Sporny:** 1172 continues to have discussion.  

#### 1.3. Add validation section regarding holder (pr vc-data-model#1199)
{: #section1-3}

_See github pull request [vc-data-model#1199](https://github.com/w3c/vc-data-model/pull/1199)._

<!-- issue w3c/vc-data-model/1199 -->



**Manu Sporny:** There are some disagreements on pull request 1199.  

#### 1.4. Add section on JSON Processing. (pr vc-data-model#1202)
{: #section1-4}

_See github pull request [vc-data-model#1202](https://github.com/w3c/vc-data-model/pull/1202)._

<!-- issue w3c/vc-data-model/1202 -->



**Manu Sporny:** 1202 has multiple positive reviews, but has pending requested changes. kristina, will you be able to re-review this week?  

**Kristina Yasuda:** I will try.  

#### 1.5. Add section on Ecosystem Compatibility. (pr vc-data-model#1203)
{: #section1-5}

_See github pull request [vc-data-model#1203](https://github.com/w3c/vc-data-model/pull/1203)._

<!-- issue w3c/vc-data-model/1203 -->



**Manu Sporny:** 1203 has all positive reviews, but I will not merge it until others have reviewed it.  

#### 1.6. Move data schemas to basic concepts section (pr vc-data-model#1207)
{: #section1-6}

_See github pull request [vc-data-model#1207](https://github.com/w3c/vc-data-model/pull/1207)._

<!-- issue w3c/vc-data-model/1207 -->



**Manu Sporny:** 1207 will be merged.  

### 2. What is the difference between JsonSchema2023 and CredentialSchema2023? (issue vc-json-schema#172)
{: #section2}

_See github issue [vc-json-schema#172](https://github.com/w3c/vc-json-schema/issues/172)._

<!-- issue w3c/vc-json-schema/172 -->



**Kristina Yasuda:** decentralgabe, are you able to talk here?  

**Gabe Cohen:** Yes. The current spec defines JSON schema 2023 as well as the credentials schema 2023. The latter just wraps it in a verifiable credential, allowing the provenance of schemas to be verified.  

**Manu Sporny:** The examples had some surprising context values. This made the subject of the verifiable credentials appear to be a plain JSON object rather than JSON-LD data.  

> *Dave Longley:* +1 to a new property with `@json` because VCDM itself has requirements that JSON schema may not conform to.

> *Ivan Herman:* See [JSON Literals in the JSON-LD spec](https://www.w3.org/TR/json-ld11/#json-literals).

**Manu Sporny:** Regarding the decision last meeting about datestamps, which version of JSON Schema applies? It is not clear which would apply.  

> *Dave Longley:* +1 because JSON schema uses date-based versioning itself there could be confusion.

**Gabe Cohen:** I am happy to move the data to a new property where the type is 'json'. As for the versioning, I'm happy to change this as well.  
… We have a section in the specification about processing, where we say the processors can detect the version of JSON-LD used.  

**Manu Sporny:** That would address my high-level concerns. The only other concern I have is that sometimes people state the wrong version of JSON Schema. You can't always depend on the metadata.  
… Therefore, we need a conformance test suite to ensure that conforming processors test for the version of the JSON Schema used.  

**Gabe Cohen:** We should maybe introduce a normative requirement to specify a version of JSON Schema, but I don't think we should require a specific version.  

**Sebastian Crane:** Wanted to ask, semantically, what does a JSON Schema VC mean in contrast to JSON Schema published via GPG?  
… so, VCs requiring use of JSON Schema, would allow it to be verified in that ecosystem.  

**Gabe Cohen:** GPG would be one way to secure a VC, but that's out of scope... there could be other ways to secure JSON Schema that are valid.  

**Manu Sporny:** I wanted to agree with decentralgabe that we should make the normative statement stronger, however, I think we should also require at least one specific version of JSON Schema, and make older version support optional.  

> *Kristina Yasuda:* why require? that does not make sense. compliance to the spec is voluntary.

> *Gabe Cohen:* decentralgabe: semantically...a vc json schema provides optional validation for as a step in a longer credential validation process.

> *Sebastian Crane:* manu, kristina, if one version supports 2020 but another supports 2018, they will be unable to understand each other. This will result in an ecosystem that will not be interoperable.

**Manu Sporny:** If we remove the version specifier, though, we'll be locked in to that JSON Schema version forever. We could introduce language to require parsing the version identifier.  

**Ivan Herman:** There is a blog post in the JSON Schema website which may resolve the issue of version incompatibilities.  

> *Ivan Herman:* See ["Towards a stable JSON Schema"](https://json-schema.org/blog/posts/future-of-json-schema).

**Ivan Herman:** It may well be that by the time we go to REC, the issue might have disappeared.  
… The other point is editorial: the text now says that JSON Schema 2023 is _defined_ at a vocabulary URL, but that is not correct, the _definition_ is _this_ specification. That should be rephrased.  

**Gabe Cohen:** manu, I like the idea of making at least one required and others optional.  
… I'll open an issue about that.  
… I don't know when JSON Schema's movements will happen.  

**Manu Sporny:** kristina, I think you said we had a path to CR and REC. What is that?  

**Gabe Cohen:** It's the OpenJS Foundation specifications that we are allowed to reference normatively.  
… It was pointed out that normatively referencing IETF drafts is not a good idea.  

> *Manu Sporny:* Glad that is finally resolved, after many, many years. :).

> *Sebastian Crane:* [https://datatracker.ietf.org/doc/draft-wkumari-not-a-draft/](https://datatracker.ietf.org/doc/draft-wkumari-not-a-draft/).

**Ivan Herman:** We are not the only ones to have this trouble.  

> *Ivan Herman:* See [Strategy team's relevant issue](https://github.com/w3c/strategy/issues/108).

### 3. Issue triage.
{: #section3}

> *Ted Thibodeau Jr.:* I suggest least-recently-updated [https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+-label%3Abefore-CR+-label%3Apost-CR+sort%3Aupdated-asc](https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+-label%3Abefore-CR+-label%3Apost-CR+sort%3Aupdated-asc).

#### 3.1. Move Data Schemas to Basic Concepts section (issue vc-data-model#1196)
{: #section3-1}

_See github issue [vc-data-model#1196](https://github.com/w3c/vc-data-model/issues/1196)._

<!-- issue w3c/vc-data-model/1196 -->



**Kristina Yasuda:** Do you need extra time to work on #1196?  

**Manu Sporny:** #1207 will resolve it.  

#### 3.2. `validFrom` and `validUntil` fields need better specification of `dateTime` (issue vc-data-model#1193)
{: #section3-2}

_See github issue [vc-data-model#1193](https://github.com/w3c/vc-data-model/issues/1193)._

<!-- issue w3c/vc-data-model/1193 -->



**Manu Sporny:** assign to me and pre-CR.  

#### 3.3. Ensure the base context doesn't constrain lower-maturity specifications (issue vc-data-model#1175)
{: #section3-3}

_See github issue [vc-data-model#1175](https://github.com/w3c/vc-data-model/issues/1175)._

<!-- issue w3c/vc-data-model/1175 -->



**Manu Sporny:** We have marked the context as 'at risk', so if anything looks like it's going to hold up our CR process it can be removed.  

> *Dave Longley:* +1 to already addressed.

> *Ivan Herman:* +1.

> *Phillip Long:* +1 that we have language addressing this already.

> *Manu Sporny:* We currently have this in the spec:.

**ISSUE:** (AT RISK) Hash values might change during Candidate Recommendation.  

> *Manu Sporny:* This section lists cryptographic hash values that might change during the Candidate Recommendation phase based on implementer feedback that requires the referenced files to be modified.

> *Manu Sporny:* (in the base context section).

> *Manu Sporny:* Link to that text is here: [https://w3c.github.io/vc-data-model/#base-context](https://w3c.github.io/vc-data-model/#base-context).

> *Dave Longley:* -1 to needing additional language, right now we can modify in any way.  
> "can be changed in any way, including removal".

> *Ivan Herman:* +1 to dlongley.

**Manu Sporny:** I'll take an action item on 1175 to make this more specific.  

#### 3.4. Define Controller Documents in the Core Data Model (issue vc-data-model#1205)
{: #section3-4}

_See github issue [vc-data-model#1205](https://github.com/w3c/vc-data-model/issues/1205)._

<!-- issue w3c/vc-data-model/1205 -->



> *Dave Longley:* VC-COSE-JOSE can reference data integrity if it so desires.

> *Dave Longley:* or reference DID core like DI does.

**Manu Sporny:** DID documents are subclasses of controller documents.  

> *Dave Longley:* +1 controller documents have been part of data integrity for a decade, DID documents are specific subclass of controller documents.

> *Dave Longley:* [https://w3c.github.io/vc-data-integrity/#controller-documents](https://w3c.github.io/vc-data-integrity/#controller-documents).

> *seabass2:* !nick seabass.

---
