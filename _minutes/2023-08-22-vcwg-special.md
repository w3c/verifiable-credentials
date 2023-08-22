---
layout: minutes
date: 2023-08-22
title: Verifiable Credentials Working Group Special Topic Call on PR Discussions — 2023-08-22
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-08-22-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on PR Discussions",
        "dateCreated": "2023-08-22",
        "irc": "vcwg-special",
        "datePublished": "2023-08-22",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on PR Discussions",
            "startDate": "2023-08-22",
            "endDate": "2023-08-22",
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
                            "name": "Paul DietrichGS1"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Benjamin Young"
                },
                {
                    "@type": "Person",
                    "name": "Sebastian Crane"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Ivan Herman"
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
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
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Steve McCown"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes
{: .no_toc}



**Date:** 2023-08-22

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20230822T110000/) and the [IRC Log](https://www.w3.org/2023/08/22-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Benjamin Young, Sebastian Crane, Gabe Cohen, Shigeya Suzuki, Ivan Herman, Manu Sporny, Orie Steele, Ted Thibodeau Jr., Paul Dietrich, Dave Longley, David Chadwick, Phillip Long, Hiroyuki Sano, Chris Abernethy, Steve McCown, Andres Uribe, Dmitri Zagidulin

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Paul Dietrich

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. PRs.
{: #section1}

**Brent Zundel:** primary topic for today is pull requests.  

> *Brent Zundel:* [https://github.com/w3c/vc-data-model/pulls](https://github.com/w3c/vc-data-model/pulls).

> *Sebastian Crane:* [https://github.com/w3c/vc-data-model/issues?q=is%3Aopen+is%3Aissue+-label%3Abefore-CR+-label%3Apost-CR](https://github.com/w3c/vc-data-model/issues?q=is%3Aopen+is%3Aissue+-label%3Abefore-CR+-label%3Apost-CR).

#### 1.1. Add "author" and "party" to terminology, rewrite "claim" terminology (pr vc-data-model#1172)
{: #section1-1}

_See github pull request [vc-data-model#1172](https://github.com/w3c/vc-data-model/pull/1172)._

<!-- issue w3c/vc-data-model/1172 -->



**Brent Zundel:** when we last talked about this chairs expressed that if we could not find consensus we would want to close it. Ted brought up this is a hard conversation to have in an issue.  

> *Orie Steele:* +1 to closing.

**Brent Zundel:** my inclination is to close unless there are objections today.  

> *Orie Steele:* +1 Manu!

**Manu Sporny:** we the group should learn something from this PR. Its hard to change terminology as its been worked on for years. Start with an Issue and avoid scope creep.  
… the definitions were changed in a way that were more specific and accurate and correct but made it complex so the term ended up not being useful. terminology section is probably not the place to do this.  

> *Orie Steele:* This kind of PR might be more successful in use cases, implementation guide or other notes.

**Brent Zundel:** agree with observations and not heard any objects. After this call I will close this.  

#### 1.2. Add validation section regarding holder (pr vc-data-model#1199)
{: #section1-2}

_See github pull request [vc-data-model#1199](https://github.com/w3c/vc-data-model/pull/1199)._

<!-- issue w3c/vc-data-model/1199 -->



**Orie Steele:** we had asked Joe to review again and he has concrete change requests here. Ted has a comment on them.I havent had a full change to review.  

**Ted Thibodeau Jr.:** I think Joes suggestion is good and does need a couple notes that I put in a comment below. Other comment is not important at this time.  

**Brent Zundel:** Orie, can you make that change.  

**Ted Thibodeau Jr.:** I will put a suggestion and orie will merge.  

> *Orie Steele:* Just a note that Joe might have further objections after this is applied.

**Brent Zundel:** Expect this PR to be merged in the next day or so.  

#### 1.3. Add language on mitm, replay, spoofing attacks (pr vc-data-model#1238)
{: #section1-3}

_See github pull request [vc-data-model#1238](https://github.com/w3c/vc-data-model/pull/1238)._

<!-- issue w3c/vc-data-model/1238 -->



**Gabe Cohen:** I have accepted all the suggestions outstanding and welcome further review.  

**Brent Zundel:** Has been out for a week. encourage review. request for any other comments.  

**Manu Sporny:** I think this PR is ready to go. All other PR are less than 2 days old. suggest that we skip them.  

**Sebastian Crane:** would it not be better to have a glossary, referring to PR 1238.  

> *Orie Steele:* yeah, agree regarding the wikipedia citations.

> *Gabe Cohen:* note: we had already linked to wikipedia, I just did it more.

**Manu Sporny:** I think its fine to link out to wikipedia in sections that are non normative. May be that wikipedia is a better place for this definition than the spec.  

> *Orie Steele:* +1 Manu.

> *Shigeya Suzuki:* I agree with Manu on this references.

#### 1.4. Provide actionable guidance related to base context hash value. (pr vc-data-model#1249)
{: #section1-4}

_See github pull request [vc-data-model#1249](https://github.com/w3c/vc-data-model/pull/1249)._

<!-- issue w3c/vc-data-model/1249 -->



**Brent Zundel:** move on to 1249.  
… I'm inclined to go through them as normal.  
… this PR has had some review and comments. Manu can you summarize.  

**Manu Sporny:** Jeffery said that you dont give concrete guidance on what to do if the base context hash is different than what you expected. This updates the spec that provides language around this so its impossible for it to be anything different than what it is.  
… gabe asked whether we expect this to be immutable., yes unless we make a mistake and then we will update them.  

> *Orie Steele:* I would say *no, not immutable* hence the comments about errata and cache timing.

**Brent Zundel:** any comments on this PR before we move forward.  

#### 1.5. Apply range requirements to validFrom/validUntil. (pr vc-data-model#1250)
{: #section1-5}

_See github pull request [vc-data-model#1250](https://github.com/w3c/vc-data-model/pull/1250)._

<!-- issue w3c/vc-data-model/1250 -->



**Brent Zundel:** this PR has lots of approvals as well as questions from ted that have been addressed.  

**Manu Sporny:** this items applies range requirements for valid from and valid until. We didn't specify that one had to be larger than the other. We also have language that says that the datetime value has to be temporally the same.  
… gabe pointed out that the language could be confusing. Interested in other peoples feedback. Do we need to go into details about value space and lexical space.  
… so far lots of approvals. Looking for feedback from gabe.  

**David Chadwick:** we had wording we agreed to in the issue, but its not in the version I am looking at.  

**Ted Thibodeau Jr.:** Its in the white background in the PR.  

**David Chadwick:** I clicked on the diff with the version for the 22nd of Aug (Today).  

**Manu Sporny:** It is there David as Ted Said. Lines 1674-1676.  

> *Orie Steele:* I don't see it in the diff.

**David Chadwick:** It doesn't show in the PR diff bit.  

> *Orie Steele:* because its already been added previously.

**Manu Sporny:** it was made previously in another diff.  

**Ted Thibodeau Jr.:** Do you see one version on left and one on right?  
… instead of clicking the preview, click the link in the IRC chat.  

**David Chadwick:** Im looking in zoom and see the blue highlight. What about in the past?  

**Ted Thibodeau Jr.:** its below in the next section.  

**David Chadwick:** The point I am making is that the validFrom can be in the past, not just validUntil.  

**Ted Thibodeau Jr.:** you want to say that both validFrom and validUntil could be future or past or anywhere?  

**David Chadwick:** yes.  

**Ted Thibodeau Jr.:** we can put in on both. and take it offline.  

**Orie Steele:** a brief comment on temporally means will help. The things that should be clear to everyone is that these are string representations. I could imagine people having use cases.  
… for valid from an validUntil that are not these string formats, but you can't use these terms for that kind of thing. A quick sentence on what temporally means would be hekpful but this could go in as written.  

> *Orie Steele:* I agree, comparing strings seems safer, than comparing values, but time is hard.

**Gabe Cohen:** my concern is that there could be implementation bugs. small risk of implementation bug, but I dont think its a big deal.  

**Manu Sporny:** I will add some language on what temporally means.  

#### 1.6. Outline plan to mitigate normative context risk when transitioning to Proposed Recommendation (pr vc-data-model#1251)
{: #section1-6}

_See github pull request [vc-data-model#1251](https://github.com/w3c/vc-data-model/pull/1251)._

<!-- issue w3c/vc-data-model/1251 -->



**Brent Zundel:** this on is in direct response to comments. Has nothing but approval so far.  

**Manu Sporny:** when Jeffrey did his review of our specs, he said that he noted we made the context normative and referenced other specs at a lesser level of maturity. This could slow down VC data model from getting to req. Or if it goes to req, you may be limiting your dependencies.  
… this could make other specs like statusList VC JOSE COSE unable to change because the data model locked them in.  
… This PR expresses the strategy to deal with this as we move to CR>.  

**Ivan Herman:** we should aim at producing the recommendations at exactly at the same. Why can we do one recommendation with all the documents.  

> *Orie Steele:* +1 to exact timing, especially given our bundling strategy in vc data model.

> *Manu Sporny:* I'd be fine w/ exactly... we'll be doing it towards next April/May-ish timeframe, probably.

#### 1.7. Add section about Names and Descriptions of credentials. (pr vc-data-model#1252)
{: #section1-7}

_See github pull request [vc-data-model#1252](https://github.com/w3c/vc-data-model/pull/1252)._

<!-- issue w3c/vc-data-model/1252 -->



**Manu Sporny:** this adds name and description to the data model. A bit unsure about what to do. Addison did a review on name a description and we don't have a good internationalization story for these.  
… there are places around the world that have legal requirements to publish in multiple languages. This may require these countries to issue multiple credentials in multiple languages.  
… JSON-LD has a straightforward internationalization story, but with the JSON processing mechanism we don't quite have it. We could use the same pattern.  
… If we want to express multiple languages you would use an array with each item in the array being an expression.  
… that is the proposal here. That does not prevent someone from using just plain text string.  

**Ivan Herman:** the reason I queued is to say we already have an internationalization story in the document. I fully agree we should take over what is there. There is no standard story for internationalization in the JSON land so whatever we do we would have to invent something.  

**Orie Steele:** recommend referencing on internationalization section with concrete advice. We could ask for an internationalization review. Could be relevant to us.  
… we should have one section to consistently refer to for this and reference that section here.  

**David Chadwick:** I agree and like Manu's idea. It could either be in this example or as Orie suggested it could be a separate section with an example. Somewhere in the document we should have an example.  

**Sebastian Crane:** Wanted to ask Orie. What do you mean by strings file here?  

**Orie Steele:** we've talked about this a pretty long time ago. The original examples included the JSON LD language feature. There was discussion that that wasn't used widely and that it was an experiment and not a good use for this. In other application they use strings files for this kind of thing.  

> *Shigeya Suzuki:* That's what I said long time ago...

**Orie Steele:** I think there was discussion but nothing concrete happened. I was summarizing the previous comments I remembered around internationalization.  

**Ivan Herman:** I was not part of the earlier discussions in the previous version of the working group. As far as I know the language feature of JSON LD is stable and used. I don't see a problem with it.  

**Shigeya Suzuki:** from my point of view, the discussion I had that was happening prior to the decision we made. We are based on JSON LD construct which seems to be good enough.  
… what I current observe is how we want to express the construct in JSON LD. I think that what we want to do is (as Ivan mentioned) is how we address this in the spec text.  
… I think the mapping strings is useful, but this construct is not discussed until now. Its a bit too late to discuss this. I will try to write a document with regards to the extension point but its doubtful to be part of the standard.  

> *Orie Steele:* if its possible to not leave i18n a "choose your own adventure" that seems like a good idea, either recommend `@language` or recommend against it.

**Sebastian Crane:** would you object to create a PR to the issue using the JSON LD construct?  

> *Manu Sporny:* The current proposal would end up looking something like this:  
> ```
> "name": [  
>     {"value": "This is in English", "lang": "en-US"},   
>     {"value": "هذا باللغة العربية", "lang": "ar", "dir": "rtl"}  
> ]
> ````

**Manu Sporny:** describing the example he put in the minutes above. The only problem is that people haven't been using this, and avoiding internationalization.  
… shigeya did suggest we use an external document that does translation, but to date we have not had a concrete proposal and we are out of time. Not clear if that proposal would get better traction. What we are proposing now does not prevent this potentially better proposal from happening the future. The way that we are doing this does not require JSON LD processing. Its a design pattern for JSON.  

> *Orie Steele:* I agree with basically everything manu said.

**Manu Sporny:** We will provide an example, we will provide concrete language, we will provide a warning.  
… at least, I intend to update the PR with the above ^.  

**Orie Steele:** to be concrete in the recommendation. We should provide an example like what manu shared. We should provide a warning that not many people are doing this and that in the future there could be other mechanisms.  
… it would be better to be direct around challenges and provide text in one section.  

> *Dave Longley:* +1 to continuing to follow our approach of defining what should be done in the VCDM by just reusing what JSON-LD already does.

> *Dave Longley:* and adding the appropriate aliases as needed.

**Sebastian Crane:** I will create a PR to describe examples of using the JSON LD language concept and that say in the future we may add something to the VC context to do without jSON-LD processing.  

> *Dave Longley:* +1 to Dmitri's comments on "this is new".

**Dmitri Zagidulin:** Its not that big of a deal. In a spec that is just being baked, its clear that not a lot of people are doing this. This kind of language seems useless.  

> *Shigeya Suzuki:* +1.

**Brent Zundel:** A concrete path forward for this PR and other.  

> *Orie Steele:* it's true, but internationalization can cause lots of drama... so it deserves extra caution... see IDNA.

#### 1.8. Vocabulary fixes — replacement of #1241 (pr vc-data-model#1253)
{: #section1-8}

_See github pull request [vc-data-model#1253](https://github.com/w3c/vc-data-model/pull/1253)._

<!-- issue w3c/vc-data-model/1253 -->



**Ivan Herman:** there was another one 1241 with a lot of approval. I came in a bit late and there were some things missing. I proposed to do another PR over that PR to simplify things. While doing this, I realized that the PR would lead to all kinds of merging problems because in the meantime other PRs were merged. So 1253 is 1241 plus some minor additions. I would expect that the people that reviewed 1241 their approval would be ok to make a final decision. 1253 is 1241 plus some requested changes.  

_See github pull request [vc-data-model#1241](https://github.com/w3c/vc-data-model/pull/1241)._

<!-- issue w3c/vc-data-model/1241 -->



> *Manu Sporny:* PR #1253 and #1241 is looking good...

**Brent Zundel:** based on that and 1241 was around for a week and had nothing but approvals. I anticipate 1253 will be merged soon.  

### 2. closing.
{: #section2}

**Brent Zundel:** adjourn until tomorrow. Its a goal of this working group that every before-CR labeled issue have a PR before TPAC. That is 3 weeks from now. If you have an assignment for one of these issues, please raise a PR.  

---
