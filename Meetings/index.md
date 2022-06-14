---
layout: default
---

# Information on Meetings
{: .no_toc}

* TOC
{:toc}

## Teleconferences

The weekly teleconferences on Tuesdays at various times to allow for all geographical areas to participate on calls at least 1-2 times.
<!-- See the (member only) [notification](https://lists.w3.org/Archives/Member/member-did-wg/2020Apr/0007.html) for the details.  --> 
The meeting schedules are:

* On odd weeks: Tuesdays, 11:00-12:00 US Eastern Time (“Europe-Africa Friendly" calls)
* On even weeks: Tuesdays, 18:00-19:00 US Eastern Time (“Asia-Pacific Friendly” calls)

See the groups [calendar page](https://www.w3.org/groups/wg/vc/calendar) for the entries in the WG calendar (group members can “subscribe” to the calendar items through their [personal calendar](https://www.w3.org/users/myprofile/calendar), see the “export” tab).
See also the [separate page](./zoom) for further information on the Zoom bridge.

The Group also uses IRC for during the calls for minute taking, queue control, and general chit-chat. See the [separate page at W3C](https://www.w3.org/Project/IRC/) for further details. This Working Group uses the `#vc` channel, and makes use of two bots on IRC:

* `zakim` for queue control (see the separate [manual pages](https://www.w3.org/2001/12/zakim-irc-bot.html) for  further details.)
* `rrsagent` for scribing and minute generation (see the separate [manual pages](https://www.w3.org/2002/03/RRSAgent) on how to control the access rights and storage of the IRC logs, and the separate [`scribejs` features](https://github.com/w3c/scribejs/blob/master/features.md) for the scribe instructions).


## F2F meetings

* [April 6, 2018, Mountain view](F2F/201804f2f.md)
* [March 4-5, 2019 (Barcelona)](F2F/Barcelona.md)
* September 15-16, 2022 (Vancouver) (T.B.D.)

## Meeting Minutes

Meeting minutes (both for F2F and telcos) are listed [separately](./Minutes/).

### Minute taking

Minutes are taken using IRC, and is based by a collective effort: one of the participants should be the scribe for (part of) a session. The `rrsagent` bot is used to archive the IRC log at the end of the call, and a separate tool (called [`scribejs`](https://github.com/w3c/scribejs/)) is used to generate the cleaned-up minutes that are published on the Working Group’s Web site.

Minute taking and cleanup is greatly helped by:

* the scribe should used a number conventions, documented [`scribejs` features](https://github.com/w3c/scribejs/blob/master/features.md) separately.
* to help minute taking and cleaning them later, please use a consistent IRC handle; scribes should use that handle to identify the person speaking. `scribejs` automatically replaces the handle with the person’s full name, making the minutes more readable to outsiders.
    * note that in most IRC clients the `TAB` key can be used to expand to an existing irc handle

* *Each participant should type `present+ <name>` (or simply `present+` for himself/herself) in the irc channel immediately upon joining the call.* (This will help the minute taker and improve the generated minutes.)

### Updating the minutes

The minutes themselves are stored, in Markdown (more exactly in “Kramdown”) on the WG’s core [github repository](https://github.com/w3c/did-wg) in the `_minutes` folder.

As described in the [separate page on our working mode](../WorkMode/index#telco), meeting minutes are considered as “Draft” until officially approved after five business days, usually at the subsequent meeting. During that period, if a participant requests a change in the minutes, he/she can issue, for example, a Pull Request with the proposed changes.
