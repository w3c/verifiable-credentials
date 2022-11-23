---
layout: minutes
date: 2022-11-22
title: Verifiable Credentials Working Group Special Topic Call on `@context` and `@vocab` — 2022-11-22
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2022-11-22-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on `@context` and `@vocab` — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on `@context` and `@vocab`",
        "dateCreated": "2022-11-22",
        "irc": "vcwg-special",
        "datePublished": "2022-11-23",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on `@context` and `@vocab`",
            "startDate": "2022-11-22",
            "endDate": "2022-11-22",
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
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Logan Porter"
                },
                {
                    "@type": "Person",
                    "name": "Antony Nadalin"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Tobias Looker"
                },
                {
                    "@type": "Person",
                    "name": "Drummond Reed"
                },
                {
                    "@type": "Person",
                    "name": "Kristina Yasuda"
                },
                {
                    "@type": "Person",
                    "name": "Shawn Butterfield"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Samuel Smith"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on `@context` and `@vocab` — Minutes
{: .no_toc}



**Date:** 2022-11-22

See also the [Agenda]() and the [IRC Log](https://www.w3.org/2022/11/22-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Michael Jones, Gabe Cohen, Orie Steele, Dave Longley, Brent Zundel, Manu Sporny, Logan Porter, Antony Nadalin, David Chadwick, Tobias Looker, Drummond Reed, Kristina Yasuda, Shawn Butterfield, Dmitri Zagidulin, Ted Thibodeau Jr., Samuel Smith, Joe Andrieu

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Dave Longley, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Brent Zundel:** The topic if about issues around `@context` optionality and `@vocab`..  
… There are proposals that seem to be nearing some consensus..  
… In order to tease that out, we plan on running some polls and hope to make progress..  
… I have some that I can run and I also open it up to people to run polls to others as well..  
… Straw polls and polling should be a useful tool for us today..  

**Michael Jones:** I'd prepared a few poll questions that I think would get to the heart of it. Do you want them in the chat?.  

**Brent Zundel:** You could just drop them in IRC one at a time and we can see how people feel about them..  

**Michael Jones:** Ok..  

> *Michael Jones:* Mike's proposed poll 1: "Which are you aware of VC or VC-like deployments that do not use `@context` or do not use it in a JSON-LD compatible way?".

**Brent Zundel:** Let's clarify, jump on the queue..  

**Orie Steele:** The words "VC-like" ... are we talking about any situation where arbitrary data is signed with crypto and verified? Are we talking about google's libs for signing arbitrary content, are we talking about signing protocol buffers, how far away from signatures on structured data?.  

**Michael Jones:** My intent was for the credentials to look a lot like what the credentials look like, using the VC members, but not in a conformant way..  
… I wasn't looking at bringing in protocol buffers, etc..  
… Just if you squint and it looks like a VC..  

**David Chadwick:** What does "aware" mean? Could we alter this to be direct experience with?.  

> *Orie Steele:* I'm aware of several "non conformant" implementations of W3C Verifiable Credentials..

**David Chadwick:** "Aware of" -- you hear gossip on channels, it doesn't mean it's necessarily true..  

**Michael Jones:** I'm trying to establish facts on the ground which we did talk about at TPAC..  
… There's a lot of things in my experience that are like this but not..  

**Orie Steele:** Likes to point out the SmartHealth credentials that could have been a VC but is not..  

> *Orie Steele:* I wish I could use the DEF header on a JWS..

**Michael Jones:** I'm not trying to wordsmith this -- I don't want it to take 10 minutes, I just want to establish it is happening in practice..  

**Manu Sporny:** I don't think it's useful to identify implementations that are knowingly breaking specifications..  
… I feel like we're repeating things that were said in that long thread. It's like asking "How many of us know a developer that refuses to follow the specification?" Even though many people do follow the spec..  

> *Tobias Looker:* yeah I believe its important to acknowledge reality and understand why this is the case.

> *Michael Jones:* Mike's proposed poll 2: "Representations of the VC 2.0 data model must be restricted to only JSON-LD.".

> *Michael Jones:* Mike's proposed poll 3: "It must be possible to have credentials that do not require `@context` processing.".

> *Michael Jones:* Mike's proposed poll 4: "It should be possible to syntactically determine when JSON-LD processing is required and when it must not be performed.".

> *Michael Jones:* Mike's proposed poll 5: "Interoperability can be achieved without a graph-based data model.".

**Manu Sporny:** I think this only establishes that there are people that don't want to use this value even though there are multiple things that would allow them to use it. We have data over multiple years, there are people that have implemented the issuing of VCs, if we just look at the latest plugfest, I believe there were zero implementers that didn't use `@context`..  
… Are we optimizing for people that will read a spec and implement or someone else -- who are we optimizing for? I get that there are companies out there that do not want to implement `@context` but we have discussed this to death in that issue..  

**Michael Jones:** It will establish that some developers aren't using the spec as written..  

**Orie Steele:** One thing that would be helpful would be to look at something like the DID registries. When we see people registering DID methods, given the decision to make `@context` optional in there, of the entries in there, pretty much none of them, except for one, in the history of the ones I've reviewed....  
… Only one didn't include `@context` and the reason that they do that is to just include it because it's in the spec and they want it to work..  
… I think that's healthy and we should make it work..  
… I think that making something that looks like JSON-LD and RDF but doesn't have `@context` but has all the conventions and so on from that ecosystem will just be repeating the mistake made in the DID WG..  
… All the dev experience, all the things making VCs more valuable from a regular JWT or JWS comes from this ecosystem that has been developed in the W3C. It's a waste of time to remove this one member that provides this valuable distinction..  
… From a JWT that also is a standard with claims about subjects and a VC that also has claims about a subject but an open world data model many of us came here to work on..  
… I think we could get to a valuable solution, instead of making `@context` optional, to a solution that makes it easy to use where we don't have to talk about it again..  
… There are proposals that I'm in favor of, we don't have to get to them right now, but establishing that devs don't fully read specs doesn't seem like a useful statement. It also applies to JWT and `alg=none` and any other standard I've ever read..  

**Brent Zundel:** Thank you, Mike for the first poll..  
… Can I run the second?.  

**Michael Jones:** If you dont' want to run the first one, the second is fine..  

**Poll: Representations of the VC 2.0 data model must be restricted to only JSON-LD.**

**Michael Jones:** Please decide to run it or not, I don't want it to take up a lot of time..  

> *Orie Steele:* +1.

> *Drummond Reed:* -1.

> *Gabe Cohen:* -1.

> *Kristina Yasuda:* -1.

> *Michael Jones:* -1.

> *Dave Longley:* +1.

> *Antony Nadalin:* -1.

> *Manu Sporny:* +1.

> *Brent Zundel:* +0.

> *David Chadwick:* +1.

**Brent Zundel:** We don't have agreement there, the point is to tease out where we agree and where we don't..  

**Michael Jones:** Ok, we've determined something..  

**Poll: It must be possible to have credentials that do not require `@context` processing.**

> *Drummond Reed:* +1.

> *David Chadwick:* +1.

> *Gabe Cohen:* +1.

> *Orie Steele:* +1.

> *Antony Nadalin:* =1.

> *Michael Jones:* +1.

> *Dave Longley:* +1 for some definition of context processing :).

> *Tobias Looker:* +1.

> *Kristina Yasuda:* +1.

> *Brent Zundel:* +1.

> *Manu Sporny:* +1 (to some definition of @context processing).

> *Logan Porter:* +1.

> *Antony Nadalin:* +1.

> *Shawn Butterfield:* +1.

**Brent Zundel:** I think every +1 is for "some definition of context processing".  

**Poll: (Mike's proposed poll 4) "It should be possible to syntactically determine when JSON-LD processing is required and when it must not be performed."**

> *Drummond Reed:* +1.

> *Gabe Cohen:* +1.

> *Michael Jones:* +1.

> *David Chadwick:* -1.

> *Orie Steele:* -1.

> *Dave Longley:* -1 because JSON-LD processing is not clear.

> *Antony Nadalin:* +1.

> *Manu Sporny:* +1 (for some definition of JSON-LD processing) :0.

**Dave Longley:** I think we've really got to come to a shared understanding of JSON-LD Processing, or using that term, everyone has a different version of what that means and we keep getting stuck on it..  

> *Tobias Looker:* -1 because it shouldn't be required or not required data consumers should be able to do it if they want to and its available.

> *Orie Steele:* ^ yes, tobias.

> *David Chadwick:* agreed. its a decision of the verifier.

**Dave Longley:** What we need in the spec is "not use json-ld library, but you might be able to do string comparison on a field".  

**Orie Steele:** I was going to say something sort of similar. I think the poll is not precise enough to provide meaningful value in terms of really understanding what's going on here..  
… I agree with Tobias's comment in the chat..  

**Michael Jones:** What is your sense of this poll?.  

**Brent Zundel:** Makes a bit more support than not but no where near consensus..  

**Poll: Interoperability can be achieved without a graph-based data model.**

> *Michael Jones:* +1.

> *Gabe Cohen:* +1.

> *Drummond Reed:* +1.

> *Shawn Butterfield:* +1.

> *Kristina Yasuda:* +1.

> *Orie Steele:* -1.

> *Manu Sporny:* -1.

> *Dmitri Zagidulin:* -1.

> *Antony Nadalin:* +1.

> *David Chadwick:* +1.

> *Dave Longley:* -1 interop on what? another standard? :).

> *Shawn Butterfield:* but i'd still like graph data so ... :shrug:.

> *Dmitri Zagidulin:* agree, 'interoperable' is a vague term.

**Brent Zundel:** Once again, no real consensus coming out there..  

> *Tobias Looker:* ~0 yeah I mean agree with manu here if we had something new.

> *Ted Thibodeau Jr.:* -1 (it would require starting with complete destruction of VCDM 1.0).

**Manu Sporny:** I wanted to try with some language ... where we were able to sit down with multiple people at IIW to come to consensus around it. I'd like to speak to them before running the polls..  

> *Orie Steele:* yes TallTed, that's correct..

**Manu Sporny:** I think these were consensus positions at IIW -- I'd like to stick on each one and have a little more discussion. I think like the proposals Mike put in there -- I think it's easy to misunderstand what certain words mean..  
… Let me go to JSON-LD algorithmic processing and maybe fine-tune that. Perhaps we can get some kind of detailed view of "JSON-LD processing".  

**Poll: JSON-LD algorithmic processing of `@context` is not required, but must not be broken for JSON-LD processors, either. So, you don't have to process it, but you can't include a value that blows up JSON-LD processors either.**  

> *Orie Steele:* I agree with the intention of it, but i hate the language.

**Manu Sporny:** This does presume `@context` is not optional, it must be included, but it doesn't have to be processed if you have another way to process it..  

> *Manu Sporny:* +1.

> *David Chadwick:* +1.

> *Orie Steele:* -1.

> *Gabe Cohen:* and importantly you do not need to resolve the value of the context, because the terms can be defined in a spec.

> *Ted Thibodeau Jr.:* +1.

> *Gabe Cohen:* +1.

> *Drummond Reed:* 0.

> *Dave Longley:* +1.

> *Kristina Yasuda:* -1, do not understand why all JSON only developers whose VCs will highly never enter JSON-LD processor, have to account to not breaking all JSON-LD processors....

> *Shawn Butterfield:* +1.

> *Michael Jones:* 0 because I'm in the queue.

> *Brent Zundel:* +1.

> *Logan Porter:* +1.

> *Dmitri Zagidulin:* +1.

> *Tobias Looker:* +1.

> *Antony Nadalin:* +1 but also don't agree with language as it should be ignored if not understood.

> *Orie Steele:* +1 nadalin.

> *Dmitri Zagidulin:* @kristina - that's equivalent to saying -- why should developers follow the spec, just to avoid breaking processors.

**David Chadwick:** I was on the queue to talk about a credential vs. a verifiable credential -- and I think that matters based on VC-JWT or not..  
… My answer to the 4th poll changes based on whether it's a credential or verifiable credential..  

**Michael Jones:** Yes, I agree with the "you don't have to process it part". But I'll note Manu's poll question places additional burdens on issuers that are not currently present in the spec..  

> *Michael Jones:* -1.

**Michael Jones:** In particular, he's saying the `@context` needs to result in valid JSON-LD which isn't in the spec today. I could live with the poll if `@context` is optional but not if it's required..  

**Manu Sporny:** To clarify that, Mike, the idea here would be an issuer that's issuing would set `@context` to effectively a hard-coded value..  
… If you have an issuer that doesn't want to use `@context`, and they don't include it, it breaks all / most of the processors out there today..  
… Let's go with your assertion, Mike, and say that there are issuers that don't want to use this and they put a value or two values that send a signal to JSON-LD processors that says "this thing I'm creating has private claims in it and I'm communicating that to the vast majority of the ecosystem that speaks that now"..  
… The extra burden on those issuers is a single line of code that injects the same static value in their VCs..  
… I'm arguing that that burden really isn't that much of a burden. Having a one-liner that puts a static value in there that doesn't change is the compromise that give people who don't want to process `@context` what they want and it wouldn't break the ecosystem system of processors that do use it..  

**Orie Steele:** Bear with me for a second. I'd like to just pretend for a second that VCs don't exist at all..  
… You're sitting down to build a new way of expressing claims about a subject that are protected by an issuer..  
… You've got some really wonderful specs at IETF, you can use JOSE, COSE, maybe you don't like the work at IETF, so you use protocol buffers with raw signatures on top of them..  
… Maybe you want a ZKP thing with a custom data model around it..  
… If we're really interested in building interop around that data model, we should define that data model and then we're talking about maintaining interop with respect to a specific data model..  
… One of the challenges with the work from the DID WG and what's being contemplated here -- is that we have people suggesting we break parts of the data model and not take ownership..  
… If we're doing this weird array JSON thing with hashes or repeating id and type everywhere ... if we're getting these influences into the data model, then maintaining interop is about what's there, but it's hard to see that destroying parts of the model helps..  
… Maybe we do VCs in COSE ... and compact binary everywhere and there isn't any inheritance, nothing to maintain interop, no conventions to follow, nothing would be confusing if we just stopped following them..  
… I'm really not in favor of making `@context` optional here because it's destroying interop we worked hard to create..  
… But I'm very much in favor with doing that on a new spec with like COSE or something -- I'm excited about that. The problem is really, this particular approach of trying to basically say our data model is JSON-LD while not saying that..  
… I think it's really great to build a mandatory JSON-LD ecosystem where you don't have to do any JSON-LD processing..  
… And I think we have to talk about that more because we've mentioned it many times and we don't have clarity ... what does JSON-LD processing mean and if `@context` is required, what does it actually mean to data that's conformant to the spec..  
… I think we have to be very careful about what does JSON-LD processing actually mean..  

**Michael Jones:** Manu had said -- it's not that hard for issuers, you can just put a constant string in your JSON and your done. I understand that and we could even land there..  

> *Orie Steele:* kristina_ starting something new in IETF would make sense only if w3c data model requires JSON-LD representation and processing, I'm in favor of doing this... personally..

**Michael Jones:** Dmitri made a proposal in the longest issue of all time. He said if `@context` is missing, then people should interpret the result as if it was present. And then the issuer doesn't have to put the string in at all..  
… To Orie's point about the IETF. I love the IETF, I think this WG will advance our overall goals of VCs and the privacy preserving model over all if we're inclusive of the various styles..  

> *Orie Steele:* The 3 party model has nothing to do with W3C, its a function of cryptography... its not a "web" thing..

**Michael Jones:** Having more people produce legal VCs -- even if they aren't all the same, even if some are CBOR, it's better..  
… We're in a WG to make things better..  

> *Michael Jones:* +1 to Kristina's comment about JWTs needing more to make them VCs.

> *Michael Jones:* Yes, the ID Token is a profile of JWTs with some required claims and defined semantics for some of them.

**Gabe Cohen:** I think there's misunderstanding where some see the value and need of JSON-LD and others just don't. How do we resolve that? The thing that's become most clear to me is that removing `@context` breaks interop. Maybe that's not valid, but what we don't want to do is break interop or get to the point where everything is different and there isn't enough interop...  

> *Orie Steele:* +1 gabe... lets lower the barrier, while maintaining interop..

> *Manu Sporny:* +1 gabe.

**decentralizedgabe:** I think what we want to do is get `@context` to be easy to use to get that interop without people needing to understand / use `@context`..  

**Gabe Cohen:** I think that including a couple of properties gets us there..  
… It could be enumerating all properties in the spec itself -- I think all this does let more people produce more legal credentials and better than what we have today..  

**Dmitri Zagidulin:** I want to speak to my proposal on that thread about `@context` being optional and having a VC have default context. I did change my mind later on in the thread for a couple of reasons..  
… The biggest one being, I realized that's it's not at all trivial for a processor to understand that, specifically, this JSON object is a VC and therefore apply the default context..  
… I remember wanting to make the same proposal in the DID WG and have a default. Now we're dealing with a different JSON object ... and each one has its own default context and the rules for figuring things out get really complicated..  
… I dont' want devs to have to do that, so I retract that proposal..  

> *Antony Nadalin:* -1 bad language.

**Manu Sporny:** So the only -1s we have are Orie because I think you don't like the language but we can fix that. We have Mike -1ing and he spoke but we haven't heard from Kristina's -1..  
… That's it..  

**Brent Zundel:** Kristina, do you want to speak to that?.  

**Michael Jones:** I just wanted to make a process point, if there are valuable polls to run, we should run them before the clock runs out..  
… We've had so much discussion on the issue I don't think we have to talk more here..  

**Brent Zundel:** I agree..  

**Kristina Yasuda:** Not much to add. I think there are different ecosystems using different processors. If I'm a JSON-only dev and I'm not planning on using JSON-LD and the VCs I issue will never enter an ecosystem where a JSON-LD VC will be used..  

**Poll: JSON-LD is not mandatory to create or process a VC.**

**Brent Zundel:** The big thing I'm excited about is that an Issuer doesn't know where they will end up..  
… A holder is going to have a wallet, they could have VCs from all over the place and be able to use them all over the place..  

> *Dave Longley:* +1000 to brent.

**Brent Zundel:** I don't think an Issuer can say "this will only be used here"..  

> *Ted Thibodeau Jr.:* +100 VCs will travel much further and be used for much more than issuers conceive of at issue time.

**Brent Zundel:** That's my 2 cents. One of the concepts that came out of IIW was the notion that the `@context` property serves as a meta type for the VC..  
… The first value says it's a VC and the second or subsequent values say what the specific type is..  
… We have a type field that says the type of credential and the `@context` field says the "meta type"..  
… I'd like to tease this out a little bit more and find the right language..  

> *Dave Longley:* +1 to Brent's framing.

> *Samuel Smith:* q.

**Manu Sporny:** +1 to when an Issuer issues a VC, they in general don't know where it will be consumed -- a VC in a digital wallet can go anywhere and give that to a verifier that is highly likely to use other processing..  

> *Manu Sporny:* If a processor chooses to process `@context`, it may do that via simple string equality comparison that compares, at most, 1-2 URLs (to keep things simple)..

> *Orie Steele:* -1.

> *Michael Jones:* -1.

> *Drummond Reed:* 0.

> *Samuel Smith:* The schema itself is the type. This is more precise..

> *Dave Longley:* +1 except i think it should be "must process, but the only 'processing' is string comparison".

> *Manu Sporny:* +1.

> *David Chadwick:* +1.

> *Gabe Cohen:* +1.

> *Samuel Smith:* -1.

> *Dmitri Zagidulin:* +1.

> *Ted Thibodeau Jr.:* +1.

> *Tobias Looker:* +1.

> *Shawn Butterfield:* 0.

> *Kristina Yasuda:* 0.

> *Logan Porter:* +1.

> *Ted Thibodeau Jr.:* + what dlongley said.

> *Joe Andrieu:* +1.

> *Michael Jones:* I'm in favor of letting JSON-LD be JSON-LD whenever the issuer chooses to use it.

> *Dave Longley:* this is asking people to always check the "meta type", IMO..

**David Chadwick:** It's been said, but I don't think Kristina's model is either in the spirit of keeping a VC model -- nor is it realistic. Once people have VCs in their wallet, they will use them wherever they want..  

**Poll: JSON-LD is not mandatory to create or process a VC.**

> *Ted Thibodeau Jr.:* +1.

> *Michael Jones:* +1.

> *Orie Steele:* +1.

> *Drummond Reed:* +1.

> *Gabe Cohen:* +1.

> *Shawn Butterfield:* +1.

> *Dave Longley:* +1.

> *David Chadwick:* +1.

> *Logan Porter:* +1.

> *Tobias Looker:* +1.

> *Kristina Yasuda:* +1.

> *Michael Jones:* We're voting on "JSON-LD is not mandatory to create or process a VC".

> *Joe Andrieu:* -1.

> *Manu Sporny:* -1 ('cause I'm confused).

> *Orie Steele:* [https://www.w3.org/TR/json-ld11/](https://www.w3.org/TR/json-ld11/).

> *Manu Sporny:* People are +1'ing the removal of `@context` now?.

**Joe Andrieu:** What does this mean? It's confusing..  

> *Samuel Smith:* +1.

**Brent Zundel:** I don't have to know about it to use VCs..  

> *Dmitri Zagidulin:* +1.

> *Manu Sporny:* +1 to "I don't gotta know about it to use VCs".

> *Dave Longley:* +1 just read the VC spec and you're fine.

> *Shawn Butterfield:* +1.

> *Gabe Cohen:* +1.

> *David Chadwick:* @kristina. this is where we want to get to :-).

**Joe Andrieu:** If it's just that statement, I agree..  

**Brent Zundel:** If I want to create or process a VC, I don't gotta know about JSON-LD..  

**Joe Andrieu:** Are you writing the software or running someone else's software? A web user ... do they have to know HTML? They don't, end users don't..  

> *Orie Steele:* do you need to know base64url to use a VC?.

> *Joe Andrieu:* -1.

**Brent Zundel:** Should I be able to create a VC even if I know something about a JSON-LD..  

**Michael Jones:** Is that a conclusive result or a lack of consensus?.  

**Manu Sporny:** I'm concerned it's so vague that people are +1ing the definition in their own head..  
… I think when we get into the details we might find -1s..  

**Poll: A compliant VC must not break a JSON-LD Processor.**

> *Dave Longley:* +1.

> *Orie Steele:* +1.

> *Manu Sporny:* +1.

> *Gabe Cohen:* +1.

> *Ted Thibodeau Jr.:* +1.

> *Joe Andrieu:* +1.

> *Michael Jones:* -1.

> *David Chadwick:* +1.

> *Dmitri Zagidulin:* +1.

> *Drummond Reed:* 0.

> *Kristina Yasuda:* -1.

> *Logan Porter:* +1.

> *Tobias Looker:* +1.

> *Samuel Smith:* @dmitriz interop comes with drag. One must balance the cost of the interop vs the value of the interop.

> *Samuel Smith:* -1.

> *Shawn Butterfield:* 0.

**Brent Zundel:** three -1s on that, otherwise a lot of positives..  

**Manu Sporny:** These polls, I'm just putting them in here, we got to consensus on these at IIW..  

**Poll: It will be illegal to fetch certain remote contexts from the Web (as outlined above). This will enable a usage of VCs that require no remote context downloading, reading, or processing (simple URL string comparisons can be used instead).**  

> *Orie Steele:* -1.

> *Joe Andrieu:* -1.

> *Michael Jones:* -1 When JSON-LD is used, really use it correctly..

> *David Chadwick:* 0.

> *Manu Sporny:* +1.

> *Dave Longley:* -1 to making it illegal but +1 to the rest :).

