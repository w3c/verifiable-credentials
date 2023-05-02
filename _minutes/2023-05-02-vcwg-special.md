---
layout: minutes
date: 2023-05-02
title: Verifiable Credentials Working Group Special Topic Call on Open Reserved Properties — 2023-05-02
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-05-02-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Open Reserved Properties — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Open Reserved Properties",
        "dateCreated": "2023-05-02",
        "irc": "vcwg-special",
        "datePublished": "2023-05-02",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Open Reserved Properties",
            "startDate": "2023-05-02",
            "endDate": "2023-05-02",
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
                            "name": "Joe Andrieu"
                        },
                        {
                            "@type": "Person",
                            "name": "Dave Longley"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "PDL ASU"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Ivan Herman"
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
                    "name": "Michael Prorock"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "olvier"
                },
                {
                    "@type": "Person",
                    "name": "Brent Zundel"
                },
                {
                    "@type": "Person",
                    "name": "Markus Sabadello"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Oliver Terbu"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "pdl ASU"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Open Reserved Properties — Minutes
{: .no_toc}



**Date:** 2023-05-02

See also the [Agenda](https://www.w3.org/events/meetings/e88d30bd-4099-49d1-b769-1d8cd39a1b28/20230502T110000) and the [IRC Log](https://www.w3.org/2023/05/02-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** PDL ASU, David Chadwick, Ivan Herman, Shigeya Suzuki, Hiroyuki Sano, Michael Prorock, Kristina Yasuda, Kaliya Young, Michael Jones, olvier, Brent Zundel, Dave Longley, Markus Sabadello, Andres Uribe, Phillip Long, Joe Andrieu, Oliver Terbu, Will Abramson, pdl ASU, Dmitri Zagidulin, Ted Thibodeau Jr.

**Regrets:** 

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** Joe Andrieu, Dave Longley

## Content:
{: .no_toc}

* TOC
{:toc}
---



**Kristina Yasuda:** today's topic confirmationMethod.  
… any introductions?  

**Hiroyuki Sano:** relative new member. now catching up to the discussion.  

**Kristina Yasuda:** Oliver, how would you like to lead?  


### 1. Holder binding (or whatever the name will be).
{: #section1}

**Kristina Yasuda:** how would you like to start Oliver?  

**Oliver Terbu:** Hello everybody.  
… lots of people on the call who contributed to the conversation.  
… We have a number of issues related to holder binding.  
… new roles like issuee and prover.  
… and issues related to confirmationMethod.  
… IMO, these three things are orthogonal to each other, so lets discuss them individually.  
… I don't see it as a gordian knot as mentioned on github.  
… So let's focus on one issue at a time.  
… proposal is that issuee and prover would become metadata.  

> *David Chadwick:* +1 to them being orthogonal.

**Oliver Terbu:** VC metadata.  
… Issuee and prover as VC metadata, then we could still add confirmationMethod to those properties in the same way we propose confirmationMethod.  
… we have a pending PR 1054.  
… A lot of people contributed to the discussion. Lots of good stuff. Lots of approvals.  
… most controversial is the name.  
… confidenceMethod could be an alternative.  
… we could debate that or talk about the general approach.  

**Kristina Yasuda:** there are two request for changes on the PR.  
… one from Manu.  
… one from Dave.  
… Dave is disagreeing with name.  
… Anyone else who disagrees with the approach?  
… is this a matter of formal objection to you Dave?  

**Dave Longley:** Not sure I understood the question.  
… Ted T also objected on the thread.  
… I would love for us to talk through this and get the technical arguments out there.  
… In that thread, a number of issues were raised, using "confirmationMethod" as an expression point that can be used to increase the verifiers confidence that an identifier in a VC refers to the same entity the issuer intend to refer to or that it refers to the presenter of the credential.  
… Issuers make VCs about something. Verifiers want to be assured the understand it to be about the same entity.  
… common use case: whoever is presenting is the thing the identifier references.  
… That particular case is the traditional holder binding question.  

> *David Chadwick:* it is not only identifiers, but also other properties (or sets of them).

**Dave Longley:** Some of the objections raised: there's already confirmation language in the claims ecosystem that is about the veracity of claims.  
… this will likely cause confusion.  
… In 1.0 we went to great trouble to communicate that we don't have a feature of VCs to verify truth.  
… Other confirmation use in the space, like JWT's, is about proof of possessions of cryptographic material.  
… This is similar to, but not the same thing intended here.  
… So there may be use cases that map to this, but it doesn't map to the general use here, such as biometrics.  
… The JWT confirmation doesn't allow multiple keys.  
… So if we want this to be able to map, we should be careful about this specific case.  
… Finally, we can't use this property to confirm that the presenter *IS* the subject, just that we can increase confidence in that belief.  
… They can confirm proof use, but they are not proving this generalized feature.  

**Kristina Yasuda:** is there a middle ground between the two names? confidence v confirmation.  

**Kristina Yasuda:** let's timebox this for 10-15 minutes.  

**Oliver Terbu:** Wondering why confirmation cannot be used. Why is confidence is the better term? Thanks to Dave, I can see the difference.  
… I agree. What if we prefix it as subjectConfirmationMethod?  
… The other point Dave made. I agree.  
… maybe renaming with subject as prefix?  

> *David Chadwick:* -1 to subjectConfirmationMethod since this no longer makes it generic for issuee or prover.

**Michael Jones:** part of why I'm here is to try to have VCs fit into the rest of the identity ecosystem well.  

> *Kristina Yasuda:* proposed compromise: HolderConfirmationMethod or SubjectConfirmationMethod.

**Michael Jones:** in this case, there is already an established term for this, e.g., the JWT confirmation claim.  
… it can be used for keys but also other types of confirmation.  

> *Kristina Yasuda:* DavidC, I think the scope of this confirmation work was only for holder/subject?

**Michael Jones:** SAML also had a confirmation method, it could be a key, an IP address, or other things.  
… So you could put biometrics in there. You could use whatever kind of confirmation you want.  

> *Michael Prorock:* +1.

**Michael Jones:** I think we run afoul of the greater industry if we use a different term.  
… that's a disfunction we should avoid.  
… I support Dave Longley's point that you can't confirm the truth of claims.  
… Noone is saying that.  
… The recipient always has to make a trust decision based on whatever information they have available.  
… not prefixing it or changing it to something else.  

**Dave Longley:** speaking to Oliver's question about prefixing. I think adding those prefixes probably limits the general utility and might lead to a proliferation of terms that link to the same types of things.  
… Regarding reuse of confirmation method because its an industry term:.  

> *David Chadwick:* kristina, Oliver started this discussion by saying the other issues were orthogonal because the confirmationMethod could be used by issuee and provier (if they are added).

**Dave Longley:** current industry usage: my understanding was that those approaches were a subset of what we are trying to cover.  
… I don't know that the confirmation method was intended to be, but reading the RFCs, I don't see that.  
… There is also other use in the industry that are at odds.  
… Sometimes it is harmful for us to take terminology for other use cases (two party models) and apply that to three party models.  
… that leads to confusion and problems.  

> *Ted Thibodeau Jr.:* +1 misalignment between 2-party and 3-party model-focused terms.

**Dave Longley:** One way to resolve that is to have confidenceMethods, within which we can have confirmationMethods that map to industry terms.  

**Kristina Yasuda:** looks like there's nothing normative in the PR tying this property to confirmation in the IETF RFC 7800.  

**Michael Jones:** to Dave's point about whether confirmationMethod is broad enough.  
… as I pointed out both the SAML and JWT properties are extensible by design.  

> *Dave Longley:* "The "cnf" claim value MUST represent only a single proof-of-possession key; thus, at most one of the "jwk", "jwe", and "jku" (JWK Set URL) confirmation values defined below may be present. Note that if an application needs to represent multiple proof-of-possession keys in the same JWT, one way for it to achieve this is to use other claim names, in addition to "cnf", to hold the additional proof-of-possession key information." <-- the RFC recommends using other names: https://www.rfc-editor.org/rfc/rfc7800.html

**Michael Jones:** I already cited the example that in SAML you can use an IP address for confirmation.  
… That's kind of on par with using a biometric.  
… So we would be harming ourselves if we invent a different term with the same meaning.  

**Oliver Terbu:** on dlongley's point, in JOSE you can interpret in a three party model.  
… it's not always about an oauth server that issues an access token then a client that accesses a resource service.  
… the cnf claims spec also says that the cnf claim carries confirmation method.  
… There exist other confirmation methods.  

**Joe Andrieu:** I came into this favoring `confirmationMethod` but I find Dave's argument fairly compelling. One of the reasons we came into the this work is around flawed mental models in the ID industry. Those flaws result in things that don't solve the problems right.  
… I think this distinction between increasing confidence vs. confirmation truth is important and confidence maps more closely to what people are trying to do.  

> *David Chadwick:* what about bindingMethod.

> *Dmitri Zagidulin:* +1, I agree w/ Joe's & Dave's points.

> *Ted Thibodeau Jr.:* Also from [https://www.rfc-editor.org/rfc/rfc7800.html](https://www.rfc-editor.org/rfc/rfc7800.html) "Another means used by some applications to identify the presenter is an explicit claim, such as the "azp" (authorized party) claim defined by OpenID Connect [OpenID.Core]. Ultimately, the means of identifying the presenter is application specific, as is the means of confirming possession of the key that is communicated.".

**Kristina Yasuda:** can we replace the name for the moment, as a TBD?  

**Michael Jones:** Nothing is said in anything about confirming claims.  
… I don't know what Dave is referring to.  

> *Oliver Terbu:* +1 mike.

> *Dmitri Zagidulin:* it's not that there was literature, it's that there's a common confusion about it.

**Ted Thibodeau Jr.:** I have problems with the idea that we cannot mint our own terms for things that are appropriate to the stuff we are specifying.  
… I don't care about what previous groups did, except where it is exactly what we are doing.  
… Just looking at the cnf discussion in the JWT RFC.  
… It says lots of stuff, including other terms that are similar, but not the same.  
… There's no reason we shouldn't have our own term for things that are, not the same.  
… This started out as "holder binding".  
… I've had issues with that since it was first brought upt.  
… VCs are not bound to a holder or subject. They are not BOUND to anything.  
… It may include statements about the issuee or the authorized holder.  
… It seems that only JOE is the authorized presenter.  
… Why don't we use that term authorizedPresenter.  

> *Kristina Yasuda:* but there is nothing normative in this PR related to the cnf method in rfc 7800.

> *Phillip Long:* I think it's important that the language we adopt is broadly understood, rather than understood by a group that has been working in this space for some. Hence, +1 to Dmitri's comment, and +1 TallTed's suggestion.

**Ted Thibodeau Jr.:** I prefer confidenceMethod.  
… confirmation has definiteness and confidence is less definite.  

**Joe Andrieu:** I just want to respond to Mike's comments. I don't think Dave or I are talking about the veracity of the claims -- Dave mentioned that about confusion. I was talking about what do you get when you check IP / crypto / etc. all you're doing is confirming the crypto. That's it.  
… There's always a potential misalignment there when keys are stolen or whatever. What you can do is increase confidence, you can't ever confirm.  
… You can't confirm who is presenting the VC is who you think it is, but you can increase your confidence.  

> *Ted Thibodeau Jr.:* +1 Joe's comments.

> *Dave Longley:* +1 to Joe.

**David Chadwick:** when we go back to original definition, it was "holder binding" isn't it.  
… that's what we want. binding. The verifier wants to know if the presenter is the person it was given to.  
… The verifiers want to bind.  

> *Ted Thibodeau Jr.:* it's still not binding.

> *Dave Longley:* +1 to TallTed, you can't "bind" a person like that.

**Kristina Yasuda:** I appreciate the strong opinions. We have nearly 20 PRs open and blocked.  
… can we consider compromises?  

**Oliver Terbu:** what do people think of renaming to confidenceMethod with language explaining its relation to confirmation methods as used in other specs.  

> *Dave Longley:* +1 to Oliver to make it possible to map `cnf` to a subset of confidence methods.

> *Dave Longley:* +1 to Oliver's proposal.

> *pdl ASU:* +1 to confidenceMethod.

**Oliver Terbu:** the proposal is to use confidenceMethod but make it clear that confirmationMethod, cnf, is included in that superset.  

**Michael Prorock:** this is like [xkcd 927](https://xkcd.com/927/) about competing standards.  
… this is a little bit of a trap. we need to be careful with our language. VCs don't verify truth.  
… however, it is increasingly difficult when talking with folks at NIST or people who live in that language, when we have to explain why there is a new term for something similar.  
… JWTs define cnf for confirmation claims. can we improve on that? Yes.  
… What we are doing is similar.  
… So let's call it an expansion of that.  

> *Dave Longley:* +1 to Oliver's proposal because it covers MikeP's point, people interested in `cnf` can just read that section, plus we get improvements.

**Michael Prorock:** I really get concerned from the lack of perfection in our semantics.  
… But the reality is whether it is better language or not, that's not how the rest of the industry works.  
… Let's not let the perfect be the enemy of the good. This is a work in progress.  

> *Ted Thibodeau Jr.:* "By including a "cnf" (confirmation) claim in a JWT, the issuer of the JWT declares that the presenter possesses a particular key and that the recipient can cryptographically confirm that the presenter has possession of that key.".

**Michael Prorock:** cnf is broadly in use. But it's not the end of the world if we have slightly different language, but if we can pick that which aligns, let's try to do that.  

**Kristina Yasuda:** would anyone be opposed to keeping confirmationMethod while we open an issue.  

> *Dave Longley:* let's offer a different propsal, which is oliver's.

**Ted Thibodeau Jr.:** I just pasted from the JWT RFC.  
… with the language of CNF. It is not the vagueness that people are speaking of. It is very specific.  
… it does not say biometrics, IP, or ouiji board.  
… If we are going to use an industry term, we better make sure we are aligned with that term.  
… DavidC, going back to your original language doesn't help us move forward.  
… If you have issue with my word choice, please be explicit and I'll do my best to modify.  
… what is being asked for, was a way to ensure that only explicitly identified parties are authorized/permitted to present a credential.  
… that is not confirmationMethod or even confidenceMethod, even though I like that latter because it can be used more flexibly.  

> *Michael Prorock:* i would like to note that i use of "confirmation" in this case would be a similar extension to cnf as is used elsewhere.

**Dave Longley:** I think we should run something like Oliver's proposal.  
… it gives us a generic name. it solves mprock's problem so we can fit in the CNF relationship. so government folks using it as common. And we can use it as we need to.  
… We should be careful about deferring our decision to memes, as funny as they might be.  

**Michael Jones:** To Ted's point about whether the things are general, there is language in the RFC that says that.  
… if you go to the SAML spec, you will see IP address an other stuff.  

**Kristina Yasuda:** Ok, do we want a proposal or a poll?  

**Brent Zundel:** I'd like a poll first.  

**Kristina Yasuda:** ok, let's try a poll.  

> *Michael Jones:* Yes, cnf applies.

**Oliver Terbu:** Perhaps we have two proposals. First: PR as confirmationMethod with TBD language for renaming.  

> *Ted Thibodeau Jr.:* "The case in which the presenter is the subject of the JWT is analogous to Security Assertion Markup Language (SAML) 2.0 [OASIS.saml-core-2.0-os] SubjectConfirmation usage." *"Analogous"*, not "the same". Also, specifically about when presenter=subject.

> *Kristina Yasuda:* poll: merge PR as-is (confirmation method), while open a PR that we are bikeshedding.

**Oliver Terbu:** Second, find a term that makes most people happy and adapt the language to accomodate IETF.  

> *Dave Longley:* -1 to merge as-is, let's rename and then merge.

> *Oliver Terbu:* +1.

> *Joe Andrieu:* -1.

> *Andres Uribe:* -1.

> *Michael Jones:* +1.

> *Brent Zundel:* +1.

> *David Chadwick:* +1.

> *Michael Prorock:* +1.

> *Ted Thibodeau Jr.:* -1 as dlongley.

> *Shigeya Suzuki:* -1.

> *Phillip Long:* -1.

> *Dmitri Zagidulin:* -0 (there's tended to be more inertia to changing existing).

**Kristina Yasuda:** ok. second poll.  

> *Kristina Yasuda:* poll: renaming to confidenceMethod with language explaining its relation to confirmation methods as used in other specs.

> *Oliver Terbu:* +1.

> *Dave Longley:* +1.

> *Joe Andrieu:* +1.

> *Michael Jones:* -1.

> *Ted Thibodeau Jr.:* merging as-is runs strong risk of sticking, because inertia happens (he typed before seeing dmitriz comment).

> *Phillip Long:* +1.

> *Dmitri Zagidulin:* +1.

> *Andres Uribe:* +1.

> *Will Abramson:* +1.

> *David Chadwick:* 0.

> *Ted Thibodeau Jr.:* +1.

> *Shigeya Suzuki:* 0.

> *Michael Prorock:* -0.

**Kristina Yasuda:** Ok, we have only one minus one. Mike, is this a formal objection matter for you?  

> *Brent Zundel:* +1.

**Michael Jones:** No. I just want what we do to make sense.  

**Michael Prorock:** For the record, I am -0 because I want to see the group move forward. I disagree with the approach, but want us to move forward.  
… we are going to map that directly to cnf, so why not start with that?  

> *David Chadwick:* in ACDC discussion 0's were taken as not-concensus, rather than don't care. We ought to be consistent in what 0 means.

**Michael Prorock:** but I don't want o block on that.  

> **Proposed resolution: rename JWT's 'cnf' claim to Confidence claim :).** *(Dmitri Zagidulin)*
{: .proposed_resolution}

> *Dmitri Zagidulin:* (sorry, not formal proposal).

> *Joe Andrieu:* kristina if we change this to confidenceMethod, does it clear your block, Dave Longley?

**Michael Prorock:** if folks feel strongly, please create a new issue.  
… There is manu's request for changes. Have these been addressed?  
… those changes have been addressed.  

**Ted Thibodeau Jr.:** I can't say if my issues have been address. I need to review the whole thing.  

**Kristina Yasuda:** ok. thank you everyone.  
… two points:.  
… Zoom URL will be new starting next week. Tomorrow is still the MIT one. But from the next will be the new one.  
… second point: we have 20 prs in VC data model and 10 are labelled DO NOT MERGE.  
… This is undesirable. Please consider when you are willing to compromise and when you need to fight.  
… Please be mindful.  
… See you tomorrow!  

---
