---
layout: minutes
date: 2023-09-05
title: Verifiable Credentials Working Group Special Topic Call on PR Discussions — 2023-09-05
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-09-05-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on PR Discussions",
        "dateCreated": "2023-09-05",
        "irc": "vcwg-special",
        "datePublished": "2023-09-05",
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
            "startDate": "2023-09-05",
            "endDate": "2023-09-05",
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
                            "name": "David Chadwick"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Sebastian Crane"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
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
                    "name": "Brent Zundel"
                },
                {
                    "@type": "Person",
                    "name": "Paul Dietrich"
                },
                {
                    "@type": "Person",
                    "name": "Dave Longley"
                },
                {
                    "@type": "Person",
                    "name": "Manu Sporny"
                },
                {
                    "@type": "Person",
                    "name": "Benjamin Young"
                },
                {
                    "@type": "Person",
                    "name": "Sebastian Elfors"
                },
                {
                    "@type": "Person",
                    "name": "Kaliya Young"
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Joe Andrieu"
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "Chris Abernethy"
                },
                {
                    "@type": "Person",
                    "name": "Oliver Terbu"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on PR Discussions — Minutes
{: .no_toc}



**Date:** 2023-09-05

See also the [Agenda](https://www.w3.org/events/meetings/f6342df0-f7b5-4fc9-babd-61e55dc5fc2f/20230905T110000/) and the [IRC Log](https://www.w3.org/2023/09/05-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Phillip Long, Sebastian Crane, Ted Thibodeau Jr., Ivan Herman, Shigeya Suzuki, Kristina Yasuda, Brent Zundel, David Chadwick, Paul Dietrich, Dave Longley, Manu Sporny, Benjamin Young, Sebastian Elfors, Kaliya Young, Orie Steele, Joe Andrieu, Michael Jones, Chris Abernethy, Oliver Terbu

**Regrets:** 

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** David Chadwick

## Content:
{: .no_toc}

* TOC
{:toc}
---


> *Phillip Long:* pl-asu has joined #vcwg-special.

> *Manu Sporny:* I have to leave 30 minutes into the meeting...

### 1. CR Publication/Planning.
{: #section1}

**Manu Sporny:** have sent out proposals for CRs.  
… have written the proposals for TPAC transmissions of them. Resolutions should be taken at TPAC.  
… one decision we need to make is whether we tie the specification together or separately.  
… for progression to CRs.  
… what does each editor want to present at TPAC about each of their documents?  

> *Orie Steele:* congrats to data integrity being ready for CR : ).

**Orie Steele:** VC DM will still have stuff to work on after TPAC for progression to CR.  
… so does cose-jose - it wont be ready any time soon.  
… json-schema could be done as quickly as data integrity spec.  

**Manu Sporny:** proposes 30 mins for each data integrity spec (10 mins presentation and 20 mins discussion).  
… there are 3 specs. we might even finish all within one hour.  
… status list has a lot of issues that have not yet been triaged.  
… he could do it this week if people would like.  

> *Orie Steele:* lets try to reduce the set of documents, by targeting the ones that are "almost done".

> *Manu Sporny:* +1 ^. 

### 2. VC Json Schema PRs/Issues.
{: #section2}

> *Kristina Yasuda:* [https://github.com/w3c/vc-json-schema/pulls](https://github.com/w3c/vc-json-schema/pulls).

**Manu Sporny:** I have reviewed the spec, its mostly good, but has a lot of normative dependencies.  
… could we possibly remove some by depending on DMv2 doc.  
… a lot of normative dependencies can cause hiccups with progression.  

**Orie Steele:** attacking the list of dependencies is an easy way of slowing up progression.  
… e.g. depending on JSON-Schema which is not a W3C spec.  
… its difficult to say which version of JSON-Schema you are dependent upon, when they contain different elements.  

> *Sebastian Crane:* [http://json-schema.org/blog/posts/future-of-json-schema](http://json-schema.org/blog/posts/future-of-json-schema).

**Ivan Herman:** we added a note to say that json schema community is on the way to creating a stable spec, so we referenced the latest version.  
… lets publish our draft as is. This is the best we can do at the moment.  

> *Kristina Yasuda:* i think it's the same problem as in TLS ver in IETF specs.

**Manu Sporny:** I am not saying remove all normative references, but reduce all the json schema dependencies to just one.  

> *Kristina Yasuda:* it usually says go look at the latest TLS BCP..

**Manu Sporny:** this will make it less painful for ourselves, wrt testing etc.  

> *Orie Steele:* afaik, gabe has written tests, maybe lets review the tests before worrying.

> *Kristina Yasuda:* JSON schema is not in IETF.

**Sebastian Crane:** I think we are looking at implementations one or two years in the future. Json schema group will be independent of IETF and will have a stable version by then.  

**Oliver Terbu:** I have similar opinion to seabass.  

#### 2.1. Pre-CR normative dependencies will trigger a 2nd CR (issue vc-json-schema#210)
{: #section2-1}

_See github issue [vc-json-schema#210](https://github.com/w3c/vc-json-schema/issues/210)._

<!-- issue w3c/vc-json-schema/210 -->



**Kristina Yasuda:** we will bring this up at tomorrows WG call.  

### 3. VCDM PRs.
{: #section3}

> *Kristina Yasuda:* [https://github.com/w3c/vc-data-model/pulls](https://github.com/w3c/vc-data-model/pulls).

#### 3.1. Add validation section regarding holder (pr vc-data-model#1199)
{: #section3-1}

_See github pull request [vc-data-model#1199](https://github.com/w3c/vc-data-model/pull/1199)._

<!-- issue w3c/vc-data-model/1199 -->



**Manu Sporny:** +1199 joe said he would review.  

**Joe Andrieu:** there has been some discussions on this already.  

#### 3.2. Guidance around arrays (pr vc-data-model#1258)
{: #section3-2}

_See github pull request [vc-data-model#1258](https://github.com/w3c/vc-data-model/pull/1258)._

<!-- issue w3c/vc-data-model/1258 -->



**Manu Sporny:** this will be merged very shortly.  

#### 3.3. Sync and fix bugs in v2 context. (pr vc-data-model#1259)
{: #section3-3}

_See github pull request [vc-data-model#1259](https://github.com/w3c/vc-data-model/pull/1259)._

<!-- issue w3c/vc-data-model/1259 -->



**Manu Sporny:** we might be OK to merge this, as it addresses Orie's issue.  

> *Orie Steele:* Move that discussion to another issue.

**Orie Steele:** lots of graph nodes are identified with strings that are not URLs, so Google's implementation works with both.  
… we should not make changes to `@context` that throws errors in processors.  

**Michael Jones:** in XML we have namespaces, but in JSON we don't.  

> *Orie Steele:* See this link for examples of `@id` that are strings. [https://github.com/w3c/vc-data-model/pull/1259#discussion_r1310768121](https://github.com/w3c/vc-data-model/pull/1259#discussion_r1310768121).

**Manu Sporny:** path forward seems to be to merge what there in the PR and raise issues on anything that we dont like.  

> *Orie Steele:* Not true, and not relevant to the issue.

**Manu Sporny:** web pages have a base URL for strings to be relative to, whereas VCs do not have.  

> *Manu Sporny:* yes, agreed w/ Orie's "This is what we're waiting for".

> *Dave Longley:* +1 to what Orie said, just need to remove that one `null`.

**Orie Steele:** we are waiting for a patch from `@dlongley` before we can merge.  

**Sebastian Crane:** no objections to this PR. Namespaces are valuable, so URLs are very useful.  

**Michael Jones:** namespaces are totally unnecessary.  

> *Orie Steele:* A registry is just a namespace `@selfissued`... so your comment makes very little sense to me, as a frequent user of registries.

> *Benjamin Young:* +1.

> *Dave Longley:* +1 to Orie, registries are namespaces too.

#### 3.4. Add Verification Method types to v2 context (pr vc-data-model#1260)
{: #section3-4}

_See github pull request [vc-data-model#1260](https://github.com/w3c/vc-data-model/pull/1260)._

<!-- issue w3c/vc-data-model/1260 -->



**Orie Steele:** do you need multiple `@contexts`? Ans was no, they should be bundled into one.  
… any time you see json web key you might not get the right @context and therefor not get the right definition (i.e. issuer defined vs. W3C defined).  
… there are no valid use cases for signing a secret key.  

### 4. JOSE-COSE issues/PRs.
{: #section4}

**Orie Steele:** two open PRs on jose-cose.  

#### 4.1. Changes to normative statements (pr vc-jose-cose#143)
{: #section4-1}

_See github pull request [vc-jose-cose#143](https://github.com/w3c/vc-jose-cose/pull/143)._

<!-- issue w3c/vc-jose-cose/143 -->



**Orie Steele:** lot of discussions about media types at last IETF.  
… possibly not a great idea to have very specific key types.  
… e.g. all VCs had to have the type of jwt, but you could not know anything about what was in the jwt.  
… by using jwt we could not make it any more specific.  
… this PR does not preclude using more specific values in future.  
… this PR alters the amount of work needed to perform the tests for getting to a standard.  
… ie. it reduces the amount of work needed.  

> *Kristina Yasuda:* +1 selfissued.

> *Orie Steele:* I agree, but prefer to address that in a separate PR.

> *Orie Steele:* Feel free to file an issue to track the suggested language.

**Michael Jones:** rationale should be included to say this media type should be used unless a profile specifies a more specific media type.  

#### 4.2. Add support for DIDs (pr vc-jose-cose#144)
{: #section4-2}

_See github pull request [vc-jose-cose#144](https://github.com/w3c/vc-jose-cose/pull/144)._

<!-- issue w3c/vc-jose-cose/144 -->



**Orie Steele:** this PR was so that the document can refer to a did document signed by a controller.  
… there was concern that duplication of text from data integrity could produce conflicts, but.  
… on the other hand some did not like to refer to data integrity.  
… we need to get the controller document language into the spec, otherwise the draft wont be ready for CR anytime soon.  
… so please read the PR and get your comments in ASAP.  

**Ivan Herman:** Orie does this text duplicate what is already in the DID specification?  

**Orie Steele:** Its close but not a clean copy.  
… text around rdf class,.  
… and key materal.  
… which is not in did core.  
… you wont see our text on multikey and rdf classes in other specs.  
… there is a lot of confusion about finding key material. This text is there to help resolve this.  
… I am still concerned about the verifier determining relationship between subject and holder (??).  

_See github issue [vc-jose-cose#30](https://github.com/w3c/vc-jose-cose/issues/30)._

<!-- issue w3c/vc-jose-cose/30 -->



**Orie Steele:** verification relationships is part of did core. e.g. this key is used for signing, or key agreement etc.  
… the same key might be used for multiple purposes. But if the key does not have its usage specified it can be used for anything.  
… but where the usage is specified is one document away from where the key is used.  
… e.g. can you verify a VC signed with an issuer's key usage only for authentication?  
… the controller document will specify the key uses.  

**Oliver Terbu:** are you now requiring these controller documents to always be needed?  

> *Oliver Terbu:* thank you.

**Orie Steele:** there is currently an issue on this topic. Should there be a well known endpoint for controller docs, but currently there is no specification saying how you get the key material.  

> *Orie Steele:* See this section on discovery key material without using a "controller" document: [https://w3c.github.io/vc-jose-cose/#well-known-uris](https://w3c.github.io/vc-jose-cose/#well-known-uris).

### 5. Closing
{: #section5}

**Kristina Yasuda:** if you have any topics for TPAC please contact the ch.  

---