> *Samuel Smith:* 0.

> *Ted Thibodeau Jr.:* +0.8.

> *Gabe Cohen:* 0.

> *Drummond Reed:* +1.

> *Tobias Looker:* +1.

> *Shawn Butterfield:* +0.3333.

> *Dave Longley:* +1 to defining the context as immutable..

**Poll: It will be legal to use `@vocab` as either a) specified in the first context, b) specified in the second context, or c) specified inline via `@vocab` in the second context position, or d) any variation of the previous options.**  

> *Orie Steele:* +1.

> *Dave Longley:* +1.

> *Ted Thibodeau Jr.:* +1.

> *Logan Porter:* +1.

> *Drummond Reed:* 0.

> *Manu Sporny:* +1.

> *Michael Jones:* +1 because it's a legal part of JSON-LD.

> *David Chadwick:* 0 don't care.

> *Dmitri Zagidulin:* +1.

> *Joe Andrieu:* 0.

> *Brent Zundel:* +1.

> *Antony Nadalin:* =1.

> *Samuel Smith:* 0.

> *Antony Nadalin:* +1.

> *Kristina Yasuda:* +1 though this is a lot of options...

> *Shawn Butterfield:* +1.

> *Tobias Looker:* +1.

> *Gabe Cohen:* +1.

**Brent Zundel:** That's one of two polls with full consensus today..  

> *Antony Nadalin:* +1.

**Brent Zundel:** I think we've gone as far as could today, thanks for tuning in. I hope this helps people tease out where the disagreements are. I hope folks will reach out to one another..  
… Please have conversations and work forward on this. I have great faith in this group to figure things out and come to agreement..  

> *Tobias Looker:* happy thanksgiving all! (even though we kiwi's don't celebrate it!).

**Michael Jones:** Request to the chairs, could you please, in the minutes or a subsequent email, give your sense of each of the disposition of each of the polls..  

> *Gabe Cohen:* enjoy your polltry.

> *Dave Longley:* One more thing for the minutes from me is that the current VC spec requires contexts to work as JSON-LD :).

---
