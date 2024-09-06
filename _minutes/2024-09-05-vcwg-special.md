---
layout: minutes
date: 2024-09-05
title: Verifiable Credentials Working Group Special Topic Call on issue 272 — 2024-09-05
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-09-05-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on issue 272 — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on issue 272",
        "dateCreated": "2024-09-05",
        "irc": "vcwg-special",
        "datePublished": "2024-09-06",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on issue 272",
            "startDate": "2024-09-05",
            "endDate": "2024-09-05",
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
                            "name": "Benjamin Young"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "anilj"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "GregBernstein"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "David Ezell"
                },
                {
                    "@type": "Person",
                    "name": "Greg Bernstein"
                },
                {
                    "@type": "Person",
                    "name": "Kevin Dean"
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on issue 272 — Minutes
{: .no_toc}



**Date:** 2024-09-05

See also the [Agenda](https://www.w3.org/events/meetings/3c87d835-a876-4e1a-b850-262cef2f4f75/) and the [IRC Log](https://www.w3.org/2024/09/05-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** anilj, Benjamin Young, Michael Jones, Brent Zundel, GregBernstein, Dave Longley, David Ezell, Greg Bernstein, Kevin Dean, Hiroyuki Sano, Joe Andrieu

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Manu Sporny, Benjamin Young

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. Multiple significant security vulnerabilities in the design of data integrity  (issue vc-data-integrity#272)
{: #section1}

_See github issue [vc-data-integrity#272](https://github.com/w3c/vc-data-integrity/issues/272)._

<!-- issue w3c/vc-data-integrity/272 -->



**Brent Zundel:** Welcome everyone to the special topic call - topic today is Data Integrity issue 272.  
… Concerns about security vulnerabilities in design of data integrity, well discussed issue, lots of good proposals and solutions, to my understanding, everything was agreed on (adjustments to vocabulary, enhancements to context validation, clarifying data model, lots of changes made as response to this issue).  
… There is a particular ask that will likely be the primary topic of conversation today, but turning over to Tobias to present the issue. Tobias, the time is yours to present and then we'll go to discussion.  

**Tobias Looker:** Thanks for holding the special topic call. I won't spend too much time going back through the issue... 144 comments, I think we're all well versed into conversation that has gone in attempt to resolve the issue.  
… To summarize, from my point of view, there has been a lot of conversation and proposals raised, the biggest one that remains to ensure this cannot occur, is around integrity protection around `@context` issues. I've tried to highlight that I do believe that alone is the most important proposal to discuss in more detail.  
… Even with adjustments to `@vocab`, and non-normative guidance, leaving the context values open to manipulation is still a significant issue in my opinion. While I appreciate text around relatedResource feature, I'm not convinced it goes large enough. It's largely an optional feature. I could not see test coverage for that feature. I guess I'm wary of the likelihood that implementations would support such an optional feature. Protection wouldn't exist in most implementations.  
… I think we should go stronger, require protection of `@context` values. I know there were discussions around trade-offs, or doing context transformations. I don't want to limit context transformations. I debate whether or not they're useful in data signing and verification. I think it's useful AFTER things have been verified.  
… Verification should be done on data used by issuer.  

**Brent Zundel:** I'm happy to presume that everyone is up to speed on this discussion.  
… The proposal on the table is to strengthen the protection on `@context` in Data Integrity, let's have a discussion.  

> *Dmitri Zagidulin:* I'm curious if `@tplooker` would be ok with changing the MAY to a SHOULD. or if MUST is required.

> *Benjamin Young:* > To extend integrity protection to a related resource, an issuer of a verifiable credential MAY include the relatedResource property:.

> *Benjamin Young:* [https://w3c.github.io/vc-data-model/#integrity-of-related-resources:~:text=To%20extend%20integrity%20protection%20to%20a%20related%20resource%2C%20an%20issuer%20of%20a%20verifiable%20credential%20MAY%20include%20the%20relatedResource%20property%3A](https://w3c.github.io/vc-data-model/#integrity-of-related-resources:~:text=To%20extend%20integrity%20protection%20to%20a%20related%20resource%2C%20an%20issuer%20of%20a%20verifiable%20credential%20MAY%20include%20the%20relatedResource%20property%3A).

> *Tobias Looker:* SHOULD is better but I believe MUST is required.

**Dave Longley:** I think SHOULD is strong enough, we have a number of use cases and things we've discussed on that issue. Reasons to allow different contexts to be used that are different from issuer wants to use. IWe've talked about design around flexibility on those cases. Individual uses on the spec in different areas, different verifiers, can profile the spec and require related resource to be used if it suits that ecosystem. At base layer of spec, we should have ability of other uses to work.  

**Brent Zundel:** An assertion was made by Tobias that, specifically, the set of use cases that would require additional context switching would still be possible and should be done after issuer context as provided has been part of verification process. Can you talk about those lines?  
… What use cases would be prohibited on that model. What would be drawbacks of requiring that verifier checks before doing context manipulation.  

**Dave Longley:** This doesn't actually solve the problem, the recipient has to understand what context is, even if it is from a context that is trusted, terms definitions, doesn't fundamentally solve the problem.  
… There are use cases where selective disclosure, omit context issuers use -- where a verifier might accept international license, but license might have issued by different countries and you just want to selectively disclose only international properties and international contexts.  
… Take a VC and express as CBOR-LD and transmit to a verifier that can accept it, doing that might require context from issuer used. You should not have to go back to issuer to ask for their permission to request format for same information. Key to data integrity design, where holders can be independent in what they do. They don't have to keep going back to issuer to request different formats. None of those things should be happening. Privacy and liberty considerations. Fundamentally, you can't do all of those thing is if you're forced to use issuer-provided context.  

**Tobias Looker:** What I was trying to say is -- from a selective disclosure perspective, it still works, but some of the context values don't expand to terms. I don't think SD is prohibited. The same with CBOR-LD. One of the overarching points is issuers fundamentally comfortable w/ data transformations after data is signed that might misconstrue or mis-convey information that was originally signed. Most document issuers of major credentials don't want that level of manipulation to occur. They don't want holders to manipulate credentials to misconstrue credential, come to rely on information. It's issuers reputation on the line at end of day, just like w/ physical documents today, we don't let holders allow changes. It's issuers reputation on the line, they should have a say on how much document can be modified after issuance. Leaving document to be manipulated leads to issues. Tradeoff is difficult for issuers to be able to adopt the technology if it is allowed to persist.  

**Dave Longley:** That we're having a philosophical debate on extend of three party model and who gets to have control indicates that this is what profiles are for. Spec has flexibility, that is good, I don't think we should be too prescriptive. We should allow separate ecosytems, let the ecosystems have the choices they'd like to make.  

**Anil John:** Speaking on behalf of a high value credential issuer, resonate with some of the things Tobias noted, issuers have a perspective on credentials that we issue. I also think that there has to be a balance. We as an issuer are interested in providing ability to verify information that we provide and also allow credentials to be used via CBOR-LD, rendering mechanisms, and the like. We as an issuer won't be silent on it, spec as it is written, if we feel strongly about certain aspects of it, we can profile the standard itself to make sure other credentials we issue follow a path that conforms to our belief.  
… The question I ask in general, if we as an issuer wanted to mandate the requirement of using the feature in order to sign the context itself, that's simply a matter of us articulating that in our profile, are we prohibited form doing that?  

> *Dave Longley:* +1 you can say you must use related resource.

**Brent Zundel:** Short answer is no, you're not prohibited from doing that.  

**Tobias Looker:** That is a good point, the text today is optional.  
… even if you do that, relying parties can ignore it.  

> *Dmitri Zagidulin:* I thought the `relatedResources` mechanism was required, not optional?

> *Dmitri Zagidulin:* @bigbluehat - in the sense that, IF the `relatedResources` property is present, THEN it must be validated.

> *Dmitri Zagidulin:* (and if that's not the case, my proposal is to constraint `relatedResources` that way.

**Tobias Looker:** If I'm an issuer, and VCs today under this assumption, these `@context` values are left not integrity protected, I have to trust that relying parties trust document loader, how they've held context in storage, how they've allowed those not to be manipulated, if any of that fails, if this is not mandatory, all bets are off. That is what is difficult to square here. Document issuers are going to look at that, and huge amount of new trust in RP implementations that my documents are being verified suitably.  

**Manu Sporny:** to respond to one comment.  
… the comment about things can be ignored.  
… the spec today can be profiled and be made more strict--that is true.  
… you can in a profile state those things as MUSTs written into a profile.  
… I'm pushing back on the notion that it's optional and people can ignore it.  
… people always need to trust the issuer and the verifier.  
… in this model there's a certain amount of trust in the verifier that they will do a good job.  
… and the verifier has an obligation to do the correct amount of verification to get the result they require.  
… not doing that, means the verifier is to blame for any fraud.  
… they are required by the market to follow the expectations of the issuer.  
… it's not purely the issuer's reputation at stake.  
… the issuer can point to the verifier and show where the verifier failed--just as they do today.  
… if you accept a fake Driver's License, that's on you.  
… the issue here is that we provide mechanisms that can content integrity protect the issuer if the issuer really strongly requires that.  
… any vertical can profile it to mandate that.  
… we already have profile examples that are similar.  
… if a verifier chooses to ignore that profile, there are plenty of negative results.  
… we don't have to mandate it at the VCDM layer.  
… but can in a profile.  

> *Tobias Looker:* +1 brent that was the point I was trying to make.

> *Tobias Looker:* Sorry dmitriz :).

**Dmitri Zagidulin:** The conversation on the call so far, Anil mentioned that while requiring context verification might be too far, he'd like to see ability for issuer to say "verifiers MUST do this". At the moment, relatedResource - we don't have normative language if related resource is present, they must be enforced, if they fail, the VC verification fails. Adding the normative language, making relatedResource normative and ensuring issuers enforce context integrity.  

**Brent Zundel:** I got on the queue to suggest something along similar lines. We have two conformance classes, conforming producer and conforming consumer. If I'm understanding use cases property, we do not want to prohibit the producer to do things that require context integrity protection, what if we do what Dmitri just said -- it is a MAY to include context integrity protection using `relatedResoruce`, but if that is used to protect context. Conforming consumer must validate that context integrity protection. Is that crazy? Does that work?  

**Anil John:** I am curious to hear answer to your question. I wanted to correct one thing that Dmitri said -- verification and issuance side, my point is that I, as an issuer, can control my issuance infrastructure. Profiling allows me to say whether or not to use `relatedResource` to sign context information or not. If I'm acting as a verifier, this is where I live in the real world, at end of the road, just because I'm issuing a high-value credential, significant realtime identity verification and usage, doesn't mean that credential isn't being used as a flash pass.  

> *Dave Longley:* +1 to anil ... issuers do not control what verifiers do ... so we need to avoid an illusion of control here.

**Anil John:** Ultimately, verifiers don't have to follow our guidance. They might have a different risk tolerance. We issue multifactor smartcards, 2nd factor pins, but there are many cases where people look at photo and verify as valid.  
… The belief that I, as an issuer suffers when a verifier doesn't do a proper verification, is false. We point the finger at the verifier as the problem.  
… There is no guarantee that someone will follow our guidance other than us. I'd like to hear reaction to brent's proposal.  

> *Benjamin Young:* +1 to aniltj's framing.

> *Dave Longley:* -1 the effective is not the same at all.

**Michael Jones:** What puzzles me is that we're talking about this as if it's a garden variety optional feature that people can do it or not, given that it's a security feature, and it will be abused ... should we even give people that option.  
… Given it's a security feature, we should say it's mandatory on both sides and if you don't do it, you fail the conformance tests.  

**Tobias Looker:** A similar point, we have to see that this is not an integrity protected portion of the VC, at best, not like unprotected headers, effects entire part of processing of VC. It effects everything that's not integrity protected.  
… reputation issue to verifiers, do agree with Manu -- more plausible deniability you create for verifier "that's not clear, that's not optional, guidance wasn't clear" the industry around fake DLs is evidence of that, document security features of DLs are too difficult to verify. RPs get away with poorly validating those documents because it wasn't reasonable, too hard to do. That's what I fear we're doing here, opening up issues that create issues w/ ... maybe reputational damage doesn't happen at issuer, undermines system as a whole.  
… I did want to come back to brent's point, that would at least be an improvement on the text today. If there was a way to require that relatedResources context entries are used are integrity protected must be checked/verified by RPs downstream, that signal would be useful.  
… You will have RP that doesn't support feature and they will simply ignore. Unless we have normative text that says you should fail verification that you don't support validating related resources in credential, then you have a downgrade attack.  

**Dave Longley:** I largely don't agree with the analogy, a lot of this is coming from , we're talking about even if you do it and don't understand form and terms, your application is invalid. It fundamentally does not matter, if you receive a context you don't understand, you need to reject.  

> *Dmitri Zagidulin:* understanding the context and verifying its integrity are completely separate though.

> *Tobias Looker:* +1 dmitriz.

**Dave Longley:** All of that being said, I don't think I'd have a problem saying that if `relatedResoruce` appears and context is expressed in that valid that is need to be checked. I will note that will eliminate use cases where issuers don't want to force a check like that, I don't know of many that will have that requirement. If context URL, you check that value.  

**Brent Zundel:** Seems like proposal on the table is that it will not be required, MAY or SHOULD, some issuer MAY use context integrity protection, however, if that has been done, verifier MUST fail verification if that fails.  

**Manu Sporny:** I'm trying to think through that as applied to selective disclosure and the BBS use cases--unlinkability.  
… for selective disclosure you would eliminate the ability to do the international drivers license vs. a local drivers license.  
… if it's a MAY, then perhaps we avoid that problem.  
… we would need matching language that if you do that you must make the disclosure of the related resources--at least the context files (as there could resources).

> *Tobias Looker:* I don't think you would, the context would just be transmitted to the verifier and un-used in the JSON-LD expansion.

> *Dmitri Zagidulin:* that complexity is the domain of the Selective Disclosure spec.

**Manu Sporny:** there's a great deal of new complications if we do this.  
… and I still don't think an attack has been demonstrated for this situation.  
… things like RDF canonicalization do protect the terms.  
… if you get any context in that you don't understand, you're supposed to stop processing.  
… so we're left with only contexts that one knows about.  
… so I don't know of any attacks that are left at that piont.  

> *Dmitri Zagidulin:* "dont know what the context is" is way ambiguous phrasing.  
> *Dmitri Zagidulin:* verifiers can know what the context is, but still use the wrong digest context.
>  
> *Dave Longley:* dmitriz: signature won't verify.  
> *Dave Longley:* dmitriz: that's a separate issue.  

**Manu Sporny:** JOSE/COSE doesn't provide those protections.  
… so I don't think it's necessary.  
… it has not been demonstrated that this is a workable attack based on the text as written today.  
… I think profiling this is sufficient.  
… even adding a "verifiers must..." text doesn't change anything.  
… based on the text in the spec today, there has yet to be a proven attack based on this request.  
… but I could hold my nose.  
… but frankly that's going to happen in production anyway.  

> *Dave Longley:* fundamentally: you cannot read the properties of a context that you don't understand, you must reject or transform to a context you do understand, before using the properties.  
> *Dave Longley:* so resource integrity is irrelevant.

> *Dmitri Zagidulin:* to me, the issue with `relatedResources` is now unrelated to `@context` integrity. Instead, it's a spec clarity issue. The whole point of adding a 'relatedResource' is that the contents MUST be verified.

**Brent Zundel:** I'm all for requiring people to do stuff.  

> *Dmitri Zagidulin:* @dlongley - "understand"ing a context is at worst a meaningless term, and at best is overloaded.

**Manu Sporny:** yeah...funny, but that's not what I was saying.  

> *Dave Longley:* dmitriz: agreed, it's hard to get clear language.

**Michael Jones:** I will object to the proposal because it fails to secure the context, if you don't secure it, context substitution doesn't occur, it needs to be compulsory on both sides. Knowing contexts, doesn't prevent attack, it can happen w/ other contexts that you can accept.  

> *Dave Longley:* -1 to mike jones, that's inaccurate, and a misunderstanding of data integrity.

**Manu Sporny:** That's not how it works selfissued.  

> *Dave Longley:* +1 to JoeAndrieu.

**Joe Andrieu:** I agree with Manu, I dont' think a successful attack has been proven. I'm not understanding where this attack shows up.  

> *Benjamin Young:* +1 to JoeAndrieu.

**Joe Andrieu:** I think we're also conflating verification and validation.  

> *Dave Longley:* +1 to JoeAndrieu.

**Joe Andrieu:** People are talking about securing context, and string and context is secured. Historical notion might be what is being confused, context that is returned as a resource should be different, but should be different any time... context doesn't have hash to do it, trying to cobble one after the fact might be useful, but doesn't have credibility for verification.  

**Dmitri Zagidulin:** At this point, the `relatedResource` language issue is unrelated to context integrity, now it's a clarity of the spec issue. The whole point is if issuer puts it there, validation has to fail if checks don't apply. If that's not clear from spec, we need to fix spec language. If we do, we gain spec backed ability to mandate signature be checked.  

> *Dmitri Zagidulin:* @bigbluehat - digest validation does not *require* fetching. you can cache as usual.

> *Dave Longley:* -1 the signature will fail.

**Tobias Looker:** I'll try and reply a practical attack when you follow all the guidance, malicious party, RP validates a government identity credential and I know schema and ontology, corrupt RP in some way to manipulate credential presentations. Problem is known context values are not issuer specific, implementations have one document load, contexts I trust, not related to issuers, so if I can get a context value trusted for a different VC that somehow changes or substitutes ontology I can use trusted context to.  

**Manu Sporny:** -1 nope, signature will fail.  

> *Dave Longley:* -1 not true, the signature will fail.

> *Joe Andrieu:* -1 the context property is secured.

> *Dmitri Zagidulin:* @tplooker - what does "trusted" mean here? And yes, signature will fail.

**Tobias Looker:** These could be conflicting, general purpose bucket of context values, as RP, if I know what context values you trust, I might be able to manipulate those in a way that allows me to do the attack.  

**Manu Sporny:** tplooker that is not how a secure implementation is going to work.  
… you should never do what you described.  
… one typically validates the incoming JSON with JSON Schema or similar.  
… we've also discussed use case specific verifiers.  
… so the attack you're describing just doesn't happen.  
… you check an inbound schema for the JSON.  
… so the attack you just highlighted does not happen in a good implementation.  
… responding to dmitriz the relatedResource feature was never meant to be a verification component.  
… you only verify the ones for your use case.  
… let's say you listed every single image related to your credential.  
… but the verifier only wants one of those.  
… if the spec required every relatedResource to be verified, then you broke that use case.  
… so big -1 to making relatedResource enforced in that way.  
… that was not the intention of that term.  
… and there would be big minus ones for that position.  
… it's a question of layering.  

> *Dmitri Zagidulin:* manu -1 to that interpretation. there's no flag that an issuer can set, in the `relatedResource` image, to mark which ones are required.  
> *Dmitri Zagidulin:* manu would you be open to adding a 'required' flag, to each `relatedResource` object?

> *Dave Longley:* short on time, I will just type: to respond to tobias's example, the signature would fail in that case, you can't do that attack (where you use some other trusted context to confuse the verifier) ... and it further highlights point that the verifier needs to understand the contexts it is using to read documents.

> *Tobias Looker:* Just to replay what I was trying to say, context values are shared across all credentials an RP verify's, generally that means if I have conflicting context values that redefine terms in different ways across issuers I can perform context manipulation within the bounds of the trust context values of an RP to maliciously modify a credential.

**Joe Andrieu:** At any point we have to dereference, we're creating a security concern... relatedResources, don't dereference if you need to... we can't mandate it.  

> *Dave Longley:* to just say -- it's fine to dereference a context -- so long as you're transforming to one that you don't have to dereference before you read the document :).

> *Tobias Looker:* I mean I agree with JoeAndrieu but `@context` values are HTTPS URLS so lets be practical people can and will dereference these.

> *Anil John:* I believe that I can get what I need out of this by profiling the current text.

**Dmitri Zagidulin:** At the moment we don't have capability to fulfill Anil's requirement, issuer flag what resources must be secured. My proposal is true/false to related resource for signal from issuer.  

> *Dave Longley:* tobias, please see my point ^ you do transformation in that case.

> *Joe Andrieu:* tplooker yes, that should give a good response for a human. but verifiers should not do so in production.

**Brent Zundel:** Thank you, this was a great conversation, appreciate the civility, consideration of different viewpoints. This conversation will go into the issue. We continue to explore the possibilities that are on the table. Hpefully we can move this forward in a way that is amenable to folks and find some consensus.  
… Thanks to all for the special topic call, we'll chat next week.  

---
