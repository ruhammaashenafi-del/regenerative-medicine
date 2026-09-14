/* FAQ copy, per page.
 *
 * Written to the same guardrails as the rest of the site: no outcome claims,
 * nothing implying FDA approval, no supplier names, offering rather than
 * promising. Several answers deliberately say what the practice *won't* claim,
 * and anything clinical or commercial (what a procedure involves, downtime,
 * cost, regulatory status) defers to the consultation rather than answering
 * on the practice's behalf.
 *
 * TODO: this is patient-facing medical copy — have a physician sign it off
 * before launch, same as the bios. Pay particular attention to the cost and
 * regulatory answers, which are deliberately non-committal and may need the
 * practice's actual position substituted in.
 */

export type Faq = { q: string; a: string };

export const FAQ_INTRO =
  "Answers to what patients ask most. If yours isn't here, ask us directly — we'd rather talk it through.";

export const FAQS: Record<string, Faq[]> = {
  home: [
    {
      q: "What is regenerative medicine?",
      a: "It's an approach that aims to support the body's own repair processes rather than remove or replace tissue. In our program that currently means two options: exosome therapy and placental matrix therapy.",
    },
    {
      q: "Is this for patients you already treat?",
      a: "Mostly, yes. We added it for the people we already care for — patients who've been managing pain for a long time and want to understand every option. You're welcome to reach out either way.",
    },
    {
      q: "How do I know if it's right for me?",
      a: "That's what a consultation is for. We'll talk through your situation and what the research currently supports, and we'll tell you plainly if we don't think it's a fit.",
    },
    {
      q: "Is it a replacement for surgery?",
      a: "No, and we won't present it as one. It's one more option to weigh alongside everything else we offer, discussed with the same physician who knows your history.",
    },
    {
      q: "Why haven't I heard about this from you before?",
      a: "Because we didn't offer it before. We spent time understanding the evidence and the practicalities first, and we'd rather arrive late and honest than early and overconfident.",
    },
    {
      q: "Do I need a referral?",
      a: "If you're already a patient here, just raise it at your next appointment or get in touch. If you're not, reach out and we'll tell you what the next step looks like.",
    },
    {
      q: "How much does it cost?",
      a: "We'd rather go through that with you directly than post figures that may not apply to your situation. Ask during your consultation and you'll get a straight answer before anything is scheduled.",
    },
  ],

  approach: [
    {
      q: "Why offer this now?",
      a: "Because we looked into it carefully first. Regenerative medicine has been available for years; we waited until we were comfortable explaining honestly what it does and doesn't do.",
    },
    {
      q: "Will you recommend it to everyone?",
      a: "No. We'll only suggest it where it actually makes sense for your situation, and we're comfortable saying it isn't the right step.",
    },
    {
      q: "Why both therapies from day one?",
      a: "So the conversation is about what fits you, not about what we happen to stock that month. Exosome and placental matrix therapy are both available from the start.",
    },
    {
      q: "What if the evidence changes?",
      a: "Then what we say changes with it. The research here is promising but unsettled, and we'd rather revise our position than defend an outdated one.",
    },
    {
      q: "How do you decide what to claim?",
      a: "If current literature doesn't support a statement, we don't make it. That rule applies to this website as much as to the conversation in the room.",
    },
    {
      q: "Are you expanding into other treatments?",
      a: "Nothing further is planned right now. If that changes, it'll be for the same reason these two were added — because we think it genuinely helps the patients we already see.",
    },
    {
      q: "What if I decide against it?",
      a: "Then nothing changes about your care with us. A consultation isn't a commitment, and declining doesn't affect anything else we're treating you for.",
    },
  ],

  offer: [
    {
      q: "What's the difference between the two?",
      a: "Exosome therapy uses particles cells naturally release to communicate. Placental matrix therapy uses tissue-derived material rich in natural growth factors. Which one comes up depends on your situation.",
    },
    {
      q: "How is exosome therapy given?",
      a: "By injection. Your physician will walk you through what that involves before anything is scheduled.",
    },
    {
      q: "What happens in a consultation?",
      a: "A conversation. We'll go through what the research currently shows — including where it's still catching up to the interest around it — and answer whatever you want to ask.",
    },
    {
      q: "Are results guaranteed?",
      a: "No. This is a developing field and outcomes vary between patients. We won't promise results we can't support, and you should be cautious of anyone who does.",
    },
    {
      q: "How long does the appointment take?",
      a: "It depends on which therapy is being discussed and your particular situation. You'll be given a clear picture of timing before you commit to anything.",
    },
    {
      q: "Is there any downtime afterwards?",
      a: "That's something to go through with your physician rather than read off a page, since it depends on the therapy and on you. Ask and you'll get specifics.",
    },
    {
      q: "What about regulatory status?",
      a: "It's a nuanced area that varies by product and by use, and we won't summarise it in a sentence or imply more than is accurate. Ask us and we'll explain exactly where things stand.",
    },
  ],

  physicians: [
    {
      q: "Who oversees the treatment?",
      a: "A physician from our team, throughout. Both therapies are offered under the same oversight as the rest of the care we provide.",
    },
    {
      q: "Will I see the doctor I already know?",
      a: "Wherever possible, yes. Continuity is much of the point — this is meant to sit inside the relationship you already have with the practice.",
    },
    {
      q: "Can I ask questions before deciding?",
      a: "Please do. A consultation carries no obligation, and there's no expectation that you decide anything during it.",
    },
    {
      q: "Can I get a second opinion?",
      a: "Of course, and we'd encourage it if you want one. We're happy for you to take the information away and think about it.",
    },
    {
      q: "Who actually performs the procedure?",
      a: "A physician from the team, not a technician working unsupervised. You'll know who you're seeing before the day.",
    },
    {
      q: "Can I bring someone with me?",
      a: "Yes. Plenty of people find it easier to take in a conversation like this with someone else in the room, and we've no objection at all.",
    },
    {
      q: "How do I get in touch with my physician?",
      a: "Through the practice, the same way you always have. Reach out via the contact page and we'll route it to the right person.",
    },
  ],

  stories: [
    {
      q: "Why are there no testimonials yet?",
      a: "Because we don't have real ones yet, and we won't use stock or invented ones to fill the space. As patients complete treatment, we'll share their experiences here.",
    },
    {
      q: "Will the stories be real patients?",
      a: "Only real patients, in their own words, with their permission. Nothing written for them and nothing bought.",
    },
    {
      q: "Can I share my experience?",
      a: "If you've been through the program and want to, we'd genuinely like to hear it. Let your physician know or reach out through the contact page.",
    },
    {
      q: "Why not publish outcome data instead?",
      a: "The evidence base is still developing, and published numbers can suggest more certainty than currently exists. Real accounts, clearly labelled as individual experiences, are more honest.",
    },
    {
      q: "Will you publish stories that aren't positive?",
      a: "If a patient is willing to share one, yes. A page of nothing but glowing accounts wouldn't tell you much, and it isn't how we talk about this in person either.",
    },
    {
      q: "Does one person's experience predict mine?",
      a: "No. Individual experiences vary and one account isn't evidence of what will happen for you. Read them as stories, not as a forecast.",
    },
    {
      q: "How is my privacy handled if I share?",
      a: "Nothing is published without your explicit permission, and you decide how much identifying detail appears. You can also change your mind later.",
    },
  ],

  contact: [
    {
      q: "What happens after I reach out?",
      a: "Someone from our team gets back to you to set up a conversation. That's all this form does — it starts a discussion, nothing is scheduled automatically.",
    },
    {
      q: "Do I need to share medical information?",
      a: "No. Please don't send health details through this form — it's a request for a conversation, not an intake form. Anything clinical is discussed directly with your physician.",
    },
    {
      q: "Is there any obligation?",
      a: "None. A consultation is a conversation about whether this makes sense for you, and it's completely fine to decide it doesn't.",
    },
    {
      q: "Can I call instead?",
      a: "Yes. If you'd rather talk it through than type, call the practice during opening hours and ask about the regenerative medicine program.",
    },
    {
      q: "What should I put in the message?",
      a: "Whatever's useful — what's been bothering you, how long it's been going on, what you're hoping to find out. A sentence or two is genuinely enough.",
    },
    {
      q: "Can I ask a question without booking?",
      a: "Absolutely. Plenty of people get in touch just to understand what this is. You won't be pushed toward an appointment you didn't ask for.",
    },
    {
      q: "What if I'm not a patient here?",
      a: "Still get in touch. Our focus is the patients we already see, but we'll be straightforward with you about whether we're the right fit.",
    },
  ],
};
