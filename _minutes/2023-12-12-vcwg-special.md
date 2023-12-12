---
layout: minutes
date: 2023-12-12
title: Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — 2023-12-12
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-12-12-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs",
        "dateCreated": "2023-12-12",
        "irc": "vcwg-special",
        "datePublished": "2023-12-12",
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
            "startDate": "2023-12-12",
            "endDate": "2023-12-12",
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
                            "name": "Joe Andrieu"
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
                    "name": "Benjamin Young"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                },
                {
                    "@type": "Person",
                    "name": "Paul Dietrich"
                },
                {
                    "@type": "Person",
                    "name": "Steve McCown"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — Minutes
{: .no_toc}



**Date:** 2023-12-12

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20231212T110000/) and the [IRC Log](https://www.w3.org/2023/12/12-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ivan Herman, Brent Zundel, Manu Sporny, Benjamin Young, Joe Andrieu, Dave Longley, Ted Thibodeau Jr., Dmitri Zagidulin, Andres Uribe, Kaliya Young, Paul Dietrich, Steve McCown, Will Abramson

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Joe Andrieu, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Brent Zundel:** Welcome everyone.  
… Today: pull requests.  

### 1. Housekeeping issues.
{: #section1}

**Manu Sporny:** I need to migrate the respec-vc and maybe respec-mermaid repos to W3C.  
… just a heads up.  

**Ivan Herman:** You know what I have to do?  

**Manu Sporny:** yep.  
… also Orie requested we update the tooling to show the latest VC-COSE-JOSE as well as DI specs.  
… We'll do that once we move it over to W3C.  

**Ivan Herman:** the echidna is set up?  

**Manu Sporny:** I believe so...  

**Ivan Herman:** for DI spec, it has to say CRD as status, then you can update as we go.  

**Manu Sporny:** just a heads up, we have two CR events triggering. If we can get that on the agenda to review on a future meeting.  

**Brent Zundel:** yep, a good future meeting (Jan).  

**Manu Sporny:** can I submit a PR that would trigger a second CR?  

**Brent Zundel:** perhaps Ivan can help wrt process.  
… as soon as any normative changes are made to the CR document, doesn't that ...  
… can we merge those without new CR phase?  

**Ivan Herman:** Not sure I understood.  
… The CR process is such that we can republish CR drafts at any moment.  
… A "second CR" is a "CR Snapshot".  
… When changes are such that test implementations have to be redone because of normative change, then CR snapshots must use old publishing mechanism (not echidna).  
… So do not merge if you would trigger a snapshot, so we can turn off echidna and do the snapshot.  

**Brent Zundel:** certainly possible to create another branch.  

**Ivan Herman:** yeah.  

**Manu Sporny:** Sorry, I'm doing a bad job explaining.  
… [sharing screen].  
… Currently Jeffrey Yaskin has requested that we define an interface in all of the securing specifications.  
… His change requests (and another by Greg).  
… If we adopt those changes will trigger a second CR.  

**Ivan Herman:** to be precise, it triggers a CR snapshot.  

**Manu Sporny:** not sure that's true.  
… Can I merge this into the CR draft?  
… I thought I could.  
… Then we would have to remember to do a snapshot.  
… So we can do the changes, we just have to remember that we will need a second CR snapshot (TBD later).  

**Ivan Herman:** yes. that can be done.  
… If we have lots of drafts, there are supposed to be a new CR snapshot.  
… I don't know the details of those PRs, so I'm not sure if they would invalidate implementations.  

**Manu Sporny:** there are so many changes, it would be hard to argue they don't.  

**Ivan Herman:** wait. maybe better: if there are any patent issues, would these PRs create new ones?  
… any time we have a CR snapshot, it triggers a new IP review.  
… Are these changes such that we need a new review in this respect.  

**Manu Sporny:** probably not, but it's hard to say because of so many changes.  

**Ivan Herman:** if you aren't sure, but its not visibly a new feature, that probably works.  
… but if we critically change stuff or add new feature, I would be uneasy publishing that as draft.  

**Manu Sporny:** to be clear, this PR fixes a bug. Jeffrey's PRs modified the interface.  
… between the VCDM and DI spec.  

**Ivan Herman:** these do not require immediate snapshots.  

**Manu Sporny:** next fixes a bug (#70).  

**Ivan Herman:** that's editorial. I don't see any problems with those.  
… One more thing: document every change. There should be a clear section that says "Since the last CR snapshot, these changes happened".  

**Manu Sporny:** so the only thing from the group, No one is objecting to these normative changes?  

**Brent Zundel:** I'm assuming on the PRs you have reviewed conversation and all of that?  
… Would anyone want to state an objection to processing as Manu proposed?  
… [crickets].  
… You care good to proceed, Manu.  

### 2. PRs.
{: #section2}

> *Brent Zundel:* [https://github.com/w3c/vc-data-model/pulls?q=is%3Apr+is%3Aopen+label%3Abefore-CR+sort%3Aupdated-asc](https://github.com/w3c/vc-data-model/pulls?q=is%3Apr+is%3Aopen+label%3Abefore-CR+sort%3Aupdated-asc).

#### 2.1. Add `relatedResource` property to `VerifiablePresentation` (pr vc-data-model#1370)
{: #section2-1}

_See github pull request [vc-data-model#1370](https://github.com/w3c/vc-data-model/pull/1370)._

<!-- issue w3c/vc-data-model/1370 -->



**Brent Zundel:** First up, 1370.  
… Looks like Joe is opposed.  
… We don't have consensus on this. Looking to close.  
… happy to take comments. if folks are opposed, we can timebox a conversation.  

**Manu Sporny:** As a heads up, I curated the PRs and put pending close on any thing that has an objection without a work-around.  
… we need to get more aggressive about closing.  
… Just an explanation about why things are marked pending closed.  
… Another thing to ask is whether or not the objector would make an FO on this change.  
… My concern about this PR is that if we don't put Related Resource will not have a way of adding a hash for a JSON LD context in addition to the base context.  
… It has been asserted that you don't have to do that if you have static contexts.  
… Orie's not here, who might be objecting.  

**Joe Andrieu:** Yes, I am opposed to this, I would Formally Object, I think this is a huge layer violation. It creates an opportunity for surveillance through related resource, I think we can solve context securing in a different way.  
… Manu, noted that VC-JOSE-COSE folks want to use JSON-LD Contexts... they should just use JSON-LD.  

**Ivan Herman:** I'm neutral on the original thing. but what was just proposed to Joe seems the wrong thing to do.  
… saying that it can only be used for certain purposes sounds bad.  
… that requires additional restrictions through new properties.  
… I can't object as a W3C staff, but I don't like it.  

> *Manu Sporny:* FWIW, I agree with Ivan, I was just trying to find a way through this where we don't end up w/ FOs.

**Brent Zundel:** I'm seeing no consensus here.  
… We don't have Orie, so we can't ask him.  
… based on the information we have, we should close this PR.  
… I'd like to close it now, but we just put the pending close label on this three days ago.  

**Manu Sporny:** note, if Orie is going to formally object (because you can't secure context).  
… our way through this would be to have a "relatedContext" property.  
… I think Joe would not be opposed to that. And maybe Orie would find that ok.  

**Ivan Herman:** I want to remind people that there was a feature freeze a while ago.  
… what you just proposed feels like a new feature. It's just too late.  
… We can't work that way or we'll never finish.  

**Brent Zundel:** appreciate the reminders.  

#### 2.2. Incorporate status checking into verification algorithm (pr vc-data-model#1369)
{: #section2-2}

_See github pull request [vc-data-model#1369](https://github.com/w3c/vc-data-model/pull/1369)._

<!-- issue w3c/vc-data-model/1369 -->



**Brent Zundel:** moving on to next PR.  

**Joe Andrieu:** I've had a shift in this whole verification thing... I haven't made it through Manu's edits w/ his new PRs and verification/validation... shift, which aligns w/ Andres, Verification defined "not cryptographically", but steps that can be done generically w/o business rules... so service provider can do that for you.  

> *Dmitri Zagidulin:* expiry is business rules, though.

> *Dmitri Zagidulin:* but I like this phrasing.

**Joe Andrieu:** It could check status, expiry, well-formed-ness, so I want to queue up Manu... how does that float into latest language? At least for me, I have a lot more movement on this topic.  

> *Dave Longley:* +1 to the framing being closer to what i think works / people can agree with.

**Manu Sporny:** good news is that many people are granting leeway than before. that's good.  
… I think there is strong push back on putting validation in scope.  
… I think Orie has wanted us to say we are both verifying and validating. but once we put one validation thing in there, it's a slippery slope.  
… I think Orie is aligned with an idea from Dave: these calls to validating any of the extension points, you just get a yes/no answer.  
… that seems aligned with what Joe was saying.  
… I think there's some language we could get to.  
… we could make another attempt at this, but I'd rather not do it.  
… we probably don't need this defined.  
… I can try another variation.  
… but this PR should die.  

**Brent Zundel:** if anyone is opposed to this PR dying, speak up.  

**Andres Uribe:** If its not in the spec, we should agree to use three different words for what we mean.  
… "verification", "validation", but there's a third.  
… One is cryptographic securing mechanism.  
… Second is what Joe just alluded to, the status checking.  
… Third is business validation.  
… if we start using a different term that could help.  

> *Dmitri Zagidulin:* what is the current consensus re where well-formedness (required fields, etc) belongs? verification?

**Joe Andrieu:** One thing I wanted to note, in different PR, shift about "validation" that we don't validate what the roles do... even though it's expected that a verifier validates... there isn't software that we can test to be conformant. We say what conformant implementations do, not what conformant roles do (there still exists some sloppy language).  
… Manu, you said verification should be 'yes/no' w/ subjects. I want to make sure metadata is returned so validation can be done by validation. Everything should bubble back up so business rules can be done/provided.  

**Manu Sporny:** yes. that's the slippery slope I'm worried about.  
… if we could define all that... it's not just expiry, it's also schema.  
… So, depending on the detail that Jeffrey is asking for.  
… For example, the interface for securing mechanisms took six weeks. At best, 3 weeks.  
… that means we don't get to JOSE-COSE and unlinkability.  
… Unless that interface can be handwavey...  
… What you want Joe, is great, but we are out of time.  
… unless we can solve it in the next week or two.  
… Bikeshedding, etc. is a recipe for us just not completing.  

**Brent Zundel:** thank you, Manu. I agree with your concerns.  
… what about this PR.  

**Dave Longley:** I think we might not need 3 terms.  
… we just need to split these up better.  
… Verification is getting you the information you need to make a decision.  
… Validation is making that decision.  

**Joe Andrieu:** I get the time thing.  
… My concern is not whether or not we do this, I appreciate the time concern and that we want to do this, I think Jeffrey is asking for an answer and we need to figure out the level of detail to assuage his concerns. If we don't define it in this way, what way could we meet it?  

**Dmitri Zagidulin:** I want to get a sense where the current consensus is wrt conforming documents and well-formedness.  
… does checking that an object has required field, that timestamp is proper format, do those belong in verification or validation.  

> *Dave Longley:* i think we're only defining the securing mechanism portion of verification and we can say that other interfaces can be used for other extension points to get secured information from them -- and then after all that, validation (business rules) can be applied.

> *Dmitri Zagidulin:* `@manu` - what were you going to say?

#### 2.3. Forbid use of media type parameters (pr vc-data-model#1382)
{: #section2-3}

_See github pull request [vc-data-model#1382](https://github.com/w3c/vc-data-model/pull/1382)._

<!-- issue w3c/vc-data-model/1382 -->



**Manu Sporny:** I thought Ted was a -0.99 and I agree.  
… I don't like this PR. I raised it because Orie asked.  
… I think the group just shouldn't say anything about it.  
… Why are we telling people not to do something that people might find useful.  

> *Dave Longley:* +1 to Ted's rationale and Manu's support of it ... i think we're trying to say more than we need to here.

**Manu Sporny:** This feels like a time sink.  
… Orie has said this would let us subprofile.  
… But, please, let's not do that. Feels like a bad direction.  
… Also, "+JSON+LD" would let you sub-profile, so we should.  
… But I don't think we have a good use for it in this group.  
… if someone wants to profile the VCDM, they should do that and get implementation experience.  
… suggestion is to close this PR.  

> *Dmitri Zagidulin:* +1 to closing the PR, do nothing.

> *Dave Longley:* +1 to Manu's suggestion to close the PR.

> *Dmitri Zagidulin:* it was done in response to a mis-interpretation of Orie's comment.

**Ted Thibodeau Jr.:** Yes, please lets close this.  

**Brent Zundel:** dmitriz also noted he was +1 to close.  
… I'm adding a pending close label to this PR.  
… next up 1383.  

#### 2.4. Add normative references to INFRA in algorithms (pr vc-data-model#1383)
{: #section2-4}

_See github pull request [vc-data-model#1383](https://github.com/w3c/vc-data-model/pull/1383)._

<!-- issue w3c/vc-data-model/1383 -->



**Brent Zundel:** a few comments. mostly editorial concerns raised.  

**Manu Sporny:** this PR looks like it will make it.  
… To clarify, we are now taking a normative dependence on INFRA, limited to the algorithm section.  
… We are NOT planning on rewriting the entire spec. We could later.  
… But for now, just the algorithm section.  

> *Ivan Herman:* +1 to Manu on infra.

**Ted Thibodeau Jr.:** my comment lines 588-596 are changed twice.  
… conversation at 1381 is the same.  
… So this should be rebased.  

**Manu Sporny:** plus one. that's probably a mistake on my part. I'll remove it from the PR. Not meant to be in there.  

**Brent Zundel:** so this PR is looking like it will be approved. So, in five days from now, it will likely be merged.  

**Ivan Herman:** to be precise, pending changes are still expected.  

> *Manu Sporny:* Agree with Ivan, things need to change in this PR to go in.

#### 2.5. Remove document conformance checking algorithm section (pr vc-data-model#1381)
{: #section2-5}

_See github pull request [vc-data-model#1381](https://github.com/w3c/vc-data-model/pull/1381)._

<!-- issue w3c/vc-data-model/1381 -->



**Brent Zundel:** now to 1381.  
… remove document checking section.  

**Manu Sporny:** Orie requested changes on the verification algorithm, specifically that part that checked document conformance.  
… It did it in a way to call out every single property to check.  
… That's what Jeffrey asked for.  
… Orie disagreed and wants it to be restored.  
… So, basically "read the doc, do the MUSTs".  
… Jeffrey was ok with that. This PR does that by becoming much more concise, accurate, about what a conforming document is or is not.  
… document: must be compact JSON-LD that follows all of the MUST statements in the specification, pointing to the sections with those MUST sections.  
… and it does a few more things TallTed is worried about.  
… it also aligns the discussion about "Big Tent" into the credential type specific processing section.  
… Also, "you may, transmit and store a conforming document in a variety of serialization formats" as long you can bring that back.  
… that invites others to profile VCs.  

> *Ivan Herman:* Manu, look at [https://github.com/w3c/vc-data-model/pull/1381#discussion_r1424109226](https://github.com/w3c/vc-data-model/pull/1381#discussion_r1424109226) for possible bike shedding on terminology.

**Ted Thibodeau Jr.:** I don't see the path to resolving my concerns. My comments said the definition change is substantial.  
… The degree of substantialness...  
… yes you can wrap it, but since you have to bring it back, what's the point.  
… I'm not understanding the motivations.  

**Brent Zundel:** would it be fair to say since a conforming document is well described why talk about other serializations?  

**Manu Sporny:** one path is to remove the language about serializations. because it should be obvious.  
… but we spent a long time discussing that, so maybe we should put it in there, even though it's blindingly obvious.  

> *Dave Longley:* i think we need to assuage the concerns of people who want to transform/envelope/whatever as long as you can come back again (even if it's obvious you can do that).

> *Dave Longley:* +1 to Manu, it's been a concern from others.

> *Ted Thibodeau Jr.:* "Deterministic and 100% reversible transformation to or encapsulation in other media types is permissible.".

**Joe Andrieu:** I share TallTed's concerns, I appreciate we want to have roadmarkers for conversations we've had before, we should have language that says "other serializations" are not VCs. I think we need to make it clear that those other things aren't VCs. I don't want people to think that they can call those other things VCs.  

**Brent Zundel:** note we do say that "serialization must be ..." we already say that.  
… what we can say, we have already agreed on and said.  
… So I'm leaning towards just keeping what we have.  

**Manu Sporny:** that language is being deleted in this PR.  

**Brent Zundel:** can we not delete it?  

**Manu Sporny:** yes. that's an option.  
… people are saying reasonable things.  

**Brent Zundel:** looks like we have a path forward for 1381.  

> *Dave Longley:* "another serialization that transforms a conforming document is not a conforming document itself... and it must be (bi-directional, yada-yada)" maybe.

#### 2.6. other PRs.
{: #section2-6}

**Brent Zundel:** please review 1380 and 1379. those are the hot tickets.  
… PRs marked pending closed will be closed without some sort of hail mary. The associated issues will also be closed.  

---
