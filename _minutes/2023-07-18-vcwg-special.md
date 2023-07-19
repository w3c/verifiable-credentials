---
layout: minutes
date: 2023-07-18
title: Verifiable Credentials Working Group Special Topic Call on Reviewing PRs — 2023-07-18
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-07-18-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Reviewing PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Reviewing PRs",
        "dateCreated": "2023-07-18",
        "irc": "vcwg-special",
        "datePublished": "2023-07-19",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Reviewing PRs",
            "startDate": "2023-07-18",
            "endDate": "2023-07-18",
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
                            "name": "Michael Prorock"
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
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Reviewing PRs — Minutes
{: .no_toc}



**Date:** 2023-07-18

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20230718T180000/) and the [IRC Log](https://www.w3.org/2023/07/18-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Michael Jones, Ted Thibodeau Jr., Michael Prorock, Dave Longley, Brent Zundel, Shigeya Suzuki, Hiroyuki Sano, Manu Sporny, Joe Andrieu, Orie Steele, Gabe Cohen, Dmitri Zagidulin, Kaliya Young

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Michael Prorock, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Brent Zundel:** greets everyone with an introduction to the topic of the day, which is PR review.  
… status list, then data integrity, then data model - any others?  

### 1. PR-s.
{: #section1}

**Brent Zundel:** the goals are how do we unblock and move to consensus.  

#### 1.1. chore: update title and urls to contexts (pr vc-status-list-2021#69)
{: #section1-1}

_See github pull request [vc-status-list-2021#69](https://github.com/w3c/vc-status-list-2021/pull/69)._

<!-- issue w3c/vc-status-list-2021/69 -->



**Brent Zundel:** What is this PR trying to do, what are next steps?  

**Michael Prorock:** The goal here was to get stuff pointing at the v2 stuff for the most part, some items were still pointing at other items.  
… Because we now have status list available under v2 of VCs, do we need to explicitly call out things by year, for example StatusList2021Entry vs. StatusListEntry. I believe we saw call out for explicit version, a little indifferent, as long as you're pointing to v2, great, also totally fine in status list explicit property v2.0, goes along w/ v2.0 VCs, fine, open to thoughts here.  

> *Orie Steele:* +1 to not adding a "version prop".

**Dave Longley:** can live without a version in type names - would prefer versioning other than via properties - does not think that the version is sufficient in cases of future context changes.  
… years makes sense for things that have a shelf life, less sense in things that don't, perhaps we use a differentiating feature or otherwise in the type name to differentiate.  

**Manu Sporny:** not broadly implemented and deployed yet, so we have some flexibility.  
… uncomfortable removing versioning especially with breaking changes. -1 to not having some version specifically for this reason.  
… options include specific naming of status list such as 'BitStringStatusList' or something very specific, or include a version on the type, context v2 is not enough to determine type.  
… very uneasy with taking all versioning off of this.  
… have gotten feedback from one implementer that they don't want to continue to use 2021 for current version.  
… title of the spec changing to 2.0 when there wasn't a version 2.0 seems odd.  

> *Orie Steele:* feels like using `@type` for versioning is the same thing as "sniffing json members" for version info...  
> *Dave Longley:* Orie: the type of a thing largely defines what something is -- so i think if we're going to change what a thing is (different properties, features, core meaning, so on), it makes sense to signal that through type.  
> *Orie Steele:* Yeah, makes me wonder why [https://schema.org/Organization](https://schema.org/Organization) is not [https://schema.org/Organization2023](https://schema.org/Organization2023).  
> *Dave Longley:* Orie: i wouldn't expect Organization to have significant breaking changes over time, only additive.  
> and Organization is very generic ... so matches its name... "StatusList" is a pretty specific BitString-related status list thing.  
> not a generic "StatusList".

**Michael Prorock:** I'm fine w/ a property based versioning approach, versioning in the name itself feels odd to me, because then you're switching on strings, never really a right answer. Totally fine w/ keeping some versioning, so what Manu and Dave are bringing up is fine... where is that done, in a property, name of type, somewhere else?  

**Ted Thibodeau Jr.:** versioning good, versioning with years not so good, versions in name of context file is problematic as it disappears once it resolves through the context, putting the version on the type means that we should build range and domain attribute lists for these types and then those attributes need to update with changes, putting versioning on attributes itself might be worthwhile if we are changing the def of an attr.  
… nothing is simple and when we see interdependencies that complexity around versioning gets more complex.  

> *Orie Steele:* +1 TallTed.. versioning is lost when context is applied... unless its on the type.... it implies heavier RDF work.  
> *Manu Sporny:* +1 to TallTed.

**Dave Longley:** what we see in the future will determine best path - statuslist is very generic - we could keep that, or we could get more specific around naming based on how this status list operates.  
… feel like we are running into trouble because the name we chose is so general.  
… if we are just adding backwards compat changes in the future then this is fine, but that might not be the case.  

**Michael Prorock:** I kinda like where Dave is going with this, I think he's on to something and that's already caused some open PRs over StatusList because the name is general. I'm totally fine if we settle on a name that is specific and reflective that doesn't have a name/etc. BitsStringstatusList might be a good way to do this, it's not perfect, but at least it narrows things down. fine with that as a path forward.  

> *Orie Steele:* Why didn't we version VerifiableCredential and VerifiablePresentation ?  
> *Dave Longley:* Orie: they are generic enough and you can add lots of things to them without issue.  
> So same argument as Organization... and as StatusList... now...  
> *Dave Longley:* Orie: yes, except this "bit string status list" thing we have isn't a generic "status list".  
> we could create a base StatusList type that has nothing on it ... and then extend that with a more specific type with more requirements... or just not bother with a base type like that here.

**Brent Zundel:** next step? proposed path forward of getting more specific with naming? any opposition?  

**Manu Sporny:** would feel differently if we were 5yrs in and things were very stable.  
… raising concerns since this is very fresh and new, would prefer a version in the type as the easiest path to prevent collisions between versions.  
… need a mechanism to identify expected properties, and then we expect only backwards compat changes.  
… better than nothing if we accept very specific naming.  

#### 1.2. Update controller document reference (pr vc-data-integrity#99)
{: #section1-2}

_See github pull request [vc-data-integrity#99](https://github.com/w3c/vc-data-integrity/pull/99)._

<!-- issue w3c/vc-data-integrity/99 -->



**Brent Zundel:** feel like we have a possible path forward.  
… Orie, please give an overview of the pr.  

**Orie Steele:** DI has some excellent stuff that is not specific to data integrity, notably controller descriptions especially of did docs.  
… *snark about did working group*.  
… the did working group did not define key representations or shapes.  
… as a result of that almost all did methods have undefined terms.  
… this PR addresses one of the predicates and recommends public key JWK as a path.  
… there is dispute over the best way of representing keys in json-ld.  
… the counter proposal appears to be do the same as did working group and don't specify.  

**Manu Sporny:** think that the group has been clear that we should not prefer one approach or format over another.  
… this PR prefers one key format over others, and feels inappropriate.  

> *Orie Steele:* key material can secure both proof formats.  
> *Dave Longley:* +1 there's no consensus to prefer one key material over the other ... people want different things.  
> *Orie Steele:* preferring key formats would help all securing mechanisms.  
> *Dave Longley:* +1 let's not spend time on that disagreement again.

**Manu Sporny:** the other issue is that the did wg did spend a lot of time trying to improve mistakes around publishing key material, and this pr removes some guidance that could permit an implementer to publish private key material.  

> *Orie Steele:* its easier to publish multikey material with mistakes... since multikey is not a defined key format...

**Manu Sporny:** we should have the ability to ensure that errors are thrown when errors or leakage is detected.  
… do agree that we should make things better, but don't think this pr makes things better.  
… and think it removes sec guidance.  

**Michael Prorock:** I think Manu's speaking to an important point, especially because we're talking about Data Integrity and this spec and security data in general, while I have approved this PR and think that this is a good path forward, I do agree that we should also explicitly call out items and not remove items that deal with accidents we know happen in the wild. Specifically, inclusion of 'd' in a public key, just grep Github.  
… There are things we should be careful about, we know people do bad things, we want to add back in some of these language that provides security guidance.  

**Brent Zundel:** is there a path forward for this PR and are there next steps?  

**Orie Steele:** agree with comments regarding avoiding preference - might consider applying those comments more generally.  
… for this PR is the sentence regarding encoding of JWK good enough, or should we carry over items from did wg.  
… if text comes in as "may" is that actually an improvement.  
… concerned regarding standardization path for other formats.  
… potentially this pr should have been raised in the core data model.  

**Manu Sporny:** we should be specific in security guidance. the text in red that is being removed is good text and stuff that should be said.  
… this pr is not specific enough about what private info accidentally is leaked.  
… the kid value items are important, and should be aligned with vc-jose-cose.  
… should take a look at fingerprinting and compound key identifiers.  
… agree that we should make this better, but deleting this stuff is not the way.  

> *Orie Steele:* Sometimes saying less, is "making things better".

**Manu Sporny:** disagreement is on whether or not this PR makes improvements.  
… and over preference between multibase and jwk.  
… ... but not in this case. :).  

**Michael Prorock:** There are shades of what turned out to be a painful PR, which was the context integrity related items that came up initially in the JOSE/COSE spec, initially. We said yes, big enough issue to open issue on vc data model side... this feels a bit like that to me, particularly when we're talking about most of this, ZKPs, basically we can refer to what we're doing w/ VCs as dealing with public key crypto... so if that's the case, we should pull top level guidance into security considerations ... take areas that are deleted, put them into core data model explicitly and PR on data integrity that points to that.  
… I have similar concerns around multibase, but to me, there are other things in this PR that do merit a bigger look... next steps, pull this stuff up to security guidance and reference it clearly in VC COSE JOSE and then we're setting model on how to do this stuff right, especially when we know there are issues, good thing to do.  
… While my preference is to rely on JWK, but rest of WG has to come to consensus on how to talk about that, fine for certain users and not ok for others.  

**Dave Longley:** general comment - if we have 3 diff approaches, we should give the best advice we can about each approach.  
… we should be as even handed as possible, and that doesn't mean that we will say the same number of things about each item.  

> *Orie Steele:* Our [did:key](did:key) implementation supports both key formats, [https://did.key.transmute.industries/](https://did.key.transmute.industries/) speaking as an implementer... I consider this a huge waste of time, now... given [did:jwk](did:jwk) is simpler and supports x509 extensions... I think recommending experimental stuff is generally a bad idea.  
> multikey does not even support expressing private keys for NIST curves.... thats how safe it is.  
> *Manu Sporny:* Orie, not true: [https://github.com/multiformats/multicodec/blob/master/table.csv#L171](https://github.com/multiformats/multicodec/blob/master/table.csv#L171).

**Manu Sporny:** support for good security guidance should stay in, should get better, and we should see if we can get it in the core spec.  
… that may be difficult, because then we are talking about securing methods in the core data model, but is worthwhile.  
… we should make sure that errors are thrown always when things like private key material is encountered when it shouldn't be.  

**Brent Zundel:** look forward to seeing where this goes and i will be looking for an issue on the main spec.  

#### 1.3. Add section on Ecosystem Compatibility. (pr vc-data-model#1203)
{: #section1-3}

_See github pull request [vc-data-model#1203](https://github.com/w3c/vc-data-model/pull/1203)._

<!-- issue w3c/vc-data-model/1203 -->



**Brent Zundel:** feel like this is a promising pr, manu, please give an overview.  

**Manu Sporny:** this PR is an attempt to apply the day 3 resolution and would get rid of 1100 and 1101.  
… this is a way of giving implementers a way to show that they are compatible with the VC ecosystem, with measurable items.  
… includes things like stating that "you have a way of converting to base data format in the spec, is it one way or bi-directional, preservation of context, etc".  
… tried to use language that makes that happen while avoid problematic areas.  
… doesn't mandate a test suite but says you should do that, similar with semantic best practices, etc.  
… CRs to date include talk about media types, possibly registered media types so there is some level of review, also requests to not downgrade refs.  
… good healthy discussion - not seeing crazy objections yet.  

**Brent Zundel:** sees current CRs as heading in positive direction.  

**Michael Prorock:** I know Manu you stated that you're not so hopeful, I am hopeful of the PR, like direction, only changes I'm requesting is be specific about registered media types and include references to that stuff and not downref. There is a bit of conflict, lots of cool stuff going on in ecosystem, not all of it is standardized, but what we're putting in a TR, we should be as tight as possible while trying to be as inclusive as possible. I think I only requested two words changed so far, while I would prefer not to see downrefs and examples, but that's not going to be blocker. Blocker for me is pointing to registered media types so we can be clear about what we're talking about.  

**Joe Andrieu:** apologies for being the wrench on this PR, but we created together something called verifiable credentials, and calling something else a VC creates a path where someone will end up calling things a VC that don't meet the bar of VCs and that this will not create an ecosystem as the term will become meaningless with broad use.  

> *Dave Longley:* +1 to what Joe is saying, but i think this PR says "compatible with the VC Ecosystem".  
> *Orie Steele:* [https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#section-2](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#section-2).  
> "An Issuer-signed Credential whose authenticity can be cryptographically verified. Can be of any format used in the Issuer-Holder-Verifier Model, including, but not limited to those defined in [VC_DATA] and [ISO.18013-5].".

**Brent Zundel:** would links to VC specs dir be a palatable step forward.  

**Manu Sporny:** don't see the change to registered media types as being a big change to make.  

> *Orie Steele:* hey at least a bar exists : ) thats better than did methods XD.

**Manu Sporny:** want people to know that it is a bit of a low bar.  
… talk about gordians and acdcs but i don't see that as a downref - downref does not come into play for non-normative.  

> *Dave Longley:* +1 to what Manu is saying about refs.

> *Michael Prorock:* +1 manu.

> *Brent Zundel:* +1 Manu.

**Manu Sporny:** hard to formally object to that, etc.  
… the way we talk about other specs is purely informative intentionally to avoid that.  
… fairly easy to point to refs, and we would do that in a non-normative way.  
… *funny quip about being able to sue anyone for anything*.  
… to address Joe concerns, the PR says that people can say that they are compat with the VC ecosystem.  
… but after transformation they must end up with VC per core data model.  
… tried very hard to make it clear that you must be able to convert to a vc and then you can say that the transformed thing is a VC.  
… and therefore you are compat.  

**Michael Prorock:** Manu, stated all that extremely well, this is difficult language to write as we've seen from multiple prior PRs dealing w/ same topic. I am thankful that you have noted point about downrefs, those examples are purely informative, I do have issue including things that might not gain traction... we should point to where are they specified... for registered media type, you have to point /somewhere/ while it's a low bar, at least it's a bar.  
… We also know because we've defined proper media types into what you've converted into, so notion, obviously if you convert into something you have into core data model, that IS a VC, pointing out compatibility. I'm happy to approve PR if those things go in.  

**Brent Zundel:** basically at time, two more on queue.  

> *Manu Sporny:* Ok, so I'm noting -- add references, registered media types -- can do.

**Orie Steele:** support adding registered media types.  
… think we should have refs from examples.  

> *Dave Longley:* and it's important that the transformation is to the appropriate base media type (not to "the data model" which is abstract).

**Orie Steele:** regarding digital credential formats and verifiable credentials - people are using those things interchangably today.  

> *Ted Thibodeau Jr.:* application/vc doesn't exist!

> *Orie Steele:* exactly.

**Orie Steele:** and we should be very careful to avoid the structured suffix conversation in this pr.  

> *Dave Longley:* -1 to call the untransformed thing a VC.

> *Dave Longley:* +1 to call the result of the conversion a VC.

> *Manu Sporny:* +1 to Joe.

**Manu Sporny:** request specific language that says that once it is converted it is a VC, but it may not or is not a VC before conversion.  

> *Orie Steele:* JWT is not a VC in that interpretation.

> *Brent Zundel:* pretty sure that's not the intention of the PR. I didn't see that, so I'm confident the language can be tweaked.

> *Orie Steele:* SD-JWT is also not a VC in that interpretation.

**Manu Sporny:** think these things are doable - add refs, add registered media types, and add clarification on what it is a VC.  

> *Orie Steele:* tranforming != securing.

> *Orie Steele:* but good luck.

> *Dave Longley:* Orie: JWT-secured VC may be acceptable language to people, i don't know.

**Brent Zundel:** remains confident.  
… loving collaboration because we are all awesome.  
… please review the other 12 prs on core data model.  
… hopefully see everyone tomorrow.  

> *Joe Andrieu:* SD-JWTs are JWTs.

**Brent Zundel:** everyone is awesome.  

> *Ted Thibodeau Jr.:* VC-bearing JWT. the VC is held within the JWT.

---
