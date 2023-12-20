---
layout: minutes
date: 2023-12-19
title: Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — 2023-12-19
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-12-19-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs",
        "dateCreated": "2023-12-19",
        "irc": "vcwg-special",
        "datePublished": "2023-12-20",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs",
            "startDate": "2023-12-19",
            "endDate": "2023-12-19",
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
                    "name": "Gabe Cohen"
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
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — Minutes
{: .no_toc}



**Date:** 2023-12-19

See also the [Agenda]() and the [IRC Log](https://www.w3.org/2023/12/19-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Hiroyuki Sano, Gabe Cohen, Dave Longley, Michael Jones, Joe Andrieu, David Lehn, Manu Sporny, Ted Thibodeau Jr., Andres Uribe

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Dave Longley, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Brent Zundel:** This is the VCWG special topic call, our topic remains the PRs that we need to try to come to consensus on before we go into CR.  
… For which we are at least we are at least a couple of months overdue but we are making progress.  
… I think the current set of PRs represents or very nearly represents all the issues we need to address before, so we're in as good a spot as we can be at this point.  
… Before jumping into the PRs, anything else to have on the agenda today?  

**Manu Sporny:** I forgot that I sent a call out for new maintainers for the VC specs dir and the DID registry, just given Orie and Mike Prorock's current status. We got a ton of volunteers, 17 people stepped forward. I'm collecting info from them currently.  
… We should talk about that for 5 minutes.  

**Brent Zundel:** Go ahead.  

### 1. VC Specs Dir maintainers.
{: #section1}

**Manu Sporny:** Some of these folks are known to the community, others are randomly out of no where. Getting 17 people is a bit much but let's assign them and see who does the work.  
… I've asked for names, github handle, and some place to know about their background and qualifications. I'm guessing the group will want to have some say over who gets assigned and when. Maybe we have a call / decide in January as a group around that.  
… The VC WG that makes sense, the DID WG I don't know.  

**Brent Zundel:** Mailing list probably.  

**Manu Sporny:** I have 12 / 17 have filled out the form and we will have a call with them to figure out who runs away and who stays.  
… We will put them forward as volunteers and have the group decide if there are any objections to anyone, there will still be oversight over anyone.  
… That's it.  

**Brent Zundel:** Thank you, Manu.  
… It's great when people step forward.  

### 2. PRs.
{: #section2}

> *Brent Zundel:* [https://github.com/w3c/vc-data-model/pulls?q=is%3Apr+is%3Aopen+label%3Abefore-CR](https://github.com/w3c/vc-data-model/pulls?q=is%3Apr+is%3Aopen+label%3Abefore-CR).

**Brent Zundel:** This is the link for all the PRs open and labeled before CR.  
… There are 12 to discuss today.  

#### 2.1. Correct layering violations related to the proof property (pr vc-data-model#1397)
{: #section2-1}

_See github pull request [vc-data-model#1397](https://github.com/w3c/vc-data-model/pull/1397)._

<!-- issue w3c/vc-data-model/1397 -->



**Brent Zundel:** Mike, you opened this one about an hour ago, I don't imagine people have had time to review.  

**Michael Jones:** Thank you.  
… I was assigned an issue about working on correcting layering violations. I finally allocated a couple days time to work on VCDM. Yay -- to try and help us finish.  
… Most of the layering violations that were present that I found had to do with unlabeled uses of the `proof` property. Places where `proof` was present but it wasn't said that it was specific to certain securing mechanisms. I did some of this a while ago to sync with vc-jose-cose.  
… This PR tries to be even handed around where `proof` is used and we say it's an example of using Data Integrity and where it wasn't needed I just removed it.  
… There is another PR to go along with this in Data Integrity where I wanted to be really careful where if I removed anything in the VCDM PR that needed to be said in DI that I wanted to be sure that DI said it.  
… The good news is that I read every line of my PR that was being removed and looked at DI and made sure that in almost all cases it was already said in DI. Only one sentence wasn't there. I am trying to be even-handed and positive and the point is to be agnostic to the securing mechanisms.  
… I hope that this helps close the issue about having an even-handed verification method.  
… Unless there are questions from people who have actually read it, I suggest we move on. I just wanted to flag to say we want people to read it because it gets us to closer to CR.  

**Brent Zundel:** If anyone has read it please jump on the queue.  

**Manu Sporny:** I was able to read it before the call. Some of the changes in the text being made has already been removed in other PRs.  
… That includes removing `proof` from some examples that has already been done in other PRs. That includes removing conformance statements around `proof` that are also gone. This PR would be removing things that are already taken care of elsewhere.  
… The one problem is with removing `proof` as an extension point. There's a mismatch in understanding there I think. The `proof` property is not meant to be DI-only, but an extension point to be used by other securing mechanisms, some that may not be DI.  
… That's my concern with the PR -- where it removes the extension point.  
… I don't think that was the intention of `proof` being an extension point. Otherwise, the PR is removing things that other PRs remove and that's fine. So I'm only worried about removing `proof` as an extension point.  

**Michael Jones:** Glad to hear that other PRs are already handling much of this.  
… We can all declare victory there.  
… With respect to the extension point point ... I tried to be really judicious about whether there are examples using `proof` ... where there are examples I said this is an example that could be secured using DI.  
… Quoting myself, something to the effect "`proof` can be included if specified for use by a securing mechanism." So any securing mechanism can be used, but it's not something you'd put in if the securing mechanism doesn't call it out. So I don't see it as needing to be a general extension point.  
… Any securing mechanism can define an extension point and one of those can be `proof`.  
… We can talk about that in the PR if you want.  

**Brent Zundel:** That's my recommendation, continue the conversation in the PR. It's been live for an hour, so get your reviews in.  

**Michael Jones:** Live for an hour, but two days of work, had to read lots of text.  

**Brent Zundel:** Thank you, Mike.  

#### 2.2. Rename "Controller Document" to "Entity Document". (pr vc-data-model#1396)
{: #section2-2}

_See github pull request [vc-data-model#1396](https://github.com/w3c/vc-data-model/pull/1396)._

<!-- issue w3c/vc-data-model/1396 -->



**Brent Zundel:** This PR renames "Controller Document" to "Entity Document", it has a good number of approvals and it does have request for changes from Joe.  
… Please jump on the queue.  

**Manu Sporny:** This PR came about because I'm trying to address Oliver's concerns around the spec and how issuer validation occurs and how you get the data for it -- and it meant talking about Controller Documents and connecting keys being used and so on.  
… That means talking about that language around there and it was awkward; we've been using "Controller Document" for a while and it's not lining up quite right. This is a bikeshedding exercise so we don't want to spend too much time.  
… The ActivityPub community uses Actor objects and uses or relies on this stuff -- and we have a separate spec for this and the name isn't quite right to match things up with other communities that want to share.  
… I think the main point here is that "Controller Document" is a bit confusing and it's hard to see that a "controller document" and a "DID document" and an "actor object" refer to the same concept.  
… This wouldn't be an issue if we didn't have to publish the controller document spec before we publish VCDM. Let's bikeshed in the PR, not today on the call.  

**Brent Zundel:** Thank you, Manu, thanks for the background.  
… Just noting, 4 approvals, request for changes from Joe to just keep calling it that.  

**Joe Andrieu:** One is -- I think "Entity Document" loses the semantic relationship to the VC and secondly, I don't think DID documents are the same as Actor objects, they are not about the subject but about how to interact with its identifier.  
… The binding between the identifier and the entity is the hard part in this work. A DID doc works even if you don't have that binding clear.  
… I think the naming here can be confusing / conflating in the marketplace.  

**Brent Zundel:** Others make comments in the PR, please, thank you folks.  

#### 2.3. Use new Securing Mechanism Verify Proof interface (pr vc-data-model#1394)
{: #section2-3}

_See github pull request [vc-data-model#1394](https://github.com/w3c/vc-data-model/pull/1394)._

<!-- issue w3c/vc-data-model/1394 -->



**Brent Zundel:** I'm wondering if it makes sense, Manu, to talk about 1394 before something else.  

**Manu Sporny:** I'm fine with any order. There are 3-4 that all build on each other, but they change different things.  

**Brent Zundel:** I was seeing the building -- but if the directionality isn't vital we'll just go.  

_See github issue [vc-data-model#1377](https://github.com/w3c/vc-data-model/issues/1377)._

<!-- issue w3c/vc-data-model/1377 -->



**Brent Zundel:** "Use new securing mechanism verify proof interface". This PR has been out for a day.  

**Manu Sporny:** This PR is an attempt -- at addressing the same concerns that Mike is trying to address in 1397. The way Jeffrey Yaskin and I are trying to address this is by saying the securing mechanisms must provide an interface that can give you back the secured data.  
… This basically says that that interface is in place. It says that a securing mechanism must define that interface and you need to take these inputs and give back these outputs.  
… Once that's in place, then we can address the layering violations -- it means we can drop a lot of language around processing `proof` and so on. I think it achieves what Mike's PR is also achieving, or part of it, by just using the interface.  
… By using the interface, we have gotten rid of mention of `proof` in the algorithms and the need to have a different verification mechanism algorithm. The interface makes it so we don't have to define that extra algorithm.  
… It defines what the interface should be for the securing mechanisms and uses that in the verification algorithm and we have a simple, three step algorithm.  

**Brent Zundel:** Please jump on the queue if you've read this PR.  

**Michael Jones:** I will review it, I saw that it existed and skimmed it but decided to finish my PR first.  

**Brent Zundel:** Thank you, Mike.  
… Any other comments?  

**Manu Sporny:** Mike, when you're reviewing, keep in mind that this isn't an either-or -- it just simplifies a lot of language in your PR from there and we can see what deltas remain.  

**Michael Jones:** Makes sense.  

**Brent Zundel:** Thank you both.  

#### 2.4. Clarify how issuer validation occurs. (pr vc-data-model#1393)
{: #section2-4}

_See github pull request [vc-data-model#1393](https://github.com/w3c/vc-data-model/pull/1393)._

<!-- issue w3c/vc-data-model/1393 -->



**Brent Zundel:** "Clarify how issuer validation occurs".  

**Manu Sporny:** This PR is an attempt at addressing Oliver's concern where Oliver is saying that the spec needs to be clear about how you verify that a VC came from a particular issuer.  
… Some people in the group would argue that's validation.  
… And that we don't do that and don't normatively specify that. So what I tried to do is ... we're now specifying an interface between the securing mechanisms and the VCDM verify algorithm -- and it now returns the controller and controller document. That gives you info you could use to check against the issuer.  
… However, that's not the only way to do validation, you could also have a trust list with some keys and you could just trust that -- including the statements in the VC, including the issuer field.  
… In that case the issuer isn't directly tied to the verification method and controller, etc. -- so I tried to address Oliver's concern to ensure the information is available if the issuer validation works one way.  
… I added some non-normative language as well to help address Oliver's concerns. I don't know if these changes together address his concerns.  

**Brent Zundel:** Any comments on this PR?  
… If all of these, if it's possible to find consensus, if the language needs tweaks or not, that is our goal. If you have comments to make please do or say the PR is great, etc. Let us know what we need to change for you if you need it.  

#### 2.5. Add requirement for securing mechanisms to have post-verification documentation. (pr vc-data-model#1392)
{: #section2-5}

_See github pull request [vc-data-model#1392](https://github.com/w3c/vc-data-model/pull/1392)._

<!-- issue w3c/vc-data-model/1392 -->



**Brent Zundel:** "Add requirement for securing mechanisms to have post-verification documentation".  

_See github issue [vc-data-model#1388](https://github.com/w3c/vc-data-model/issues/1388)._

<!-- issue w3c/vc-data-model/1388 -->



**Manu Sporny:** This PR is an attempt to address a concern from Jeffrey Yaskin -- he wanted the securing mechanism specs to be very clear about what is and is not acceptable from a post-processing standpoint.  
… This results in the interface we're defining -- the expectation is that there is an interface to ensure that only secured data is returned from the securing mechanism.  
… In addition, Jeffrey wanted us to say that when you return that data back, the spec still says more about it. Such as, if you use VC-JOSE-COSE, the spec should say that that no JSON-LD processing was performed.  
… A simpler example is ... "when you verify the data and you get back the secured data, you probably shouldn't sit on that data for a year and then use the data in a production setting without reverification".  
… Something that says "don't use stale data that was only checked a year ago".  
… So Jeffrey wants something like that -- this PR creates a requirement for the securing mechanism specs to be clear about those types of things.  

**Brent Zundel:** Thank you, Manu.  
… Any comments on the PR?  

**Michael Jones:** Can you explain a little more by post-processing and why Jeffrey is worried about it?  

**Manu Sporny:** Post-processing is Jeffrey ... as he's defined it ... is any processing after verification.  
… You have a secured VC in, you run the verification algorithm, you get back the protected data and then everything after that is "post-processing".  

**Michael Jones:** So using the claims would be post-processing.  
… That seems like someone we'd want to have happen.  
… I don't know what kind of negative post-processing he's concerned about.  

**Manu Sporny:** He links to two blog posts that talk about it -- and he had general uneasiness around using the claims in ways that they had not been intended to be used.  

**Michael Jones:** I'll look at it.  

**Manu Sporny:** Thanks.  

#### 2.6. Clarify that ProblemDetails can be extended for any reason. (pr vc-data-model#1391)
{: #section2-6}

_See github pull request [vc-data-model#1391](https://github.com/w3c/vc-data-model/pull/1391)._

<!-- issue w3c/vc-data-model/1391 -->



**Brent Zundel:** "Clarify that ProblemDetails can be extended for any reason".  
… Nothing but approvals on this, it's pretty straightforward clarification that says you can use this even in production, etc.  
… I expect this to be merged when the week is up.  

#### 2.7. Clarify that non-objects aren't allowed as VC graphs. (pr vc-data-model#1390)
{: #section2-7}

_See github pull request [vc-data-model#1390](https://github.com/w3c/vc-data-model/pull/1390)._

<!-- issue w3c/vc-data-model/1390 -->



**Brent Zundel:** "Clarify that non-objects aren't allowed as VC graphs". This has a broad set of approvers, one request for changes.  
… From Ted who is bringing editorial clarity with his suggestion. I expect this to be merged without trouble by the end of the week.  
… Happy for comments if there are any.  
… No one on the queue here either.  

#### 2.8. Clarify that "proof" is an extension point (pr vc-data-model#1389)
{: #section2-8}

_See github pull request [vc-data-model#1389](https://github.com/w3c/vc-data-model/pull/1389)._

<!-- issue w3c/vc-data-model/1389 -->



**Brent Zundel:** Clarify that `proof` is an extension point. This PR is addressing issue 1316. I'm going to let Manu talk about it.  

_See github issue [vc-data-model#1316](https://github.com/w3c/vc-data-model/issues/1316)._

<!-- issue w3c/vc-data-model/1316 -->



**Manu Sporny:** There was a part of #1316 that I thought we could potentially address before CR. This PR attempts to clarify that `proof` is an extension point and always has been, and DI uses it in a way that's compatible, but DI isn't the only way. Other specs can use it too.  
… The only requirement is that you specify the `type` of the `proof`.  
… The concern here is that if we make `proof` only about DI then it's bound explicitly to that and we wanted to avoid that.  
… It makes some non-normative and small normative changes to clarify that. This PR also splits the securing mechanism section into two parts, one is to talk about securing mechanisms generally.  
… We talk about envelope and embedded proofs. The separate part we create the `proof` extension section explicitly.  
… It makes it much clearer that it's non-exclusive.  
… There are some concerns that Ivan has and Mike has concerns, but we shouldn't look at this as an either-or with the PRs that Mike raised and this one. I think we can merge this one and Mike can come back in an make his edits.  
… The key split here is that to talk about securing mechanisms and their specs wholly separately from the `proof` extension point.  

**Brent Zundel:** Thank you, Manu.  

**Michael Jones:** The strange thing I ran into when doing my PR was a statement that all embedded proofs must use the `proof` property. Which seems it's overly tying the hands of people writing proof mechanisms that we haven't thought of.  
… You could easily imagine some future ZKP mechanism embedding a different identifier that's specific to the mechanism. It's fine for it to be an extension point, but it shouldn't be a mandatory one for all embedded proofs. I'll review with that hat on.  

**Manu Sporny:** Totally agree, that is exactly the normative change I was hoping we could make. We're in agreement on that.  
… The previous text forced anyone doing an embedded securing mechanism to utilize proof and we should relax that and +1 to that, Mike says he agrees.  

**Michael Jones:** Ok, we're violently agreeing again, that's good news.  

**Brent Zundel:** Makes me happy.  

#### 2.9. Updating the vocab diagram (pr vc-data-model#1387)
{: #section2-9}

_See github pull request [vc-data-model#1387](https://github.com/w3c/vc-data-model/pull/1387)._

<!-- issue w3c/vc-data-model/1387 -->



**Brent Zundel:** "Updating the vocab diagram". This is from Ivan.  
… It's doing what it says.  
… Happy for comments.  
… I would appreciate review on it.  

**Manu Sporny:** It's a pretty clean update -- not controversial, AFAICT.

**Brent Zundel:** I expect it to be merged.  
… If you can review and approve that would be great, let us know about nits.  
… Any comments before next steps?  

#### 2.10. Add missing digestMultibase value in base context. (pr vc-data-model#1395)
{: #section2-10}

_See github pull request [vc-data-model#1395](https://github.com/w3c/vc-data-model/pull/1395)._

<!-- issue w3c/vc-data-model/1395 -->



**Manu Sporny:** Just before next steps, there is one post CR issue that I want to make sure we cover which is #1395 which adds a missing `digestMultibase` value to the base context.  
… The current spec says "for `relatedResource`" that we're looking for feedback for `digestSri` or `digestMultibase`, in order for that to happen we have to enable one or the other or both. One was missing from the context.  
… We have written text saying we expect the context to possibly change and can add/remove as we see fit. Just wanted people to see this.  

**Brent Zundel:** This PR seems straightforward to me.  
… Any comments?  

#### 2.11. Next steps?
{: #section2-11}

**Brent Zundel:** Does the current set of before CR PRs reflect all of the changes that would be necessary to address all of the issues that we feel are necessary before CR.  

**Manu Sporny:** I believe this is all of them as long as we ensure no one raises a new issue, we should be ready for CR for VCDMv2.  

**Dave Longley:** In looking at bitstring status list stuff, I noticed in that spec, it's important there and in other credential status things that the id value is optional. In VCDM, we have an inconsistency where it is required. We need a quick PR to say 'id' is optional for credentialStatus.  
… I can file that issue when I'm done scribing.  

**Brent Zundel:** Excellent, any other concerns about work that needs to be done before we go into CR?  
… Is the work in these PRs unclear to anyone?  
… Having this set of PRs before us -- plus what Dave just mentioned -- would folks still be uncomfortable to say we're going to resolve to go into CR after we address these PRs?  
… Now that we know what the set of changes is -- are we still premature or are we ready to resolve that on the call tomorrow?  

**Manu Sporny:** I feel comfortable with it but mostly because I understand what all the PRs are doing. We certainly don't have more incoming, and the things we're trying to address in each of these PRs is pretty focused.  
… I would be comfortable with that, but would appreciate hearing from others.  

**Michael Jones:** Yeah, I actually want to read all the PRs before making that call.  
… There's kind of a presumption in there that we will get all these merged in some form and maybe we are.  
… But sometimes people come out of the woodwork and say no -- talk to me tomorrow.  

**Brent Zundel:** Thanks, Mike.  

### 3. Other business.
{: #section3}

**Manu Sporny:** The other thing that makes this a bit more complex, is that we have to resolve to publish the VC specs dir and the "VC Controller Document" specifications as at least FPWD/NOTEs before we can take VCDM v2 into CR.  
… That's the other thing to consider.  
… That's another complexity there.  

**Joe Andrieu:** I just wanted to agree with Mike -- I feel there are too many moving parts to say we're all good just yet on those parts.  
… Can you speak to the dynamics of pushing for that tomorrow? What's the advantage of having the resolution before publishing?  

**Brent Zundel:** There's a publishing moratorium going into effect tomorrow, no way to publish before that -- but if we resolve as a group to publish after these PRs -- then we can W3M eyes on things and avoid delays that might come up vs. doing it in January.  
… The only real benefit is to put it front of people whose feedback we need before going into CR. I'm not pushing really hard, but if we're close enough -- and it sounds like now there are enough moving pieces that we wouldn't put a proposal before the group.  
… We're a couple months later than where we want to be already.  

**Manu Sporny:** One of the things ... decisions that might be easier tomorrow would be FPWD for the controller document spec. Bikeshedding that and coming to a resolution on what we'll publish could be a thing to do tomorrow.  
… The easiest thing to do would be publishing VC specs dir, I think, resolving to do that.  
… And we could put a focus on doing that tomorrow because we need those anyway.  

**Brent Zundel:** Thanks, Manu.  

**Michael Jones:** With respect to the controller document thing -- I'm in theory an editor, but I've prioritized the other stuff, I would like to actually read that spec and provide input before we publish it.  

**Brent Zundel:** Ok, we're not quite there, we'll get there.  
… Thank you for all the work that has gone into these PRs.  
… Please review as soon as you can, we will meet again tomorrow and discuss the open set of issues.  
… That will be our last meeting until the new year.  
… I look forward to seeing you all tomorrow.  

---
