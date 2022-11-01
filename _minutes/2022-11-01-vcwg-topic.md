---
layout: minutes
date: 2022-11-01
title: Verifiable Credentials Working Group Special Topic Call on `@context` — 2022-11-01
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2022-11-01-vcwg-topic",
        "name": "Verifiable Credentials Working Group Special Topic Call on `@context` — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on `@context`",
        "dateCreated": "2022-11-01",
        "irc": "vcwg-topic",
        "datePublished": "2022-11-01",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on `@context`",
            "startDate": "2022-11-01",
            "endDate": "2022-11-01",
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
                            "name": "Markus Sabadello"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Ivan Herman"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Antony Nadalin"
                },
                {
                    "@type": "Person",
                    "name": "Michael Prorock"
                },
                {
                    "@type": "Person",
                    "name": "Drummond Reed"
                },
                {
                    "@type": "Person",
                    "name": "David Waite"
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Brent Zundel"
                },
                {
                    "@type": "Person",
                    "name": "Mahmoud Alkhraishi"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Jeremie Miller"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Shawn Butterfield"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Steve McCown"
                },
                {
                    "@type": "Person",
                    "name": "Przemek Praszczalek"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Charles Lehner"
                },
                {
                    "@type": "Person",
                    "name": "Oliver Terbu"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Benjamin Goering"
                },
                {
                    "@type": "Person",
                    "name": "Gerard Iervolino"
                },
                {
                    "@type": "Person",
                    "name": "Daniel Hardman"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on `@context` — Minutes
{: .no_toc .draft_notice_needed}



**Date:** 2022-11-01

See also the [Agenda]() and the [IRC Log](https://www.w3.org/2022/11/01-vcwg-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ivan Herman, Michael Jones, Antony Nadalin, Markus Sabadello, Michael Prorock, Drummond Reed, David Waite, Manu Sporny, Brent Zundel, Mahmoud Alkhraishi, Kristina Yasuda, Dave Longley, Dmitri Zagidulin, Jeremie Miller, Will Abramson, Chris Abernethy, Shawn Butterfield, Ted Thibodeau Jr., Steve McCown, Przemek Praszczalek, Joe Andrieu, Charles Lehner, Oliver Terbu, David Chadwick, Benjamin Goering

**Regrets:** 

**Guests:** Gerard Iervolino, Daniel Hardman

**Chair:** Kristina Yasuda

**Scribe(s):** Markus Sabadello

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Kristina Yasuda:** First administrativia... Tomorrow's usual call.  
… Special topic call will be in 3 weeks (after IIW and IETF).  
… We're only canceling one call during IIW week, the calendar should already be updated.  

**Ivan Herman:** Not everyone has been on topic calls before. Any decisions taken on this call are not binding. The only place where binding resolutions can be made are official WG calls. This is not an official call in terms of W3C process..  

**Kristina Yasuda:** Thanks for the reminder ivan.  

### 1. Make the usage of `@context` optional (issue vc-data-model#947)
{: #section1}

_See github issue [vc-data-model#947](https://github.com/w3c/vc-data-model/issues/947)._

<!-- issue w3c/vc-data-model/947 -->



**Kristina Yasuda:** This is about making `@context` optional. Thanks everyone for contributing and commenting on the issue..  
… It's nice to see how many people care.  
… There are a lot of different arguments, probably some people worry about implications for interoperability.  
… There has been big tent and small tent terminology.  
… How does the group think about semantic interoperability and extensibility. What are the different thoughts around that?.  
… Maybe we can find points to reach agreement on.  
… I suggest let's start there, then we can focus on certain aspects at any time.  

**Manu Sporny:** A bit of background. A lot has happened in.  
… Currently `@context` is required across representations. There has been some confusion about this. This is definitely what the spec makes.  
… We're talking about introducing a breaking change to the VC data model.  
… There seem to be different lines of thinking on whether this is a good or bad thing.  
… One train of thought is JSON-LD is difficult to use, and we should allow different types of extensibility models. Because of that we should make `@context` optional and open up the aperture. This is the "pro-remove-context" argument.  
… Extensibility could use an IANA registry, let's follow more traditional JSON-based approaches, similar to JWT.  
… We want to make this as easy as possible for developers. This is a common area. The "pro-lets-keep-things-the-way-they-are" (requiring `@context`) arguments are: We want decentralized extensiblity. We don't want to create centralized registries, and create a common data model.  
… In 1.0, there was an agreement about using a graph-based data model, JSON-LD ticked the boxes.  
… This "pro-keep-`@context`" camp is concerned about making a breaking change that will further complicate how people have to process VCs.  
… These seem to be the two main lines of thought.  

**Michael Jones:** We're at a better point for VCs now than we were several years ago, because we have seen what people have actually built and deployed.  
… Some people do want semantic knowledge graphs with JSON-LD, and some people don't feel they need it and have deployed things that don't use it..  
… Smart Health credentials, Microsoft's implementations, are examples.  
… Some people can't get JSON-LD right without expert help.  

> *Drummond Reed:* ISO mDL/mDOC and ToIP ACDC are not Microsoft-lead initiatives.

**Michael Jones:** There was XML-SOAP web service stack which worked really well, but developers hated it, they thought a lot of the complexity was unnecessary.  
… Developers vote with their feet. They want VCs with the three party model, but they don't care about JSON-LD features for the most part.  
… I read the whole thread. No part of our charter talks about semantic knowledge graphs. It's not core of our mission.  
… It would be wise to create a standard based on what developers are actually using.  
… One argument in the thread was you're not required to do JSON-LD processing even though there is a JSON-LD `@context`.  
… There's evidence that a divide is harming interoperability.  
… It would be better to say if there's `@context` it's JSON-LD, and if it's not there, then it's not JSON-LD.  

> *Drummond Reed:* +1 to a "bright line" as to whether a particular instance does or does not use JSON-LD.

**Dave Longley:** From my perspective. Regarding decentralized extensibility, we have a technology that has been around for over a decade called JWTs. It expresses claims and uses a centralized IANA registry.  
… Use cases have come up over that decade where people felt that the JWT model doesn't solve their problems. That's where VCs came from.  
… JWT doesn't allow decentralized semantics, and merging of different data.  
… A centralized registry couldn't scale to the many terms, and people didn't want to ask for permission when using terms.  
… `@context` is a way to express which registries are in play. Instead of having one registry you can do it in a decentralized way.  
… We specify registries in the `@context` field, this will disambiguate which terms are being used. This allows anybody to make and share common vocabularies.  
… With this concept we got a graph model where we can merge data about different entities. Credentials from different parties can be used to learn about the same entity. This is very valuable for supply chains, etc. There are a lot of use cases that VCs solve, not just personal credentials.  

> *Drummond Reed:* The issue with the "`@context`" property is that it requires using one particular solution to decentralized semantic interoperability. It is not the only solution. By making "`@context`", required, we exclude those other solutions.

**Dave Longley:** We have an existing technology, where people voted with their feet, and said this doesn't solve use cases. And VCs came up.  
… And I don't see how JWTs can't be used in a three party model..  

> *Manu Sporny:* drummond, not true -- you can list a jsonSchema and use that if you want (not that that's a fully formed technical solution) -- you need to propose a fully formed alternative. We can't hand-wave over the details here.

> *Manu Sporny:* +1 to dlongley.

**Dave Longley:** If you're happy to use a centralized registry, there's already a technology that solves this problem. There would be no point in making VCs that same technology.  

**Michael Jones:** Thank you dlongley for sharing thoughts on JWT..  
… One extensibility mechanism for JWTs you haven't mentioned is the ability to use collision-resistant claim names, often prefixed by URLs that are in control of the party defining the claims.  
… Just like `@context` relies on URIs for permissionless global extensibility, I can also create claim names under a domain name I control, to set up my own claim names.  

> *Manu Sporny:* "Collision-resistant claim names" are things like this: "https://foo.example/my-vocab/my-properties" <--- people aren't widely using these in JWTs -- we need to ask the question "why?" What's different between VCs and JWTs?.

> *Dmitri Zagidulin:* URIs as property names, for JSON objects. If only there was a way to like.. extract / DRY those URLs into an object, so developers could continue to use URLs as property names, but also have them be human-readable and idiomatic :).

**Michael Jones:** So it's in fact the same extensibility model. We can also use an IANA registry, that's open to all. That's just as permissionless, you just have to send a permission request. I have helped several people on the call do that, it's very easy.  
… JWT is also permissionless and globally extensibility.  

> *Drummond Reed:* One of the other fully decentralized solutions for decentralized semantic interoperability is labeled-property graphs (https://neo4j.com/blog/rdf-triple-store-vs-labeled-property-graph-difference/), which is the solution used by ACDC credentials. It would be ideal if ACDC credentials could be included under the W3C VC tent..

**Michael Jones:** The VC specs did define JWT claim extensions "vc" and "vp" to use the three party model.  

> *Manu Sporny:* drummond, if you want the VCWG to use Labeled Property Graphs (LPGs), you should propose that as a technical solution.

**Michael Jones:** As Daniel Hardman said in this comments, there are times for strictness and times for laxness. The web flourished because HTML was lax. Structure was added to it, but structure was optional.  
… We should let developers use it as they see fit. A failure would be if this WG decides that only JSON-LD VCs would be VCs.  
… Again, the charter doesn't talk about the graph model.  
… People should use it if they want, and not use it if they don't want.  
… Let us use VCs with as much or little structure as we want.  

**Manu Sporny:** I want to push back hard against the rhetoric about "the data is in and developers have spoken".  

> *Michael Prorock:* +1 manu.

**Manu Sporny:** The reality is that we have had multiple plugfest, currently JFF involves close to 40 implementers. None of them seem to have any problems with having `@context` into their VCs.  
… The assertion that developers out there desire it, if that's happening, they should engage.  

> *Mahmoud Alkhraishi:* +1.

**Manu Sporny:** Anybody can engage on Github and the mailing list. I don't buy that there is a ground swell.  
… Finding one developer who makes a mistake doesn't imply "desire". It doesn't mean they don't want to put it in there.  
… You've got to back it up with citations and data.  
… We can absolutely back up that people are using `@context` in JFF plugfest. They use both JWT backed VCs and Data Integrity backed VCs.  

> *Michael Jones:* The data is in the issue - see the number of people who are speaking against `@context`.

**Manu Sporny:** I do believe that there are some developers who don't want to use it, but they have to bring forward a concrete technical solution.  
… This has not been done to date.  

> *Antony Nadalin:* not everyone can participate in these interops.

**Kristina Yasuda:** We have some implementers on this call; there are also other implementers who are not on this call.  

**Dave Longley:** Want to respond to selfissued about JWT's decentralized extensibility mechanism using fully qualified terms.  
… It's true, you can do that with JWTs. The problem is that you wind up with non-idiomatic JSON that doesn't look like JSON to developers. That is important not jus aesthetically, but developers also have to implement this in their code.  

> *Michael Jones:* `@context` irks and bothers developers.

**Dave Longley:** `@context` was designed for this, to make it possible to continue to use idiomatic JSON.  
… It was really important to have term conflict resolution on a global scale, while still having idiomatic JSON.  
… Regarding the graph model, it's not in the charter, but it's in the spec today. So it doesn't have to be in the charter.  
… JSON is a format, not a data model. VC introduces a data model.  

> *Michael Prorock:* +1 Dave Longley.

> *Manu Sporny:* +1 dlongley.

**Dave Longley:** I don't understand why a new spec is needed to use JWTs in a three party model. I don't know why JWTs can't be used.  

> *Michael Jones:* It irked the SmartHealth pass developers. It irked the Microsoft decentralized identity developers. It irks the many people who showed up to speak on the issue against `@context`, like Daniel Hardman. Look at the data.

> *Manu Sporny:* Microsoft led the SmartHealth pass work, right?.

> *Michael Jones:* Microsoft participated in the SmartHealthPass work, just like it's participating in the VCWG.

**Dave Longley:** I don't know why JWTs are not only used to secure VCs, but also seem to change the VC data model..  
… If you want to do whatever modeling you want with JSON, just use JWTs.  

**Drummond Reed:** First point. My understanding from people who implement JWTs is that JWT technology does not define a three party model. So if you want to use JWTs, the JWT community has come to this community to define a three party model..  

> *Dave Longley:* it seems that you could just define a three party model via claims descriptions that you submit to the IANA registry for JWT.

**Drummond Reed:** They want to be interoperable with this community here. Having a common way to describe this model, so that it can be implemented in JSON-LD, JWT, etc. is the reason why the thread so long. This explains why some want to use `@context` and others don't.  
… I don't understand. The benefits of JSON-LD are all still there for everyone who uses the JSON-LD model if `@context` is still there. All we're saying is that other models can also be used. I don't see the harm of opening it up to other models.  
… JSON-LD will always be JSON-LD if `@context` is there.  

**David Waite:** Talking about the plugfest.. If those implementations try to process JSON-LD they will fail unless they provide mapping files.  

> *Dave Longley:* David_Waite, you're misunderstanding the spec and "JSON-LD processing"..

**David Waite:** Some people want to use JSON-LD tools for a domain such as health care records.  
… I'm imaging that the plugfest was created around messages with `@context` that were fully resolved. The definition of how to map those were published. Without this the plugfest may not have been successful.  

> *Dmitri Zagidulin:* that's a misunderstanding, `@vocab` does not break the extensibility model.

**David Waite:** If I see property "foo" I will just make up a name, it's not being managed.  
… I want an avenue where I know the data is proper graph data, whereas someone wanted a different extensibility model, and here it is.  

> *Manu Sporny:* Yes, David Waite seems to be misunderstanding a variety of things here... about how the interop fest was set up being one of them.

**David Waite:** Telling people to map to JSON-LD and write `@context`, when the spec itself doesn't say that, will create a lot of interoperability problems.  

**Dmitri Zagidulin:** On one of the thread, I argued it's okay to make `@context` be optional, because instead we can require a default `@context` for VCs. If a developer encounters a VC and it doesn't have a `@context`, you can always inject a default base `@context` plus a `@vocab`.  
… It became clear to me that this isn't a viable option. It's not really possible what is a VC and what is not, enough to be able to inject this default `@context`.  
… So what if we don't have the default `@context`.  

> *Mahmoud Alkhraishi:* +1 on the friction point.

**Dmitri Zagidulin:** About making it optional: With the introduction of `@vocab`, there is zero friction for developers. Developers just have to copy & paste a single string, they don't have to create their own `@context`.  
… This is about the extensibility model.  
… Plain JSON extensibility hasn't worked out well. One group rejected `@context` initially and then ran into collision problems.  
… Another example in my mind shows that the registry and laissez-faire doesn't work is use profiles..  
… OIDC registers some standard claims for use profiles, such as name, picture, email.  
… This is really simple, really constrained. We have seen that even with the IANA registry, we've seen that in practice a bunch of implementers have implemented the use profile differently.  
… Auth providers have this in their documentation: They have to normalize certain fields that they have in common.  
… The point is they have only been able to agree on a small set of common fields.  

> *Daniel Hardman:* I don't think the queue is going to get to me before our time is up, so I'm going to leave my comments here.

**Dmitri Zagidulin:** The registry and JSON extensibility model only work within a single company or community. Once you cross communities, this extensibility model breaks down.  

**Antony Nadalin:** Wanted to comment back to manu. I don't have time to participate in plugfests. I brought up the issue of `@context` in the first release, I think the answer wasn't appropriate.  
… It's not needed for JWTs. I need a parser that has to deal with `@context`, so I have to change some core parts of my implementation. It feels awkward to have to change my parser if I just want to use JWTs.  
… `@context` is not applicable in a JWT environment. I have lots of use cases with an implementation that doesn't use it. I want to be compliant with the spec but I can't right now.  

> *Dmitri Zagidulin:* completely incorrect, regarding parsers.

> *Dave Longley:* you don't need a parser for it.

> *Dmitri Zagidulin:* those are not necessary.

> *Dave Longley:* we've said this many times :).

> *Daniel Hardman:* I don't care about developer friction; I think this has never been a very important consideration. My reasons for wanting to make `@context` optional have to do with the wisdom of putting human data into the semantic web, not with the bother of implementing.

**Shawn Butterfield:** I don't have the same legacy as others in the WG. I feel there's a lot of ideology and schisms about the intentions.  

> *Daniel Hardman:* I posted a long comment about this at the end of issue #947 with much more detail about that perspective.

**Shawn Butterfield:** We owe it to each other to understand where the different camps are coming from.  
… The details really matter here. The declaration to keep `@context` required matters.  
… The W3C definition of VCs really matters. I believe this is what people feel passionately about.  
… There are other formats because our customers have often not decided yet what they want. They want optionality.  
… I get where the camp is coming from that wants openness and ambiguity. I think it's important to not just dismiss that.  
… I don't think any one data model should attempt to claim superiority, it should be up to our customers.  
… We're going to see a proliferation of VCs, it's already happening.  

> *Kristina Yasuda:* q.

**Shawn Butterfield:** What's most important to me is security and trust. The data model can be circumstantial, but the security model needs to be very very clear.  

> *Daniel Hardman:* Piling on top of @shawnb's comments: it's the semantic implications of `@context`, NOT the processing implications, that motivate me to ask for `@context` to be made optional.

**Michael Prorock:** This is a good discussion. There is a lot of nuance on both sides. I have a lot of frustration with JSON-LD. In this context however the inclusion of `@context` (even if you're not processing it), there is a side benefit to it.  
… I'm pretty strongly of keeping `@context` in and easing developer onboarding. This keeps the semantic meaning of how we structure claims.  
… This isn't a hard thing to ask to include it, which is already in the spec.  
… I don't see a good argument to drop it. I see valid arguments to make it easier for developers, to add guidance about caching etc.  
… I don't see any significant reason for dropping it..  

> *Daniel Hardman:* +1 to Mike's comment about the primacy of security..

> *Daniel Hardman:* Helping developers isn't the reason `@context` should be made optional. See my final comment in #947.

**David Chadwick:** As a JWT developer we have absolutely no problem with `@context`. It doesn't cause interop problems for us.  

> *David Waite:* 2+.

**David Chadwick:** I don't see why e.g. the health care use case can't just include an `@context`.  

**Daniel Hardman:** I feel like developer onboarding and friction is a red herring. It's not about onboarding, it's about semantic implications. I left a long comment in the Github issue.  

> *Drummond Reed:* +1 to Daniel's point. What the JSON-LD folks do not seem to appreciate is the level of confusion that it causes in the market if all W3C VCs must have an JSON-LD `@context` statement when some of them do not use JSON-LD. Avast implements both and we feel strongly that `@context` should ONLY be used for VCs that use JSON-LD.

**Jeremie Miller:** Regarding developers voting with their feet. Ping is involved in a lot of pilots in the VC space with our customers. Those are customers who are silent, they are not on Github or involved in the standards process. Our team is getting pressure to use VCs. We're here because we want to find a common solution.  
… We're getting pressure from people who can't absorb a new JSON-LD tech stack, and they want to use JWT. We want to meet requirements.  

> *Dmitri Zagidulin:* `@drummond` - hey, you're absolutely right, confusion is bad. With this v2.0 spec, we have a chance to fix a lot of that confusion, to clarify. Without making breaking change & removing `@context` requirement.

**Joe Andrieu:** I think this is a breaking change. I don't think there is consensus. My proposal is to close the issue. There doesn't seem to be consensus and we should stick to the current spec.  

> *Michael Prorock:* +1 Joe Andrieu.

> *Drummond Reed:* -1 to closing this issue.

> *Jeremie Miller:* -1 to closing issue.

> *Antony Nadalin:* -1 to joe.

> *Michael Jones:* On the last WG call Manu said that it's not a breaking change because the V1 context doesn't change.

**Dave Longley:** The term "JSON-LD processing" is problematic. If you want to write an implementation of VCs, you don't need to use a JSON-LD library..  

> *Joe Andrieu:* `@tony` without consensus there will not be a change in the spec.

> *Manu Sporny:* To be clear, this is a breaking change to how the spec works..

> *Antony Nadalin:* issue should no way be closed as no consensus.

> *Joe Andrieu:* issue will never have consensus. that's why we should close.

**Michael Jones:** I appreciate everyone who spoke up. We all passionately care about this. It's really important that the WG produces a spec that everybody wants to use. I wanted to run some strawpolls, but we're out of time. We need another special topic call.  

> *Michael Jones:* -1 to closing.

> *Antony Nadalin:* nothing in charter about no breaking change allowed.

**Kristina Yasuda:** We need direction on how to proceed before we close the issue..  

> *Joe Andrieu:* no we don't "need direction". Changes require consensus. Full stop.

> *Shawn Butterfield:* Looking forward to the next call. Thanks Markus for scribing!.

**Kristina Yasuda:** Thanks everyone for joining. We will continue the discussion on the next special topic call in 3 weeks. Let's then try to make some resolutions on the main call..  
… See you tomorrow..  

---
