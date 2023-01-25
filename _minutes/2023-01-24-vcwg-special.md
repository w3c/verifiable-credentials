---
layout: minutes
date: 2023-01-24
title: Verifiable Credentials Working Group Special Topic Call on StatusList2021 — 2023-01-24
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
        "url": "https://www.w3.org/2017/vc/WG/Meetings/Minutes/2023-01-24-vcwg-special",
        "name": "Verifiable Credentials Working Group Special Topic Call on StatusList2021 — Minutes",
        "about": "Verifiable Credentials Working Group Special Topic Call on StatusList2021",
        "dateCreated": "2023-01-24",
        "irc": "vcwg-special",
        "datePublished": "2023-01-25",
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
            "name": "Verifiable Credentials Working Group Special Topic Call on StatusList2021",
            "startDate": "2023-01-24",
            "endDate": "2023-01-24",
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
                            "name": "Joe Andrieu"
                        },
                        {
                            "@type": "Person",
                            "name": "Manu Sporny"
                        }
                    ]
                },
                {
                    "@type": "Person",
                    "name": "Brent Zundel"
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
                    "name": "Ted Thibodeau Jr."
                },
                {
                    "@type": "Person",
                    "name": "Orie Steele"
                },
                {
                    "@type": "Person",
                    "name": "Phillip Long"
                },
                {
                    "@type": "Person",
                    "name": "Kerri Lemoie"
                },
                {
                    "@type": "Person",
                    "name": "Gregory Natran"
                },
                {
                    "@type": "Person",
                    "name": "Andres Uribe"
                },
                {
                    "@type": "Person",
                    "name": "David Waite"
                },
                {
                    "@type": "Person",
                    "name": "Shawn Butterfield"
                }
            ]
        }
    }

---

# Verifiable Credentials Working Group Special Topic Call on StatusList2021 — Minutes
{: .no_toc}



**Date:** 2023-01-24

