---
layout: minutes
date: 2023-01-31
title: VCWG Special Topic Call — 2023-01-31
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-01-31-vcwg-special",
        "name": "VCWG Special Topic Call — Minutes",
        "about": "VCWG Special Topic Call",
        "dateCreated": "2023-01-31",
        "irc": "vcwg-special",
        "datePublished": "2023-02-06",
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
            "name": "VCWG Special Topic Call",
            "startDate": "2023-01-31",
            "endDate": "2023-01-31",
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
                    "name": "Michael Prorock"
                },
                {
                    "@type": "Person",
                    "name": "Shigeya Suzuki"
                },
                {
                    "@type": "Person",
                    "name": "Phil ASU"
                },
                {
                    "@type": "Person",
                    "name": "Gabe Cohen"
                },
                {
                    "@type": "Person",
                    "name": "Kerri Lemoie"
                },
                {
                    "@type": "Person",
                    "name": "Kristina Yasuda"
                },
                {
                    "@type": "Person",
                    "name": "Steve McCown"
                },
                {
                    "@type": "Person",
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Michael Jones"
                },
                {
                    "@type": "Person",
                    "name": "David Waite"
                },
                {
                    "@type": "Person",
                    "name": "Shawn Butterfield"
                },
                {
                    "@type": "Person",
                    "name": "Dmitri Zagidulin"
                }
            ]
        }
    }

---

# VCWG Special Topic Call — Minutes
{: .no_toc}



**Date:** 2023-01-31

