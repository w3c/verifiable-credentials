---
layout: minutes
date: 2023-05-16
title: Verifiable Credentials Working Group Special Topic Call on Test Suites and CR Exit Criteria — 2023-05-16
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-05-16-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on Test Suites and CR Exit Criteria — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on Test Suites and CR Exit Criteria",
        "dateCreated": "2023-05-16",
        "irc": "vcwg-special",
        "datePublished": "2023-05-16",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on Test Suites and CR Exit Criteria",
            "startDate": "2023-05-16",
            "endDate": "2023-05-16",
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
                            "name": "Andres Uribe"
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
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Paul Dietrich"
                },
                {
                    "@type": "Person",
                    "name": "David Lehn"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
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
                    "name": "Will Abramson"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
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
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "SongPu Ai"
                },
                {
                    "@type": "Person",
                    "name": "Mircea Nistor"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                },
                {
                    "@type": "Person",
                    "name": "Kevin Griffin"
                },
                {
                    "@type": "Person",
                    "name": "Li Wang Hong"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on Test Suites and CR Exit Criteria — Minutes
{: .no_toc}



**Date:** 2023-05-16

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20230516T110000) and the [IRC Log](https://www.w3.org/2023/05/16-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ivan Herman, Andres Uribe, Michael Prorock, Hiroyuki Sano, Manu Sporny, Ted Thibodeau Jr., Paul Dietrich, David Lehn, Dave Longley, Oliver Terbu, Kristina Yasuda, Chris Abernethy, Will Abramson, Gabe Cohen, Phillip Long, Orie Steele, Dmitri Zagidulin, Michael Jones, Joe Andrieu, SongPu Ai, Mircea Nistor, Kaliya Young, Kevin Griffin

**Regrets:** 

**Guests:** Li Wang Hong

**Chair:** Kristina Yasuda

**Scribe(s):** Andres Uribe

## Content:
{: .no_toc}

* TOC
{:toc}
---


> *Phillip Long:* Aha - found it...

### 1. CR Exit Criteria.
{: #section1}

**Kristina Yasuda:** for the agenda today we would like to make a decision whether the documents that we have are ready to go to CR, or whether we want to keep informative features in the draft. What are the criteria that we want to decide as a group?  
… We haven't focused the conversation on this topic. We don't have a goal to pass a resolution, instead to get people to share what they have in mind.  
… We want to strike a fine balance between loose requirements and rigid requirements.  
… ... Whatever we end up with, we want to have the document be a living document.  

> *Orie Steele:* validFrom is the starting date for which the claims the issuer has made are to be considered valid for the subject... it is not a security feature, it is information / data model.

**Manu Sporny:** for those who are going through this for the first time. The minimum bar is two demonstrate at least 2 interoperable implementations. For example `validFrom` has some normative statements in the specification. The min bar is for two implementation from different people that did not collaborate together, and both implementation pass the tests. If both implementers do so correctly, then it passes the minimum bar.  
… My suggestion is that we start there as a base line.  

**Ivan Herman:** Maybe before the details, there is worth emphasizing some things for new people.  
… The goal of CR is to prove to the outside world that this spec can be implemented in an interoperable way.  
… What Manu mentioned are tools in this direction.  

**Kristina Yasuda:** Yes. It's how do we prove to the outside world that this spec can be implemented.  

**Orie Steele:** `<`thanks Ivan for that framing`>`.  
… How you prove that normative statements are correctly implemented gets... tricky.  
… For example, you write tests, but the tests aren't correct.  
… Maybe we can align right now. Is it enough to read normative statements to align on the core data models?  
… What do we actually mean as interoperable? How do I understand evidence?  
… We would be well served spending time on defining what is required for a normative statements, specially for JSON-LD data models.  

**Ivan Herman:** Another starting point beyond what Orie said, which I know we'll get. In our case, we can prove that VCs can be interchanged. Meaning, implementation A produces a VC using X, Y, Z features using Omega serialization. Then it's received by B, and it can understand it.  
… If we have a test that does this in practice, we are likely to cover all the pieces that are needed to prove interoperability.  
… That's the kind of interoperability that reviewer will look for. This was what they looked for during the DID CR phase.  
… Maybe we should concentrate on that from the start.  

> *Orie Steele:* Sounds like matrix testing for each feature that has normative statements....

> *Orie Steele:* Great point regarding "test vectors"... being the basis for testing normative statements.

> *Orie Steele:* It is in scope for vc-jwt.

**Kristina Yasuda:** I agree in practice the world view described. I do not think it's in the scope for the working group to try.  

**Michael Prorock:** Appreciate the separation between conformance and interoperability. The scope will be the question. Will share a couple of links on conformance and interoperability tests. They do what Ivan just described.  

> *Michael Prorock:* [https://w3c-ccg.github.io/traceability-interop/reports/conformance/](https://w3c-ccg.github.io/traceability-interop/reports/conformance/).

> *Michael Prorock:* [https://w3c-ccg.github.io/traceability-interop/reports/interoperability/](https://w3c-ccg.github.io/traceability-interop/reports/interoperability/).

**Michael Prorock:** The downside is that protocols are needed and it's run using postman. Like Orie mentioned, you could run matrix tests using some tech like docker.  

> *Orie Steele:* to be clear, we don't need protocols, to do multi implementation matrix tests for test vectors.

> *Michael Prorock:* +1 Ivan - this can be done independent of protocols.

**Ivan Herman:** I didn't mention protocols. It's true that we don't standardize them. There has to be some agreement on how the test suite is built to carry pieces of data from one place to another.  
… Put another way, if we cannot prove that there is an interplay between the various types of implementations, then I'm quite sure our spec will be rejected.  
… We should not forget that. I'll stop there.  

> *Orie Steele:* How do we test a JSON-LD data model?

**Manu Sporny:** We got into implementations very quickly. It's a good discussion, but trying to get the the exit criteria for the CR phase, are there other suggestions beyond the 2 independent implementations per feature?  
… If we agree, we could get more into the weeds.  

**Michael Prorock:** At this point, 3 seems like a good number. Enough implementors and implementations.  
… Acknowledged that 2+ can get hairy very quickly.  
… We can improve on what the definition of independence is (like using the same lib or something).  
… There is a lot of shared libs and reuse in the space.  

> *Kristina Yasuda:* there are few components "2" "independent" "implementations". is it 2? what is the definition of independent? to be called an implementation, is a PoC enough or does it have to be in production?

> *Dave Longley:* -1 to going beyond the usual standard of 2, but we can highlight where there are more than 2.

> *Phillip Long:* There's a distinction between the number of implementations and the quality of the tests that demonstrate their conformance. I'm not sure that increasing the number raises the bar.

> *Dave Longley:* -1 to trying to satisfy others by raising our own bar beyond what is typically required.

> *Dave Longley:* +1 to trying to show more implementations anyway!

**Orie Steele:** We've felt the pain of doing tests in the past. It would be good to not get formal objections because of poorly written test or implementations that are not provably interoperable.  
… Talking about the core data model. It has a single serialization. When we say tests, we are thinking about a concrete serialization. I propose we test vc+ld+json only. We test "what does it mean for two independent implementations to agree?".  
… What does testing "The field has to be an IRI"? How do we give higher confidence to the fields? How do we add additional safety checks to the fields related to JSON-LD processing?  

> *Phillip Long:* +1 to avoiding DIDcore pattern.

> *Dave Longley:* note: we can just test that the context is set to the right value and test the specific rules for fields in the spec.

> *Michael Prorock:* changes prior to CR.

> *Michael Prorock:* i meant change after today.

**Manu Sporny:** To Mike's statement "We can change it later". We cannot change the exit criteria after we enter CR. Before then, we can decide on the number of implentations.  
… To orie: "how do we test the spec?" -> We have added language to say you have to use json ld compact form, which means you can use 15:34:57 `<mprorock>` +1 manu.  

> *Orie Steele:* How do we test JSON-LD Compact form?

> *Kristina Yasuda:* i think ivan said interop with v1.1. do we want that to be in scope? that is a lot and our charter allows for breaking changes.

> *Dmitri Zagidulin:* that's a very good point, that we have JSON Schema on our side this time.

> *Orie Steele:* Can we resolve to use JSON Schema to test JSON-LD Compact form?

> *Dave Longley:* +1 to manu, IMO, testing should be even easier than it was in 1.0 for what Orie is concerned about.

> *Dmitri Zagidulin:* `@Orie` - I think we should.

> *Orie Steele:* I do too.

> *Dave Longley:* +1 to using JSON schema.

> *Michael Prorock:* I would also like to drop 1.1 for this WG.

> *Orie Steele:* but to be clear, that means nobody will every need to understand the exapnded term IRIs, that we are trying to make normative.

**Manu Sporny:** While I understand the need for better discussion, I would avoid that discussion. I would try to keep it more pragmatic. For example, run regexes against the time based fields. Something like check the JSON, check the context, check the schema, and as a result the json-ld is valid.  
… I think it's fairly straightforward in Data Integrity because you know the result if the signature is correct or not.  

> *Michael Prorock:* there are 1.1 tests already, focus tests for CR on 2.0 only.

> *Orie Steele:* that seems like not a good thing.

> *Dave Longley:* drop 1.1 means what?

> *Orie Steele:* I don't think testing anything related to JSON-LD is straight forward sadly.... especially document loaders, IRIS and how the context shape effects the graph, and how that graph matches the normative statements.

**Ivan Herman:** I have two statements.  
… . going back to the magic number. When we enter CR, we have to document the criteria we have agreed on. It cannot be changed. My advise is to keep that to a minimum. Let's say 2. If we have a test suite that covers more, then it's a safe bet.  

> *Gabe Cohen:* +1 to 2 minimum, even if our internal bar is higher.

> *Dave Longley:* +1 to Ivan, fully agree.

> *Manu Sporny:* +1 to 2 minimum, even if our internal bar is higher.

**Ivan Herman:** (2) Going back to what Orie said. I would say the important part is not the testing of the Data Model. If we concentrate *only* in the interop, then we are automatically testing the VCDM.  

> *Orie Steele:* Ivan, that is not correct... see the v1 test suite.

> *Orie Steele:* the problem is that security suites don't cover understanding the VCDM.

> *Orie Steele:* only data integrity covers the term IRIs.

> *Dave Longley:* that may true for data integrity ... not for JWTs, unfortunately.

**Ivan Herman:** There might be some formal testing related to what Manu mentioned and work we could reuse.  
… The interesting part is that implementations are interoperable between generating and receiving VCs.  
… Over the 7-8 docs that we have, we'll go through the same things. For example, if we test BBS then we'll have automatically tested things in the VCDM.  
… It's up to the working group how we organize the testing suites.  

> *Manu Sporny:* nah, we're going to throw the v1.0 and v1.1 tests away :P (really).

> *Orie Steele:* ^ yes.

> *Orie Steele:* IIRC we got to CR with each document... they don't need to all go together... if we plan correctly.

> *Dave Longley:* it might be testing just DI and JWT will cover the data model tests, i think is the point.

> *Manu Sporny:* yes, that ^.

> *Dave Longley:* (DI being the thing that covers it).

> *Manu Sporny:* What's being said, is on the whole, we end up testing everything at an appropriate level.

> *Orie Steele:* yes, data integrity covers it, but then it does not need to be understood in the core data model, with normative statements about term IRIs.

> *Dave Longley:* might need something for the JWT translation if we're still supporting that vs. using the base media type.

> *Orie Steele:* basically, don't try cheating, by putting core data model tests in data integrity.

> *Kristina Yasuda:* testing core data model should not be bound to implementing DI.

**Manu Sporny:** Re mike's statement. Ivan is saying that in total we will be testing that appropriate processing is done. We didn't have that in previous versions. By testing DI you will have to have done the transforms. Maybe that's not true for vc-jwt, but we've done all the testing around DI and the signatures will end up being tested.  
… Mike's statement related to independent implementations and shared libraries. There is language in there that mentions that the libraries should be different.  

> *Orie Steele:* -1 to what manu just said... we are not going to say "we don't need to test vc-jwt, because we have data integrity".

> *Michael Prorock:* +1 orie.

> *Dave Longley:* Orie: he didn't say that ... he said we don't need to do data model tests twice.

> *Dave Longley:* VC-JWT must be tested and show it can translate to the base representation (or just secures it directly) ... and the data model tests are checked elsewhere.

> *Orie Steele:* I agree we don't need to do data model tests twice... but does that mean that the tests proposed in data integrity belong in the core spec?

> *Orie Steele:* sounds like we should run a poll regarding using JSON Schema to test the core data model.

> *Michael Prorock:* +1 orie.

> *Manu Sporny:* Orie, to be clear, I didn't say "we don't need to test vc-jwt"... we do need to test it.

> *Manu Sporny:* I'm saying "If someone asserts that we didn't test the "JSON-LD bits", we can say -- we did in the DI test suites... you have to do those transforms there.

**Kristina Yasuda:** Not yet clear to me how we related different test suites in different documents.  

> *Kristina Yasuda:* ... min bar is 2, have to use diff libs, testing only vc+ld+jwt.

> *Manu Sporny:* +1.

> *Orie Steele:* manu right, but the JSON-LD comprehension part, you asserted would not be covered in vc-jwt, because it was already covered elsewhere... that is what we should discuss...

> *Orie Steele:* +1.

> *Dmitri Zagidulin:* yeah, I think we've got pretty strong agreement re JSON Schema re JSON LD.

**Manu Sporny:** Using something equivalent to json schema seems fine.  
… e.g. issuanceDate might just be a regex test.  
… I'd rather let implementers choose how best to test.  
… I'm fine to saying "using something like json schema do x and y".  
… There may be some tests in this spec that cannot be tested with json schema.  
… What I mean if that you can do an equivalent test to JSON schema regex validation, without using JSON schema.  

> *Dave Longley:* "testing only vc+ld+jwt" is fine if that's all we're doing in the spec these days (if we're doing some mapping thing, that needs to be tested too).

> *Orie Steele:* I think we should constrain the test suite authors, or prepare for lisp / scheme test suite.

> *Kristina Yasuda:* "something like" JSON schema != json schema?

> *Orie Steele:* +1 to Manu's point regarding JSON Schema not working, but why would that be the case?

> *Dmitri Zagidulin:* I think Manu means "start with JSON Schema as base, and then sprinkle additional tests as necessary".

> *Dave Longley:* +1 to use JSON schema for everything it can test.

> *Orie Steele:* I would like to understand what JSON Schema CANNOT test... in a JSON-LD TR...

> *Phillip Long:* +1 to using JSON schema.

> *Orie Steele:* +1 to not writing tests for v0 or v1.1.

**Kristina Yasuda:** There is a comment about versions. My suggestion is that interop between versions is not a goal.  

> *Manu Sporny:* We are writing tests for v2.0 (not for v1.0 or v1.1) :).

> *Orie Steele:* +1 to only writing tests for v2.0 TRs.

**everyone:** (wide agreement to only testing v2.0).  

> *Michael Prorock:* +1 orie.

**Orie Steele:** I suspect talking about testing transformations would take the rest of the call.  
… I am strongly opposed to having normative tests until we have gotten to consensus on the mapping subject.  
… People are asserting that mappings should be tested normatively. I would rather not do it.  

> *Michael Prorock:* double +1.

> *Dave Longley:* if that's the only one that's normative in the spec (vc+ld+jwt), that's fine.

> *Dave Longley:* we just can't have something that's normative and not test it.

> *mircea nistor:* +1 orie.

> *Manu Sporny:* I /think/ I agree with Orie?

> *Orie Steele:* This would mean only testing vc+ld+jwt, and not definining or testing vc+jwt.

**Dave Longley:** If we are saying that something is normative, we need tests. If not normative, then no.  

**Kristina Yasuda:** I encourage people thinking learnings during v1.1.  

> *Orie Steele:* We still have vague extension points.

> *Dave Longley:* JoeAndrieu: it's just a securing mechanism (a signature over vc+ld+json).

**Manu Sporny:** What went wrong: we didn't have securing mechanisms. A JSON doc with extension points and fields. At the end of v1.0 and v1.1, we had a JSON object with well defined properties and extensions points.  
… What we're doing now is securing the credentials. It's part of the charter now.  
… There is a lot of processing to ensure this. And the charter now allows us to test a lot of the things that we wanted to test. Still a lot of work.  

> *Orie Steele:* dlongley is correct, current vc+ld+jwt is a JWS over cty vc+ld+json.

> *Dave Longley:* +1 to Orie -- that makes it simple.

> *Orie Steele:* If we are not testing v1 and v1.1, can I remove them from the current vc-jwt draft?

> *Orie Steele:* please?

> *Ivan Herman:* +1 to manu, but the charter _requires_ us to test not only _allows_ us :-).

> *Manu Sporny:* true ^ :).

> *Dave Longley:* Orie: might want to add a statement to the vc-jwt draft saying not to use them in new applications as well and to instead use vc+ld+jwt.

> *Dave Longley:* (them = 1.0 and 1.1).

> *Orie Steele:* I prefer to just remove them.

**Joe Andrieu:** if we are not testing a mapping, then I'm not sure how we'd be able to secure it.  

> *Manu Sporny:* I'd be supportive of that ^.

**Dmitri Zagidulin:** Implementation details and testing procedure: do we actually want to use CLI (stdin + stdout) as the test mechanism, OR do we go the Universal DID Resolver route and require Docker containers which we're talking to via HTTP.  
… 2) What's our general testing philosophy? Are we ok with "honor system" (implementers running the test suite themselves), OR are we having a central testing server (where ppl upload library, and it runs the suite).  

> *Orie Steele:* +1 Ivan.

> *Manu Sporny:* -1 :).

**Ivan Herman:** The goal is to test whether the specification is ok or not. All implementers are working towards the same goal. It's ok for them to do it locally and tell us the result, ie, go for a honor system.  

> *Dmitri Zagidulin:* +1 Ivan, makes sense.

> *Dmitri Zagidulin:* so then we should agree re CLI vs Docker/HTTP.

> *Manu Sporny:* I don't think that is good enough for v2.0.

> *Manu Sporny:* We made that mistake w/ v1.0 :).

> *Kristina Yasuda:* "min 2 implementations using different libraries, test only vc+ld+jwt serialization, using JSON-schema-like to test json-ld, not testing the mapping to other serialization in vc-jwt, not testing anything v1.1".

> *Manu Sporny:* +1 ^.

> *Dmitri Zagidulin:* +1 ^.

> *Ivan Herman:* +1^.

---
