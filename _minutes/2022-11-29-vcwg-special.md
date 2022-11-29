---
layout: minutes
date: 2022-11-29
title: Verifiable Credentials Working Group Special Topic Call on `@context` and `@vocab` — 2022-11-29
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2022-11-29-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on `@context` and `@vocab` — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on `@context` and `@vocab`",
        "dateCreated": "2022-11-29",
        "irc": "vcwg-special",
        "datePublished": "2022-11-29",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on `@context` and `@vocab`",
            "startDate": "2022-11-29",
            "endDate": "2022-11-29",
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
                            "name": "Sarven Capadisli"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Christopher Allen"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "mpororck"
                },
                {
                    "@type": "Person",
                    "name": "David Waite"
                },
                {
                    "@type": "Person",
                    "name": "Ivan Herman"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Charles Lehner"
                },
                {
                    "@type": "Person",
                    "name": "Drummond Reed"
                },
                {
                    "@type": "Person",
                    "name": "Brent Zundel"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "manu-irc-from-an-airplane"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Shawn Butterfield"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Geunhyung Kim"
                },
                {
                    "@type": "Person",
                    "name": "Yi Shi"
                },
                {
                    "@type": "Person",
                    "name": "Oliver Terbu"
                }
            ]
        },
        "resolution": [
            {
                "@type": "Resolution",
                "resolution_number": 1,
                "resolution_text": "This working group will NOT restrict itself to work on VCs with only JSON representations."
            }
        ]
    }

---

# Verifiable Credentials Working Group Special Topic Call on `@context` and `@vocab` — Minutes
{: .no_toc}



**Date:** 2022-11-29

