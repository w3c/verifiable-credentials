---
layout: minutes
date: 2023-06-27
title: VCWG Special Topic Call — 2023-06-27
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-06-27-vcwg-special",
        "name": "VCWG Special Topic Call — Minutes",
        "about": "VCWG Special Topic Call",
        "dateCreated": "2023-06-27",
        "irc": "vcwg-special",
        "datePublished": "2023-06-28",
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
            "name": "VCWG Special Topic Call",
            "startDate": "2023-06-27",
            "endDate": "2023-06-27",
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
                            "name": "Paul Dietrich"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Michael Prorock"
                },
                {
                    "@type": "Person",
                    "name": "Oliver Terbu"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
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
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                }
            ]
        }
    }

---

# VCWG Special Topic Call — Minutes
{: .no_toc}



**Date:** 2023-06-27

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20230627T110000/) and the [IRC Log](https://www.w3.org/2023/06/27-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Manu Sporny, Michael Prorock, Oliver Terbu, Gabe Cohen, Paul Dietrich, David Chadwick, Hiroyuki Sano, Kristina Yasuda, Ted Thibodeau Jr., Chris Abernethy, Phillip Long, Will Abramson, Joe Andrieu, Dave Longley, Dmitri Zagidulin, Andres Uribe, Orie Steele, Michael Jones

**Regrets:** 

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** Paul Dietrich

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1.  add context integrity capabilities to the core data model (pr vc-data-model#1140)
{: #section1}

_See github pull request [vc-data-model#1140](https://github.com/w3c/vc-data-model/pull/1140)._

<!-- issue w3c/vc-data-model/1140 -->


**Kristina Yasuda:** goal of the call today is to seek approval for the PR.  

> *Kristina Yasuda:* 164 PR comments is telling.

**Brent Zundel:** this tend to work best if PRs are always associated with issues. This PR came from an issue from another repo. Strongly encourage folks to raise and issue.  
… even if the PR is simple.  

**Kristina Yasuda:** 164 PR comments is not ok. We are close to merging so we will move forward, but going forward be careful [use issues].  

**Phillip Long**: issue 831 may be considered the antecedent to this issue This one was closed by the WG and this PR opens it. Should we reconsider.

**Michael Prorock:** Opened on VC JWT originally for a good reason. There is a JSON LD data model that implies use of a context. If you are using the context to transform data its important that the context.  
… is the same on both side. Other conversation going on around context and things like MIM and other modifications that can lead to a bad processor.  

> *Orie Steele:* Context integrity mostly matters for the RDF representation, this mostly impacting data integrity proofs at the sign and verify interface, see [https://github.com/w3c/vc-data-model/issues/1151#issuecomment-1608368735](https://github.com/w3c/vc-data-model/issues/1151#issuecomment-1608368735).

> *Orie Steele:* it also applies to JSON only representations, if you care to get the *same* graph out on different verifiers.

**Michael Prorock:** This PR was open specifically to deal with a way to encode a hash for the context so you know on both sides (issuer and verifier) that its the same.  
… The implication is that this PR was not intended to be a reopening of 831. There is a relation to things described in 831. When this became PR 1140,.  
…   

> *Kristina Yasuda:* jfyi: [https://github.com/w3c/vc-data-model/issues/831](https://github.com/w3c/vc-data-model/issues/831).

**Michael Prorock:** it expanded out to become a little broader but its not the intention to expand to a PR like 831.  

> *Manu Sporny:* The suggestion that context integrity mostly matters for RDF is just not true, but we don't have to go there to process this PR.

**Michael Prorock:** from a capability standpoint I welcome feedback but I i think everyone thinks this is a good capability.  

**Manu Sporny:** speak in favor of the PR. A number of significant changes from last week. This can be used as a general mechanism to refer to a URL within a verifiable credential.  
… its really useful to link to external resources like pdf, images, audio etc. It also now matches the naming of the hash expression is the digest SRI.  

> *Dave Longley:* +1 to manu and comments on different digest formats and features in the community.

**Manu Sporny:** which allows for other digest mechanisms from other communities. A number of issue markers have been added.  
… an issue marker to make it clear that its an ongoing discussion on whether this can be used throughout the group.  

**Dmitri Zagidulin:** Thanks Mike for the hard work on this. Really helpful and necessary +1. In my ideal world I would love to see an optional canonicalization mechanism.  

> *Orie Steele:* -1 to JCS, +1 to hash agility based on an existing hash algorithm registry.

**David Lehn:** Has anyone implemented this yet? Is that part of the PR or coming in the future?  

> *Dmitri Zagidulin:* `@Orie` - -1 to /any/ canonicalization, or just JCS?

**Kristina Yasuda:** has anyone else implemented?  

> *Orie Steele:* I have proved that you can break things, when you don't do this... does that count?  
> *Dmitri Zagidulin:* `@Orie` - which this?

**Michael Prorock:** as far as implementation David, we have a test implementation in Go and Python. Python will be released as open source. Go implementation will push to aries framweork Go.  


> *Orie Steele:* In general, using different contexts breaks data integrity proofs in confusing ways for most developers.  
> *Orie Steele:* (because you get different n-quads for the verifier, than what the issuer intended to be produced).

**Michael Prorock:** One comment back to dmitriz. The has method was defined originally as a separate property. I went with this approach after feedback that a separate term could cause graph problems.  

> *Dmitri Zagidulin:* `@Mike` - ohhh I see, makes sense.

> *Orie Steele:* dmitriz see this issue for an example: [https://github.com/w3c/vc-data-model/issues/1151#issuecomment-1608368735](https://github.com/w3c/vc-data-model/issues/1151#issuecomment-1608368735).

**Manu Sporny:** 2 things. other issues marker is a statement that says that if related resources exists, you must include all context in the document in the related resource array.  

> *Orie Steele:* +1 to that language not being clear enough.

> *Michael Prorock:* +1 needs improvement.

**Manu Sporny:** Digital bazaar would reject this language as is, but expect further conversation on the issue marker.  
… The topic mike just mentioned "why specific algorithm and value in the same string'. If you break it out, you could have multiple hashes listed.  

> *Orie Steele:* is this a feature or a bug?

**Manu Sporny:** and then if you have separate hashes you would have to match each hash with the value. So just using SRI or mutibase/multihash because when you read it.  

> *Dave Longley:* each hash algorithm becomes a "property and value" of the resource, which is bizarre -- it also makes schema processing more complicated vs. layering separation.   
> *Dave Longley:* if it is broken out as a separate property.

**Manu Sporny:** you know what resource you are dealing with.  

> *Orie Steele:* I think its pretty common to provide multiple hashes for resources, see [https://github.com/microsoft/sbom-tool/blob/main/samples/manifest.spdx.json](https://github.com/microsoft/sbom-tool/blob/main/samples/manifest.spdx.json).

> *Dave Longley:* it's absolutely a feature to have consistent data modeling vs. free for all (something the VCDM introduces over "anything goes JSON").

**Kristina Yasuda:** There is still language to be fleshes out. are we merging it?  

> *Orie Steele:* Seems the design comments here, don't match software supply chain security work I an aware of.

**Michael Prorock:** manu made a comment about multiple hashes. By pointing to SRI we permit that. Specifically for constrained environments.  
… There are cases like ARMV7 or v8 where you might only have SHA256 available. There are reason to permit multiple has values. We would up in a better place with this PR.  

> *Orie Steele:* +1 mprorock, providing multiple hashes supports constrained environments, that don't ship a kitchen sync of hash algorithms.

> *Dmitri Zagidulin:* +1.

**Manu Sporny:** Can I merge after the call?  

**Kristina Yasuda:** Thinking about moving to the next agenda. Does the group want to keep discussing the details?  

> *Manu Sporny:* I will merge this PR after the call.

**Kristina Yasuda:** manu, please merge after the call.  
… Any objects to move to 1101 and 1100? It was not on the agenda.  

#### 1.1. Make the value of the base context normative. (pr vc-data-model#1158)
{: #section1-1}

_See github pull request [vc-data-model#1158](https://github.com/w3c/vc-data-model/pull/1158)._

<!-- issue w3c/vc-data-model/1158 -->



**Michael Prorock:** Suggest a quick diversion to 1158 since its related to 1140. There are a couple change I suggested to bring the language into alignment. If we are talking about hashing.  
… we should use the same mechanism with the core data model.  
… 1158 as is is inconsistent with 1140. I provided text to make those two consistent.  

**Kristina Yasuda:** lets talk about 1158.  

**Manu Sporny:** fine with these changes. Concern that it sounds like an argument is constructed based on these changes that puts us on a slippery slope.  
… This changes argues over how we express the hash as base64 or hexidecimal. We can make this change. +1, but I have a feeling its not the last we will hear about this.  
… Is this part of a larger suggest to change the way we represent hashes and other values across our specifications.  

**Kristina Yasuda:** How is this a slippery slope.  

**Manu Sporny:** The next argument could make that all DI specification need to follow the SRI encoding format.  

> *Orie Steele:* CEPC lets assume positive intent.

> *Dave Longley:* -1 to doing anything that would prohibit or align the use of digestMultibase.

**Kristina Yasuda:** clarify that the scope is only the VC DM. Would not apply to data integrity.  

> *Dave Longley:* +1 to Orie, let's assume positive intent, there's no goal here to prohibit or malign digestMultibase through this action.

**Michael Prorock:** This PR is solely to bring it up to 384 and encode the digest according to the SRI spec. this is focused just on the core data model.  

> *Manu Sporny:* As long as what MikeP is saying holds, we're all good here. :).

> *Kristina Yasuda:* thanks Orie and dave re positive intent comments.

> *Orie Steele:* I am still unsure if we can normatively depend on multiformats / multibase in a W3C TR... but that is not what resource integrity or securing the core context is about.

> *Dave Longley:* Orie: we can, and it's already been done in the past (e.g., DID core).

**Orie Steele:** agree with mike prorock. When we look at resource integrity for context, context is a resource. we found a way to make the context values normative.  
… by specifying a cryptographic hash function. many ways to represent hashes. Data integrity proof relies on multiformat. totally separate from describing how to secure resource securely.  
… in the core data model.  

> *Manu Sporny:* Good, I'm glad we have confirmation from both Orie and MikeP on those points.

> *Manu Sporny:* We're good to merge.

> *Manu Sporny:* (afaict).

> *Dave Longley:* What Orie said is why this was so related to #831 -- and does some of what it was trying to do.

> *Orie Steele:* I suspect we may see formal objections in the "hash" is used to make "down refs" normative, but we will see.

**Kristina Yasuda:** PR 1158 we have agreement to align with 1140.  
… we have 15 minutes left. Any other PRs related to this topic?  

> *Orie Steele:* Can we close the PRs that are not getting consensus?

**Kristina Yasuda:** are we OK to bring up 1100 and 1101?  

**Brent Zundel:** Can we get a sense of where each of the PRs are? we have 15 open PRs. Can we go through each of the PRs briefly?  

**Kristina Yasuda:** WIll take up PRs where we have authors on the call.  

### 2. Update reservation table (pr vc-data-model#1142)
{: #section2}

_See github pull request [vc-data-model#1142](https://github.com/w3c/vc-data-model/pull/1142)._

<!-- issue w3c/vc-data-model/1142 -->



**Brent Zundel:** 1142 updates the reservation table with confirmation method and render method. Render method's URLs work. confirmation URL dont work yet.  

> *Orie Steele:* It is blocked pending adoption of the work item, which was JUST proposed to the CCG.

**Brent Zundel:** as soon as that is officially adopted in the CCG the URLs will work and I will approve.  

**Kristina Yasuda:** Is there a timeline for that?  

> *Orie Steele:* CCG already has 2 companies supporting it, it is waiting for acknowledgement by chairs, it cannot be blocked.

**Oliver Terbu:** We just created the new work item proposal today. others can give more details on timeline.  

> *Orie Steele:* Nobody can stop a CCG work item from being worked on when multiple companies support it.

**Michael Prorock:** Harrison is chairing the meeting today and will note. Send a message to the chairs and we can expedite it. If you have multiple parties and there are no objections, it will go through.  

**Kristina Yasuda:** If you want to follow the confidence method work, pay attention to the CCG.  

**Oliver Terbu:** We are still looking for owners of the work item.  

**Kristina Yasuda:** if you are interested in moving this forward,contact the CCG or reach out to oliver.  

**Orie Steele:** Confused. I though spruce and digital bazaar are sponsoring this work?  

**Oliver Terbu:** We don't have the bandwidth to own the work. Didn't say we would not implement.  

**Kristina Yasuda:** lets take these questions offline.  

> *Michael Prorock:* +1.

**Manu Sporny:** Digital bazaar is supportive of the work, but currently we don't have the bandwidth to be an owner of the work. We see value in it. cant work on it for 6 mo or so.  

**Kristina Yasuda:** Any coordinate needed with CCG?  

> *Orie Steele:* +1 to dropping it, given that nobody wants to work on it in ccg.

**Michael Prorock:** If there is no one working on it, can we drop it from the VCWG side? On the CCG side we need two owners from different orgs to approve.  

**Kristina Yasuda:** Lets wait and see.  

### 3. Add graph node identifiers for registered claims (pr vc-data-model#1149)
{: #section3}

_See github pull request [vc-data-model#1149](https://github.com/w3c/vc-data-model/pull/1149)._

<!-- issue w3c/vc-data-model/1149 -->



**Kristina Yasuda:** PR 1149. what do we need to resolve?  

**Michael Prorock:** find it weird that we are up to 22 comments when all this PR does it point over to the actual definition in the RFC.  

**Dave Longley:** there has been discussion in the PR around exactly as what the PR is doing. Don't think its as simple as what Mike is saying.  
… would this cause people to use 1.1 or cause confusing with 2.0. There is a number of comments here and another case of.  
… a PR that was intended to be a simple thing, but need discussion to figure out what we need to do.  

**Kristina Yasuda:** hopefully we get a bit more clarity. we will not resolve it here.  

**Michael Prorock:** note that based on previous comments, this PR (1149) is effectively doing the same as including the proof in the context.  

> *Dave Longley:* mprorock, please read the comments in the PR, this was discussed.

**Michael Prorock:** to me this is an either or. It only has core data model items, or has additional helpers. We can't have it both ways.  

> *Orie Steele:* +1 mprorock.

> *Manu Sporny:* It's not doing the same thing as proof in the context, that's the core of the disagreement -- you don't use iss/kid/etc like you use proof.

> *Manu Sporny:* Specifically, we have discussed this in the PR: [https://github.com/w3c/vc-data-model/pull/1149#issuecomment-1605659418](https://github.com/w3c/vc-data-model/pull/1149#issuecomment-1605659418).

> *Dave Longley:* mprorock: some of the things you're saying in the call here were discussed in the PR, please read the PR.

> *Orie Steele:* [https://w3id.org](https://w3id.org) hosts this html file.

**Ted Thibodeau Jr.:** Lots of comments and they have substance to them. Good to review them. w3.org is a redirect service. Its not hosted. You cannot point a finger here.  

> *Orie Steele:* it also redirects to [https://w3id.org/citizenship](https://w3id.org/citizenship).  
> *Orie Steele:* which defines [https://w3id.org/citizenship#PermanentResidentCard](https://w3id.org/citizenship#PermanentResidentCard).  
> *Orie Steele:* w3id.org also defines our normative concept of [https://w3id.org/security#proof](https://w3id.org/security#proof).

> *Ted Thibodeau Jr.:* [https://w3id.org/security#proof](https://w3id.org/security#proof) redirects to [https://w3c.github.io/vc-data-integrity/vocab/security/vocabulary.html#proof](https://w3c.github.io/vc-data-integrity/vocab/security/vocabulary.html#proof).  
> *Ted Thibodeau Jr.:* w3id.org is NOT defining anything.

> *Orie Steele:* TallTed, if w3id.org is compromised, proof could be defined and redirected to anything else... that is my point... previously proof pointed to the W3C CCG github... we should change what it redirects too, in this file: [https://github.com/perma-id/w3id.org/blob/master/security/.htaccess](https://github.com/perma-id/w3id.org/blob/master/security/.htaccess).

**Ted Thibodeau Jr.:** this PR has a title that is not reflective of what is happening in the PR. Please update.  

> *Manu Sporny:* Agree that the PR is not titled appropriately.

**Ted Thibodeau Jr.:** I cant provide an alternative because I'm not writing this. If orie cannot rephrase it...  

### 4. Add guidance on Representations of Verifiable Credentials (pr vc-data-model#1101)
{: #section4}

_See github pull request [vc-data-model#1101](https://github.com/w3c/vc-data-model/pull/1101)._

<!-- issue w3c/vc-data-model/1101 -->



**Michael Jones:** I re-reviewed the status of 1101 and the related PR 1100 and I feel like we are at an impass. It was intended to be a short summary of.  
… what we decided in Miami. Some people were in favor. I don't know how to unblock this because people are thinking that.  
… we mean different things.  
… one suggestion to unblock it would be to quote the resolution as is and put that note in the spec.  
… is that a path that I could pursue?

**Manu Sporny:** mike, that might work. I think you are right. we are at an impass with the proposal. You did your best to captures something. One approach.  
… forward would be say that we were unable to write text around this that we could all agree to. Do we want to spend time on this or on other things.  
… That is where we are right now. I would not oppose a note that says the verbatim resolution, but say that the group would not.  

**Michael Jones:** I could not write text into the specification with negativity about the working group.  

> *Michael Prorock:* +1 selfissued.

> *Orie Steele:* +1 selfissued.

> *Ted Thibodeau Jr.:* Worth noting as well that "the Miami resolution" was RUSHED through at the end of a session, and has since been quoted literally generally without consideration of the intent of the various folks involved in that discussion.

**Kristina Yasuda:** closing the meeting.  

---
