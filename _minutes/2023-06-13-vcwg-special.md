---
layout: minutes
date: 2023-06-13
title: Verifiable Credentials Working Group Special Topic Call on the Normativeness of Vocabulary and Context — 2023-06-13
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-06-13-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on the Normativeness of Vocabulary and Context — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on the Normativeness of Vocabulary and Context",
        "dateCreated": "2023-06-13",
        "irc": "vcwg-special",
        "datePublished": "2023-06-13",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on the Normativeness of Vocabulary and Context",
            "startDate": "2023-06-13",
            "endDate": "2023-06-13",
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
                            "name": "Michael Prorock"
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
                    "name": "Ted Thibodeau Jr."
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
                    "name": "Paul Dietrich"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "Steve McCown"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Kristina Yasuda"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Shawn Butterfield"
                }
            ]
        },
        "resolution": [
            {
                "@type": "Resolution",
                "resolution_number": 1,
                "resolution_text": "The v2 context URL will remain normative (https://www.w3.org/ns/credentials/v2), its value will be made normative through the use of a hash digest."
            },
            {
                "@type": "Resolution",
                "resolution_number": 2,
                "resolution_text": "Add issue markers saying that the value of the hash digest for the v2 context may change before PR and that's expected."
            }
        ]
    }

---

# Verifiable Credentials Working Group Special Topic Call on the Normativeness of Vocabulary and Context — Minutes
{: .no_toc}



