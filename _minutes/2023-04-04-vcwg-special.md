---
layout: minutes
date: 2023-04-04
title: Verifiable Credentials Working Group Special Topic Call on issue/PR updates — 2023-04-04
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-04-04-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on issue/PR updates — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on issue/PR updates",
        "dateCreated": "2023-04-04",
        "irc": "vcwg-special",
        "datePublished": "2023-04-04",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on issue/PR updates",
            "startDate": "2023-04-04",
            "endDate": "2023-04-04",
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
                    "name": "Brent Zundel"
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
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
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Paul Dietrich"
                },
                {
                    "@type": "Person",
                    "name": "Kerri Lemoie"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Oliver Terbu"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Steve McCown"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on issue/PR updates — Minutes
{: .no_toc}



**Date:** 2023-04-04

See also the [Agenda](https://www.w3.org/events/meetings/e88d30bd-4099-49d1-b769-1d8cd39a1b28/20230404T110000) and the [IRC Log](https://www.w3.org/2023/04/04-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ivan Herman, Brent Zundel, Shigeya Suzuki, Kristina Yasuda, David Chadwick, Markus Sabadello, Ted Thibodeau Jr., Phillip Long, Dave Longley, Joe Andrieu, Manu Sporny, Will Abramson, Dmitri Zagidulin, Michael Jones, Paul Dietrich, Kerri Lemoie, Kaliya Young, David Lehn, Oliver Terbu, Gabe Cohen, Steve McCown, Orie Steele

**Regrets:** Kevin Griffin

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** Markus Sabadello

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. Issue assigning.
{: #section1}

> *Kristina Yasuda:* [https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc+no%3Aassignee](https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc+no%3Aassignee).

**Kristina Yasuda:** We have 57 open issues that are not assigned to anyone..  
… Some of the issues have the "conversation" label..  
… Brent and I have discussed after feature freeze we do issue triaging to assign people to do PRs..  
… So we have a clear picture of what will go into VCDM spec before CR..  

**Brent Zundel:** Being assigned to an issue doesn't necessarily mean that you are the one who has to do a PR. It just means you care enough that you will make sure it gets resolved. This may involve talking to other people, iterating, etc..  
… Please volunteer to be assigned issues that you care about..  
… Issues that aren't assigned to anyone may not get addressed in v2..  
… If you feel something needs to get done in v2, please volunteer to get assigned..  
… If you don't have Github experience, you can ask to be assigned and then reached out to chairs and editors for help..  

**Manu Sporny:** To add to this, the editors at this point have packed work queues. We are at capacity on work that we think we can do during this WG..  
… The group has pulled in quite a bit of work, because of this the editors' work queues are full. There may be a handful of issues that they can take on, but the group should consider that other issues will not be handled by editors..  
… If people in the group think that editors will pick up non-assigned issues, then this is not a safe assumption to make..  
… Likely the editors won't be able to..  

#### 1.1. Holder-Binding: Needs Privacy & Correlation, Centralization/Lock-in Considerations (issue vc-data-model#988)
{: #section1-1}

_See github issue [vc-data-model#988](https://github.com/w3c/vc-data-model/issues/988)._

<!-- issue w3c/vc-data-model/988 -->



**Kristina Yasuda:** This is about holder binding and correlation..  
… Anyone who wants to be assigned to this one?.  

#### 1.2. Verifier Role Confusion (issue vc-data-model#984)
{: #section1-2}

_See github issue [vc-data-model#984](https://github.com/w3c/vc-data-model/issues/984)._

<!-- issue w3c/vc-data-model/984 -->



**Kristina Yasuda:** By Michael Herman. No comments on this issue. Anyone willing to sign up for it?.  

#### 1.3. nonTransferable Property questions (issue vc-data-model#960)
{: #section1-3}

_See github issue [vc-data-model#960](https://github.com/w3c/vc-data-model/issues/960)._

<!-- issue w3c/vc-data-model/960 -->



**Kristina Yasuda:** This is about nonTransferable property. Some discussion on the issue. Anyone willing to be assigned to it?.  

**David Chadwick:** I am willing.  

**Kristina Yasuda:** Thank you David.  

#### 1.4. `proof` in `@context` and the use of `@container` (issue vc-data-model#881)
{: #section1-4}

_See github issue [vc-data-model#881](https://github.com/w3c/vc-data-model/issues/881)._

<!-- issue w3c/vc-data-model/881 -->



**Kristina Yasuda:** By Orie. Long interaction between Orie, Dave, Manu, others..  

**Dave Longley:** We could ask Orie if we can close this issue, if it's all done..  

**Brent Zundel:** Will add that.  

#### 1.5. Include a regex for XML Date Time in the next version of the standard. (issue vc-data-model#846)
{: #section1-5}

_See github issue [vc-data-model#846](https://github.com/w3c/vc-data-model/issues/846)._

<!-- issue w3c/vc-data-model/846 -->



**Kristina Yasuda:** About regex for XML Date Time..  

**Manu Sporny:** I'll take this one.  
… We will provide a regex for XML Date Time that exists in the spec, but we will mandate time zone..  
… This has come up in implementations..  

**Ivan Herman:** Manu, didn't we have that in the DID spec?.  

**Manu Sporny:** Not sure if we had a regex for this in DID Core. If we did, it needs to be updated to include the time zone..  

#### 1.6. IEEE Ontology Standards Working Group Credential Example (issue vc-data-model#963)
{: #section1-6}

_See github issue [vc-data-model#963](https://github.com/w3c/vc-data-model/issues/963)._

<!-- issue w3c/vc-data-model/963 -->



**Kristina Yasuda:** About IEEE Ontology Standards. I think we need Orie to see if he would volunteer..  

#### 1.7. Zero-knowledge packed binary data format (issue vc-data-model#949)
{: #section1-7}

_See github issue [vc-data-model#949](https://github.com/w3c/vc-data-model/issues/949)._

<!-- issue w3c/vc-data-model/949 -->



**Kristina Yasuda:** About ZK binary data format. No response on the issue..  

**Brent Zundel:** I'll take this one.  

**Kristina Yasuda:** Thanks Brent..  

**Brent Zundel:** I'll try to answer this question, and that the answer to the question will not be found in the core data model..  

#### 1.8. Indicating Encrypted VCs in VPs (issue vc-data-model#938)
{: #section1-8}

_See github issue [vc-data-model#938](https://github.com/w3c/vc-data-model/issues/938)._

<!-- issue w3c/vc-data-model/938 -->



**Kristina Yasuda:** About encrypted VCs. By DavidC. Anyone willing to take this?.  

**David Chadwick:** If no one else is interested, I'll take it on. But it would be good if someone else is also interested..  

**Brent Zundel:** If there is no consensus, then the goal is to strive for consensus.  

**David Chadwick:** It was in a requirement in a previous project we had..  
… There was a proposal, there is a profile of VCs that had this..  

#### 1.9. Clarifying credential from verifiable credential (issue vc-data-model#1009)
{: #section1-9}

_See github issue [vc-data-model#1009](https://github.com/w3c/vc-data-model/issues/1009)._

<!-- issue w3c/vc-data-model/1009 -->



**Manu Sporny:** I'll take this one. We need to do a pass through the specification..  
… Now an editor needs to make sure we mean "credential" or "verifiable credential" appropriately. This is ready for PR. My expectation is we will largely refer to "verifiable credential" in the specification, since that's what the media type is about..  

**Kristina Yasuda:** Can I help you with that?.  

**Manu Sporny:** Absolutely..  
… DavidC I'll add you too.  

**David Chadwick:** Thanks.  

#### 1.10. `termsOfUse` is insufficiently specified (issue vc-data-model#1010)
{: #section1-10}

_See github issue [vc-data-model#1010](https://github.com/w3c/vc-data-model/issues/1010)._

<!-- issue w3c/vc-data-model/1010 -->



**Kristina Yasuda:** About termsOfUse. Any volunteers?.  

> *Markus Sabadello:* Phil-ASU: I'm interested in this. Statement of interest by the individual that the credential should be used in a particular way. This is a clear indiciation to the receiving person. If they choose to not follow that, it could invoke a governance process to deal with a violation..

**David Chadwick:** I'm interested in this. We are already using this in real life..  
… Tangentially this is related to nonTransferable we discussed earlier..  

**Kristina Yasuda:** Do you both want to be assigned?.  

> *Markus Sabadello:* Phil-ASU: Yes, both is good..

> *Kerri Lemoie:* In what order are we sorting the list as we go through them?.

> *Ted Thibodeau Jr.:* Kerri_Lemoie -- least-recently-updated. see [https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc+no%3Aassignee](https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc+no%3Aassignee).

> *Kerri Lemoie:* Thanks @TallTed.

#### 1.11. Breaking changes to IRIs in JSON-LD Context (issue vc-data-model#1007)
{: #section1-11}

_See github issue [vc-data-model#1007](https://github.com/w3c/vc-data-model/issues/1007)._

<!-- issue w3c/vc-data-model/1007 -->



**Kristina Yasuda:** By Orie, about breaking changes in IRIs..  

**Manu Sporny:** I'm going to try to close this. The VCWG will not break existing vocabularies. I will mark this issue "pending close", and people who want breaking changes can object and try to keep it open..  

**Kristina Yasuda:** Orie do you want to speak to this?.  

**Orie Steele:** I will leave comments on the issue..  

#### 1.12. Improve tests for Evidence (issue vc-data-model#870)
{: #section1-12}

_See github issue [vc-data-model#870](https://github.com/w3c/vc-data-model/issues/870)._

<!-- issue w3c/vc-data-model/870 -->



**Kristina Yasuda:** By Orie, about evidence. Anyone willing to take this one?.  
… To those who joined late, this call is about assigning issues that are not currently assigned. It means you are responsible that the issue gets addressed..  

> *Oliver Terbu:* +1 ivan.

**Ivan Herman:** I don't really understand.. The title says you have to improve tests, which suggests this is about tests, not the spec. The text talks about better defining the property or removing it. What is this about? Question is to Orie..  

**Orie Steele:** I believe we had the spectre of objections in the context of our RDF terms for which there have been no implementation. I believe "evidence" is one of them. In order to retain this in the core spec, this was the original intention of the issue. As far as I am aware, we have not provided any concrete examples of using the "evidence" property..  
… I think DavidC is the furthest toward a concrete example. If we have multiple concrete implementations, this is the testing we should have to retain the property..  

**Ivan Herman:** I understand. I suggest we postpone this to when we get to CR exit criteria. We have to say what it means for a property to pass the CR line. The issue wasn't clear from the description..  

**David Chadwick:** Part of the NGI Atlantic project, we did a simple example which referred to NIST and eIDAS levels of assurance. There would have been two independent implementations, but the project ran out of time..  

**Oliver Terbu:** To proceed with this issue, does somebody have to register an "evidence" type in the directory, and then write a test that uses this "evidence" type? Implementers don't need to anything, but they should not fail if they encounter an "evidence" property of this specific type, is this correct?.  

**David Chadwick:** This is a discussion we had with termsOfUse and nonTransferable, whether these properties can be ignored by recipients. I think DavidC added something to this discussion..  

**Oliver Terbu:** Whoever gets assigned to this issue, should be someone who knows an "evidence" type that is used somewhere, and it should be registered in the VC directory. Does this make sense?.  

**Dave Longley:** Trying to respond to ignoring extension points. This was certainly the intention..  

**Kerri Lemoie:** We have OpenBadges 2.0 use "evidence". I will share a link..  

> *Kerri Lemoie:* See [Open badges reference](https://1edtech.github.io/openbadges-specification/ob_v3p0.html#evidence).

**Kerri Lemoie:** It's a bit confusing, because they are using the "evidence" property from the VC spec, but they are using it in their own way with their own properties. This is important for EDU community, but they have their own testing. There is overlap, not sure what to do with it. I don't know if we can test it if they already test it in their own way..  

> *Dave Longley:* +1 to you must be able to ignore unrecognized terms.

**Michael Jones:** It's not a question whether they can ignore "evidence". They must be able to ignore it. In our test suite we should inject random elements and ensure that implementations don't fail if they encounter them..  

**Kristina Yasuda:** Anyone willing to be assigned to this issue?.  

**Oliver Terbu:** You can assign me to find out what actually needs to be done, if anything needs to be changed in the test suite..  

> *Kerri Lemoie:* oliver - feel free to reach out if you want insights into Open Badges.

#### 1.13. Describe SD-JWT as an alternative for selective disclosure (issue vc-data-model#908)
{: #section1-13}

_See github issue [vc-data-model#908](https://github.com/w3c/vc-data-model/issues/908)._

<!-- issue w3c/vc-data-model/908 -->



**Kristina Yasuda:** About SD-JWT. Some back and forth between me and Sebastian..  
… Anyone willing to be assigned to this one?.  

**Brent Zundel:** Since David has opened another issue, should we just close this issue?.  

**David Chadwick:** I think this should be closed, because this is stale. The later issue is more up-to-date. We should close and refer..  

**Brent Zundel:** In general it would be best practice to change the title of an existing issue to reflect the state of a conversation, instead of creating a new separate issue..  

**Kristina Yasuda:** I don't think this is stale. Last comment was in January..  
… Assigning both issues to me..  

#### 1.14. Create the new role of issuee (issue vc-data-model#942)
{: #section1-14}

_See github issue [vc-data-model#942](https://github.com/w3c/vc-data-model/issues/942)._

<!-- issue w3c/vc-data-model/942 -->



**Kristina Yasuda:** By DavidC. Anyone willing to take this one?.  

**David Chadwick:** I don't think holder binding solves this issue, because holder binding is part of credential subject. My issue is about the "issuee"..  
… An issuer should be able to say who he issued the credential to, if it's not the subject..  

**Oliver Terbu:** We definitely need to revisit this and compare it, and find out if the current proposal works for the issue. In that case we should get more clarity on the use case, otherwise the need for the new property isn't clear..  
… You can assign me, and I will find out.  

#### 1.15. In Example 1, `value` and `lang` are not aliased to `@value` and `@language` (issue vc-data-model#967)
{: #section1-15}

_See github issue [vc-data-model#967](https://github.com/w3c/vc-data-model/issues/967)._

<!-- issue w3c/vc-data-model/967 -->



**Kristina Yasuda:** About Example 1. Manu did you just assign yourself?.  

**Manu Sporny:** Yes.  

#### 1.16. add claims metadata (how the identity claims were assured and how they are maintained) (issue vc-data-model#893)
{: #section1-16}

_See github issue [vc-data-model#893](https://github.com/w3c/vc-data-model/issues/893)._

<!-- issue w3c/vc-data-model/893 -->



**Kristina Yasuda:** About claims metadata. I think it can probably be closed..  
… Any objections to closing this one?.  

#### 1.17. Clarification needed on the ease of deducing that a subject is the holder. (issue vc-data-model#959)
{: #section1-17}

_See github issue [vc-data-model#959](https://github.com/w3c/vc-data-model/issues/959)._

<!-- issue w3c/vc-data-model/959 -->



**Kristina Yasuda:** About clarification on subject and holder. Last comment was to move this to Implementer's Guide. Any objections to doing that?.  

**Orie Steele:** I noticed that in the context definition for VC, "holder" is defined, and I wanted to share that. It seemed odd to me that a VC would have a "holder" property in the context but no indication or examples in the spec text that this is legal..  

> *Orie Steele:* [https://github.com/w3c/vc-data-model/blob/main/contexts/credentials/v2#L36](https://github.com/w3c/vc-data-model/blob/main/contexts/credentials/v2#L36).

**Orie Steele:** It raises questions about the "holder" property and holder binding..  
… The "holder" property should be removed from VC, or the spec should comment on when it is appropriate to do that..  

**David Chadwick:** My opinion is there should be no "holder" property. We don't know who the holder is, that's the point of VCs. You can have "issuee", but that's only a holder temporarily..  

> *Orie Steele:* I agree with David, I don't understand why holder property in the v2 context, as a property of VerifiableCredential.

**David Chadwick:** As issuer I give the VC to an issuee, but don't know what happens afterwards..  

**Manu Sporny:** +1 to what Orie said, +1 to some of what DavidC said.  
… I think originally this was meant VP and it may have accidentally slipped into VC..  

> *Dave Longley:* +1 to manu.

**Manu Sporny:** +1 to removing it from VC.  

> *Markus Sabadello:* +1, this is my understanding too.

**Oliver Terbu:** (withdraw my comment).  

**Kristina Yasuda:** Anyone willing to volunteer for it?.  

**Orie Steele:** I'm almost done with a PR..  

**Kristina Yasuda:** Will assign you for now, thank you Orie..  

> *Orie Steele:* PR is up: [https://github.com/w3c/vc-data-model/pull/1076](https://github.com/w3c/vc-data-model/pull/1076).

**Ivan Herman:** If we do that, then we also have to remove it from official vocabulary document. It's defined as a term. Or we have to deprecate it. This is okay, we can do it, but shouldn't forget..  

> *Orie Steele:* yes, [https://www.w3.org/2018/credentials/#holder](https://www.w3.org/2018/credentials/#holder).

> *Orie Steele:* domain says: "Union of: cred:VerifiableCredential cred:VerifiablePresentation".

**Oliver Terbu:** Did we really define "holder" for VC?.  

**Ivan Herman:** It's certainly in the vocabulary.  

> *Manu Sporny:* The reference is here: [https://w3c.github.io/vc-data-model/#presentations-0](https://w3c.github.io/vc-data-model/#presentations-0).

**Oliver Terbu:** But is it in the VCDM spec? Is there a normative reference? I couldn't find any such reference..  

> *Orie Steele:* oliver AFAIK, no... holder only shows up in VP section, and is optional.

**Oliver Terbu:** That's not normative..  

**Manu Sporny:** Right, there was an expectation that it might become normative. So we put it in the JSON-LD context..  
… ivan, because it's defined in core spec, I think we should not remove it.  

**Ivan Herman:** I said deprecated.  

**Manu Sporny:** It shouldn't be deprecated either, it can be in VP..  
… We're talking about holder in VC, not about removing holder from VP..  

**Ivan Herman:** So we have to look at the domain..  

**Manu Sporny:** Exactly.  

**Ivan Herman:** Ok, I will do it.  

#### 1.18. Continuing tomorrow....
{: #section1-18}

**Kristina Yasuda:** Thank you all, see you tomorrow at the main VCWG call..  

> *Kristina Yasuda:* [https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc+no%3Aassignee](https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc+no%3Aassignee).

---
