---
layout: minutes
date: 2024-01-16
title: Verifiable Credentials Working Group Special Topic Call on Outstanding Issues/PRs — 2024-01-16
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2024-01-16-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding Issues/PRs — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Outstanding Issues/PRs",
        "dateCreated": "2024-01-16",
        "irc": "vcwg-special",
        "datePublished": "2024-01-17",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Outstanding Issues/PRs",
            "startDate": "2024-01-16",
            "endDate": "2024-01-16",
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
                            "name": "Andres Uribe"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
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
                    "name": "Wesley Smith"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Outstanding Issues/PRs — Minutes
{: .no_toc}



**Date:** 2024-01-16

See also the [Agenda](https://www.w3.org/events/meetings/eaf86734-c2f9-410e-86b9-1cca18d0d6c9/20240116T180000/) and the [IRC Log](https://www.w3.org/2024/01/16-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Hiroyuki Sano, Ted Thibodeau Jr., Andres Uribe, Dave Longley, Wesley Smith, Dmitri Zagidulin, Joe Andrieu, Gabe Cohen, Will Abramson

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Andres Uribe

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. Privacy WG announcement.
{: #section1}

**Brent Zundel:** Wes, welcome to the group.  
… manu, can you talk through this?  

> *Manu Sporny:* W3C Privacy WG Charter: [https://lists.w3.org/Archives/Public/public-credentials/2024Jan/0027.html](https://lists.w3.org/Archives/Public/public-credentials/2024Jan/0027.html).

**Manu Sporny:** Privacy WG announcement heads up. The W3C privacy charter is under vote. It closes in the next 24 hours.  
… Their work is relevant across multiple groups.  
… An official privacy group would carry more weight.  
… Heads up that the vote is open and will close soon.  

**Brent Zundel:** Do you know if the group is alongside the privacy interest group, or a replacement?  

**Manu Sporny:** I don't know. I thought the PING was going away and the new group would be the official group. The first document they'd deliver is "don't resell my data" as an HTTP header.  
… It's similar to do-not-track, but designed with the new privacy regulations in mind.  
… If PING stays around, it will act as a CG.  
… The new group is expected to publish TR.  

> *Ted Thibodeau Jr.:* "This proposed Working Group would replace the Interest Group." is the last sentence of section 1 of the proposed charter.

**Ted Thibodeau Jr.:** it's in the charter that it's replacing the interest group. There is also a community group.  

**Brent Zundel:** Sounds like producing docs is the direction they're heading.  

> *Ted Thibodeau Jr.:* also -- "Teleconferences: every 2 weeks, as needed, alternating with PrivacyCG meetings." So CG and WG will coexist.

### 2. Bitstring Status List Issues.
{: #section2}

> *Brent Zundel:* [https://github.com/w3c/vc-bitstring-status-list/issues?q=is%3Aissue+is%3Aopen+label%3Abefore-CR+sort%3Aupdated-asc](https://github.com/w3c/vc-bitstring-status-list/issues?q=is%3Aissue+is%3Aopen+label%3Abefore-CR+sort%3Aupdated-asc).

#### 2.1. TAG Review Request -- Submitted (issue vc-bitstring-status-list#72)
{: #section2-1}

_See github issue [vc-bitstring-status-list#72](https://github.com/w3c/vc-bitstring-status-list/issues/72)._

<!-- issue w3c/vc-bitstring-status-list/72 -->



**Brent Zundel:** Moving to our first issue. Goal is to share status, and to help forward as needed.  
… have we heard back from TAG?  

**Manu Sporny:** I don't know. I was going to say 72 and 77 are tracking issues.  
… We requested back in July. So we can proceed as they've timed out.  

**Brent Zundel:** the request in the TAG github that was raised, it would be good to link to this issue.  

> *Manu Sporny:* See [Relevant TAG issue](https://github.com/w3ctag/design-reviews/issues/874).

**Manu Sporny:** It's been reviewed already.  
… They asked for pointers, we responded. They're asking to schedule time in the f2f in London.  

**Brent Zundel:** Good. Moving on.  

#### 2.2. Security and Privacy Questionnaire (issue vc-bitstring-status-list#77)
{: #section2-2}

_See github issue [vc-bitstring-status-list#77](https://github.com/w3c/vc-bitstring-status-list/issues/77)._

<!-- issue w3c/vc-bitstring-status-list/77 -->



**Brent Zundel:** What's the status?  
… From PING or security?  

**Manu Sporny:** I thought Kyle did a review on this; haven't found the issue.  

**Brent Zundel:** Not seeing issues.  

**Manu Sporny:** Neither am I, perhaps they weren't filed.  

**Brent Zundel:** We need PING and Security requests raised.  

**Manu Sporny:** I'll take an action to do that.  

#### 2.3. Matching of VC issuer and Status List VC issuer - MAY vs MUST (issue vc-bitstring-status-list#124)
{: #section2-3}

_See github issue [vc-bitstring-status-list#124](https://github.com/w3c/vc-bitstring-status-list/issues/124)._

<!-- issue w3c/vc-bitstring-status-list/124 -->



**Manu Sporny:** This was a request from dmitriz. They requested clarification from the spec, which is what PR 129 does. As a result, merging will address 124. TallTed has some minor fixups in the PR.  

#### 2.4. Remove `ttl` (issue vc-bitstring-status-list#120)
{: #section2-4}

_See github issue [vc-bitstring-status-list#120](https://github.com/w3c/vc-bitstring-status-list/issues/120)._

<!-- issue w3c/vc-bitstring-status-list/120 -->



**Brent Zundel:** PR 128 is associated with this.  

_See github pull request [vc-bitstring-status-list#128](https://github.com/w3c/vc-bitstring-status-list/pull/128)._

<!-- issue w3c/vc-bitstring-status-list/128 -->



**Manu Sporny:** The PR marks the TTL property as at-risk. Allows us to go to CR. The assertion is that the "ttl" property and the "validUntil" property clash when they are both set.  
… Seems like the "ttl" property should not exists.  
… There is disagreement on that.  

**Dave Longley:** There are conflicting semantics and likely layering violations. When would software look at ttl vs validUntil?  
… Might be that the way TTL is done via HTTP headers instead of mixing it up with the credential data.  

#### 2.5. Add `@type` to `encodedList` term definition (issue vc-bitstring-status-list#125)
{: #section2-5}

_See github issue [vc-bitstring-status-list#125](https://github.com/w3c/vc-bitstring-status-list/issues/125)._

<!-- issue w3c/vc-bitstring-status-list/125 -->



**Brent Zundel:** Has PRs, expected to be merged soon.  

**Manu Sporny:** Want to highlight that we want to make possible for systems to compress this data.  
… Status list might be hundreds of KB, plus bloat of encoding.  
… This allows reduction by defining a type. This group defined multibase with a u prefix on it.  
… We changed this from base64 with padding to base64 nopad.  

#### 2.6. "bitstring" vs "bit string" (issue vc-bitstring-status-list#127)
{: #section2-6}

_See github issue [vc-bitstring-status-list#127](https://github.com/w3c/vc-bitstring-status-list/issues/127)._

<!-- issue w3c/vc-bitstring-status-list/127 -->



**Brent Zundel:** We have time to talk about this.  

**Manu Sporny:** As pointed by TallTed, there are two ways to refer to what we're explaining: "Bit string" vs "Bitstring".  
… Both forms are fine. One is more popular.  
… SEO, typing, and other arguments are weak.  
… The changes require a lot of work from the editorial standpoint, for not much to gain.  

**Ted Thibodeau Jr.:** Having done some painful research on the PR on this, we started from "Bit String", and it was arbitrarily changed to "Bitstring".  
… From web searching, both exists. The one word, redirects to the two word.  

> *Dmitri Zagidulin:* if we're the only ones that use 'bitstring'... that's perfect SEO! that's what we want!

**Ted Thibodeau Jr.:** They are usually consistent within a doc. It will be painful, and I grant that it will be painful at some point.  
… The two word is more correct.  

**Dmitri Zagidulin:** I posit that the one word is a feature, not a bug.  

**Joe Andrieu:** I'm on the fence because I like plain English. But branding wise, bitstring seems better.  

**Manu Sporny:** I don't disagree.  
… Given I just found out we haven't submitted PING nor privacy, it could be we're sitting in limbo for 3 months. That's enough time to make the change.  

> *Ted Thibodeau Jr.:* as far seo goes, `vc bit string` (note, no quoting, as most web searches go) is going to find them `vc bitstring` and `vc bitstring` is going to find them `vc bit string` .... the thing they really want SEO to work for is Verifiable Credentials, not bit string.

**Manu Sporny:** We just need closure. Either keep, or change it and do it.  

**Brent Zundel:** The question on the table is: do we keep or change? If we change, who does the work?  

**Dave Longley:** While we have the time, implementations are looking for stability.  

**Ted Thibodeau Jr.:** As far as SEO goes, both the one word and two words will show up in the search results; because most people don't put searches in quotes.  
… They're likely going to put VC right next to the query, and are likely to quickly find what they're looking for.  

**Brent Zundel:** We've spent enough time on this today.  
… Anything else?  

**Joe Andrieu:** Would it need to be hyphenated when using the two words?  

**Ted Thibodeau Jr.:** Both are nouns, so that could be confusing. Everything I've found treats it as an adjective.  
… It could be hyphenated, but nothing I've found uses it that way.  

**Brent Zundel:** That's it, thanks all. Looks like we're on track except for the PING & security reviews for bitstring.  

---