**Date:** 2023-06-13

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20230613T110000) and the [IRC Log](https://www.w3.org/2023/06/13-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ivan Herman, Ted Thibodeau Jr., Shigeya Suzuki, Brent Zundel, Hiroyuki Sano, Michael Prorock, Paul Dietrich, Andres Uribe, Steve McCown, Michael Jones, Kristina Yasuda, Dave Longley, Manu Sporny, Will Abramson, David Lehn, Orie Steele, Gabe Cohen, Dmitri Zagidulin, David Chadwick, Joe Andrieu, Shawn Butterfield

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Michael Prorock, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. Vocabulary normative, context isn't? (issue vc-data-model#1103)
{: #section1}

_See github issue [vc-data-model#1103](https://github.com/w3c/vc-data-model/issues/1103)._

<!-- issue w3c/vc-data-model/1103 -->



**Ivan Herman:** introduces topic - vocab vs context, starting with vocab being normative or not.  
… in the case of linked data and the ld point of view, urls and terms must be assigned, in addition relationships, etc.  
… the current vcdm document describes the terms and semantics, and the vocab describes these as well as additional.  

> *Orie Steele:* +1 ivan, vocabulary needs to be normative, if implementers are required to understand it.

> *Orie Steele:* if implementers don't understand it, they don't use those terms, then they don't get interop... this proves the document needs to be normative.

**Ivan Herman:** what i think is that the vcdm is obviously normative, and the vocab should also be normative, though in practice that is not always the case.  
… the html generated from the vocab need not be normative.  
… the same principle should be used for the security vocab.  

> *Orie Steele:* +1 ivan, we need to discuss vocabulary for all TR track items.

**Ivan Herman:** with the small diff that some terms in the security vocab may be defined in another spec, but it should still be normative.  
… the other question is the context - this is more complicated, see my current standpoint on that:.  

> *Ivan Herman:* [https://github.com/w3c/vc-data-model/issues/1103#issuecomment-1545648125](https://github.com/w3c/vc-data-model/issues/1103#issuecomment-1545648125).

**Ivan Herman:** from a purely theoretical point of view the context is just a transformation tool and does not define anything other than a mapping between urls and terms.  
… continue to hold the opinion that it should not define anything.  
… and that anything in the context should be present in the vcdm or the vocab.  

> *Orie Steele:* context has normative statements associated... [https://w3c.github.io/vc-data-model/#contexts](https://w3c.github.io/vc-data-model/#contexts) ... meaning the context is what connects "compact json-ld" to the normative vocabulary.

**Ivan Herman:** the context contains mapping between definitions of terms defined both in the wg and on the web at large in other well known vocabs.  
… there is discussion on the other hand that the context should be normative.  

> *Orie Steele:* +1 to making context normative, especially given the trend to include status list and other normative term definitions in it.

**Ivan Herman:** the ld world does not require the context, but it is helpful on the pure json level.  
… there is a statement in the vcdm that points to the context normatively.  

> *Orie Steele:* +1 ivan, there are normative statements associated with `@context`, which means we are *assuming* that the underlying value does not change... but we know that is possible, unless we make the value normative.

**Ivan Herman:** the spec might actually point in the informative section.  
… but does refer to the url and the hash of the context so that it is clear which version is included.  
… i would be happy if that statement were normative.  
… bc it makes it stronger / more clear as to use of the context and which context.  

> *Orie Steele:* iirc, the hash part is currently not normative, but I agree with the comment that it might make things clearer... it seems like making the value normative is a more direct solution though.

> *Dave Longley:* +1 to make a JCS-canonized hash value of the context normative and allow for changes to the context during CR to address concerns around minor tweaks that may be needed to be responsive to implementations.

**Manu Sporny:** the general question for the group is that if we make either or both normative, what changes on the implementation side.  
… the concern is that the stuff in the context might change, and we don't give directions around that.  

> *Dave Longley:* [https://w3c.github.io/vc-data-model/#base-context](https://w3c.github.io/vc-data-model/#base-context).

> *Dave Longley:* [https://w3c.github.io/vc-data-model/#contexts](https://w3c.github.io/vc-data-model/#contexts).

**Manu Sporny:** one option is to lock everything in with a normative statement and a hash.  

> *Dave Longley:* +1 to manu.

**Manu Sporny:** as far as vocab being normative we are not sure what will change there, and a lot of tests to validate that.  

> *Orie Steele:* sounds like making a hash normative is just a shortcut for writing more tests.

**Manu Sporny:** want clarity on what is normative - the static representation, the tests, etc.  
… not aware of other working groups stating this in the way that we are discussing.  

> *Orie Steele:* +1 to issue markers.

> *Dave Longley:* +1 to manu and issue markers.

**Manu Sporny:** there is a change that if we need any changes that we will need to note that things will break.  
… during cr.  

> *Michael Prorock:* [https://github.com/w3c/vc-data-model/pull/1140/files](https://github.com/w3c/vc-data-model/pull/1140/files).

**Michael Prorock:** I see the multiple sides to this issue. I wanted to highlight something. I opened a PR on how to hash a context, expanded to something it wasn't intended to. If we are going to define how this is done, we should take this into account.  
… Do we make this normative or not, if we are insistent on well-formed JSON-LD data model, if we can, we should try to make assets that go along with that as close to normative as possible, if we can make it normative (even in a simpler way), aspects from normative vocab, that might be a good path.  
… I do want to understand what the implementation concerns are... this is the 2.0 WG, I don't mind if we have to change implementations to match up with what WG decides.  

**Orie Steele:** want to comment on how impl might change.  
… in did core we had lots of context changes - typically via an at-vocab.  
… but certainly if there is not a set context, and hash, etc then we should expect manipulation or changes.  
… addition of terms by the developer can be a feature or a bug depending on your perspective.  
… hash seems worthy of exploring.  

> *Dave Longley:* +1 to the hash approach -- and we should consider whether we think using JCS on the content prior to hashing is necessary or helpful.

**Manu Sporny:** want to agree with a focus on hashing and statement as to url and hash.  

> *Orie Steele:* making the hash normative, makes w3id.org and schema.org term definitions normative, by proxy.

> *Orie Steele:* and for the record the hash being normative does not do anything regarding the URLs and their governance model, that are contained in it.

**Manu Sporny:** think that this makes things easier, and lets us test stuff cleanly, while also preventing dns poisoining, domain takeover, etc.  
… could add a statement that first context must be a link with such and such hash.  

> *Dave Longley:* +1 to explicitly tell implementers they should not load the context from the Web once they have their own copy as it will not change.

**Manu Sporny:** can do the same with vocab.  
… not sure that that would change things for implementation.  
… believe that that would address concerns there - are there other concerns.  

> *Orie Steele:* schema.org, w3c and w3id.org can still be bought / sold / transferred or compromised, regardless of if the hash does not change.

**Dave Longley:** something we may want to consider is jcs prior to hash.  
… this would prevent possible issues with whitespace, etc.  
… otherwise be careful that files don't change.  

> *Orie Steele:* -1 to JCS.

> *Orie Steele:* just publish the document at a w3c origin, and publish its hash along side it.

> *Orie Steele:* no need for JCS.

> *Dave Longley:* Orie_: i'm happy if that's true for all time :).

> *Orie Steele:* if we don't trust W3C to not tamper with documents, we should not use them to publish standards.

**Brent Zundel:** normative approach to provide a hash and link to to context.  

**Michael Prorock:** I'm happy to let Ivan go first.  

> *Dave Longley:* Orie_: W3C changes documents all the time in non-normative ways.

**Ivan Herman:** find with context and hash - keep to opinion that vocab should be normative.  
… the level of tests would not be burdensome if we made vocab normative.  
… let alone that the way things would be set on the vocab would point back to normative spec.  
… changing vocab would require wg consensus.  
… cannot just fiddle at will.  
… which is not necessarily the case for the context.  

**Michael Prorock:** Appreciate Ivan adding clarification to have vocab point back to core data model spec, helpful in general, good exploitation of LD in general.  
… I know JCS was brought up, DNS poisoning, domain take overs, we should try to keep things inline w/ subresource integrity... base64url vs base64, dealing w/ exchange over the wire, pros/cons to both... something to be aware of, actual hash representation should be aligned w/ SRI specification at W3C.  

> *Orie Steele:* dlongley we are assuming the W3C will not break context documents by changing them.

> *Dave Longley:* Orie_: yes, we are (if we don't do JCS).

> *Orie Steele:* No we are not.

> *Dave Longley:* Orie_: No, I'm agreeing with you. "We are assuming...".

> *Orie Steele:* Yes, assuming W3C doesn't mutate published standards is a given i think... if they mutate context values, we can't use them to serve them.

**Manu Sporny:** concerned re certain items in vocab that might become normative statements like range of domain and similar.  
… pointing definitions to vocab are a good idea.  
… putting a hash on it gives a concrete item to go check in a simple manner.  
… not sure if it is important for impl to go check above and beyond.  

**Ivan Herman:** i think the way to keep things together is that range etc fall outside scope of group.  

> *Orie Steele:* +1 ivan.

**Ivan Herman:** if there are statements in the vocab that fall outside the vcdm then there is an issue since they are not normatively defined by the vcdm.  

> *Michael Prorock:* +1 ivan.

> *Orie Steele:* huge +1 to that point.

> *Orie Steele:* +1 to testing normative requirements.

**Manu Sporny:** concern not around discrepancies, concerns around stuff we are not testing today.  

**Ivan Herman:** if they are in vcdm we should test them.  

**Manu Sporny:** notes that we will have to add tests for coverage, especially data types, ranges, etc.  
… not sure how we test that.  
… concerned that each impl may have to generate nquads.  

> *Dmitri Zagidulin:* +1 to what manu is saying, I don't see how we can test the vocab...

> *Orie Steele:* if we say compact JSON-LD and we don't test that... you can get different nquads... from different implementations.

> *Orie Steele:* +1 ivan, normative statements need to be tested... how they are tested is different topuc.

**Ivan Herman:** the vcdm does state that there are constraints on values normatively - question is do we test or not - nquads are irrelevant - we can test a multitude of ways.  

> *Michael Prorock:* +1 ivan.

**Orie Steele:** we did resolve something we didn't have last time is that the base media type is compact json-ld which means that unless there are additional normative requirements we don't have to test to the level being suggested.  
… completely agree with ivan.  
… the normative statements in the current doc are in conflict with how we can test things.  
… the hash approach might be a workaround for this, but we can't mix normative statements pointing to urls that are not covered under the core data model.  
… we need to solve these normative issues one way or the other.  

**Dmitri Zagidulin:** want to push back that vocab is primary normative artifact.  
… json-ld means that the vocab may not need to exist, bad practice of course, but it can work.  
… we should define these terms somewhere.  
… but if we don't define a vocab things don't break.  

> *Orie Steele:* if nothing breaks, the context is normative... and its integrity is normative.

**Manu Sporny:** +1 to dmitriz.  
… one thing that we could do is a data integrity transform and see if sigs match.  
… all of this goes back to the context though, and that feels like something we should definitely test, and we should make sure that the context is integrity protected.  
… the vocab is for machine reasonaing and humans.  
… feels like context and hash are an important thing.  
… not sure how to test if we make vocab normative.  

> *Dmitri Zagidulin:* `@Orie` - and I agree. I think the context is normative.

> *Orie Steele:* you can test to see if a files bytes has changed without converting the object to nquads.

> *Orie Steele:* and you can't use data integrity proofs to secure json-ld contexts.

> *Orie Steele:* for all terms in the vocabulary, there must be a human readable definition for the term, the term may be defined by w3id.org, w3c, or schema.org.

**Michael Prorock:** -1 to add stuff from elsewhere vs. just checking hashes. Have the resource and then the hash to the resource. You do want to detect those changes.  
… As for testing vocab, agree with Manu -- ensuring context is normative is important, perhaps hash to context and hashes to other versions that come from that, like schema.org.  

> *Orie Steele:* -1 to bundling external contexts by reference... makes development harder.

**Michael Prorock:** Regarding testing on vocab, there might be approaches there.  

> *Orie Steele:* and makes integrity checking harder.

**Michael Prorock:** If we say something has certain parameters, value of certain shape, we have to test for it. Does it mean more work, it's something we have to do.  

**Ivan Herman:** good to assign a hash < i think, garbled >.  
… if the consensus of the WG is that the vocabulary is referred to and is 'secured' via a hash, I will not lie down on the road on that.  

> *Orie Steele:* +1 to ivan, if the working group is publish a TR for a JSON-LD media type, we should do a proper job.

**Brent Zundel:** concerns around testing - what i have heard is no opposition to a link to vocab / context and hash for each and normative statements that those match.  
… sounds like folks are fine with that.  
… going beyond that, concerns appear to be how would we test.  
… my concern is what would the normative statements be - are those in vocab itself, etc.  

**Orie Steele:** think i heard: there are normative statements that should be testable.  

> *Brent Zundel:* that is what I understand.

**Orie Steele:** think that i also heard that there should be a normative statement that includes the hash.  
… question on the vocab side is interesting, since we need to make sure that the statements are testable.  
… some suggested language might look like an assertion that terms defined in TR appear in vocab as well, and that some terms may be defined externally.  
… if we dont make vocab normative, but make context normative, we make vocab normative by reference.  

> *Michael Prorock:* +1 to norm by ref, so lets make it good.

**Michael Prorock:** Possible language for a first proposal would be that we would normatively define URL for both context and vocab and provide hash that must be included.  
… I am also happy to pull #1140, core context hash in there, add additions to there or add separately, that's the key thing.  

**Manu Sporny:** -1 to tying this to 1140.  

**Michael Prorock:** We should follow model set by subresource integrity and use that mechanism if multiple hashes are provided.  

**Brent Zundel:** is there anyone that wants changes or alternates to that proposal.  

> **Proposed resolution: The v2 context URL will remain normative (https://www.w3.org/ns/credentials/v2), its value will be made normative through the use of a hash digest.** *(Brent Zundel)*
{: .proposed_resolution}

> *Brent Zundel:* +1.

> *Dave Longley:* +1.

> *Michael Prorock:* +1.

> *Andres Uribe:* +1.

> *Orie Steele:* +1.

> *Dmitri Zagidulin:* +1.

> *Shigeya Suzuki:* +1.

> *Joe Andrieu:* +1.

> *Gabe Cohen:* +1.

> *Ted Thibodeau Jr.:* +1.

> *Manu Sporny:* +1 (and we should add issue markers saying that the value might change before PR and that's expected).

> *David Chadwick:* +1.

> *Will Abramson:* +1.

> *Ivan Herman:* +1.

> *Ivan Herman:* +1 to manu.

> *Ted Thibodeau Jr.:* +1 w/issue markers.

> ***Resolution #1: The v2 context URL will remain normative (https://www.w3.org/ns/credentials/v2), its value will be made normative through the use of a hash digest.***
{: #resolution1 .resolution}

**Shigeya Suzuki:** would versioning change hash - major or minor change?  

> **Proposed resolution: Add issue markers saying that the value of the hash digest for the v2 context may change before PR and that's expected.** *(Brent Zundel)*
{: .proposed_resolution}

> *Michael Prorock:* +1.

> *Dave Longley:* +1.

> *Ivan Herman:* +1.

> *Manu Sporny:* +1.

> *Orie Steele:* +1.

> *David Chadwick:* +1.

> *Andres Uribe:* +1.

> *Shigeya Suzuki:* +1.

> *Ted Thibodeau Jr.:* +1.

> *Will Abramson:* +1.

> *Joe Andrieu:* +1.

> *Brent Zundel:* +1.

> ***Resolution #2: Add issue markers saying that the value of the hash digest for the v2 context may change before PR and that's expected.***
{: #resolution2 .resolution}

**Brent Zundel:** not seeing or hearing objections.  
… thanks everyone for being awesome.  

---


### 2. Resolutions
{: #res}

* [Resolution #1](#resolution1): The v2 context URL will remain normative (https://www.w3.org/ns/credentials/v2), its value will be made normative through the use of a hash digest.
* [Resolution #2](#resolution2): Add issue markers saying that the value of the hash digest for the v2 context may change before PR and that's expected.