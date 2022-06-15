---
layout: default
---

# VC Working Group Guiding Principles
{: .no_toc}

This document sets down the current guiding principles in use by the VC
Working Group to assist in making decisions about specification features.
These guidelines provide a framework in which to have productive
discussions that quickly come to consensus, rather than ending up blocked
in an unresolvable tug-of-war over opposing and equally valid points of
view. The principles are not meant to be interpreted as strict or objective
rules, but instead as informative of the overall direction of the group to
promote consistency and usability of the resulting specifications. 

This document is a *Living Document* and as such will change. Members of
the group are encouraged to edit (e.g., to update, correct, etc.) the
information. Comments about this document are welcome via issues and pull
request on the [group’s “admin” repository](https://github.com/w3c/verifiable-credentials/)
or via emails sent to the group’s
[`public-vc-wg@w3.org`](mailto:public-vc-wg@w3.org) e-mail list, using a
subject prefix of <code>[Principles] …</code>.

**Table of Content**
* TOC
{:toc}

---

## Stay on target!

We follow our overall mission to standardize
* the Verifiable Credentials Data Model (VCDM) 2.0, 
* Securing Verifiable Credentials (SVC) 1.0, 

**Notes**

* 

## Require real use cases, with actual instance data.

Features are supported by real world use cases, with actual data that can
be referenced. This helps reduce entirely theoretical features that might
be implemented in libraries, but never used in practice by producers or
consumers.

**Notes**

* Use cases should be supporting material which provides rationale for
    decisions, and a teaching tool for when features might be useful. They
    are not a design requirements gathering tool, and the group is not
    starting from an empty slate.
* These use cases are collected in a [Use Cases document](https://www.w3.org/TR/vc-use-cases/),
    which has been published as a Note in the earlier phase of the Working Group.

## Require at least two supporters for each use case.

As the mission is interoperability, having at least two supporters for each
use case is important. If only one supporter can be found, then any
features that it would require are likely too specific for inclusion in the
proposed form.

**Notes**

* Any independent organization, group, or individual can be a supporter,
    regardless of whether they are part of the Working Group, or a member of
    the W3C. Consortia or other standards organizations that represent many
    participants can thus fulfill this principle via their members.
* This is orthogonal to implementations of the specifications, which are
    required to exit Candidate Recommendation phase.

## As simple as possible, but no simpler.

A solution that is simpler (to understand, implement, and use) is better than a more
complex solution that accomplishes the same result.

## Consistency is simpler than exceptions.

Simplicity is considered in aggregate for the set of features defined by a
specification, not independently.  If the same set of features can be
accomplished by a smaller number of more consistent patterns, then that
method is (very likely) simpler. Memorizing exceptions is harder than
memorizing and applying rules.

## Usability is determined by end users, not library implementers.

Usability is determined by the target audience (data producers and
consumers) based on their experience of understanding and applying the
specification via existing implementations, not by the experience of
implementers of the specification text directly. If there is a feature
that makes it harder for implementations, but easier/better for end users,
then that is a worthwhile trade off. We follow the HTML Design Pattern
documents notion of the 
[Priority of Constituencies](https://www.w3.org/TR/html-design-principles/#priority-of-constituencies),
with an emphasis on trying to make things better for everyone. 

**Notes**

* Issues might arise where we need to prioritize between producers and consumers of VCs. The general feeling is that, in that situation, we should prioritize consumer happiness over producer happiness, i.e., the usability of the data, rather than ease of creation.
  

## Provide on-ramps.

A solution that can be implemented in incremental stages is better than a
solution that is all or nothing, as not everyone needs every feature but
many people need various parts. Complex patterns should build upon simple
ones, sometimes making the patterns more complicated than if they were
built in isolation.

## Define success, not failure.

The specifications are defined in terms of what it means to be conformant,
and not patterns that are not conformant. The fewer constraints we require,
the easier to have non-breaking changes in the future and the easier it is
to have experimentation. In a similar way to the distinction between Open
World and Closed World, if something is not defined by the specification
then it is permissible (just not standardized) rather than being disallowed.

**Notes**

* It is hard to judge when it is appropriate to be prescriptive, and when it is appropriate to be silent.

## Follow existing standards and best practices, where possible and where they do not conflict with other principles.

Between invention and reuse, pick reuse... unless that reuse would
demonstrably harm adoption by being more complicated than necessary.
