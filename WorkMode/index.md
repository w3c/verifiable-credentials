---
layout: default
---

# VC Working Group Work mode
{: .no_toc}

This document defines and describes the VC WG's *Real Work Modes*, 
including Participation and Communication, Meetings, Calls for Consensus, 
Mail List usage, and links to important resources.

Note that the [WG's Charter](https://www.w3.org{{ site.charter }}) formally
defines the general framework of the group's working mode. In all cases,
the Charter and/or the [W3C Process Document](//www.w3.org/Consortium/Process/) 
overrides the information in this document. Nevertheless, this document
contains additional information about how the group *really* works, so this
information may be particularly useful to new members of the group.

This document is a *Living Document* and as such will change. Members of
the group are encouraged to edit (e.g., to update, correct, etc.) the
information. Comments about this document are welcome via issues and pull
requests on the [group’s “admin” repository](https://github.com/w3c/verifiable-credentials/)
or via emails sent to the group’s [`public-vc-wg@w3.org`](mailto:public-vc-wg@w3.orgg)
e-mail list, using a subject prefix of <code>[WorkMode]…</code>.

**Table of Contents**
* TOC
{:toc}

---

## Participation and Communication

The group's formal Participation and Communication models are documented in
the [Participation](https://www.w3.org/2022/06/verifiable-credentials-wg-charter.html#participation)
and [Communications](https://www.w3.org/2022/06/verifiable-credentials-wg-charter.html#communication)
sections of its Charter, respectively.

A WG member may participate in various ways including:

* Attending any of the group‘s [weekly teleconferences or F2F meetings](../Meetings/)
* Participating in discussions on the group’s primary mail lists (see below),
    and/or a specification’s GitHub repository by way of Issues and Pull
    Requests. (See the 
    [list of all repositories](https://github.com/topics/vc-wg)
    of this Group.) 
* Participating in discussions on the group’s `#vc` IRC channel
* Serving as a scribe during a WG meeting.
* Being an Editor of one or more of the group’s active specifications
* Being an implementer for one of the specifications (proof-of-concept
    implementations are fine!)
* Contributing tests for the group’s [specifications](https://www.w3.org/groups/wg/vc/publications)

A WG member is added to the group’s lists `public-vc-wg@w3.org` and
`member-vc-wg@w3.org`; see the [separate section](#communications) for
more details. Other mailing lists may be set up for task forces or other
sub-committees; signing up to those list must be done manually.

Participation from the Public (i.e., non group members) via our Public
e-mail lists is also welcome, provided comments, contributions, etc., are
consistent with the [W3C Patent Policy](https://www.w3.org/TR/patent-policy/).

### Information for New Group Members

*New members of the group are strongly encouraged to read the group’s
[Getting Started](getting-started) document which includes links to 
important resources.* New members are also encouraged to send a short
introductory e-mail to the group's 
[public mailing list](https://lists.w3.org/Archives/Public/public-vc-wg/).

## Communications

### Meetings

#### Teleconferences
{: #telco}

Teleconferences are held weekly at times agreed upon by the group. The
meeting and its agenda are announced **at least 24 hours** before the
meeting begins. Minutes are taken for every meeting and are automatically
published after the meeting in a provisional format. A more readable,
cleaned-up format is published usually within 24 hours after the meeting
ends. 

The charter also states that:

> …any resolution (including publication decisions) taken in a face-to-face meeting or teleconference will be considered provisional.
>
> A call for consensus (CfC) will be issued for all resolutions (for example, via email and/or web-based survey), with a response period from 5 to 10 working days, depending on the chair's evaluation of the group consensus on the issue.
>
> If no objections are raised on the mailing list by the end of the response period, the resolution will be considered to have obtained consensus as a resolution of the Working Group.

By default, publication of the meeting minutes is considered as a call for
consensus for any formal resolution therein. However, depending on the
assessment and the importance of a specific resolution at hand, the chairs
may issue an more explicit CfC by email when the issue requires more
details and explanations.

#### Face-to-face meetings
For Face-to-face meetings, there **should** be **8 weeks** notice of the
city and date/time. Exact venue information is not required so early, but
it is helpful, especially in large cities, so people traveling can find
appropriate accommodations. The chairs and staff can help organize
invitations for people who need them to obtain a visa, given sufficient
notice.

The consortium usually has an annual 
[“Technical Plenary and All Working Group”](https://www.w3.org/2002/09/TPOverview.html)
face-to-face meeting week (a.k.a “TPAC”) and this group typically has a f2f
meeting during that week. The dates/locations are generally known a year or
more in advance.

For the minutes, resolutions, and consensus achieved at the f2f meetings,
the same [rules](#telco) as for teleconferences apply.

#### Scribing
We encourage all WG members to take turns serving as scribe for meetings,
and expect all WG members who are able to scribe to do so.

### Public participation
It is possible for people who are not members of the VC WG to follow the
Working Group's work by signing up to the group's public mailing list,
reading the mailing list archives, or watching the github issues. They can also
raise issues on github, which the Working Group is required to answer
within a reasonable time. The chairs of the Working Group may also
occasionally invite them for a teleconference to, e.g., discuss those issues.
In the case of a specific contribution to the specification in the form of,
e.g., a Pull Request, see the
[separate text](https://github.com/w3c/verifiable-credentials/blob/master/CONTRIBUTING.md)
for the modalities.

It is also possible for people who are not members of the VC WG to attend
face-to-face meetings as observers. Non-members have not made any commitment
to provide standard W3C royalty-free licensing, so non-members are restricted
to observer status only. Observers may listen, and participate in general
discussions during the meeting. However, they must not make technical
contributions, nor attempt to influence an approach, to a feature that may
become part of the specification being discussed.

If the public contributor, or the observer, works for a W3C member company,
they are encouraged to ask their Advisory Committee (AC) representative to
make them a VC WG participant.

Please note that this is to provide as much protection as possible through
the W3C Patent Policy. We take the royalty-free status of W3C standards
very seriously, and any attempt to work around these basic requirements
would be considered a serious breach of meeting participation.

### GitHub
{: #github}

The WG cannot make progress only during its weekly teleconferences. The
group makes extensive use of GitHub. Each major deliverable is managed
in its own, separate repository (a 
[complete list of repositories](https://www.w3.org/PM/Groups/repositories.html?gid=98922)
is available). The group intends to use the repositories’ issue management
extensively to discuss technical problems and propose solutions. It is
expected that most of this discussion will occur outside of our regular
meeting times. 

Editors of the documents (as well as the chairs and the W3C staff) have the
necessary access rights to make editorial changes on the specifications
directly using the standard Git(Hub) commits and by merging pull requests.
Other members of the group are encouraged to use the
[“fork and pull model”](https://help.github.com/articles/about-collaborative-development-models/)
when contributing to the text: work on a forked repository and issue a pull
request on the main repository for that document when the contribution is
ready. Editors should use the pull request mechanism (except for obvious,
grammatical, or stylistic changes), albeit they can choose to do that
directly on the core repository (i.e., without creating a distinct fork).

(If you are new to GitHub, the
[*“Introduction to Basic GitHub Contribution”*](https://iherman.github.io/misc-notes/docs/BasicGitHubContributionIntro)
may be of help.)

In line with the spirit of the asynchronous decision procedures outlined
above, significant pull requests, as well as the closure of open issues,
should be marked with a special label (to be defined) and left open for a
week. If no objection is raised during that time, the issue can be closed or
the pull request can be merged, respectively.

The recommended way to interact with a VC WG github repository is to
follow the [standard github flow](https://guides.github.com/introduction/flow/).
We strongly encourage members to use
[their own fork of the WG repo](https://guides.github.com/activities/forking/).

#### Issue labels
GitHub issues are also used as a record of wide reviews, of horizontal
reviews, etc. The Working Group will define a number of labels (e.g.,
labeling an issue as part of the Horizontal Security review). Chairs,
staff, and editors are responsible to set those labels accordingly.
Similarly, when issues are waiting for external reviewers to react, labels
will be used to signal the status of the issue. (See the
[current set of labels](https://github.com/w3c/vc-data-model/labels).)

### Mailing lists (Policy, Usage, Etiquette, etc.)

Although it is expected that a large portion of the technical discussion
will happen via the issues mechanism of GitHub, the primary mailing list
may also be used for overarching technical as well as business, outreach,
administrative, etc., topics. We expect our mail list participants to
adhere to the following email etiquette:

* Messages should be encoded using [plain text](http://en.wikipedia.org/wiki/Plain_text). 
    Formats using [*rich text*](https://en.wikipedia.org/wiki/Rich_Text_Format)
    will be lost by the list archives and appear poorly to many readers
    before they get that far.
* Subjects should be prefaced with the *short name* of the spec, if
    applicable (for example: `[Spec] Blah, Blah, Blah`)
* When you reply to a message, please use “> ” as your quotation character.
* Do not prefix your content with something like “[myname]”. Your content
    will be visible to everyone because it will *not* be prefixed by the
    quotation character (“> ”).
* Do strip quoted text which is not relevant to your reply.
* Do not write in ALL CAPS. It is considered bad form. If you need to
    \_underscore\_ something, you can do so as such, if you wanted to
    \*strengthen\* something you can similarly, and if you want to provide
    a certain \/italics\/ style, you may do that as well.
* Your messages are archived. If you need to include links within your
    message, please use `[n]` notation inline (e.g., [1]), and include the
    relevant links at the end of the message. (Just like in a scholarly paper…)
* Attachments must follow the 
    [W3C Guidelines for Email Attachment Formats](https://www.w3.org/2002/03/email_attachment_formats.html),
    in particular:
	* Avoid unnecessary email attachments.
	* Use an attachment only when it is likely to benefit to recipients.
	    Otherwise, place the information (in plain text format) in the body
	    of your message.
	* If an attachment is necessary, avoid formats that are virus prone,
	    proprietary or platform dependent.  For example, whenever possible
	    you should use HTML instead of MS Word, PowerPoint or PDF.
	* Follow [Web Content Accessibility Guidelines](//www.w3.org/TR/WAI-WEBCONTENT/) (WCAG)

### IRC
{: #irc}

The group uses the `#vc` channel of the W3C’s IRC system (irc.w3.org; port 6667).
Task forces may freely set up their own, specific channels.

An [HTML interface to the W3C's IRC system](http://irc.w3.org/) is
available. See [Meeting Resources](../Meetings/) for more information about
the W3C’s IRC system and its usage.

### Wiki(s)

Each repository, including the “core” WG repository, has a wiki instance.
Members of the Working Groups are encouraged to use those for temporary
discussions, documents, etc. Pages on the repository Wikis have no formal
status.

## Process

The [Charter](https://www.w3.org{{ site.charter }}) and the
[W3C Process Document](https://www.w3.org/Consortium/Process/) are the
final arbiters of any process question; however, the Working Group has
adopted some complimentary, additional processes to aid in its productivity.

* Adoption of [guiding technical principles](guiding_principles) towards
    quickly coming to consensus
* In order to balance the need for group consensus and the need to move the
    work forward at a reasonable pace, we will not require most of the
    group's decisions to be made via formal resolutions. 
    * This will free the Editors to merge PRs and close Issues as soon as
        they feel the group has reached consensus.
    * Editors will attempt to reach out to interested parties, but it is up
        to WG members to actively monitor progress.
    * Any decision to merge may be challenged during a 48-hour window
        following the decision.
* It is encouraged that any Pull Request which changes the normative text
    of the [DID Specification](https://github.com/w3c/vc-data-model/) be
    accompanied by an equivalent Pull Request which changes the appropriate
    tests in the [Test Suite](https://github.com/w3c/vc-test-suite/).
    


## Patent Policy

The WG's Charter defines the
[Patent Policy for this group](https://www.w3.org{{ site.charter }}#patentpolicy):

> This Working Group operates under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20200915/) (15 September 2020 Version). To promote the widest adoption of Web standards, W3C seeks to issue Recommendations that can be implemented, according to this policy, on a Royalty-Free basis. For more information about disclosure obligations for this group, please see the [W3C Patent Policy Implementation](//www.w3.org/2004/01/pp-impl/).

A consequence of the group’s Patent Policy is that, although comments from
non-WG participants are welcome in general, specific contributions for the
group's specifications from non-WG participants are not permitted. See the
W3C Patent Policy FAQ titled
[*How should Working Groups handle contributions from non-participants (e.g., meeting guests or on public lists)?*](https://www.w3.org/2003/12/22-pp-faq.html#non-participants)
for more information about contributions from non-WG participants. Non-WG
participants may contribute to the group's specifications if they have
agreed to the terms in
[*Licensing commitments from non-W3C Members*](https://www.w3.org/2004/01/pp-impl/100074/nmlc).

## Code of Conduct

The WG follows the W3C
[Code of Ethics and Professional Conduct](https://www.w3.org/Consortium/cepc/).