See also the [Agenda](https://www.w3.org/mid/c8b8d2408867948fe40778ccc002877c@w3.org) and the [IRC Log](https://www.w3.org/2023/01/24-vcwg-special-irc.txt)

## Attendees
{: .no_toc}
**Present:** Brent Zundel, Dave Longley, Chris Abernethy, Ted Thibodeau Jr., Orie Steele, Kristina Yasuda, Joe Andrieu, Phillip Long, Kerri Lemoie, Gregory Natran, Andres Uribe, Manu Sporny, David Waite, Shawn Butterfield

**Regrets:** 

**Guests:** 

**Chair:** Kristina Yasuda

**Scribe(s):** Joe Andrieu, Manu Sporny

## Content:
{: .no_toc}

* TOC
{:toc}
---

**Kristina Yasuda:** Apologies the agenda was late going out..  
… StatusList2021 is our focus..  
… We are trying to determine if we need to spend time on this in the F2F.  
… No pressure. We'll go through the 20 issues and put labels on.  
… Two goals: where does the document sit and progress, and familiarize people with the work item itself.  
… Ok. Let's dive in..  
… Apologies the agenda was late going out..  
… We are trying to determine if we need to spend time on this in the F2F.  
… No pressure. We'll go through the 20 issues and put labels on.  
… Two goals: where does the document sit and progress, and familiarize people with the work item itself.  
… Ok. Let's dive in..  

### 1. issue triaging.
{: #section1}

> *Kristina Yasuda:* See [https://github.com/w3c/vc-status-list-2021/issues](https://github.com/w3c/vc-status-list-2021/issues).

**Kristina Yasuda:** Let's start with the first one.  
… Issue 39.  

#### 1.1. Verification should fail for revocable credentials for status list that cannot be deferenced (issue vc-status-list-2021#39)
{: #section1-1}

_See github issue [vc-status-list-2021#39](https://github.com/w3c/vc-status-list-2021/issues/39)._

<!-- issue w3c/vc-status-list-2021/39 -->



**Kristina Yasuda:** There are no comments. Just an example.  
… So what do we do if the URL is a bad one?.  

**Manu Sporny:** there's a difference between verification and validation.  
… verification is checking signatures... validation is different.  
… Some verifiers might not care if the credential is suspended or revoked.  
… So I think this is about validation not verification.  
… We should provide some guidance about this.  
… Probably in the StatusList spec, not the VCDM spec.  
… If that sounds right, we could mark Ready for PR.  
… But haven't had a chance to discuss yet..  

> *Andres Uribe:* Just a note - verification is defined in the spec as including that "... if present, the status check succeeds".

> *Manu Sporny:* yes, andres, good point....

**Kristina Yasuda:** so you're saying if a verifier doesn't care, ignore the 404, if they do, it should fail..  

**Orie Steele:** it's concerning that a verifier might not care.  

> *Dave Longley:* +1 to something along the lines of what Kristina said ... if the verifier cares about status and can't retrieve the status list credential, it should result in a validation failure.

**Orie Steele:** the status and id are two URLs that we need to define what they dereference to.  

> *Manu Sporny:* ^ yes, +1 to that..

**Orie Steele:** and what happens if they fail.  

> *Manu Sporny:* (to what dlongley said).

**Joe Andrieu:** This may have been a scribe error, but what I heard in your summary, Kristina, was about Verification, but what Manu noted was it's about "Validation". Orie is saying it should be a part of Verification, but Manu is saying, because it is a part of business rules, it's a part of Validation..  

**Kristina Yasuda:** I think we agree this isn't about validation. It's about business rules?.  

> *Dave Longley:* "validity of the credential" is "business logic" (as opposed to verification) ... at least that's how we've talked about it in this group in the past..

**Manu Sporny:** I'm nitpicking on some of the language.  
… it's not about business rules, it's about validation. But validation *is* about business rules..  
… Some of us are saying this is validation, which is where additional rules kick in..  

> *Ted Thibodeau Jr.:* +1 validation is about business rules, which may care about verification results *including* failures.

**Manu Sporny:** Andres pointed out something interesting. If present, the status check needs to succeed, and it's not clear what that means.  
… Need to clarify validation is about running a set of business rules.  
… And if the use case needs to vary based on status, that happens in validation.  

**Kerri Lemoie:** are we sure its validation?.  
… I thought verification is from what's in the space and validation is business rules.  

> *Manu Sporny:* It's a good question, Kerri..

**Kerri Lemoie:** So, fit for role is a business rule, but the status is verification.  

> *Dave Longley:* our definition from the spec today: [https://www.w3.org/TR/vc-data-model/#dfn-verify](https://www.w3.org/TR/vc-data-model/#dfn-verify) (not that it couldn't change).

**Kristina Yasuda:** I think both are happening..  
… making sure there is a valid URL and checking it is "verification" and making a decision based on that is "validation".  

**Orie Steele:** This issue is filed specifically for verification. We filed it..  
… If verifying is inconsistent, that leads to problems..  
… Which will lead to different behaviors by different verifiers.  
… If folks want to layer validation in front, that's fine. But this is a security issue about verification.  

> *Kerri Lemoie:* Reference we've been using for verification & validation: [https://github.com/w3c-ccg/vc-api/blob/main/verification.md](https://github.com/w3c-ccg/vc-api/blob/main/verification.md).

**Orie Steele:** about verifying a credential that is revocable.  

**David Waite:** Like a lot of things this is a condition of use that the issuer is setting.  
… I think this should be in the main spec the same way that a verifier that accepts expired credentials... it may be a business decision but it still matters.  

**Manu Sporny:** The [current spec states](https://www.w3.org/TR/vc-data-model/#status-0) (see link). Status checking is a part of validation..  
… However, I agree that it is important that everyone does it the same way..  
… Where to put the language is a fair question.  
… We might be able to waive our hands around what "must succeed" means.  
… But I'm not sure how to do it, because if we have it in two places, we start to have validation creep into the VCDM.  
… Hard decision either way. Status checking is part of validation. We don't say anything about it in current VCDM.  
… Not sure what language would solve the problem.  

**Brent Zundel:** I think there's a clear separation between validation and verification.  

> *Orie Steele:* +1 Brent, its not possible to "verify" a revocable credential, unless this is defined properly..

**Brent Zundel:** You can't verify unless you can get the response from status list endpoint.  

> *Manu Sporny:* +1 brent, that feels workable..

> *Kerri Lemoie:* Would any spec outside of VC but used as part of VC be considered validation instead of verification?.

**Brent Zundel:** So we can say the status property must provide information..  

> *Dave Longley:* +1 to brent.

**Brent Zundel:** Whether the verifier does anything with that information, is a validation choice.  

> *Andres Uribe:* +1 to that.

**Gregory Natran:** We have to cover some of the basic security and processing..  
… but if we get different credential rules about what is usable here or there, that models the real world.  

**Orie Steele:** I'm confused by the comments about validation v verification.  
… can I get clarity about whether or not the expiry date impacts verification.  
… Whatever we say about validity date. That same sentence should be applied to this format.  
… It's the intention of the issuer to communicate something essentially the same.  

> *Andres Uribe:* both verification and validation are clearly defined in the vc-data-model spec.

**Kristina Yasuda:** it looks like we need a new issue to talk about verification and validation.  

**Brent Zundel:** I think the division is the same in both cases..  
… If there is a validFrom date, if that's there it needs to be a valid date.  
… The verifier should check that.  
… but if the verifier cares about that date is validation.  

> *Orie Steele:* So "issuanceDate" and "credentialStatus" are equally the responsibility of the verifiers "validation process" ?.

**Manu Sporny:** what Brent said. That's a philosophy we can apply to all of these..  
… namely that it has to be syntactically valid.  
… So the ID has to be a URL and we could add has to be dereferenceable and must get data back from it.  

> *Orie Steele:* I think it "has to dereference to an object of the type noted by the list"... or it does not work..

**Manu Sporny:** Then, once you get into processing, that will be highly dependent on the type of Status List it is.  

> *Orie Steele:* also the thing that is "dereferenced" needs to be verified.....

**Manu Sporny:** Do we want to say something about the status check has to pass?.  
… We do already say that in a validation section and status section.  

> *Orie Steele:* +1 Manu, we do need to describe what the verifier does with the object that is dereferenced..

> *Orie Steele:* or verifiers will handle it differently..

**Manu Sporny:** If the property is available, it is expected to be evaluated by the verifier.  

> *Dave Longley:* it has to be possible for the verifier to do the evaluation.

> *Kristina Yasuda:* q.

> *Phillip Long:* +1 to Manu's suggestion..

> *Manu Sporny:* I will try to write something that makes sense, then :P.

**Kristina Yasuda:** looks like it is ready for PR for the beginning language. We can play with it once the PR is filed.  

> *Manu Sporny:* I think I have enough to go on..

#### 1.2. Define TTL and caching behavior for lists (issue vc-status-list-2021#38)
{: #section1-2}

_See github issue [vc-status-list-2021#38](https://github.com/w3c/vc-status-list-2021/issues/38)._

<!-- issue w3c/vc-status-list-2021/38 -->



**Kristina Yasuda:** Going to the next issue, 38.  
… Should we discuss this or move on?.  

**Orie Steele:** I can provide some verbal update.  
… This also applies to the behavior of the object that is dereferenced.  
… Imagine you get that list, how long should you hold on to it before you refresh?.  

**Manu Sporny:** time to live can be expressed in many ways, in HTTP headers or the object itself.  
… I think we should put it in the object itself.  
… The statuslist is signed by the issuer, so the holder can deliver that list to the verifier.  
… as a more privacy preserving way to do it, especially for offline scenarios.  

> *Dave Longley:* +1 to Manu.

**Manu Sporny:** So there's an argument for putting in the object itself so its clear no matter the delivery mechanism.  

> *Dave Longley:* +1 to just use validUntil and validFrom.

**Manu Sporny:** We could do both, but that seems like a bad idea. The real time-to-live should be in the object, which might be echoed in the header.  

**Dave Longley:** since the status list itself is a VC itself, we should recommend we just use those.  

> *Manu Sporny:* +1 to reuse validFrom / validUntil.

> *Andres Uribe:* +1 to reusing.

**Kristina Yasuda:** looks like we need more discussion? Or is it straightforward..  

**Manu Sporny:** could be ready for PR, if all we are doing is using validFrom/validUntil.  
… So ready for PR, I imagine.  

**Kristina Yasuda:** ok, I don't see any objections to that.  

#### 1.3. Define priority for a single credential with multiple statuses (issue vc-status-list-2021#37)
{: #section1-3}

_See github issue [vc-status-list-2021#37](https://github.com/w3c/vc-status-list-2021/issues/37)._

<!-- issue w3c/vc-status-list-2021/37 -->



**Kristina Yasuda:** Next issue #37.  

**Orie Steele:** in earlier versions, it was only possible to have one status. just true/false.  
… it's now possible to have multiple statuses, e.g., a DL that is revoked, suspended, or both.  
… So what is the order that the verifier should process statuses?.  
… I'll update the issue to clarify that.  

**Manu Sporny:** The order of priority is revocation trumps suspension.  
… The spec todays just defines suspension and revocation, but the field is designed to be openworld.  
… people can put whatever status they want.  

> *Kristina Yasuda:* why is it legal to be both revoked and suspended at the same time?.

**Manu Sporny:** because of that, I don't think we'll be able to have an order of priority for everything.  
… just for the things we define..  
… If someone creates a new type, its up to them to define how it fits with the existing status terms.  
… I think its a bit of a corner case.  
… I don't expect people to create all kinds of crazy forms of status.  
… We should speak to revocation over suspension..  
… The other spec authors can explain how their new types fit it.  

> *Dave Longley:* I don't think verification software needs to know this and could just report the status of all things ... leaving it to validation (business rules) to determine what to do from there.

**Kristina Yasuda:** why would a credential be both revoked and suspended?.  
… We could say its undefined or if there are multiple states at the same time that's invalid.  

**Orie Steele:** I want to echo part of what manu said.  

> *Brent Zundel:* could we make clear that there are possible invalid states?.

**Orie Steele:** This is defined for open world application.  
… While we defined those. Others might add a bunch of additional flags/terms.  
… I think the issuer should be able to specify the intention and verifiers should be able to execute that order in a computationally efficient way.  
… Revocation and Suspension are just two of many.  
… We should not overfit to these two.  

**Kristina Yasuda:** We could say, the software returns the data and its up to the issuer to indicate the order..  
… is that good?.  

**Manu Sporny:** why would a credential have two statuses?.  
… Remember these things are issued, they are neither suspended or revoked. In the future, you might need to check both..  
… Orie raised a question. Yes this is open world, we can only specify what these two mean and their priority. He also said other things to be done and its up to the issuer to define order of importance..  
… we could do that by the ordering in the array..  
… The problem is that is currently an unordered set in the VCDM.  
… So do we add a priority field?.  
… Or is it just up to the verifier to figure it out.  
… So we report both pieces of data, and its up to the verifier to decide how to process.  
… Were you intending there to be an explicit order set by the issuer?.  

**Orie Steele:** I would like for the issuer to be aware of what they are doing.  
… If they are assigning over a set, then they need to understand order doesn't matter.  
… I'm not sure which model we need, but the issuer needs to be clear about it.  
… The point about the set is really important..  
… We have to be clear about our design decisions or they will just treat it as JSON, where order matters..  
… So we need to be clear.  

> *Ted Thibodeau Jr.:* issuer might need to publish info about their statuses (ontology? priority? other?) that verifier can check along with the statuslist.

**Kristina Yasuda:** I added the discuss label to the issue.  

**Manu Sporny:** We're almost to PR, I think.  

> *Orie Steele:* If order is unimportant, we should say so :).

**Manu Sporny:** I'm going to suggest the order is unimportant.  
… because implementers are going to likely get that wrong.  
… and its up to the verifier to set the order of importance.  
… but the spec will clearly say that revocation is more important.  
… then verifiers can add their own rules after.  

> *Ted Thibodeau Jr.:* now we're defining business rules?.

**Manu Sporny:** so revocation first, then suspension, then any additional rules.  
… We are defining the validation rules Orie says is imporant.  

**Ted Thibodeau Jr.:** I get that some people is desiring that. I don't think we should be dictating it in this way..  
… I'm ok with someone deciding revoked in their ecosystem trumps everything.  
… but there are use cases where that isn't true.  

> *Manu Sporny:* hrm, them perhaps: "status is reported back and the verifier makes the decision on order of importance, with suggestion that revocation is more important than suspension.".

**Kristina Yasuda:** I sense more confusion than clarity. I don't think we are ready for PR.  

#### 1.4. Specify bit order for status list  (issue vc-status-list-2021#36)
{: #section1-4}

_See github issue [vc-status-list-2021#36](https://github.com/w3c/vc-status-list-2021/issues/36)._

<!-- issue w3c/vc-status-list-2021/36 -->



**Kristina Yasuda:** ten minutes left. one more issue #36.  

**Manu Sporny:** yes, we should do this.  
… we already have examples of implementers interpreting this differently. Ready for PR.  

**Kristina Yasuda:** any objections?.  
… [none were heard].  

> *Brent Zundel:* I would call them processing rules. Once processed, the Verifier can still determine whether the information applies to its internal validation rules..

#### 1.5. Handling Right to Erasure in encodedList and Validate Algorithm (issue vc-status-list-2021#23)
{: #section1-5}

_See github issue [vc-status-list-2021#23](https://github.com/w3c/vc-status-list-2021/issues/23)._

<!-- issue w3c/vc-status-list-2021/23 -->



**Kristina Yasuda:** issue 23.  
… It's a tricky, legal oriented discussion. Last comment said ready for PR.  
… Is it?.  
… Shawn?.  

**Shawn Butterfield:** This is something I raised early on..  
… I have a set of privacy legal experts I can task to help make a PR.  
… Happy to take this on.  

**Manu Sporny:** I think this is ready for PR, Shawn if you can move this forward with legal experts, that would help.  

> *Shawn Butterfield:* Sounds good.

**Kristina Yasuda:** thanks shawn. added Ready for PR.  

#### 1.6. Add a "reason code" (issue vc-status-list-2021#12)
{: #section1-6}

_See github issue [vc-status-list-2021#12](https://github.com/w3c/vc-status-list-2021/issues/12)._

<!-- issue w3c/vc-status-list-2021/12 -->



**Kristina Yasuda:** issue 12.  
… Adding reason field. Which sounds useful..  

**Manu Sporny:** I agree it would be useful.  
… but I'm concerned about size.  
… The whole point is of Status List is to scale well.  
… Also, it leaks privacy.  
… And is the reason just an open text?.  
… The issuer should keep track of why, and they should be able to explain why to the appropriate parties.  
… That's between the individual and the issuer, not information that is publicized.  
… Presently, I'd be -1 to this.  
… Because the use case isn't clear.  
… and we don't have enough experience to say what all the codes would be.  

**Dave Longley:** Agree with manu. This seems like something that is very hard to do while preserving the privacy of the holder..  
… solving this in a general way that won't be abused is fraught.  

**Gregory Natran:** echoing Manu. At least in Canada, you could run into real problems with privacy law..  
… it may not be your concern that its suspended for repeat DUI verses something less serious.  

**Kristina Yasuda:** let's document that there's no consensus on adopting this feature and we can revisit later.  
… with two minutes left.  

#### 1.7.  (issue vc-status-list-2021#8)
{: #section1-7}

_See github issue [vc-status-list-2021#8](https://github.com/w3c/vc-status-list-2021/issues/8)._

<!-- issue w3c/vc-status-list-2021/8 -->



**Kristina Yasuda:** Issue 8.  
… Looks like debates about issue..  

> *Dave Longley:* this is a duplicate.

**Manu Sporny:** This looks like a dupe.  

**Kristina Yasuda:** Ok, we'll close it as a dup.  
… Thanks everyone. That was a productive discussion.  
… Looking forward to reviewing PRs in main call.  
… See you all tomorrow at the same time.  

---
