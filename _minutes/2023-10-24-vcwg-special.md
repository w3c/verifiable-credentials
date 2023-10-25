---
layout: minutes
date: 2023-10-24
title: Verifiable Credentials Working Group Special Topic Call on outstanding PRs — 2023-10-24
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-10-24-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on outstanding PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on outstanding PRs",
        "dateCreated": "2023-10-24",
        "irc": "vcwg-special",
        "datePublished": "2023-10-25",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on outstanding PRs",
            "startDate": "2023-10-24",
            "endDate": "2023-10-24",
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
                            "name": "Andres Uribe"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
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
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
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
                    "name": "Paul Dietrich"
                }
            ]
        },
        "resolution": [
            {
                "@type": "Resolution",
                "resolution_number": 1,
                "resolution_text": "The working group will create a Controller Document specification, with the intent that it become a recommendation, containing functionality and definitions that are common to both securing specifications (VC JOSE COSE and Data Integrity)."
            },
            {
                "@type": "Resolution",
                "resolution_number": 2,
                "resolution_text": "Once the Controller Document specification is in the Candidate Recommendation phase, the corresponding Controller Document functionality will be removed from both securing specifications and replaced by normative references to the Controller Document specifications."
            },
            {
                "@type": "Resolution",
                "resolution_number": 3,
                "resolution_text": "The securing specifications will profile the shared document as needed."
            }
        ]
    }

---

# Verifiable Credentials Working Group Special Topic Call on outstanding PRs — Minutes
{: .no_toc}



