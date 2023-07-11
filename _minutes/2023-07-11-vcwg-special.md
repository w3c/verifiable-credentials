---
layout: minutes
date: 2023-07-11
title: Verifiable Credentials Working Group Special Topic Call on Reviewing PRs — 2023-07-11
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-07-11-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Reviewing PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Reviewing PRs",
        "dateCreated": "2023-07-11",
        "irc": "vcwg-special",
        "datePublished": "2023-07-11",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Reviewing PRs",
            "startDate": "2023-07-11",
            "endDate": "2023-07-11",
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
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Ivan Herman"
                },
                {
                    "@type": "Person",
                    "name": "Paul Dietrich"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Phil Feairheller"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Oliver Terbu"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Reviewing PRs — Minutes
{: .no_toc}



**Date:** 2023-07-11

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20230711T110000/) and the [IRC Log](https://www.w3.org/2023/07/11-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Andres Uribe, Will Abramson, Brent Zundel, Ivan Herman, Paul Dietrich, Gabe Cohen, Phillip Long, Dave Longley, Phil Feairheller, Ted Thibodeau Jr., Orie Steele, Hiroyuki Sano, Oliver Terbu, Joe Andrieu, Michael Jones, Kaliya Young

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Will Abramson

## Content:
{: .no_toc}

* TOC
{:toc}
---



**Brent Zundel:** today we will be going through various p.r.s looking to discover what changes can move these forward.  
… alternatively we will look to close them.  

### 1. PR reviews.
{: #section1}

#### 1.1. Media types other than vc+ld+json (pr vc-data-model#1100)
{: #section1-1}

_See github pull request [vc-data-model#1100](https://github.com/w3c/vc-data-model/pull/1100)._

<!-- issue w3c/vc-data-model/1100 -->



**Brent Zundel:** this first one is media types + ld + json.  
… buidling on some of the miami resolutions. Four requests for changes currently.  
… how can we move this P.R forward?  

**Phil Feairheller:** kevin opened this P.R. Seems this P.R will not be able to move forward. No objections to closing.  

> *Orie Steele:* +1 PhilF.

**Brent Zundel:** and objections to marking pending close?  
… no objections, labelling pending close. Will close in 7 days if no objections.  

#### 1.2. Add guidance on Representations of Verifiable Credentials (pr vc-data-model#1101)
{: #section1-2}

_See github pull request [vc-data-model#1101](https://github.com/w3c/vc-data-model/pull/1101)._

<!-- issue w3c/vc-data-model/1101 -->



**Brent Zundel:** this P.R is around trying to make Miami resolution actionable.  
… within the next two weeks we will look forward to a replacement P.R from Mike Jones so we can close this one.  

#### 1.3. Add confidenceMethod to table of reserved terms and v2 `@context` (pr vc-data-model#1142)
{: #section1-3}

_See github pull request [vc-data-model#1142](https://github.com/w3c/vc-data-model/pull/1142)._

<!-- issue w3c/vc-data-model/1142 -->



**Brent Zundel:** this next one is around adding confidence method as a reserved term.  
… current understanding is this is blocked awaiting adoption from the CCG group to move this work forward.  

> *Orie Steele:* Per the last comment on it, I will remove the confidenceMethod part in a week or 2 if there is still not CCG adoption.

**Oliver Terbu:** currently waiting for owners of this work in the CCG. Nobody has stood up to take on this work.  
… intend to wait two weeks, if none willing to take this on then we should close this P.R in the VCDM.  

**Brent Zundel:** started 2 week time out 5 days ago.  

**Dave Longley:** question around why 2 weeks timeout as opposed to just before CR.  

**Oliver Terbu:** I could be supportive of this.  

**Brent Zundel:** goal of the shorter timeline is to not have P.Rs hanging around indefinitely.  
… want P.Rs to be progressing, merging or closing.  

**Oliver Terbu:** If we don't find anyone in two weeks, then we could create an issue to track this work.  
… Need one person to be the main driver of this spec in the CCG.  

> *Dave Longley:* +1 to the issue compromise approach, clearly there's support for the work just people too busy right now.

**Oliver Terbu:** have multiple copilots, but need a main driver that I can coordinate with.  

**Michael Jones:** generally have policy to only put normative things in the spec.  
… CCG work item does not qualify to add an identifier to our spec.  
… CCG is not standards track.  

> *Orie Steele:* +1 selfissued, but the registration table is a cheat code :).

**Brent Zundel:** recognize that, but this is about getting into the table of reserved properties.  
… expect selfissued concerns to be addressed before CR.  
… moving on.  

#### 1.4. Add graph node identifiers for registered claims (pr vc-data-model#1149)
{: #section1-4}

_See github pull request [vc-data-model#1149](https://github.com/w3c/vc-data-model/pull/1149)._

<!-- issue w3c/vc-data-model/1149 -->



**Brent Zundel:** graph node identifiers for registered claims.  

**Orie Steele:** P.R adds term defs for registered claim names consistent with IANA registries.  
… This will enable terms to be expanded with IANA term definitions.  
… moved status list into v2 context, moved data integrity to make things easier. Follows that we would define these registered claim names in the v2 as well.  

**Dave Longley:** I have approved the P.R.  
… my understanding is current blocking is an example for the use of this.  
… Help make sure we provide appropriate guidance to folks to avoid 1.1 mistakes.  

> *Orie Steele:* Do we have guidance on the DataIntegrity and StatusList parts, or is a different bar being applied here?

> *Dave Longley:* orie, totally different situations :).

> *Orie Steele:* disagree.

> *Dave Longley:* there are no conflicting properties there.

**Brent Zundel:** TallTed can you speak to the change requests you would like.  

**Ted Thibodeau Jr.:** still reviewing the P.R.  

**Brent Zundel:** my opinion as chair that if a P.R requesting changes to the spec. Can't just say you don't like it. If it doesn't prohibit you from doing what you need and doesnt break the internet. Then we should lean towards trusting intentions of those who raised P.R and let the work move forward.  
… TallTed if you can take some time in the next few days to see if your request for changes have been satisfied. Same for manu, alhough not present today.  

#### 1.5. Rationalize and clarify IANA Considerations (pr vc-data-model#1163)
{: #section1-5}

_See github pull request [vc-data-model#1163](https://github.com/w3c/vc-data-model/pull/1163)._

<!-- issue w3c/vc-data-model/1163 -->



**Brent Zundel:** rationalise and clarify IANA considerations.  

**Ted Thibodeau Jr.:** This P.R intends to add additional clarity to section headings and ordering.  
… objection seems to be in relation to aesthetic breakage of sidebar.  


**Ted Thibodeau Jr.:** the duplications can be eliminated by tweaking the headings.  

**Orie Steele:** fine with changing the order and adding clarifying text. Just don't like respec sidebars with really long headers.  
… must have missed TallTed suggestion. Will take another look.  

#### 1.6. Add "author" and "party" to terminology, rewrite "claim" terminology (pr vc-data-model#1172)
{: #section1-6}

_See github pull request [vc-data-model#1172](https://github.com/w3c/vc-data-model/pull/1172)._

<!-- issue w3c/vc-data-model/1172 -->



**Brent Zundel:** Add author and party to terminology and rewrite claim terminology. Raised by Rieks, not a member of the working group. But these are arguably editorial changes.  
… P.R adjusts the definition of the claim.  
… goes on to define party and makes changes about whether vc has been authored vs issued.  

**Orie Steele:** not sure adding more roles helps with readability or clarity for implementers.  
… reading some comment in relation to Presentation. Says something about holder is just another issuer when making claims about themselves.  
… This makes sense to me.  
… if we add this P.R. will have to go back to every place with issuer and holder and reevaluate this text.  
… feel it will lead to confusion and extra text.  

**Brent Zundel:** chair hat off. I share all those concerns.  

**Joe Andrieu:** think there are interesting gaps we should clarify.  

> *Dave Longley:* for clarity in the minutes, i think the new role is "author" (i don't see any other new ones being added).

**Joe Andrieu:** don't think we need to add more terms.  
… have a notion that a device could be an issuer, holder etc. But not sure that fits with my mental model.  
… issuer, verifier holder is legally cognizant entity that can take actions. Device is not this.  

**Ted Thibodeau Jr.:** the words JoeAndrieu just spoke concern me greatly.  
… legally cognizable has not been part of our previous conversations.  
… nothing in what we wrote before said they couldn't be machines.  

**Joe Andrieu:** I think TallTed not entirely wrong. Think its about the ability to make a statement and what does that mean.  
… people and corporations can make statements.  

**Ted Thibodeau Jr.:** okay, that applies to issuer perhaps. But not to holder or verifier.  
… neither one of those roles has anything to do with making a statement.  
… maybe the issuer, but dont suggest we go down that rabbit hole.  

**Brent Zundel:** some of earliest anonymous credentials were by trusting computing modules. Issued by the device, to say something about the device. Strong example of issuer that is just a computer.  

> *Dave Longley:* maybe this PR just needs to be pared back a little to get to consensus.

**Joe Andrieu:** I think holders make statements when they make a presentation.  
… highly relevant that the holder is signing the presentation.  
… for verifier I agree, they aren't making statements. But for me the verifier isn't the entity that is verifying business rules. BUt the entity writing the business rules. That entity is legally cognizable.  

> *Phillip Long:* +1 to the importance of the holder to be able state their claims about attributes of their capabilities in a self-issued credential. They are issuers in this context.

**Ted Thibodeau Jr.:** do not fully disagree, but I do mostly. If we go down this road, we will need to be rechartered. Big, complex topic.  

**Brent Zundel:** suggestion to slim down the P.R from dlongley to increase chance of acceptance.  
… moving on.  

#### 1.7. removing remaining references to JSON (pr vc-data-model#1182)
{: #section1-7}

_See github pull request [vc-data-model#1182](https://github.com/w3c/vc-data-model/pull/1182)._

<!-- issue w3c/vc-data-model/1182 -->



**Brent Zundel:** this P.R removes differentiation between JSONLD and JSON. Has relatively broad approval.  
… minor changes from manu, that I agree with.  
… not sure this P.R calls for much discussion, but open to any if there are some.  

#### 1.8. Add dateTimeStamp regex and explanation of representing time. (pr vc-data-model#1183)
{: #section1-8}

_See github pull request [vc-data-model#1183](https://github.com/w3c/vc-data-model/pull/1183)._

<!-- issue w3c/vc-data-model/1183 -->



**Brent Zundel:** this clarifies the date time requirements for things like valid from and till. Provides a regex for validation. P.R has broad approval, awaiting a final thumbs up.  
… from chair of the internationalization working group.  
… open to comments.  

**Ivan Herman:** isn't it better to make this one and previous P.R. to say that as soon as submitter is finished they can merge the p.r.  

**Brent Zundel:** not in the habit of doing this in the group.  
… happy to find a label/make a comment to that affect.  

#### 1.9. Add interoperable way for holder-asserted claims in a VP (pr vc-data-model#1186)
{: #section1-9}

_See github pull request [vc-data-model#1186](https://github.com/w3c/vc-data-model/pull/1186)._

<!-- issue w3c/vc-data-model/1186 -->



**Brent Zundel:** P.R seeks to address issue #860.  
… provides normative guidance for holder claims in a presentation.  
… a holder can elect to either produce a VC secured on its own and insert into vc array of the presentation.  

_See github issue [vc-data-model#860](https://github.com/w3c/vc-data-model/issues/860)._

<!-- issue w3c/vc-data-model/860 -->



**Brent Zundel:** alternatively they can include an unsecured VC in the presented vcs.  
… as long as issuer field of the VC and the holder field of the presentation match. Then the issuer can have confidence that this is self attested claim from the holder.  
… all comments have been responded to. Awaiting final review from TallTed.  
… open to comments.  

> *Phillip Long:* +1 to that PR pertains to issue 860.

**Andres Uribe:** made a comment about enabling forwarding of credentials.  
… not sure how that would be possible using the self asserted type.  
… maybe this isn't a use case that is as important to support.  

**Oliver Terbu:** can see interop issues with this approach in the future.  
… many other ways to achieve the same. Are we saying this is the only approach to achieve this.  
… not sure this is the right approach. Not objecting, just a comment.  

**Dave Longley:** think forwarding use case can be solved by attaching a signature to the VC.  
… using a SelfAsserted type is just a recommendation.  
… think P.R is really around enabling the VP to be the securing for self attested claims.  
… otherwise holder can just act in the role of issuer.  
… this adds a mechanism to secure using proof of the VP itself.  

**Joe Andrieu:** part of this shift has missed some of initial point from issue #860.  
… this was about how you say these claims are about this specific thing right now.  

> *Dave Longley:* perhaps give the VP an ID and include that in your VC claims.

**Joe Andrieu:** not sure how we address that.  

> *Will Abramson:* PL-ASU: this is in relation to the self asserted. The fact that there may be a circumstance where self-asserted claims do not want them to be forwarded.

**Oliver Terbu:** I heard that we have two different issues.  
… JoeAndrieu wanted author of credentials about the VP and the ability to include those in a presentation.  
… then there is the one about self asserted with proof from the VP used to secure.  
… maybe we need separate P.Rs for this.  

**Brent Zundel:** any concrete proposals or changes to this P.R is appreciated. Not sure how to act on the general guidance.  
… responding to JoeAndrieu, should be easy to add a line to the spec that addresses your use case.  

**Joe Andrieu:** think that is pretty good. E.g. if it says if you are making a VP, you could have the ID of a VP that you then refer to.  

**Brent Zundel:** okay I can make that change.  

#### 1.10. Add section on media type precision. (pr vc-data-model#1189)
{: #section1-10}

_See github pull request [vc-data-model#1189](https://github.com/w3c/vc-data-model/pull/1189)._

<!-- issue w3c/vc-data-model/1189 -->



**Brent Zundel:** add section on media type precision. Some change requests.  
… P.R adds guidance for implementers and users of spec for what they may do if they encounter diff media type / content.  
… minimal processing guidelines to determine if contents conforms with VCDM.  

**Dave Longley:** changes are applied. Approved now.  

**Ted Thibodeau Jr.:** appears to be same. Will double check but think it is ready to go.  

**Ivan Herman:** wondering whether it is appropriate to be as a normative section. This is guidelines for implementers.  

**Brent Zundel:** note there is no normative language in the P.R.  

**Ivan Herman:** yeah but there is an algorithm. Normative sounding text.  
… Not just about the SHOULD or MUST etc.  
… not saying I am opposed, just asking the question.  

**Brent Zundel:** any concrete changes?  

**Ivan Herman:** changes would be to make it clearly informative. But just asking question currently.  

#### 1.11. Adjust media types to reflect updates (pr vc-data-model#1190)
{: #section1-11}

_See github pull request [vc-data-model#1190](https://github.com/w3c/vc-data-model/pull/1190)._

<!-- issue w3c/vc-data-model/1190 -->



**Brent Zundel:** P.R makes changes to the IANA considerations section.  
… mentions application/vp+json alongside vc+json.  
… seems a very simple P.R. Expect to be merged soon.  

### 2. closing.
{: #section2}

**Brent Zundel:** encourage folks to take actions to move stuff forward. 11 P.Rs is slightly uncomfortable.  
… thanks for attending.  
… note that there are other P.Rs in other work items. Please review.  

---
