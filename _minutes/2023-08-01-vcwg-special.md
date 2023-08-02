---
layout: minutes
date: 2023-08-01
title: Verifiable Credentials Working Group Special Topic Call on PR Discussions — 2023-08-01
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-08-01-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on PR Discussions",
        "dateCreated": "2023-08-01",
        "irc": "vcwg-special",
        "datePublished": "2023-08-02",
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
            "startDate": "2023-08-01",
            "endDate": "2023-08-01",
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
                            "name": "Dmitri Zagidulin"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Sebastian Crane"
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
                    "name": "Kristina Yasuda"
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
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes
{: .no_toc}



**Date:** 2023-08-01

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20230801T180000/) and the [IRC Log](https://www.w3.org/2023/08/01-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Sebastian Crane, Dmitri Zagidulin, Hiroyuki Sano, Gabe Cohen, Kristina Yasuda, Joe Andrieu, Michael Jones, Manu Sporny, Shigeya Suzuki, Andres Uribe, Ted Thibodeau Jr.

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Dmitri Zagidulin

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. PRs.
{: #section1}

**Brent Zundel:** We're going to process some PRs, and then hopefully issues!  

> *Brent Zundel:* [https://github.com/w3c/vc-data-model/pulls?q=is%3Aopen+is%3Apr+-label%3A%22pending+close%22+-label%3Adiscuss+sort%3Aupdated-asc](https://github.com/w3c/vc-data-model/pulls?q=is%3Aopen+is%3Apr+-label%3A%22pending+close%22+-label%3Adiscuss+sort%3Aupdated-asc).

**Brent Zundel:** this is all of our open PRs, minus the 'do not merge' ones.  
… let's look at PR 1200.  

#### 1.1. Better not set §8 as non-normative (minor editorial) (pr vc-data-model#1200)
{: #section1-1}

_See github pull request [vc-data-model#1200](https://github.com/w3c/vc-data-model/pull/1200)._

<!-- issue w3c/vc-data-model/1200 -->



**Manu Sporny:** this has a number of agreements, but I think Orie is objecting.  
… I asked to clarify, waiting to hear back.  
… feels like a fairly straightforward change. what Ivan is doing here is, the other sections of this thing are normative,.  
… and he's setting this one as normative as well.  
… Orie is saying "I would rather that we explicitly declare it as normative".  

**Ted Thibodeau Jr.:** lacking Orie (though he might not agree regardless), the issue appears to be partly how ReSpec handles things.  
… so, we can't explicitly declare appendixes to be normative.  
… given the rest of the document, like the top says "Everything is normative, unless marked as informative".  
… so, I don't think there's a change to be made.  

**Brent Zundel:** my read of Orie's comments is not that he's requesting changes, just giving clarifications.  
… he's had plenty of time since then to continue to review. I'm comfortable with the approvals moving forward & merging this.  
… I don't want to get too formal, but we could do resolutions if folks are more comfortable with that.  

> *Manu Sporny:* +1 to merge as-is.

> *Joe Andrieu:* +1 to merge.

**Brent Zundel:** not hearing any objections, queue is empty.  
… let's move on to next issue.  

#### 1.2. Add validation section regarding holder (pr vc-data-model#1199)
{: #section1-2}

_See github pull request [vc-data-model#1199](https://github.com/w3c/vc-data-model/pull/1199)._

<!-- issue w3c/vc-data-model/1199 -->



**Brent Zundel:** issue 1199, Add Validation Section regarding Holder.  
… I see TallTed and JoeAndrieu specifically requested changes. Have they been addressed?  
… if not, what would you like to still see?  
… the last note from Orie, couple weeks ago saying "Joe I think I got all your suggestions".  

**Ted Thibodeau Jr.:** I think I still have open questions to a few people.  
… at least to Orie, and to Joe at different points, basically saying "what change would you want this to have?".  
… and also - "what was this supposed to mean?".  
… there are several lines of defined expressions that I tweaked, but I wasn't clear what they meant to say.  

**Joe Andrieu:** I have to echo that; I didn't quite understand what Orie was trying to say.  

**Brent Zundel:** I recommend you view the text as it exists now, see if there's any greater clarity there.  
… is that something you can do?  

**Joe Andrieu:** will review again.  

**Ted Thibodeau Jr.:** the pieces that I referred to haven't changed (the "define expressions of"). I pinged Orie at the end.  

**Brent Zundel:** ok, moving to next PR.  

#### 1.3. Add confidenceMethod to table of reserved terms and v2 `@context` (pr vc-data-model#1142)
{: #section1-3}

_See github pull request [vc-data-model#1142](https://github.com/w3c/vc-data-model/pull/1142)._

<!-- issue w3c/vc-data-model/1142 -->



**Brent Zundel:** this one's 1142, Add ConfidenceMethod to table of reserved terms.  
… it was being held up till the URLs actually resolved, I believe they do now.  
… any reason not to just merge?  
… (not the PR, the requested changes).  
… Manu has one that fixes the URL, TallTed has another one that.  

**Manu Sporny:** I was going to suggest, this was before Ted's change, if we could just merge both of these suggestions, we can merge the PR.  
… we're waiting on Orie to process them.  

**Ted Thibodeau Jr.:** that's not all, there is - in a Jun 6 comment, there's a URL to vc confidence method that's still 404.  

**Manu Sporny:** I did a change suggestion to that, to fix it.  

**Brent Zundel:** ok, I'm very confident that we can add Manu's change suggestion.  
… and roughly confident that we can add Ted's. waiting on official thumbs-up from Orie.  
… but also don't want this PR blocked.  
… manu, will you take an action to merge your change suggestion, fixing the PR? I can change my request into an approval.  
… and we can ping Orie to look at Ted's suggestions.  

**Manu Sporny:** I've merged my URL change.  

**Brent Zundel:** excellent, I marked PR as approved.  
… any folks on the call who have yet to review any of these PRs, please do so.  
… if you don't, things may get merged that you haven't had a chance to review -- we need to be brisk now.  
… moving on, next one is 1212.  

#### 1.4. Refer to VC-SPECS-DIR for proof types. (pr vc-data-model#1212)
{: #section1-4}

_See github pull request [vc-data-model#1212](https://github.com/w3c/vc-data-model/pull/1212)._

<!-- issue w3c/vc-data-model/1212 -->



**Brent Zundel:** this is 'Refer to VC Specs Dir for Proof Types'. two change requests, from Orie and Sebastian.  
… Sebastian, have your changes been addressed?  

**Sebastian Crane:** let me look..  
… yes, those are fine, works for me.  

**Brent Zundel:** manu, looks like Orie has a change suggestion, if you could ..  

**Manu Sporny:** I think I disagree with the change suggestion, mainly because the request was to refer to the VC Specs Dir.  
… not to remove links to the securing specifications we're working on here.  
… my concern is that we would be .. that the question that the PR is trying to address in 1105 is - how should we refer to the securing specs?  
… in other PRs, we said we're going to talk about the securing specs of this WG, we're just going to mention them, and also say there may be other ways to secure the VCs, and those will be in the specs dir.  
… so, the JOSE/COSE stuff, the DI stuff, and for other securing specs, go look in the directory.  
… Orie's change req would be to /not/ mention the securing specs this WG is working on.  
… but only refer to the specs dir, some of which the group has not worked on at all.  

**Joe Andrieu:** I'm concerned about the position you're taking here, Manu.  
… seems to be saying that a method is required to be in a directory.  

**Manu Sporny:** that's not the intent. we're just saying - securing mechanisms exist. Here's two examples. Others are in the specs dir.  

**Joe Andrieu:** I'll take another look.  

**Sebastian Crane:** I think my comment has been addressed.  

**Brent Zundel:** next steps.. we have a change request from Orie. Joe is reviewing..  
… Manu, if at least you could respond to Orie's change req with the things you mentioned today, that'd be valuable.  

**Manu Sporny:** or we could accept it, I don't hear anyone arguing against not mentioning at all.  
… the first objection was "you say there's securing mechanisms, but not providing examples". So we added examples, and that PR went in.  
… and now Orie is saying we should remove that.  
… and if we do that, we'll have no examples again.  
… and won't have a link to the vc specs dir, or external mechanisms.  

**Ted Thibodeau Jr.:** just reading this over, Manu, I think you're mistaken as to what it currently says.  
… it says, if present, proof value should be .. [ quote follows ].  
… now, it's only a SHOULD, it does allow for whatever private or public deployment.  
… but it does say that you SHOULD use one that's in the directory.  

**Manu Sporny:** ah, I see the reading you're referring to.  
… also don't see VC-JWT or VC-JOSE/COSE.  

**Brent Zundel:** sounds like there's a bit of tweaking needed.  

**Manu Sporny:** yes.  

**Brent Zundel:** sufficient steps taken, lets move on to 1215.  

#### 1.5. Update term definition for vc json schemas as creds (pr vc-data-model#1215)
{: #section1-5}

_See github pull request [vc-data-model#1215](https://github.com/w3c/vc-data-model/pull/1215)._

<!-- issue w3c/vc-data-model/1215 -->



**Brent Zundel:** Update Term Definition for VC JSON Schema as creds, raised by Gabe, so far no reviews.  
… Gabe, can you talk us through this PR?  

**Gabe Cohen:** there is a change to the naming of the credential representation of the JSON Schema VC, which this PR addresses.  
… there's also docs on how to use the `@json` property in the JSON Schema credential.  
… so, two small changes - to use a type, and to represent a json schema in the credentialSubject property of the VC.  

**Brent Zundel:** thank you, seem straightforward.  

**Manu Sporny:** Gabe, I was waiting for you to update before reviewing, I thought you'd get rid of the datestamp stuff. (I just added a request).  
… in StatusList, looks like we're getting rid of the datetime stamp.  
… you're putting the vocab definition for JSON Schema into the spec, but not any vocabulary file.  
… not sure if you meant to put it into the VC DM vocab, or create a separate one.  
… the current state - the URL might not resolve over time, that would be bad.  
… anyways, I left comments.  

**Gabe Cohen:** not intentional. I know Ivan has another PR opened, 1218, that does add it to vocab.  

**Manu Sporny:** it's sufficient if you just use the vocab term from that PR.  

**Gabe Cohen:** happy to delay the merge, till the VC JSON Spec removes the year; I didn't want to be the first one to do that.  

**Manu Sporny:** you don't have to wait, if you're gonna update the JSON Schema spec, you can do both in parallel.  
… so this PR can go in. (remove the date, update to the vocab url Ivan created in the other PR, and you're good to go).  

**Gabe Cohen:** thanks, will do.  

**Brent Zundel:** Gabe is quick to respond, so changes will be in very soon, so folks, review those.  
… any more comments on this PR?  

#### 1.6. Clarify that some abstract concepts are not realized in implementations (pr vc-data-model#1211)
{: #section1-6}

_See github pull request [vc-data-model#1211](https://github.com/w3c/vc-data-model/pull/1211)._

<!-- issue w3c/vc-data-model/1211 -->



**Brent Zundel:** next PR is 1211.  
… Clarify that some abstract concepts are not realized in implementations.  
… this has a couple approvals, decent conversations, one request for changes from Ted.  
… Ted, has that been addressed?  

**Ted Thibodeau Jr.:** I have to read it over again.  

**Brent Zundel:** I reviewed and approved, and support Manu's suggestion that perhaps Ted, perhaps your recommended change could be discussed in a separate issue.  

**Ted Thibodeau Jr.:** yeah, I think that's the direction we're going. I'll open the new issue.  

**Brent Zundel:** thanks. any other comments?  

**Manu Sporny:** I hesitated to merge this, I didn't know what David Chadwick was going for.  
… waiting for specific change requests.  

**Brent Zundel:** I understood his comment to mean he was agreeing with things above.  

**Manu Sporny:** he also said "one of the purposes of this PR was to differentiate between a VC and a VP", so agreeing on the difference is crucial.  
… does that mean he's saying we haven't decided, or..?  

**Brent Zundel:** that's fine, if David objects, we'll handle those cases in our workflow.  

#### 1.7. Add section on JSON Processing. (pr vc-data-model#1202)
{: #section1-7}

_See github pull request [vc-data-model#1202](https://github.com/w3c/vc-data-model/pull/1202)._

<!-- issue w3c/vc-data-model/1202 -->



**Brent Zundel:** moving to next PR, 1202.  
… Add Section on JSON Processing, all approvals except for one change req from Kristina.  

**Kristina Yasuda:** [.. garbled ] bottom line is, you can achieve the same result via JSON-LD processing.  
… that whole section, the 3-4 paragraphs, makes me nervous.  

**Brent Zundel:** I do see a smaller change suggestion, looks like Ted made a modification to.  

**Manu Sporny:** so there's a number of positive reviews on this. Implementations are doing this today. I believe the things that are stated here are true, since that's the whole point behind JSON-LD, that you can process things this way.  
… it was a very conscious design choice. So, we're just reminding that it's a valid operating mode.  
… that if you do these things, the semantic interpretation is the same, between JSON-LD and JSON.  
… not because of anything in this WG, just because this was how JSON-LD was designed to work in the beginning.  
… so my concern is that your change request just deletes all the statements of how you can process JSON-LD (like current implementations are doing). If we delete that stuff, it guts the section.  
… so I'm a -1 on taking those changes.  
… the changes above that Ted modified seem like it can work, but the wording ends up being a bit more complicated than it needs to be.  
… if you are concerned about this, or it makes you uneasy, concrete change suggestions would be helpful. but deleting core contents of the section is not something that'd go over well.  

**Kristina Yasuda:** is that an option, to move that chunk to the Implementers Doc?  
… the Guidelines doc?  
… and add a sentence below, something like "this is when you can do JSON processing..." with bullet points.  
… and point to the implementers guide.  

**Brent Zundel:** would it work to point to the JSON-LD spec -- I believe it talks about the processing, would it be sufficient to point there, in addition to impl guide?  

**Manu Sporny:** both of these things are possibilities, the reason this PR was raised was because a number of people, when they saw us remove the JSON processing parts of the spec, came to the conclusion that you cannot do JSON processing at all.  
… that the WG was anti-JSON, which led to a whole lot of confusion.  
… I don't think moving this stuff to Implementer Guide, or elsewhere, will help, because people want to know specifically how they can operate.  
… so it should be explicit.  
… we /do/ talk about JSON-only processing in the JSON-LD 1.1 spec, but pointing to a section in the giant spec that somebody has to extract, won't really help.  
… the biggest issue is to clarify - how JSON only docs are processed.  

**Kristina Yasuda:** I don't think anyone should read another giant spec to understand what to do for JSON processing for the VC Data Model. on the other hand, these couple of paragraphs feel like they're a tip of the iceberg too.  
… maybe we should elaborate on the bullet points above this section.  
… I think just saying, under the bullet points, "for details, go see here in the Impl Guide", would be a good compromise.  

**Brent Zundel:** manu, you said this PR was raised to address the confusion folks had, that now the spec couldn't be processed as JSON.  
… would it be sufficient to address that confusion, to just add a brief note, "Just a reminder, JSON-LD can be processed as JSON, many use cases we're aware of do this, for details, see implementation guide".  

**Manu Sporny:** that's not what Alan and Mattheas were asking for; they said it needs to be stated in the core spec.  
… I think moving it to the guide would not address their concerns.  
… others in the group, please chime in. But we should check in with Alan and Mattheas.  
… it's clear that this is something that has confused people for a long time. I don't think the way to clarify is to talk about it for a sentence and then point elsewhere.  
… we can just very clearly say "this is what you do".  
… as far as tip of the iceberg -- I don't know what more we can write. There's just one simple rule.  
… not sure how much more we can elaborate.  

**Kristina Yasuda:** let's take it offline, and let's ask Alan and folks re implementer guide.  

> *Manu Sporny:* +1, thank you Kristina -- if we can add text, that would be good -- deleting text makes me concerned.

**Joe Andrieu:** this sounds good. i wanted to say - we do need to make it clearer / simpler. But I think moving it to implementation guide would be a mistake.  

> *Shigeya Suzuki:* +1, clear and simpler, easy to understand.

**Joe Andrieu:** but I look forward to seeing what Kristina comes up with.  

**Manu Sporny:** +1 Kristina, if we can add text to address your concerns, and still keep it simple and clear, I'd much rather prefer that.  
… we've had enough people get confused.  
… so +1 if you can propose additions/clarifications, happy to process those.  

**Brent Zundel:** thank you all, moving on to another PR.  
… I believe the path forward for this one is - Kristina is going to propose adding a sentence.  

#### 1.8. Add "author" and "party" to terminology, rewrite "claim" terminology (pr vc-data-model#1172)
{: #section1-8}

_See github pull request [vc-data-model#1172](https://github.com/w3c/vc-data-model/pull/1172)._

<!-- issue w3c/vc-data-model/1172 -->



**Brent Zundel:** next one to look at, 1172.  
… this is a PR that modifies terminology, it adds the notion of an Author to the definitions for the Issuer and Holder.  
… ultimately in a way that I agree adds some clarity.  
… the latest comments from Orie, I'm not sure what change is being requested specifically.  

**Joe Andrieu:** yeah, I just added a few comments.  
… two things worth noting. 1) there's an important shift that we should talk about - the definition of 'subject' got shifted so that it is an entity.  
… before, we've had VCs with a subject that was anything at all.  
… my main comment about 'author' -- authorship does not semantically describe what's happening here, as it's associated with original creation.  
… it doesn't matter if I created the words, it matters that I attested to their truth.  

**Brent Zundel:** this is not a 'Before CR' PR, so I'm not super worried about it on this call. moving forward..  
… for the record, I agree with your concern about subject being an entity.  

#### 1.9. Add section on Ecosystem Compatibility. (pr vc-data-model#1203)
{: #section1-9}

_See github pull request [vc-data-model#1203](https://github.com/w3c/vc-data-model/pull/1203)._

<!-- issue w3c/vc-data-model/1203 -->



**Brent Zundel:** moving on to 1203, Add Section on Ecosystem Compat.  
… massive number of approvals, all the change requests have been addressed. If none objects, we'll merge it as soon as Ivan's notes-taking tool adds the notes to it.  

**Joe Andrieu:** I just want to say 'no objection'.  

> *Manu Sporny:* yes, it has no objections AFAIK.

**Brent Zundel:** anyone else?  

> *Manu Sporny:* Thank you to everyone for working together to try to get this PR in there! :).

**Brent Zundel:** ok, seems like it's widely approved, we'll merge it.  

#### 1.10. Added JsonSchemaCredential2023 to the vocabulary (pr vc-data-model#1218)
{: #section1-10}

_See github pull request [vc-data-model#1218](https://github.com/w3c/vc-data-model/pull/1218)._

<!-- issue w3c/vc-data-model/1218 -->



**Brent Zundel:** moving on, next one, 1218 - this is the PR Gabe mentioned earlier.  
… raised by Ivan, adding things to the vocab -- what needs to change to make it compatible with the direction we're taking in the previous one?  
… or.. how are they related?  

**Manu Sporny:** Ivan is doing a PR to create the vocabulary terms that Gabe needs for his other PR.  
… so, things do need to change - Ivan needs to take the dates off of this, but, that's it.  

**Brent Zundel:** ok, and it looks like Gabe has already added a suggestion to do exactly that.  
… so this one is in the same state as the other PR, once dates get cleaned up, we'll merge it.  
… we have talked about every PR, and now are looping around!  
… so let's act on those things, get as many of the PRs merged as we can.  
… those specifically tasked, please do those things, if you don't recall, the notes from the meeting will go to those PRs.  
… we don't have time to jump into issues, sadly.  

> *Manu Sporny:* Thanks all!

**Brent Zundel:** thanks everyone, very productive call!  
… thanks all, see you on tomorrow's main call!  

---