**Date:** 2023-10-24

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20231024T180000/) and the [IRC Log](https://www.w3.org/2023/10/24-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Orie Steele, Gabe Cohen, Andres Uribe, Brent Zundel, Dave Longley, Hiroyuki Sano, Michael Jones, Ted Thibodeau Jr., Manu Sporny, David Lehn, Joe Andrieu, Shigeya Suzuki, Phillip Long, Paul Dietrich

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Andres Uribe

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. Controller Documents.
{: #section1}

_See github issue [vc-data-model#1307](https://github.com/w3c/vc-data-model/issues/1307)._

<!-- issue w3c/vc-data-model/1307 -->



_See github issue [vc-data-integrity#216](https://github.com/w3c/vc-data-integrity/issues/216)._

<!-- issue w3c/vc-data-integrity/216 -->



_See github pull request [vc-data-integrity#219](https://github.com/w3c/vc-data-integrity/pull/219)._

<!-- issue w3c/vc-data-integrity/219 -->



**Brent Zundel:** Just for tracking purposes. Where we're at: DI and vc-jose-cose specify some sort of controller document.  
… The differences have led to the current proposal to have a separate document that is a controller document spec, which we're expecting to be minimal.  
… selfissued reached out to the chairs with a set of proposals. Suggestion is to go over them in this call.  

> *Orie Steele:* You can put the resolution on the issue as well.

> *Orie Steele:* or rather the proposals.

> *Michael Jones:* Proposed Resolution 1: The working group will create a Controller Document specification containing functionality and definitions that are common to both securing specifications (VC JOSE COSE and Data Integrity).

**Michael Jones:** The goal here is to have a path forward for securing specs and controller docs.  

> *Michael Jones:* Proposed Resolution 2: The corresponding Controller Document functionality will be removed from both securing specifications and replaced by use of the new shared document.

> *Michael Jones:* Proposed Resolution 3: The securing specifications will profile the shared document as needed.

> *Michael Jones:* Proposed Resolution 4: The shared document shall not include the use of multibase or multihash. This functionality will instead be included in the Data Integrity-specific profile.

> *Michael Jones:* Proposed Resolution 5: The shared document does not have to include key discovery using .well-known URLs. If it is not included, it will instead be included in the VC JOSE COSE-specific profile. (The working group can choose to include it as a separate decision, if desired).

> *Michael Jones:* Proposed Resolution 6: We will create the new shared document and use it from the securing specifications before either goes to CR.

> *Michael Jones:* And if we have time, we should pass one of:.

> *Michael Jones:* Proposed Resolution 7: The shared document will include key discovery using .well-known URLs.

> *Michael Jones:* Proposed Resolution 8: The shared document will not include key discovery using .well-known URLs.

**Brent Zundel:** Proposals build on one another. Let's get started.  

**Manu Sporny:** Looking at the proposals I can see controversy in 4, 5, 6, 7 and 8. Concerned with this being reopened before DI going into CR.  
… There's a clear preference in 4-8 for vc-jose-cose.  
… Feels like it's going to put the work on hold for securing.  

**Michael Jones:** No intent to have preferences for a single securing spec.  
… Intended to be even handed, and give us a clear path forward as a WG.  
… I'd like WG to be on record on whether we'll do the split, regardless of whether we'll go to CR or not.  

**Orie Steele:** Process question, is CR a thing the WG decides?  

**Brent Zundel:** The WG resolves to go to CR (which we've done for vc-json-schema, and others).  
… Then the editors move those specs by clicking the correct buttons and drafting docs.  

> *Michael Jones:* +1.

> *Andres Uribe:* +1.

> *Gabe Cohen:* +1.

**Manu Sporny:** I'd change to "will attempt to". It might not be successful.  

**Brent Zundel:** I'll wordsmith this.  

**Michael Jones:** Feels like it's watered down. I would rather be on record on what we plan to do. Ok if we fail.  

> **Proposed resolution: The working group will create a Controller Document specification, with the intent that it become a recommendation, containing functionality and definitions that are common to both securing specifications (VC JOSE COSE and Data Integrity).** *(Brent Zundel)*
{: .proposed_resolution}

> *Brent Zundel:* +1.

> *Michael Jones:* +1.

> *Orie Steele:* +1.

> *Manu Sporny:* +1.

> *Gabe Cohen:* +1.

> *Shigeya Suzuki:* +1.

> *Andres Uribe:* +1.

> *Dave Longley:* +1.

> *Core5069:* +1.

> *Ted Thibodeau Jr.:* +1.

> ***Resolution #1: The working group will create a Controller Document specification, with the intent that it become a recommendation, containing functionality and definitions that are common to both securing specifications (VC JOSE COSE and Data Integrity).***
{: #resolution1 .resolution}

**Manu Sporny:** Needs to say something about timing on when the functionality will be removed.  

> *Ted Thibodeau Jr.:* +1 manu.

**Michael Jones:** I've intentionally worded this so they're independent.  
… Prop 6 talks about timing. I don't want to talk about it now.  

**Ted Thibodeau Jr.:** Batch resolutions need to be handled as batch proposals. Doing it in the proposed order leaves significant holes.  
… In the proposed order it's possible to create a doc that doesn't go into CR, after moving functionality. If that comes to pass, we'll need to reinsert it.  
… Don't think this piecemeal proposal is viable.  

**Brent Zundel:** Wordsmithing all at once seems difficult, but we can attempt.  
… Open to concrete suggestions on how we can move forward.  

**Dave Longley:** Thinking we need to include intent. Re: path forward - a sticking point is whether this delays CR.  
… Will this enable us to move forward without delaying CR?  

**Manu Sporny:** I made the concrete suggestion that we specify when the functionality will be removed (after controller document enters CR).  
… That should be a fine time to remove.  
… Trying to get the proposal to pass.  

> *Core5069:* +1 to TallTed's proposal.

**Michael Jones:** Couldn't make last week call. Issue says it's a pre-CR issue. We should deal with it. Timing should be a separate proposal.  

**Orie Steele:** Seems like what we're saying is don't have anything delay DI getting into CR.  
… Maybe we do the other proposals before we address this one?  

**Brent Zundel:** Are you proposing we tackel #6?  

**Manu Sporny:** I think this is a bad idea. We've already went through the logic of not delaying CR in multiple calls.  

> *Dave Longley:* agree with Manu that this is a bad idea, i will not vote to delay CR.

**Manu Sporny:** All publications are aiming to be published on nov 7.  
… Was initially a +1 to moving the controller document outside, because it looked like we would get to some common ground.  
… That doesn't look to be the case. We originally proposed moving it outside of DI as-is, into the outside doc.  

> *Orie Steele:* We have time for 2 CRs afaik.

**Manu Sporny:** What we're seeing is that multiple changes are being asked (removing some pieces).  

> *Brent Zundel:* chair hat off, I would -1 this. I believe we should go into CR with Data Integrity and change it should we succeed with a common controller document.

**Manu Sporny:** I think we shouldn't have that affect the DI timeline. If we succeed getting the controller document into CR, then we have created something common.  
… If we are successful moving out, and we come to consensus that normative changes need to happen in the controller document, then DI has to go into CR review again. That is a 28 day turn around.  

> *Ted Thibodeau Jr.:* Is "either" in prop6 meant to refer to the two securing specs (VC JOSE COSE and Data Integrity) plus the new Controller Document? I think that "either" should be "any", if so. If not, please explain what this "either" is meant to refer to.

**Manu Sporny:** I'm not convinced we'll get the consensus. Blocking DI would delay publication even more.  

> *Shigeya Suzuki:* I read through data integrity last weeks and feels that placement of the controller document in DI looks odd and difficult to understand.

**Michael Jones:** I think we should run the proposals. The editors of vc-jose-cose will appreciate understanding the intent.  

> *Dave Longley:* we already passed proposal 1, that indicates an intent to have one.

**Brent Zundel:** The intent is to have 1.  
… We can run the proposals and then see where people are at.  
… Let's all take some deep breadths.  
… Any proposal that calls for a delay of DI going into CR is clearly not going to pass.  

> *Core5069:* that shared document goes to cr?

> *Phillip Long:* +1 for that proposal.

**Brent Zundel:** Would anyone -1 this? If so, what changes would you like to see?  

> *Michael Jones:* preaent+.

**Brent Zundel:** I think this would still possibly force a second CR.  

**Ted Thibodeau Jr.:** Not a -1. Concerned this doesn't say anything about when it's going to happen.  

**Manu Sporny:** The belief is that this modification would not cause a second CR for DI, because implementations would not have to change the way they're implemented.  
… If it doesn't, it's because the group has come to consensus that we're ok going through a second CR. It's quick as it's only 30 days turnaround.  

**Paul Dietrich:** Is this a merge, or just copying text?  

**Ted Thibodeau Jr.:** Have of my concern is that there might already be differences between docs. I don't know.  
… The second piece is that as a stand alone document, it will get issues. There is no guarantee that implementations will not need to change.  

**Brent Zundel:** The paths before us: 1) We copy paste (with slight modifications) from DI/vc-jose-cose to this doc. No changes to implementation in DI, not blocking.  
… 2) We cannot get this document into CR. So DI will still profile, and vc-jose-cose will profile. No common ground, we failed.  
… There are paths in the middle, which include going into a second CR phase.  
… Believe it's possible to get to 1), which is the happy path.  

> *Ted Thibodeau Jr.:* +1 manu's new draft.

> **Proposed resolution: Once the Controller Document specification is in the Candidate Recommendation phase, the corresponding Controller Document functionality will be removed from both securing specifications and replaced by normative references to the Controller Document specifications.** *(Brent Zundel)*
{: .proposed_resolution}

> *Manu Sporny:* +1.

> *Dave Longley:* +1.

> *Andres Uribe:* +1.

> *Ted Thibodeau Jr.:* +1.

> *Gabe Cohen:* +1.

> *Phillip Long:* +1.

> *Orie Steele:* +1.

> *Brent Zundel:* +1.

> *Core5069:* +!

> *Shigeya Suzuki:* +1.

> *Paul Dietrich:* +1.

> *Core5069:* +1.

> *Michael Jones:* Or we rip controller document support out of vc-jose-cose if we fail to reach consensus on a controller document spec.

> *Michael Jones:* +1.

> ***Resolution #2: Once the Controller Document specification is in the Candidate Recommendation phase, the corresponding Controller Document functionality will be removed from both securing specifications and replaced by normative references to the Controller Document specifications.***
{: #resolution2 .resolution}

**Brent Zundel:** Proposed resolution #3 is straigthforward. Let's do it.  

**Manu Sporny:** Question for selfissued, can we downscope them? I saw a proposal to remove content from them. That says we would be removing existing content.  
… That raises the question, does `publicKeyJwk` stay there?  

**Michael Jones:** The intent isn't to profile to remove stuff. The controller document is meant to have stuff in common.  
… You would profile it to add things that aren't in common.  

**Manu Sporny:** Controller documents are meant to have verification material. That's my concern, we're talking about gutting what controller documents are about.  
… It's going to take effort from the group to get there. We can try it, but it's not what I was expecting when people said profile. Profile usually involves a subset.  
… The other thing they have in common is that DI doesn't shove `publicKeyJwk` out.  

> *Dave Longley:* i did not vote for an "end around" way to make VC-JOSE-COSE preferences the default.

> *Dave Longley:* there is no common "preference" for JWKs.

> *Orie Steele:* I am concerned about giving bad security advice... regardless of which document the advice is in.

**Ted Thibodeau Jr.:** Struggling not to feel ambushed by the proposals. Clearly there was thought put into it, but not all ramifications were thought through.  

> *Dave Longley:* Orie: We're all concerned about giving bad advice -- for anything :).

**Brent Zundel:** I believe in the positive intentions of both sides of this conversation. I don't think either side is trying to manipulate into some place of superiority. The intention is always to write the best spec.  

**Michael Jones:** If manu's primary concern is about the amount of work, i'll do it.  
… We think always using `publicKeyJwk` in vc-jose-cose is the best decision for interop.  

> *Dave Longley:* i am totally fine with VC-JOSE-COSE having a preference for key formats in that specification.

> *Orie Steele:* +1 to selfissued comment.

> *Core5069:* I think the controller document must avoid key representations, but that is a significant portion of DI.

**Manu Sporny:** Not worried about doing the work, more about taking time off of other things.  
… I believe the WG can do it.  

> *Dave Longley:* if there is no common preference for key formats -- then that has no place in a common controller document.

**Brent Zundel:** Seems straighforward that we can make this work happen.  

> *Dave Longley:* +1 to Joe, totally agree -- we must not endorse something that isn't commonly endorsed.

> *Dave Longley:* (in the shared document).

> *Orie Steele:* I don't think these proposed resolutions imply any specific changes to the specs, they offer the ability to reflect WG consensus.

**Joe Andrieu:** Wanted to underscore what manu just said. Not about games. The way the proposal is structured would prefer `publicKeyJwk`.  

**Brent Zundel:** We're nitpicking about the potential detail of a spec that hasn't been written.  
… It's a fact that common things will be only the consensus agreed upon things.  
… We aren't talking about specifics yet. No one is suggesting that. We are assuming ill-intent. Please assume good intent. The work in this group will fail if you don't have an open mind.  

> *Dave Longley:* +1 to brent's articulation of "common".

> *Core5069:* of you respect my opinion, I ask you not to call it nitpicking.

> *Dave Longley:* i think the trouble was in what "common" meant, so +1 to brent.

> *Orie Steele:* +1 Brent, we might end up saying less, if we have to agree... but isn't it worth trying to agree?

> *Shigeya Suzuki:* +1 to Brent.

> *Core5069:* it's the algorithm of common.

> *Orie Steele:* +1 Brent : ).

> *Ted Thibodeau Jr.:* ftr, I am not assuming ill intent. I am asserting inability to sufficiently consider these proposals within this meeting.

> **Proposed resolution: The securing specifications will profile the shared document as needed.** *(Brent Zundel)*
{: .proposed_resolution}

> *Orie Steele:* +1.

> *Shigeya Suzuki:* +1.

> *Michael Jones:* +1.

> *Gabe Cohen:* +1.

> *Brent Zundel:* +1.

> *Andres Uribe:* +1.

> *Core5069:* -1.

> *Paul Dietrich:* 0 I think the group has different opinions on "as needed" and that makes it impossible for me to decide.

> *Dave Longley:* +1 for securing specs to indicate their specific preferences from the shared doc.

> *Ted Thibodeau Jr.:* +0.

> *Paul Dietrich:* can we replace as needed with more specific language.

> *Phillip Long:* +0.

**Joe Andrieu:** My concern is more about all the proposals together. I reserve the right to object depending on what happens with the specs.  

> *Manu Sporny:* -0 we need to understand "profile" and "as needed" -- I could support a proposal that was more clear about those things.

> ***Resolution #3: The securing specifications will profile the shared document as needed.***
{: #resolution3 .resolution}

> *Orie Steele:* +1 to assuming good intent, and finding common ground.

---


### 2. Resolutions
{: #res}

* [Resolution #1](#resolution1): The working group will create a Controller Document specification, with the intent that it become a recommendation, containing functionality and definitions that are common to both securing specifications (VC JOSE COSE and Data Integrity).
* [Resolution #2](#resolution2): Once the Controller Document specification is in the Candidate Recommendation phase, the corresponding Controller Document functionality will be removed from both securing specifications and replaced by normative references to the Controller Document specifications.
* [Resolution #3](#resolution3): The securing specifications will profile the shared document as needed.