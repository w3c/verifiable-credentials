---
layout: minutes
date: 2023-03-07
title: Verifiable Credentials Working Group Special Topic Call on VCDM PR-s — 2023-03-07
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-03-07-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on VCDM PR-s — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on VCDM PR-s",
        "dateCreated": "2023-03-07",
        "irc": "vcwg-special",
        "datePublished": "2023-03-07",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on VCDM PR-s",
            "startDate": "2023-03-07",
            "endDate": "2023-03-07",
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
                    "name": "Ivan Herman"
                },
                {
                    "@type": "Person",
                    "name": "David Waite"
                },
                {
                    "@type": "Person",
                    "name": "Samuel Smith"
                },
                {
                    "@type": "Person",
                    "name": "Yan Zhang"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
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
                    "name": "Kerri Lemoie"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Steve McCown"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Benjamin Goering"
                },
                {
                    "@type": "Person",
                    "name": "Oliver Terbu"
                },
                {
                    "@type": "Person",
                    "name": "Shawn Butterfield"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on VCDM PR-s — Minutes
{: .no_toc}



**Date:** 2023-03-07

See also the [Agenda](https://www.w3.org/events/meetings/e88d30bd-4099-49d1-b769-1d8cd39a1b28/20230307T110000) and the [IRC Log](https://www.w3.org/2023/03/07-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ivan Herman, Dave Longley, Brent Zundel, David Waite, Manu Sporny, Samuel Smith, Yan Zhang, Orie Steele, Ted Thibodeau Jr., Chris Abernethy, Kerri Lemoie, Dmitri Zagidulin, Joe Andrieu, David Chadwick, Will Abramson, Steve McCown, Phillip Long, Benjamin Goering, Oliver Terbu, Shawn Butterfield

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Dave Longley, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. VCDM PR-s.
{: #section1}

**Brent Zundel:** Agenda is straightforward, we'll be covering as many PRs as we can. Goal is to identify what changes need to be made in order to merge the PR..  
… If the PR has been around long enough we can consider merging it on the call but I don't expect that. Identifying what needs to change to move things forward is the goal. We'll start with the VCDM..  
… Starting with PR #1056..  

> *Chris Abernethy:* I believe Mike has a conflict today.

#### 1.1. Editorial break out of definitions for clarity (pr vc-data-model#1056)
{: #section1-1}

_See github pull request [vc-data-model#1056](https://github.com/w3c/vc-data-model/pull/1056)._

<!-- issue w3c/vc-data-model/1056 -->



**Manu Sporny:** So this is an editorial fix to the spec. A number of people have been asking us to separate the definitions of Verifiable Credential and Credential into different entries. It has multiple reviews, it didn't change any content, it's been out there for a week, I think we can merge this with no objections..  

**Brent Zundel:** I take back not merging anything today, this one is ready. Nothing but approvals, been out for a week, editorial..  
… Are there any objections to merging this PR? This PR is just taking existing definitions and breaking them into two, no new language, just shifting..  

**Ivan Herman:** A minor thing, Manu can you wait about an hour to merge -- because my scripts go mad when I try to get content from a PR that has been closed. That's all..  

**Brent Zundel:** Not hearing any objections..  

**David Chadwick:** One of the things that came up with myself and TallTed, but a Verifiable Credential is not necessarily Verifiable because the verification could fail for all kinds of reasons, only one good path and hundreds to fail..  

**Brent Zundel:** You're talking about a different PR..  

**David Chadwick:** Yes, but we should change the "can" to MAY on verifiable..  

**Brent Zundel:** This isn't normative, this is an editorial PR..  

> *Manu Sporny:* +1 brent.

**Brent Zundel:** We aren't adding normative language to this PR..  

**Ted Thibodeau Jr.:** I hear the concern, there might be some further text massaging..  

> *Orie Steele:* +1 Brent.

**Ted Thibodeau Jr.:** That verification may fail..  

**Brent Zundel:** That's a great suggestion for another PR. I don't want to open that can of worms on this PR..  

**David Chadwick:** Ok, we can do subsequent PRs for that change..  

**Brent Zundel:** Yes, very much encouraged..  
… I don't hear merging on this PR, when Ivan's script is ready we can merge it..  

#### 1.2. Add section describing use of media types  (pr vc-data-model#1055)
{: #section1-2}

_See github pull request [vc-data-model#1055](https://github.com/w3c/vc-data-model/pull/1055)._

<!-- issue w3c/vc-data-model/1055 -->



**Brent Zundel:** In PR #1055, it adds a section describing the use of media types. There's some conversation, a little back and forth, but in general, this adds some normative guidance around media types in general..  
… I encourage people to get on the queue to say what needs to be changed in this PR to move it forward..  

**Manu Sporny:** Generally supportive of this PR. One of the good things it does, before we were making normative statements in the IANA registration section, that was dicey and this is better. This just talks in general of what's expected of certain media types. I think we can more easily put normative statements in here and there are some arguments around what's testable or not..  
… I'm +1 on merging the PR because they aren't just doing MUST do this or that. In general +1 for what this PR is doing which is moving normative language from the media type registrations to the core of the document which allows us to speak more freely about expectations in using media types..  

**Orie Steele:** I'm supportive of merging the PR. I'm several others that I'm the author of that I would close and I would move content from them into a new section or open new PRs to do that. Merging this will unblock several PRs that are currently blocked in my opinion..  

**Brent Zundel:** I will note that this PR has been open for a week. I will note that there is one request for changes from TallTed, I believe those changes have been made..  
… Ted, could you speak to that?.  

**Ted Thibodeau Jr.:** I don't think there's anything remaining, this PR makes substantial improvements from what was there before and even if I need to make a new PR to adjust, I'm good..  

**Joe:** How is this related to the single base media type? The language I'm reading doesn't clarify that one of those two is the base media type and one of those should be transformable into the base..  
… I'm concerned we're losing some of what we talked about in Miami..  

**Orie Steele:** I don't think this PR addresses what happened at the F2F in Miami, but it opens the door for it. It does mention the base media type by name. I think there are so many other PRs open about this topic of media types that I think it would be better to merge this PR and open a new one that's dedicated to summarizing the outcome from the F2F..  
… I am supportive of getting text of what we discussed in Miami, but subsequent to merging this..  

> *Orie Steele:* +1 Brent.

**Brent Zundel:** This PR creates a media type section, it moves some text from IANA registrations into this section and seeks to begin the normative guidance for use of media types. I think Mike Prorock did a pretty good job of avoiding normative statements -- setting the stage for those without making them so much yet..  
… From my perspective..  

**Ted Thibodeau Jr.:** Yeah, I just want to voice that I've typed a few times now. There was and there often is a substantial push to "make decisions" at a F2F, because theoretically having people in the room means better decisions. I disagree with that that is always the case and I think blind adherence to those sessions can be to the detriment of the spec and all of us..  
… I do think we resolved to a base media type and it was X, but we shouldn't necessarily be bound to that forever, we may hit things that indicate that was the wrong decision and we need to be able to revise it..  
… I think all decisions in all calls -- are not final, I forget the right wording there, until a week later. The idea is the same with F2F..  

**Joe Andrieu:** Politely, I want to push back on that. I think we need to make decisions and move forward. I think as a group we have the base media type `application/credential+ld+json`. I don't think this other media type is something we agreed to -- because of this date we haven't agreed to it..  

> *Joe Andrieu:* +1 to adding media types as we get consensus on what they would be and mean.

**Phillip Long:** The way I heard TallTed talking about the issue was relevant to a comment he made in the PR a few days ago. He reminded us that media types aren't actively prescriptive or restrictive. I think adding a media type doesn't preclude us from adding or removing another one later. I think this is better as it moves the text from the IANA registration to the spec. And I think, as Orie said, this frees up more PR work to move forward..  

> *Orie Steele:* I like Joe's suggestion, if there are no objections to it, I would like to see it merged..

**Phillip Long:** As long as we're clear that we can add/remove/change media types, this is a good step forward..  

> *Orie Steele:* +1 Manu.

**Manu Sporny:** I think Joe's correct, I think it's totally appropriate to just list the one we decided on in the WG call and we're just having the second media type discussion shortly..  

**Brent Zundel:** Ok, we wouldn't pull it in now, I think it's appropriate for MikeP to see Joe's comments on the PR..  
… Anyone else objecting to merging this PR with Joe's change?.  

> *Phillip Long:* No objections to Joe's change from here.

**Brent Zundel:** I'm not hearing any objections to merging the PR with Joe's change..  

#### 1.3. Propose `verifiable-credential+ld+json` media type (pr vc-data-model#1034)
{: #section1-3}

_See github pull request [vc-data-model#1034](https://github.com/w3c/vc-data-model/pull/1034)._

<!-- issue w3c/vc-data-model/1034 -->



**Brent Zundel:** This PR proposes `application/verifiable-credential+ld+json` as a new media type. This PR is older than MikeP's..  
… I want to get Orie to talk about this PR and what the set of proposed changes is and we can go to the queue to see what changes are needed to make this acceptable..  

**Orie Steele:** This PR, 1034, is just a request to register a media type. It doesn't describe normative constraints on the media type, it just says, "Hey, IANA, when our doc is complete we request this"..  
… It's also related to RDF classes like Credential types, there's other stuff out there. I agree with Manu's suggestion to shorten the media type, I'd like to merge those. I think this also opens the door for us to use this as the base media type instead of the one we agreed to at the F2F. What is the base media type -- is it `application/credential+ld+json` or `application/vc+ld+json`?.  
… This PR just gives us a named media type to refer to when we're arguing..  
… That's it..  

> *Orie Steele:* +1 Manu.

**Manu Sporny:** I'm in favor of pulling this in with the modification I suggested, even without it I'm supportive. I spoke out against this PR in the beginning, but I'm ok with now primarily because it feels to me that the group can get to agreement on what is required/not required for a VC and getting to agreement on just `application/credential+ld+json` has been illusive thus far..  
… I think if we make `application/vc+ld+json` as the base media type I think we can all agree that this thing can be secured in general, maybe not all the time..  
… This PR takes out all the normative language as well, so this just says there's a media type and there's less to object to..  

> *Orie Steele:* This PR never had normative language, it was always just a way to give a name to a concept we have discussed in other issues / PRs..

**Manu Sporny:** This PR doesn't get into the controversy. To summarize, if we can only get to one media type in the data model this one will be easier, I think..  

**Brent Zundel:** I want to note that these PRs have been well structured to do small simple changes to move us in a general direction. It doesn't say what this thing is, it doesn't say what it is..  

**Joe Andrieu:** Yeah, I think this is a not well-thought through PR. I think we need to know what we're naming before we settle on the name. There is a possibility that this media type might become the base media type. That's a totally different conversation from one that will transform to the base one..  

> *Ivan Herman:* +1 to Joe.

**Joe Andrieu:** These conversations will depend on defining the media type and then the name. I think a PR should have some notion of consensus that we think represents our best current understanding of what the spec is which we don't have and I don't think we should specify it until we know what it means..  

**Ted Thibodeau Jr.:** I want to highlight that there was a difference in what Manu spoke and what was typed in as logged..  

> *Orie Steele:* +1 TallTed.

**Ted Thibodeau Jr.:** That difference is important and the written log is closer to what I would be ok with. This potentially defined media type allows for the possibility of securing the content as opposed to indicating that it is secured..  
… I think that's part of the largest back and forth between VC vs. C -- and I'm going to start using those terms because that's what we have been discussing..  
… I think this is a good reason why abbreviations aren't necessarily good, VC = Verifiable Credential, C = Credential and one may not necessarily be the other..  
… The data structure doesn't need to include proofs it just needs to have a slot that can be filled..  

**Manu Sporny:** This PR doesn't include the definition and I think that's a good thing, because I think we'll have a long walk before this PR can get in..  
… This suggestion isn't picking `vc` vs. `c` vs. `verifiable-credential` whatever -- that's a separate discussion..  
… This media type, signals that it is a mechanism that can be used to secure a credential. That thing may or may not have a proof, but in the media type section we recommend or outright say that it has to have such a proof / is secured in some way..  
… It's not a may / may not have an internal / external proof. It is expected that you have either an external or an internal proof that is securing this document..  
… I don't know if that meets your bar, Joe..  

**Orie Steele:** This PR just gives a name to a concept. There are so many things discussing this -- it's reasonable to say there are two concepts and you give names to them to refer to them..  
… We already have a media type for one thing and this will give a name to the other concept..  

> *Ted Thibodeau Jr.:* -1 to "this means you're expected to have put a proof in there somewhere" unless that proof could be "null".

**Orie Steele:** In all the discussions, we can continue to evolve and we can new constraints and relationships between these things, in every argument I've seen in the WG people are assuming these media types exist..  
… I think it's ok for us to merge this and continue in that journey. We can remove things later if necessary..  

> *Phillip Long:* +1 to verifiable credential (however you say it) must have a proof associated with it of some kind. To me, at least that's what verifiable means..

**Orie Steele:** I think it's a mistake to bring in term definitions for RDF classes or term definitions for spec texts into registration for this concept. I don't think it helps achieve the objectives of making the arguments clearer -- in a way that will coming things and make it harder to get to clarity in the WG..  

> *Ted Thibodeau Jr.:* Is "[unverifiable] credential" a subtype of "verifiable credential"?.

> *Manu Sporny:* TallTed, that's a debate we'll need to have..

**Orie Steele:** I would just like to acknowledge that folks in the WG are arguing as if this is a distinct media type from the other one that we've registered. Those arguments are attempting to distinguish between them and we might find out there is no such need to distinguish, but having this name around is helpful to those arguments..  

**Joe Andrieu:** The evidence you cited actually makes me even more opposed. People are using this term as if it has consensus and that gives it even more imprimatur that we need it. I think the problem is what you're highlighting as your reason for merging the PR..  


> *Orie Steele:* 
>> "A set of one or more claims made by an issuer. A verifiable credential is a tamper-evident credential that has authorship that can be cryptographically verified. Verifiable credentials can be used to build verifiable presentations, which can also be cryptographically verified. The claims in a credential can be about different subjects." (see [https://w3c.github.io/vc-data-model/#dfn-credential)](https://w3c.github.io/vc-data-model/#dfn-credential)).

**Joe Andrieu:** I'm trying to push back on these slippery slope adjustments where someone says "we already made that decisions it's in the spec"..  
… People don't yet agree on what this means..  

**Ivan Herman:** Just a word of warning -- Orie, you said we've registered things and we haven't registered anything yet. That will only happen when we go to CR when we request for registration. We haven't registered, we have just documented our thoughts, no registration has been done..  
… We have to be careful about those words..  

**Brent Zundel:** That's correct..  

> *Orie Steele:* ivan is correct, we have "requested registration"..

> *Orie Steele:* in a document that has not yet advanced..

> *Ted Thibodeau Jr.:* "proposing requesting registration".

> *Orie Steele:* ^ that.

**Manu Sporny:** Just to outline the potential paths forward that I think Ted and Joe are asking for. One of those is to clearly define what the media type does and is used for. I tried to do that before. My request is for Joe to put himself back on the queue to respond..  

**Joe Andrieu:** Is that in writing or verbally?.  

**Manu Sporny:** Verbally, the vc media type is used when you have an expression of the data model that is secure; that is the expectation. You use that media type when you have a credential that's secured..  
… That's it for this PR..  
… Won't say more to try and get feedback on that..  

**Ted Thibodeau Jr.:** I would not be in favor of that unless we have a type that addresses the other half of the puzzle. You've just described the secured chunk, there is an unsecured chunk that should just as well be expressible in roughly the same format. The only difference between them is the securing part..  

> *Orie Steele:* +1 TallTed.

**Ted Thibodeau Jr.:** If the only way that's defined to express the secured ones -- then we can't express the unsecured ones. Some will be secured and others will not be. We might need a distinct type for the secured or the unsecured. Either we need a super class or two disjoint subclasses..  

> *Orie Steele:* +1 to TallTed framing again..

**Joe Andrieu:** Quick note for TallTed, my understanding is the base media type is the unsecured thing. My sense is that we had that agreement in Miami and this was an additional secured media type. Your definition seems ok, but it triggers for me, what about VC-JWT, is this for any mechanism that has secured a VC?.  

**Orie Steele:** I queued to hopefully answer Joe's question. We're in the core data model spec, the core model is JSON-LD. Both of these have `+ld+json` at the end and they could be used in the `cty` header in a VC-JWT..  
… There was a slide for it -- there was a question "is proof expected / allowed to be present?" when you see `cty` with `+ld+json`. There's no decisions about allowed or forbidden yet..  
… The current 1.1 spec says `vc+ld+json`, proof would be allowed there, you'd expect it to be there if secured with a DI proof and expect it to maybe not be there if using an external proof..  
… The spec text says "at least one proof". My interpretation of 1.1, if you had a VC and it could include or not include a proof..  
… That's my interpretation of the text today, that's assuming that it would go along with this media type..  
… Since this WG can't agree on mechanisms for proofing a credential or 'proof' in a credential, it seems that the group could more easily come to a conclusion on the vc media type requirements..  

> *Brent Zundel:* +1 to Orie.

**Manu Sporny:** +1 to that on how we go about processing that. It's fine if we don't do that we will have to open the can of worms on hierarchy, the relationships between the media types, the `+` subclass concept, and so on -- that will take a while to unpack..  
… It sounds like Joe and Ted, you're asking to move to unpack that. Before I jump into doing that -- I expect that will eat up the rest of this call and a number of other calls, I want to make sure that there will be objections to pulling in any variations of this PR before settling those questions..  

**Joe Andrieu:** Yeah, I think that's right. What this media type means is important to whether or not we should add it..  
… The essence of the question I asked about VC-JWT -- is, is the media type that you're proposing here, for `vc+ld+json`, you said that would be used for secured credentials and I would anticipate that it would include VC-JWT. I talked about a parameterized version of the media type where we parameterize the proof type..  

> *Manu Sporny:* JoeAndrieu, that's not what I'm talking about :).

**Joe Andrieu:** We could have that or not -- if what we're talking about is a single media type with no params, then a definition seems to conflate different forms of securing credentials. Is it for just one form or multiple forms?.  

**Brent Zundel:** I'm wondering if -- speaking ... this PR has concrete text, what concrete changes would need to be made to make it acceptable to merge?.  
… If you are objecting to pulling in this PR, is there a concrete change that would remove your objection?.  

**Joe Andrieu:** I think we need a definition, until we have a definition, I can't support this PR. If we pull this in, I think we're moving away from where we had consensus with a converging solution. I think we need that definition..  

**Brent Zundel:** Is there a definition you would support?.  

**Joe Andrieu:** I don't have a definition, it doesn't exist, the PR is too early, we need to have the conversation to generate the definition..  

**Ted Thibodeau Jr.:** I'm not far off from Joe, not a surprise for many of you. It seems clear to me that Manu's expectations that this media type entail the inclusion of a proof are not the same expectations of everyone who is looking at this media type..  
… I'm ok with this media type to have box for this proof to go into, maybe that includes something that says the proof is external, maybe it says it has the proof itself..  
… The requirement that it be the bytes that make this proof happen is not ok. Then we don't have the whole expressible, just the proven one..  

> *Orie Steele:* This PR DOES NOT constrain the media type, and yet... people are objecting based on "hypothetical future constraints"..

> *Orie Steele:* Another note on parametrized media types, they don't play well with reuse in HTTP responses..

**Manu Sporny:** Let me try and propose some concrete changes. So, Joe, you asked about params -- the answer is that this does not include media type params, so no. That would lead to a lot of objections, it makes parsing harder, etc. those things exist and we can call that question, but I expect people to object..  
… This approach is a non-param one..  
… I think there is a desire by some WG members to have two potential serializations -- it may be two different media types, I will pretend it's two right now for discussion..  
… One is `application/credential+ld+json` and the other layers on top that is a vc one..  

> *Ted Thibodeau Jr.:* the dash vs the plus matters....

**Manu Sporny:** There is a difference between them. I am proposing that the difference between them is the expectation in how they are used..  
… `credential+ld+json` is expected to not have a proof on it. And some people said it could, but does it forbid proofs or can it be on there? That's a question..  
… For `vc+ld+json` is expected to have an internal or external proof. That's the difference between the expectations around the media type. The debate we're having is about whether `proof` should absolutely be forbidden but it's really strongly suggested that you don't..  

> *Orie Steele:* +1 Manu..

**Manu Sporny:** For `credential+ld+json`. For `vc+ld+json`, I think it's not controversial to say a proof is expected but you don't have to use the `proof` field..  
… It sounds like we're saying we want to have two media types -- if we do that, what's the difference between them?.  
… I think that's a question to you, Ted, and Joe..  

**Joe Andrieu:** I'll try and be short. I think what you're proposing Manu is that this is the DI interpretation that can transform back to the base media type. It's not for all secured VCs and it's just one class of them..  

> *Orie Steele:* I don't think that is what Manu is proposing..

> *Manu Sporny:* JoeAndrieu, unfortunately, that's not what I'm proposing :).

**Joe Andrieu:** I think the class you care about is just the DI version. That would free up this conversation quite a bit..  
… How would we know if it's some other securing mechanism?.  
… The lines are kind of blurry..  

> *Orie Steele:* I do agree with Joe's comment that there is confusion regarding the relationship between `proof` and data integrity... in the core spec..

**Dave Longley:** It's been challenging to participate and scribe... short thing I want to say, slightly concerned that we might not be using media types properly wrt. expectations for meaning vs. concrete serialization. What media types are meant to do is to express concrete serialization. Whether or not proof field is present, syntactical element, but conceptually, that's a different conversation and doesn't have anything to do with media types..  
… We might be able to get to one media type that captures all syntactic elements and then move discussion on how something is secured out of media type space..  

**Brent Zundel:** I think we got much closer on this one -- we had some good discussion, some concrete ideas on the table..  
… Thanks for scribing, challenging scribe day. We'll talk tomorrow..  
… Thanks everybody!.  

---
