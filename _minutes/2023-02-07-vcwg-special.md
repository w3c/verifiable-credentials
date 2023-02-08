---
layout: minutes
date: 2023-02-07
title: Verifiable Credentials Working Group Special Topic Call on Implementation Guide and Use Cases document — 2023-02-07
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-02-07-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Implementation Guide and Use Cases document — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Implementation Guide and Use Cases document",
        "dateCreated": "2023-02-07",
        "irc": "vcwg-special",
        "datePublished": "2023-02-08",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Implementation Guide and Use Cases document",
            "startDate": "2023-02-07",
            "endDate": "2023-02-07",
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
                            "name": "Brent Zundel"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Ryan Grant"
                },
                {
                    "@type": "Person",
                    "name": "caballero"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                },
                {
                    "@type": "Person",
                    "name": "Kerri Lemoie"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Samuel Smith"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Steve McCown"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Implementation Guide and Use Cases document — Minutes
{: .no_toc}



**Date:** 2023-02-07

See also the [Agenda](https://www.w3.org/mid/0dedb76b61b4efa5176a46c1f08d90f4@w3.org) and the [IRC Log](https://www.w3.org/2023/02/07-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Kristina Yasuda, Chris Abernethy, Joe Andrieu, Brent Zundel, Manu Sporny, Ryan Grant, caballero, Kaliya Young, Kerri Lemoie, Phillip Long, Samuel Smith, Will Abramson, Dave Longley, Orie Steele, Steve McCown

**Regrets:** 

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** Brent Zundel

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. Use Cases document.
{: #section1}

> *Kristina Yasuda:* [https://github.com/w3c/vc-use-cases/issues/](https://github.com/w3c/vc-use-cases/issues/).

> *Kristina Yasuda:* [https://github.com/w3c/vc-use-cases/pulls](https://github.com/w3c/vc-use-cases/pulls).

**:** there are three open PRs.  
… The holder Binding PR has three approvals, it was opened last week..  
… do we want to have more discussion, or are we good here?.  

**Joe Andrieu:** I can chime in. Kevin Dean and I have been looking at the structure of the document, but we haven't looked at these PRs..  

**Kristina Yasuda:** so we need editor review to merge these?.  

**Joe Andrieu:** yes, I can look at them..  

**Kristina Yasuda:** that would be good so we can move on these topics.  

**Joe Andrieu:** can we set up "codeowners" in this repo? that's why we weren't notified I think.  

**Kristina Yasuda:** yes, let's work on that offline.  

**Joe Andrieu:** we can certainly tag all of these for Kevin and I to review.  

**Manu Sporny:** at a high level, we should have some holder binding use cases. I don't think this use case is realistic..  
… we think doing holder binding as part of age verification is problematic..  
… we should use a different use case that is far more realistic..  
… we have deliberately avoided holder binding in this use case, and this says the opposite..  
… maybe we can change it to something else. I'll add those comments to the PR.  

**Kristina Yasuda:** I think we need codeowners to look at the PRs, so let's look at issues..  

#### 1.1. Repo needs CODEOWNERs (issue vc-use-cases#132)
{: #section1-1}

_See github issue [vc-use-cases#132](https://github.com/w3c/vc-use-cases/issues/132)._

<!-- issue w3c/vc-use-cases/132 -->



> *Brent Zundel:* so have an issue - use cases that requires holder binding.

#### 1.2. Define use case(s) that requires holder binding (issue vc-use-cases#128)
{: #section1-2}

_See github issue [vc-use-cases#128](https://github.com/w3c/vc-use-cases/issues/128)._

<!-- issue w3c/vc-use-cases/128 -->



> *Kristina Yasuda:* PR exists.

#### 1.3. Expand on Use Cases for Multi Party Credentials (issue vc-use-cases#126)
{: #section1-3}

_See github issue [vc-use-cases#126](https://github.com/w3c/vc-use-cases/issues/126)._

<!-- issue w3c/vc-use-cases/126 -->



> *Kristina Yasuda:* PR needed.

**Joe Andrieu:** definitely.  

#### 1.4. Section 4 diagram includes "amend claim" (issue vc-use-cases#124)
{: #section1-4}

_See github issue [vc-use-cases#124](https://github.com/w3c/vc-use-cases/issues/124)._

<!-- issue w3c/vc-use-cases/124 -->



> *Brent Zundel:* section 4 diagram.

**Joe Andrieu:** I proposed at TPAC that we get rid of it. There are use cases that require referring to a VC in a definitive way, and that is underspecified. A VC may not have an ID..  
… There is a desire to amend things. you can't amend something that is signed, but issuing an amended VC that links to the VC being amended could be possible, but maybe we get rid of it..  

**Manu Sporny:** the data model currently supports amending today.  
… the way you amend attributes about the subject is to re-issue..  
… but what happens if you want to amend the whole credential, you can add the previous credential as one of the credential subjects of a new credential.  
… changing what a previous VC says is troubling and much harder to do..  

**Joe Andrieu:** the first one, that's one way to interpret amending, I think it's just another statement. but the second method, including or referencing a VC to amend it is valid..  

> *Orie Steele:* Note the "extendsCredential" property of [https://w3c-ccg.github.io/traceability-vocab/#GS1KeyCredential](https://w3c-ccg.github.io/traceability-vocab/#GS1KeyCredential).

**Joe Andrieu:** I don't think we have any language that uses that pattern. There is a desire to amend, and coming up with a way to sdo that in the implementation guide would be good.  

> *Orie Steele:* For the meeting notes: [https://ref.gs1.org/gs1/vc](https://ref.gs1.org/gs1/vc).

> *Juan Caballero:* +1.

> *Juan Caballero:* to implementation guide rather than normative.

**Manu Sporny:** one thing that we may want to consider is speaking against certain types of amending because of the technical difficulty.  
… changing a previously issued VC in the right way could be very complex. Maybe we add language about re-issuing, that would be best, but issuing a credential that changes another one is harder. We should tell people this is a fraught path before they go too far..  

> *Brent Zundel:* Phil-ASU: I agree with Manu. Is this a back door for amending an expiry or revocation? Is there a circumstance where re-=issuing is not viable?.

**Joe Andrieu:** The best example I can think of is if you have a VC that is entered into an official record, but you needed to amend it. You can make a new VC that says I'm amending that thing and enter that into the record..  
… the ability to dispute is much broader. Amending is the same issuer..  
… typos could be an easy amend, MS instead of BS degree. This is an interesting use case because it introduces a new party to the pantheon. not necessarily the issuer, holder, verifier, or even subject. I don't want to advocate for a dispute action, just wanted to point out it is different from amending..  
… It is confusing and we should add language to help that confusion..  

> *Phillip Long:* restricting amending to the original issuer makes sense..

> *Phillip Long:* Anthony Camilleri.

**Manu Sporny:** +1 Joe and Phil. Something came up yesterday in VC-EDU. One of the use cases was they wanted the wallet providers to extend the lifetime of issued credentials. The VC would be issued, then wanted the wallet provider to add something to the diploma that would refresh it for the next 40 years. Maybe we can get the person who spoke about that involved..  

**Kerri Lemoie:** His name was Anthony Camilleri. We should talk to him. This is how they want to make sure the cache hasn't expired. We should talk to them more about it..  

> *Juan Caballero:* new tracking issue.

> *Juan Caballero:* for future use-case.

> *Juan Caballero:* (and Anthony's use case sounds more like `refreshService` than `amend` to me?).

**Kristina Yasuda:** in terms of this issue, could we remove amend claim from the diagram, but add some language about the considerations we've just discussed?.  
… what do we do about this diagram.  

> *Manu Sporny:* +1 to remove, and keep another issue around to document stuff around "amending".

> *Dave Longley:* +1 to remove.

**Joe Andrieu:** I support removing, but we should put a proposal and put it in the minutes. It starts off on the wrong foot because you don't amend data integrity proofs..  

> *Kerri Lemoie:* name from EU Anthony Camilleri: [https://github.com/anthonycamilleri](https://github.com/anthonycamilleri).

**Kristina Yasuda:** any objections to removing, while opening another issue about disputes, etc.?.  

> *Manu Sporny:* +1 to remove and new issue.

**Kristina Yasuda:** I see +1 to remove and no objections..  
… we need multiple issues, for amending, disputing, etc..  

**Manu Sporny:** I'll do amending.  

**Joe Andrieu:** I'll do disputing.  

**Kerri Lemoie:** I'll do the education use case.  

#### 1.5. User Agent not defined (issue vc-use-cases#122)
{: #section1-5}

_See github issue [vc-use-cases#122](https://github.com/w3c/vc-use-cases/issues/122)._

<!-- issue w3c/vc-use-cases/122 -->



**Kristina Yasuda:** things like terminology not defined, should we go one by one?.  

**Joe Andrieu:** are there a bunch of things not defined?.  
… that's in the diagram, but not explained..  
… We could add that to terminology. It's terminology we borrowed from the web..  

> *Juan Caballero:* funny, i was just reading an article about agency being underdefined by robin berjon :D.

**Kristina Yasuda:** I think basic definitions would work..  

**Joe Andrieu:** assign that to me.  

**Kristina Yasuda:** skipping typo..  

#### 1.6. update diagrams (issue vc-use-cases#109)
{: #section1-6}

_See github issue [vc-use-cases#109](https://github.com/w3c/vc-use-cases/issues/109)._

<!-- issue w3c/vc-use-cases/109 -->



**Kristina Yasuda:** which diagram does this involve?.  
… the needs map..  
… in section 3? user needs?.  

**Joe Andrieu:** not sure what needs to be updated there..  
… if that diagram is out of sync with the following text, but it looks like a general review.  

**Kristina Yasuda:** this is from 2019.  

**Joe Andrieu:** not clear if this identifies specific issues..  

**Kristina Yasuda:** do we need to update or can we close?.  

**Joe Andrieu:** let's mark pending close and ask Matt.  

**Kristina Yasuda:** I'll mark pending close.  

**Manu Sporny:** just cross linking to the terminology discussions, but I'm fine with this being closed..  
… we're talking terminology in the main use case.  

**Kristina Yasuda:** maybe we need an issue to align terminology.  

**Manu Sporny:** unless this is actionable, we should close it.  
… an open issue to always keep the terminology in sync will never close.  

> *Manu Sporny:* +1 to depending on Kevin, rather than a Github issue :P.

**Joe Andrieu:** Kevin has been closely reviewing the Use Cases document and I think we'll catch things..  

**Kristina Yasuda:** let's close it in a week or so.  

#### 1.7. Review Editor/Author section (issue vc-use-cases#107)
{: #section1-7}

_See github issue [vc-use-cases#107](https://github.com/w3c/vc-use-cases/issues/107)._

<!-- issue w3c/vc-use-cases/107 -->



**Kristina Yasuda:** Is this outdated?.  
… need to review editor author section?.  

**Joe Andrieu:** I don't think it is. As opposed to how we handle the normative specs, who should be an editor or author, this is somewhat leftover. I don't have a good sense of how we should change this..  
… the new version editors is just Kevin and me.  
… I defer toManu for how to clean it up.  

**Manu Sporny:** we have people on here who haven't been involved in years. We can add the version they worked on next to their names..  
… I need to change the respec so we can list all the people who have been involved without it taking up a whole page..  
… It is important to acknowledge all of the people who have contributed, but it should be easier to read..  

**Kristina Yasuda:** can I assign you?.  

**Manu Sporny:** yes, I have a similar action on vc data model.  

**Kristina Yasuda:** Joe, can you give a quick look to see if any of these should be discussed, or we can shift to other doc?.  

> *Kristina Yasuda:* [https://github.com/w3c/vc-use-cases/issues](https://github.com/w3c/vc-use-cases/issues).

**Kristina Yasuda:** people, take a look at the issues to see if there's anything folks want to talk about.  

**Manu Sporny:** we have a number of VC systems going into production, it would be good to list them in the use cases doc..  
… whatever public gossip we can talk about.  

**Joe Andrieu:** we are going to put out a call for input, new short use cases, extant use cases.  
… we do want to have a section that is current uses of VCs. It will be short. a way to look at signals of market adoption for the technology.  

**Kristina Yasuda:** that sounds like a great next step.  

**Joe Andrieu:** not sure how much time is set aside in the F2F, but the call will probably go out after that..  

**Kristina Yasuda:** we can take some time during F2F.  
… and mark some issues as pending close if they are outdated.  

### 2. Implementation Guide.
{: #section2}

> *Kristina Yasuda:* [https://github.com/w3c/vc-imp-guide/issues](https://github.com/w3c/vc-imp-guide/issues).

**Kristina Yasuda:** Manu, there are 4 issues from May 2022, will you go through those?.  

**Manu Sporny:** yes.  
… just as a heads up, the implementation guide has typically been the place where we put things that are important for implementors to know, or where we put disagreements..  
… we ask each side to write up an opinion and put those side by side..  
… it's een a good way to handle disagreements in the past.  

#### 2.1. Be suspicious of QR Code flows that don't also check digital signatures at some point (issue vc-imp-guide#67)
{: #section2-1}

_See github issue [vc-imp-guide#67](https://github.com/w3c/vc-imp-guide/issues/67)._

<!-- issue w3c/vc-imp-guide/67 -->



**Manu Sporny:** this issue has to do with a compromise with Australia's digital drivers license. The app wasn't even checking the digital signature.  
… the app was showing a QR code that wasn't signed. This was to add language to say make sure you've actually checked a digital signature..  
… next steps here is pretty straightforward - add guidance to actually check digital signatures..  

**Kristina Yasuda:** that Australia implementation made some waves, it would be good to add this..  

> *Phillip Long:* Isn't best practice the QR code should have a signature?.

> *Manu Sporny:* Yes, but it's more difficult to do than it sounds :).

#### 2.2. Verifiers MUST NOT trust visual indicators on apps they do not control (issue vc-imp-guide#66)
{: #section2-2}

_See github issue [vc-imp-guide#66](https://github.com/w3c/vc-imp-guide/issues/66)._

<!-- issue w3c/vc-imp-guide/66 -->



**Kristina Yasuda:** verifier must not trust indicators on apps they do not control.  

**Manu Sporny:** people were being trained to look for visual indicators that the proper app was being used..  
… it's fairly easy to throw an app together that looks right..  
… we should say - do not look for indicators in the application that the proper app is being used. This should be used in conjunction with other checks..  

> *Juan Caballero:* `@orie` i think you mixed up your [] and () in that demo link.

**Manu Sporny:** digital signatures really should always be checked..  

**Kristina Yasuda:** what are the visual indicators?.  

**Manu Sporny:** those could be a tilt sensor that produces a hologram. but given enough time and money you can recreate that..  
… we want people to think that as long as the biometric is being checked you need to make sure you received that portrait inside of a secured mechanism.  
… can't just receive the payload..  

**Kristina Yasuda:** what is the line between vc data model security considerations and this?.  

**Manu Sporny:** this is at the application layer. the data model should support these mechanisms, but this is many layers above..  
… physical systems that protect the interaction is what moves it into the implementation guide..  

> *Kristina Yasuda:* there is disputes section in the imp-guide btw.. [https://www.w3.org/TR/vc-imp-guide/#disputes](https://www.w3.org/TR/vc-imp-guide/#disputes).

**Manu Sporny:** it is a but of a gray area..  

**Kristina Yasuda:** would be good to have a security section in the implementation guide.  

**Manu Sporny:** +1.  

> *Phillip Long:* +1 security implications in the implementation guide.

#### 2.3. Ensure that credential storage should be encrypted using strong entropy sources (issue vc-imp-guide#65)
{: #section2-3}

_See github issue [vc-imp-guide#65](https://github.com/w3c/vc-imp-guide/issues/65)._

<!-- issue w3c/vc-imp-guide/65 -->



**Kristina Yasuda:** related to another issue, make sure credential storage is encrypted using entropy from strong sources..  

> *Kristina Yasuda:* +1 to "security implications" term.

**Manu Sporny:** one of the reasons compromise of the Australian DL was possible, they were just using a 4 digit pin to encrypt the data in the app. decryption was easy so modification was easy. they legitimate app could be made to show whatever the attackers wanted..  
… this would be implementation guidance for wallet vendors to not do that..  
… 256 bit key vs 4 digit pin.  
… apps need to be protected in legit ways.  

**Steve McCown:** I have a lot of background in this area. Manu, you mention something. I wonder what the solution is. We shouldn't train people to look for indicators inside the app..  
… form an ordinary user perspective, what should they look for. they open their app and open a credential fro the government. Everything that displays on the screen can be forged, what can they do instead?.  

**Manu Sporny:** we don't have a complete answer. It depends on the use. If the individual is working for an organisation and their job is to receive credentials, they need to always use the proper app. In a retail environment, trust the PoS system, not the thing the customer has. In theory your app is trusted..  
… the other question is harder, how can you know the app itself can be trusted? Ifs the app store trustable? Is there some supply chain integrity controls?.  

> *Dave Longley:* +1 ... you have to use your own trusted apps and devices -- never rely on someone else's ... establishing trust in your own apps and devices is a harder problem..

**Manu Sporny:** that is a much harder problem..  
… we are depending on the people checking the credentials to determine legitimacy.  
… not the users.  

**Steve McCown:** I volunteer to help write those things up.  
… This issue is going to get bigger. the EU has sued apple to allow alternative app stores..  
… all of the goodness of android may be coming to apple..  
… I can also hold private keys outside of an enclave. We are moving into a world where it is fairly reasonable to download the government app for the vetted app store, but that might be harder moving forward..  
… what is the average user to do. what can we tell them?.  

**Kristina Yasuda:** we are a bit over time. This is what is happening in Use cases and Implementation Guide. Please go through these before the face to face..  
… please review the holder binding PRs..  
… see everyone tomorrow tomorrow at this same time..  

---
