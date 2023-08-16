---
layout: minutes
date: 2023-08-15
title: Verifiable Credentials Working Group Special Topic Call on PR Discussions — 2023-08-15
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-08-15-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on PR Discussions",
        "dateCreated": "2023-08-15",
        "irc": "vcwg-special",
        "datePublished": "2023-08-16",
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
            "startDate": "2023-08-15",
            "endDate": "2023-08-15",
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
                            "name": "Manu Sporny"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
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
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Kristina Yasuda"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes
{: .no_toc}



**Date:** 2023-08-15

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20230815T180000/) and the [IRC Log](https://www.w3.org/2023/08/15-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Phillip Long, Gabe Cohen, Manu Sporny, Shigeya Suzuki, Michael Jones, Dave Longley, Sebastian Crane, Joe Andrieu, Dmitri Zagidulin, Kristina Yasuda, Orie Steele, Kaliya Young

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Gabe Cohen, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Brent Zundel:** agenda today - discuss open PRs; as time permits do issue triage; then - issue processing.  

### 1. PR Review
{: #section1}

https://github.com/w3c/vc-data-model/pulls.

#### 1.1. Add "author" and "party" to terminology, rewrite "claim" terminology (pr vc-data-model#1172)
{: #section1-1}

_See github pull request [vc-data-model#1172](https://github.com/w3c/vc-data-model/pull/1172)._

<!-- issue w3c/vc-data-model/1172 -->



**Brent Zundel:** beginning with PR 1172.  
… many comments; not closer to consensus...chairs have had a conversation and the recommendation is to give it a week and if no consensus then we close it and continue the conversation in an issue.  

**Manu Sporny:** not objecting to that approach. one of the challenges with changing the terminology--the original terminology was intended to be a couple sentences. this PR makes each def into a paragraph. hard to keep in one's head. suggested that Rieks link out to other sections in the spec for more detail.  
… a viable way to add the terminology detail without paragraphs. fine to close PR and move to an issue.  

> *Phillip Long:* +1 to using linked data to add more verbose descriptions but otherwise no objection to closing in a week.

_See github issue [vc-data-model#995](https://github.com/w3c/vc-data-model/issues/995)._

<!-- issue w3c/vc-data-model/995 -->



**Michael Jones:** fine to just close it, but waiting a week is probably polite.  

**Brent Zundel:** we will wait a week, issue linked will continue the conversation. marking the PR as pending close and adding a note.  

#### 1.2. Add validation section regarding holder (pr vc-data-model#1199)
{: #section1-2}

_See github pull request [vc-data-model#1199](https://github.com/w3c/vc-data-model/pull/1199)._

<!-- issue w3c/vc-data-model/1199 -->



**Brent Zundel:** next 1199 add validation section regarding holder; a few approvals. outstanding change requests from Joe. believe they've been addressed. please re-review.  
… Ted also has some outstanding changes.  

**Joe Andrieu:** I have reviewed recently.  
… have pending comments. forgot to hit button to send comments.  

**Brent Zundel:** moving in a direction where consensus is still possible.  

#### 1.3. Clarify the difference between a "credential" and a "verifiable credential" (pr vc-data-model#1211)
{: #section1-3}

_See github pull request [vc-data-model#1211](https://github.com/w3c/vc-data-model/pull/1211)._

<!-- issue w3c/vc-data-model/1211 -->



**Brent Zundel:** next PR is 1211: Clarify the difference between a "credential" and a "verifiable credential".  
… multiple approvals, multiple requests for changes. believe that Mike & Kristina's changes have been made. please re-review.  

**Manu Sporny:** have applied change suggestions from Mike and Kristina. David Chadwick approved. Integrated Ted's changes. Dave has a couple changes to make, will integrate those. Only review left will be Orie.  
… Orie left an explanation of his concern, but left out concrete suggestions except to not refer to securing which would be unworkable.  

**Brent Zundel:** noting that Orie has an approval on this.  
… kristina please review 1211.  

**Kristina Yasuda:** will review!  

#### 1.4. Refer to VC-SPECS-DIR for proof types. (pr vc-data-model#1212)
{: #section1-4}

_See github pull request [vc-data-model#1212](https://github.com/w3c/vc-data-model/pull/1212)._

<!-- issue w3c/vc-data-model/1212 -->



**Brent Zundel:** next up PR 1212: Refer to VC-SPECS-DIR for proof types. many approvals. one outstanding request from Orie who is not on the call.  

**Manu Sporny:** looking to see where the objection is...would rather link to the specs dir for both securing mechanisms for this particular PR re:vc-specs-dir#14 which was merged.  
… we could refer to two parts in the specs dir now. that feels awkward. can just point to two specifications that the group is working on. can make those changes if no objections.  

**Brent Zundel:** Orie has joined, which changes would you like to see in 1212. sorry for ambushing you.  

**Orie Steele:** expect there to be other representations of VCs. expect there to be media types that distinguish them. easier to refer to the specs dir where those media types exist, instead of our work item continuing to refer to the two current mechanisms over and over again.  
… we have a specs dir and should be using it to clarify that it's not just Data Integrity Proofs or JWTs. you'll need a media type to tell them apart.  

**Manu Sporny:** I will refer to the specs directory and two different places: one for proofs, one for media types.  

**Orie Steele:** I would refer to just the media types section, and add to the section vc+ld+json as a media type which can contain embedded proofs. just refer to the media type section.  

**Manu Sporny:** previously kristina had objected putting the base media type into the media types section. if you're OK with that we can do what Orie said.  
… will add a PR to the specs dir for that media type and then in this PR point to that location.  

> *Phillip Long:* +1 to manu's course of action.

**Brent Zundel:** any objections? [none heard].  

#### 1.5. Update links from VC-JWT to VC-JOSE-COSE (pr vc-data-model#1234)
{: #section1-5}

_See github pull request [vc-data-model#1234](https://github.com/w3c/vc-data-model/pull/1234)._

<!-- issue w3c/vc-data-model/1234 -->



**Brent Zundel:** next PR: 1234 Update links from VC-JWT to VC-JOSE-COSE. request for changes from Ted. believe they've been addressed.  

**Gabe Cohen:** A note that Ted's comments were resolved, I think we're good to merge this.  

#### 1.6. Added an SVG diagram of the vocabulary. (pr vc-data-model#1236)
{: #section1-6}

_See github pull request [vc-data-model#1236](https://github.com/w3c/vc-data-model/pull/1236)._

<!-- issue w3c/vc-data-model/1236 -->



**Brent Zundel:** next PR...1236 Added an SVG diagram of the vocabulary. only a couple of days old. could use more review. raised by Ivan.  
… if folks have questions/concerns please jump on the queue.  
… seems straightforward and non-controversial; don't expect it to sit out too long.  

> *Manu Sporny:* agree, PR seems fine.

#### 1.7. Add language on mitm, replay, spoofing attacks (pr vc-data-model#1238)
{: #section1-7}

_See github pull request [vc-data-model#1238](https://github.com/w3c/vc-data-model/pull/1238)._

<!-- issue w3c/vc-data-model/1238 -->



**Brent Zundel:** moving on to 1238 Add language on mitm, replay, spoofing attacks.  

**Gabe Cohen:** Related to issue 1138 that oliver raised to add security considerations that VCDM does not prevent... attempted to address those considerations here, open to changes/suggestions for the language.  

**Manu Sporny:** couple of questions: replaced the token binding with mitm/cloning attacks. and broke those down into different items. this is in security considerations is that right?  

**Gabe Cohen:** yes.  

**Manu Sporny:** kind of gets into protocol which I think is fine in the security section. do not talk to timing, which I can add as a comment. MITM is prevented with a securing mechanism.  
… does MITM have a place here?  

**Gabe Cohen:** was in there, just moved, open to removing.  

**Manu Sporny:** IETF has a list for recommendations for security sections. might want to re-review that list.  

**Gabe Cohen:** was unaware of the list. happy to go through it.  

#### 1.8. Vocabulary fixes (pr vc-data-model#1241)
{: #section1-8}

_See github pull request [vc-data-model#1241](https://github.com/w3c/vc-data-model/pull/1241)._

<!-- issue w3c/vc-data-model/1241 -->



**Brent Zundel:** next PR is 1241 vocab fixes. seems straightforward. Orie do you want to speak to it?  

_See github issue [vc-data-model#1240](https://github.com/w3c/vc-data-model/issues/1240)._

<!-- issue w3c/vc-data-model/1240 -->



**Orie Steele:** copy-paste bug in the render method. question I had asked to Ivan on the value of the label property. related to issue linked (1240). slightly improves our vocabulary.  

#### 1.9. Add sd-jwt registered claim names to v2 context (pr vc-data-model#1242)
{: #section1-9}

_See github pull request [vc-data-model#1242](https://github.com/w3c/vc-data-model/pull/1242)._

<!-- issue w3c/vc-data-model/1242 -->



**Brent Zundel:** 7 hours old. happy to hear consideration [none]. moving to last PR 1242. add sd-jwt claims to the v2 context. Orie can you introduce?  

**Orie Steele:** similar to the other context changes which added reserved claim names by the securing mechanisms that are not data integrity, this adds reserved claim names from SD-JWT. a little different since it's not an RFC and could change. extra caution warranted.  
… would be great to hear from Kristina/Oliver if they don't intend to add these claim names. would give claim names consistent application in the v2 context.  

**Brent Zundel:** comments?  

**Manu Sporny:** only comment is the "..." claim used in SD-JWT which was surprising. dont think it creates any type of issue. seems like a valid fragment identifier. any plans to change it?  

**Manu Sporny:** first two seem stable, "..." is ???  

**Orie Steele:** the "..." is used to annotate elements of an array which are disclosed individually; don't know if it will change. up to the OAuth WG, since it's their adopted work item.  

**Brent Zundel:** we already have the "this may change during CR" caveat in place. we are OK there. if not registered in time, or registered differently, we can adjust.  
… any other comments on PRs before issue triage?  

### 2. Issue Triage.
{: #section2}

> *Brent Zundel:* [https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+-label%3Abefore-CR+-label%3Apost-CR+sort%3Aupdated-asc](https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+-label%3Abefore-CR+-label%3Apost-CR+sort%3Aupdated-asc).

**Brent Zundel:** moving to issues. links should be right. list of all issues without before/post CR label in order of least recently updated ^.  
… looking for feedback, is this before CR or after CR. who can be assigned?  

#### 2.1. VCDM editors draft has incorrect link for published version (issue vc-data-model#1224)
{: #section2-1}

_See github issue [vc-data-model#1224](https://github.com/w3c/vc-data-model/issues/1224)._

<!-- issue w3c/vc-data-model/1224 -->



**Brent Zundel:** first issue: 1224. noticed in the ED there wasn't a link to the published version that was working. I opened. can be post-CR but should be straightforward.  

**Manu Sporny:** did check when I saw it raised and think all links resolved unless I was clicking on the wrong link. latest ED and published version links work. and this version works. all go to the appropriate 2.0 places.  

**Brent Zundel:** will close.  

#### 2.2. Document the value of processing as JSON-LD (issue vc-data-model#1227)
{: #section2-2}

_See github issue [vc-data-model#1227](https://github.com/w3c/vc-data-model/issues/1227)._

<!-- issue w3c/vc-data-model/1227 -->



**Brent Zundel:** next 1227. document the value of processing as JSON-LD; already assigned to Manu. believe this is before CR. is that accurate? could be after...not normative.  

**Manu Sporny:** only way this becomes before CR is if it is normative..don't see us doing that.  

**Brent Zundel:** post-CR unless objections.  

**Orie Steele:** sort of object. still trying to understand what having a normative context & vocab means. expecting to see some substantial language in the section on the value of them being normative. have not seen that. worried that marking post-CR will mean we'll never see it.  
… risk not getting the kind of language we need, and then not being able to get it after CR. comes up in the graph comment...would like to see some articulation of the value of the graph, since it is not discussed anywhere. the value of the JSON-LD section should be good and explain how normative deps are used.  

**Brent Zundel:** Orie can you be assigned too?  

**Orie Steele:** I'm not an RDF expert.  

**Brent Zundel:** will label as before CR and move to next.  

**Manu Sporny:** it's hard to write spec text around this. can take a shot. Orie, what you're asking for is [metaphor about rocks].  
… if you could write something that would be helpful.  
… bulleted list of items you want in that section would be useful. would also need to talk about normative language you would like to see in there. if we don't have that, then it is a post-CR thing.  

#### 2.3. [VC-JWT] Reference is wrong (issue vc-data-model#1233)
{: #section2-3}

_See github issue [vc-data-model#1233](https://github.com/w3c/vc-data-model/issues/1233)._

<!-- issue w3c/vc-data-model/1233 -->



**Brent Zundel:** next issue 1233...reference to VC-JWT is wrong, has a PR; marking as PR exists.  

#### 2.4. Add references to Sub-Resource Integrity (issue vc-data-model#1237)
{: #section2-4}

_See github issue [vc-data-model#1237](https://github.com/w3c/vc-data-model/issues/1237)._

<!-- issue w3c/vc-data-model/1237 -->



**Brent Zundel:** next issue 1237 to add references to SRI..believe its safe to assume we can label it as post-CR.  

**Gabe Cohen:** labeling it as post-CR is fine.  

**Brent Zundel:** no objections; post CR.  

#### 2.5. `expires` header for https://www.w3.org/2018/credentials/v1 is in the past (issue vc-data-model#1239)
{: #section2-5}

_See github issue [vc-data-model#1239](https://github.com/w3c/vc-data-model/issues/1239)._

<!-- issue w3c/vc-data-model/1239 -->



**Brent Zundel:** next up 1239 - expires harder for v1.1 context is in the past. would love for someone to tell me what this means.  

**Manu Sporny:** couple of ways we can address this. ask W3C to set the expires header to a long value. 1-30 days is probably fine. could convey that the 2.0 spec says cache the context indefinitely, make sure the issue raiser is aware. assignee should be Ivan. I will comment.  

**Brent Zundel:** happy to assign Ivan, appreciate you adding comments. believe this does not touch the data model for v2, should be fixed, but no need to continually discuss. post CR it is.  

#### 2.6. Recommend that DIDs are used with VCs (issue vc-data-model#1243)
{: #section2-6}

_See github issue [vc-data-model#1243](https://github.com/w3c/vc-data-model/issues/1243)._

<!-- issue w3c/vc-data-model/1243 -->



**Brent Zundel:** next issue is 1243 recommend that DIDs are used in VCs raised by gabe.  

**Manu Sporny:** agree to highlight the importance of DIDs...only problem would be around normative guidance..concern there is that a concept of a controller document can be published on the web (http); certain W3C members are cranky with DIDs. current spec tries to be agnostic to URL schemes.  
… this may be asking for more trouble than it's worth.  
… adding normative language may be a bridge too far.  

**Gabe Cohen:** I do think that usage of DIDs barring some objections that might or might not have logical weight, are well aligned w/ principles/data model -- taking stronger stance on privacy-promoting technology such as DIDs... we should consider that.  

**Michael Jones:** DIDs are just a key look up method, you can look up keys in many ways that are privacy preserving.  

**Gabe Cohen:** Some DID Methods have stronger guarantees than web domains.  

> *Kristina Yasuda:* -1 to anything stronger that implying DIDs are possible to be used.

> *Sebastian Crane:* +1 to possibility of pre-CR.

**Brent Zundel:** post CR or before CR?  

**Michael Jones:** post CR or close.  

**Brent Zundel:** not hearing any objections to post CR.  

**Gabe Cohen:** Happy to be assigned, but won't work on anything until there is consensus.  

#### 2.7. Minor change to validFrom requested (issue vc-data-model#1231)
{: #section2-7}

_See github issue [vc-data-model#1231](https://github.com/w3c/vc-data-model/issues/1231)._

<!-- issue w3c/vc-data-model/1231 -->



**Brent Zundel:** next is 1231. minor change to validFrom. change to normative language so before CR.  

#### 2.8. Revisit validation vs verification (issue vc-data-model#1232)
{: #section2-8}

_See github issue [vc-data-model#1232](https://github.com/w3c/vc-data-model/issues/1232)._

<!-- issue w3c/vc-data-model/1232 -->



> *Kristina Yasuda:* on previous sd-jwt issue, yes, sd-jwt spec will register three new JWT claims _sd and _sd_alg and `...`.

**Brent Zundel:** assigned to manu and we will move forward. 1232 - revisit verification vs validation, assigned to Joe.  

**Joe Andrieu:** only assigned 16m ago! not clear whether before/after CR, so let's go with before and maybe a draft PR.  

#### 2.9. Address normative concept of VerifiableCredentialGraph (issue vc-data-model#1240)
{: #section2-9}

_See github issue [vc-data-model#1240](https://github.com/w3c/vc-data-model/issues/1240)._

<!-- issue w3c/vc-data-model/1240 -->



**Brent Zundel:** next issue is 1240. raised by Orie today. already touched on briefly in other conversations. what does it entail? before or after CR?  

**Orie Steele:** don't think we'll make any changes to this part. Ivan thinks it will be a breaking change to adjust this property. It is a graph identifier not a predicate or class. Probably few people in the WG understand this. Important to separate this concept.  
… RDF experts are excited about this property. struggling to see how anyone benefits from it. would be good to focus on w.r.t explaining the value of the data model being JSON-LD.  

**Brent Zundel:** before or after CR?  

**Orie Steele:** if we were to remove, that would be a breaking normative change. going to assume no one in the WG understands it well enough to have it removed. should be post CR with the assumption that no one really understands the value of processing the data model with this term.  
… maybe the value of JSON-LD processing is post-CR and Manu shouldn't write that section now. pretty confused of the value of the data model as RDF; this issue would help with it.  

**Manu Sporny:** for the same reason a VP can have multiple VCs, and each VC is in a separate bucket, this is so that we can talk about the claims in each bucket separately. talk about the bucket itself. who made claims, statements. to do that we need to contain the data in something. that's what the graph is there to do.  

> *Orie Steele:* sounds like we are well on our way to describing the value of JSON-LD, and it has something to do with RDF buckets : ).

**Manu Sporny:** when you have two people say things we put each one of them in a bucket. JSON does not have this concept, you would have to create a bespoke data format to do that. RDF/LD have it built in automatically. benefit of using a graph based data model = buckets.  

**Brent Zundel:** based on Orie's question and your response, see this as a sub-issue of the value of JSON-LD issue you're already going to attempt. labeling as before CR, since the other one is too.  

> *Dmitri Zagidulin:* I'm kind of failing to see what this issue has to do with the JSON-LD issue...

**Manu Sporny:** would that address your concern?  

**Orie Steele:** yes would help with this property and the proof container - two places with the container syntax/context. these sections cry out for 'what is the value of this'. should be language around those pieces. left a comment on the previous issue asking you to comment on this issue.  

> *Orie Steele:* dmitriz you are probably struggling to see the value of JSON-LD then, and you are in good company... hence our need to describe that value as we have already described how you don't need it when processing the data model as JSON.

### 3. closing.
{: #section3}

**Brent Zundel:** thanks everyone, tomorrow's call will be better focused on before CR issues that are open. have 9 PRs open. please review. quite a few are on track to be merged.  
… if assigned to a before CR issue I recommend that you click the link in the agenda which - I am confident is correct this time - in order of discussion tomorrow. please be prepared to discuss it.  

---
