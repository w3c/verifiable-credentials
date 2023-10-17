---
layout: minutes
date: 2023-10-17
title: Verifiable Credentials Working Group Special Topic Call on outstanding PRs — 2023-10-17
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-10-17-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on outstanding PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on outstanding PRs",
        "dateCreated": "2023-10-17",
        "irc": "vcwg-special",
        "datePublished": "2023-10-17",
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
            "startDate": "2023-10-17",
            "endDate": "2023-10-17",
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
                            "name": "Dave Longley"
                        },
                        {
                            "@type": "Person",
                            "name": "Manu Sporny"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
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
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Oliver Terbu"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on outstanding PRs — Minutes
{: .no_toc}



**Date:** 2023-10-17

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20231017T110000/) and the [IRC Log](https://www.w3.org/2023/10/17-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Hiroyuki Sano, Ivan Herman, Phillip Long, Shigeya Suzuki, Brent Zundel, Manu Sporny, Dave Longley, Will Abramson, Gabe Cohen, Joe Andrieu, Chris Abernethy, Kaliya Young, David Chadwick, Oliver Terbu

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Dave Longley, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Brent Zundel:** Today's agenda is pretty straightforward.  
… Looking at some issues in Data Integrity to resolve before CR and PRs in VCDM. There's time to get things in place for CR for Data Integrity but need to get things lined up to make that happen.  
… Go ahead, Manu.  

### 1. DI Issues.
{: #section1}

#### 1.1. Show i18n best practice in example (issue vc-data-integrity#211)
{: #section1-1}

_See github issue [vc-data-integrity#211](https://github.com/w3c/vc-data-integrity/issues/211)._

<!-- issue w3c/vc-data-integrity/211 -->



**Manu Sporny:** We have started the CR transition for the DI specs and JSON schema, I made a mistake and didn't properly request i18n review, but fortunately Addison took care of this for us. He would like to see an example of an i18n string.  
… We have a hello world example that I'd like to keep as this is helpful in all specs generally, but I want to add an i18n example and that needs to go in before CR.  
… I make a PR to do that and use the mechanism that we all agreed to for that.  
… I would like to merge it before 7 days, it's informative, no normative text.  

**Brent Zundel:** The plan, as I understand it, is to raise a PR to add a non-normative i18n example to data integrity and then merge it at some point before the 7 day window.  
… Any objections to that plan of action?  
… No objections here, thank you, you're good to go.  

#### 1.2. Is the value space definition for `multibase` correct? (issue vc-data-integrity#209)
{: #section1-2}

_See github issue [vc-data-integrity#209](https://github.com/w3c/vc-data-integrity/issues/209)._

<!-- issue w3c/vc-data-integrity/209 -->



**Manu Sporny:** In the same vein -- issue 209. Ivan was reading about the multibase datatype in the spec, this has to do with specifying the value space for the datatype, we say it's "binary data", and Ivan is saying it's a mathematical concept of integer numbers and I would raise a PR to make a change to that. This does not effect implementations but it's important for us to get the text right.  
… A PR will be raised under the same scenario, raise the PR, get review and once I get confirmations it's ok, I will merge into the spec (before 7 day window).  
… Any objections?  

**Brent Zundel:** I am hearing no objections.  

**Manu Sporny:** That's it.  

**Brent Zundel:** Excellent! Thank you to the group.  
… I encourage folks to act quickly to get reviews in.  

### 2. VCDM PRs.
{: #section2}

**Brent Zundel:** For the remainder of our time we'll be talking about VC data model PRs.  
… Kristina and I had an excellent conversation last week recognizing the need to resolve things somewhat more quickly. We're going to have a brief conversation around slight adjustments to our work mode moving forward. The chairs will be a bit more aggressive to declare things as not having achieved consensus, we don't have the luxury of spending weeks discussing.  
… We will begin today looking at some PRs so we're looking to close the PR since we don't see a path toward consensus.  
… We will have to look at the issue and do an honest evaluation of whether this group can come to consensus on a solution to address an issue.  
… Any clarifications needed?  

> *Ivan Herman:* +1 to Brent's and Cristina's approach.

**Manu Sporny:** Yeah a +1 to the statement as sad as it is to close a number of these PRs, we're way behind on some of these PRs on getting the VC data model to CR. +1 to that -- and +1 to starting to mark some of these issues that we've made an attempt at and +1 to marking some of these as version 3 as needed if it has to be kept open.  

**Ivan Herman:** A minor thing -- with what Manu said. I'm not sure we should close those issues, just mark them as future. I am worried we will lose them at some point, but clearly state that this is not for this WG, but the next one will be able to.  

**Brent Zundel:** Grateful for that perspective -- just remembering at the beginning of this WG and the slew of issues we had to start with ... and the number we had to close, it's a conversation we can have as we look at the issues.  
… With that, let's start with 1270.  

#### 2.1. Explain JSON-LD further. (pr vc-data-model#1270)
{: #section2-1}

_See github pull request [vc-data-model#1270](https://github.com/w3c/vc-data-model/pull/1270)._

<!-- issue w3c/vc-data-model/1270 -->



**Brent Zundel:** The chairs feel that this is prime example of a PR that is unlikely to achieve consensus.  

**Manu Sporny:** +1 to this one not making it in. It has text that some in the group feel strongly about, moving it to the VC implementation guide and linking it is something Mike Jones did not object to.  

**Brent Zundel:** Anyone want to object to that proposal?  
… I will mark this pending close and say it will be done in the implementation guide rather than the core data model.  

#### 2.2. Add guidance to not use JSON-LD keywords in `@context` value. (pr vc-data-model#1271)
{: #section2-2}

_See github pull request [vc-data-model#1271](https://github.com/w3c/vc-data-model/pull/1271)._

<!-- issue w3c/vc-data-model/1271 -->



**Brent Zundel:** Manu, you raised this one -- is there a short path toward consensus for this PR?  

**Manu Sporny:** Yeah, it's marked "do not merge", but as you noted there's only one request for changes and no objections. But we should be able to get this forward.  
… I need to talk with Benjamin to see what his concerns were and then maybe this gets merged.  

**Brent Zundel:** When?  

**Manu Sporny:** By next week, I do changes and if there are no objections we can merge, otherwise we can close.  
… This is somewhat attached to the internationalization section and about using `@language` globally in the context.  
… When we ran our poll, there's only two options, one was: use `@language`, `@value`, `@direction` to express language information. There were a number of people that said they wanted to see globals. We want to see a preference poll on those two options.  
… I think the i18n group wants us to be able to both fine grained and default language and we need to figure out what we'll be doing.  

**Brent Zundel:** Is that i18n section a blocker for this?  

**Manu Sporny:** No.  

**Brent Zundel:** Ok, you will have a conversation with Benjamin and if you can resolve that we will get this merged otherwise recommend closing.  

#### 2.3. Provide guidance to use compact terms/types instead of full URLs (pr vc-data-model#1276)
{: #section2-3}

_See github pull request [vc-data-model#1276](https://github.com/w3c/vc-data-model/pull/1276)._

<!-- issue w3c/vc-data-model/1276 -->



**Brent Zundel:** This PR three different folks requesting changes and an equal number who have approved. Not clear what the path toward consensus is.  
… Chairs would move toward closing it -- but would like a recommendation toward coming to agreement.  

**Manu Sporny:** +1 to close this, I think we should let Orie, David, and Ted that their change requests are causing this to not go in and it's up to them to propose a change within a week and this will be otherwise closed.  
… We will, at DB, -1 any further attempt to change this in this WG if there's no consensus here.  

#### 2.4. Add links to static copies of vocabulary files and hashes (pr vc-data-model#1279)
{: #section2-4}

_See github pull request [vc-data-model#1279](https://github.com/w3c/vc-data-model/pull/1279)._

<!-- issue w3c/vc-data-model/1279 -->



**Brent Zundel:** This one is possibly on a path toward consensus?  
… Orie wanted clarity around schema.org ... Kristina is requesting changes. Kristina wants removal of the schema.org parts, Ivan also has some concerns.  

**Manu Sporny:** Ivan, it's not clear to me what you want done for this PR. It seemed like you were out of sync with what Kristina and Orie were asking for.  
… I think what's being requested is to not add hashes for schema.org.  

**Ivan Herman:** That's what I want as well.  

**Manu Sporny:** The clear path forward here is to not provide hashes for schema.org and Orie wanted some text about why.  

**Brent Zundel:** I think the explanatory line you had in your comment would be fine.  
… schema.org changes on a regular basis but uses change control and is stable, etc. therefore we do not provide a hash.  

**Ivan Herman:** The same thing we do with dublin core terms would apply for schema.org.  
… Then we are fine there.  
… If someone comes in with a term that is a dublin core term, which is fine, the same would apply as for schema.org.  

**Brent Zundel:** Thank you, Ivan.  
… Any other comments?  
… We believe we have consensus but, within a week, again ... if others come along and say we don't have consensus, we will close it.  

#### 2.5. removes ToU from the main text while keeping it in the reserved extension points table (pr vc-data-model#1294)
{: #section2-5}

_See github pull request [vc-data-model#1294](https://github.com/w3c/vc-data-model/pull/1294)._

<!-- issue w3c/vc-data-model/1294 -->



**Brent Zundel:** The plan as we discussed last time, is to close 1294 assuming we get consensus and can merge 1295.  
… I'm going to mark it as pending close.  
… The discussion continues in 1295.  

> *Manu Sporny:* +1 to that path forward.

#### 2.6. Update to Terms of Use description (pr vc-data-model#1295)
{: #section2-6}

_See github pull request [vc-data-model#1295](https://github.com/w3c/vc-data-model/pull/1295)._

<!-- issue w3c/vc-data-model/1295 -->



**Brent Zundel:** This PR was raised by David Chadwick, a couple of requests for changes from Orie and Kristina. Kristina said that plainly, based on the conversation last week still has concerns but not blocking ones.  
… She is saying she won't block, Orie has a request for changes.  
… He's not on the call today, he said he's supportive on the PR, the example needs to be updated and covered in tests.  
… I believe this PR updates the example and is conformant with the data model, that part has been addressed.  
… I believe it would be appropriate to raise an issue on the test suite tracking the further concerns he has.  
… To make sure terms of use is tested appropriately.  
… That's my suggestion for this PR -- we merge it and raise an issue to track testing of `termsOfUse` in the test suite.  

> *Manu Sporny:* +1 to proposed course of action.

**Brent Zundel:** Any objections?  
… Making a note to myself, taking the action to raise a PR [issue?] for `termsOfUse` and once that's done I will indicate so, so this PR can be merged.  

#### 2.7. First pass at updating validation language (pr vc-data-model#1297)
{: #section2-7}

_See github pull request [vc-data-model#1297](https://github.com/w3c/vc-data-model/pull/1297)._

<!-- issue w3c/vc-data-model/1297 -->



**Brent Zundel:** Has an approval, quite a few suggestions, some conflicts that need resolving, I believe in general this PR is in good shape.  
… I think the last time we discussed it, the group landed that the validation section is good but for this PR ... it may be best to remove the normative text.  
… As we move forward, addressing the need for defining a conformative issuer or verifier, then normative language would fit better there. This is a reiteration of the conversation from last week, we just need a bit of clean up from Joe.  
… Joe is here -- Joe, would love to hear from you on this.  

**Joe Andrieu:** I think this is looking pretty good, need to deal with nuances from remaining comments.  

**Brent Zundel:** Are you ok with the path of removing the normative statements from this PR to address them more completely in a PR about conformance classes?  

**Joe Andrieu:** I guess I'm not sure what that means. I guess the normative statement is whether or not you must validate. Is that it?  

**Brent Zundel:** That's the primary example, but any normative language in this PR ... MUST/SHOULD, people have expressed concern over.  

**Joe Andrieu:** Let me read through it, I'll consider that. I need to understand the consequences before I commit.  

**Brent Zundel:** Thank you, Joe, I think this PR has a good chance for finding consensus, that was the sticking point though, ... one side requires normative language to be removed, so if you demand something else then it will be closed.  

**Joe Andrieu:** Ok, then I will take the action to remove it, and if I think we still need it, I will create another PR.  

**Brent Zundel:** Ok, thank you.  

**Manu Sporny:** Yeah, I was going to speak to the normative language, the concern is what Orie raised, if we have a MUST in there we will have to test in some way unless it's guidance to a spec writer or something. The easiest way here is just no RFC MUST language, that's the easiest thing to get in.  
… If you suggest in another PR to do some normative statements, if you're talking about validation, we'll have to define algorithms to do that. We have requests from Jeffrey Yaskin to create a normative algorithm for verification and one for validation is much more dicey.  
… Normative statements around validation will become stuff we have to test / have a good testing story around those statements.  

**Joe Andrieu:** I think we're in a pickle where testability might not be the right metric. Companies, what business rules they apply, etc. is out of scope -- that they do validate is a MUST. Before you use a property you must validate -- I get the issues here.  

**Brent Zundel:** I believe if you add the normative statements in the context of a conformance class -- the DID WG did something similar when we said "DID method authors MUST" ... and we don't have a way to test that and we still had normative requirements for that. I think that's a possible way forward.  
… If that makes sense at all.  

**Joe Andrieu:** That helps, I'll fold it into what I put together.  

#### 2.8. Remove JSON Processing section (pr vc-data-model#1298)
{: #section2-8}

_See github pull request [vc-data-model#1298](https://github.com/w3c/vc-data-model/pull/1298)._

<!-- issue w3c/vc-data-model/1298 -->



**Brent Zundel:** We do not have consensus to merge 1298 and we will close it in favor of 1302.  
… I will mark 1298 as pending close and we will close it when 1302.  

> *Manu Sporny:* +1 to close PR 1298 in favor of PR 1302.

**Brent Zundel:** Not we're going to talk about 1302.  

#### 2.9. Propose better JSON-LD processing text (pr vc-data-model#1302)
{: #section2-9}

_See github pull request [vc-data-model#1302](https://github.com/w3c/vc-data-model/pull/1302)._

<!-- issue w3c/vc-data-model/1302 -->



**Brent Zundel:** This PR has requests for changes from Dave and Manu. What concrete changes ... are the concrete changes that you're looking for already reflected in your comments?  
… Do we have a path forward.  

**Manu Sporny:** I think we have a path forward, not all comments made have been addressed.  
… 80% of this PR is headed in a good direction, Orie hasn't responded to some of the other stuff, it looks like there needs to be some more negotiation in here. Orie needs to do an updated processing on this.  

**Brent Zundel:** Orie four days ago looks like he did a rejiggering of it. I'm not that the ball is in Orie's court at this point.  

**Manu Sporny:** I see Dave responded after that, I will look at it again.  

**Dave Longley:** I looked at this again after Orie provided feedback, made adjustments, hope those changes go in (up to Orie), also highlighted important section that I'd like to see go in (important to clarify some things that were highlighted some stuff that seemed to be confusing to Orie).  
… If that text goes in, and if stuff I was responsive to Orie goes in, I didn't get to tail end of this PR, but I think we're in good shape. Ivan had a good suggestion on changes/re-reviews.  

**Ivan Herman:** I had some comments and requests for changes and did look at the version...  
… A few days ago ... the things I requested have not been done yet.  
… From my point of view, the ball is in Orie's court. But he's right in saying it's difficult to do things because the github process is that when you look at the changes it gives you all the changes back to the first version. I have to agree it's difficult to review, but as far as I'm concerned there are still open issues on the PR.  

**Brent Zundel:** Thank you, Ivan. This is one of those where -- we really need to see movement.  
… It's been open a couple of weeks, the path toward consensus isn't entirely clear to me.  
… Is it changes to the PR or additional clarifications related to the PR that are primarily being desired?  
… Is this where additional PRs could be added?  

**Ivan Herman:** I was wondering about that. Orie's proposal is to merge as it with open suggestions and then we'd create more issues for each suggestion and we'd all lose.  
… I think we should ask Orie to do all the changes he can and then open a new PR with all the changes to start from scratch to help with review.  
… There are some things outdated and by-discussions ... interesting but not helpful. I think that making a new text with a new PR and closing the other one is a possibility.  
… Orie isn't here, so maybe we have to settle this with him tomorrow.  

**Brent Zundel:** Thank you, Ivan, I'm not fond of that suggestion, personally.  
… If the group feels that that would be the most efficient way forward, I wouldn't oppose it.  
… I will plan on having a discussion on this PR tomorrow. Hopefully Orie will be present tomorrow and that will lead to clarity.  

#### 2.10. Editorial cleaning (pr vc-data-model#1304)
{: #section2-10}

_See github pull request [vc-data-model#1304](https://github.com/w3c/vc-data-model/pull/1304)._

<!-- issue w3c/vc-data-model/1304 -->



**Brent Zundel:** I think this PR just needs to be merged but has conflicts.  
… Orie needs to fix the conflicts.  

#### 2.11. Additional updates regarding proof (pr vc-data-model#1317)
{: #section2-11}

_See github pull request [vc-data-model#1317](https://github.com/w3c/vc-data-model/pull/1317)._

<!-- issue w3c/vc-data-model/1317 -->



**Dave Longley:** This PR does a number of different things at once, it might be fixing some bugs in the spec, that part of the PR is good.  
… We also have this inconsistency that's related to the other part of the PR -- this PR also removes the proof property in core data model based on idea that there are multiple ways to secure a VC -- external mechanism, or internal mechanism, comments on PR are...  
… we've been talking a lot about different properties of spec... extension points -- we want to make sure we want to say what an extension point does/is in the core spec and we only keep it around/reserved if we have a specific use of it in other specs. `proof` is just another extension point -- it happened in an inverted way, we've had proof around and we've always had it in Data Integrity and now we're defining it in the spec. We had proof, had good statements about it, and had specific implementations/tests around it -- we have all the things we said we want to have in the data model.  
… We have now said "the external thing exists" and we should remove the property... we have said we want more documentation around points of extension -- so I think we're going in the wrong direction w/ part of this PR. What happens if we get an external mechanism for credentialStatus, would we remove it? Goes for any properties we have. We want to talk about properties generally in core spec, and make sure we have other properties in other specs that talk about them in specific ways.  

**Ivan Herman:** I don't know if this is addressed in the PR of Orie, I didn't look at it. There is one thing that personally bothered me for a long time. "proof" as a term is formally defined in the DI vocabulary. It's unclear where really it belongs. It's in the two at the same time. That might be a reason for the confusion.  

**Manu Sporny:** I did look at this PR -- just didn't respond yet. I agree, there are good things in this PR and largely agree that proof is an extension point we need to document. This process is like a "feeler PR" that goes in and then there are other PRs that go in and remove more.  
… The concern here is that the VCDM becomes just about the data and not securing it -- and lots of people have complained about the VCDM not allowing you to do anything, I think we should have concrete securing examples. We should have both data integrity and VC-JOSE-COSE examples in the spec.  
… There seems to be an undercurrent in the PR to stop talking about how to verify a VC and that's a mistake, IMO. If those parts are taken out, +1 to the PR.  

**Brent Zundel:** Would someone be willing to summarize what the next step would be for this? I recognize that this PR is only a week old... we're still in the window, 4 days. It hasn't been languishing, we still need to know what the concrete path forward is.  
… Do we see hope for consensus?  
… Do we need Orie present?  

**Manu Sporny:** Orie needs to be present to see what he finds acceptable.  
… If this PR focused on bug fixes, Orie is correct to fix some bugs here -- I would expect that PR to go in.  
… If it just does that, it would be ok. I think a PR that removes proof from the spec wouldn't work, but talking about proof as an extension point might address some of his concerns.  
… The examples where we have a proof with a bunch of ellipsis statements and it may be fine to remove those things if replaced with examples showing how to secure with DI and with VC-JOSE-COSE.  
… So those things, I think, could possibly get to consensus.  

**Brent Zundel:** Thank you all, thanks, Dave for scribing, thanks for all the review, please be timely, we do need to wrap things up. Hope will see you all on the call tomorrow.  

### 3. recap on 1295.
{: #section3}

**David Chadwick:** I just wanted a quick heads up from you on what is happening on 1295. Apologies for missing the first part of the meeting.  

**Brent Zundel:** The terms of use, we believe we have a good path forward with 1295, what we will do is raise an issue in the test suite to track Orie's concerns about testing and otherwise Kristina and Orie's concerns have been addressed and we will merge.  
… The notes will go into the PR from the meeting.  

**David Chadwick:** That's great -- one question for Manu, are you wanting to remove completely obligations, etc.?  

**Manu Sporny:** Yes, it's based on ODRL that isn't a thing anymore.  

**David Chadwick:** Yes, good.  

---
