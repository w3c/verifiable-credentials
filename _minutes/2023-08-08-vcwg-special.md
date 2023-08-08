---
layout: minutes
date: 2023-08-08
title: Verifiable Credentials Working Group Special Topic Call on PR Discussions — 2023-08-08
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-08-08-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on PR Discussions",
        "dateCreated": "2023-08-08",
        "irc": "vcwg-special",
        "datePublished": "2023-08-08",
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
            "startDate": "2023-08-08",
            "endDate": "2023-08-08",
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
                    "name": "Hiroyuki Sano"
                },
                {
                    "@type": "Person",
                    "name": "Sebastian Crane"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Oliver Terbu"
                },
                {
                    "@type": "Person",
                    "name": "chris"
                },
                {
                    "@type": "Person",
                    "name": "Benjamin Young"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "David Chadwick"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                },
                {
                    "@type": "Person",
                    "name": "Kristina Yasuda"
                }
            ]
        },
        "resolution": [
            {
                "@type": "Resolution",
                "resolution_number": 1,
                "resolution_text": "We will move forward with the testing plan as outlined and create the necessary repositories and import the necessary files as mentioned."
            }
        ]
    }

---

# Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes
{: .no_toc}



**Date:** 2023-08-08

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20230808T110000/) and the [IRC Log](https://www.w3.org/2023/08/08-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Ivan Herman, Brent Zundel, Hiroyuki Sano, Sebastian Crane, Andres Uribe, Joe Andrieu, Manu Sporny, Phillip Long, Dave Longley, Dmitri Zagidulin, Chris Abernethy, Oliver Terbu, Benjamin Young, Orie Steele, David Chadwick, Gabe Cohen, Kaliya Young, Kristina Yasuda

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Andres Uribe, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. Test suite.
{: #section1}

**Brent Zundel:** welcome to special topic call: test suites.  
… we last decided what the exit criteria was.  
… that conversation was a precursor to what we'll be talking about today: test suite.  
… In order to exit CR we need to demonstrate that data models we produce are interoperable by having a test suite.  
… Implementations can then show they are compliant with the data model.  
… Any rec track document we produce will have testing associated to it.  
… Do we want one repo for all test suites? One suite to rule them all? Let's decide all the details. Can be docker, http, chapi, etc... everything is on the table.  
… manu sent an email to the group explaining what digital bazaar did for DI.  
… The goal for today: get as close as we can to what we want this test suite to look like.  
… Implementation trumps opinion in most cases.  
… That is, we appreciate opinions, but we do need the test suite.  

**Sebastian Crane:** You mentioned what are the criteria. I would say reproducibility is one of the goals.  
… HTTP could be, but that relies on external systems that the w3c doesn't control.  
… Docker would actually make it more reproducible.  

**Manu Sporny:** I'm going to share my screen so I can show folks where we are with our proposal.  
… email went out about a week ago.  
… we propose one test suite per specification so authors can work independently.  
… E.g. if you work on vc-di-eddsa then you have a suite for it.  
… Putting all the suites together would cause people stepping on each other.  
… Splitting it would help parallelization of the work. And would leave the test suite responsibility to the authors of the spec.  

> *Sebastian Crane:* +1 to manu: the suites can be merged after we've finished them completely.

**Manu Sporny:** Currently, the exit criteria is multiple independent implementations.  
… <shows the status of 6 different implementers>.  
… For each normative statement we create a row in a table. The columns correspond to each implementer. The value is a pass/fail checkmark/X.  
… One of the problems we had in the vc1.x is asking people to run and give us a report. So implementers never came back after running the report.  
… This suite is different because we're the ones deciding when to run the suite. And how often.  
… [shows a similar table for vc-di-eddsa].  
… [and again for vcdm2.0].  
… To Sebastian's comment regarding Docker containers, that's in the roadmap.  
… We believe the docker images are easy to integrate with the existing tests.  
… The test runner would spin up the container and execute the HTTP calls.  
… The proposal is for this to be one among many test suites. One test suite per specification for max flexibility.  

**Brent Zundel:** [some german words saying thank you].  

**Orie Steele:** I want to focus on the vc-jose-cose item only for now.  
… I think it would great to test all the media types related to the spec.  
… Also important to have support for cryptographic agility (i.e. all the signing formats).  
… There are issues with cred schema and cred status from a testability perspective. I'd like to see something covering interop for both.  

> *Orie Steele:* [https://github.com/danielfett/sd-jwt/blob/main/tests/testcases/array_recursive_sd_some_disclosed/specification.yml](https://github.com/danielfett/sd-jwt/blob/main/tests/testcases/array_recursive_sd_some_disclosed/specification.yml).

**Orie Steele:** We're required to test normative statements. But sometimes that's not as valuable as covering the important test cases.  
… Sharing a link to what sd-jwt did. It shows what the input is, and output after specification.  
… I'd like to see something similar for normative and important cases.  
… The test suite should be helpful, not only covering normative statements.  
… Another point of concern is source of randomness. We should plan for implementations to not be able to backdate.  

> *Orie Steele:* [https://identity.foundation/JWS-Test-Suite/](https://identity.foundation/JWS-Test-Suite/).

**Orie Steele:** It should be easy to take an implementation and show conformance.  
… I also wanted to share two links.  

> *Orie Steele:* [https://github.com/transmute-industries/vc-jwt-test-suite](https://github.com/transmute-industries/vc-jwt-test-suite).

**Orie Steele:** The test suite at DIF does secure JWT, so a similar approach could be done here.  

> *Brent Zundel:* +1 to closed-source implementations being supported.

**Orie Steele:** The second link shows accepting reports. Some security folks will not share the docker image. While that's not reproducible, they aren't willing to participate if they need to share.  
… I think we're pretty far behind, but really excited to work on this. Certainly for vc-jose-cose.  

**Sebastian Crane:** Responding to 2 thing.  
… Re: docker images, there are additional advantages. As implementer, you don't need to run a web service. Also, the WG can look back as long as we want to.  
… Re: orie's points. Thanks for sharing the yaml file for sd-jwt. We have to be careful that we aren't testing details about an implementation.  
… Finally want to note that being closed source should not stop reproducibility. We can have NDAs in place to address, or confidentiality agreements.  

> *Orie Steele:* I suspect you won't get the code, but you might get a vendor report run.

**Manu Sporny:** We did have a test suite for status list ready to go. But the many changes haven't been incorporated (e.g. multi-status). We need to update it.  
… If status list needs to be secured, then we need to be able to write tests that ensure they are interoperable.  

> *Ivan Herman:* +1 to Manu about what this group needs to do.

**Manu Sporny:** This group only needs to test normative statements. While I'm supportive of integration and unit tests, it's probably not this WG's responsibility.  
… We can have another suite that goes above and beyond.  

> *Orie Steele:* YEs, split the suites up... cover the mandatory W3C stuff first.

**Manu Sporny:** It can include edge cases, fuzzing, etc...  
… In our examples, we also do n-by-n testing across implementations.  
… It has helped identify gaps in our test suite.  

**Orie Steele:** Agree with everything manu said.  
… Clarifying a point. We have normative statements in different specs. Some specs are extensions.  
… In the context of a securing specification, unless there provable interoperable implementations, then I wouldn't be comfortable with the implementation.  
… There is some assurance in the securing specification that there will be interop with the VCDM with extensions.  
… That's an area I'd like to see better execution. You want to believe that an extension point exists, and that can be secured interoperably.  
… You can do it by looking at the securing specification under the lens of doing validation and signing of all the VCDM with extensions.  

**Brent Zundel:** Thanks for everything that has been shared.  
… The primary goal is to test suite is to test the specification. We do that by testing each implementation. Everything else beyond that is gravy.  

**Manu Sporny:** +1 to brent. However, we're at a point where I think we should do better.  

> *Orie Steele:* +1 manu, lets cover the basic requirements, and then lets address the issues that implementers have, and enable them to contribute to what they want to see tested.

**Manu Sporny:** We should allow us to do better. We don't need to as a group, but shouldn't block it.  
… Where do we want to go with interop testing as a group?  

> *Sebastian Crane:* +1 from me.

**Manu Sporny:** In implementing the VC 2.0 model tests. The engineers were uncomfortable with the extension point tests.  

> *Orie Steele:* +1 to the extension point tests being dangerous... and possibly not useful, unless addressed better.

**Manu Sporny:** We need to talk more about this as a group. There is no clear solution that would achieve consensus. We've tested the type of the object and that's about it.  

> *Orie Steele:* To be direct, the problem with the extension points is having no "output format" to compare to... for tests.

**Manu Sporny:** The only extension points we could do better is credentialSchema and status list.  

**Ivan Herman:** Something a bit different.  
… Among other things, we define vocabularies. The way they're handled is to prove that the terms defined in the vocabulary are used by actual implementations.  
… I don't know if the tests systematically cover all the terms that we've defined. Even those we've described as optional.  
… Maybe we need a separate report that for each term it makes a statement specifying which terms are used by which implementation.  

**Orie Steele:** So glad you raised that. There's a series of issues open related to this.  
… One category is the value of the json model value after processing.  
… I can imagine us testing the normative context with framing and processing.  
… I would want us to do it if the context ends up being normative.  
… Re: vocabulary. That's an area I believe we should invest on.  
… Folks should see the terms that are being tested very clearly.  

> *Orie Steele:* -1 to citing data integrity tests as a way to "ensure the normative context is useful".

> *Orie Steele:* but its a good start / or in addition too.

**Manu Sporny:** Reacting to ivan and orie. We do some level of testing already for the context because we are doing RDF expansion.  
… We are testing that today in DI.  

> *Orie Steele:* +1 to testing that the vocab can be loaded / processed.

**Manu Sporny:** More ideas are welcome on how we can better test (and contributions).  

**Ivan Herman:** I think I wasn't understood.  
… I'm not talking about testing. I'm talking about the CR exit criteria. These two aren't the same.  
… We have to prove that every term in the vocabulary has been designed for a reason.  
… We need a property table that justifies which implementations uses what.  
… In other groups we have relatively large sets of metadata terms that are used for a11y. We had to show which implementations used which terms. That was the reason why we had each term in the vocab.  

> *Orie Steele:* I think "JSON" processing will NOT use ANY of the vocabulary terms...

> *Orie Steele:* at least the URLs for the term definitions... is that ok?

**Brent Zundel:** Good conversation. From what I've heard, there is a common direction where we're heading. Can someone summarize?  

**Orie Steele:** My question is related to Ivan's clarification.  
… Some implementations will test some terms directly.  
… Do we have to prove that implementation use URLs that JSON ld processing is producing?  

**Ivan Herman:** No, we don't.  
… That isn't our WG's problem.  
… The really important point is to see whether those terms are used in practice.  

> *Dave Longley:* the existence of syntactic sugar to make things simpler for users does not mean users must unwind that sugar.

> *Dave Longley:* the meaning is the same.

> *Orie Steele:* Ahh, so just because a data integrity proof would use a term, does not actually mean that people use it.

> *Dave Longley:* Orie: "the term" is the same whether it's syntactically shortened from a URL or not.

**Manu Sporny:** Summary attempt:.  
… 1. Will do one test suite per specification for parallelization.  
… 2. Each test suite will do their best to support live APIs, docker images, and proprietary implementations that submit a file saying they pass.  
… 3. Decide whether the WG wants to pull in the work that has been done.  

> *Orie Steele:* Can we please have a repository for testing vc-jose-cose ?

> *Manu Sporny:* and can we please transfer the repos mentioned during the call to VCWG?

**Sebastian Crane:** I wanted to clarify a bit. closed source is not secret.  
… We've supported closed source in the past.  
… Supporting secret is something we've never done, and relying on trust wouldn't help us as a working group.  
… We can have them submit docker with obfuscated source, for instance.  

**Ivan Herman:** Does this mean that we'll create one repo per test-suite?  
… May be an overkill. We are already managing so many repos. Do we want to double? It may become unmanageable.  

**Manu Sporny:** Ivan, that's what was discussed. If we find it's unmanageable, we can discuss.  

> **Proposed resolution: We will move forward with the testing plan as outlined and create the necessary repositories and import the necessary files as mentioned.** *(Brent Zundel)*
{: .proposed_resolution}

> *Brent Zundel:* +1.

> *Manu Sporny:* +1.

> *Dave Longley:* +1.

> *Orie Steele:* +1.

> *Dmitri Zagidulin:* +1.

> *Ivan Herman:* +1.

> *Phillip Long:* +1.

> *Benjamin Young:* +1.

> *Chris Abernethy:* +1.

> *Joe Andrieu:* +1.

> *David Chadwick:* +1.

> *Gabe Cohen:* +1.

> *Hiroyuki Sano:* +1.

> *Andres Uribe:* +0.

> *Oliver Terbu:* 0.

> *Sebastian Crane:* +0.

> *Kristina Yasuda:* 0.

> ***Resolution #1: We will move forward with the testing plan as outlined and create the necessary repositories and import the necessary files as mentioned.***
{: #resolution1 .resolution}

---


### 2. Resolutions
{: #res}

* [Resolution #1](#resolution1): We will move forward with the testing plan as outlined and create the necessary repositories and import the necessary files as mentioned.
