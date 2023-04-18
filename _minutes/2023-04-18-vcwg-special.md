---
layout: minutes
date: 2023-04-18
title: Verifiable Credentials Working Group Special Topic Call on open reserved properties — 2023-04-18
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-04-18-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on open reserved properties — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on open reserved properties",
        "dateCreated": "2023-04-18",
        "irc": "vcwg-special",
        "datePublished": "2023-04-18",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on open reserved properties",
            "startDate": "2023-04-18",
            "endDate": "2023-04-18",
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
                            "name": "Orie Steele"
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
                    "name": "Michael Prorock"
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
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Gregory Natran"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Charles Lehner"
                }
            ]
        },
        "resolution": [
            {
                "@type": "Resolution",
                "resolution_number": 1,
                "resolution_text": "the VCWG would like to add a table of reserved properties to the VC Data Model."
            }
        ]
    }

---

# Verifiable Credentials Working Group Special Topic Call on open reserved properties — Minutes
{: .no_toc}



**Date:** 2023-04-18

See also the [Agenda](https://www.w3.org/events/meetings/e88d30bd-4099-49d1-b769-1d8cd39a1b28/20230418T110000) and the [IRC Log](https://www.w3.org/2023/04/18-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Ivan Herman, Michael Prorock, Orie Steele, Hiroyuki Sano, Ted Thibodeau Jr., David Chadwick, Manu Sporny, Dave Longley, Chris Abernethy, Gregory Natran, Dmitri Zagidulin, Charles Lehner

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Orie Steele, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. PR 1082.
{: #section1}

### 2. Add table of reserved properties (pr vc-data-model#1082)
{: #section2}

_See github pull request [vc-data-model#1082](https://github.com/w3c/vc-data-model/pull/1082)._

<!-- issue w3c/vc-data-model/1082 -->



**Brent Zundel:** this pr was raised by manu, everyone seems to be in favor of the general idea.  
… my hope was to discuss proposals for adjustments to it.  

**Manu Sporny:** some background, we have other PRs that are "stuck".  
… they are all trying to add new properties to the Verifiable Credential RDF class in the vc data model.  
… there has been discussion on too much work, and maybe we should not add more work / other items.  
… "what work should we take on".  
… "what should we delay to a future working group".  
… the reason for the PR, is there a way for the group to signal, there is interest in these properties, we want to reserve them.  
… we might want to address things in the past or future, but the working group doesn't want to say anything normative about them.  
… the PR is a way to signal that properties are important, but we are not going to say more about them.  
… seems people are in favor of saying something, we don't know what goes in the table.  
… so that seems to be holding things up.  

**Brent Zundel:** that is pretty close, but i got other feedback.  

**Orie Steele:** I agree with what Manu said, we need something like this PR, I'm glad Manu is saying there are no normative requirements. The thing I'd like clarity on is: some of these properties have existing language in the spec, and our spec has staetments about these properties, if we reserve them and put them in the table, what requirements are on the implementer? What are we reserving, a JSON member, a JSON Member and an IRI, or a name a JSOn member and it's presence in the JSON-LD Context? What is the impact on implementers on reading v2 of the spec. Clarify relationship between this table and VC Specs directory, we could run proposals to get clean consensus..  

**Brent Zundel:** chair hat off, i read the PR, I like the direction... but the main points I have concern with are, if there is a table like this, there should be some normative guidance related to it, what should an implementer do.  
… I wanted to clarify if this PR is just reserving JSON key words, or also IRIs, context. stuff.  
… my feeling is that properties should be in the table or in the spec... not both..  
… I have proposed some changes.  

**Ivan Herman:** my 2 cents, ories questions should be answered, we should reserve. both json members and URIs, I am neutral on the context..  
… implementers should essentially do nothing.  
… other than not use these terms without the URIs.  
… implementers should avoid the terms.  

> *Dave Longley:* +1 to ivan.

**Manu Sporny:** with editor hat on, we have vc-specs-dir with categories.  
… [property based extensions](https://w3c.github.io/vc-specs-dir/#property-based-extensions), supports credentialStatus, credentialSchema, termsOfUse.  
… where did these come from.  
… traditionally they came from the VC Data Model.  
… editor hat on, I am trying to figure out what compels the editor of the vc specs dir, to create new categories.  
… the core data model should provide this guidance to the vc specs dir.  
… editor hat off, I thought it might help to walk people through how we could use the mechanism.  
… lets look at render / renderHint property.  
… one way we could address it, multiple organizations want to do something and there is a RWoT paper for it.  
… lets reserve the term, and say "the wg might do stuff with this term later".  
… then the rendering people can work on it in the CCG, as an extension point the VCWG has defined.  
… we can of course do that anyway.  
… since JSON-LD is open world model.  
… wouldn't it be nice if everyone agreed to how to manager extension points?.  
… render goes in the table reserved properties.  
… work happens in the CCG, using the vocab defined in the VCWG.  
… this would let us move other extension points out of the working group, and to the community group.  

**Michael Prorock:** I like brent's additions, I would accept the PR with those changes.  
… I think it is ok to tack stuff in for an editors draft.  
… if things are well defined, we can remove them from the reserved list.  
… lets get a base line, and let the community do the rest, non normatively.  
… lets use do cleanup to the core spec, which needs to be done.  

**David Chadwick:** I think there is a difference between extension points already defined, and new ones that have never been written in the data model.  
… especially regarding "stay clear of them", they are already defined, and have been used... so we can't provide guidance to stay clear.  
… since they have been defined since v1, and that is totally different from new properties.  
… what about other properties, in what category will "isuee" be reserved.  

**Dave Longley:** we need to be careful doing the wrong thing, telling the CCG not to experiment with these.  

> *Michael Prorock:* quoting from the suggestion: "Implementers SHOULD NOT use these reserved terms outside of experimental situations.".

**Dave Longley:** we want people to work on them, to feed those experiments back to the working group.  
… you should expect use of these to be unstable.  

**Manu Sporny:** agree with dlongley, there is just one line that you have added that is problematic.  
… you "SHOULD NOT use these" is problematic.  
… I agree with [mprorocks suggestion](https://github.com/w3c/vc-data-model/pull/1082#discussion_r1170186655).  
… we should just say: "we are looking for implementer feedback" and "you can use these extension points"..  
… I would support warning people to be careful, and that they are not stable.  
… people should be able to rely on the vocabulary term existing, and that its definition or use might change.  
… +1 to Mike's table.  
… I don't like the normative language telling people to avoid using them.  

> *Ted Thibodeau Jr.:* perhaps "use with informed caution" rather than "SHOULD NOT use".

**Brent Zundel:** implementers should not use these reserved terms outside of experimental situations, I am happy to add additional text to elaborate.  
… it is important to say "Don't use them in production".  
… they are "experimental" we can't let people just do whatever they want with "reserved stuff"..  
… I am not attached to specific language.  

> *Ted Thibodeau Jr.:* +1 brent.

**Brent Zundel:** we all seem to agree in principle, lets get some language.  

**Michael Prorock:** we do need clear normative guidance.  
… you can't assume people will use these things.  
… they are fine for development, but they should remain cautioned until they are defined.  
… I would be happy to add additional words of caution, regarding incubation, testing and interoperability, and you should be aware there is not normative guidance for implementers at this time.  
… people need to be aware of guidance.  

> *Dave Longley:* "if you use these in production, you accept the risk that new versions of the VCDM could be incompatible with your usage".

**Ivan Herman:** as an editor of the formal vocab document... I would like to here answers to orie's question from Manu and others.  
… does introducing a member to the table mean introducing a URL?.  
… the script will need to be aware of "reserved properties" in ontologies.  
… will the URL also be reserved?.  

**Manu Sporny:** yes, it goes in the vocab... I also prefer to have it in the context.  
… I wanted to address Brent's comment, I agree with your proposed language.  
… don't ship this to production language is concerning, the working group will end, and then maintenue mode, and maybe 4 years from now.  
… its highly problematic to reserve something for experimentation for 4 years.  
… for render, we do intend to ship to production before the 4 year timeline.  
… maybe we can point to vc-specs-dir?.  
… it does not mean that it might change, the production use could be broken.  
… the guidance should be, VCWG has identified useful properties for experiments and pilots, and it is ok to go to production, but be aware the WG may change the meaning of the property in the future.  
… based on the table we see today, I can't imagine us making changes.  
… the nuance is important.  
… we should let people use them in production.  

**Brent Zundel:** can other comment on the suggested changes related to the meaning of the terms?.  
… would the swap be fine?.  

> *Michael Prorock:* "Implementer MAY use these properties, but SHOULD expect these terms to change as the process to normatively specify them proceeds. Implementers SHOULD NOT implement without a publicly disclosed specification describing their implementation.".

> *David Chadwick:* should expect -> MAY expect.

> *Dmitri Zagidulin:* +1 to brent's update.

**Michael Prorock:** I wanted to answer Orie's question.  
… I have also added a new suggested text, and I added specification required to it.  
… I play around with evidence, is different from I have a spec that people are using.  
… I think clear normative guidance is important.  
… should they be in vocab? yes. Should they be in the context? I don't have preference.  

**David Chadwick:** I think we should clarify difference between extension points with Type and reserved terms.  
… for example issuee, is a property.  

**Ivan Herman:** reacting to what david says, I am wondering what you mean by type.  
… type has a specific meaning.  
… reacting to what Manu said, the 4 year delay thing... when we end the WG and plan for maintenance, we have the right to declare that this document is "living standard" a.k.a. "evergreen".  
… which means the maintenance WG can add normative changes.  
… these extension points could be added here.  

**Manu Sporny:** I like evergreen, but other don't.  
… the argument against evergreen, is that the smaller group can modify large normative sections of the spec.  
… we can try it again, maybe the group has more trust now.  
… regarding what david teams by type.  
… I think he means `@type` aliased to "type" and with a value of an RDF class..  

> *David Chadwick:* correct.

**Manu Sporny:** it would be normative guidance to add the "type" requirement, and decentralized extensibility is supported by type.  
… can we run proposals?.  
… the working group desires a reserved properties table, the second one could start with the values mprorock has provided.  
… the third one could be on guidance for implementers regarding reserved status.  
… encouraging people to use them, but with caution, that they might change in the future.  

> *Dave Longley:* for people reading JSON i think we're suggesting that types are required like this: `"extensionPoint": {"type": "MustDefineThis", ...}` or `"extensionPoint": [{"type": "MustDefineThis", ...}, ...]`.

> *Dave Longley:* +1 to requiring a type for the extension points.

> *Dave Longley:* (for the values of the extension points).

**Ivan Herman:** DavidC has convinced me, that we have to put these entries in the context.  
… because of `@vocab`.  
… if the term has a URL in the vocabulary, then we MUST put it in the context file, or the vocab will destroy the consistency.  

> *Dave Longley:* +1 to Ivan.

> *Manu Sporny:* +1 to Ivan.

**Orie Steele:** Similar thing to what Ivan said, guidance around warning that term definition would change is equivalent to what term definition would be to be expanded by vocabulary. If any term is not defined in context, it's defined in way that issuer intended it to be defined, if issuer doesn't know, then vocab expansion for that term is correct. It's not with a reserved property for what evidence is... semantic confusion around risk of URL changing would be and also find it concerning to add terms to core context since it's non-normative, experimental context don't need to be added to normative document and shouldn't harm implementers perspective... in general supportive of reserving things and experiment, not supportive of being in core spec and blending w/ normative terms, normative requirements, non-normative, and no guarantee of consistency and no guarantee that term will change in the future, future WGs change definition, putting it in context is saying it won't change, that's the issue..  

> *Michael Prorock:* +1 brent.

> *Manu Sporny:* +1 brent.

**Brent Zundel:** the reason I suggested the changes I did, I think we can address the context issues in separate PR.  

> *Dave Longley:* +1 to brent.

> *David Chadwick:* are these reserved terms or reserved extensions points? they are different.

> *Dave Longley:* maybe we want to call them unstable or prospective terms? ... since "reserved" isn't quite right per our conversation.

> **Proposed resolution: the VCWG would like to add a table of reserved properties to the VC Data Model.** *(Brent Zundel)*
{: .proposed_resolution}

> *Manu Sporny:* +1.

**David Chadwick:** I want a separate table.  

> *Michael Prorock:* +1.

> *Ivan Herman:* +1.

> *Dave Longley:* +1.

> *Chris Abernethy:* +1.

> *Orie Steele:* 0.

> *David Chadwick:* -.001.

> *Dmitri Zagidulin:* +1.

> *Gregory Natran:* +1.

> *Ted Thibodeau Jr.:* +1.

**David Chadwick:** it seems unclear, I am not sure what it means.  

> *Charles Lehner:* 0.

> ***Resolution #1: the VCWG would like to add a table of reserved properties to the VC Data Model.***
{: #resolution1 .resolution}

**Brent Zundel:** will you object formally?.  

**Manu Sporny:** I will prepare the separate proposal.  

> *Dave Longley:* recommends we use "prospective" terms instead of "reserved" to encourage incubation vs. discourage it..

> *Dave Longley:* want "confirmationMethod" to say "confidenceMethod" ... or leave it off for now.

> *David Chadwick:* -1.

**David Chadwick:** it seems it is trying to do too much at once.  
… we need to define things, with resolutions, before we can list them.  

**Brent Zundel:** anything else?.  

> *David Chadwick:* then we should call the table "extension points".

**Orie Steele:** Warning of terms in existing context -- brent, you said you wanted to separate context conversation from term conversation, WG needs to be aware that v2 context contains these terms. The correct thing to say here is, if you want to separate the conversations, v2 context already contains, we need to resolve removing terms from v2 context. To make table more concrete, modified version of table currently defined in core context and removing terms would be a good starting point..  

> *Gregory Natran:* +1 to dlongley's suggestion on confirmation vs. confidence method..

**Ivan Herman:** i disagree with orie, the context is just a mapping.  
… it is not the "core thing".  
… if we agreed, that these terms have a URL in the vocab, the context is the right thing too do.  

> *Manu Sporny:* I also disagree w/ Orie's statements about using `@vocab` to establish these terms, and removing things like evidence, and termsOfUse, from the v2 context..

> *Dave Longley:* -1 to removing from the core context, these prospective terms should NOT be "issuer defined" via `@vocab`, they should be treated as terms that will be defined by a future WG, that's the whole point..

> *David Chadwick:* +1 to Ivan.

> *Michael Prorock:* note, my suggestions says: "Reserved Property" - these are JSON properties.

**Ivan Herman:** otherwise people might just use the JSON term.  
… without the URL.  
… the context is just a mapping.  
… I don't understand what you mean, by "extension" point.  
… we are talking about "Classes" or "Properties".  

**Brent Zundel:** we need to end the meeting.  
… this specific PR seems to have general favor.  
… for parts.  
… and we should raise issues for extension points vs terms and vocabulary and context.  

> *David Chadwick:* an extension point is a subclass of a json term.

> *Ivan Herman:* DavidC, I still do not understand. Json term does not have a subclass....

> *David Chadwick:* conceptually it may have as there can be different types of json terms.

> *Dave Longley:* ivan: i believe DavidC is referring to the range of the term.

> *Manu Sporny:* my understanding as well ^.

---


### 3. Resolutions
{: #res}

* [Resolution #1](#resolution1): the VCWG would like to add a table of reserved properties to the VC Data Model.
