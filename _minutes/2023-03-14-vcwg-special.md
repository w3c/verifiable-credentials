---
layout: minutes
date: 2023-03-14
title: Verifiable Credentials Working Group Special Topic Call on Open PRs — 2023-03-14
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-03-14-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Open PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Open PRs",
        "dateCreated": "2023-03-14",
        "irc": "vcwg-special",
        "datePublished": "2023-03-15",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Open PRs",
            "startDate": "2023-03-14",
            "endDate": "2023-03-14",
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
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Kerri Lemoie"
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
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Songpu Ai"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                }
            ]
        },
        "resolution": [
            {
                "@type": "Resolution",
                "resolution_number": 1,
                "resolution_text": "We will change `application/credential+ld+json` to `application/vc+ld+json` to use as the media type for verifiable credentials and add language to the spec that indicates the media type does not signal how the VC has been signed."
            }
        ]
    }

---

# Verifiable Credentials Working Group Special Topic Call on Open PRs — Minutes
{: .no_toc}



**Date:** 2023-03-14

See also the [Agenda](https://www.w3.org/events/meetings/9ff74350-6398-41c5-a5d3-11cd54558218/20230314T180000) and the [IRC Log](https://www.w3.org/2023/03/14-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Shigeya Suzuki, Kerri Lemoie, Dave Longley, Kristina Yasuda, Ted Thibodeau Jr., Gabe Cohen, Phillip Long, Michael Jones, David Lehn, Joe Andrieu, SongPu Ai

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Manu Sporny, Dave Longley

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Brent Zundel:** We are going to talk PRs today - wondering how we can also talk about VC specifications directory.  

**Brent Zundel:** Talking about wanting to expand the scope as it's initially been defined, want to hear feedback on that.  

### 1. Media types `vc+json+ld` vs. `credential+json+ld`.
{: #section1}

**Manu Sporny:** Could we tackle the PRs about media type first? And I ask because there are about five PRs we could potentially resolve if we get to a conclusion there and we are maybe close.  

**Ted Thibodeau Jr.:** I'm hesitant to go along with changing special topic on the special topic call — might have shown up if another topic is discussed.  

**Brent Zundel:** With those comments, let's stick w/ PRs.  

**Manu Sporny:** I'm wondering — So I've got a proposal for the group and wanting to see if we can get to consensus... seeking feedback on it.  
… We have been talking about ... we have decided that there will be one base media type for the VC data model. That's super good and useful.  
… Then, we started talking about ... that was `application/credential+ld+json` as the base media type, unsecured, our base media type. Then we have a number of media types around `application/vc+something` for secured things but there has been disagreement around the requirement of `proof` and we were trying to figure out how to do that through media types. We now have a section in the spec for the media types.  
… Then Orie raised a really good question — about how these two media types `application/credential+ld+json` and `application/vc+ld+json` ... people are arguing that `proof` is optional in both and we have two media types that describe the same thing. Skipping past a lot of the back and forth.  
… I wonder if we can make the base media type `application/vc+ld+json` and `proof` is optional in that. Then in the media types section we make internal/external proofs clear and so on.  
… The proposal would be for the base media type to be `application/vc+ld+json`, `proof` is optional, but we don't say that in the media type registration but in the spec. What do people think?  

**Ted Thibodeau Jr.:** Yes, in general theory, I'm with you.  
… The media type for a zip archive doesn't change whether it's password protected, or one or a hundred files, or anything, really. You deal with it as a zip archive.  

> *Dave Longley:* +1 to TallTed.

**Ted Thibodeau Jr.:** In our case, we are dealing with credentials which are verifiable, and the failure could be that proof is missing, or proof fails (you messed up the crypto), or something along those lines.  
… It's taken a while to reach that point as a group, we might be a step away where we out to be. That might just be ld+json. I want there to be an explicit difference between `vc+ld+json` and `ld+json`.  
… There has to be something that a ld+json loses when it doesn't process as `vc+ld+json`.  

**Kristina Yasuda:** I'm not with you yet, Manu. The proposal I think I made in previous call was well received — can we completely remove proof property from VC Data Model so only media type in main becomes credential+ld+json, so we don't talk about proof property. Then vc+jwt and data integrity can define their own media types vc+??? if needed, is that an option, is that on the table still?  

**Michael Jones:** I'm going to try to react to all three comments.  
… I agree with Manu that de-facto, the WG hasn't been able to, for JSON-LD data model, been able to make any distinctions between credential and verifiable credential in the media type.  
… The attempts to say that proof must not be present for `credential+ld+json` have not succeeded, and in order to make progress, I'm willing to see single VC data model be `application/vc+ld+json`.  
… To Ted's comment, I agree that there is and should be a meaningful distinction between `ld+json` and `vc+ld+json`, the difference is the required members of VC data model are present and are used in ways specified.  

**Manu Sporny:** Yes, MikeJ, exactly!.  

**Michael Jones:** I think we can agree to that.  
… I agree with you that proof property should be moved into securing spec, that's what defines its properties, I don't think that Kristina's comment blocks us from registering the media type, and from brent's earlier comments, if we can unblock the media type registrations, we'll be a good bit further forward today.  

> *Orie Steele:* +1 to compact form being a constraint.

**Dave Longley:** I got on queue to agree with MikeJ — the constraints are the data model — and compact form must be used. any one of those things establishes a specific new constraint, that's the difference.  
… with respect to Kristina's comment — if we move proof back into another spec, doesn't resolve particular matter at hand, proof being optional, we'd end up in that situation, those issues are orthogonal. That's a different question from what we're trying to resolve here. We want the base media type to be `application/vc+ld+json` as everyone else has spoken to.  

> *Phillip Long:* +1 that moving the proof to data integrity is a different question and not the one that we're talking about here.

**Orie Steele:** I agree with the comments from Manu and Mike Jones about `application/vc+ld+json` media type. I also am not sure that proof predicate should be removed from core data model context. I want to talk about what's in v1.1 spec, if we can't achieve consensus to change it, it's goin gto stay the same.  
… In v1.1, proof is a predicate that exists. There is no definition of Credential (in RDF sense), only Verifiable Credential. The proof types are the RDF classes that the securing formats tended to define. A proof type example would be `Ed25519Signature2018`. In v1.1 we shipped proof property in core context. In v2.0, we cleaned some stuff up and avoided having to talk about types. If we say base media type is `application/vc+ld+json`, we commit ourselves to have conversations about proof being in media type.  
… It would be good to get agreement on the base media type on what we see in v1.1, there is a higher chance of doing that with `application/vc+ld+json`, vs coming to consensus on what `application/credential+ld+json`.  

**Kristina Yasuda:** If you are talking about media type for v1.1, `vc+ld+json` might be ok, but to use that for v2.0, I'd be against that. To v2.0 is to separate payload from how it's being secured. Saying the base media type is "vc+" — what is the verifiable part of that payload if that's the base media type?  
… Does that mean now we'd only have one media type per signed credential that has to express both what is a payload and what is signed? To be more specific, one example I can think of, in SD-JWT, with current separation of `application/credential+ld+json` — use that as a payload, use SD-JWT to secure it.  
… when you're signing, apply digest as defined in SD-JWT and you're good to go. I don't know what that means when we say `application/vc+ld+json`.  

**Ted Thibodeau Jr.:** First, assuming we continue down this road, how are we going to convince IANA that there will not be a cascade of special definitions of `ABC/xyz+ld+json` each with their own set of members and usages? I don't have a concrete differentiator, we could say "you have to have these members in order to be a VC".  

> *Orie Steele:* partial answer to Ted's question, IANA expects registration for types that use registered suffixes. That is why we define structured suffixes.

**Ted Thibodeau Jr.:** Consider RFC822 messages and attachments, where media types came from, there is an envelope and a payload and metadata, these things are separate, signature on signed mail, on unsigned main no signature, not mentioned. these are things that didn't require new media types, media types for those things existed in other usages, those media types are applied in enclosures. we're using media types in a way that's not intended to be used, it'll bite us if it's not already doing so.  

> *Michael Jones:* My response to Ted will reference [https://www.rfc-editor.org/rfc/rfc8725.html#use-typ](https://www.rfc-editor.org/rfc/rfc8725.html#use-typ).

**Dave Longley:** I wanted to respond to Kristina, differentiating between credentials and verifiable crednetials — to a certain extend, we've made a number of things more complicated than before in ways we didn't get more value out of that complication. The difference might not come through an incompatible syntax. data integrity adds proof, which adds types to a proof property. that fits in w/ existing data model. That other syntaxes might have incompatible syntax, but when that happens, you need a new media type. I think all that's ok.  
… I think Mike's on the queue to respond to what Ted said, I'll end my comments there.  

> *Dave Longley:* i was also going to say . i don't think SD-JWT will have to change.

**Michael Jones:** I did want to respond to TallTed's comment... how are we going to convince IANA to say there's not going to be a multiplication of mediatypes `*+ld+json`, by analogy, there was an RFC written 8725 — JWT best practices, and one of the best practices listed was "Use an explicit media type for every type of JWT object" — explicit typing and that can prevent a confusion for one type of JWT for another. That's part of a more general move in security community.  

> *Orie Steele:* +1 selfissued.

**Michael Jones:** "Use explicit typing" to prevent confusion, not a bug that there might be a multiplication of JSON-LD subtypes, it's a feature, because it enables explicit typing. Using `vc+ld+json` is an example for explicit typing, that's a good thing.  

**Brent Zundel:** Initial round was prompted by a proposal, folks spoke up for certain aspects, resolve the media type aspects first then continue conversation where it needs to go.  
… How would we need to change that proposal to move forward?  

**Dave Longley:** This might be a slight tweak, keep proof where it is right now and figure out if we move it later.  

> *Orie Steele:* +1 dlongley.

**Kristina Yasuda:** I still haven't heard an answer.  
… How do we know if it's signed or not?  

**Orie Steele:** In case signing is used — proof is used, RDF says the type... if external is used, then proof isn't there or is ignored and external signing mechanism applies information necessary for signature. So, for JWT, alg secures content type for application/vc+ld+json — and if you look at that content type, youg et back JSON, verify signature in external proof case. If you see proof in data model, and you don't understand it, you ignore it.  

> *Dave Longley:* +1 to Orie.

**Orie Steele:** People might profile away proof property, but there are scenarios where they want it to be present and might want to tunnel secured data in proof. And add external proof format. Short answer is in case of external proof, you're going to verify the external proof and then you get payload... if payload contains internal proof, you might ignore it, or if you do understand it, you verify according to proof type.  

> *Dave Longley:* +1 to Orie.

> *Phillip Long:* =1.

> *Orie Steele:* For the record, I don't really care to "block" the "credential tunneling" feature.

> *Phillip Long:* +1.

**Kristina Yasuda:** Thanks Orie, that makes sense, I think. I'll be ok given that is clearly stated in VCDM. I don't know what concrete proposal language should be, someone could point me to that? I think what I heard was base media type says this is a signed credential using JSON-LD and how to determine how it's signed is specific to signing mechanism, which is fine.  
… Make sure that's loud and clear, you have to depend on checking mechanism.  

> *Orie Steele:* And the current "proof" section essentially says this already... it says "at least one, proof format"... [https://w3c.github.io/vc-data-model/#proofs-signatures](https://w3c.github.io/vc-data-model/#proofs-signatures).

> *Dave Longley:* +1 to kristina to provide clear guidance.

**Kristina Yasuda:** For VC-JWT, for example, other specifications can define their content type, credential is signed ... if my understanding is correct, I'm ok w/ direction.  

> *Manu Sporny:* (Brent deftly composes a proposal, much like Beethoven writes a symphony.).

**Orie Steele:** media type `vc+ld+json` might have external proof, you won't see evidence in internal content type, because external proof is external.  
… You could have internal proof, and that would say you have an internal proof. I would avoid trying to smith proof related changes into resolution. We will have to address proof related issues as a group, don't see need to add more language to this particular proposal.  

**Brent Zundel:** Kristina, are you ok w/ moving forward noting that we need to have proof conversation separately?  

> *Manu Sporny:* Kristina makes noises of disapproval.

**Brent Zundel:** Or we could add...  

**Kristina Yasuda:** The media type does not dictate how credential is signed?  

> *Dave Longley:* +1 to Kristina.

> *Orie Steele:* +1 to the "media type does not dictate how the credential is signed".

> *Kerri Lemoie:* +1 Kristina.

> *Phillip Long:* +1.

> *Orie Steele:* that is what I was trying to say regarding the current proof section of the spec.

**Dave Longley:** we should say "to use as the base media type".  

> *Phillip Long:* +1 to Dave's suggestion.

> **Proposed resolution: We will change `credential+ld+json` to `vc+ld+json` to use as the media type for verifiable credentials and add language to the spec that indicates the media type does not signal how the VC has been signed.** *(Brent Zundel)*
{: .proposed_resolution}

> *Brent Zundel:* +1.

> *Michael Jones:* +1.

> *SongPu Ai:* +1.

> *Joe Andrieu:* +1.

> *Gabe Cohen:* +1.

> *Phillip Long:* +1.

> *Shigeya Suzuki:* +1.

> *Orie Steele:* +1.

> *Kerri Lemoie:* +1.

> *Dave Longley:* +1 `application/` prefix is presumed :).

**Manu Sporny:** +1.  

> *Kristina Yasuda:* 0.

**Dave Longley:** +1.  

> *Ted Thibodeau Jr.:* +1 with application/ :-).

**Brent Zundel:** This will go out for review before it's officially resolved.  
… I'm going to add application/ to be clear that that's what we resolved.  

> ***Resolution #1: We will change `application/credential+ld+json` to `application/vc+ld+json` to use as the media type for verifiable credentials and add language to the spec that indicates the media type does not signal how the VC has been signed.***
{: #resolution1 .resolution}

_See github pull request [vc-data-model#1034](https://github.com/w3c/vc-data-model/pull/1034)._

<!-- issue w3c/vc-data-model/1034 -->



**Manu Sporny:** With that, I think we can merge Orie's 1034 PR.  
… We may / want to modify that PR to just remove the `application/credential+ld+json` to make it clear there's just one base media type.  
… We should do that and that will be 1034. Then 1050 can refer to `application/vc+ld+json` and we can pull in 1050.  
… 1014 I believe gets addressed by this.  

_See github pull request [vc-data-model#1014](https://github.com/w3c/vc-data-model/pull/1014)._

<!-- issue w3c/vc-data-model/1014 -->



_See github pull request [vc-data-model#1050](https://github.com/w3c/vc-data-model/pull/1050)._

<!-- issue w3c/vc-data-model/1050 -->



**Manu Sporny:** We're going very far towards resolving it at least.  

### 2. Specific PRs.
{: #section2}

#### 2.1. Add presentation media type (pr vc-data-model#1032)
{: #section2-1}

_See github pull request [vc-data-model#1032](https://github.com/w3c/vc-data-model/pull/1032)._

<!-- issue w3c/vc-data-model/1032 -->



**Manu Sporny:** That's three PRs that are knocked down and we can talk about PR #1032 next. It might be easier to address now.  

**Orie Steele:** We had previously merged the section that allowed us to talk about media types. I'd prefer to close PRs that I have opened that I authored and to make a single PR that implements the resolution that we took today. We can open other PRs to media types section. That's what I prefer to go forward. I don't want to retain all the arguments that are no longer relevant.  
… I'd like to open new PRs to address content in PRs I opened.  

> *Phillip Long:* +1 to Orie closing his pull requests.

**Orie Steele:** The same thing would go for presentations, we'd have the same conversation on vp+ld+json, I'd rather have that conversation on an issue. Manu you mentioned that PR 1032 — either we continue to discuss, or we can move to issue to discuss.  

**Brent Zundel:** To be clear, what's being suggested is closing 1014, and 1034, in favor of new PR that captures resolution we just made. Other PRs might be open for other language related to media type to be placed in the media types section.  

#### 2.2. change ZKP section (pr vc-data-model#1030)
{: #section2-2}

_See github pull request [vc-data-model#1030](https://github.com/w3c/vc-data-model/pull/1030)._

<!-- issue w3c/vc-data-model/1030 -->



**Manu Sporny:** I think we're ready to merge this.  
… There are some changes that Kristina and Ted have suggested, but I think those are good to go unless someone here objects.  

> *Dave Longley:* +1 to merge with whatever editorial fixes.

**Brent Zundel:** ok, I'll apply language and merge.  

#### 2.3. Restrict JSON-LD expression to compact document form. (pr vc-data-model#1050)
{: #section2-3}

_See github pull request [vc-data-model#1050](https://github.com/w3c/vc-data-model/pull/1050)._

<!-- issue w3c/vc-data-model/1050 -->



**Manu Sporny:** This one, PR 1050, was just waiting on what we decided today. I'm not worried about this PR.  
… We can merge this based on our conversation today.  

#### 2.4. Add warning related to protecting integrity of @context (pr vc-data-model#1051)
{: #section2-4}

_See github pull request [vc-data-model#1051](https://github.com/w3c/vc-data-model/pull/1051)._

<!-- issue w3c/vc-data-model/1051 -->



**Manu Sporny:** This one ... people gave comments on the PR and in issues and in my email inbox... I have to reconcile all that first.  
… For PR 1051.  
… I'll deal with all the various inputs.  

#### 2.5. Adding the "Credential" class (pr vc-data-model#1057)
{: #section2-5}

_See github pull request [vc-data-model#1057](https://github.com/w3c/vc-data-model/pull/1057)._

<!-- issue w3c/vc-data-model/1057 -->



**Orie Steele:** This issue 1057 is a tarpit, it probably won't go anywhere, I don't think we will succeed in adding RDF language of Credential as a class.  

**Brent Zundel:** If folks want to jump on the queue, please do so.  

**Dave Longley:** I'm more optimistic, given the decision, some of the things we were pushing to create explicit separations, vs. conceptual differences that we discuss in spec. If we talk about these things in spec, instead of making them explicitly in RDF vocabularies, there is a good amount of support for that approach.  
… Which would mean, we don't need to add these additional things to RDF Vocabulary.  

#### 2.6. Editorial fixes to media types section. (pr vc-data-model#1062)
{: #section2-6}

_See github pull request [vc-data-model#1062](https://github.com/w3c/vc-data-model/pull/1062)._

<!-- issue w3c/vc-data-model/1062 -->



**Manu Sporny:** This can be merged, I just haven't done it.  

> *Orie Steele:* +1 to merging, after the call.

**Manu Sporny:** I'm concerned that we may be talking past each other. Just to clarify, you mean change the media type to the new one.  
… And then we're good to go?  

**Joe Andrieu:** Yes, that's what I meant.  

**Manu Sporny:** Kristina, are you talking about stop talking about "credentials" in the media types?  

**Kristina Yasuda:** There's a sentence in there that needs clarification.  

**Manu Sporny:** In the spec we make a clear distinction, conceptually between credentials and verifiable credentials.  
… In theory, we're careful in the spec where we are careful with that — but sometimes we're using the wrong term in the spec.  
… We need to go through the spec and clean that up and make it clear where we are talking about a credential vs. a verifiable credential.  
… Other people are suggesting that we should stop talking about credentials entirely and we should only talk about verifiable credentials and that's where things get problematic.  
… The other issue is that some people have taken issue with the definitions for the two terms and are calling it vague. And talking about those things in terms of securing mechanisms is a new thing in 2.0. There may need to be clarity in terminology definitions. I'm wary, until then, when people say "this should be a credential vs. a verifiable credential".  
… I think we need to get to a point where people are happy with the definitions and distinctions and then clean it all up.  

**Orie Steele:** Mostly agree w/ Manu — described the challenges in front of us... people are very confused by text in current spec, and we have to do better in some of the ways Manu said and further discussion on utility of word "credential" is in order. We should improve language around them that there is a meaningful distinction, if there is one, and I remain dubious about it.  

**Kristina Yasuda:** I was reacting to text in PR, editorial PR, happy to open an issue... there is text that says "if you use crednetial vs. verifiable crednetial" — what each of them mean.  
… Same philosophy applies to signed thing, we should be consistent, I'll make a comment to that effect.  

> *Phillip Long:* +1 kristina.

**Brent Zundel:** Thanks kristina, thanks everyone, pleasure working with you all, see you all tomorrow!.  

---


### 3. Resolutions
{: #res}

* [Resolution #1](#resolution1): We will change `application/credential+ld+json` to `application/vc+ld+json` to use as the media type for verifiable credentials and add language to the spec that indicates the media type does not signal how the VC has been signed.