See also the [Agenda](https://www.w3.org/events/meetings/e410bbbd-57c4-46cc-b279-674cc53a58e8/20221129T110000) and the [IRC Log](https://www.w3.org/2022/11/29-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Dave Longley, Sarven Capadisli, Christopher Allen, Joe Andrieu, mpororck, Kristina Yasuda, David Waite, Ivan Herman, Orie Steele, Michael Jones, Charles Lehner, Drummond Reed, Brent Zundel, Dmitri Zagidulin, manu-irc-from-an-airplane, Gabe Cohen, David Chadwick, Phillip Long, Andres Uribe, David Lehn, Will Abramson, Ted Thibodeau Jr., Shawn Butterfield, Chris Abernethy, Geunhyung Kim, Yi Shi, Oliver Terbu

**Regrets:** 

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** Sarven Capadisli

## Content:
{: .no_toc}

* TOC
{:toc}
---


**Kristina Yasuda:** Sent out the summary as requested as last special topic call. It has some reactions..  

### 1. `@vocab` in core `@context` approach.
{: #section1}

**Kristina Yasuda:** Any proposals on the table or any topics people would like to discuss?.  

**Orie Steele:** I sent the response to the summary for the previous special topic call. There were two polls succeeded in explaining reasonable amount of agreement. Building on the two. Responded to the list with proposals..  
… In particular the ??? vocab. The poll had a lot of optionality. Where that `@vocab` could go. First context or second. It wasn't clear where we might want to put that vocab, and where in various locations..  
… There are several issues discussed some months now. Side conversations. A shared / personal position where it can put value for issuers/verified. Summarized earlier but people probably didn't get a chance to review yet..  
… In this call, we could elaborate on why they are used in some places (e.g., schema.org). The use of vocab and would like to run the value..  
… If we can run the polls on where those distributions would be....  

> *Orie Steele:* Related issue: [https://github.com/w3c/vc-data-model/issues/953](https://github.com/w3c/vc-data-model/issues/953).

**elfissued:** I'd like discuss what those CBOR mapping would be. I have 3 potential poll questions..  

**Michael Jones:** I am sensitive to that. Some of these things intertwined. A data model non-JSON that affects the core data model. Would like time for that..  

> *Christopher Allen:* +1 to mike's questions.

**Orie Steele:** The idea of discussing CBOR after the issue that has been filed and without the WG having time to evaluate. I think it may not be good use of the special topic call..  

> *Dave Longley:* +1 to Orie, many people may not have even seen the new CBOR issue(s?).

**Orie Steele:** I'd like to get more debate on the issue tracker. Talk about CBOR..  
… The current discussion is starting to get a bit painful for the WG. I can see the intention that others have expressed on this point..  

> *mpororck:* +1 to progress - but would like to be mindful of how we would map to CBOR as we lock in core data model.

> *Dave Longley:* +1 to separate special topic call like Orie says.

**Orie Steele:** I am struggling to .. we should have a special topic call on CBOR and have the conversations out before the call. That'd be my request from the chairs..  

**Christopher Allen:** I'd like to see a special call on CBOR. One of the key questions is how closely does it conform to certain kinds of decisions vocab, context and other stuff for it to be a utility to this group..  
… Depending on how you frame it being firm about some of those things could cause complications..  

> *Michael Jones:* My "Enable CBOR Representations" issue is [https://github.com/w3c/vc-data-model/issues/985](https://github.com/w3c/vc-data-model/issues/985).

**Christopher Allen:** ... Anonymity ??? I'd like to preserve..  

> *Orie Steele:* +1 I think CBOR can be addressed without causing the core data model to be rewritten, I believe we can discuss that on issues, and then in a dedicated topic call..

**Kristina Yasuda:** Even if we have a dedicated call on CBOR we need to see the WG stands on that topic..  

> *Dave Longley:* +1 to Orie.

> *Manu Sporny:* +1 separate call on CBOR -- that's a big topic and one that the group needs some background on to discuss..

**Orie Steele:** The last poll we ran we had talked about including the vocab in the context (next version of the context v2). In v1 there was no vocab. That means that if you don't add a second context then anything you include in the credentials there'll be errors. .. A bunch of scenarios., e.g, integrity. This will make the first context that you'll ever need for JSON-LD processing and also safe to completely ignore to assign a single URL to it and retain the core model..  
… It is on the list and debated for a while now. The key part of this proposal is base IRI that the WG uses.. I have other proposals where different IRI bases will do. What the tradeoffs are. I'd lke to evaluate up front. We can see to include vocab in the primary context.  

**Dave Longley:** the impact to change the vocab later. If this is put into v2 context where we only have one v2 context..  

> *Orie Steele:* Related to dave's comment, here is an example of the [behavior today](https://v.jsld.org/3xq8SHD6DXJg1tZKHeLqJqhA3vZLm9kjVFyBvhrFYacmJgja5SnM5GWfLthVGijeqMfv1LhcjQ1KT8rhubhAHszUyhC7WbcgQQypie6u7nMFVSeGFA46TYAzf7eXa2btVxbhoDqSgDXsmTLi5rKqWmB2iTK74UsLu5QkT4wVp31o7GoBLXs1GRtCN6Bi7sh7Skmu14ikNbX1Ss51TrYxnRDv2erzof75SSEuiu855hJ9KtzD58zuF).

**Dave Longley:** I don't know if I'd take issue that it might come challenging. json and json-ld processing. having vocab and base context. other people might want to add additional context that @vocab value that could cause complications on how data is process so something to keep in mind. there are other ways around this. two different core context have one ??? and one doesn't. there may be challenges to including two.  

**POLL**: The v2 `@context` will contain an `@vocab` with a base IRI that the working group chooses..

> *Orie Steele:* +1.

> *mpororck:* +1.

> *Drummond Reed:* 0.

> *Joe Andrieu:* +1.

> *Dmitri Zagidulin:* +1.

> *Michael Jones:* +1.

> *Brent Zundel:* +0.

> *Christopher Allen:* 0.

> *David Chadwick:* 0.

> *David Waite:* 0.

> *Dave Longley:* +0 (non-blocking, open to addressing any processing problems in another way).

> *Gabe Cohen:* 0.

> *Jeremie Miller:* +1.

> *Ted Thibodeau Jr.:* -0.

> *Kerri Lemoie:* 0.

> *Shawn Butterfield:* 0.

> *Phillip Long:* +0.

> *Manu Sporny:* -0.

> *David Lehn:* +0.

> *Yi Shi:* +1.

> *Ivan Herman:* 0.

> *Charles Lehner:* 0.

> *Sarven Capadisli:* 0.

> *Christopher Allen:* (I'm really more -0).

**Orie Steele:** The 0s may generally reflect the unsure feeling of people ...  

> *Ted Thibodeau Jr.:* uneasy, more than unsure, here.

> *Manu Sporny:* DB would prefer `@vocab` in 2nd context... we'd +1 that, I believe..

> *Drummond Reed:* Isn't that what LD `@context` statements do already? What is different about `@vocab`?.

> *Manu Sporny:* That is, we feel that approach doesn't have any downsides).

> *Phillip Long:* @drummond - I had that same question..

> *Manu Sporny:* No, that's not what `@context` does, Drummond... it doesn't establish a "default vocabuary"... `@vocab` establishes a default vocabulary..

> *Christopher Allen:* (can `@vocab` model also work with labeled property graph style architectures?).

> *Dmitri Zagidulin:* @drummond - `@vocab` is basically a safety net / catch-all for all terms not defined in the context.

> *Manu Sporny:* So, we're talking about either establishing a default vocabulary for ALL VCs... or a default vocabulary on a per-market vertical basis..

> *Dave Longley:* `@vocab` "auto-defines" term mappings ... so any JSON key, e.g., "foo" will automatically map to a globally unambiguous URL like "https://example.com/foo".

> *mpororck:* basically an `@vocab` at the base context preserves ability for property graphs while enabling private claims.

**Orie Steele:** vocab is used to expand IRIs. It is a way to take a turn and get an unambiguous reference to that term e.g., subject property in RFC the string is not a lot uniqueness but that ??? reference ??? where the domain is complex e.g. assertion, attestation. it can help to have a human-readable definition for a term. the vocab gives an identifier in an easy way. can expand with URN but then you don't want anyone to resolve that in a human-readable in a web browser. jus want to get a unique definition for it. if you talk about the evidence property. w3c may define in a technical def. and we'd host a normative def. we could do that at urn rooted at w3c. what i wanted to do was to use URN to see if people have strong feelings on URNs..  

> *Dave Longley:* `@vocab`, when included in a context, auto-generates mappings vs. them being explicitly provided on a term-by-term basis..

> *Orie Steele:* The JSON-LD 1.1 spec: [https://www.w3.org/TR/json-ld11/](https://www.w3.org/TR/json-ld11/).

**Gabe Cohen:** This one is using `@vocab` to catch all as undefined terms..  

**Orie Steele:** The first poll said we include a vocab with base context. It didn't describe how that would be used to assign terms. This poll uses URNs. The next poll will use URL. This one is using one context. We're tlaking about how that context property will assign terms to how it will be used.  

> *Orie Steele:* I will need to drop in a few minutes.

> *Orie Steele:* The other proposal I had queued: Poll: The base IRI will be a URL..

> *Orie Steele:* feel free to run it in my absensence..

> *mpororck:* See [https://auth0.com/blog/url-uri-urn-differences/](https://auth0.com/blog/url-uri-urn-differences/).

> *Orie Steele:* All the polls in special topic call are non binding..

**Christopher Allen:** In general in favour of URNS because it is broader. Can use hash based or other kinds of references / not just Web. Has some potential security advantages but that's not what I'm hearing re URN vs URL. Is there some intent form your design to leverage the benefits.. Are there security dis/advantages?.  

**Orie Steele:** If URL, you're inviting someone to run it at a location / host. A lot of times when you click, they don't necessarily resolve. You can use URN to get around that. Both uniquely identify a term. One requires a host server and potentially have complains. THe other one just give a unique name.  

> *mpororck:* URN also signals that there might be standardization or other conformance requirements around the URN.

> *David Waite:* q.

**Dave Longley:** `@context` in JSON_LD just maps JSON keys to make them globally unambiguous..  
… You can do that for each term and mix and share vocabs.  

> *Drummond Reed:* Just to point out: a URN may or may not be resolvable. Just because it's a URN does not mean it's not resolvable..

**Dave Longley:** `@vocab` in `@context`... for any key that wasn't explicitly called then prepend this to the URL.  

> *Christopher Allen:* (in Gordian Envelopes, each node (which could be a node about ontology of a predicate) can be a provable hash. Thus I like URNs in general.).

> *Drummond Reed:* Dave, that was helpful, but doesn't the `@context` property of JSON-LD already establish the mapping of all terms to URIs?.

> *Dave Longley:* drummond: if you specify all terms, yes -- `@vocab` lets you cover terms that aren't specified but still used. And to be clear, `@vocab` goes inside an `@context` value (it's an option you can use to "catch all" otherwise undefined terms).

**Ivan Herman:** To add to dlongley. You use the term catch all. it does that. At the same time, it is dangerous because if I put `@vocab` at the end, then no one will see I made the mistake. If I use a term because it is wrong. This is a slight danger we shouldn't forget. To follow on Dave, if we put the vocab in the main context, that's still gives the possibility to use more vocabs to be added to the header with additional `@context` references. This approach is for the simple cases. The processing of contexts follows order. if you have v2 context add another context value then give explicit terms then that will work. `@vocab` a catch all. Whether it is a URN or URL i see that as a secondary issue. The real issue is which mechanism the WG favors..  

> *Dmitri Zagidulin:* I would like to point out -- the increasingly common use of JSON Schemas in VCs, in addition to `@context`, mitigates the danger Ivan mentioned.

> *Dave Longley:* `@vocab` is a more blunt instrument for providing term mappings than doing each term => URL mapping individually..

> *Ivan Herman:* agree dmitriz.

**David Waite:** The diff re location and one isn't. Names guarantee that won't be used..  

> *Kerri Lemoie:* Can vocab & context terms conflict?.

> *Ivan Herman:* Kerri_Lemoie_: not really.

> *Dmitri Zagidulin:* @Kerri - not quite conflict. a vocab can point to a different URL than what's encountered in the context, for example. but that's not a conflict.

> *Dave Longley:* Kerri_Lemoie_: if an individual term mapping is specifically defined in a context, the `@vocab` value will not be used..

> *mpororck:* kerri - effectively last context wins.

> *Dave Longley:* Kerri_Lemoie_: `@vocab` is a "fallback"..

> *Kerri Lemoie:* Got it. Thanks.

**Kristina Yasuda:** The established direction is: first poll that we'll not be running won't be running additional proposal on URN/URL. The group doesn't have enough info to run it yet. Let's run it in the future..  

**Brent Zundel:** The first proposal we ran. The response was lukewarm. No -1. We are resolved on that. What that means for the regular group is that we have a 7 day window for people to come back - comment period. After the 7 days / resolution then it is resolved for the group. Just want to clarify that's the process we are running..  
… Everything we ran last time it was just polls not proposals.  
… With proposal this is a decision the group is making now..  
… As long as the notes reflect that.  

### 2. other formats.
{: #section2}

**Michael Jones:** Chris' thread on CBOR made me think about we do want a CBOR representation(s) at some point and that effects the characteristics of the data model..  
… I have 3 proposed polls.  
… 1. Whether the group wants to limit itself to JSON only or we want to consider in the future non-JSON representations.  
… The first poll is intentionally negatively worded to see if people agree with it...  

> *Michael Jones:* Mike's proposed poll #1: VCs must only ever use JSON representations.

> *Joe Andrieu:* does that include JSON-LD?.

> *Christopher Allen:* what are the other questions?.

> *Manu Sporny:* Does that include CBOR-LD?.

> *Gabe Cohen:* json-ld is json :think:.

**Dave Longley:** My concern is the poll being about x for all time..  

> *Manu Sporny:* You can map VCs today to CBOR (via CBOR-LD), losslessly and back..

**Dave Longley:** I'd be shocked if anyone would vote since no one knows what the future holds.  
… Limit to length of this group's charter.  

**Ivan Herman:** When you talk about JSON, is pure JSON or JSON-LD? It is not something else.  

**Manu Sporny:** So, we already support multiple serializations today if they're *-LD based... same w/ JWTs, you can embed a VC JSON into CWT and secure it that way.  

**Michael Jones:** Both are JSON for the purpose of this poll.  

> *Phillip Long:* @Dave - agree with that. something forever is unrealistic..

**Christopher Allen:** Is there interest in CBOR?.  
… If the question before us about vocab and context, was just about JSON. I'd just put 0s..  

**Manu Sporny:** I expect when YAML-LD becomes a thing, you will be able to losslessly map a VC <-> YAML-LD and back (if we keep @context).  

**Christopher Allen:** If there's a lot of interest in vocab and things of that nature, ... if interest in CBOR then my vote would be different. Makes me hard for me to know if this group eventually wants to in the scope of this charter / ~2 years...  
… Are the things that I vote on as IE solely about JSON or JSON-LD representations or have some impact in the future e.g., VC3 like compact binary object representation.  

**mpororck:** There are also things like YAML and YAML-LD should bring us to transparent mappings..  
… Creating JSON schema and JSON-LD from that..  
… I'd like to see clean CBOR representations and like to see as a legitimate format for VCs. Lessons from v1-2..  

> *Christopher Allen:* my concern with cbor-ld is that it is too tightly tied to json-ld..

**mpororck:** Let's not limit ourselves to JSON..  
… There are other formats that can be considered here..  

> *Christopher Allen:* I'm not saying doing cbor-ld, but you loose something tying so close..

> *Michael Jones:* Mike's revised poll #1: This working group will restrict itself to only work on VCs with JSON representations.

**Michael Jones:** Revised to accommodate dlongley's comment on duration of the WG.  

> *mpororck:* like that phrasing.

**Dave Longley:** yes it does reflect my concern.  

> *Manu Sporny:* eeeh, if this is taking us down the same path we went down for DID Core -- -1.

> *Manu Sporny:* if it's a "we shouldn't prevent expression of VCs in other serializations" -- +1.

**Ivan Herman:** Where do you put the word normatively re proposal?.  
… the poll as it stands today, per default true per charter..  

**Kristina Yasuda:** i don't see anything in the charter limiting to json???.  

**Ivan Herman:** it doesn't say for v1 either. it is at least questionable.  

> *Phillip Long:* -1.

**Ted Thibodeau Jr.:** The location of only doesn't communicate what you wan to communicate. I think what you want is this group will restrict itself to only JSON representations.  

**POLL**: This working group will restrict itself to work on VCs only with JSON representations.

> *Dmitri Zagidulin:* -1 (VC data model supports CBOR-LD and YAML-LD now, so restricting to JSON only is losing functionality).

> *Drummond Reed:* -1.

> *Christopher Allen:* -1.

> *Brent Zundel:* -1.

> *Sarven Capadisli:* -1.

> *mpororck:* -1.

> *Oliver Terbu:* -1.

> *David Waite:* -1.

> *Kerri Lemoie:* -1.

> *Ted Thibodeau Jr.:* -1.

> *Chris Abernethy:* -1.

> *Phillip Long:* -1.

> *Michael Jones:* -1.

> *Shawn Butterfield:* -1.

> *Ivan Herman:* 0.

> *Joe Andrieu:* 0.

> *Dave Longley:* -1 (already people working on CBOR-LD).

> *David Lehn:* -1.

> *Yi Shi:* 0.

**Kristina Yasuda:** Majority -1. A few 0s. People pointing on existing work on CBOR.  

> **Proposed resolution: This working group will restrict itself to work on VCs with only JSON representations.** *(Michael Jones)*
{: .proposed_resolution}

> **Proposed resolution: This working group will NOT restrict itself to work on VCs with only JSON representations.** *(Michael Jones)*
{: .proposed_resolution}

> *Drummond Reed:* +1.

> *Ted Thibodeau Jr.:* +1.

> *Brent Zundel:* +1.

> *mpororck:* +1.

> *Shawn Butterfield:* +1.

> *David Waite:* +1.

> *Michael Jones:* +1.

> *Oliver Terbu:* +1.

> *David Chadwick:* +1.

> *Dmitri Zagidulin:* +1.

> *Ivan Herman:* 0.

> *Chris Abernethy:* +1.

> *Joe Andrieu:* 0.

> *Dave Longley:* +1.

> *Christopher Allen:* +1.

> *Phillip Long:* +1.

> *Yi Shi:* +1.

> *Sarven Capadisli:* +1.

> *David Lehn:* +1.

> *Kerri Lemoie:* 0.

> *Manu Sporny:* +1 (but the details matter here... don't want an "Abstract Data Model" decision to happen again).

> *Dave Longley:* +1 to manu, details really matter here..

> *Gabe Cohen:* +0.

> ***Resolution #1: This working group will NOT restrict itself to work on VCs with only JSON representations.***
{: #resolution1 .resolution}

> *Manu Sporny:* In short, this is just stating reality right now -- we're already working on mapping VCs to other serializations, so it's a bit of a no-op poll..

**Christopher Allen:** Am committed to CBOR representation of this and a small community of this that doesn't want JWT or ???-LD..  
… At least tThis group now doesn't want ot prohibit future work on CBOR, e.g., WG on it..  

> *Manu Sporny:* The best way to achieve other mappings is to probably re-charter the group to work on "Mapping to X serialization" specs..

> *Joe Andrieu:* +1 to manu's point. that's why I voted 0.

> *Manu Sporny:* (like we do for VC-JWT today).

**Christopher Allen:** Am worried that this is wishy-washy whether our people are committed to working on one of these formats or wait for others to work on it. There are some advantages ... we're only applying to VCs as expressed in normative way for this and not prohibit future use or standardisation with CBOR..  

> *Joe Andrieu:* mapping from JSON to CBOR is within scope, IMO. Making an abstract data model to map to arbitrary serializations would be madness..

**Kristina Yasuda:** I decided to take up this conversation in cases where it'd effect the design choices you are making now.  

> *Phillip Long:* +1 to manu's suggestion to focus working topics..

> *Manu Sporny:* yes agreed w/ JoeA above ^.

> *mpororck:* Noting, per our comment on the issue - myself and others at mesur.io will commit to working on CBOR representations of VCs.

**Kristina Yasuda:** whether CBOR would actually be worked on .. and as you said it'd be the people that decides to or not or shows up. at least now trying to determine if there is enough interest and the decisions that need to be made right now.  

> *Christopher Allen:* I just would like this working group to say they will not get in the way of other groups doing CBOR..

> *Joe Andrieu:* +1 @ChristopherA helping map JSON to CBOR is important.

> *Manu Sporny:* Well, it depends on what other groups do -- if they do something that destroys the core data model in some way, that'll be of concern to this group.

> *Manu Sporny:* but if it's something that's complementary, this group would probably be supportive..

**Ivan Herman:** The reason I voted 0 is not because of aversion of CBOR or YAML or what might come up. I'm worried about reminder as a conversation that this group will do work like CBOR and what we achieve is what we've already started which is a lot of work. It shouldn't be regarded as a "yes, we will do it" and to not recommendation to the lot.  

**Kristina Yasuda:** It is that this group wouldn't get in the way if those get picked up.  

> *Manu Sporny:* This group would need to get in the way if the way the work is picked up is damaging to these specs..

**Dave Longley:** I at least we have unanimous support on that proposal. we didn't get into how that will be done or what serializations or who will do it. that's all important. it is not to block..  

> *Christopher Allen:* manu +1.

> *Michael Jones:* Mike's proposed poll #2: Our data model needs to accommodate non-JSON representations.

> *Manu Sporny:* In that, all of a sudden, we'll have work happening on VCs elsewhere, where this group will not have a say in the outcome -- that's a dangerous precedent to set..

**Dmitri Zagidulin:** Is the implication that we need an abstract data model like in the DID WG?.  

> *Manu Sporny:* I don't understand how poll #2 is different from poll #1.

**Michael Jones:** ???.  

> *Dave Longley:* i think poll #1 might get some -1s.

> *Dave Longley:* poll #2 i mean.

> *Dmitri Zagidulin:* +1 manu, what /is/ the difference from the previous poll?.

**Michael Jones:** The way the spec is written it presents JSON and some as JSON-LD.  

> *Manu Sporny:* Oh, no way, -1 to abstract data model -- never again! :P.

**Michael Jones:** We need to at least generalise the language so that other mappings are possible.  
… Not minimising the workload but to plan or anticipate that work.  

> *Dave Longley:* i'm not ready yet to say we have to generalize yet vs. doing mappings to JSON so i will be -1 to this.

> *Christopher Allen:* manu, does that mean a CBOR based VC can't do label property graphs rather than `@context`?.

**Michael Jones:** not touching the abstract data model word because some people have negative / positive reactions in the group. interested in results oriented the way it is worded.  

> *Manu Sporny:* same, feel like this is a set up to get to an abstract data model, which was a disaster in the DID Core WG..

**Ted Thibodeau Jr.:** I don't understand how the data model prevents representation in any format.  

**Michael Jones:** Right now I believe there is a a confusion with the data model and the concrete representation.  

**Ted Thibodeau Jr.:** That may be so but that's a different question.  

> *Manu Sporny:* ChristopherA -- I don't see anything that would preclude a mapping... but again, details matter and we don't have enough of how that stuff would work out..

**Ted Thibodeau Jr.:** This poll should be dropped and perhaps there is a better question we can address.  

**Ivan Herman:** I'd definitely -1 because it reworks the vc data model in a complicated way and we don't have the energy and time for that. And mindful of the work we are chartered.  

> *Dave Longley:* +1 to ivan.

> *Manu Sporny:* +1 to ivan.

**Ivan Herman:** the work in DID was good work but we also know it is very complicated to do.  
… and it'll require way more time than needed. we shouldn't go down that road.  

> *Drummond Reed:* I disagree with Manu (rather violently) that the work on the abstract data model in the DID WG was a "disaster"..

> *Phillip Long:* +1 to Ivan's comment.

> *Dmitri Zagidulin:* drummond -- it's a disaster cause it complicated things, and nobody actually did a non-JSON DID Doc representation.

**Joe Andrieu:** Strongly against multiple representations. We should have a single JSON representation and support mapping.  

> *Dave Longley:* +1 to Joe.

> *Oliver Terbu:* +1 to joe.

> *Christopher Allen:* If you are going to lock down data model (which I think I could go with), but only if it is JSON/JSON-LD.

> *David Chadwick:* +1 Joe.

> *Manu Sporny:* drummond, it didn't result in the outcome the group wanted (which was different serializations)... we just ended up w/ two JSON representations in the end, and the people that pushed the group to go to the abstract data model hardly doing any work to help..

> *Drummond Reed:* I'm not advocating that we move to an abstract data model, but I am advocating that we have a data model that is not tied to any specific graph model..

> *Manu Sporny:* +1 to Joe.

> *Jeremie Miller:* +1 drummond.

> *Manu Sporny:* drummond, do you agree with Joe's statement? That feels like it accomplishes what you want?.

**Kristina Yasuda:** we need to get on the same page regarding the definition of these terms: data model, representation, mapping.  

---


### 3. Resolutions
{: #res}

* [Resolution #1](#resolution1): This working group will NOT restrict itself to work on VCs with only JSON representations.
