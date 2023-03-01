---
layout: minutes
date: 2023-02-28
title: Verifiable Credentials Working Group Special Topic Call on the proof property — 2023-02-28
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-02-28-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on the proof property — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on the proof property",
        "dateCreated": "2023-02-28",
        "irc": "vcwg-special",
        "datePublished": "2023-03-01",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on the proof property",
            "startDate": "2023-02-28",
            "endDate": "2023-02-28",
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
                            "name": "Manu Sporny"
                        },
                        {
                            "@type": "Person",
                            "name": "Dave Longley"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "David Waite"
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
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Tobias Looker"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Paul Dietrich"
                },
                {
                    "@type": "Person",
                    "name": "Kristina Yasuda"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Todd Snyder"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on the proof property — Minutes
{: .no_toc}



**Date:** 2023-02-28

See also the [Agenda]() and the [IRC Log](https://www.w3.org/2023/02/28-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Manu Sporny, David Waite, Dave Longley, Kerri Lemoie, Dmitri Zagidulin, Shigeya Suzuki, Tobias Looker, Chris Abernethy, Paul Dietrich, Kristina Yasuda, Ted Thibodeau Jr., Todd Snyder

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Manu Sporny, Dave Longley

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Brent Zundel:** Our topic for today, straightforward, PR 1014, conversation on proof property in core VC data model -- more specifically, should credential+ld+json media type require a proof property or allow one or forbid one?.  

### 1. Add normative requirements regarding media type and proof  (pr vc-data-model#1014)
{: #section1}

_See github pull request [vc-data-model#1014](https://github.com/w3c/vc-data-model/pull/1014)._

<!-- issue w3c/vc-data-model/1014 -->



_See github pull request [vc-data-model#1034](https://github.com/w3c/vc-data-model/pull/1034)._

<!-- issue w3c/vc-data-model/1034 -->



_See github issue [vc-data-model#1044](https://github.com/w3c/vc-data-model/issues/1044)._

<!-- issue w3c/vc-data-model/1044 -->



**Brent Zundel:** There is a long conversation in the PR, goal of this meeting is to hash out what different sides of debate are, and can then try to come to proposals, recommendations on how to move forward..  

**Manu Sporny:** There are a couple of threads for this discussion. One of the threads is "hey, we should have a media type for unsecured credentials and we should have one for secured ones. Those are the two classes we should have.".  
… "If we are going to do that then the unsecured credentials should have no securing mechanism in them." That's the argument for `application/credential+ld+json` MUST NOT or SHOULD NOT have a `proof` property in it..  
… The other argument is `application/credential+ld+json` has an extension mechanism and one of those might add a securing mechanism in it and we can't predict what mechanisms other people do, there might be new ones people define in the future and the language can't stop that from happening even if we put text in the spec..  
… Even if we say you can't put `proof` in there, we can't know all the different mechanisms that might happen in the future. The other part of that argument is, "well, you can have very deeply nested and structured VCs and we already have examples of things that learner records and transcripts that might have badges, workforce skills credentials, things that have embedded proofs in them and that's a valid use case.".  
… Potentially the outer envelope is not secured but the inner ones are..  
… So that's kind of the argument for "they may contain proofs"..  
… So we're looking at `application/credential+ld+json` either: "MUST NOT/SHOULD NOT have proof" or "MAY HAVE proof"..  

**Michael Prorock:** I think that's a reasonably good summary, in my mind, it's a more fundamental question. What is a credential? What makes it a verifiable credential?.  
… The way I think of it, once you add a signature, it goes from credential to verifiable credential. Once I see `application/credential+ld+json`, that's a credential, is an input type..  
… once you sign it... it becomes a verifiable credential. We can define what goes into the process, what makes something a VC, and if we can drive that line, we should do that. We can't cover non-compliant stuff w/ the spec, but we should cover cases that we know of..  

**Dave Longley:** I think it's good to avoid confusion where we can, we have to be careful about avoiding confusion when we're talking about secured vs. unsecured or trusted vs. untrusted data... the recipient of the data needs to have an expectation about what they're receiving. They can't just accept whatever the sender sends, that opens the door to potential vulnerabilities..  
… Another thing to consider around type is that a VC can be seen as a subtype of credentials, that concept allows for different use cases. Different parties might care about different types of credentials or not. If you have a VC or a credential, a digital wallet can display both..  
… People might want to accept things that accept VCs or credentials and add proofs -- so proof chaining, timestamp proofs, and we should be careful to not close the door to innovation, but we should be careful to think that we /can/ close that door. If we put in prohibitive statements, someone will figure out a way to get around it if it gets in the way. For example, someone could do a `proof2` field to get around something that says that `proof` isn't allowed..  

**David Waite:** Some of this may be defining the behaviour when you have multiple proofs by default, I can remove one of the proofs and it's still verifiable, just with less mechanisms..  
… The guidance on what to do when there are multiple proofs -- pick your favorite one, do them all for higher assurance, that would be helpful for this discussion, proofs can be dependent on other proofs as well. I have a proof that is protecting other existing proofs, those can't be removed. So some of the assumptions about difference between VC and credential and having proofs, really are in the eye of the verifier..  
… Some of the idea here is "if I have something like a JWS wrapping an external proof, and the proofs inside, what are the semantics that people should assume?" If we can't provide semantics that have value, maybe it's not legal in that case..  

**Michael Prorock:** The PR here is explicit around one line related to `application/credential+ld+json` media type. Those of us that are planning on using that tend to feel strongly, either this is input into something that gets linked data signature, or have external signature... not sure why we would `application/verifiable-credential*` or some structure that signifies that you have proof there, additional semantics, etc. Avoiding the fact that we can be clear here bothers me, frustrating to me that we can't be explicitly clear about desire to just have credential format w/o proof in it. There are representations that have proof block in there, media type used in cty/typ or other use cases..  

**Manu Sporny:** So I want to agree with what David Waite was saying..  
… That the difference between a VC and a credential is in the eye of the verifier. I think that's interesting there, I don't know how I feel with that as an absolute statement, but that resonates with me. There could be a VC with multiple proofs on it, but the verifier only wants to check 2 of them..  
… Maybe one is BBS, one is post quantum, one is ECDSA..  
… The verifier in that case may only case about ECDSA. They may choose to ignore the other proofs ... or they may choose to look at a proof further down the tree..  
… Mike, to look at the use case that you highlighted. ... Here's a concrete use case. If I have a learner record in the education space. The outer thing has no proof, but the inner one has all the classes I took this year and there are class descriptions and skillsets all with proofs..  
… Is that thing with 50 proofs at the second level ... is that top level thing a credential or a verifiable credential?.  
… You could argue this. I think it's problematic ... I think the PR language doesn't seem to give us an answer for that use case..  
… I think it doesn't give us an answer for that use case or use cases where there are other securing mechanisms used. And ultimately, it's up to the verifier to figure out which proofs it cares about..  
… It might be then that sometimes different mechanisms determine whether it's viewed as verifiable or not. It's the compound / complex objects that have signatures at the leaves that could be impacted negatively by this language. If we can be more specific we should be..  
… Mike's argument for having two different media types for verifiable vs. credentials resonates with me to communicate more specific media types for what I mean..  
… Remember, we have `application/credential+ld+json` which means you can process as JSON, JSON-LD, or as a credential in the VCDM..  
… We have that concept..  

**Dave Longley:** media types are not necessarily the right tool to make sure that something is an input to an API. The media type is a way to identify the type of content and how it would be parsed and used, regardless of what API you're using it in. It's a more encompassing thing, not for just one particular use case, one particular API, it's not the right tool for accomplishing that..  

> *Michael Prorock:* [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) etc. of course multiple use cases.

**Dave Longley:** That said, APIs have their own shape, can provide their own restrictions, you can do that, that's not a problem and that might be the right way to define that, you can do that via API schemas to accomplish that goal..  

**Kristina Yasuda:** Manu's comment confused me. I do not understand the concept of top level, secondary level proofs, one of the things we did in data model v2 is we separated data model in how we sign/secure it. The notion that something that conceptually is not supposed to be signed can have this proof is very confusing to me..  
… That's a use case we need to pay attention to -- is that a valid use case? We have `proof` in data model, we should move it down to proof formats. I don't think anything related to signatures belongs there..  

**Michael Prorock:** Big +1 to what Kristina said, building on that, we have a good model if we accept this PR, core data model defines what a credential is, and how different specifications might process that... what's expected, in VC-JWT there is a clean way of specifying media types, what to expect when, JWS, or something COSE related, since we have a nice data integrity spec, perhaps we should put media types w/ proofs in a credential, people know how to deal with that information..

**Manu Sporny:** To address Kristina's concern. We have a concept here -- and JWTs deal with it differently. With Data Integrity proofs, you can have documents that nest other documents and each can nest proofs at every layer..  
… We have examples like learner records where that's a reality. Talking about it like "are we going to allow it or not" isn't the right framing because it's already a reality today. It doesn't matter if this group says that structure is illegal, people already find it useful and do it..  
… They don't have to base64 at each level and things of that nature..  
… We do need to get to the bottom of that and making stuff like that illegal would be a much bigger issue than just this PR..  
… The other thing we should consider is that people might use a VP proof and then put a JWT on top of that. I know some people don't want to see that happen, but others might. Given the way things are going in the ecosystem it's probably inevitable that we'll see things like that..  

> *Kerri Lemoie:* Learner record spec from 1EdTech doing the embedded VCs that Manu described: [http://www.imsglobal.org/spec/clr/v2p0/](http://www.imsglobal.org/spec/clr/v2p0/).

**Manu Sporny:** Saying `proof` doesn't belong in the core data model and we should put it in Data Integrity, etc. then we shouldn't be making it illegal to include a `proof` either. That would be a weird layering violation..  
… I think this is us thinking that we have the ability to use a media type to enforce something that people will probably ignore if we write the wrong thing here. I think if we say that the `application/credential+ld+json` must not have any securing mechanism in it, people will ignore that, the use cases are valid..  

**Dave Longley:** big +1 to what manu said... if we moved proof into data integrity, it would further undercut case for restricting `credential+ld+json` in this PR, you wouldn't have anything to point to to do it. We should embrace the subclass concept. I'm tagging media type that's specific... another thing to have a less restrictive media type. To provide an analogy -- you can have applications that have rectangles, application accepts it... squares are a more specific type of rectangles... you should be able to use your rectangle library on a square. That's ok, that's what subclass mechanism gives us..  
… We have an extensible data model, people will want to know why we added prohibitive statements about use cases they want to do in the future..  

**Kristina Yasuda:** To clarify -- not questioning legitimacy of use case where there are nested data integrity proofs -- what I'm not understanding is credential that is conceptually not supposed to be signed, including a proof property? That's what clearly separates credential from verifiable credential. Let's not completely remove proof from data model, remove it from section 4 to section 6..  

> *Michael Prorock:* +1 Kristina.

**Kristina Yasuda:** Imagine a JSON structure that includes proof property... and that is signed by JWS... if that enters JWS processor, that doesn't understand proof claim, it'll ignore it. In which case, signature is entirely being ignored, which I'm concerned about. Is there a way to resolve that? Happy to hear solutions..  

**Michael Prorock:** No one is saying these are not valid use cases, we want a clear and valid media type.  
… Wanting a media type that doesn't have an embedded proof in it, that's a valid use case as well..  

**David Waite:** In the spec we talk about embedded proofs and external proofs, way to state the same thing... embedded proof is a way to extract proof and recanonicalize to create an external proof over the document. It comes down to giving recommendations --- if one proof is chaining, pointing into another, you cannot express outer proof w/o inner one, but you can strip off outer proof, so when people embed a data integrity protected VC inside a JWT, they need to understand that they're requiring twice as much security processing logic... that may affect full stack decisions, or they could just discard the JWT and send credential and data integrity around and they need to decide if it's appropriate or not. If we do have it, we should have a SHOULD NOT with guidance..  

**Dave Longley:** There are going to be many applications that can accept a credential whether or not it has a proof attached to it, important that base media type supports that... if there are other applications that want to have a media type that specifically says "this property is not allowed in this media type" - I think we can do that, but I recommend against it, I don't think it's a good idea. I don't think we should call that out on the base media type. Maybe have base media type to be superclass of other things, someone could create a media type for their other applications, can't have specific property..  
… I don't think anyone would want to create 10 different media types for data they don't want their applications to accept, media type isn't the right tool for that..  

> *Paul Dietrich:* +1 dlongley.

**Dave Longley:** "What if this verifier receives something where a signature has been stripped?" -- verifiers need to know what to expect from a holder. They will know what proofs they need to look for, they need to know which issuers to trust, how many signatures to expect, etc... we should remember that we're defining a base data model here, there are things that people don't necessarily process in a credential... base media type that's a super class allows that to happen, I don't think there's a problem there..  

> *Kristina Yasuda:* interesting - i though in the open world model, any proof type can enter verifier's system.

**Kristina Yasuda:** yes, but what they accept is up to them.  

**Manu Sporny:** I think we need to look at the PR. The PR is specifically talking about the `application/credential+ld+json` and saying that it can't have `proof` in it..  
… Mike, I think you're talking about something else, a media type for a verifiable credential and at this moment in time I agree with you. I definitely agree with JWTs there because it's a base64-encoded dotted string, not JSON..  
… That's not true of the Data Integrity secured VCs though..  

> *Kristina Yasuda:* `@dlongley` if verifier only supports JWS it will not know it accepted DI proof signed as JWS, so they can't even make a decision whether to accept or not.

**Manu Sporny:** So I think the thing you mentioned is a different conversation and that I agree with you more over there, than on this PR. This PR says, we're going to single out this one property and makes it illegal..  
… David Waite's SHOULD NOT makes it a little closer, maybe we can do that, but lots people in the ecosystem might just ignore it. I think a lot of people will want to back into what Dave Longley is talking about and that the verifier is going to know what it's expecting..  
… Otherwise you're allowing the attacker to choose the attack on your system. You can't trust the media type that the attacker is sending to you. You can't trust that the attack is peeling off a proof, etc. You have to know what you accept..  
… You can't trust the incoming media type, the attacker gets to choose it, you can't trust that the thing has the right number of signatures on it, because you can't trust that as well. This goes back to David Waite's comment that the verifier gets to decide what the valid thing is..  

> *Ted Thibodeau Jr.:* +1 manu.

**Manu Sporny:** I think we're trying to use media types to signal things that we shouldn't rely on, it gives power to the attacker..  

> *Dave Longley:* +1 manu.

**Michael Prorock:** I don't think anyone is disagreeing on the multiple layers on security checks, not trusting inputs, I would hope all of us in this group are familiar with those concepts..  

> *Dave Longley:* kristina: if the verifier supports JWS then if the JWS proof verifies, they are happy, they don't have to care about the DI proof..

> *Kristina Yasuda:* dlongley: i don't agree.. not validating proof/signature is one of the biggest attack vectors (ignoring == not validating here). security analysis needed to say "they don't need to care".   Proof by the issuer has a very important meaning in VC ecosystem - verifier ignoring it undermines trust model of three party model.

> *Dave Longley:* kristina: that's the two-party model :) ... verifier needs to know what they accept and what they don't.

> *Kristina Yasuda:* dlongley: nope, not two party model :).

**Michael Prorock:** What I'm concerned about is saying that something should not have a proof in any way shape or form, perhaps from a consensus standpoint we end up in SHOULD NOT. If we want to think about a variety of things, no one here wants a proliferation of media types for every options, No one is asking for a proliferation of business rules defined in the spec. If it is implicitly confusing that receives a proof in it, or embedded in a VC-JWT, what proof type comes first. If we don't have a clear way of saying: "Don't do this, you're going to confuse the user"... it's highly concerning to me. If we leave it up to verifier, certain issuers are going to assume one type of security model might be required w/o clean mechanism to know that they're doing that. Let's try to get explicitly clear about what a credential is before it becomes a VC and then be very clear about that as well..  

**Tobias Looker:** I'm still catching up on this issue, so might have perspective that's invalid -- my interpretation of text in PR doesn't insinuate that it makes embedded proofs illegal, media type doesn't establish any semantics around inclusion of property of what it means. If I sent application/json, and data is customer record, that is at a different layer semantically. Embedded proof might have something secured, media type isn't going to communicate presence or processing logic to do anything w/ that..  

> *Michael Prorock:* +1 tplooker.

> *Dave Longley:* +1 i think i agree with tplooker too, but also that it doesn't support the prohibition statement.

**Ted Thibodeau Jr.:** Media types don't do these things... media types don't say "in this structure of file you can only have X field name". Media types give you the structure of the file so you can deal w/ it's contents. If you feed a .zip archive to Excel, it's going to choke because it doesn't know how to deal w/ that content..  

> *Dave Longley:* +1 to TallTed.

**Ted Thibodeau Jr.:** Vice versa, unzip cannot do anything for you with the contents of an excel file... it's not the structure of the document it works on, the structure is the thing that matters here. Subtypes in the mediatype universe are limited not in what fields they can have and the contents of what they could be... bigger type might allow larger number of rearrangements, smaller more focused might allow less..  

> *Dave Longley:* +1 to TallTed.

**Ted Thibodeau Jr.:** Media types don't care about proofs, or business logic, or anything like that. Trying to make them do that job, we're going to break all sorts of security models. It don't work that way..  

> *Dave Longley:* +1 to TallTed.

**Ted Thibodeau Jr.:** I've said in a number of times, a number of places, people don't seem to understand how media types work, if you don't understand how this stuff works, and we try to spec with it, we're going to break something..  

**Tobias Looker:** Further the point that I'm making, don't think media type should rule out in an extensible data model technology whether or not the member of an element should /shouldn't make something illegal. I don't think media type should reach into the data representation technology and says "this should never exist". I think that messes w/ data extensibility model in JSON..  

> *Dave Longley:* +1 to tplooker and TallTed, media type is the wrong tool for this.

**Tobias Looker:** The media type doesn't convey that, media type doesn't tell you anything about what the media type tells you that... it could just be a string w/ some other meaning attached to it. That's all I take the language to mean in this PR. It doesn't communicate anything about the presence of an embedded proof or not..  

**Manu Sporny:** +1 to tplooker, Tallted..  

**David Waite:** One of the ongoing concerns, we're trying to define an extensible data model to use it in ways that we haven't imagined... even extension points we have, like `termsOfUse`, if there are extensions that you don't understand, what are you supposed to do as a holder or verifier when you see those?.  
… In Holder Binding, one of the big concerns is if I have an outer proof of VC-JWT, and I have an inner data integrity proof of the same object/document, what does that mean, what does it imply in terms of issuer instructions of understanding that?.  
… To manu's point, you have to define what sort of verification is expected that issuer expects you to do for verifier to trust that information hasn't been modified. So chained proofs, if that's there, with external proofs and chained proofs, we really need to define behaviour of all of those extension points so people know how to act even if they don't understand what that extension is..  

> *Ted Thibodeau Jr.:* can't force that business rule on the verifier.

**Michael Prorock:** Is there an approach that might work? If media type is used, embedded proof must be ignored by processor by verifier? This is a reasonably complex thing we're trying to say..  

**Kristina Yasuda:** I think we double clicked on statements meant by tobias and tallted -- JWT registered `application/jwt` -- in header, but you can also use `application/jwt` in HTTP response to indicate that's the thing being returned... I thought we dug into that at F2F? That seems to be misaligned as well..  
… maybe we can discuss thing from Mike Prorock.  

> *Dave Longley:* -1 to telling verifiers that the *have* to ignore a proof.

**Brent Zundel:** Jump on PR and try to refine some language..  

> *Dave Longley:* dlongley: that's more violation of the three party model, IMO.

**Brent Zundel:** See everyone on the call tomorrow..  

---
