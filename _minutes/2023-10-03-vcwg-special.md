---
layout: minutes
date: 2023-10-03
title: Verifiable Credentials Working Group Special Topic Call on I18N review for VCDM — 2023-10-03
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-10-03-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on I18N review for VCDM — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on I18N review for VCDM",
        "dateCreated": "2023-10-03",
        "irc": "vcwg-special",
        "datePublished": "2023-10-03",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on I18N review for VCDM",
            "startDate": "2023-10-03",
            "endDate": "2023-10-03",
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
                            "name": "Sebastian Crane"
                        },
                        {
                            "@type": "Person",
                            "name": "Manu Sporny"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Addison Phillips"
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
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "David Waite"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Paul Dietrich"
                },
                {
                    "@type": "Person",
                    "name": "Addison Phillips"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on I18N review for VCDM — Minutes
{: .no_toc}



**Date:** 2023-10-03

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20231003T110000/) and the [IRC Log](https://www.w3.org/2023/10/03-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Phillip Long, Will Abramson, Addison Phillips, Ivan Herman, Manu Sporny, Shigeya Suzuki, Ted Thibodeau Jr., Sebastian Crane, Gabe Cohen, Kristina Yasuda, Andres Uribe, Dave Longley, Michael Jones, Joe Andrieu, David Waite, Dmitri Zagidulin, Orie Steele, Paul Dietrich

**Regrets:** 

**Guests:** Addison Phillips

**Chair:** Kristina Yasuda

**Scribe(s):** Sebastian Crane, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---



> *Manu Sporny:* selfissued, can you please review: [https://github.com/w3c/vc-data-integrity/pull/196](https://github.com/w3c/vc-data-integrity/pull/196).


> *Manu Sporny:* see: [https://github.com/w3c/vc-di-ecdsa/pull/42](https://github.com/w3c/vc-di-ecdsa/pull/42).

> *Manu Sporny:* see: [https://github.com/w3c/vc-di-eddsa/pull/63](https://github.com/w3c/vc-di-eddsa/pull/63).

### 1. Internationalization WG review.
{: #section1}

**Kristina Yasuda:** Special meeting due to feedback on Internationalization.  
… Existing options had not been decided on.  

**Kristina Yasuda:** Please introduce yourself Addison.  

_See github issue [vc-data-model#1155](https://github.com/w3c/vc-data-model/issues/1155)._

<!-- issue w3c/vc-data-model/1155 -->



_See github issue [vc-data-model#1264](https://github.com/w3c/vc-data-model/issues/1264)._

<!-- issue w3c/vc-data-model/1264 -->



_See github pull request [vc-data-model#1271](https://github.com/w3c/vc-data-model/pull/1271)._

<!-- issue w3c/vc-data-model/1271 -->



**Addison Phillips:** I'm the chair of the I18N group at the W3C.  

> *Kristina Yasuda:* five options? [https://github.com/w3c/vc-data-model/issues/1264#issuecomment-1712807665](https://github.com/w3c/vc-data-model/issues/1264#issuecomment-1712807665).

**Manu Sporny:** The background of this: we've had guidance about supporting internationalization, with a design pattern for people to follow. In the 1.0 and 1.1 work, we haven't seen much adoption of the I18N features.  
… For 2.0, we are adding two fields expected to be multilingual.  

> *Manu Sporny:* Here are the potential options that we're considering: [https://github.com/w3c/vc-data-model/issues/1264#issuecomment-1712807665](https://github.com/w3c/vc-data-model/issues/1264#issuecomment-1712807665).

**Manu Sporny:** We had a number of options to consider for how to do it in 2.0.  
… We're looking to get to consensus on the option that we should choose, and one that will satisfy the I18N group.  

**Addison Phillips:** I had read through the summary of the discussion and will summarise here to ensure that we have a common understanding.  
… In general, the I18N Group would like to see that any natural language string field has metadata about at least A: language and B: text direction.  
… We aren't prescriptive about how that is performed. We also like to see a default language for documents.  

> *Orie Steele:* It would be good to get a stronger opinionated recommendation regarding approaches.

> *Kristina Yasuda:* we kind of have 1.90 foot in LD world.

> *Dave Longley:* I think we have both feet in LD world, we just want to use the simplest on-ramps.

> *Dave Longley:* and adding `@value`, `@language`, and `@direction` in fields locally is the easiest way to do that.

**Addison Phillips:** I think it sounds like being somewhat in the Linked Data world as well as a more general specification produces some complications.  
… We would like to understand more the concerns around global @language directives, because we are wondering whether these concerns apply to the wider LD community.  
… From what we've learnt so far, the I18N group is trying to produce best practice recommendations to other groups.  
… One of the ones that we've already been working on is quite different from your approach. I would like to share it with you.  

**Manu Sporny:** On the topic of being both in the LD world and not, it seems like a subset of our community are less likely to adopt the specification when LD features are added.  
… We've tried to reduce the LD features to a minimum up until now.  

> *Orie Steele:* -1 to asserting that "avoiding using LD is a possibility at this point".

> *Dave Longley:* -1 that we can / are avoiding it, +1 that we're choosing the easiest on-ramps.

> *Orie Steele:* -1 to being vague about understanding conforming documents (which are JSON-LD in compact form).

**Manu Sporny:** As for Option E (using a translation file), I think you mentioned that you were against it, and there seems to be agreement within this WG.  

**Addison Phillips:** I would not object to translation files per se, but I would point out technical complications about multiple requests and resources. I think that doesn't sound like the right pattern for credentials.  

**Manu Sporny:** Option E can eliminated then!  
… For option D, I don't think this option has any advantages over using the LD method of a global @language, which is effectively the same in effect.  

**Addison Phillips:** It is common for us to recommend that specifications do this. It would be better if there were generic mechanisms, but specification-specific fields are OK.  

> *Dave Longley:* -1 to option D.

> *Dave Longley:* -1 to option E.

> *Shigeya Suzuki:* For the record: option E is externalization, and it will not be possible unless we define internal way to express it IMO.

> *Dave Longley:* +1 to eliminate E.

**Kristina Yasuda:** Are there any objections to eliminating option E?  

> *Andres Uribe:* +1 to eliminate E.

> *Manu Sporny:* +1 to eliminate option E.

> *Shigeya Suzuki:* I'm fine with eliminating option E for now..

> *Phillip Long:* -1 to option E & D.

> *Joe Andrieu:* +1 to eliminate E.

> *Manu Sporny:* +1 to eliminate option D (but keep it around as a backup plan).

**Addison Phillips:** I would suggest that you could keep it for a 'backup'.  

**Andres Uribe:** I think that's the default if we can't get consensus of anything else.  

**Sebastian Crane:** I wanted to mention option E with the translation files, sometimes they look really good on paper, but in practice, lots of complications.  
… networked translations, even when installed on computer, there are still lots of issues, GNU style translation -- .pot files -- translates based on literal value of string, but as linguists say, there are cases where you can have same words which mean two semantically different things and language files as used in GNU world don't have opportunity to disambiguate those. Number of complicates here with Option E.  

> *Shigeya Suzuki:* I don't want to spend time time on this, but the way gettext/po used is studied well and in some non-english area esp. in CJK area, it's useful.

> *Sebastian Crane:* I agree with addison: they can be used correctly but I think that is unlikely to be the case in the VC world.

**Ivan Herman:** Option D means having two properties: language and text direction. We need both on the default level.  
… Is this the general view as well?  

> *Manu Sporny:* We do need to express language AND direction.

> *Manu Sporny:* yes, that's the general agreement, I believe.

**Addison Phillips:** Indeed, I agree we would need to have this.  

> *Manu Sporny:* Here is option C:.

```
    "credentialSubject": {
        "myHumanReadableProperty": [{
            "@value": "This is some human-readable text.",
            "@language": "en"
        }, {
            "@value": "هذا بعض النص الذي يمكن قراءته بواسطة الإنسان.",
            "@language": "ar",
            "@direction": "rtl"
        }]
```

> *Dave Longley:* +1 to this option (C, I believe), i think it's the simplest and will work generally for any natural language field.

**Manu Sporny:** We would express the value of the string, the language, and the text direction. I believe this meets the requirement that addison illustrated.  

> *Dmitri Zagidulin:* +1 to option C, works well for multi-language credentials in Edu land.

> *Phillip Long:* +1 to Option C, as it does indeed work well in edu-land.

**Manu Sporny:** We've mainly been discussing whether to alias the "@X" terms. Sebastian proposed options C on two occasions, and there were no objections raised. I believe it addresses all concerns except for the ability to specify a global default.  

> *Sebastian Crane:* +1 to Option C obviously :).

**Manu Sporny:** It's not easy to test this, as multiple languages are optional.  

> *Manu Sporny:* +1 to speaking to Option C in the specification.

**Addison Phillips:** I'm concerned that whilst the 'SHOULD' and 'MAY' are good supports for internationalisation, there will still be completely unlabeled strings.  
… I would like it to be possible to know a default, for when people don't want to put all the extra syntax in.  

**Manu Sporny:** Can we ask if the group is OK exploring option C further?  

**Kristina Yasuda:** If anyone is strongly in objection to option C, please speak now.  

**Sebastian Crane:** To repeat for addisons' benefit -- VCs don't inherently have a language... language on field such as name/description is for human holder of VC in a wallet application. When you have the RDF world, link things together based on ontological truth, actual meaning...  
… you don't necessarily want to apply a language to the specific credential, you want to apply language to description of credential... that's why I like option C -- translate those human-readable values, credential itself doesn't have a language.  

> *Orie Steele:* Conforming documents are represented in JSON-LD.... the philosophical concept of credentials is not helpful... JSON-LD will have text that is in a human readable language (both the term definitions, the text behind them, and their literal values).

**Addison Phillips:** Yes, important observation, locale-neutral data... when people talk about these things, name/description is how humans interact... can't look at other things and talk meaningfully about them... credential has BS of science -- those names/descriptions are of natural language pieces... want natural language to be associated with those parts, not other data.  
… challenge is that machine generates these things, people writing code may or may not be willing to generate multiple language versions, or they may not wish to obtain and serialize information on per-field basis... if you're willing to say MUST, then we're good.  
… I think that's an important distinction: one wants to have language-neutral data if at all possible. A complication is that humans can't talk meaningfully about the pure data, only about the natural language descriptions.  

**David Chadwick:** I think MUST is fine, but not sufficient. Let's say you have a degree from a Japanese university and has language metadata, that degree credential is still not readable by a typical English person.  
… I believe that C is necessary, but doesn't completely solve the internationalisation concerns.  

**Andres Uribe:** I'm definitely supportive of Option C. In addition, I would like to see aliasing. I don't really understand why aliasing will cause problems with JSON-LD, so I would appreciate an explanation here.  

> *Dave Longley:* aliasing `@value` will alias it for everything, not just language values.

**Manu Sporny:** The short answer is that `@value` is also used for non-natural-language fields. We can't just aliases it globally without making other fields have unwanted language features.  

> *Dave Longley:* so making it say `langValue` (or whatever) for non-language values will be weird / confusing.

> *Orie Steele:* The comment about "re-compacting" / "compacting" is critical for the WG to understand.

**Manu Sporny:** For that reason, I would be strongly opposed to aliasing if option C can be sufficient. It is only a single character difference.  

> *Orie Steele:* I'm not sure that there is understanding here... and we should clarify.

**Andres Uribe:** Thank you, that answered my question.  

**Manu Sporny:** We would end up getting our alias appearing in unexpected places.  

**Kristina Yasuda:** I would like to ensure that other options are considered as well and we are running out of time.  

> *Manu Sporny:* I'm afraid that we're not going to be able to get to "MUST always use `@value`/$MD_CODE$/$MD_CODE$" when expressing human-readable strings.

**Kristina Yasuda:** Let's discuss option B and A.  

> *Dmitri Zagidulin:* +1 manu.

**Manu Sporny:** The suggestion I'm hearing is to remove option A. It just allows us to use 'prettier' values, but doesn't have any advantage.  

> *Orie Steele:* If folks don't understand "compact vs non compact LD"... they don't understand what a conforming document is.... so we should be cautious requiring "non compact" processing of languages, because they spec does not require people to understand that.

> *Dave Longley:* if option B is putting `@language` as a default language in the context then -1 to that, it corrupts the data.

**Manu Sporny:** Option B provides a document-level default. The issue that we would need to flag is non-natural-language fields being classed as a specific language, such as Base64 data being marked as natural language.  
… We could make Option B a fallback to Option C, but that has downsides for the JSON-LD context architecture.  
… I believe the options here are Option B+C - OR - Option C+D.  

**Addison Phillips:** You can't prevent people from serialising `@language` globally. You could deprecate that behaviour of course.  

> *Orie Steele:* IMO, if you can't stop people from doing something, its considered best practice to give them guidance... and not be silent.

**Sebastian Crane:** I'd like to talk about Option C only.  
… This is an implementation consideration, authenticate users, use existing libraries -- if those tools made it as easy to set a default in the code and have the serialization of fields automatic, as writing the serialized language feature at the top, then people would use that feature. In contrast to HTML, people were hand-writing it... but due to cryptography involved, people aren't hand-writing VCs. Lack of global language feature could.  

> *Manu Sporny:* be side-stepped in implementations.

> *Kristina Yasuda:* I do not like the idea of let's rely on the library to implement this correctly..

> *Shigeya Suzuki:* +1 kristina.

**Ivan Herman:** We could argue the same thing about HTML, as few people write HTML by hand. What's the proportion of tools that produce linguistically undefined documents? Perhaps addison knows.  

> *Shigeya Suzuki:* It's depends on complexity of the output. for a simple VCs, it's not necessary to depends on huge library. not all people have freedom on memory and energy usage.

**Ivan Herman:** Maybe putting the language metadata in all fields is a bit naive.  
… I am not particularly partisan to the technique, but I think it's important to have something for global language.  

> *Ted Thibodeau Jr.:* can we globally say "language: undefined" or "language: various" or similar?

**Addison Phillips:** To Sebastian's point, if you say that it's a MUST and all the libraries implement it, maybe it would be moot. I'm not sure that you could expect that response without a MUST.  

**Kristina Yasuda:** can everyone put your favorite option on IRC.  

> *Kristina Yasuda:* C+D.

> *Ivan Herman:* C+B.

> *Dmitri Zagidulin:* C+D for me.

> *Sebastian Crane:* C.

> *Dave Longley:* -1 to C+B because it corrupts all string fields that are not natural language fields (which is a common thing in VCs).

> *David Chadwick:* c+d.

> *Manu Sporny:* C+B.

> *Phillip Long:* C+B or if we're ranking 1, C+B, 2, B+D, 3, C.

> *Dave Longley:* +1 to just C, I don't think there's a significant difference in MUST/SHOULD with C and having a default language with D, the people that don't want to do it won't do it either way -- and only tools will stop them.

> *Dmitri Zagidulin:* wait D is in the VC core context or in the VC itself?

> *Joe Andrieu:* +1 to C.

> *Manu Sporny:* D is in the VC itself.

> *Kristina Yasuda:* D is in VC itself I think.

> *Shigeya Suzuki:* I think slightly C+B better but C+D is also acceptable.

> *Dave Longley:* that's an insufficient description of B and D ...

**Dmitri Zagidulin:** can we remind people of the difference between D and B?  

**Manu Sporny:** D creates a new feature, B uses an existing JSON-LD feature.  

> *Dave Longley:* B will use a JSON-LD feature that will apply a language to EVERY string field, even non-language fields.

> *Dmitri Zagidulin:* in that case, C+B.

> *Orie Steele:* I think I agree with what dimitri is saying though...

> *Dave Longley:* D will invent something new for VCs but only apply it to natural language text fields.

> *Orie Steele:* ^ yeah... that.

> *Phillip Long:* Ori is up.

**Ivan Herman:** dlongley said that every field will get a language tag with B. However, if we had LD tags for datatypes, that won't be an issue.  

> *Dmitri Zagidulin:* agree with ivan.

**Ivan Herman:** It's not as bad as it looks considering the existence of those JSON-LD datatypes.  

> *Dmitri Zagidulin:* an app somehow interpreting language & direction on a base64 string or whatever is /not/ a realistic problem.

**Dave Longley:** I agree with you that we should use datatypes, but the JOSE and COSE parts do not have data types defined.  

> *Orie Steele:* also not necessary... to do... because the data model is COMPACT JSON_LD !!!!

**Sebastian Crane:** It is a bit involved, I'll write to the mailing list, can we delay a vote for day or two to engage w/ email.  

**Kristina Yasuda:** We appreciate Addison's time. Thank you!  

---
