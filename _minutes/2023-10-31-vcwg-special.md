---
layout: minutes
date: 2023-10-31
title: Verifiable Credentials Working Group Special Topic Call on outstanding PRs — 2023-10-31
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-10-31-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on outstanding PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on outstanding PRs",
        "dateCreated": "2023-10-31",
        "irc": "vcwg-special",
        "datePublished": "2023-10-31",
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
            "startDate": "2023-10-31",
            "endDate": "2023-10-31",
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
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Benjamin Young"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
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
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on outstanding PRs — Minutes
{: .no_toc}



**Date:** 2023-10-31

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20231031T110000/) and the [IRC Log](https://www.w3.org/2023/10/31-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Hiroyuki Sano, Ivan Herman, Manu Sporny, Dave Longley, Will Abramson, Ted Thibodeau Jr., Gabe Cohen, Benjamin Young, Andres Uribe, Kaliya Young, Michael Jones, Joe Andrieu, Phillip Long, Chris Abernethy, Dmitri Zagidulin

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Dave Longley, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. VCDM PR Reviews.
{: #section1}

**Brent Zundel:** We're going to talk through some PRs today.  
… And pending close a bunch of them.  

> *Brent Zundel:* [https://github.com/w3c/vc-data-model/pulls](https://github.com/w3c/vc-data-model/pulls).

#### 1.1.  (pr vc-data-model#1329)
{: #section1-1}

_See github pull request [vc-data-model#1329](https://github.com/w3c/vc-data-model/pull/1329)._

<!-- issue w3c/vc-data-model/1329 -->



**Brent Zundel:** This modifies the README to remove Kristina as co-chair.  
… I'm going to merge it.  
… One down.  

#### 1.2. Align JWT/JWS fields with IETF RFCs. (pr vc-data-model#1325)
{: #section1-2}

_See github pull request [vc-data-model#1325](https://github.com/w3c/vc-data-model/pull/1325)._

<!-- issue w3c/vc-data-model/1325 -->



**Brent Zundel:** This one is not labeled pre- or post-CR. Manu raised, some approving and some objecting.  

**Manu Sporny:** It is a pre-CR, we don't have a path, I marked it pending close. I think that's ok, the VC-JOSE-COSE authors have decided on a direction and that's that.  

**Brent Zundel:** Ok, marked pending close, will close in 3 days after the seven day window is up. Any final comments?  

**Ivan Herman:** None of the VC-JOSE-COSE people are around -- I'm fine pending close, but we may wait for them.  

**Brent Zundel:** The people not around are the ones pushing to close it.  

**Ivan Herman:** Ah, ok.  

**Manu Sporny:** In addition, I raised the issue and the PR and I'm fine with closing the issue and the PR, immediately if we want.  

**Brent Zundel:** I'll close it after the meeting.  

#### 1.3. Add section on key management. (pr vc-data-model#1323)
{: #section1-3}

_See github pull request [vc-data-model#1323](https://github.com/w3c/vc-data-model/pull/1323)._

<!-- issue w3c/vc-data-model/1323 -->



**Brent Zundel:** This PR has a number of approvals, there is one request for changes from Orie who is not here.  

**Manu Sporny:** This was a PR that the privacy group requested, Kyle Den Hartog specifically. He's happy with the PR with the modifications that have been made. Orie would like us to speak to encrypting presentations, which is not what this PR is about.  
… Kyle suggested that we open an issue to speak to Orie's concerns.  
… I would imagine Orie would want those to be pre-CR, if Orie is going to block this PR we will close it. But this came from a privacy WG review and that may cause them to raise eyebrows because we didn't put in text that they requested.  
… We need to find out if Orie is going to block this -- and then we need to decide whether to listen to Orie or to listen to PING.  
… Or Orie responds and is happy with a new PR.  

**Brent Zundel:** Orie is asking for something additional -- is that accurate?  

**Manu Sporny:** That is one way to interpret it -- or he wants more text in the PR.  

**Brent Zundel:** Right, but people can say that in any PR, asking for all kinds of things, but this isn't about that issue or this PR directly. Orie has a path to raise his own issue and PR.  
… I don't see him as having said anything that blocks this PR.  

**Manu Sporny:** Ok, then should we wait for him to respond, raise an issue, or should we just merge?  

**Brent Zundel:** I believe we should just merge it. Orie knows the process, he knows how to raise issues and PRs.  
… The comments from this meeting will go into the minutes. I will merge this after the meeting.  

#### 1.4. Add definition of well formed (pr vc-data-model#1320)
{: #section1-4}

_See github pull request [vc-data-model#1320](https://github.com/w3c/vc-data-model/pull/1320)._

<!-- issue w3c/vc-data-model/1320 -->



**Brent Zundel:** Adds a definition of "well-formed". Last I looked, there was a difference of opinion about whether it should be added at all.  

**Manu Sporny:** I am objecting to this PR. We use the word "well-formed" once in the specification and should just delete it. Conforming documents should be well formed and it would be weird if they were ill formed. We should just use "conforming document", and I'm happy to raise a PR to do that. I don't think it's useful to have two different definitions.  
… I think we should mark this pending close.  

**Michael Jones:** I'm fine with Manu's suggestion to just delete the use of the word.  

**Joe Andrieu:** This originally came out of discussions around adherence to the credentialSchema -- does "well-formedness" and conformance are good enough for that?  

**Manu Sporny:** That's a good point, we should figure out the language we want to use there ... like "the document matches the schema".  

**Joe Andrieu:** "Well-formed" is what I used for that.  

> *Phillip Long:* pdl-asu has joined #vcwg-special.

**Manu Sporny:** I don't know -- I feel that the discussion around that will take some time ... I don't think defining it until we have the discussion and decide if we even need it is premature. There's one use of the word in the spec and we've written a lot without it.  
… If we want to introduce the word we'll have to define it and whether it refers to credentialSchema, a JSON-LD doc, so on. I think it's premature.  

**Ted Thibodeau Jr.:** Just to say that there are two instances of hyphenated "well-formed" in the spec.  

> *Manu Sporny:* Thanks Ted, I didn't check for hyphenated forms of the word... yes, get rid of all of them.

**Ted Thibodeau Jr.:** I think it's better to get rid of all if we get rid of one.  

**Gabe Cohen:** I think JSON schema is a good tool for checking "well-formedness". Another way I've framed it is spec-compliant. Some way of capturing this is important.  

**Brent Zundel:** Can you say more about this PR in particular?  

**Gabe Cohen:** I need to take a close look at it.  

**Manu Sporny:** Gabe -- the word we use for spec-compliant is "conforming document", it's defined as a conformance class.  
… I'm looking at the landing page in the JSON schema docs and it doesn't say "well-formed" -- it says things like "validate", "JSON data consistency", "validity", etc.  
… I think the PR is premature... if we want to focus on the PR, we're having a conversation around it and that tells me we need more conversation.  

**Joe Andrieu:** I agree, maybe we need more conversation before merging this in. This came from being able to define "how you validate" and there's a narrative loop and we can't get out of it by just saying validate again, but we need more conversation.  

**Brent Zundel:** Ok, marking this PR as pending close... more conversation needed.  

**Joe Andrieu:** Sorry, don't agree with pending close.  

**Brent Zundel:** Oh, I thought that's where we're at, go ahead Manu.  

**Manu Sporny:** I think we communicate something to the group -- the editors are deeply concerned with how long it's taking to pulling in PRs and process issues to the point that we're putting the core spec in danger -- by marking things as pre-CR and then saying we'll discuss later.  
… Please correct me if I'm wrong on the timeline, chair/staff contact, we need to speed things up. We are well past the date we wanted for getting the core spec into CR. As a result, these PRs that gather 100s of comments and stay out for a long time. My personal opinion as an editor -- we don't have time to process things in that manner any more.  
… The chairs have been warning us that we have to make some hard decisions on what we can address and what we can't -- which means we have to get more aggressive on whether a PR will make it in or not. If we have people objecting to PRs no matter who they are, that makes it highly likely it will be closed. Granted, there are still things we have to do -- and have to discuss, especially if things will result in a formal objection. But a lot of PRs are stuck in the queue.  
… Marking as pending close is a way to try and get us to the point where we can go to CR with the VCDM 2.0 spec. That's my view on why we're processing issues and PRs in that manner, please correct me if I'm wrong.  

**Brent Zundel:** Thank you, Manu, I should have taken a few moments in the start of the call to say that. We're a month over due, things without a clear path to consensus we're going to close. If consensus can be closed, great, we can try another PR, but we just don't have time to have long discussions that we hope to get in.  

**Joe Andrieu:** Frankly, I don't mind getting rid of this PR, but what I heard is that we need more discussion and that we want to remove well-formed elsewhere. I heard you keeping it alive, Manu and more work. I'm happy to get rid of it and leaving two forms of well-formed in the spec that are undefined in the spec.  

**Brent Zundel:** This is non-normative, arguable it's normative but I don't think so, I'd like to mark it post-CR and we can discuss later.  

**Manu Sporny:** My hopes and dreams are that we get full discussion with all the things and everyone is happy with what goes into the spec. The tough reality is we have a ticking clock and we're behind and we have to decide what to do talk about, what to hold nose on, and what to close or defer.  

**Brent Zundel:** Thank you, Manu.  

#### 1.5. Additional updates regarding proof (pr vc-data-model#1317)
{: #section1-5}

_See github pull request [vc-data-model#1317](https://github.com/w3c/vc-data-model/pull/1317)._

<!-- issue w3c/vc-data-model/1317 -->



**Brent Zundel:** This PR was raised by Orie.  
… It modifies the proof section. It gets rid of a lot of it.  
… I believe makes it apply only to data integrity mechanisms for securing the spec. I may be inaccurate on that.  

**Manu Sporny:** Yeah, some of the changes in this PR are ok, others I objected to. I think we can clean this up in a better way, but this takes a hatchet to the spec in a way that's unacceptable. I suggest we mark this pending close.  
… I doubt it's going to get into a mergeable state any time soon.  

**Brent Zundel:** Chair hat off, I don't agree with the direction this PR has taken. It's always been my position that "proof" is an extension point that any securing mechanism can use and just because data integrity does already doesn't mean others now can't or never can.  
… Chair hat back on, the plan is to mark this as pending close.  

> *Gabe Cohen:* +1 TBD has a use case to make use of the proof property without using DI proofs.

> *Manu Sporny:* ^ excellent, so 3 uses of proof property extension point, only one of them is Data Integrity.

**Manu Sporny:** Agree, also wanted to note that the CL signature stuff that province of BC is using this -- either they will use the data integrity pattern or their own, and they are currently using their own.  

**Brent Zundel:** I'm going to mark this pending close due to my determination that consensus has not been reached and it seems unlikely that it will be reached.  

#### 1.6. Propose better JSON-LD processing text (pr vc-data-model#1302)
{: #section1-6}

_See github pull request [vc-data-model#1302](https://github.com/w3c/vc-data-model/pull/1302)._

<!-- issue w3c/vc-data-model/1302 -->



**Brent Zundel:** I remember talking about this one recently and I thought we had a path forward.  
… Have any steps been taken on that path?  

**Manu Sporny:** Yes, steps are being taken towards the path -- Orie requested that those wanting changes ... resolve conversations that they feel are resolved. I certainly went through and did that. At this point Orie is not intending to accept a variety of suggestions that have been made.  
… Speaking for myself, I'm not happy with the things that Orie is not wanting to change. And I say that -- kind of sad, because 85%-90% of the text that Orie is suggesting is good and should make it to the spec.  
… This is one of those difficult ones.  
… But if Orie is not going to pull back some of the changes, I don't agree to merging this.  

**Brent Zundel:** Dave is pointing out in the chat that this is post-CR.  

**Ivan Herman:** I put a number of comments into this one as well, I don't feel like I'm getting a reply from Orie. Or we are talking about different things, I certainly don't understand what he is saying. But I do agree it is post-CR.  
… I am happy to take a deep breath and come back to it.  

**Brent Zundel:** Ok, that's the course of action we're going to take and labeling it post-CR and hopefully in the intervening time we can come to an agreement on it.  

#### 1.7. Remove JSON Processing section (pr vc-data-model#1298)
{: #section1-7}

_See github pull request [vc-data-model#1298](https://github.com/w3c/vc-data-model/pull/1298)._

<!-- issue w3c/vc-data-model/1298 -->



**Brent Zundel:** This one is even more fraught. It's been marked pending close and I plan on closing after this meeting.  
… This PR removes the entire JSON processing section.  
… Any objections to closing after this meeting?  

**Manu Sporny:** No objections to that.  
… If you look across the various issues and threads -- there's some languaging going on, static vs. dynamic, application-specific vs. general processing, etc. There's something there that's all post-CR stuff that people could agree to. It would be nice to discuss that as a group, that might achieve consensus.  
… Minor languaging changes might get us all into the same mental model and that could help the previously discussed PR changes easier to make.  

#### 1.8. First pass at updating validation language (pr vc-data-model#1297)
{: #section1-8}

_See github pull request [vc-data-model#1297](https://github.com/w3c/vc-data-model/pull/1297)._

<!-- issue w3c/vc-data-model/1297 -->



**Brent Zundel:** Thank you, Manu, any other comments?  
… First pass at updating validation language. The last time we discussed this issue, there was agreement that everything was good except the normative text.  
… I'm not sure where things have gone since then.  

**Manu Sporny:** I believe Joe removed the normative text, it looks great at this point, I think it's ready to merge. Joe, I found one minor nit, and it needs a rebase.  
… Then an issue raised ... but this PR is ready to go with rebasing, etc.  

**Joe Andrieu:** Ok, I'm ok with that -- what issue?  

**Manu Sporny:** You created new text -- ...  

**Joe Andrieu:** Oh, I created that issue.  

**Manu Sporny:** Oh, maybe a duplicate there, I'll close my issue. This is ready to go, you just need to rebase.  

**Joe Andrieu:** Ok, I'll look at it. I agree we should be ready to merge.  

**Brent Zundel:** As soon as you rebase, we plan on merging.  
… As long as the comments have gotten in for Ivan's scripts.  
… Any other comments?  

#### 1.9. Update to Terms of Use description (pr vc-data-model#1295)
{: #section1-9}

_See github pull request [vc-data-model#1295](https://github.com/w3c/vc-data-model/pull/1295)._

<!-- issue w3c/vc-data-model/1295 -->



> *Phillip Long:* Yay! to merging and moving on re: 1297.

**Brent Zundel:** Update to the terms of use description. Last we talked, we were in a pretty good place on this PR. Still a request for changes from Orie, some language clean up from Ted.  
… Is David on the call? I don't see him.  
… Orie's concern ... his request was regarding the test suite. I raised an issue to track those concerns. With Ted's requested changes in place, if those get added, I think this PR can be merged. That's the status as I understand it.  
… I'm wondering if it would be appropriate to give David a couple of days to accept / respond to Ted's proposed modifications and if he doesn't in a couple of days, how inappropriate would it be to just accept those modifications and merge this?  

**Manu Sporny:** I think Ted, you just requested editorial changes and I can do that. I don't think it's inappropriate to do that and it doesn't change the content.  
… I can merge all of Ted's changes if David doesn't respond in an appropriate time frame. I did ask him to respond two days ago. We can give it another two days and then I'll merge Ted's stuff and merge the PR into main as a suggested way forward.  

**Brent Zundel:** I'm going to add a comment to the issue to say we plan to accept Ted's changes and merge this PR by Friday if we don't hear from you. Is that inline with where folks are at?  

**Manu Sporny:** Yes.  

**Brent Zundel:** Ok.  

#### 1.10. Add links to static copies of vocabulary files and hashes (pr vc-data-model#1279)
{: #section1-10}

_See github pull request [vc-data-model#1279](https://github.com/w3c/vc-data-model/pull/1279)._

<!-- issue w3c/vc-data-model/1279 -->



**Brent Zundel:** Add links to static copies of vocab files and hashes.  
… This is another one of those that -- I thought we had a path forward.  
… Changes have been requested, changes have been made, we haven't had a re-review from the requesters.  

**Manu Sporny:** Yes, we're waiting on Kristina and Orie to re-review and approve.  

**Brent Zundel:** But we've been waiting for re-review for two weeks?  

**Manu Sporny:** You are correct.  

**Brent Zundel:** Ok, then it's entirely appropriate for us to say that we've done everything we can to address those requests, in the absence of re-review we can only assume we've done things correctly and we will merge today.  

**Ivan Herman:** I believe that the changes you've changes will address the comment that was more or less the same between Kristina and myself. She didn't +1 but you answered her comment, that's how I see it. I cannot comment on Orie's requests I didn't look at the details.  

**Brent Zundel:** Once the minutes are in I plan on merging this PR and the minutes will note that.  
… Any comments before moving on?  

#### 1.11. Warn that using dynamic processor features might lead to less interoperability (pr vc-data-model#1276)
{: #section1-11}

_See github pull request [vc-data-model#1276](https://github.com/w3c/vc-data-model/pull/1276)._

<!-- issue w3c/vc-data-model/1276 -->



**Brent Zundel:** This one is already marked pending close.  
… David is requesting changes, Orie is requesting changes.  
… It's been two weeks.  
… We did get some more feedback from David.  
… Orie seems fine with it being closed. That's where we're at. I'm planning on closing after the call at this point.  

**Manu Sporny:** The reason it was marked pending close is because Orie was objecting but just didn't use the button to object. I don't see a way around ... we need Orie to respond or it's getting closed and I expect closure.  
… If this is closed, we should also close the feeder issue, which was raised by Orie.  
… There are a subset of people in the WG that are pushing for all JSON-LD features and not to say anything else. This PR was about saying that interop will be better if you don't use all features all the time.  
… This is why we were going to say that if you use fewer features and profile down that you'll get more interop and it's fine and legal to do that both that and with more features. This PR was saying that the more features you use, the less interop you may see.  
… I don't know how that affects the original issue Orie raised, but if we close this PR, we should close that other issue as well.  
… Noting what Dave is saying -- this is a post-CR issue, we could mark it as that.  
… That's another path forward here. I want to make it clear that David Chadwick has been saying he wants to use full URLs in certain places, there's no spec text stopping that, it's just going to lead to interop issues and the spec won't have had any warnings about that.  
… We will continue to just stay vague.  

> *Manu Sporny:* This is also related to [https://github.com/w3c/vc-data-model/issues/1206](https://github.com/w3c/vc-data-model/issues/1206).

**Brent Zundel:** I appreciate Dave pointing out that this is a post-CR PR.  
… It would be inline with the other PRs that we don't have consensus on to mark it as post-CR if we feel like it's possible to have a path forward that leads to some sort of consensus.  

**Dave Longley:** If I recall, Orie's objection was around recommending that people don't use certain JSON-LD features. I think we've changed the text to say it's not the goal... we want to inform people that if they use a lot of features, they might get less interop.  
… I don't know if we've gotten sufficient feedback from Orie on that, but that might be a path forward in the post-CR phase.  

**Brent Zundel:** Thank you, Dave, I appreciate that comment, I've marked it post-CR.  

#### 1.12. Warn authors that usage of global JSON-LD keywords might harm interoperability (pr vc-data-model#1271)
{: #section1-12}

_See github pull request [vc-data-model#1271](https://github.com/w3c/vc-data-model/pull/1271)._

<!-- issue w3c/vc-data-model/1271 -->



**Brent Zundel:** Warn usage of global JSON-LD keywords may harm interop.  
… My proposal is to label this post-CR and talk about it at that point.  
… If I've misinterpreted the changes requested in this PR please let me know -- if this should be pre-CR.  

**Manu Sporny:** It's attached to a pre-CR issue, is the only item I'm noting.  

**Brent Zundel:** Ok, it's attached to the i18n review.  
… What do we do?  

**Manu Sporny:** We are probably going to need to spend some time about what we're doing the JSON-LD features as a mechanism as a mechanism to express the default language and text direction. Using those in an `@context` value or defining our own credential language / direction fields.  
… That seems to be the decision we need to make, once we make that decision, that drives the pre-CR issue.  
… I will note we asked for a review from Orie but he hasn't provided one yet.  
… The other approach is to see if Orie will object to this.  
… It's still pre-CR, we have to make a decision about default language/direction and that requires discussion. Then we can decide what to do with this PR and the issues attached to it.  

**Brent Zundel:** I'm going to mark as discuss and get rid of "do not merge". I will set aside call time tomorrow to talk about this.  
… Ideally with Orie on the call tomorrow.  
… And see what we can find out.  

**Ivan Herman:** I also see a separate discussion on IRC ... but we had a special call, some weeks ago.  
… About this problem and I thought that the agreement ... not this PR itself, but the underlying i18n issue ... and I thought that the idea was that we'll use the global JSON-LD facilities and that we put in a PR along those lines and we try to move on with that.  
… That's my recollection, but my memory may be off.  

**Manu Sporny:** We did have a conversation that Ivan is referencing. I don't think we got to that conclusion though. We got 80% of the way there and I think Andres, you, maybe Gabe, maybe Phil or Dmitri ... some subset of people saying we want new properties.  

> *Phillip Long:* I'm also find with JSON-LD mechanisms.

**Manu Sporny:** Then the question was are the people that don't want the JSON-LD keywords going to object. The other thing was that the i18n group might want us to strongly recommend a default language / direction in all VCs. I'm uncomfortable with that.  
… We need to know if anyone will object to using default JSON-LD terms and do you have to do that for all VCs.  

**Ivan Herman:** I think it would be perfectly fine to put in a PR with those changes -- with the global mechanism and I agree with requiring to set a global language for all VCs for all the text fields ... are in a strong minority anyway, we wouldn't put it there.  
… I think we can move ahead by coming up with a PR and take it from there.  
… And not discuss the issue again and again.  

**Brent Zundel:** PR 1271 should be closed in favor of a new PR?  

**Ivan Herman:** I don't think so. There are also issues about other globals settings.  
… That's a separate one, sorry.  

**Manu Sporny:** This PR could be changed to remove the `@language` and we could pick some other global keywords, I still expect Orie's objection on any feature, we need Orie on the call.  

**Brent Zundel:** So the original course of action is that we'll talk about this a bit tomorrow, whether or not other PRs show up to address the underlying issues.  
… Thank you all, this was a good call, look forward to seeing you on tomorrow, thank you Dave for scribing and Manu as backup.  

---