See also the [Agenda](https://lists.w3.org/Archives/Public/public-vc-wg/2023Jan/0029.html) and the [IRC Log](https://www.w3.org/2023/01/31-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Michael Prorock, Shigeya Suzuki, Orie Steele, Manu Sporny, Phil ASU, Gabe Cohen, Kerri Lemoie, Kristina Yasuda, Steve McCown, Brent Zundel, Ted Thibodeau Jr., Michael Jones, David Waite, Shawn Butterfield, Dmitri Zagidulin

**Regrets:** 

**Guests:** 

**Chair:** Brent Zundel

**Scribe(s):** Orie Steele, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---


### 1. VC Status List.
{: #section1}

#### 1.1. Add section about bitstring encoding. (pr vc-status-list-2021#45)
{: #section1-1}

_See github pull request [vc-status-list-2021#45](https://github.com/w3c/vc-status-list-2021/pull/45)._

<!-- issue w3c/vc-status-list-2021/45 -->



**Manu Sporny:** there 2 PRs follow up from discussions last week.  
… they cover bitstring and dereferencing..  
… it adds an image to talk about encoding, and some language..  

#### 1.2. Ensure that statusListCredential can be dereferenced. (pr vc-status-list-2021#46)
{: #section1-2}

_See github pull request [vc-status-list-2021#46](https://github.com/w3c/vc-status-list-2021/pull/46)._

<!-- issue w3c/vc-status-list-2021/46 -->



**Manu Sporny:** next item, is regarding dereferencing.  
… issue #39 is about errors when you can't dereference..  
… we don't use these values, so it should not matter if they fail to dereference..  
… but it should fail during validation....  
… new PR says throw an error during validation.  
… if the ids can't be dereferenced.  

> *Brent Zundel:* [https://github.com/w3c/vc-status-list-2021/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc](https://github.com/w3c/vc-status-list-2021/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc).

### 2. Issue Processing.
{: #section2}

#### 2.1. Status-List-2021 without the VC (issue vc-status-list-2021#4)
{: #section2-1}

_See github issue [vc-status-list-2021#4](https://github.com/w3c/vc-status-list-2021/issues/4)._

<!-- issue w3c/vc-status-list-2021/4 -->



**Brent Zundel:** sounds like the poster is seeking information.  


**Kristina Yasuda:** seems like a question that could impact spec design.  
… there was an option for the bitmap to be in a did doc before.  
… can it be made legal to put the bitmap list in a did doc?.  
… we could discuss.  

**Manu Sporny:** technically, you can use a status list URL, including a DID....  
… dereferencing must be a VC currently, so a DID Document would not be secured..  
… we don't currently have a way to support hosting the list in a did document.  
… I am concerned about expanding the scope of a status list.  
… I know its possible to create URLs that would work for this..  

**Kristina Yasuda:** I don't have strong opinions either way, does an object that is stored under a URL or a DID... does it have to be signed?.  
… if you trust the PKI, does it still need to be signed?.  
… maybe the answer is you sign anyway....  
… from interop perspective, less options the better.  
… can the result be a simple JWS?.  
… seems like maybe folks should not need to understand the VC spec to process the status list.  

**Manu Sporny:** if we don't sign it, they you do need to trust the domain / did method / web host / did controller ... etc....  
… we could say, it does not need to be signed, just make sure its secured..  
… then it opens the attack surface on the integrity of the list.  
… why a vc? the reason they go to the list, is because they are coming from a VC... we know they can already process VCs..  
… its not a surprise for he implementer to get another VC..  
… could the list be signed differently, but then we have mixed technologies for the list and the original vc.  
… for those reasons we built it on top of VCs.  

**phil ASU:** also concerned about the attack surface, but also concerned about multiple ways to achieve the same objective..  
… if they can already handle a VC, we should ask them for clarity regarding why they are asking the question regarding ethereum.  

> *Kristina Yasuda:* "The statusListCredential property MUST be a URL to a verifiable credential." should be changed to "URI".

> *Kristina Yasuda:* if DIDs, ethereum URLs are to be allowed.

**Orie Steele:** Manu covered a lot of what I would say. I think it's a mistake for a credential status type to have a lot of agility on the security format. It seems ok to me to have the URL structure be one of any possible valid URLs that dereference to a VC. The DID side of it I don't have strong objections to..  
… However, switching to a different cryptographic suite from what the VC uses, it could make the end verifier implement multiple cryptosuite to implement a revocable credential, don't think that's a good thing. If the objective is to store the list on a blockchain, on a website or without security... each of those are separate items and it's possible that they could all be well supported if they all have a unique type and they're supported separately..  
… I think it's a mistake to expand the scope of status list to do all of those things..  

**Manu Sporny:** one use case to mention, on why do we sign....  
… signing enables offline presentation by the holder.  
… this allows for revocably credentials to be presented without going to the network.  
… this can also enable the verifier to not need to make network requests.  
… the holder may present the list directly to the verifier.  

> *Phil ASU:* +1 for preserving the holder providing the status list directly to the verifier..

**Kristina Yasuda:** thanks for the comments.  
… it would be good to clarify the answers to these questons.  
… should it be URI instead of URL ?.  

> *Manu Sporny:* agree that we should clarify all of these things in the spec... I don't think we say many of these things..

> *Michael Prorock:* url is new syntax via whatwg.

**Manu Sporny:** normally we would have put URI, but there was a big fight over URI vs URL and WHATWG.  
… so we should call everything a URL.  
… so now we call everything a URL.  

> *Michael Prorock:* manu schooled the sh*** out of me on this and i still have bad habits on uri etc.

> *Kristina Yasuda:* that's the answer i expected.

**Manu Sporny:** we can't call them URIs or we will get yelled at by WHATWG.  

> *Andres Uribe:* That just underscores why url should be used everywhere :P.

**Brent Zundel:** any next steps that need to go into the issue?.  

**Manu Sporny:** kristina asked for us to clarify in the spec on this, and we should..  
… we should add a PR to comment on what we have just discussed.  

> *Michael Prorock:* +1 manu - spec is good if you "know" not as good if you don't.

> *Kristina Yasuda:* (and I think the answer to issue #4 is they would have to host a VC under an ethereum URL).

#### 2.2. Preventing multiple single-credential status lists per issuer (issue vc-status-list-2021#6)
{: #section2-2}

_See github issue [vc-status-list-2021#6](https://github.com/w3c/vc-status-list-2021/issues/6)._

<!-- issue w3c/vc-status-list-2021/6 -->



**Orie Steele:** I think this is trying to get at bad issuers..  
… They can track with status list if they do a 1:1 mapping -- what can the spec do to prevent issuers from being bad? The spec could mandate that you have a fixed size of the bitstring and spec can direct you to consume indexes randomly and not have new list... but malicious issuer can do whatever they wish..  

> *Michael Prorock:* +1 orie - people are bad on the internet sometimes, not sure we can solve it all.

**Orie Steele:** If you have to trust them for digital signature, they can do many other bad things, I think that's what he's asking about, don't know how much guidance we can place in here. Perhaps we should add something to Security Considerations wrt. things "not to do with the spec"..  

**Brent Zundel:** We can say an evil issuer is non-conformant..  

**Manu Sporny:** yes, agree with orie and brent..  
… we can't prevent bad issuers from being evil, we should write about this in security considerations section.  
… we have been trying to figure out if its detectable.  
… maybe wallets can detect that the issuer has lots of status lists?.  
… but it seems like a wallet can't know if this is happening.  
… because of the design, its very hard to know if the issuer is evil.  
… issuers will be evil, and they will try to do things like this... and its hard for us to detect it... so we should comment on it in sec considerations.  

**Michael Prorock:** evil issuer is gonna support better 3rd party snooping an coordination?.  
… there are much easier ways around this for bad actors....  

> *Manu Sporny:* truth, mprorock.

> *Kristina Yasuda:* filed: [https://github.com/w3c/vc-status-list-2021/issues/48](https://github.com/w3c/vc-status-list-2021/issues/48).

**Andres Uribe:** can enforcing the structure of the URL help?.  
… perhaps URL structure could help?.  

**Michael Prorock:** see data brokers, and services... they are not going to make it obvious.  
… we should provide guidance for honest parties.  
… the bad guys will turn around and sell it, without leaving a trace in the open.  

#### 2.3. Status list credential issuer validation (issue vc-status-list-2021#7)
{: #section2-3}

_See github issue [vc-status-list-2021#7](https://github.com/w3c/vc-status-list-2021/issues/7)._

<!-- issue w3c/vc-status-list-2021/7 -->



**Brent Zundel:** is status list 2021 expected to be issued by the same issuer as the credential.  

> *Michael Prorock:* 3rd party stuff could get interesting.

**Orie Steele:** as far as I know, the answer is "yes", but there are "hierarchy" concerns -- is the global company the same as the sub-company? Does it have to be with the same keys? I don't know the specific guidance on this, but errors would be thrown if the issuer is not matching. Looking for clear guidance on issuer, keys, etc. being the same vs. different..  

> *Kristina Yasuda:* also filed: [https://github.com/w3c/vc-status-list-2021/issues/49](https://github.com/w3c/vc-status-list-2021/issues/49).

**Brent Zundel:** the setup is that the issuer has issued a vc and the issuer has indicated where a verifier can retrieve the credential.... does it matter?... can an issuer delegate revocation authority?.  

> *Michael Prorock:* question is "expected to be" not, what are all the crazy things we can do.

**Manu Sporny:** +1 to yes... the answer is yes in general.  

> *Kristina Yasuda:* One sentence that it might or might not match might be helpful.

> *Kristina Yasuda:* we had the same question in openid4vci spec: "Depending on the Credential format, the issuer identifier in the issued Credential is not always a URL using the `https` scheme. Some other forms that it can take are a DID included in the `issuer` property in a [VC_DATA] format, or the `Subject` value of the document signer certificate included in the `x5chain` element in a [ISO.18013-5] format.".

**Manu Sporny:** its true, there are questions about hierarchy and global company vs local companies.....  
… and it may be bad for us to be overly strict in this regard.  
… I think what brent said is most telling, the issuer intended to point to where they sent you... you should probably trust the original issuer first..  
… the original issuer, should be able to delegate.  
… it would be straight forward for us to say the issuer should be the same for both.  
… its probably better to just require both to be verified, and leave the choice to the issuer.  

**Phil ASU:** in the k12 space, highschool vs districts use case seems relevant....  
… we have seen issues where there can be governance issues here.  

> *Michael Prorock:* +1 Phil we are looking more at business rules and not closing those things off.

**Kristina Yasuda:** can we say the issuer may or may not match.  
… we did something similar in another spec.  

> *Manu Sporny:* +1 kristina.

> *Michael Prorock:* +1.

> *Orie Steele:* +1 kristina.

#### 2.4. Bounds checking (issue vc-status-list-2021#9)
{: #section2-4}

_See github issue [vc-status-list-2021#9](https://github.com/w3c/vc-status-list-2021/issues/9)._

<!-- issue w3c/vc-status-list-2021/9 -->



**Brent Zundel:** if the index is out of bounds... what should happen.  

**Manu Sporny:** it should raise an error.  
… if they are out of bounds, it should raise an error..  

> *Michael Prorock:* ill volunteer for a PR on this.

**Kristina Yasuda:** I don't disagree... throwing an error is fine, but perhaps we should define an error code?.  
… are there error codes?.  

**Manu Sporny:** checking the status index is part of the verification stage.  
… that would cause verify to fail.  
… it gets into protocol.  

> *Kristina Yasuda:* error message?.

**Manu Sporny:** all we can say is you should throw an error.  
… we don't have error codes yet.  
… there is no way to surface these to the caller, unless we talk about protocol like vc api.  
… i don't think this spec, which is just data model and serialization, can say much about how errors are exposed.  

**Michael Prorock:** i'm not opposed to including informative guidance.  
… like 406 / not acceptable.  
… normative path, we should say MUST throw an error.  

> *Phil ASU:* +1 to it should throw an error.

**Michael Prorock:** should users see it? we can't say anything about that.  

> *Michael Prorock:* +1 manu.

**Manu Sporny:** is there confusion over getting the list, like 404... vs during verification 406 might not make sense... maybe better 200 verified false.  
… seems like a protocol trap.  

> *Michael Prorock:* agreed.

**Kristina Yasuda:** good point on retrieval vs verify in the bitmap.  
… we should say 404 if its obvious is should be 404.  

> *Manu Sporny:* +1 kristina, not finding the status list should be a 404 and should be in the spec..

**Kristina Yasuda:** if we want to avoid protocol, error message is probably also a trap.  

**Manu Sporny:** we can define an algorithmic error message.  
… error_index_out_of_bounds and hand wave about it.  
… languages / implementers can define how they want to handle it.  

> *Michael Prorock:* +1 manu, e.g. you MUST return an error that indicates that the index is out of range through ERR_ABOVE_MAX.

#### 2.5.  (issue vc-status-list-2021#11)
{: #section2-5}

_See github issue [vc-status-list-2021#11](https://github.com/w3c/vc-status-list-2021/issues/11)._

<!-- issue w3c/vc-status-list-2021/11 -->



**Brent Zundel:** what should the type value be.  
… I think this is stale / old and has been fixed..  

**Manu Sporny:** this is about old langauge that no longer exists.  
… seems we should close this issue, and note that we have changed the name.  

**Kristina Yasuda:** +1 to the direction, curious.... why is there a 2021 in the name, can we drop it?.  

> *Michael Jones:* Please delete the 2021.

**Manu Sporny:** yeah, typically we version things... and we like to be able to tell versions apart.  

> *Shawn Butterfield:* Can we use SemVer then?.

**Manu Sporny:** dates have been used fro crypto suites, so you can tell how old something is.  

> *Michael Prorock:* +1 shawn.

**Manu Sporny:** we you see v1, v2, v3... you have no sense of time.  

> *Orie Steele:* whereas dates tell you something about time.

> *Michael Prorock:* but is json, why just not add semver as a property in the json.

**Manu Sporny:** first question, do we want versioning? yes... do we want semantic versioning or date based versioning.  
… we do stuff differently all over the place.  
… dates are in names when time is important.  
… I will note that this has paid off well.  
… because if we had not versioned we would have been stuck with RSA suites forever.  

**Kristina Yasuda:** first question is what are we trying to version.  

> *Michael Prorock:* [https://github.com/w3c/vc-status-list-2021/issues/11#issuecomment-1411229291](https://github.com/w3c/vc-status-list-2021/issues/11#issuecomment-1411229291).

**Kristina Yasuda:** we should version specs based on publication date maybe.  
… lets agree on what we are trying to version, and then discuss how to do it.  
… I would be in favor of dropping date versioning.  

> *Michael Prorock:* dates typically imply bias (newer is better).

> *Kristina Yasuda:* I think cryptosuites versioning is different.

> *Michael Prorock:* or as it ages....

**Orie Steele:** I also was surprised to learn about this long history of adding dates to specs to version them and recently in Chairing capacity came across IDNA2003 and IDNA2008 and UTS46 and it has rekindled my deep appreciation that people have always struggled on clean versioning schemes. It does seem to me that putting a date on things was more popular in the past then it is today, W3C community is last holdout to put dates on things and others have.  

> *Manu Sporny:* moved on from this practice since then. Maybe an older convention and not current best practice. There are things out there that people are referring to and arguing over and fact that it has 2008 causes people to argue over it more than if it didn't..

**Manu Sporny:** I would not say its an old thing.  
… it was easy for us to just use dates, thats why we picked them.  
… people don't try to find new versions.  
… kristina asked, what are we trying to version... we are trying to version the "object".  
… not the spec.  
… if we had started off without adding a version to the RDF type, we would have been trapped.  
… now we can add new RDF classes for each new type we create, so we can tell the RDF types apart.  
… people have strong opinion on this, feels like a rat hole.  

> *Brent Zundel:* Is StatusList2021 worse than StatusListV1 ?.

> *Kristina Yasuda:* filed an issue: [https://github.com/w3c/vc-status-list-2021/issues/50](https://github.com/w3c/vc-status-list-2021/issues/50).

> *Dmitri Zagidulin:* @brentz: that was my question too.

**Brent Zundel:** regarding this particular issue, feels like we can close it.  

> *Shawn Butterfield:* +1 close it.

**Brent Zundel:** any objection?.  

**dimitry:** I was going to ask what you asked in chat.  

> *Kristina Yasuda:* +1 to StatusListV1.

> *Orie Steele:* is StatusListV1 better or worse than StatusList2023.

**Brent Zundel:** closing this issue.  

> *Dmitri Zagidulin:* thaaanks Orie!.

> *Shawn Butterfield:* thanks, Orie :high-five:.

> *Phil ASU:* + putting a year in the status list ends of causing questions when there haven't been changes as people think i's moribund, not simply still doing strong. ;-).

---
