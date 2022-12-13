---
layout: minutes
date: 2022-12-13
title: Verifiable Credentials Working Group Special Topic Call on Holder binding — 2022-12-13
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2022-12-13-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Holder binding — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Holder binding",
        "dateCreated": "2022-12-13",
        "irc": "vcwg-special",
        "datePublished": "2022-12-13",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Holder binding",
            "startDate": "2022-12-13",
            "endDate": "2022-12-13",
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
                    "name": "Oliver Terbu"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Ivan Herman"
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
                    "name": "Yan Zhang"
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
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Shawn Butterfield"
                },
                {
                    "@type": "Person",
                    "name": "Brian Richter"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Holder binding — Minutes
{: .no_toc}



**Date:** 2022-12-13

See also the [Agenda](https://www.w3.org/events/meetings/e410bbbd-57c4-46cc-b279-674cc53a58e8/20221213T110000) and the [IRC Log](https://www.w3.org/2022/12/13-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Oliver Terbu, Chris Abernethy, Ivan Herman, Brent Zundel, David Chadwick, Ted Thibodeau Jr., Manu Sporny, Phillip Long, Yan Zhang, Dave Longley, Michael Jones, David Lehn, Joe Andrieu, Shawn Butterfield, Brian Richter, Dmitri Zagidulin, Gabe Cohen

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Manu Sporny, Dave Longley

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. Holder Bindings.
{: #section1}

**Brent Zundel:** Today is holder binding, Oliver, please kick us off..  

> *Brent Zundel:* Holder binding issues: [https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+label%3Aholder-binding](https://github.com/w3c/vc-data-model/issues?q=is%3Aissue+is%3Aopen+label%3Aholder-binding).

**Oliver Terbu:** There was good conversations in Github, number of issues that relate to holder binding, after reading all of issues -- we can make room for holder binding, bikeshed name later..  

> *Oliver Terbu:* [https://github.com/w3c/vc-data-model/issues/789#issuecomment-1348820167](https://github.com/w3c/vc-data-model/issues/789#issuecomment-1348820167).

**Oliver Terbu:** There is a proposal there on how to move forward with the conversation....  
… two proposals, first option is where issuer provides info in VC -- more flexible than nonTransferable -- biometrics, cryptographic id/proof, etc..  
… second option is holder includes additional proofs that link presenter with VC.  
… both options are not mutually exclusive and also think that most people believe that whatever option is selected should be optional. Some concerns about privacy and vendor lock -- we are talking about an optional feature, can discuss that..  
… regarding two options, either issuer provides information, or holder provides information in VP. Option 1 is the more obvious choice and resonated better with VCWG members... we could combine option 1 and 2, but for sake of this discussion, we can focus on option 1..  
… So, issuer puts something into the VC -- if option 1 is the one that we should look at first..  

**Manu Sporny:** +1 Oliver to the framing. I also agree with you that option 1 feels like the more concrete thing we could make progress on today. I also agree with your take on the conversation to date that the group seems to want to do in some capacity..  
… So let's just focus on option 1 today, +1 to that..  
… One of the things I'm struggling with here ... the use cases that apply to option 1 and hearing / documenting / pointing to those would be helpful. Primarily because I don't know if we're talking about the evidence field or something else that does the holder binding..  
… Oliver if you could clarify if this has to do with evidence that would be helpful to me..  

**Oliver Terbu:** This is in issue 789... Manu asked about evidence property..  
… For option 1, we use new binding property, the other one is repurposing evidence, both options are viable, that would be the next question for the group -- does the group feel like defining a new property makes more sense... in my opinion, both are viable... I have a slight tendency to use a new property because it makes things more clear, but then we need to bikeshed the new term. What does the group feel more comfortable with?.  

**Joe Andrieu:** I think we need both options since we created VP, the point of that is to capture semantics of presentation, when stopped by law enforcement and showing DL is lawfully connisant act... presentation semantics are complex and we need a way in presentation what semantics they are using to present that... "is it representing me, my boss, my child, etc."?.  

**David Chadwick:** Regarding option 1, we should talk about semantics -- what do we want it to say, to figure out where it goes in an existing property... termsOfUse or evidence or something else? Let's discuss the semantics before we decide where to place it..  

**Oliver Terbu:** To Joe's point, option 2 requires option 1... for that reason, we should focus on option 1 and then talk about option 2 -- the way I see it, we could combine both options... issuer -- they know entity behind VC, so they need to provide something in VC that says how entity behind VC can be identified... evidence, binding -- VC bound to certain cryptographic identifier, can be a DID and can be different from credential subject ID... credential subject ID is not the right place to look at when verifiers want to find out who the issuer is of the VC..  
… also agree with DavidC, talk about semantics of holder binding, holder binding might not be appropriate term for that... identifierBinding or something else -- holder binding is critical to enable verifier to identify and authenticate an identity -- access management use cases come up here -- who is the legitimate owner of VC?.  
… So, to unlock features in webstore that you're over 18, need proof of control/binding of VC....  

**Ted Thibodeau Jr.:** a few things - this holder binding label must be changed and I think it's much more than bikeshedding in this case. There is implied/inherent functionality of a binding that's not a part of what we're doing..  

> *Dave Longley:* -1 to "binding", +1 to something more like "authentication" or "identity proofing" / "identity assurance" mechanisms / evidence.

**Ted Thibodeau Jr.:** The use cases need to be firmed up sooner than later, to figure out requirements of those use cases... it does not make sense to build functionality and figure out how it satisfies use cases, it'll cause problems for months to years..  

**Joe Andrieu:** I agree, we should find out semantics other than binding so we can have a better name -- many "binding" use cases, I'm going to oppose, because it's about controling flow of information in a decentralized setting..  
… Oliver you said there is no dependency between option 1 and option 2, but I don't see that. Could you explain more? For example, citizenship ID, if you present mother's documents to prove citizenship, there doesn't need to be a binding dependency..  

**Oliver Terbu:** In your concrete use case, Joe, they need to provide VCs that are not about entity that is applying -- in that case, verifier would probably have policy that doesn't require proof of control -- not necessarily something verifier has to always enforce, but necessary to enforce it in other use cases..  
… Just because there is a binding mechanism in the VC, it doesn't have to be enforced in all use cases..  

> *Phillip Long:* Joe are you also considering guardianship examples?.

**Joe Andrieu:** I don't think I would agree with that, but perhaps this is about the term "binding" -- because that means "only bounded person should be able to use this VC" -- maybe we can find a better term... It's useful and interesting to know what the, if any, evidence the issuer has at th epoint of issuing that the intended holder controls the subject identifier..  
… That use case isn't about DRM or censorship, it just increases assurance of verifier..  

> *Dave Longley:* +1 to Joe's framing.

**Oliver Terbu:** I agree with Joe, maybe terminology is misleading, most people use "binding" -- ISO 18013-5 use the term "holder binding", so I agree -- it should not mean that only a certain person can present a credential, shouldn't mean only certain person can present credential so credential is considered to be valid..  

> *Dave Longley:* +1 to expressing evidence that the issuer used to identity proof / get identity assurance that the credential subject (or other identified party in the VC) is who they expected.

**Oliver Terbu:** Perhaps it's a good argument for re-using evidence, it's less controversial, instead of new "binding" property, parent class for "Authenticate" or something... I basically agree, we should be careful w/ semantics and semantics should not be "this credential is only verifiable from a certain entity presenting" -- figure out who the intended holder is..  

> *Phillip Long:* +1 to the need to refine the meaning of binding. There are cases where an individual has a credential issued by a third-party about a program or activity that is relevant to the older, but the holder is not subject of it, yet finds it useful to present..

**Joe Andrieu:** I think that's in the right direction, nuance I might add, how you just framed it -- we're talkinga bout assurance mechanism being a part of "validity" of VC for particular use case... we're talking about business rules validation, for verifier, switches from "verifying" to "validating"..  

**Manu Sporny:** Yes, I agree with that..  
… This is some of the clarification we need. I think this new property or set of properties we are talking about are for validity and are a business rules thing, not a verification thing..  
… One of the other things we are talking about goes with NIST Identity Assurance Level checking..  
… When this VC was issued to the holder, an IAL (identity assurance level) check was done..  
… The issuer went through some checks on the person they gave the VC to and perhaps we use the evidence field for this..  
… I wanted to underscore what Ted said, we need to understand all the use cases. As David Chadwick said, we need to discuss the semantics around those use cases. And then, finally, we can name this thing. To me, we're talking about multiple properties, evidence, terms of use, and maybe one or more new properties..  
… Until we can determine what makes something fall into evidence vs. terms of use, vs. this other property, I think will in circles..  

**David Chadwick:** Yes, I agree with Manu -- it looks like we're going to be defining several properties, not just one..  
… About "binding", property that I suggested was "issuee" where "issuer" is "binding" credential to "THIS entity", throwing that into the mix as well..  

> *Phillip Long:* David, isn't the credentialSubject the target of the credential being issued?.

> *Phillip Long:* Arghh "isn't...".

**Oliver Terbu:** Yes, responding to Manu -- about Identity Assurance Level -- this new property might have to do with "authentication" process -- verifier doesn't know who is legitimate party that can provide the credential, so this is about "Authenticator Assurance Level"... where as, evidence is about "Identity Assurance Level" -- what documents issuer might have checked before issuing to a party..  
… This is more about authentication process vs. identity assurance process -- is person presenting VC same party as the one that received it..  

**Dave Longley:** It seems to me that having an issuer make statements that they did some sort of assurance checking is "evidence" to me... side-effect of rest of claims, issuer isn't making claim that party identified by ID uses this authentication method or has this level of identity assurance. Not main claim that's being made in this case. Does seem like there are two ways to model this, we might be talking about multiple use cases..  
… If you are building a VC that's about a specific check that was performed, what was checked, about whom, you put that into claims section in credentialSubject, but making claims about some other thing, and you did authentication / identity proofing, that you could put in "evidence" of their own business rules..  

**Manu Sporny:** So it's good that you said, Oliver, that it's more about authentication than identity assurance. That it's more about AAL than IAL..  
… That's a really good criteria to separate these things..  
… Oliver, you're interested in AAL (Authenticator Assurance Levels) and that's a good use case and we should talk about that. I'm very interested in IAL (Identity Assurance Level), what type of process was put into place when the document was created and that sort of falls into the evidence category..  
… The way the spec is written right now, there's an assumption that if the party presenting uses some authentication / proof of control, i.e., they use a DID and do a DID Auth when doing a presentation, that's a fine thing to do in the absence of any other information..  
… I wonder if we should say something about that in the spec, we've always presumed that's how it would work in the default case. But now we're potentially adding this mechanism where someone other than the credential subject could be presenting. For example, the guardianship or parent use case, etc. A parent presenting a birth certificate, etc..  

**Joe Andrieu:** That last comment threw me off, I was sure we might have that section already.  
… We might need a more flexible pattern, I like the distinction between authenticator assurance and identity assurance -- what about subjects that are not DIDs... but what about credentialSubjects that are URLs? Presumably we'd need some other mechanism on how you authenticate via that URL.  

**Manu Sporny:** That's an excellent point, Joe..  

**Ted Thibodeau Jr.:** As far as I can tell, we're mostly talking about application of business logic... not the technology that's allowing that to happen. Adding "issuee" is just recording that's the entity to whom issuer delivered VC, doesn't say anything about whether that entity has to hold on to VC or if entity is only one entitled to make presentation, just says "I generated this VC and gave it to them" then verifier gets to decide what that means, whether it matters at all, outside of our purview... if there are legitimate use cases, which there are, those need to be clearly spelled out, requirements of those use cases need to be derived from use cases, then technology needs to be identified on those use cases. We're going at this backwards..  

**Oliver Terbu:** I agree with Ted that we should clearly spell out use cases, in the rebooting that holder binding group did, there are a couple of use cases, paper will be public in next week or so..  
… I couldn't put use cases in Github issues yet, wanted to wait to publish paper ... agree that we should spell out use cases clearly..  

> *Phillip Long:* +1 to what I think Manu and TallTed are saying - start with the use cases..

> *Dave Longley:* +1 to use cases ... and separating out authentication vs. identity assurance.

**Oliver Terbu:** To Manu's point, credential subject ID, we have tribal knowledge, that's true -- important in that regard, what if there is no credential subject ID for privacy reasons -- for example, if you don't have credential subject ID, you might still want to prove you're legitimate holder, we don't have normative text that mentions that if credential subject ID then anyone can present credential, becomes bearer credential..  
… If we have another property that enables presentation of things that don't have credential subject identifier -- interesting for ZKP-based credentials..  

> *Dave Longley:* two very different things: to prove control over an identifier or authenticate -- and to provide identity assurance.

**Brent Zundel:** What are folks feeling like next steps ought to be? There seems to be general agreement on concrete use cases to drive development of objects and properties and names would be beneficial to everyone..  

> *Joe Andrieu:* FWIW, the section in the spec I mentioned is a bit obscure. It's buried in the Appendix C.1 [https://www.w3.org/TR/vc-data-model/#subject-is-the-holder](https://www.w3.org/TR/vc-data-model/#subject-is-the-holder).

> *Joe Andrieu:* we welcome contributions.

**Brent Zundel:** Would it be a good next step to formally add them to use cases note? Or do we not want to be that formal, as long as we understand use cases, we don't need that..  

**Manu Sporny:** Let's please write this down and put it in the use cases document formally. We can forget, people can come and go, etc. It will then become very to point to it and any new features can be easily defensible in the future..  

**Brent Zundel:** Does that sound like an acceptable next step for you, Oliver?.  

**Oliver Terbu:** Yes, that sounds like a good next step..  

**Brent Zundel:** Do we want to hold off the holder binding conversation until that's in place -- how would we use evidence, how do we use holder binding, -- parallel or in serial?.  

**Oliver Terbu:** It might make sense to have parallel conversations on authentication vs. identification.  

> *Dave Longley:* would be good if we could change this discussion name from "holder binding" to "assurance" (either authentication or identity).

**Oliver Terbu:** Maybe that also relates to use cases only..  

> *Ted Thibodeau Jr.:* "bearer credential" says to me that "presenter is subject" which seems distinct from anything to do with "issuee"/"issuedTo" property.

**Oliver Terbu:** Perhaps no sense to make significant progress if VC data model if we can't agree on what we want to achive, use cases have priority..  

**Manu Sporny:** Given that we're not throwing chairs at each other tells me that we can probably have it in parallel. It's a little frustrating to not have the use cases, but it would be good to perhaps just get a list of the use cases that we have..  
… I also like what Dave put into IRC, that maybe we should stop calling this "holder binding" and start calling it "assurance levels". There are assurance levels for authenticators and identity proofing..  
… This is really about getting a higher level of assurance on the entity that's presenting or getting a higher level of assurance ... anyway, I like the word "assurance" better than "holder binding" and maybe we can use the rest of this time to highlight their use cases and Oliver has a good concrete list to document from..  

**Ted Thibodeau Jr.:** In some ways "assurance" is better than binding, but in other ways, we're on the wrong side of the horse here... doing this in parallel is going to tend to push both sides back and forth... we might not reach an actual conclusion, it's a pattern we've done before -- thing to do now is use cases..  
… If they're not already named by folks that are advocating, then those folks need to name them, then in next weeks, frame them clearly so others understand them so others tease out requirements of use cases and functionality we already have does not satisfy those requirements..  

**David Chadwick:** Rather than sequential/parallel -- we could do sprial, subset of use cases are defined, and then specify how they're implemented, then additional use cases are specified, refine and go around and around..  
… Successful technologies end up being used from original author intent, so whatever use cases we have, we cannot think they're be-all and end-all, if this is successful, there willl be many more use cases we haven't thought of..  

**Yan Zhang:** Keep it parallel, we're working on reference for VCs in other standards communities, it will be good to know that something is going on and we have conversation we can reference. Agree with DavidC, we can't list all potential use cases..  

> *Phillip Long:* +1 to David's caution that whatever we define, others will find different ways of using/applying the credentials.

**Yan Zhang:** Let's not limit conversation by use cases we have access to right now..  

> *Ted Thibodeau Jr.:* We're not trying to produce an exhaustive list of uses to which VCs may be applied. We're trying to list, and describe in detail, the use cases which requirements we are trying to satisfy by specifying functionality today..

**Michael Jones:** I do understand the value of various kinds of assurance and I agree with Ted that getting the definitions right really matters. My confusion, which relates to definitions, is I though what we were going to be talking about was cryptographic binding to a key owned by the holder, which is pretty idependent of assuance levels of any kind. Both are probably valuable, which are we trying to do, or are we trying to do both?.  

**Oliver Terbu:** I agree that "holder binding" might not be appropriate term, but perhaps "assurance levels" is not the right time... most people need to know whether presenter of credential is intended holder of credential, most people inspect credentialSubject.id to see if it's a DID, then you currently have no way to accept credential as being presented by legitimate holder, but that might be a bikeshedding discussion..  

> *Brent Zundel:* I think what we are working on is slightly murky and so we will benefit from defining the use cases first.

**Oliver Terbu:** I don't want to go down rabbit hole of clearly spelling out different properties for authenticators having different assurance levels -- common criteria for secure element that produced signature, don't think we should necessarily do that... it's important to provide verifier with tool that lets them understand where holder is intended holder... needed to meet parity with ISO 18013-5 specification, use cases they have is law enforcement.  

> *Manu Sporny:* showing DL actual driver presents credential not someone else, in all these cases you need holder binding or whatever binding we agree on..

**Dave Longley:** I think we need to be careful around "finding out" who the intended holder is ... you can digitally sign something using a proxy (for example)... to me, when I hear that, there is a big spectrum that we get into immediately..  

**Michael Jones:** If I were in my other active W3C WG, WebAuthn -- the term authenticator has a specific meaning, I've heard people use authenticator on this call, same thing -- or different... if different, why is it different..  

**Oliver Terbu:** I think I was one of the people that mentioned authenticator, would be happy to add property called 'authenticator' -- could have a type, cryptographic identifier, define DID that produced signature... another authenticator could be passport picture, etc. If we define something like that, people can define additional properties that allow verifiers to understand assurance level a bit better... we could write a concrete proposal in that way..  

**Michael Jones:** So, not reusing terms matters, I think I understand what you're referring to, but we should not call that an authenticator -- W3C has a definition of authenticator and it's not what you're talking about..  

> *Dave Longley:* [https://www.w3.org/TR/webauthn-2/#authenticator](https://www.w3.org/TR/webauthn-2/#authenticator).  
> important: "In general, an authenticator is assumed to have only one user. If multiple natural persons share access to an authenticator, they are considered to represent the same user in the context of that authenticator.".  

**Brent Zundel:** We have concrete next steps, we have regular call tomorrow and three weeks before we meet again, plenty of time to get PRs to other documents and use cases. Plenty of time to chime in on issues labelled "holder binding", whether or not that's the best label we could be using. I encourage people to participate in the issues..  
… Thanks all for being here, thanks all for coming..  

---
