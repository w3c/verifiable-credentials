---
layout: minutes
date: 2023-05-23
title: Verifiable Credentials Working Group Special Topic Call on the Miami resolutions — 2023-05-23
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-05-23-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on the Miami resolutions — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on the Miami resolutions",
        "dateCreated": "2023-05-23",
        "irc": "vcwg-special",
        "datePublished": "2023-05-24",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on the Miami resolutions",
            "startDate": "2023-05-23",
            "endDate": "2023-05-23",
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
                            "name": "Samuel Smith"
                        },
                        {
                            "@type": "Person",
                            "name": "Manu Sporny"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Kristina Yasuda"
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Christopher Allen"
                },
                {
                    "@type": "Person",
                    "name": "Kevin Griffin"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on the Miami resolutions — Minutes
{: .no_toc}



**Date:** 2023-05-23

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20230523T180000) and the [IRC Log](https://www.w3.org/2023/05/23-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Dmitri Zagidulin, Gabe Cohen, Manu Sporny, Dave Longley, Samuel Smith, Kristina Yasuda, Hiroyuki Sano, Orie Steele, David Lehn, Christopher Allen, Brent Zundel, Kevin Griffin, Phillip Long, Joe Andrieu

**Regrets:** Shigeya Suzuki

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Samuel Smith, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. Miami resolutions.
{: #section1}

**Brent Zundel:** two pull requests 1100 1101 concrete changes conversations about resolution in Miami unless someone has new information that materially changes Miami object to any attempt to relitigate Miami. Resolution: restate miami. Base media type vc+json+ld transformation one and bi directional rules must be define but not necessarily by this working group.  
… context of this statement was not meant to be normative but guidance for WG moving forward.  

> *Joe Andrieu:* can you post that resolution in IRC?

> *Phillip Long:* The Miami resolution URL is [https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-02-16-vcwg#resolution1](https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-02-16-vcwg#resolution1).

#### 1.1. Add guidance on Representations of Verifiable Credentials (pr vc-data-model#1101)
{: #section1-1}

_See github pull request [vc-data-model#1101](https://github.com/w3c/vc-data-model/pull/1101)._

<!-- issue w3c/vc-data-model/1101 -->



**Brent Zundel:** raised by Mike Jones but not on the call today. In absence of Mike is there someone who can give a summary of PR.  

_See github pull request [vc-data-model#1101](https://github.com/w3c/vc-data-model/pull/1101)._

<!-- issue w3c/vc-data-model/1101 -->



**Brent Zundel:** this PR adds some non-normative guidance in added section for guidance for representation provided mapping between mapping and standard one. Takes the language of miami removes the normative text and puts it in spec as non-normative.  

**Kevin Griffin:** In terms of concrete changes I think PR is aiming to go in ratifying Miami is good but would like to see substantive guidance of what a transformation means (such as pr 1100 or section in DID method spec of what must a method do to be a DID method) if we are going down path of other representations we should provide more substantive guidance of If your are going to do this this is how you should do it. Give developers a path to emit compatibles.  
… there is not enough of that language in this spec.  

> *Kristina Yasuda:* there could be more than one mapping per representation. so long as it maps back to the base data model.

**Joe Andrieu:** pretty important point in the resolution which to me is vital to scoping the maimi agreement. 1101 language reverses the scope of the miami resolution. As I mentioned on last call I don't think this is an appropriate representation either honest mistake or an attempt to rewrite miami.  

> *Kristina Yasuda:* -1 to Joe's interpretation of the resolution.

> *Joe Andrieu:* [https://github.com/w3c/vc-data-model/pull/1101/files#r1183881906](https://github.com/w3c/vc-data-model/pull/1101/files#r1183881906).

**Brent Zundel:** which specific language?  

**Joe Andrieu:** in chat is pull request with adding back language.  

> *Kristina Yasuda:* to be very clear, "(defined by the VCWG)" was added because we cannot control what happens outside VCWG. VCWG has no control what happens outside VCWG :).

**Orie Steele:** I think Kevin summed it up. Supporters of pull request 1101 don't want to get into the business of giving normative requirements testability. PR 1101 tries to say that people outside the WG can do it by mapping. Joe was correct that there was language that said if we define those mappings here we have to go into extra effort to do this. The other PR 1100 does add those extra teeth to cover in tests. One thought is that if the WG is not defines what value does the language do. The only other one is the mapping in other work item I would rather not define that particular thing. But perhaps there is a shorter resolution that require a mapping.  

> *Joe Andrieu:* as long as the language that claims to represent the resolution includes that scope, we're good. the current language does not.

**Dave Longley:** Had put in PR a while back a change before I could support PR to make sure we are clear what we expect from a mapping. The transformation rules must allow any instance to generally convert back to the base representation. That case by case mapping a insufficient.  

> *Orie Steele:* yeah, hand crafted mappings have been a problem for us... they have been implemented in the jwt covid credentials, and other jwt implementations that diverge from each other.

> *Kristina Yasuda:* as brent said in a summary, miami resolution was not meant to have a normative text..

**Manu Sporny:** My biggest concern about this PR 1101 is that it lacks any kind of normative statement. It informative that allows anyone to be compliant and there is no way for someone to vet if arbitrary transform is legitimate or not. There is one test that you could use. Such as if it results in the core data model. The what does ACDC gordian envelope need to define to transform. I says a bunch of things that should be said normatively in an informative way.  
… so it Strong arguments on both side. Having a hard time seeing how we can reconcile these. and have normative guidance or we are going to talk about transformation in a completely non-normative way. Which I would object too as it doesn't help interoperability.  

**Brent Zundel:** My understanding is that the normative guidance is that it applied to things outside the WG I did not think it meant that it only applied to things exclusively done by this WG. My understanding, this PR is a good faith representation of the Author (mike jones) understanding of Miami.  
… chair hat back on. Lets continue to explore those directions forward.  

> *Orie Steele:* +1 JoeAndrieu, we have too much on our plate... normative mappings, are too much for us to handle, and we have a track record of getting them wrong.

**Joe Andrieu:** I agree in part with what you said, we do agree that other entities can define transformations. not a burden on this WG. My support specifically for that resolution is the scoping fo things we were doing. Important, I was the one who asked for that language. I can accept that other people would prefer that other orgs be able to do this. Want to know how we can reconcile.  

**Manu Sporny:** the way I am looking at this I am not thinking about the resolution that much clearly we have different interpretations of the resolution so I am looking at the two PRs. either we are going to non-normative -1 on that. or we are going to make normative statements. Prefer we write spec text that guides implementers. Kevin had a good questions. What is the minimum guidance we can all agree to as a group but as minimum it should be normative.  

> *Dave Longley:* +1 to Manu.

**Manu Sporny:** the min guidance is you can call whatever you are doing as Compatible with w3c VC as long as after the transform you are compliant with the core data model using a normative transformation. Putting that up as straw man. As guidance to spec writers in other WG.  
… This gives normative guidance to other writers that gets to core data model.  

> *Dave Longley:* +1 to Manu's approach as a solution forward.

**Brent Zundel:** I heard statement with normative guidance if the result of that transform (summary) of Manu's comment.  
… Joe, would that work for you?  

**Joe Andrieu:** Anyone can say compatible its can they say its a VC w3cx VC. decide if it meets our standards. Giving some other org license to make a compliant w3c VC is wrong.  

> *Manu Sporny:* Yes, Joe's concern is correct... they can't call it a "W3C Verifiable Credential"... its more like "Can be transformed into a W3C VC".

> *Dave Longley:* yes, but the point here is to provide guidance and a way for them to clearly indicate compatibility and get uptake on their representation, it's way for this group to just clearly tell others what needs to be done (even if it should be "known without guidance").

**Kristina Yasuda:** Who is this group to dictate what other standards bodies do. We can only dictate what happens in this WG. we are pretty much at deadlock as I am against any normative statements and Manu wants to see normative statement. So how to move forward. Bottom line that where I am right now.  

> *Kristina Yasuda:* we could turn vcdm into a vc-core spec like did-core, why not.

**Orie Steele:** Kevin mentioned did specs. Maybe thats aligned with what Manu is saying. Did WG says here are minimum. Our spec becomes like the did core. that is a fundamentally untestable statement. You could create a registry and then the registry entry can assert they meet the spec. We could do the same for verifiable credentials. You could say that for a transform. But from a did core testability there would not be any tests and there would be a burden.  

> *Dave Longley:* "turn vcdm into a vc-core spec like did-core" <-- very open to interpretation on what that means :).

**Orie Steele:** to ensure conformance. And we did receive a lot of complaints around did method interoperability. But it is a potential minimal approach.  

> *Manu Sporny:* Yes, that's true Orie, and the downside of the proposal.

> *Dave Longley:* the base representation provides interop, i don't think there are red flags because of that.

**KevinGriffin:** I got on queue to agree with Manu to define normative language forward. in order to facilitate to help other create transformations. We are possibly naive in saying the w3c can exclusively say what is a vC. We are in a position to normatively state what is possible to be what is a VC data model. We can relax how hard but there is a path forward. You can't call yourself a w3cvc unless you meet that test spec. Can we go to the VC spec is passing the test that transform loose enough.  

> *Christopher Allen:* I'd hoping to speak before a poll.

**Samuel Smith:** I was wondering if we could do a poll to get temperature -- spectrum of opinions and maybe Manu, Kevin, Orie, and Kristina are closer together than Joe? I'd like to see if we could try to get between two closest opinions?  

**Brent Zundel:** I think a poll would be a good idea.  

**ChristoperA:** three issues we are conflating. VC is not a trademarked term we cannot do anything about lower case vc. In general they don't care about w3c and we maybe don't care about them. 2nd vc-acdc vc-gordian vc-jwt desire to have imprimatur of VC there is a process which should be part of the registry process. I was disappointed we did not get very far. we never got beyond provisional. We can do same with VCs. But in order to get it to get to next level we need something you can test it go make it more that provisional. But then anyone should be able to say that it passes the test. 3rd then once it passes a conformance test then it becomes an action item for group to change from passing test to conformant implementation. third big area I plan on my roadmap to make a transform of Gordian at that with conform with base set of testing tools. But I never plan on making [CUT].  

**ChrisAllen:** I think gordian can do better can do more so the majority of gordian can be beyond the VC data model but if one wants to use our libraries to accept a conformant subset. But I shouldn't be a second class citizen if I am able to pass conformance test.  

> *Manu Sporny:* In order to "test it against VCDM base", we need normative statements... I agree w/ Christopher's "stage 3 maturity" thing as the way you can say you're "strongly compatible w/ the W3C VC Data Model".  
> This is sounding like it's going to be a big mountain of work :(.  
> We want to enable ACDC and Gordian and VC-JWT, but we also don't want folks to (easily) game what we're trying to enable.

> *Joe Andrieu:* +1 manu.

> *Orie Steele:* If you produce vc+ld+json, you produce W3C VCs.... you don't need anything in our spec to say anything about this, and we especially don't need to review your test suite.

> *Manu Sporny:* also that ^.

> *Kevin Griffin:* but don't we need to provide guidance to get there, but I completely agree.

> *Dave Longley:* ^what Orie said is true -- but perhaps we should say something about it in the spec because there's so much interest in it.

> *Orie Steele:* you know things are different, if you need a mapping... QED.

> *Joe Andrieu:* +1 to Orie as well. If they produce the same media-type, it's a W3C VC. If its a different media-type it isn't, unless we, the VCWG bless a normative mapping as W3C VCs.

**Manu Sporny:** I wanted to clarify, heard the phrase then we are w3c VC that these are equivalent things have strong -1 reaction to that. There is one data model that is a W3C VC. Those things like Gordian are their own thing, there may be transforms that lossless transform. The language we are trying to use is that these are compatible with bi-directional transform. The thing I am most concerned about is that someone is going to game it in such a way has having a negative impact on interop like big vendor pushing W3C VC when then are not. We want to enable ACDC, JWT, Gordian because strongly legitimate attempts to do mapping correctly. What we are talking about is a mountain of work. We DID core not testable. Concerned that WG is about to bite off mountain of work with 4 months left. Feels like this conversation keep going.  

> *Orie Steele:* +1 manu, interop will be bad...

> *Dave Longley:* +1 to Manu.

> *Orie Steele:* we saw this already with previous version of vc-jwt.

> *Kristina Yasuda:* i think the outstanding question is whether this WG defines the transformation requirements for the serializations outside this WG, which is DID-Core path, and it is untestable.

> *Orie Steele:* +1 manu, impossible amount of work for this group.

> *Kristina Yasuda:* the lack of compromise in this WG (base data model MUST be vc+ld+json) is what will push anyone who wants flexibility (does not have to be a big company) towards what you are warning against, manu.

> *Dave Longley:* big companies gonna do what big companies gonna do .... if they want to cause lock-in and market control, they'll attempt it.

> *Manu Sporny:* (especially if we have spec text that gives them a good path to do so).

**Orie Steele:** queued to suggest concrete thing we can poll on. "Remove the media type for vc-jwt which is the only media type that requires a mapping and then close both PRs 1100 and 1101. The primary contentious point is no longer valid.  

> *Brent Zundel:* poll: remove vc+jwt media type and it's associated mapping.

> *Orie Steele:* +1.

> *Manu Sporny:* +1.

> *Dave Longley:* +1.

> *Joe Andrieu:* +1.

> *Phillip Long:* +1.

> *Gabe Cohen:* +0.

> *Dmitri Zagidulin:* +1.

> *Kristina Yasuda:* -1 need to think of the implications.

> *Samuel Smith:* 0 need clarification.

**Orie Steele:** but not because we don't like vc-jwt -- because it's the "transformation" part of that spec, which will send us in circles.  

> *Christopher Allen:* +0.5 (not perfect, but as an expediency to address vc-jwt later).

> *Phil Feairheller:* +1.

> *Kevin Griffin:* +1 with a view to clarifying implications.

> *Brent Zundel:* 00.

**Brent Zundel:** only -1 is Christina.  

> *Christopher Allen:* Can we be explicit to say intent is to address it later with a note?

> *Manu Sporny:* Could be an implementation guidance thing?

**Samuel Smith:** If we remove the language, what does it do to external proof formats?  
… Is there any normative guidance for that? Or is it anything folks would want for an external proof format?  

> *Orie Steele:* not possible to move, because changes to normative stuff breaks CR... and a note is not normative.

**Christopher Allen:** wanted to ask for christina for people not on this special meeting. My take on process perspective is it possible to move details around vc+jwt into a note not normative these are where we are at.  

> *Manu Sporny:* A note on transformations might make sense at this point.

> *Manu Sporny:* Just write down the concerns the group has... why we decided to not do/not do normative stuff.

> *Kevin Griffin:* Can the note to transformations point to the vc specs dfir? or am I way off base?

**Christopher Allen:** concentrate on closing. without acknowledging jwt not show up to community. maybe that causes us to get us knocked out due to objections.  

**Orie Steele:** answer sam's question about proof can be optional internal or external and is not operative in determining if VC or not. Unlike what spec says. adding a proof does not make it verifiable. `@context` of structure of json makes it a VC not the securing mechanism.  

**Brent Zundel:** Chairs take it under advisement. maybe excise those portions that transform leaving those that sign VC data model. Three paths. 1, add non normative guidance for tranforms. 2 add normative spec text minimum guidance for transforms 3. excising from vc-jwt the transforms with keeping jwt a securing mechanism.  

> *Phil Feairheller:* +1.

**Brent Zundel:** appreciate participation today everyone was nice.  

---
