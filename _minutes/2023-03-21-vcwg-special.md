---
layout: minutes
date: 2023-03-21
title: Verifiable Credentials Working Group Special Topic Call on the Specification Directory — 2023-03-21
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-03-21-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on the Specification Directory — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on the Specification Directory",
        "dateCreated": "2023-03-21",
        "irc": "vcwg-special",
        "datePublished": "2023-03-21",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on the Specification Directory",
            "startDate": "2023-03-21",
            "endDate": "2023-03-21",
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
                            "name": "David Chadwick"
                        },
                        {
                            "@type": "Person",
                            "name": "Manu Sporny"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "SongPu Ai"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Ivan Herman"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Markus Sabadello"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "auribe"
                },
                {
                    "@type": "Person",
                    "name": "Steve McCown"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on the Specification Directory — Minutes
{: .no_toc}



**Date:** 2023-03-21

See also the [Agenda](https://www.w3.org/events/meetings/e88d30bd-4099-49d1-b769-1d8cd39a1b28) and the [IRC Log](https://www.w3.org/2023/03/21-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Shigeya Suzuki, Ted Thibodeau Jr., Kristina Yasuda, SongPu Ai, Chris Abernethy, Dmitri Zagidulin, Manu Sporny, Joe Andrieu, David Chadwick, Gabe Cohen, Ivan Herman, Phillip Long, Markus Sabadello, David Lehn, Dave Longley, auribe, Steve McCown, Michael Jones

**Regrets:** 

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** David Chadwick, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


> *Kristina Yasuda:* We are going to talk about Directories today..

> *Kristina Yasuda:* Response from the chairs on the vc-acdc item will be sent out later.

> *Ivan Herman:* -> [https://w3c.github.io/vc-specs-dir/](https://w3c.github.io/vc-specs-dir/).

> *Ivan Herman:* -> [https://github.com/w3c/vc-specs-dir](https://github.com/w3c/vc-specs-dir).

### 1. Directories.
{: #section1}

**Manu Sporny:** What do we want to put in the VC Specs Directory?.  
… Should be to do with the VC eco-system and existing extension points..  
… Then there is a general section for formats..  
… what do we do with a new category as an extension point (not yet in the VCDM)?.  
… what are the rules for this? Who is allowed write access?.  
… how much control does the group want over these extension points?.  
… could be simply a reservation of a term for use later, or could be a pointer to an existing extension point with an example in the directory.  

**David Chadwick:** I'm in the middle of doing a PR for `evidence`, for eKYC, this is work in the OIDF. I thought from the previous meeting, the actual core data model doesn't have spurious examples, but concrete examples, wondering if core spec will have spurious examples, or specific examples? Dummy example or real life example that points to a standard?.  

**Kristina Yasuda:** For evidence, property is defined in core data model, there is already an entry in directory, but could be defined in 16:03:04 directory, would have certain types, those would have document that defines it, like what you're working on, which you would point to from the Directory. Not sure what you mean by "real" vs. "not real" – there is that extensibility point for any specific property to be valid..  

**Orie Steele:** I am opposed to adding `render` to the v2 core context. I am in favor of adding `render` and any other predicates or types, to the vc-specs-dir. The vc-specs-directory has support for “vocabulary” and “contexts” that is all that is needed to support interoperability regarding `render`..  
… The working group should work on things that have working group consensus, which means any type or predicates that the working group agrees to take responsibility for the quality of… I don’t believe the working group has the bandwidth or interest to support the render property in the core data model..  

**Manu Sporny:** Members should give concrete technical reasons for not including features in the core data model. (Not just their opinions). Options are: put entirely in the directory, or put in VCDM with details in directory, or put whole definition in VCDM need technical reasons for the decision that is made. one example is the proposed render property. Where should this go..

> *Orie Steele:* Adding predicates to a context is writing a blank check… and I don’t believe that is a good practice for the working group..

**Kristina Yasuda:** we are not making any concrete decision regarding rendering property itself on this call. You can use it as an example, but please focus on directions around directory - how we decide what should go into a VCDM core..  

**Manu Sporny:** One technical criteria is: are different implementors implementing a feature in different ways - this is a reason for providing one standard way. another technical criteria is can we minimise effort for implementors by putting minimum features in core DM and then extensions in a separate spec. An example is LD-proofs..

**Phillip Long:** there is no process for submission to the directory, so anyone can add anything to it. Whereas for the VCDM there has to be a lot of discussion and agreement before it goes in..

**Kristina Yasuda:** Directory provides no normative judgment over its quality nor level of agreement. Whereas VCDM has both..  

**Dave Longley:** Another criteria is different people might try to extend the VCDM in different ways (incompatible) so that both ways cannot be simultaneously added to a VC..  

**Ivan Herman:** if a feature goes into the VCDM then it must go via the Candidate Recommendation route, which provides a lot more verification/review by external people. People "just" defining an extension point may not want to have that..  

**Michael Jones:** outside the WG can add top level properties to the VCDM via the directory. Is this what we want?.  

> *Michael Jones:* draft proposal: VC spec directory will have an entry for documents that can define a top level property and documents defining those can be defined outside W3C VCWG..

**Manu Sporny:** one extreme for operation of the directory would be to use a process similar to IANA registry. concerning the render property we could have two specs: one for the top level property and one for the properties of the render property..

**Joe Andrieu:** The directory is not a registry. It is a place to share work being done by people. This is an important distinction..  

**Manu Sporny:** We already have the feature that selfissued requested. It is in the section where new types are defined..  

> *Kristina Yasuda:* draft proposal: VC spec directory will have an entry for documents that can define a top level property (Verifiable Credential Types) and documents defining those can be defined outside W3C VCWG..

> *Manu Sporny:* +1.

**Joe:** I don’t like this wording. What is a top level property? Where is it defined?.  
… putting a top level property in the Directory does NOT automatically include it in the VCDM.  

> *Michael Jones:* +1.

> *Manu Sporny:* The group attempts to create a draft proposal: The VC Specs Directory will allow any specification in the directory to define any top-level properties, as long as they do not conflict with top-level properties in the (core?) VCDM. That property does not become part of the (core?) VCDM namespace/ontology/vocabulary.The documents defining that property can be defined outside W3C VCWG..

**Ted Thibodeau Jr.:** What if someone defines a property in the directory that in the future the VCDM want to use the same term for a different concept..  

**David Chadwick:** What is the difference here? The VCDM is an open world data model - anyone can extend..  

**JoeA:** When people pull in a vocabulary, they don't make what they pull in a part of the VCDM..  

> **Proposed resolution: The VC Specs Directory will allow any specification in the directory to define any top-level properties, as long as they do not conflict with top-level properties in the VCDM. That property does not become part of the VCDM namespace/ontology/vocabulary. The documents defining that property can be defined outside W3C VCWG..** *(Kristina Yasuda)*
{: .proposed_resolution}

> *Michael Jones:* +1.

> *Manu Sporny:* -1 (Joe's arguments about a litmus test were compelling, and the proposal above contains too much that needs to be dissected. I expect a subset of the above to pass)..

> *Joe Andrieu:* -1 (conflict vetting is gatekeeping).

> *Ted Thibodeau Jr.:* -1 (too many nuances to sufficiently capture this quickly).

> *David Chadwick:* +1.

> *Phillip Long:* -1 (need to be clearer about how extensions become core).

> *Ivan Herman:* +1 (each term has a URL and the official data model is in its own namespace for a url).

> *Andres Uribe:* +1.

> *Steve McCown:* -1.

> *Dave Longley:* -1 proposal text still needs more work to gain common understanding.

> *SongPu Ai:* +1 with more improvements.

> *Chris Abernethy:* -1.

> *Dmitri Zagidulin:* -1.

> *David Lehn:* -1 text could be improved.

> *Shigeya Suzuki:* -1.

---
