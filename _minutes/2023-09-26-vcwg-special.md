---
layout: minutes
date: 2023-09-26
title: Verifiable Credentials Working Group Special Topic Call — 2023-09-26
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-09-26-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call",
        "dateCreated": "2023-09-26",
        "irc": "vcwg-special",
        "datePublished": "2023-09-27",
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
            "name": "Verifiable Credentials Working Group Special Topic Call",
            "startDate": "2023-09-26",
            "endDate": "2023-09-26",
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
                            "name": "Dave Longley"
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
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Sebastian Crane"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call — Minutes
{: .no_toc}



**Date:** 2023-09-26

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20230926T180000/) and the [IRC Log](https://www.w3.org/2023/09/26-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Phillip Long, Kristina Yasuda, Shigeya Suzuki, Ted Thibodeau Jr., Dave Longley, Manu Sporny, Gabe Cohen, Sebastian Crane, Dmitri Zagidulin, Michael Jones

**Regrets:** 

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** Dave Longley

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Kristina Yasuda:** The agenda I sent out is pretty straightforward, special topic call is for us to keep talking about the VC data model issues that are labeled before CR but do not have ready for PR or PR exists labels.  
… The plan is to discuss PRs tomorrow's working group call.  
… Any other items to cover?  

### 1. PRs.
{: #section1}

**Manu Sporny:** We made a resolution to take the Data Integrity specs to CR and then we decided we needed to address all of the horizontal review comments. All of those PRs have been merged.  

> *Manu Sporny:* [https://github.com/w3c/vc-data-integrity/pulls/](https://github.com/w3c/vc-data-integrity/pulls/).

**Manu Sporny:** The only one that is remaining is the one that you requested changes on, Mike Jones, PR #196.  

#### 1.1. Remove normative dependency on Multibase and Multihash. (pr vc-data-integrity#196)
{: #section1-1}

_See github pull request [vc-data-integrity#196](https://github.com/w3c/vc-data-integrity/pull/196)._

<!-- issue w3c/vc-data-integrity/196 -->



**Manu Sporny:** If you could take another look at that PR, Mike -- and if Orie can look at that PR then that's the last thing to be addressed before we go forward with CR.  
… I guess we can talk about that more tomorrow, this is just a request for a re-review.  

**Kristina Yasuda:** Cool, ok. Put that on the agenda for tomorrow, Orie can join tomorrow. The controller document conversations in DI and vc-jose-cose -- if you could take a look at my last comment and respond that would help.  

**Manu Sporny:** Kristina, if you made that comment an hour or two ago I probably thumbs up'd it.  

**Kristina Yasuda:** After that.  

**Manu Sporny:** I'll look.  

### 2. vc-data-model pre-CR issues.
{: #section2}

> *Kristina Yasuda:* [https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+-label%3A%22ready+for+PR%22+label%3Abefore-CR+-label%3A%22pr+exists%22+sort%3Aupdated-desc](https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+-label%3A%22ready+for+PR%22+label%3Abefore-CR+-label%3A%22pr+exists%22+sort%3Aupdated-desc).

**Kristina Yasuda:** So it's in the most recently updated order.  
… I think we need Orie for one of these and I'll park that for now.  

#### 2.1. Pre-CR review from Jeffrey Yasskin (issue vc-data-model#1285)
{: #section2-1}

_See github issue [vc-data-model#1285](https://github.com/w3c/vc-data-model/issues/1285)._

<!-- issue w3c/vc-data-model/1285 -->



**Kristina Yasuda:** Pre-CR review from Jeffrey Yaskin, it's a lot.  

**Manu Sporny:** This is a massive review by Jeffrey Yaskin from Google. The good news is that there is only one thing that I think he really wants us to fix is to see an algorithm -- it needs to be turned into an issue. He would like to see the algorithm for verification and wants it defined in the spec.  
… He notes that Google might object if it isn't present.  
… He spent the whole trip back from TPAC doing a large review, lots of commentary, will take a long time to triage.  
… This is a heads up to the group that it will take significant work to close this out.  
… Jeffrey said he doesn't care how we process it, one issue is before CR. We could say everything else is post CR, but sometimes when you start talking about the changes it becomes evident that a normative change is desirable.  
… It's going to take weeks, easily, to fully process.  

**Kristina Yasuda:** Thank you.  
… I don't think it's realistic to keep processing this review in this one issue. I'll take an action to separate this into multiple issues. Ideally not per comment, but ... editorial ones, big ones. Thematically / topic-wise. Then we'll take it from there.  
… I'll try to label pre/post CR based on editorial/normative.  
… Any objections?  

**Manu Sporny:** No objections, thank you, lots of work. I started going through his comments and marking them as editorial or normative and hoping that he provides some feedback on it, hopefully that helps you categorize.  
… Again, don't block on me doing that though.  
… I could keep doing that over the next week, or would you rather just process on your own time frame.  

**Kristina Yasuda:** Sorry, you're suggesting to keep going back and forth with Jeffrey?  

**Manu Sporny:** No, I'll put a link.  

**Kristina Yasuda:** I will build up on that.  
… Anything else you want to add to what you started here? Obviously you didn't get to the end.  

**Manu Sporny:** Yes, after two hours only through section 4. I would continue through section 8 or whatever.  

**Kristina Yasuda:** I will turn things up to section 4 into issues and then I can build up on the next bit.  

**Manu Sporny:** Sounds great, thanks.  

**Kristina Yasuda:** For everyone else, if you're willing to take a look at the issue, if you'd rather wait for Manu/me to break up it up, that's fine too, but input welcome.  
… Moving on.  

#### 2.2. `termsOfUse` is insufficiently specified (issue vc-data-model#1010)
{: #section2-2}

_See github issue [vc-data-model#1010](https://github.com/w3c/vc-data-model/issues/1010)._

<!-- issue w3c/vc-data-model/1010 -->



**Phillip Long:** We don't have David but he said something about a use case in the EU and another person added something into this discussion around obligations around steps a processor must take.  
… David modified that slightly, that's where we stand at the moment. He did list a set of steps that would be appropriate to follow with one thumbs up -- that's where it sits.  
… I don't know if it's sufficiently specified with that comment and Mizuki's comment.  

**Kristina Yasuda:** Is there sufficient interest from the WG to work on this?  

**Phillip Long:** David seemed very interested and the effort from TRAIN being part of it.  
… Ted, if you have something to add that would be great.  

**Ted Thibodeau Jr.:** I don't have a lot to add, but David is enthusiastic -- we could do a lot more on this topic and a single implementation is insufficient, I don't think David's been involved with two.  

**Manu Sporny:** Given the amount of work that has gone into it here, and that's not much, I hate to say it, I don't think it will survive. I know that Isaac Henderson, who worked on the TRAIN stuff used this extension point. I think two independent implementations was the bar ... if TRAIN has that, we can keep it, but if not, by the end of CR, it gets cut.  
… The people that want to see it happen have to step up with two independent implementations during CR.  

**Kristina Yasuda:** I think even before two independent implementations, the issue here is that "what" to implement is underspecified. Unless we better define terms of use itself, I don't think we can even ask for implementations.  
… If there are no objections ... I would do pending close and see if anyone can do a PR within a week or so.  

> *Manu Sporny:* [https://w3c.github.io/vc-data-model/#terms-of-use](https://w3c.github.io/vc-data-model/#terms-of-use).

**Manu Sporny:** So I think we have people claiming it was specified well enough for them to write a spec and do implementations for TRAIN. I'm concerned about closing it, issue 1010 is in the spec now under terms of use and if we close it ... well, we still have it marked as a feature at risk. It feels we need an issue to track it.  
… That's my concern, tracking its status.  

**Dmitri Zagidulin:** I was just going to say, in regard terms of use being insufficiently specified that won't be enough ... but with other properties it's been sufficient for others to find it useful to create implementations.  
… A lot of our VC properties are loosely defined, maybe just having implementations is sufficient ... I'm not sure?  

**Kristina Yasuda:** You're not sure the property is underspecified?  

**Dmitri Zagidulin:** No, I'm not sure we don't have this same situation with other properties.  

**Ted Thibodeau Jr.:** The degree to which this is underspecified, I think this is greater than most if not all others.  
… The idea that is expressed for terms of use was that it was going to somehow be technologically enforceable and it was going to be clear enough for humans to work with.  
… And with it being a complete hand wave as it stands, I don't think it even requires that it be a URI. That would make it at least self-describing and systems have to be able to do something with it or pass the information back to the human operator. That's not here yet.  
… The TRAIN project, to the extent they've worked with it, I'm afraid have followed David down the road and what they did will work within their system but I don't think they have a spec that others could use to interoperate with them.  

**Kristina Yasuda:** If the WG agrees with Ted that terms of use as it is now is underspecified, I think I do -- either we work on it until it's well defined or we have to end up removing it.  
… I think the question is: Do we work on it to define it better or do we remove it?  

**Manu Sporny:** Where terms of use came from ... is that there was another W3C WG that was doing open digital rights -- and it would allow machine processable terms of uses, etc. and that spec is arguable dead now.  
… We built terms of use to work on top of ODRL and that ended up not being a thing. The only thing that could save this is the TRAIN work -- and with everything else in the WG, I don't see anyone working enough on it to ensure it survives.  
… It doesn't seem we have people committing to fully specify it. I'm a bit in favor of removing it at this point for that reason.  

**Kristina Yasuda:** Ok, moving on... but we can't close it until there is a PR to remove it or a PR to build up on it.  
… I will do a PR to remove it from the VCDM and we'll see how that goes.  

> *Manu Sporny:* +0.5 on PR to remove :).

> *Manu Sporny:* (noting that there will have to be a counter-PR to keep it in the spec).

> *Dmitri Zagidulin:* will it still be on the 'reserved' list?

> *Dmitri Zagidulin:* if removed?

> *Manu Sporny:* yes, it should be reserved if removed...

> *Manu Sporny:* (that's what the current issue text says).

**Kristina Yasuda:** Yes, I will do a PR to remove it and move it to the reserved list, thank you, everyone.  

#### 2.3. are `domain` and `range` correct for all properties in data model? (issue vc-data-model#1263)
{: #section2-3}

_See github issue [vc-data-model#1263](https://github.com/w3c/vc-data-model/issues/1263)._

<!-- issue w3c/vc-data-model/1263 -->



**Kristina Yasuda:** We might need Ivan for this issue.  
… Last time we discussed this, Brent said the action was to have volunteers to go through the spec and compare to the diagram and see if it says what we meant it to say. Is there any progress on this?  

**Manu Sporny:** Yeah, kinda sorta progress, what is going to have to happen is people will have to make sure all of this is correct. What we probably need specifically ... well, there are a couple of problems when this was first raised was that there were no base / super classes.  
… Those exist in a PR now and I forget if its getting merged soon or not. The `VerifiableCredentialGraph` exists now and it was missing. The question is: does everything exist in the diagram now?  
… People will need to make sure everything in the diagram exists in the spec. This doesn't feel like a "ready for PR" thing, it looks like a "people need to double check", we need volunteers to assign to this. I will also note that myself, Brent, Juan, etc. are assigned.  
… It just needs to be reviewed by us.  

**Kristina Yasuda:** Ok.  
… Did you say that those PRs merged right before this call -- partially address this?  

**Manu Sporny:** Yes, there is another... looking.  

> *Manu Sporny:* [https://w3c.github.io/vc-data-model/#vocabularies](https://w3c.github.io/vc-data-model/#vocabularies).

**Manu Sporny:** Base classes now exist in the vocabulary section -- that was a huge part of the work that needed to be done and that's now merged.  
… I think the assertion at this point is that we have fixed everything and we just need review.  

**Kristina Yasuda:** Ok.  
… Do we have a good label for that?  

**Manu Sporny:** No, we don't have one for "needs review".  

**Kristina Yasuda:** Ok will do "close after reviews" or something.  

#### 2.4. Address Metadata-Driven Correlation (issue vc-data-model#1244)
{: #section2-4}

_See github issue [vc-data-model#1244](https://github.com/w3c/vc-data-model/issues/1244)._

<!-- issue w3c/vc-data-model/1244 -->



**Kristina Yasuda:** So this one, I was about to do the PR today, should be marked ready for PR. This one is fine.  

#### 2.5. Strengthening Trust Boundaries for Holder Software in Verifiable Credential Processing (issue vc-data-model#1246)
{: #section2-5}

_See github issue [vc-data-model#1246](https://github.com/w3c/vc-data-model/issues/1246)._

<!-- issue w3c/vc-data-model/1246 -->



**Kristina Yasuda:** We talked about this one two weeks ago with Nick from PING.  
… I think overall, me, Brent, Manu, Dmitri, Joe, were saying that we can somewhat address this in the text. But we do not have anyone assigned.  
… Is there anyone who would like to volunteer to do a PR? If this is clear enough?  

**Manu Sporny:** I can probably take this, if I can't get to it maybe someone can take it off my plate. All they are asking for is a privacy consideration around the fact ... that digital wallets are in a privileged position and that should be highlighted.  

**Kristina Yasuda:** Ok, if too much on your plate, bring it up on the call, assigning to you.  

**Manu Sporny:** Thanks.  

#### 2.6. Internationalization Review for VCDM 2.0 (issue vc-data-model#1155)
{: #section2-6}

_See github issue [vc-data-model#1155](https://github.com/w3c/vc-data-model/issues/1155)._

<!-- issue w3c/vc-data-model/1155 -->



**Kristina Yasuda:** This is an internationalization one.  
… We keep adding / removing "ready for PR".  
… So we discussed at PR how we would address this. We had a poll.  
… We didn't assign anyone and we still don't have ready for PR.  

> *Manu Sporny:* See [https://github.com/w3c/vc-data-model/issues/1264#issuecomment-1712807665](https://github.com/w3c/vc-data-model/issues/1264#issuecomment-1712807665).

_See github issue [vc-data-model#1264](https://github.com/w3c/vc-data-model/issues/1264)._

<!-- issue w3c/vc-data-model/1264 -->



**Manu Sporny:** Yeah, this is also tied in with issue 1264. There kinda/sorta duplicates of one another.  
… I'm worried about this one ... I think we need the i18n people in one of our meetings and we need to talk with them, back and forth, need to avoid doing something they would object to.  
… Assigning a language for the whole VC is a problem and we don't want to do that.  
… Addison has responded with something where he's basically saying, we have a number of options we've proposed that satisfy their requirements but it's not clear what the best one they'd like. We should bring them in to talk with them about it before moving forward.  

> *Manu Sporny:* [https://github.com/w3c/vc-data-model/issues/1264#issuecomment-1719022289](https://github.com/w3c/vc-data-model/issues/1264#issuecomment-1719022289).

**Manu Sporny:** Let me link to Addison's response in IRC.  
… He's basically saying, this is what the i18n WG is looking for and there's some MUSTs/SHOULDs/MAYs ... and he analyzes each option that is above, noting that there are a couple there ... just about every option except the last one satisfies what they want but it's not clear which they'd want.  
… It's not clear how much of a hard line they are taking here on any approach. I'd like to get them on a call so we can just say once and for all what we're doing and then move on without worrying about any objections during transition.  

**Sebastian Crane:** A few weeks ago, we had a call and I proposed a resolution, we didn't get to voting on that. The initial reception was unanimous reception within this WG, so I think the only thing to do is get the i18n people involved.  
… There isn't much left with that issue then.  
… It would just be implementation from then on.  

**Kristina Yasuda:** Thanks. Quick question -- how is not using `@language` in `@context` aligned with using `@language` keyword for i18n?  

**Manu Sporny:** They are not aligned.  
… The i18n are saying: They want a document level default and I don't know how hard of a line we have on that and then our only option is going to be using `@language` in `@context` and that's got problems.  
… JSON-only processing is more difficult and it will tag values that are not supposed to have languages like base64 values with a language tag.  
… So, during the F2F we were saying be surgical, use the `@language` and `@value` and `@direction` stuff.  
… We also said, maybe we'll alias that, but people came up with reasons we shouldn't alias.  
… So I think what seabass said was to just use the `@` language features in a targeted way and we just need to find out if i18n people would be ok with that approach.  

**Sebastian Crane:** I would like to expand on that, I'm not a member of i18n WG at the moment. There's a technical reason not to do global language but there's also a reason that it's philosophical reason that it's not good, "you can enter" is the same meaning no matter what language you say it in.  
… They are not just simple language documents. When you're using JSON-only processing you may not get to use those advanced RDF feature.s.  
… Having the language translation features within the properties themselves is more elegant, you're not translating the credential itself.  

> *Manu Sporny:* agree with seabass.

**Dave Longley:** +1 to seabass.  

> *Phillip Long:* +1 to seabass2.

**Kristina Yasuda:** Ok, I will reach out to set up a meeting with i18n.  

#### 2.7. Evidence extension point (was: Improve tests for Evidence) (issue vc-data-model#870)
{: #section2-7}

_See github issue [vc-data-model#870](https://github.com/w3c/vc-data-model/issues/870)._

<!-- issue w3c/vc-data-model/870 -->



**Kristina Yasuda:** We don't have Orie, but let's pick this up.  
… The `evidence` extension point.  
… Orie is saying that `evidence` property is poorly defined. Similar conversation with terms of use.  
… Here, looking at the comments it feels like there are many more implementations of this property.  
… The question is, how can we better define this?  

**Phillip Long:** There are anywhere from 8... depending on which spec you look at, there are maybe 15 different companies implementing with Evidence as currently defined.  
… We can try to tighten it up a little, but it seems it has been implemented or is in the process of being implemented with a number of different orgs/companies.  
… It is certainly meeting the two implementations requirement.  
… I think the big issue was defining the range and domain of the term.  
… I'll leave it at that.  
… It's in place and working and we should probably leave it alone.  

**Kristina Yasuda:** Thank you so much for summarizing the discussion in your comment.  

> *Kristina Yasuda:* summary of the discussion: [https://github.com/w3c/vc-data-model/issues/870#issuecomment-1714637815](https://github.com/w3c/vc-data-model/issues/870#issuecomment-1714637815).

**Kristina Yasuda:** So the question is whether we need an abstract class or not.  

**Manu Sporny:** Yes, I think we now ... because of that other merged PR, we have an abstract class.  
… We have `CredentialEvidence` as the base class now.  

> *Manu Sporny:* [https://w3c.github.io/vc-data-model/#vocabularies](https://w3c.github.io/vc-data-model/#vocabularies).

**Kristina Yasuda:** That addresses Orie's point, right?  

**Manu Sporny:** Correct. We should probably mark this as pending close with a new issue that says -- refer to the OpenBadges v3 spec.  
… For a concrete example.  
… We can update the example using a 1EdTech spec with the OpenBadges v3 thing and point over there.  
… We can point at that global standards org that has adopted it with multiple implementers.  
… We should not get rid of the property, we have demonstrated usage by a global settings org with multiple implementers. We should just update the evidence section to use a real / concrete example.  
… And be done with it.  
… `evidence` should be off the chopping block for being deprecated, we just need a new example.  

**Kristina Yasuda:** Thank you for the proposal.  

**Sebastian Crane:** I'm not sure if we have an example anywhere else that refers to a separate real life example to a non-W3C spec. This is a use case. We are ... would be adding an example that references a real life use case. I'm not sure we want to go down that path without looking at competition implications.  

**Kristina Yasuda:** For the sake of this issue, my proposal would be to mark it pending close ... point to the fact that the abstract class that Orie asked for has been added.  
… If folks want to raise a separate issue on examples, that should be a separate issue, regardless of closing / not closing.  

**Manu Sporny:** +1 to that, Kristina. I was getting ready to raise that issue.  
… Sebastian, to your point, I think all examples are non-normative.  
… It's fine for us to point to an external document and specification in a non-normative capacity, this one is a bit different though, 1EdTech is a global standards setting org and they do education standards and they are using VCs for their standards.  
… We're not just pointing out to the Web, we're point to another standards setting org.  
… For that reason, I think it's fine for us to link that way.  

> *Kristina Yasuda:* this PR added an abstract class [https://github.com/w3c/vc-data-model/pull/1272](https://github.com/w3c/vc-data-model/pull/1272).

**Kristina Yasuda:** We're at time.  
… Thank you everyone for joining. Tomorrow's WG call, let's go through the PRs, let's talk about the controller documents in DI and vc-jose-cose and if we have time, let's talk about issues.  

---
