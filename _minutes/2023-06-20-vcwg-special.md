---
layout: minutes
date: 2023-06-20
title: Verifiable Credentials Working Group Special Topic Call on Status Lists — 2023-06-20
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-06-20-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Status Lists — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Status Lists",
        "dateCreated": "2023-06-20",
        "irc": "vcwg-special",
        "datePublished": "2023-06-21",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Status Lists",
            "startDate": "2023-06-20",
            "endDate": "2023-06-20",
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
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Michael Prorock"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
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
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Kristina Yasuda"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Status Lists — Minutes
{: .no_toc}



**Date:** 2023-06-20

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20230620T180000/) and the [IRC Log](https://www.w3.org/2023/06/20-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Michael Prorock, Gabe Cohen, Phillip Long, Joe Andrieu, Manu Sporny, Michael Jones, Hiroyuki Sano, Orie Steele, Kristina Yasuda

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Gabe Cohen

## Content:
{: .no_toc}

* TOC
{:toc}
---




### 1. Support for multiple status codes (pr vc-status-list-2021#65)
{: #section1}

_See github pull request [vc-status-list-2021#65](https://github.com/w3c/vc-status-list-2021/pull/65)._

<!-- issue w3c/vc-status-list-2021/65 -->



**Brent Zundel:** agenda today is pr #65 in the vc-status-list repo.  
… plan today is to (1) time to mprorock for goals/what he hopes to accomplish. (2) if we can come to consensus and merge lets do that.  

**Michael Prorock:** walking through the PR. There is a common case. rather than only a boolean option for a status and its type by status purpose, ability for one of multiple statuses.  
… IoT case: may have system status from a set. with VCs desire need to attach one or more of those statuses. this PR addresses that need.  
… questions: what if I want multiple statuses? that is beyond the scope of this PR which is just focused on choosing one status out of many.  
… status codes are well known up front and don't change often. having a change is worth having a new credential itself. in order to have this work with existing status purpose we need a new status purpose to indicate there's a status message attached. indicate how many bits are associated with the status code. based on that size able to represent status (e.g. boolean would be 1 bit).  
… could be more than 1 bit. let you do lookup tables. e.g. get status position 3, multiple size by 3, unpack bitstring...low lift for impls. just need to see if there's a size reflected, then can have >1 status code.  
… dlongley brought up a good point--we may want to make sure verifiers of a credential know if there's a verification step associated with the cred. is it informational, or does it impact the credential's validity?  
… need to communicate to a verifier whether they should look for a certain status code, could be confusion here.  
… strawman open proposal: should we have a status purpose that indicates it's informational, and a purpose that indicates it has verification information as well.  
… manu has raised concerns around privacy. should be follow-on PRs to address. e.g. customs, cross border traffic, already you are correlating a lot. may not be appropriate to take this until its well understood and applied to many use cases. want to make sure theres no correlation, or very little. if we could get language on this call happy to add it, or a subsequent PR.  
… in the PR line 621 in the files that's where the examples start. makes sense to start there.  

**Brent Zundel:** looking for concrete proposals to move this forward.  

**Ted Thibodeau Jr.:** suggest Mike go through and approve/reject changes made; will be easier to review after.  

**Michael Prorock:** were some conflicts so I didn't yet, let's see if we can hash it out here so I can approve/deny appropriately.  

**Ted Thibodeau Jr.:** comment on those you see that in, mostly just fixing typos.  

**Michael Prorock:** will take a look.  

**Manu Sporny:** agree this is a legitimate use case. for a shipment, want to accept multiple messages associated with it. number of concerns highlighted with the PR...but to be clear we should figure out a way to address this use case. could potentially be addressed in the way proposed now, but concerned it's conflating two things we won't want to conflate.  
… first - binary bit field. in current incarnation sets to create a privacy preserving mechanism to communicate binary status. expanding into multiple messages changes privacy characteristics of the mechanism. now have more bits to correlate the data.  
… maybe could address in the security considerations, but I am concerned with that. it is about messages-- want to convey a series of messages about a subject, a credential, which is significantly different than what we were doing before.  
… has been an attempt to address that with adding a verify flag with every message. concern there is that this new message mechanism is suggested to be optional. if you don't implement it, what is the default supposed to be? if not verify, and you don't verify...could result in a failure to verify which is not a desirable outcome.  
… wondering if we can split the feature into two. make the spec about conveying status info as is, simple boolean. create another thing in the spec which talks about status messages, which keep all the qualities in the PR, but with a clean separation between the two in the spec. can use the same algs.  
… try to split it into a different type of thing, where you can have much stronger statements about impl the normative statements about that thing. right now both features are stomping on each other. cleaner to separate.  

> *Phillip Long:* +1 to keeping on specification simple, and another that is designed for message complexity.

**Michael Prorock:** suggest, if that's the case, that revocation and suspension are misnamed and are verification lists not status lists. the status purpose does provide that clean separation. if we want to change 'status' to 'informational status message' or other, that's a fine way to break that separation.  
… suggest status and status-message or status-verification. if verify/verification/whatever is in the status purpose then it indicates there's verification info in the status.  
… there are cases, like Kristina commented, where 0 bit = fine, 1 = revoked, 2 = suspended, etc and there's a flag carried along. might be a little messy. want as good separation as we can. if status purpose is not 'what is the purpose of this status attached' not sure what it is for.  

**Joe Andrieu:** also think we have conflated the two things in an unfortunate way. calling it a status is the error. most verifiers don't care why they shouldn't verify it. just should i accept it or not. does the issuer still stand by it?  

> *Orie Steele:* Verifiers are never required to review issuer claims...

**Joe Andrieu:** a single boolean makes a lot of sense - like for drivers license. if a police officer pulls you over they don't care if it's suspended/revoked, just that it's still valid. maybe should separate into two. status list in the response shows you where you can get status messages. don't know what the best mechanism is. a simple binary mechanism is useful.  
… separate out more privacy-risky attributes.  

**Orie Steele:** glad we're saying the word 'verifier' so much. think we have language in the current spec that make it difficult around validation/verification. our spec does not create normative requirements for verifiers (as far as I'm aware).  
… don't need to check a digital signature, understand an algorithm, understand the entity is known/trusted, dereference key material, don't need to check statuses of credentials.  
… say that because we want to correct this problem and it would require some additional responsibilities for verifiers. verifiers would now have to perform some operation on json to determine whether it is acceptable or not.  
… can always ask a verifier to do these things, but they can decide they are not going to. our spec does not advise on how to use these properties. whether or not we support statuses in this way or another, we still have a problem of defining verification in a usable manner.  

> *Orie Steele:* There are normative statements here: [https://w3c.github.io/vc-data-model/#status](https://w3c.github.io/vc-data-model/#status).

> *Orie Steele:* > The precise content of the credential status information is determined by the specific credentialStatus type definition, and varies depending on factors such as whether it is simple to implement or if it is privacy-enhancing.

**Manu Sporny:** agree w/a lot of what Orie said. specifically went out of our way to not make them normative statements. wanted verifiers to be able to determine that. this PR raises how status list should interplay there. as JoeAndrieu_ said, there is a conflation in the spec now...not because of this PR, but it is bringing it to light. we want to have both things--(1) I still stand by this thing everything's good (2) I no longer stand by this thing and here are messages that convey why.  
… need both and trying to do both in this PR is probably the wrong way to go about designing this. need to have a re-design discussion on how status list could change, re:Orie and JoeAndrieu_'s concerns.  
… while revocation, suspension, informational messages are different status purposes they serve different needs. the first two are a "do I still stand by this or not" and the third is a mixture of the two.  
… feels like we should split this into those two categories: stand by credential and reasons why may not stand by this credential.  

> *Orie Steele:* and need to be clarified, made testable... or removed.

> *Orie Steele:* I think the normative statements in the core data model are untestable.

> *Joe Andrieu:* which statements Orie?

> *Joe Andrieu:* all of them are untestable?

> *Orie Steele:* "id" and "type" part is testable (but useless): [https://w3c.github.io/vc-data-model/#status](https://w3c.github.io/vc-data-model/#status).

> *Michael Prorock:* hence different "statusPurpose".

> *Michael Prorock:* can we call this "informationalStatus".

**Michael Prorock:** question to Manu--can we call this informationalStatus for the status purpose?  

**Manu Sporny:** yes, a clear separation.  
… when you say informational status do you mean that completely---will not reject if any bits are flipped?  

**Michael Prorock:** will not tell someone what their business rules are, but will tell them it's informational.  

> *Michael Prorock:* +1 orie.

**Orie Steele:** you can't tell a verifier what to do with this JSON. fundamentally this is the position the spec is in today.  
… normatively can't tell a verifier to check a status. but do need to define what verification means.  
… should concretely define what verification is, which cases lead to true or false with some reason. if we're not going to define all that, then don't see a different between informational and revocation/suspension.  

**Joe Andrieu:** Orie was mostly aligned with what I'm about to say. hiccup which got me was about rejecting or not, which includes validate/verify. can't tell anyone how to validate--their business rules are up to them.  
… we can say, if you are verifying here is what you must do, and if you don't you're not a conformant verifier.  
… we can say - if there's a property of this kind you must go check it as a verifier.  

> *Orie Steele:* This section is marked "informative" [https://w3c.github.io/vc-data-model/#status-0](https://w3c.github.io/vc-data-model/#status-0).

> *Orie Steele:* If the credentialStatus property is available, the status of a verifiable credential is expected to be evaluated by the verifier according to the credentialStatus type definition for the verifiable credential and the verifier's own status evaluation criteria. For example, a verifier can ensure the status of the verifiable credential is not "withdrawn for cause by the issuer".

> *Orie Steele:* ^ we say this *informatively*.

> *Orie Steele:* This means implementers are not required to care about it... at al.

> *Orie Steele:* "his includes checking that: the credential (or presentation) conforms to the specification; the proof method is satisfied; and, if present, the status check succeeds. Verification of a credential does not imply evaluation of the truth of claims encoded in the credential..".

**Michael Prorock:** brentz if OK with you would like to work on a set of strawmans to get feedback on to move this forward, mindful of time.  

**Brent Zundel:** yes, 20m left.  

> *Orie Steele:* Also fix [https://w3c.github.io/vc-data-model/#dfn-verify](https://w3c.github.io/vc-data-model/#dfn-verify).

**Michael Prorock:** concretely. remove mention of verify property from a status message and remove from examples. would that help improve this PR?  

**Manu Sporny:** wouldn't object to it, but dlongley brought it up and he's not here.  
… I am thinking we should remove revocation and suspension and unify across all the properties. need a chance to think through that from a privacy perspective.  

> *Orie Steele:* We have really, been bad, regarding normative and informative text in the core data model.... there are a lot of sentences, that should either be normative, or not be in the document, see [https://w3c.github.io/vc-data-model/#dfn-verify](https://w3c.github.io/vc-data-model/#dfn-verify).

**Manu Sporny:** as Kristina said, if we merge to just a status mechanism we need to have some well known values like revocation and suspension, which raises the question about whether they need to be URLs, or strings...if we're going to re-design it'll take more than 20m.  

**Michael Prorock:** if we can get the PR merged we suddenly have the ability to attach a binary value to an arbitrary message. we then have a basis to ask some of those questions. if we don't we're blocking a whole bunch of implementations, which is frustrating.  
… assuming we approach it right let's not ask all questions up front but be open to amending after.  

**Orie Steele:** wondering if the vc-status-list work item, which the group has adopted, maybe it needs more incubation. maybe we should add reserved terms definitions under w3 org instead of w3c. if we can't make changes to the doc then maybe it needs to be matured further. so many work items to deliver on.  
… would it be the end of the world if w3id.org defined these terms?  

> *Kristina Yasuda:* +1 to move statusList2021 back to CCG for incubation.

**Manu Sporny:** I hesitate, it's a good suggestion if we had more time to do it. a number of us want to get this out there and done. don't think it'll take an enormous amount of work to refactor. maybe 1-2 calls to do it.  
… to unify it won't take a lot of time. can be done in parallel. can put multiple proposals together. a couple weeks to do it. can get the feature set more unified.  
… -1 to going back to incubation.  

> *Kristina Yasuda:* if the WG questions the underlying premise of the status list draft at this point in time, it should go back to incubation.

**Michael Prorock:** also -1 to moving it out. don't want to start another standardization process elsewhere to get it out. we have customers and governments looking to use it.  
… if we pull verify item, and flag some issues, both manu and I are committed to getting this done and not wait until the next version.  

**Manu Sporny:** in the name of compromise what we could do is put an issue marker behind ttl, status message, draft alternative text and then just merge the PR noting clearly that we will modify to try to unify the spec more clearly.  
… we want this in the spec just figuring out the best way to unify both approaches.  

> *Orie Steele:* +1 Joe.

> *Orie Steele:* we really, really... need to fix the core data model, and its informative and normative guidance...

**Joe Andrieu:** maybe we're in the wrong repo. semantics in vc-core we may need to fix. semantics need to go into the vc data model on to how get additional data, not this work item.  

**Michael Prorock:** 100% agree, may not be in the wrong repo, but 'what should i do as a verifier' should be in the core data model.  
… manu if you open issues and link them then I will link them in the spec. where does that leave us? not a stretch, just an extension of binary.  

> *Orie Steele:* We are in the "right repo" for this "RDF type"... but the core data model says you don't have to care about it... at all, just need `id` and `type`.

> *Manu Sporny:* yes, I can open issues.

> *Manu Sporny:* yes, it moves us forward wrt. merging.

**Orie Steele:** agree with what Joe said. core data model said you need an id and type, not anything about what you'll do with those things. if you have different verifier behavior for every RDF type (what we're trying to say?) then I do think this needs to be fixed in the core data model and this status work item.  

**Brent Zundel:** course of action-moving forward - issues will be raised and issue markers added to this PR, then the PR will be merged. additional concerns related to this in the VCDM. let's check our existing backlog to see if there's already an issue, otherwise open a new one.  

> *Orie Steele:* related issue: [https://github.com/w3c/vc-data-model/issues/1148](https://github.com/w3c/vc-data-model/issues/1148).

**Brent Zundel:** 8m otherwise we can call it a day.  

> *Orie Steele:* Related issue: [https://github.com/w3c/vc-data-model/issues/991](https://github.com/w3c/vc-data-model/issues/991).

**Michael Prorock:** my suggestion is we remove the notion of verifies as an additional property until core data model issues around how we handle this are resolved.  
… any objection to this?  

**Brent Zundel:** hear none.  
… thanks all.  

---
