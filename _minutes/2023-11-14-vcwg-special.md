---
layout: minutes
date: 2023-11-14
title: Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — 2023-11-14
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-11-14-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Outstanding PRs",
        "dateCreated": "2023-11-14",
        "irc": "vcwg-special",
        "datePublished": "2023-11-14",
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
            "startDate": "2023-11-14",
            "endDate": "2023-11-14",
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
                            "name": "Chris Abernethy"
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
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
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
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Sebastian Crane"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Benjamin Young"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Outstanding PRs — Minutes
{: .no_toc}



**Date:** 2023-11-14

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20231114T110000/) and the [IRC Log](https://www.w3.org/2023/11/14-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ivan Herman, Andres Uribe, Brent Zundel, Will Abramson, Michael Jones, Ted Thibodeau Jr., Dave Longley, David Chadwick, Manu Sporny, Sebastian Crane, Chris Abernethy, Joe Andrieu, Dmitri Zagidulin, Benjamin Young, Phillip Long

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Chris Abernethy, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Brent Zundel:** welcome, focus today is pull requests, with goal to determine whether there is a path forward or if we should close each PR.  
… expect core datamodel to be ready for CR before mid-December.  

### 1. Pull Requests.
{: #section1}

> *Brent Zundel:* [https://github.com/w3c/vc-data-model/pulls](https://github.com/w3c/vc-data-model/pulls).

#### 1.1. Warn authors that usage of global JSON-LD keywords might harm interoperability (pr vc-data-model#1271)
{: #section1-1}

_See github pull request [vc-data-model#1271](https://github.com/w3c/vc-data-model/pull/1271)._

<!-- issue w3c/vc-data-model/1271 -->



**Brent Zundel:** orie requested explanation of why and how interop would be reduced.  

**Manu Sporny:** I had volunteered but have not had a chance as I though this PR would be closed.  
… one thing worth mentioning, there are other language PRs that Benjamin has raised. we will probably strike telling people they shouldn't use that language in context property.  
… and that they should use `@base`.  
… once done, we should ask Orie for re-review.  

**Brent Zundel:** agreed, if we don't hear by end of this week we merge and indicate we have attempted to address change requests.  

**Manu Sporny:** I'll work on update today.  

#### 1.2. Warn that using dynamic processor features might lead to less interoperability (pr vc-data-model#1276)
{: #section1-2}

_See github pull request [vc-data-model#1276](https://github.com/w3c/vc-data-model/pull/1276)._

<!-- issue w3c/vc-data-model/1276 -->



**Brent Zundel:** this is post-cr, so would like to understand status today.  

**Manu Sporny:** I believe DavidC was asking for changes and manu requested and received re-review with some subsequent discussion.  
… I think that we need an example from DavidC to move this along.  
… sounds like DavidC is opposed to this PR as it stands, would like some changes, and we need explicit change requests.  

**David Chadwick:** I did produce the text, but TallTed had suggested reformat as a block.  
… at the moment there is one example, which uses a term defined in `@context` and uses the alias for that.  
… I wanted to add a second example with an alias not explicitly defined in `@context` that would be turned into a URI using `@vocab`.  

**Ted Thibodeau Jr.:** that explanation is helpful, but I don't see that communicated in the current text.  
… if you update your change request with this text I think it will be easier to move forward.  

**David Chadwick:** I had some difficulty with the GitHub UI trying to add multiple lines to the change request.  
… I will try just adding a block of text to bypass this (maybe broken) UI issue.  

**Manu Sporny:** Can we change this one to pre-cr? I've been ignoring post-cr issues, but this one seems like it may have a resolution this week.  

**Brent Zundel:** It might make sense to do that, yes.  
… it seems like we are close, and ideally this one will get merged this week.  

#### 1.3. Propose better JSON-LD processing text (pr vc-data-model#1302)
{: #section1-3}

_See github pull request [vc-data-model#1302](https://github.com/w3c/vc-data-model/pull/1302)._

<!-- issue w3c/vc-data-model/1302 -->



**Brent Zundel:** my understanding is that this is still not closer to consensus than it was. is this at all closer and worth talking about, or should we move on?  
… moving on.  

#### 1.4. Add definition of well formed (pr vc-data-model#1320)
{: #section1-4}

_See github pull request [vc-data-model#1320](https://github.com/w3c/vc-data-model/pull/1320)._

<!-- issue w3c/vc-data-model/1320 -->



**Brent Zundel:** another post cr, don't believe any changes have been made since last discussion.  
… propose we move on, as there doesn't seem to be additional consensus.  

**Joe Andrieu:** my sense from last week was that we were headed towards closing this, should we add pending close?  

**Brent Zundel:** you are not wrong, that's why we added post-cr in case we see a path towards consensus later that hadn't been available before.  

**Joe Andrieu:** I'm okay with that.  

#### 1.5. Add comparison to NIST definition (pr vc-data-model#1332)
{: #section1-5}

_See github pull request [vc-data-model#1332](https://github.com/w3c/vc-data-model/pull/1332)._

<!-- issue w3c/vc-data-model/1332 -->



**Brent Zundel:** there was one change request on this one, which folks seemed fine with. I think we are waiting on Orie to respond.  
… I will ping Orie directly to ask him to respond (he is not available for these Tuesday calls).  

**Joe Andrieu:** seems like there was reasonable consensus to remove that last line, but I do think it is appropriate to bring in Orie on this one.  

> *Sebastian Crane:* +1 to JoeAndrieu (IRC) - I think we have consensus. Can we note this for Orie's benefit?

**Brent Zundel:** I think there is broad agreement on this one if the recommended change is made.  

#### 1.6. Add comment on localizing vocabulary terms. (pr vc-data-model#1333)
{: #section1-6}

_See github pull request [vc-data-model#1333](https://github.com/w3c/vc-data-model/pull/1333)._

<!-- issue w3c/vc-data-model/1333 -->



**Brent Zundel:** no approvals, and one change request. We still have not had any response from Orie based on the change request.  

**Manu Sporny:** I don't understand the language in the PR.  
… I don't know what Orie means by "localized", maybe I18N?  

> *Ivan Herman:* I do not understand that comment either.

**Brent Zundel:** I will add this to the things that I ask Orie about.  

**Sebastian Crane:** I can't speak for Orie, but I think what he means is that the actual names of the RDF properties can't be translated into, e.g., French, without overhead. Similarly to how you have to use the english terms.  
… "for" and "while" for loops in C.  

**Ivan Herman:** that is indeed the intention, this is not RDF specific, this is a general feature for all the apis used on the web.  

**Ted Thibodeau Jr.:** as commented in the thread, this appears to be about the language used for URI construction, which should be considered opaque anyway. There are ways to "localize" via multiple schema:name, rdfs:label, dcterms:description, rdfs:comment, dcterms:title, etc.  

> *Dave Longley:* +1 to ivan, this is true for everything, this isn't specific to anything in ... computer science.

#### 1.7. Add conformance classes for issuers and verifiers. (pr vc-data-model#1336)
{: #section1-7}

_See github pull request [vc-data-model#1336](https://github.com/w3c/vc-data-model/pull/1336)._

<!-- issue w3c/vc-data-model/1336 -->



**Brent Zundel:** this PR has nothing but approvals, and has been open for more than a week.  

**Manu Sporny:** was going to mention the comment from andres.  
… I took a shot at naming the conformance class. Right now we call it ConformingIssuerProcessor, but could make an editorial change in the future.  
… JoeAndrieu would like your thoughts on changing to ConformingIssuer, but expect pushback.  

**Joe Andrieu:** I think we need a good set of vocab to refer to these aside from roles.  

**Michael Jones:** suggest we call it a ConformingIssuerImplementation.  

> *Dave Longley:* +1 to "software".

> *Dave Longley:* is fine with "implementation".

> *Joe Andrieu:* +1 to software or implementation.

> *Sebastian Crane:* +1 to Mike from me.

> *Dave Longley:* +1 to "implementation" generally over "processor".

**Brent Zundel:** would anyone be opposed to ConformingIssuerImplementation?  

> *Brent Zundel:* Seems to be support for that, which Mike suggested.

**Andres Uribe:** my interpretation is that the "should" becomes moot.  

> *Sebastian Crane:* +1 to andres from me also. I wouldn't mind making that a MUST.

**Manu Sporny:** you are correct, that needs to be struck.  

> *Dave Longley:* +1 to remove the top-level one.

> *Andres Uribe:* +1 to that as well.

> *Brent Zundel:* +1 to remove top-level one.

**Manu Sporny:** probably what we need to do here... I'm wondering if we should just remove the classes and just have ConformingIssuer and ConformingVerifier.  

> *Dave Longley:* and then leave the others alone.

**Manu Sporny:** e.g., remove the top-level ones and keep the more specific ones.  
… the reason the statement was "SHOULD" - some implementations may want to continue processing something with an error in the vc.  
… "date" is a great example because we have new language in the spec saying you must produce dates with utc timestamp.  
… if the date is wrong in a way that the verifier feels is recoverable, we should allow them to recover. That is why it is a "SHOULD" instead of a "MUST".  

> *Manu Sporny:* "conforming issuer implementation" <-- we'll use that.

**Andres Uribe:** wondering what the value is of introducing normative statements for those classes.  
… seems to me that creating a label for conformance class is simply a grouping of which normative statements are correctly implemented by a specific implementation.  
… just wondering what the value is vs. just saying "implementation X does actually pass all normative statements that are testable".  

**Sebastian Crane:** responding to manu from earlier regarding conformance requirement where MUST is appropriate.  

**Manu Sporny:** yes, specifically I'm saying the time value is corrupt, not wrong.  
… for whatever reason the verifier may know they can recover.  

**Sebastian Crane:** thanks, real world example: vc from phone when accessing turnstile.  
… for some reason the qr is corrupted. by saying MUST in the specification, we are saying that somewhere in the system some alarm must be raised.  
… what is not being said is that the turnstyle cannot open.  
… therefore I don't think it unreasonable to say the implementation should not produce errors (via MUST).  

**Joe Andrieu:** responding to manu - we are assuming processing stops on error. I don't think that's what we are talking about.  
… only that software has to report the error.  
… if the verifier needs to make a business decision, that's validation. If it is something always checked, that is verification and should be a MUST.  

**Brent Zundel:** practically, because we had a Google rep review and say we really needed normative conformance classes. This is in response to that direct feedback.  

**Manu Sporny:** in addition, having conformance classes makes it clear to vendors what kind of software they are producing.  
… sometimes a customer will ask if you are conformant to a standard, and you want to say with confidence that we produce conforming issuer implementations.  
… often w3c specs may talk about different sets of software and requirements.  

> *Ivan Herman:* +1 to Manu.

**Manu Sporny:** e.g., conforming issuer implementations, status list implementations, etc.  
… I am hearing we should just make this a MUST, and we may decrease interop if these corrupt examples are being accepted.  

> *Phillip Long:* +1 to Joe's comment that this should be made "must" if it is a verification.

**Manu Sporny:** agreed we are saying must produce errors, not halt processing.  

> *Sebastian Crane:* +1 to manu and to use of 'MUST' here.

**Brent Zundel:** path forward seems to be keep MUST, get rid of first tier conformance classes, and just keep IssuerImplementation and VerifierImplementation.  

**David Chadwick:** I agree with the MUST, but seabass' use case was slightly wrong - conflating validation and verification.  

> *Joe Andrieu:* +1 to validation can ignore the errors.

**Brent Zundel:** this should be merged by end of week at the latest.  

#### 1.8. Add verification algorithm to specification. (pr vc-data-model#1338)
{: #section1-8}

_See github pull request [vc-data-model#1338](https://github.com/w3c/vc-data-model/pull/1338)._

<!-- issue w3c/vc-data-model/1338 -->



**Brent Zundel:** another before CR pr related to Jeffrey's review.  
… I think the request for changes has been addressed already.  

**Manu Sporny:** I would like the group to pay particular attention to this PR. It is the first time we are adding an algorithm with a set of steps into the spec.  
… that is also dependent on the external securing specification.  
… I believe we have a bead on the right levels of abstraction.  
… this is also forcing us to describe what a warning or error object looks like (I've called these anomalies).  
… looking for bikeshedding in the PR on this naming.  

> *Joe Andrieu:* +1, I'll take a look.

**Manu Sporny:** a W3C member has indicated formal objection if this was not defined this time around.  

**Brent Zundel:** agreed that this addresses what was requested, and that folks should review. This has been open for six days, so review period is close to being up.  

**Ivan Herman:** in the PR, there are a number of places where there are discussions going on and it is marked as outdated - not sure what I need to be looking at.  
… can that be improved?  

**Manu Sporny:** I did not want to resolve statements until WG members had a chance to look through them.  
… whenever reviewing, always look at "files changed" to do your review, not the conversation tab.  

**Brent Zundel:** just to note, the "outdated" label is specific to the code snippet, which has been changed. The conversation should still be available, and current code.  
… is in the "Files changed" tab.  

#### 1.9. Explain default language expression. (pr vc-data-model#1339)
{: #section1-9}

_See github pull request [vc-data-model#1339](https://github.com/w3c/vc-data-model/pull/1339)._

<!-- issue w3c/vc-data-model/1339 -->



**Brent Zundel:** Benjamin, can you give status update?  

**Benjamin Young:** this one got good feedback from Addison, and there is a suggestion about requiring language definition, which would be a major change for everybody.  

> *Chris Abernethy:* .. that is the piece that needs discussion - otherwise approvals throughout.

**Manu Sporny:** my one concern is that there are two ways to specify.  
… best way is to be precise. The other way is `@language` and `@direction` in the `@context` which will set it blanket for the entire doc.  
… both of Benjamin's PRs say use one or the other, up to you. Addison is saying no to that.  
… question to group: do we want to mandate saying you MUST set the `@language` for every type of VC that you issue?  

> *Dave Longley:* IMO, you can't force people to do the right thing here -- you will just get bad language data (e.g., English as the default language, but the content will be in another language).

> *Dave Longley:* +1 to Joe, MUST is aspirational that won't be attained.

**Joe Andrieu:** I think MUST is something we probably would not be able to realize, and would lead to lots of non-conforming implementations and ignoring on the front-end.  
… agree it should be there, just don't think MUST is feasible.  

**Benjamin Young:** +1 to what was said, HTML, JSON, JS don't do this. Providing language as a capability is good, requiring it is a "bridge too far".  

**Sebastian Crane:** as we are releasing 2.0 to the world, this is the best time to promote language support.  
… maybe people are right, but this is probably the best time to try and support making this a MUST.  

**Ted Thibodeau Jr.:** making this a MUST means derivative certs are not doable.  
… SHOULD is almost a MUST, e.g., do it unless you have a good reason not to.  
… VCs are not the path to force I18N on the world.  

**Dave Longley:** agree with TallTed, this will hurt more than help, and we can't force people to do this.  

**Sebastian Crane:** question - where are the difficulties expected to be here?  
… I know what language I am using, so it seems easy. Can someone explain where the pain points are here?  

**Brent Zundel:** encourage folks to respond to seabass in the PR.  

#### 1.10. Clarify normative statement related to timezone offsets. (pr vc-data-model#1344)
{: #section1-10}

_See github pull request [vc-data-model#1344](https://github.com/w3c/vc-data-model/pull/1344)._

<!-- issue w3c/vc-data-model/1344 -->



**Brent Zundel:** this PR is broadly approved with no unresolved change requests.  
… we are going to merge in a couple of days.  

**Manu Sporny:** heads up to the group, this is also significant. When you express a time value in any VC, you should express it as a date timestamp formatted value.  
… anyone verifying, if they do not see a relative UTC offset, has to interpret it as UTC.  
… this means you cannot express (should not express) a date that does not have a timezone offset at the end of it for any time value in a VC.  

**Joe Andrieu:** also commented in github - would like to see this scoped to just the properties we are defining in the VCDM. Don't want to see this on custom properties, or.  

**Manu Sporny:** that is the intention. we are trying to increase interop.  

**Brent Zundel:** let's continue the conversation on the PR.  
… please be aware of and review other PRs that we didn't get a chance to review today.  

---
