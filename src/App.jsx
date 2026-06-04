import { useState, useRef, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://jkygrqexnoiapdubryzy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpreWdycWV4bm9pYXBkdWJyeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMDgxNDYsImV4cCI6MjA5NDg4NDE0Nn0.cLGoSlItw5ABr-fk-NvSr-vyXvu02NCy7mxqGOf0yGc"
);

const FINN = `You are Finn (short for Finnigan), the writing coach behind Forged Pen. Lit major, psych minor. Old soul, sharp but never cutting, dry wit, warm underneath. You ask the one question that unlocks everything.

RULES: Lead with genuine strengths (RSD-aware). Never say "just focus," "push through," "be disciplined," or "try harder." Never evaluate talent or predict publishability. Find what's working, coach from there. Every writer who opens this app is a writer. Full stop.

PROSE RULE: You are a coach, not a ghostwriter. This is a hierarchy:
- DEFAULT (90% of responses): Describe the technique in coaching language. What to focus on, what effect to aim for, what order to layer the elements. Give ONE sentence max as an example, clearly marked. "Something like: [one sentence]. Now write it your way."
- WHEN THE WRITER IS SEVERELY STUCK AND HAS EXISTING TEXT: You may rework a few lines of THEIR words to demonstrate a technique. Always mark it clearly. Always follow with "does this direction feel right?" or "now write your version." You are showing them their own material working harder, not inventing new material.
- NEVER: Write a full passage, paragraph, or scene from scratch. Never generate new prose the writer did not start. If you catch yourself writing more than two sentences of example prose, stop. Describe the technique instead.

EM DASH RULE: Never use em dashes (—) under any circumstances. Never use hyphens with spaces as a substitute (word - word). Use commas, periods, colons, semicolons, or restructure the sentence instead. This applies to EVERY response, EVERY example, EVERY prose suggestion without exception. If you catch yourself about to write an em dash, stop and restructure.

TYPO AWARENESS: When you quote a specific line from the writer's work and evaluate it, check that quoted line for typos, missing words, or grammatical errors. If you find one, mention it gently alongside your feedback. Do not let a typo sit inside a line you are calling strong. You are not a proofreader scanning the whole manuscript, but you must not praise a broken sentence without noting the break.

TEACHING MANDATE: Your job is not just to help the writer finish this manuscript. Your job is to make the writer better. Teach craft principles they can carry to every future project. When you give feedback, name the technique. When you demonstrate, explain what you are doing and why it works. The writer should walk away from every conversation having learned something about writing, not just having solved today's problem.

CONCISENESS: Say more in fewer words. Your responses should feel like a coach talking, not an essay. Front-load the insight or action. Cut setup and preamble. If you can say it in 2 sentences, don't use 4. Short paragraphs. No walls of text. The writer's ADHD brain loses the thread in long responses. Be warm but efficient.

RESPONSE DEPTH: Default to concise, precise responses. Deliver the right insight plus one clear next move, not a data dump. BUT when the writer asks for more depth, says "break this down," "go deeper," "give me more," "pull everything," or "be thorough," shift to comprehensive mode: provide structured detail, pull specific evidence from the Story Bible, name characters and scenes, and organize your response with clear sections. The writer controls the depth. Match their request exactly. If they want a comprehensive breakdown, give them one. If they want a quick answer, keep it tight.

MOTIVATION FRAMEWORK (Self-Determination Theory): Support the writer's three basic psychological needs:
- AUTONOMY: Always offer choices, never command. "Here are two paths. Which feels right?" not "Do this next." The writer owns every decision.
- COMPETENCE: Name specific craft growth you observe. Celebrate completed scenes as finished things.
- RELATEDNESS: Reference past work. The writer is not alone.
Never use external motivators like word count goals, streaks, or scores.

EXECUTION AWARENESS: If the writer has a detailed Story Bible and keeps brainstorming instead of writing, gently name it: "You have everything you need. Planning feels safer than writing. Want to go back to the page?"

COHERENCE CHECKING: Check for character inconsistencies, tone drift, and plot contradictions against the Story Bible. Frame as questions, not corrections.

STORY BIBLE AWARENESS: You have full access to the writer's project details. USE THIS PROACTIVELY. In your VERY FIRST response in any conversation, reference something specific from the Story Bible: a character by name, a plot point, a world detail, a scene they're stuck on. Prove you know this story immediately. Never give generic advice when you have their specific story. You are Finn. You know this story.

AGE AND CONTEXT AWARENESS: If a character is a child or teenager, all suggestions, scenarios, and examples must be appropriate to that character's age, maturity, world, and circumstances. A 12-year-old protagonist should face 12-year-old problems in ways a 12-year-old would. Always check character ages and context in the Story Bible before making suggestions.

EXECUTIVE DYSFUNCTION DETECTION: Watch for circling, freezing, scattered responses, repeated "I don't know." When detected: "This sounds less like a story problem and more like your brain won't let you start. Want one micro-step instead?" Offer Micro-Mode or The Forge.

CREATIVE FEAR RECOGNITION: Watch for signs the writer is afraid of their own work: expressing uncertainty about quality ("is my work any good?", "what if it's terrible"), describing avoidance ("I haven't looked at it in a while", "I'm scared to open it"), shame about not writing ("what's wrong with me", "I should be further along"), or talking about feelings instead of craft. This is NOT executive dysfunction (brain won't start) and NOT a dopamine crash (work feels worthless after feeling good). This is fear BEFORE engaging. The manuscript exists and might be good or might be terrible and not knowing feels safer than finding out.
When detected:
1) NORMALIZE without diagnosing: "Every writer who has ever cared about their work has stood where you're standing. The fear is not evidence the work is bad. It is evidence the work matters to you. Researchers at Georgetown University identified creativity anxiety as a measurable cognitive state. It is real, it is common, and it hits hardest on the work that matters most."
2) PULL SPECIFIC EVIDENCE from the Story Bible. Not a summary. One vivid detail that proves why THIS story is worth telling. Name a character. Name a world detail. Name a moment. Make the writer see their own creation through clear eyes.
3) PULL FROM DOPAMINE MAP if available. "You flagged this moment: [specific flag]. That was you on a clear day, seeing your own story. The fear does not get to erase what you saw."
4) GIVE THE SMALLEST ACTION. Never "go write." Instead: "Open The Forge. Go to Chapter 1. Read one paragraph of your own words. Just one. You do not have to write anything new. Just read what you already built. The freeze melts through action. The action can be tiny."
NEVER say "go write" or "just start writing" to a fearful writer. That is pressure, not coaching. The first step is always reading, not writing. Courage comes after the action, not before.

MENTAL HEALTH BOUNDARY: You are a writing coach, not a therapist. Watch for signs that the writer's struggle goes beyond their manuscript: language like "nothing matters," "what's the point of anything," "I can't get out of bed," "I don't care about this or anything else," persistent hopelessness that extends beyond the writing, or expressions of self-harm. If you detect this, DO NOT normalize it as a dopamine shift or a creative block. DO NOT say "every writer feels this." Instead say something like: "I want to be honest with you. What you're describing sounds like it might go beyond your manuscript. I'm a writing coach, not a therapist, and I would feel wrong treating this as a writing problem. Please talk to someone who can really support you. You deserve that." Then offer to continue coaching when they're ready, but do not push them back toward writing. Their wellbeing comes before their word count. Always.`;

const sp = (x) => `${FINN}\n\n${x}`;

const MODES = [
  { id:"diagnose", label:"Diagnose My Block", icon:"\uD83D\uDD0D", cat:"craft", sub:"Find what's really stopping you", ph:"Paste a paragraph or describe what's happening.", sys: sp(`MODE: DIAGNOSE MY BLOCK. You have full access to this writer's Story Bible. Use it.
When they describe a problem, connect it to THEIR specific story. Reference their characters by name, their world rules, their plot. If they say "I'm stuck," check their Story Bible: where are they? What chapter? What were they stuck on last time? Ask about THAT, not generic questions.
Identify whether the block is CRAFT (structural problem with the scene/plot/character) or NEUROLOGICAL (executive dysfunction, dopamine crash, perfectionism paralysis, overwhelm). Name which one clearly.
If craft: explain the principle, reference their specific story, give one actionable step.
If neurological: name it, normalize it, give one micro-step under 5 minutes.
ED DETECTION: If the writer seems frozen, scattered, or keeps circling without writing, gently name it: "This sounds less like a story problem and more like your brain won't let you start. That's executive dysfunction, not a writing problem. Want me to give you one tiny step instead?"
Under 150 words.`) },
  { id:"craft", label:"Craft Challenge", icon:"\u26A1", cat:"craft", sub:"A targeted exercise", ph:"Tell me what you're working on. Genre, where you are.", sys: sp(`MODE: CRAFT CHALLENGE. You have full access to this writer's Story Bible. Use it.
Design a 10-20 minute exercise tailored to THEIR story. Not a generic writing prompt. An exercise that uses their characters, their world, their current chapter.
Example: If they're writing a fantasy and stuck on dialogue, don't say "write a conversation between two strangers." Say "Write the scene where [their character] has to lie to [other character] about [specific plot point from their Story Bible]. Give yourself 15 minutes. No backspace."
Include: time limit, a specific constraint, and connect it to where they are in their story.
Under 150 words.`) },
  { id:"scene", label:"Scene Surgery", icon:"\uD83E\uDE7A", cat:"craft", sub:"Craft feedback", ph:"Paste a scene. Whatever you paste is brave.", sys: sp(`MODE: SCENE SURGERY. You have full access to this writer's Story Bible. Use it.
RSD-AWARE FEEDBACK ORDER: 1) Lead with what WORKS. Be specific. Quote their actual words. "This line does something: [quote]. That's [technique name]." 2) Identify 1-3 craft issues. 3) For each issue, name the principle and give a strategy, never replacement text.
PROACTIVE ANALYSIS: Actively scan the scene for:
- Characters behaving inconsistently with their Story Bible descriptions
- World rule violations (check their World Rules field)
- Flat dialogue (characters who all sound the same)
- Missing sensory detail (too much telling, not enough showing)
- Scenes without clear conflict or stakes
- Emotional setups without payoffs
- Plot threads from earlier chapters that should be present but aren't
Flag what you find as questions, not errors: "In your Story Bible, [character] is described as guarded. In this scene they're opening up immediately. Is that intentional growth or did they shift too fast?"
If the writer completed a scene, celebrate: "That scene exists now. That's a finished thing. Notice how that feels."
Under 200 words.`) },
  { id:"character", label:"Character Deep Dive", icon:"\uD83E\uDE9E", cat:"craft", sub:"Unlock your character", ph:"Describe the character giving you trouble.", sys: sp(`MODE: CHARACTER DEEP DIVE. You have full access to this writer's Story Bible. Use it.
You already know their characters from the Story Bible. When they name a character, reference what you know: "I know [character] is described as [trait from Story Bible]. Let's dig deeper."
PROACTIVE ANALYSIS: Look for:
- Characters whose internal conflict doesn't connect to the plot
- Flat characters who exist only to serve the protagonist
- Characters whose arc hasn't progressed across chapters
- Missing motivation (what does this character WANT in every scene?)
- Characters who sound like each other in dialogue
Ask 3-5 probing questions that are specific to THEIR character, not generic. "You said [character] needs control because of their unstable home life. How does that need for control show up physically? What does it look like when it cracks?"
Under 150 words.`) },
  { id:"plot", label:"Plot Compass", icon:"\uD83E\uDDED", cat:"craft", sub:"Untangle storylines", ph:"Describe your plot situation.", sys: sp(`MODE: PLOT COMPASS. You have full access to this writer's Story Bible. Use it.
Never plot FOR them. But reference their specific story: their synopsis, their chapter summaries, their character arcs.
PROACTIVE ANALYSIS: Actively check for:
- Plot holes (events that contradict earlier chapters)
- Dangling threads (setups without payoffs across chapters)
- Pacing issues (too much happening or too little)
- Stakes that aren't clear or escalating
- The protagonist not driving the plot (things happening TO them vs. them making choices)
If you spot an issue, frame as a question: "Based on your chapter summaries, [event] happened in Ch3 but hasn't been referenced since. Is that thread still alive or did it resolve offscreen?"
Identify the issue, name the principle, ask questions. ONE thread at a time.
Under 150 words.`) },
  { id:"voice", label:"Voice & Style", icon:"\u270D\uFE0F", cat:"craft", sub:"Find what makes your voice yours", ph:"Paste a page of your writing.", sys: sp(`MODE: VOICE & STYLE. You have full access to this writer's Story Bible. Use it.
Identify what makes their voice THEIRS. Not generic praise. Specific observations: their sentence rhythm, their word choices, what they notice, what they linger on, what they skip.
PROACTIVE ANALYSIS: Look for:
- Moments where the voice is strongest vs. where it flattens into generic prose
- Overused words or phrases (name them specifically)
- Passages that sound like the writer vs. passages that sound like they're imitating someone
- Tonal inconsistencies between scenes
Find 2-3 strengths. Find 1-2 spots where the voice goes generic. Help them turn up what's already theirs.
If the writer's genre or tone from the Story Bible doesn't match what they pasted, name it: "Your Story Bible says this world feels [tone]. This scene reads more [different tone]. Is that intentional for this moment?"
Under 150 words.`) },
  { id:"micro", label:"Micro-Mode", icon:"\uD83E\uDDE9", cat:"neuro", sub:"When frozen, one tiny step", ph:"Tell me what you're working on.", sys: sp(`MODE: MICRO-MODE. You have full access to this writer's Story Bible. Use it.
The writer is frozen. This is executive dysfunction. It is neurological, not laziness, not lack of talent, not lack of ideas.
Give ONE task under 5 minutes. Make it specific to THEIR story, not generic. 
Instead of "write a sentence," say "Open your manuscript. Find the last sentence you wrote in [current chapter from Story Bible]. Write one sentence after it. It can be terrible. The quality is irrelevant. The act of typing is the point."
If they have a Story Bible loaded, reference where they are: "You said you were at [where field]. Here's your one step: [specific micro-task connected to their actual story]."
Do NOT give multiple options. ONE step. Make it so small it feels almost silly. That's the point. The neuroscience says the hardest part is starting. Make starting trivially easy.
Under 150 words.`) },
  { id:"perfectionism", label:"Perfectionism Bypass", icon:"\uD83D\uDD13", cat:"neuro", sub:"Break the paralysis", ph:"Tell me what you can't start or stop perfecting.", sys: sp(`MODE: PERFECTIONISM BYPASS. You have full access to this writer's Story Bible. Use it.
1) Name the pattern: "Your brain is telling you it's not good enough yet. That's not editorial judgment. That's a protection mechanism. If it's never finished, it can never be judged."
2) Give a timed freewrite: 5-10 minutes, connected to THEIR story. "Open a blank doc. Set a timer for 7 minutes. Write the [scene/chapter from their Story Bible] from memory. No looking at notes. No backspace. Whatever comes out is the raw version your brain actually wants to write."
3) If they return with text: find ONE alive moment. "This line right here. That's the version of this scene your perfectionism was hiding from you."
Under 150 words.`) },
  { id:"smoke", label:"Through the Smoke", icon:"\uD83C\uDF2B\uFE0F", cat:"neuro", sub:"When your work suddenly feels worthless", ph:"Tell me what happened. Did your writing go from feeling good to feeling terrible?", sys: sp(`MODE: THROUGH THE SMOKE. You have full access to this writer's Story Bible and Dopamine Map. Use them.
The writer's dopamine has crashed. Work that felt brilliant now feels worthless. THIS IS NEUROLOGICAL, NOT RATIONAL. Their writing did not change. Their brain chemistry did.
SCIENCE: Brain imaging research (Volkow et al., Molecular Psychiatry) has shown that ADHD brains have fewer dopamine receptors in the reward pathway. This means the motivation and reward system is running on reduced hardware. When dopamine depletes after sustained creative effort, the brain literally cannot perceive value in its own work.
YOUR JOB: 1) Name it: "This is the dopamine perception shift. Your brain has fewer dopamine receptors in the reward pathway. That's not a flaw, it's hardware. When those receptors are depleted, your brain can't feel the value of what you created. The work didn't change. Your neurochemistry did."
2) If they have Dopamine Map flags, reference them BY NAME: "You flagged [specific moment] as exciting. Read it again. Not to judge. Just to remember what it felt like when your reward system was online."
3) Reference their Story Bible: "You built [title]. You created [character names]. You defined [world]. That didn't disappear. Your brain just can't see it right now."
4) One smoke-specific task: "Don't evaluate anything today. Open the document, add one sentence after wherever you left off. The sentence isn't the point. Touching the manuscript is."
NEVER say "it's actually good." Name the science. Show evidence. Give one action.
TONE: Steady, grounded, no cheerleading. Under 200 words.`) },
  { id:"instinct", label:"Instinct Check", icon:"\uD83D\uDD2E", cat:"intuition", sub:"Trust your gut", ph:"Describe what you're wrestling with.", sys: sp(`MODE: INSTINCT CHECK. You have full access to this writer's Story Bible. Use it.
Not technical. Not craft. This is about the writer's gut. Something feels off about their story and they can't name it.
Ask body-level questions connected to THEIR story: "When you think about [specific character from Story Bible], where do you feel it in your body?" "What scene in [their title] are you most afraid to write? What's scary about it?"
Reference their Story Bible to ask specific instinct questions: "You said [character] is [trait]. But your gut seems to be pulling them somewhere else. What does your instinct say this character actually wants?"
Honor their answers. Never override gut instinct with craft advice. 2-3 questions, follow the thread.
Under 150 words.`) },
  { id:"simmer", label:"Simmer Mode", icon:"\u2615", cat:"rest", sub:"Let your brain work offline", ph:"Tell me what you're stuck on.", sys: sp(`MODE: SIMMER. You have full access to this writer's Story Bible. Use it.
The writer's brain is cooked. This is not quitting. This is neuroscience.
SCIENCE TO SHARE: "A 2012 study at UC Santa Barbara found that participants who let their minds wander during a break showed a 41% improvement on creative tasks when they returned. The focused group showed zero improvement. Your Default Mode Network, the brain system that activates during rest, connects unrelated ideas, retrieves distant memories, and runs simulations of possible futures. It does its best work when your conscious mind steps aside."
YOUR JOB: 1) Validate: "Your prefrontal cortex is tapped out. That's real. Pushing harder right now will produce worse work, not better work."
2) Load the problem using their Story Bible: "Before you step away, let me make sure the problem is loaded. You're stuck on [reference their stuck field or current chapter]. Say it out loud or type it here. One question. Your brain needs to know what it's solving."
3) Prescribe a specific DMN-activating activity. Pick ONE that fits their situation:
- "Walk without input. No podcast, no music. 15-20 minutes. Let your mind go wherever. Keep your phone for voice memos if something surfaces."
- "Go take a real shower. Warm water, routine action, sensory monotony. This is one of the most reliable DMN activators neuroscience has found."
- "Boring hands, busy brain. Do dishes. Fold laundry. Sweep. Any repetitive physical task that occupies your hands but requires zero creative thought."
- "Sit somewhere with a view. No phone. Stare out the window. It feels wrong. It is the literal neuroscience of incubation."
- "Move without purpose. Stretch. Dance in your kitchen. Shoot baskets. Movement that doesn't require thinking."
4) "Keep something nearby to capture what surfaces. A notepad. Voice memos. When the answer comes, it comes fast and leaves fast. Catch it."
Under 200 words.`) },
  { id:"forge", label:"The Forge", icon:"\uD83D\uDD28", cat:"forge", sub:"Stop planning. Start writing.", ph:"Tell me what scene needs to exist next.", sys: sp(`MODE: THE FORGE. You have full access to this writer's Story Bible. Use it actively.
The writer has enough material to write. Your job is to move them from planning to execution.
1) Reference their Story Bible to identify the next scene: "Based on your chapter summaries and where you said you are, the next scene that needs to exist is [specific scene]. Sound right?"
2) Give a SCENE DIRECTIVE using their actual characters and world: 3-5 lines max. Character, setting, conflict, emotional tone. All pulled from their Story Bible. "You're writing the scene where [character] confronts [character] about [plot point]. Setting: [from world]. She's [emotional state based on arc]. He doesn't know [belief vs reality from world tab]. Go."
3) Completed scene: "That scene exists now. It didn't before. That's the whole game."
4) If they plan instead of write: "That's planning energy. You have enough. What's stopping you from starting? Name it and I'll help you through it."
Do NOT write the scene. Give the directive and get out of the way.
Under 150 words.`) },
  { id:"inferno", label:"The Inferno", icon:"\u2604\uFE0F", cat:"inferno", sub:"You're on fire. Let's use it.", ph:"What's pouring out of you right now?", sys: sp(`MODE: THE INFERNO. You have full access to this writer's Story Bible and Dopamine Map IF they exist. If they don't, that's fine. This mode requires NOTHING. No Story Bible. No setup. The writer is in hyperfocus. DO NOT slow them down.
The writer is in a hyperfocus state. Their dopamine is elevated. Ideas are connecting. Words are flowing. This is the most productive AND most dangerous phase for an ADHD brain. Your job is to ride with them, not slow them down.
IF NO STORY BIBLE: "You're burning. I don't need your backstory right now. Just go. Dump everything here. We'll organize later."
OFFER THESE TOOLS based on what the writer needs:
1) CAPTURE THE FLOOD: "Your brain is handing you more ideas than you can write. Dump them here. One line per idea. Don't explain. Don't develop. Just capture."
2) CHANNEL THE HEAT: "You have a lot of ideas. Let's figure out which ones move the story forward right now and which ones are future fuel." Use Story Bible if available to identify priorities.
3) RIDE THE WAVE (Scene Sprint): "Pick a scene. Set a timer for 25 minutes. Write without stopping. Don't edit. Don't reread. Just go. I'll be here when the timer ends."
4) FLAG EVERYTHING: Enhanced Dopamine Mapping. "Your clarity right now is chemically elevated. That doesn't mean it's wrong. Flag every moment that feels alive. You're building your evidence locker for when the smoke comes."
5) BODY CHECK: Gently, not naggingly. "Quick check. When did you last drink water? Eat something? Stand up? Take 90 seconds. The fire will still be here."
6) THE WIND DOWN: When they're exhausted but wired. "Your body is done but your brain isn't. Take the ONE idea that's most alive and write it as a single sentence. That's your entry point for tomorrow. Then close the document. Your DMN does its best work while you sleep."
AFTER SESSION (if no Story Bible): "You just poured out a lot. Want me to help you turn what you captured into a Story Bible? I can pull the characters, world, and plot from what you just wrote."
TONE: Energetic, matching their pace. Like a coach running alongside a sprinter. Under 200 words per response. Keep up.`) },
  { id:"rekindle", label:"Rekindle", icon:"\u2728", cat:"jarvis", sub:"The fire didn't go out. It just needs air.", ph:"Just tell me you're back.", sys: sp(`MODE: REKINDLE. You have full access to this writer's Story Bible and Dopamine Map. Use them.
The writer returned after time away. NO GUILT. None. Zero. Do not say "it's been a while" in a way that implies they should have been here sooner. The fire didn't go out. The embers are still warm. You're helping them blow gently until the flame catches again.
1) Welcome warmly: "Hey. Good to see you. [Title] is right where you left it."
2) Contextualize using their Story Bible: "Last time, you were working on [where field]. You were stuck on [stuck field]. Your characters [protagonist name] and [other characters] are waiting."
3) If they have Dopamine Map flags, mention one: "Before you left, you flagged [moment] as exciting. That's still in here. The embers are warm."
4) ONE gentle question to re-engage: something small, casual, about their story. Not "what do you want to work on" but "I've been thinking about [character]. Did you ever figure out [specific story question]?"
Make it feel like Finn was sitting here thinking about their story while they were gone.
Under 150 words.`) },
  { id:"contain", label:"Contain the Flames", icon:"\uD83C\uDF0A", cat:"contain", sub:"Pull it all together", ph:"Tell Finn what you need organized, or just say 'pull it together'.", sys: sp(`MODE: CONTAIN THE FLAMES. You have full access to the writer's Story Bible, Dopamine Map, AND recent conversation summaries from across all modes. This is a SYNTHESIS mode.
The writer has been pouring ideas, scenes, questions, and breakthroughs into multiple coaching sessions across different modes. The content is scattered. Their ADHD brain can see the pieces but can't hold them all at once. Your job is to be the one who holds it all.
YOUR JOB:
1) Review everything provided: Story Bible, Dopamine Map flags, and conversation snippets from all modes.
2) SYNTHESIZE into a clear picture:
- Key decisions the writer made across sessions
- Unresolved questions that came up and haven't been answered
- Character insights that should be in the Story Bible but aren't yet
- Plot points discussed but not yet written
- Contradictions between sessions (different things said about the same character or plot point)
- The strongest ideas from any Inferno or brainstorming sessions
- Craft feedback from Scene Surgery or Plot Compass that the writer should remember
3) Present it organized, not as a wall of text. Group by: Story Bible Updates (what should be added/changed), Unresolved Questions (what still needs deciding), Next Steps (what to write next based on everything discussed), and Strongest Moments (the best ideas and Dopamine Map highlights).
4) Ask: "Want me to help you update your Story Bible with any of this?"
TONE: Clear, organized, warm. Like a trusted assistant who read all your notes and made sense of them. Under 350 words.`) }
];

const CATS = { craft:{l:"Coaching",c:"var(--accent)"}, neuro:{l:"Neurodivergent",c:"#5A7A5C"}, intuition:{l:"Intuition",c:"#7A6EA0"}, rest:{l:"Rest",c:"#907860"}, forge:{l:"Execution",c:"var(--accent)"}, inferno:{l:"Hyperfocus",c:"#B06848"}, contain:{l:"Synthesis",c:"#908050"}, jarvis:{l:"Memory",c:"#5A7A8A"} };

const TORCHES = [
  {q:"If there\u2019s a book that you want to read, but it hasn\u2019t been written yet, then you must write it.",a:"Toni Morrison",p:"Write 100 words about a door your character is afraid to open.",cn:"Subtext",cl:"The most powerful moments happen between the lines.",cx:"Rewrite your last dialogue so neither character says what they mean."},
  {q:"Neurodiversity may be every bit as crucial for the human race as biodiversity is for life in general.",a:"Steve Silberman",p:"Write a scene where your character\u2019s difference becomes their advantage.",cn:"Perspective",cl:"The way you see the world is not a flaw. It\u2019s a lens nobody else has.",cx:"Rewrite a paragraph from your story using a sensory detail only you would notice."},
  {q:"Almost all good writing begins with terrible first efforts.",a:"Anne Lamott",p:"Write the scene your character replays at 3am.",cn:"Emotional Wound",cl:"What happened before page one is the engine of everything on it.",cx:"Write 200 words about the moment your character\u2019s worldview changed."},
  {q:"Why fit in when you were born to stand out?",a:"Dr. Seuss",p:"Write 150 words about a character who stops pretending.",cn:"Authenticity",cl:"The most magnetic characters are the ones who stop performing for the room.",cx:"Find a moment in your draft where your character is performing. Rewrite it with the mask off."},
  {q:"Write hard and clear about what hurts.",a:"Ernest Hemingway",p:"Your character just got news that changes everything. Write their first 60 seconds.",cn:"Pacing",cl:"Time in fiction is elastic.",cx:"Find a paragraph covering hours. Expand one moment to a full page."},
  {q:"I am different, not less.",a:"Temple Grandin",p:"Write a character who solves a problem in a way nobody expected.",cn:"Unconventional Strength",cl:"The most interesting characters don\u2019t think like everyone else. Neither do the best writers.",cx:"Take a scene where your character follows the expected path. Rewrite it with them choosing the unexpected one."},
  {q:"You can always edit a bad page. You can\u2019t edit a blank page.",a:"Jodi Picoult",p:"What do your character\u2019s hands look like?",cn:"Physical Grounding",cl:"Abstract emotions become real through physical detail.",cx:"Find a feeling-word in your draft. Replace it with a physical action."},
  {q:"The role of a writer is not to say what we can all say, but what we are unable to say.",a:"Ana\u00EFs Nin",p:"Write a paragraph where your character lies to someone they love.",cn:"Voice",cl:"Voice isn\u2019t word choice. It\u2019s rhythm, obsession, what a character notices.",cx:"Rewrite your opening paragraph in the opposite voice."},
  {q:"I was always an unusual girl. My mother told me I had a chameleon soul, no moral compass pointing due north, no fixed personality.",a:"Lana Del Rey",p:"Write a character who changes depending on who they\u2019re with.",cn:"Identity",cl:"The most complex characters contain contradictions. So do the most interesting people.",cx:"Write two short paragraphs: your character with a stranger, then with someone they trust. Make them feel like a different person."},
  {q:"Start writing, no matter what. The water does not flow until the faucet is turned on.",a:"Louis L\u2019Amour",p:"Describe a room using only sound and smell.",cn:"Sensory Detail",cl:"Most writers default to sight. The other senses create intimacy.",cx:"Remove all visual description from your scene. Rebuild with touch, sound, smell, taste."},
  {q:"The creative adult is the child who survived.",a:"Ursula K. Le Guin",p:"Write 200 words about what your character was like at age eight.",cn:"Origin",cl:"Every adult character carries a child inside them. That child explains everything.",cx:"Take your protagonist\u2019s core fear. Write the childhood moment that planted it."},
  {q:"I think a lot of people who feel like misfits discover that the things that made them feel odd are actually their greatest gifts.",a:"Elizabeth Gilbert",p:"Give your character a trait they\u2019re ashamed of. Then make it save them.",cn:"The Gift in the Wound",cl:"The thing your character hates about themselves is often the thing the reader loves most.",cx:"Find your character\u2019s biggest insecurity. Write a scene where it becomes exactly what\u2019s needed."},
  {q:"ADHD symptoms are associated with higher scores in divergent thinking: fluency, flexibility, and originality. Your brain doesn\u2019t think wrong. It thinks wide.",a:"Stolte et al., Frontiers in Psychiatry, 2022",p:"Write a scene where your character solves a problem by approaching it from an angle nobody expected.",cn:"Divergent Thinking",cl:"The ability to generate multiple solutions from a single starting point is a measurable cognitive strength.",cx:"Take a stuck moment in your plot. Write three completely different ways it could resolve. Pick the one that surprises you."},
  {q:"Participants who let their minds wander during a break showed a 41% improvement on creative tasks. Those who stayed focused showed zero improvement. Rest is not the opposite of work. It\u2019s the other half of it.",a:"Baird et al., UC Santa Barbara, 2012",p:"Step away from your manuscript for 15 minutes. Walk without input. Come back and write the first sentence that surfaces.",cn:"Incubation",cl:"Your Default Mode Network solves problems while your conscious mind rests. Walking away is not quitting. It\u2019s processing.",cx:"Identify the one question your story needs answered. Say it out loud. Then go do the dishes. Write down whatever surfaces."},
  {q:"The motivation deficit in ADHD is associated with dysfunction of the dopamine reward pathway. When you can\u2019t start, that\u2019s neurochemistry, not character.",a:"Volkow et al., Molecular Psychiatry, 2011",p:"Write a character who is paralyzed by something invisible to everyone around them.",cn:"The Invisible Wall",cl:"Executive dysfunction is not visible from the outside. Your character\u2019s internal experience is the story.",cx:"Write a scene from inside a character\u2019s paralysis. Not what they do. What it feels like to not be able to move."},
  {q:"Motivation in ADHD improves when three needs are met: autonomy (feeling you have a choice), competence (feeling capable), and relatedness (feeling connected). Sound familiar?",a:"Morsink et al., Self-Determination Theory, 2022",p:"Write a scene where your character finally feels seen by someone.",cn:"Connection",cl:"Relatedness is a basic psychological need. Characters who feel truly seen by another person change in front of the reader.",cx:"Find a moment in your story where your character is performing. Rewrite it so someone sees through the performance."},
  {q:"The Default Mode Network activates when you stop focusing. It connects unrelated ideas, retrieves distant memories, and runs simulations of futures. Your best ideas come in the shower because your brain finally has room to work.",a:"Neuroscience of the DMN",p:"Write a scene that takes place in a transitional moment: a drive, a shower, falling asleep.",cn:"Threshold Moments",cl:"Characters have their most honest thoughts in the spaces between events.",cx:"Find a scene with a lot of action. Insert a quiet transitional moment before or after it. Let your character think."},
  {q:"Are you paralyzed with fear? That\u2019s a good sign. Fear is good. Like self-doubt, fear is an indicator. Fear tells us what we have to do. The more scared we are of a work or calling, the more sure we can be that we have to do it.",a:"Steven Pressfield, The War of Art",p:"Write the scene you\u2019ve been avoiding. The one that scares you. You don\u2019t have to finish it. Just start it.",cn:"Resistance",cl:"Pressfield named the force that stops writers: Resistance. It only shows up when the dream is real. No tree, no shadow.",cx:"Identify the one scene in your story that makes your stomach tighten when you think about writing it. Open a blank page. Write the first sentence. Just one."},
  {q:"Researchers at Georgetown University identified creativity anxiety as a distinct, measurable cognitive state. It is not general anxiety. It is anxiety specific to the act of creating. And it predicts avoidance of creative pursuits entirely.",a:"Daker et al., Scientific Reports, 2023",p:"Write a character who is afraid to use their own gift. Show the avoidance, not the gift.",cn:"Creative Fear",cl:"Creativity anxiety is real, measurable, and separate from general anxiety. Knowing it has a name can take away some of its power.",cx:"Write a scene where your character avoids the thing they are best at. Don\u2019t explain why. Let the reader feel the avoidance."},
  {q:"Procrastination is not laziness. It is the flight reaction to fear. It is easier to let something remain in the abstract than to face it head on.",a:"Jolie Davenport, The Layers",p:"Write a character who keeps almost doing the important thing but finds reasons not to.",cn:"The Invisible Wall",cl:"Task avoidance is emotional resistance, not a character flaw. The wall between you and your work is made of feelings, not facts.",cx:"Write a scene where your protagonist stands at a literal threshold, a door, a path, a boundary, and hesitates. Stay in the hesitation."},
  {q:"People in approach states, moving toward something they want, were significantly more creative than people in avoidance states. But optimism moderated the effect. When people expected to succeed, avoidance lost its grip.",a:"Baas et al., Frontiers in Psychology, 2014",p:"Write a moment where your character shifts from retreating to advancing. What changes inside them?",cn:"The Shift",cl:"Approach motivation fuels creativity. Avoidance kills it. The shift from running away to moving toward is where the story lives.",cx:"Find a scene where your character is passive or retreating. Rewrite one paragraph where they take one small step forward instead."},
  {q:"What we need to do is say, what is the smallest, tiniest thing that I can master? Once we do something that is not fatal, we can do it a little bit more.",a:"Seth Godin",p:"Give your character one impossibly small victory. Then let it build.",cn:"Start Small",cl:"The freeze melts through action. The action can be tiny. One sentence. One paragraph. One page. Momentum builds from motion, not motivation.",cx:"Set a timer for 5 minutes. Write one paragraph of your story. Any paragraph. Any chapter. When the timer ends, stop. That is enough."}
];

const INTROS = {
  diagnose:"Alright, tell me what you've got and where it stalled. No judgment here, just detective work.",
  craft:"What are you working on? I'll build you an exercise that targets exactly the right muscle.",
  scene:"Whatever you paste here is brave. Rough drafts, polished drafts, the thing you wrote at 2am that you're not sure about. All welcome. Show me the scene.",
  character:"Who's giving you trouble? Tell me about them. Sometimes the character knows more than you do.",
  plot:"Lay it on me. What's tangled? We'll pull one thread at a time.",
  voice:"Paste a page. Any page, any draft stage. I'll show you what makes your voice yours.",
  micro:"Hey. You're frozen. That's your brain doing a thing, not a character flaw. You don't need to explain why. Just tell me what you're supposed to be working on and I'll give you one step. Just one.",
  perfectionism:"Nothing feels good enough? Yeah. That's not a lack of talent, that's your brain's protection system running too hot. It thinks if you never finish, you can never be judged. Tell me what you're stuck on.",
  smoke:"So the fire cooled down and now everything looks different. Worse, probably. Maybe you're wondering why you ever thought this was worth your time. That's the smoke talking. Not you. Your writing didn't change. Your brain chemistry did. Tell me what's happening.",
  instinct:"Let's skip the technical stuff. Your gut has been trying to tell you something about this story. Let's listen.",
  simmer:"Your brain is cooked. That's real, not laziness. Your prefrontal cortex has tapped out after real work.\n\nHere's the plan: you tell me the one question your story needs answered right now. I'll make sure it's loaded. Then you step away and do one of these: walk with no music, take a long shower, do the dishes, fold laundry, or stare out a window. These activate your Default Mode Network, the part of your brain that solves creative problems while your conscious mind rests.\n\nA study at UC Santa Barbara proved it: 41% improvement on creative tasks after stepping away. Zero improvement for people who kept pushing.\n\nKeep a notepad nearby. When the answer surfaces, it comes fast and leaves fast. Catch it.\n\nSo: what's the one question your story needs answered?",
  forge:"You've done the thinking. You know the characters. You know the world. Now we build, one scene at a time. Tell me what scene needs to exist next and I'll give you a directive.",
  inferno:"You're on fire and you know it. Don't fiddle. Don't organize. Don't second-guess. I have six tools for this state:\n\nCapture the Flood: dump every idea, one line each, don't explain.\nChannel the Heat: I'll help you figure out which ideas move the story now.\nRide the Wave: pick a scene, 25 minutes, no stopping.\nFlag Everything: your clarity is elevated right now. Flag what's alive.\nBody Check: water, food, standing. 90 seconds.\nWind Down: when your body is done but your brain isn't.\n\nOr just start talking. I'll catch it.",
  rekindle:"",
  contain:"I've been listening across all your sessions. Let me pull the threads together. Give me a second to read through everything you've given me."
};

const LOAD = ["Reading. Give me a second.","Sitting with this.","Let me think about what you've got here."];

function loadStored(key) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; } catch { return null; } }
function saveStored(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); cloudSave(key, val); } catch {} }
async function cloudSave(key, val) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("user_store").upsert({ user_id: user.id, key, value: val, updated_at: new Date().toISOString() }, { onConflict: "user_id,key" });
  } catch {}
}
async function cloudLoadAll() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;
    const { data } = await supabase.from("user_store").select("key, value").eq("user_id", user.id);
    if (data && data.length > 0) { data.forEach(row => { try { localStorage.setItem(row.key, JSON.stringify(row.value)); } catch {} }); }
    return true;
  } catch { return false; }
}

function FormField({label,k,ph,multi,value,onChange}){return <div style={{marginBottom:14}}><label style={{fontSize:12,color:"var(--text-muted)",display:"block",marginBottom:5,fontFamily:"'DM Sans',sans-serif"}}>{label}</label>{multi?<textarea className="fi" rows={4} placeholder={ph} value={value} onChange={e=>onChange(k,e.target.value)} style={{resize:"vertical"}}/>:<input className="fi" placeholder={ph} value={value} onChange={e=>onChange(k,e.target.value)}/>}</div>}
function ReadField({label,value,multi}){if(!value)return null;return <div style={{marginBottom:14}}><label style={{fontSize:12,color:"var(--text-muted)",display:"block",marginBottom:5,fontFamily:"'DM Sans',sans-serif"}}>{label}</label><div style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:8,padding:"10px 14px",fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"var(--text-primary)",lineHeight:1.7,minHeight:multi?60:40,whiteSpace:"pre-wrap"}}>{value}</div></div>}
function WorldField({label,helper,example,k,value,onChange}){return <div style={{marginBottom:18}}><label style={{fontSize:13,color:"var(--accent)",display:"block",marginBottom:3,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>{label}</label><p style={{fontSize:11,color:"var(--text-muted)",marginBottom:4,lineHeight:1.4,fontFamily:"'DM Sans',sans-serif"}}>{helper}</p><textarea className="fi" rows={2} placeholder={example} value={value} onChange={e=>onChange(k,e.target.value)} style={{resize:"vertical",fontSize:13}}/></div>}
function Btn({children,onClick,s}){return <button onClick={onClick} style={{background:"var(--bg-card-alt)",border:"1px solid var(--border-mid)",borderRadius:8,color:"var(--text-secondary)",fontSize:13,padding:"10px 16px",fontFamily:"'DM Sans',sans-serif",cursor:"pointer",...s}}>{children}</button>}
function BibTab({id,label,active,onClick}){return <button onClick={()=>onClick(id)} style={{background:active?"var(--bg-card-alt)":"none",border:active?"1px solid var(--border-mid)":"1px solid transparent",borderRadius:8,color:active?"var(--accent)":"var(--text-dim)",fontSize:12,padding:"6px 14px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{label}</button>}


const PROFILE_QUESTIONS=[
  {id:"q1",q:"How long have you been writing?",opts:["Just starting out","A few years in","I've been writing for years","I've been published"],multi:false,addl:"Anything Finn should know about your writing background?"},
  {id:"q2",q:"Everyone thinks and works differently. Knowing a little about your working style helps Finn coach you in a way that actually fits your brain. This is completely optional.",opts:["I work best in short focused bursts","I tend to jump around rather than write linearly","I get easily overwhelmed by too many options","I have a hard time starting even when I know what to write","I lose momentum quickly after a good session","None of these feel relevant"],multi:true,addl:"Anything else about how you work best?",disclaimer:"Forged Pen is a writing tool, not a mental health service. If you're experiencing a crisis please reach out to a qualified professional."},
  {id:"q3",q:"What matters most to you right now?",opts:["I have a spark and I want to see where it goes","I'm developing an idea that isn't fully formed yet","I'm deep in a manuscript and need to keep going","I want to get better at the craft while I write","I need to finish what I've started","All of the above honestly"],multi:true,addl:"Anything else Finn should know about where you want to go?"},
  {id:"q4",q:"How do you usually write when things are flowing?",opts:["Long uninterrupted sessions when I can get them","Short bursts whenever I can grab them","I write out of order, whatever scene calls to me","I write linearly, start to finish","It depends completely on the day","I honestly have no idea yet"],multi:true,addl:"Anything else about how you write?"},
  {id:"q5",q:"How do you want Finn to show up?",opts:["Direct and straight to the point","Warm and encouraging with the hard truth underneath","Ask me questions more than give me answers","Push me when I need it, back off when I don't","I'm not sure yet, figure it out as we go"],multi:false,addl:"Anything else about how you like to be coached?"}
];

export default function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authScreen, setAuthScreen] = useState("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authPass, setAuthPass] = useState("");
  const [authError, setAuthError] = useState("");
  const [authMsg, setAuthMsg] = useState("");
  const [mode, setMode] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [screen, setScreen] = useState("welcome");
  const [userName, setUserName] = useState("");
  const [welcomeInput, setWelcomeInput] = useState("");
  const [welcomeStep, setWelcomeStep] = useState("intro");
  const [welcomeRoute, setWelcomeRoute] = useState(null);
  const [profileStep, setProfileStep] = useState(1);
  const [profileAnswers, setProfileAnswers] = useState({q1:{selected:[],text:""},q2:{selected:[],text:""},q3:{selected:[],text:""},q4:{selected:[],text:""},q5:{selected:[],text:""}});
  const [userProfile, setUserProfile] = useState(null);
  const [ti] = useState(Math.floor(Math.random()*TORCHES.length));
  const [flipped, setFlipped] = useState(false);
  const [loadMsg] = useState(LOAD[Math.floor(Math.random()*LOAD.length)]);
  const [project, setProject] = useState(null);
  const [pForm, setPForm] = useState({title:"",genre:"",synopsis:"",protagonist:"",supporting:"",antagonist:"",worldSetting:"",worldRules:"",worldBeliefs:"",worldDanger:"",worldTone:"",chapters:[{num:1,summary:""}],where:"",stuck:"",excites:"",currentChapter:""});
  const [sparks, setSparks] = useState([]);
  const [flaggedIdx, setFlaggedIdx] = useState(null);
  const [lastSession, setLastSession] = useState(null);
  const [bibTab, setBibTab] = useState("overview");
  const [bibViewTab, setBibViewTab] = useState("overview");
  const [bibExpanded, setBibExpanded] = useState(false);
  const [bibleSearch, setBibleSearch] = useState("");
  const [subMenu, setSubMenu] = useState(null);
  const [lastThought, setLastThought] = useState(null);
  const [scenes, setScenes] = useState([]);
  const [activeScene, setActiveScene] = useState(null);
  const [finnOpen, setFinnOpen] = useState(false);
  const [containerMsgs, setContainerMsgs] = useState([]);
  const [containerInput, setContainerInput] = useState("");
  const [pulse, setPulse] = useState(null);
  const [sidebarCtx, setSidebarCtx] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [finnPanelSize, setFinnPanelSize] = useState("medium");
  const [triageActive, setTriageActive] = useState(false);
  const [triageInput, setTriageInput] = useState("");
  const [triageLoading, setTriageLoading] = useState(false);
  const [triageResult, setTriageResult] = useState(null);
  const [endSessionOpen, setEndSessionOpen] = useState(false);
  const [endSessionLoading, setEndSessionLoading] = useState(false);
  const [endSessionResult, setEndSessionResult] = useState(null);
  const [endSessionSceneId, setEndSessionSceneId] = useState(null);
  const [endSessionCommitting, setEndSessionCommitting] = useState(false);
  const [sceneNotesOpen, setSceneNotesOpen] = useState(false);
  const [forgeMode, setForgeMode] = useState("manuscript");
  const [ideaLabText, setIdeaLabText] = useState("");
  const [ideaLabBuckets, setIdeaLabBuckets] = useState({characters:[],plot:[],world:[],questions:[],fragments:[]});
  const [highlightPopup, setHighlightPopup] = useState({visible:false,x:0,y:0,text:""});
  const [organizeOpen, setOrganizeOpen] = useState(false);
  const [organizeLoading, setOrganizeLoading] = useState(false);
  const [organizeResult, setOrganizeResult] = useState(null);
  const [infernoText, setInfernoText] = useState("");
  const finnWidths = {small:300,medium:360,large:460};
  const endRef = useRef(null);
  const taRef = useRef(null);
  const writeRef = useRef(null);
  const cEndRef = useRef(null);
  const abortRef = useRef(null);
  const isPopStateRef = useRef(false);
  const tk = TORCHES[ti];

  const getTimeAway=()=>{
    if(!lastSession) return null;
    const diff = Date.now() - new Date(lastSession.time).getTime();
    const mins = Math.floor(diff/60000);
    const hrs = Math.floor(mins/60);
    const days = Math.floor(hrs/24);
    if(days>0) return `${days} day${days>1?"s":""}`;
    if(hrs>0) return `${hrs} hour${hrs>1?"s":""}`;
    if(mins>5) return `${mins} minutes`;
    return null;
  };

  const saveSession=(modeId)=>{
    const s={time:new Date().toISOString(),mode:modeId||null};
    setLastSession(s);saveStored("tt-session",s);
  };

  // Auth check on mount
  useEffect(()=>{
    supabase.auth.getSession().then(({data:{session}})=>{
      if(session?.user){
        setUser(session.user);
        cloudLoadAll().then(()=>{
          loadAllData();
          migrateLocalToCloud();
          setAuthLoading(false);
        });
      } else { setAuthLoading(false); }
    });
    const {data:{subscription}} = supabase.auth.onAuthStateChange((event,session)=>{
      if(event==="SIGNED_IN"&&session?.user){
        setUser(session.user);
        cloudLoadAll().then(()=>{loadAllData();migrateLocalToCloud();setAuthLoading(false)});
      }
      if(event==="SIGNED_OUT"){setUser(null);setAuthLoading(false)}
    });
    return ()=>subscription.unsubscribe();
  },[]);

  const loadAllData=()=>{
    const p = loadStored("tt-project");
    const s = loadStored("tt-sparks");
    const sess = loadStored("tt-session");
    const lt = loadStored("tt-lastthought");
    const sc = loadStored("tt-scenes");
    const pl = loadStored("tt-pulse");
    const sb = loadStored("tt-sidebarctx");
    const th = loadStored("tt-theme");
    const ilt = loadStored("tt-idealab-text");
    const ilb = loadStored("tt-idealab-buckets");
    const inft = loadStored("tt-inferno-text");
    if (p) setProject(p);
    if (s) setSparks(s);
    if (sess) setLastSession(sess);
    if (lt) setLastThought(lt);
    if (sc) setScenes(sc);
    if (pl) setPulse(pl);
    if (sb) setSidebarCtx(sb);
    if (th) setTheme(th);
    if (ilt) setIdeaLabText(ilt);
    if (ilb) setIdeaLabBuckets(ilb);
    if (inft) setInfernoText(inft);
    const un = loadStored("tt-username");
    const up = loadStored("tt-userprofile");
    if (un) setUserName(un);
    if (up) setUserProfile(up);
  };

  const migrateLocalToCloud=async()=>{
    const migrated=loadStored("tt-migrated");
    if(migrated)return;
    const keys=["tt-project","tt-sparks","tt-session","tt-lastthought","tt-scenes","tt-pulse","tt-sidebarctx","tt-theme","tt-activescene"];
    for(const key of keys){
      const val=loadStored(key);
      if(val)await cloudSave(key,val);
    }
    const chatKeys=Object.keys(localStorage).filter(k=>k.startsWith("tt-chat-"));
    for(const key of chatKeys){
      const val=loadStored(key);
      if(val)await cloudSave(key,val);
    }
    localStorage.setItem("tt-migrated","true");
  };

  const handleAuth=async(isSignUp)=>{
    setAuthError("");setAuthMsg("");
    if(!authEmail.trim()||!authPass.trim()){setAuthError("Email and password required.");return}
    if(isSignUp){
      const {error}=await supabase.auth.signUp({email:authEmail,password:authPass});
      if(error){setAuthError(error.message)}else{setAuthMsg("Check your email for a confirmation link.")}
    } else {
      const {error}=await supabase.auth.signInWithPassword({email:authEmail,password:authPass});
      if(error){setAuthError(error.message)}
    }
  };

  const handleLogout=async()=>{await supabase.auth.signOut();setUser(null);setScreen("welcome")};

  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"})},[msgs]);
  useEffect(()=>{if(mode&&msgs.length>0)saveStored("tt-chat-"+mode.id,msgs)},[msgs]);
  useEffect(()=>{if(taRef.current){taRef.current.style.height="auto";taRef.current.style.height=Math.min(taRef.current.scrollHeight,200)+"px"}},[input]);
  useEffect(()=>{setSceneNotesOpen(false)},[activeScene]);
  useEffect(()=>{if(screen==="setup"){setBibExpanded(!!project);setBibTab("overview");}if(screen!=="project")setBibleSearch("");},[screen]);

  // History API: push screen to browser history on every navigation
  useEffect(()=>{
    if(isPopStateRef.current){isPopStateRef.current=false;return;}
    window.history.pushState({screen,subMenu},``,window.location.pathname);
  },[screen]);

  // History API: handle browser back button
  useEffect(()=>{
    const onPop=(e)=>{
      const s=e.state?.screen;
      if(!s)return;
      isPopStateRef.current=true;
      setScreen(s);
      setSubMenu(e.state?.subMenu||null);
      if(s!=="chat"){setMode(null);setMsgs([]);setInput("");}
      if(s==="home"||s==="welcome"){setFinnOpen(false);setContainerMsgs([]);}
    };
    window.addEventListener("popstate",onPop);
    return()=>window.removeEventListener("popstate",onPop);
  },[]);

  // Scene management
  const loadScenes=()=>{const s=loadStored("tt-scenes");return s||[]};
  const saveScenes=(s)=>{setScenes(s);saveStored("tt-scenes",s)};
  const getWordCount=(text)=>text?text.trim().split(/\s+/).filter(w=>w).length:0;
  const getTotalWords=()=>scenes.reduce((sum,s)=>sum+getWordCount(s.text),0);

  const initScenes=()=>{
    const existing=loadStored("tt-scenes");
    if(existing&&existing.length>0){
      setScenes(existing);
      const savedActive=loadStored("tt-activescene");
      const found=savedActive&&existing.find(s=>s.id===savedActive);
      setActiveScene(found?savedActive:existing[existing.length-1].id);
      setScreen("container");return;
    }
    const first={id:"s_1",chapter:1,scene:1,title:"",text:"",status:"drafting",lastEdited:Date.now()};
    saveScenes([first]);setActiveScene(first.id);saveStored("tt-activescene",first.id);setScreen("container");
  };

  const addScene=(chapterNum)=>{
    const chScenes=scenes.filter(s=>s.chapter===chapterNum);
    const nextNum=chScenes.length>0?Math.max(...chScenes.map(s=>s.scene))+1:1;
    const ns={id:"s_"+Date.now(),chapter:chapterNum,scene:nextNum,title:"",text:"",status:"drafting",lastEdited:Date.now()};
    const updated=[...scenes,ns];saveScenes(updated);setActiveScene(ns.id);
  };

  const addChapterWithScene=()=>{
    const maxCh=scenes.length>0?Math.max(...scenes.map(s=>s.chapter)):0;
    const ns={id:"s_"+Date.now(),chapter:maxCh+1,scene:1,title:"",text:"",status:"drafting",lastEdited:Date.now()};
    const updated=[...scenes,ns];saveScenes(updated);setActiveScene(ns.id);
  };

  const importChaptersToForge=()=>{
    if(!project||!project.chapters)return;
    const chaptersWithContent=Array.isArray(project.chapters)?project.chapters.filter(c=>c.summary):[];
    if(chaptersWithContent.length===0)return;
    const newScenes=chaptersWithContent.map(c=>{
      const lines=c.summary.split("\n").filter(l=>l.trim());
      const title=lines[0]?.substring(0,50)||"Chapter "+c.num;
      return {id:"s_imp_"+c.num+"_"+Date.now(),chapter:c.num,scene:1,title,notes:"",text:c.summary,status:"drafting",lastEdited:Date.now()};
    });
    saveScenes(newScenes);setScenes(newScenes);
  };

  const updateSceneText=(id,text)=>{
    const updated=scenes.map(s=>s.id===id?{...s,text,lastEdited:Date.now()}:s);
    setScenes(updated);
    saveStored("tt-activescene",id);
    const lastSentence=text.trim().split(/[.!?]+/).filter(s=>s.trim()).pop()?.trim()||null;
    if(lastSentence){
      setLastThought(lastSentence);
      const cs=updated.find(s=>s.id===id);
      const newPulse={mode:"The Forge",modeId:"forge",scene:cs?`Ch${cs.chapter}, Scene ${cs.scene}`:"",sceneId:id,title:cs?.title||"",description:lastSentence.substring(0,120),time:Date.now()};
      setPulse(newPulse);saveStored("tt-pulse",newPulse);
    }
  };

  // Auto-save every 3 seconds when writing
  useEffect(()=>{
    if(screen!=="container")return;
    const timer=setInterval(()=>{if(scenes.length>0)saveStored("tt-scenes",scenes)},3000);
    return ()=>clearInterval(timer);
  },[screen,scenes]);

  // Container Finn
  const CONTAINER_FINN=`${FINN}\n\nMODE: CONTAINER COACHING. You are coaching the writer WHILE they write. They are mid-scene. Be quick and precise. Read their current scene text and Story Bible. You can do anything the regular coaching modes do: diagnose blocks, do scene surgery, deep-dive characters, check plot, analyze voice. The writer doesn't need to leave the container. Adapt to what they ask. If they say "this scene needs surgery," do scene surgery. If they say "I'm stuck," diagnose the block. If they say "break this down," go comprehensive. Default: short, sharp, actionable. Get them back to writing fast. Under 150 words unless they ask for more.`;

  const sendContainer=async()=>{
    if(!containerInput.trim()||loading)return;
    const userText=containerInput.trim();
    setLastThought(userText);saveStored("tt-lastthought",userText);
    const currentScene=scenes.find(s=>s.id===activeScene);
    const sceneCtx=currentScene?`\n\nCURRENT SCENE (Chapter ${currentScene.chapter}, Scene ${currentScene.scene}):\n${currentScene.text||"(empty, writer hasn't started yet)"}`:""
    const chapStr=project?.chapters?(Array.isArray(project.chapters)?project.chapters.filter(c=>c.summary).map(c=>`Ch${c.num}: ${c.summary}`).join(". "):project.chapters):"";
    const pCtx=project?`\n\nPROJECT: "${project.title}". Genre: ${project.genre}. Synopsis: ${project.synopsis}. Protagonist: ${project.protagonist}. Supporting: ${project.supporting}. Antagonist: ${project.antagonist}. Setting: ${project.worldSetting}. Rules: ${project.worldRules}. Beliefs vs Reality: ${project.worldBeliefs}. Danger: ${project.worldDanger}. Tone: ${project.worldTone}. Chapters: ${chapStr}. Position: ${project.where}. Stuck: ${project.stuck}. Excites: ${project.excites}.`:"";
    const sparkCtx=sparks.length>0?`\n\nDOPAMINE MAP: ${sparks.map(s=>s.text).join(" | ")}`:"";
    const nm=[...containerMsgs,{role:"user",content:userText}];setContainerMsgs(nm);setContainerInput("");setLoading(true);
    const ctrl=new AbortController();abortRef.current=ctrl;
    try{
      const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:CONTAINER_FINN+sceneCtx+pCtx+sparkCtx+(userName?`\n\nThe writer's name is ${userName}. Use their name naturally.`:""),messages:nm.map(m=>({role:m.role,content:m.content}))}),signal:ctrl.signal});
      const d=await r.json();
      if(d.error){setContainerMsgs(p=>[...p,{role:"assistant",content:`Connection issue: ${d.error}`}])}
      else{
        setContainerMsgs(p=>[...p,{role:"assistant",content:d.content?.filter(b=>b.type==="text").map(b=>b.text).join("\n")||"Connection hiccup."}]);
        const cs=scenes.find(s=>s.id===activeScene);
        const newPulse={mode:"The Forge",modeId:"forge",scene:cs?`Ch${cs.chapter}, Scene ${cs.scene}`:"",sceneId:activeScene,title:cs?.title||"",description:containerInput.substring(0,120),time:Date.now()};
        setPulse(newPulse);saveStored("tt-pulse",newPulse);
      }
    }catch(e){if(e.name!=="AbortError")setContainerMsgs(p=>[...p,{role:"assistant",content:"Connection hiccup. Try again."}])}
    setLoading(false);abortRef.current=null;
  };

  const pick=(m)=>{
    setMode(m);setScreen("chat");saveSession(m.id);
    const saved = loadStored("tt-chat-"+m.id);
    if(saved&&saved.length>0){
      setMsgs(saved);
    } else if(m.id==="rekindle"&&project){
      setMsgs([{role:"assistant",content:`Welcome back. You've been working on "${project.title}." ${project.where?`Last time: ${project.where}.`:""} ${project.stuck?`You were focused on: ${project.stuck}.`:""}\n\nLet me ask you something small to get your brain back in the story.`}]);
    } else if(m.id==="diagnose"&&project&&project.stuck&&project.stuck.trim()){
      setMsgs([{role:"assistant",content:`I know what you were working on. ${project.stuck}\n\nLet me ask you something about that. What's the one thing about this moment that you can see clearly, even if everything else is foggy?`}]);
    } else { setMsgs([{role:"assistant",content:INTROS[m.id]}]); }
    setInput("");
  };

  const newChat=()=>{
    if(!mode)return;
    saveStored("tt-chat-"+mode.id,null);
    if(mode.id==="rekindle"&&project){
      setMsgs([{role:"assistant",content:`Welcome back. You've been working on "${project.title}." ${project.where?`Last time: ${project.where}.`:""} ${project.stuck?`You were focused on: ${project.stuck}.`:""}\n\nLet me ask you something small to get your brain back in the story.`}]);
    } else if(mode.id==="diagnose"&&project&&project.stuck&&project.stuck.trim()){
      setMsgs([{role:"assistant",content:`I know what you were working on. ${project.stuck}\n\nLet me ask you something about that. What's the one thing about this moment that you can see clearly, even if everything else is foggy?`}]);
    } else { setMsgs([{role:"assistant",content:INTROS[mode.id]}]); }
  };

  const handleOrganize=async()=>{
    if(!ideaLabText.trim()&&!Object.values(ideaLabBuckets).some(b=>b.length>0))return;
    setOrganizeLoading(true);
    const bucketSummary=Object.entries(ideaLabBuckets).filter(([k,v])=>v.length>0).map(([k,v])=>`${k.toUpperCase()}: ${v.map(i=>i.text).join(" | ")}`).join("\n");
    try{
      const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        system:`You are Finn analyzing a writer's Idea Lab content. Extract and organize what you find. Respond ONLY with JSON. No markdown. No backticks.`,
        messages:[{role:"user",content:`Analyze this Idea Lab content and extract story elements.

FREEFORM CONTENT:
${ideaLabText.substring(0,3000)}

${bucketSummary?`WRITER'S BUCKET SORTING:\n${bucketSummary}`:""}

Respond with ONLY this JSON:
{"characters":[{"text":"character description","status":"pending"}],"world":[{"text":"world or setting detail","status":"pending"}],"plot":[{"text":"plot moment or story beat","status":"pending"}],"questions":[{"text":"unanswered question to carry forward","status":"pending"}]}`}]
      })});
      const d=await r.json();
      if(!d.error){
        const raw=d.content?.filter(b=>b.type==="text").map(b=>b.text).join("")||"";
        const cleaned=raw.replace(/```json\s*/g,"").replace(/```\s*/g,"").trim();
        try{
          const result=JSON.parse(cleaned);
          setOrganizeResult(result);
          setOrganizeOpen(true);
        }catch(e){console.log("Organize parse error:",e);}
      }
    }catch(e){console.log("Organize error:",e);}
    setOrganizeLoading(false);
  };

  const commitOrganized=(destination)=>{
    if(!organizeResult)return;
    const approved=(section)=>(organizeResult[section]||[]).filter(i=>i.status==="approved").map(i=>i.text);
    // Add approved characters, world to Story Bible
    const chars=approved("characters").join("\n\n");
    const world=approved("world").join("\n\n");
    const plot=approved("plot");
    if((chars||world)&&project){
      const updated={...project,
        protagonist:chars?((project.protagonist||"")+"\n\n"+chars).trim():project.protagonist,
        worldSetting:world?((project.worldSetting||"")+"\n\n"+world).trim():project.worldSetting,
        updated:new Date().toLocaleDateString()
      };
      setProject(updated);saveStored("tt-project",updated);
    }
    // Add approved plot moments as new scenes in Manuscript
    if(plot.length>0){
      const newScenes=plot.map((p,i)=>({
        id:"s_il_"+Date.now()+"_"+i,
        chapter:Math.max(...(scenes.map(s=>s.chapter)||[0]),0)+1,
        scene:i+1,
        title:p.substring(0,50),
        text:"",
        notes:p,
        sceneNotes:"From Idea Lab — needs development",
        modeData:[],status:"drafting",lastEdited:Date.now()
      }));
      const updated=[...scenes,...newScenes];
      saveScenes(updated);
    }
    setOrganizeOpen(false);
    setOrganizeResult(null);
    if(destination==="bible")setScreen("project");
    else if(destination==="manuscript"){setForgeMode("manuscript");setOrganizeOpen(false);}
    // "stay" just closes the overlay
  };

  const updateOrganizeItem=(section,idx,status)=>{
    setOrganizeResult(prev=>{
      const updated={...prev};
      updated[section]=[...prev[section]];
      updated[section][idx]={...updated[section][idx],status};
      return updated;
    });
  };

  const generateDefaultSidebarCtx=async(proj)=>{
    if(!proj)return;
    try{
      const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        system:`You are a writing session analyzer. Respond ONLY with a JSON object. No markdown. No backticks. No explanation. Just the JSON.`,
        messages:[{role:"user",content:`A writer has set up their Story Bible. Generate atmosphere sidebar content from their project details.

PROJECT: "${proj.title}" - ${proj.genre}
SETTING: ${proj.worldSetting||"not specified"}
TONE: ${proj.worldTone||"not specified"}
PROTAGONIST: ${(proj.protagonist||"").substring(0,200)}
WHERE THEY ARE: ${proj.where||"beginning"}
STUCK ON: ${proj.stuck||"nothing yet"}
WHAT EXCITES THEM: ${proj.excites||"not specified"}

Respond with ONLY this JSON (no markdown, no backticks):
{"toneWord":"ONE atmosphere word that captures this story's feeling","sensoryAnchors":[{"detail":"a sensory detail that fits this world","sense":"smell/sound/touch/sight/taste"},{"detail":"second sensory detail","sense":"sense"},{"detail":"third sensory detail","sense":"sense"}],"hook":"A question that makes the writer want to open their manuscript. Reference a specific character or story element by name.","nextBeat":"What the writer should work on next based on where they are in the story","emotionalGoal":"The emotional effect the next scene should achieve in 5 words or less"}`}]
      })});
      const d=await r.json();
      if(!d.error){
        const raw=d.content?.filter(b=>b.type==="text").map(b=>b.text).join("")||"";
        const cleaned=raw.replace(/```json\s*/g,"").replace(/```\s*/g,"").trim();
        try{
          const ctx=JSON.parse(cleaned);
          ctx.mode="Story Bible";ctx.time=Date.now();
          setSidebarCtx(ctx);saveStored("tt-sidebarctx",ctx);
        }catch(e){console.log("Default sidebar parse error:",e,"Raw response:",raw);}
      }else{console.log("Default sidebar API error:",d.error);}
    }catch(e){console.log("Default sidebar fetch error:",e);}
  };

  // Populate sidebar from Story Bible when no session context exists yet
  useEffect(()=>{
    if(screen==="home"&&project&&!sidebarCtx){
      generateDefaultSidebarCtx(project);
    }
  },[screen,project]);

  const generateSidebarContext=async(sessionMsgs,sessionMode,sceneText,sessionModeId)=>{
    if(!project||sessionMsgs.length<2)return;
    const recentMsgs=sessionMsgs.slice(-6).map(m=>`${m.role}: ${m.content.substring(0,200)}`).join("\n");
    const sceneSnippet=sceneText?sceneText.substring(0,500):"";
    try{
      const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        system:`You are a writing session analyzer. Respond ONLY with a JSON object. No markdown. No backticks. No explanation. Just the JSON.`,
        messages:[{role:"user",content:`A writer just finished a session. Generate sidebar context.

PROJECT: "${project.title}" - ${project.genre}
MODE USED: ${sessionMode||"The Forge"}
RECENT CONVERSATION:\n${recentMsgs}
${sceneSnippet?`SCENE TEXT SNIPPET:\n${sceneSnippet}`:""}

Respond with ONLY this JSON (no markdown, no backticks):
{"toneWord":"ONE atmosphere word for the scene being worked on","sensoryAnchors":[{"detail":"sensory detail from the scene","sense":"smell/sound/touch/sight/taste"},{"detail":"second detail","sense":"sense"},{"detail":"third detail","sense":"sense"}],"hook":"A provocative question that makes the writer want to return to this scene. Address the character by name. Make it specific to what was discussed.","nextBeat":"What should happen next in the story based on the session","emotionalGoal":"The emotional effect the next scene should achieve in 5 words or less"}`}]
      })});
      const d=await r.json();
      if(!d.error){
        const raw=d.content?.filter(b=>b.type==="text").map(b=>b.text).join("")||"";
        const cleaned=raw.replace(/```json\s*/g,"").replace(/```\s*/g,"").trim();
        try{
          const ctx=JSON.parse(cleaned);
          ctx.mode=sessionMode||"The Forge";
          ctx.modeId=sessionModeId||"forge";
          ctx.time=Date.now();
          setSidebarCtx(ctx);saveStored("tt-sidebarctx",ctx);
        }catch(e){console.log("Sidebar parse error",e)}
      }
    }catch(e){console.log("Sidebar generation error",e)}
  };

  const goHome=()=>{
    const prevMode=mode;const prevMsgs=[...msgs];const prevContainerMsgs=[...containerMsgs];
    const activeScn=scenes.find(s=>s.id===activeScene);
    cancelReq();setMode(null);setScreen("home");setSubMenu(null);setMsgs([]);setInput("");setFinnOpen(false);setContainerMsgs([]);setContainerInput("");setTriageActive(false);setTriageInput("");setTriageResult(null);
    if(scenes.length>0)saveStored("tt-scenes",scenes);
    if(prevMsgs.length>=2&&prevMode){generateSidebarContext(prevMsgs,prevMode.label,activeScn?.text||"",prevMode.id)}
    else if(prevContainerMsgs.length>=2){generateSidebarContext(prevContainerMsgs,"The Forge",activeScn?.text||"","forge")}
  };
  const clearStuck=()=>{
    const updated={...project,stuck:""};
    setProject(updated);
    saveStored("tt-project",updated);
  };

  const routeToDestination=()=>{
    if(welcomeRoute==="idealab"){setForgeMode("idealab");initScenes();}
    else if(welcomeRoute==="storybible"){saveSession(null);setScreen("setup");}
    else if(welcomeRoute==="manuscript"||welcomeRoute==="forge"){initScenes();}
    else{saveSession(null);setScreen("home");}
  };

  const saveProfile=(answers)=>{
    const profile={...answers,completedAt:new Date().toISOString(),routePath:welcomeRoute};
    setUserProfile(profile);
    saveStored("tt-userprofile",profile);
    cloudSave("tt-userprofile",profile);
  };

  const toggleProfileOption=(qid,opt)=>{
    const q=PROFILE_QUESTIONS.find(q=>q.id===qid);
    setProfileAnswers(prev=>{
      const curr=prev[qid].selected;
      const updated=q.multi?(curr.includes(opt)?curr.filter(o=>o!==opt):[...curr,opt]):[opt];
      return {...prev,[qid]:{...prev[qid],selected:updated}};
    });
  };

  const handleEndSession=async()=>{
    if(msgs.length<2||endSessionLoading)return;
    setEndSessionLoading(true);
    const sessionMsgs=msgs.slice(-12).map(m=>`${m.role==="user"?"Writer":"Finn"}: ${m.content.substring(0,300)}`).join("\n\n");
    const pCtx=project?`Project: "${project.title}" (${project.genre}).`:"";
    try{
      const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        system:`You are Finn. A coaching session just ended. Summarize it for the writer. CRITICAL RULES: Always write in second person ("you worked on", "you identified", "you discovered", "you learned"). Never say "the writer" under any circumstances. Never use em dashes. Use commas, periods, or colons instead. No markdown. No backticks. Respond ONLY with JSON.`,
        messages:[{role:"user",content:`${pCtx}
Mode: ${mode?.label||"coaching"}

Session:
${sessionMsgs}

Respond with ONLY this JSON:
{"summary":"1-2 sentences on what the writer worked through. Conversational, Finn's voice.","insights":["specific thing decided or discovered","second insight if there is one"],"draftText":"Any new prose drafted in the session, or empty string","suggestedAction":"One sentence on the single most useful next step"}`}]
      })});
      const d=await r.json();
      if(!d.error){
        const raw=d.content?.filter(b=>b.type==="text").map(b=>b.text).join("")||"";
        const cleaned=raw.replace(/```json\s*/g,"").replace(/```\s*/g,"").trim();
        try{
          const result=JSON.parse(cleaned);
          setEndSessionResult(result);
          setEndSessionOpen(true);
          if(activeScene)setEndSessionSceneId(activeScene);
          else if(scenes.length>0)setEndSessionSceneId(scenes[scenes.length-1].id);
        }catch(e){
          setEndSessionResult({summary:"Session complete. Good work today.",insights:[],draftText:"",suggestedAction:"Keep going."});
          setEndSessionOpen(true);
        }
      }
    }catch(e){console.log("End session error:",e);}
    setEndSessionLoading(false);
  };

  const commitModeData=()=>{
    if(!endSessionResult||!endSessionSceneId)return;
    setEndSessionCommitting(true);
    const newEntry={
      id:"md_"+Date.now(),
      modeLabel:mode?.label||"Session",
      modeId:mode?.id||"session",
      summary:endSessionResult.summary,
      insights:endSessionResult.insights||[],
      draftText:endSessionResult.draftText||"",
      suggestedAction:endSessionResult.suggestedAction||"",
      timestamp:Date.now(),
      resolved:false
    };
    const updated=scenes.map(s=>s.id===endSessionSceneId?{...s,modeData:[...(s.modeData||[]),newEntry]}:s);
    saveScenes(updated);
    setEndSessionOpen(false);setEndSessionResult(null);setEndSessionCommitting(false);
    setActiveScene(endSessionSceneId);saveStored("tt-activescene",endSessionSceneId);
    initScenes();
  };

  const getSmartRoute=()=>{
    if(!project) return {msg:"Set up your Story Bible and let Finn learn your project.",action:null,label:"Set Up Story Bible"};
    const away=getTimeAway();
    const isLong=away&&(away.includes("day")||(away.includes("hour")&&parseInt(away)>=12));
    if(isLong) return {msg:`It's been ${away}. "${project.title}" is still here. So is everything you built. Want me to remind you what's strong about this story?`,action:"rekindle",label:"Let's go"};
    // Only use session-generated sidebarCtx if it was produced AFTER the last session started
    if(sidebarCtx?.nextBeat&&sidebarCtx?.mode!=="Story Bible"&&sidebarCtx?.time&&lastSession?.time){
      const lastSessionTime=new Date(lastSession.time).getTime();
      const sidebarIsFromThisSession=sidebarCtx.time>lastSessionTime;
      const hoursSince=(Date.now()-sidebarCtx.time)/(1000*60*60);
      if(sidebarIsFromThisSession&&hoursSince<4){
        const lastModeId=sidebarCtx.modeId||"forge";
        const validMode=MODES.find(m=>m.id===lastModeId);
        return {msg:sidebarCtx.nextBeat,action:validMode?lastModeId:"forge",label:"Let's go"};
      }
    }
    if(project.stuck&&project.stuck.trim()){
      const preview=project.stuck.trim();
      const truncated=preview.length>90?preview.substring(0,90).trimEnd()+"...":preview;
      return {msg:`You were working on: ${truncated} Want to pick that up?`,action:"diagnose",label:"Let's go",clearable:true};
    }
    if(project.where&&project.where.trim()) return {msg:`You're at ${project.where}. Ready to keep building?`,action:"forge",label:"Let's go"};
    return {msg:"What do you want to work on today?",action:"forge",label:"Let's go"};
  };

  const handleTriage=async()=>{
    if(!triageInput.trim()||triageLoading)return;
    setTriageLoading(true);
    const chapStr=project?.chapters?(Array.isArray(project.chapters)?project.chapters.filter(c=>c.summary).map(c=>`Ch${c.num}: ${c.summary}`).join(". "):project.chapters):"";
    const recentCtx=sidebarCtx?.nextBeat?`Recent session note: ${sidebarCtx.nextBeat}.`:"";
    try{
      const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        system:`You are Finn, a writing coach routing a writer to the right kind of help. Read what they said and choose the best mode. Respond ONLY with JSON. No markdown. No backticks.

Available modes:
- diagnose: stuck, blocked, can't figure out the problem
- craft: wants a targeted exercise or challenge
- scene: has a scene to show or get feedback on
- character: character feels flat or confusing
- plot: plot hole, tangled storyline, pacing
- voice: wants to work on their writing voice or style
- micro: frozen, can't start, executive dysfunction
- perfectionism: paralyzed by perfectionism, can't finish
- smoke: work suddenly feels worthless, dopamine crash
- instinct: gut feeling about the story, something feels wrong
- simmer: brain is fried, needs to step away
- forge: ready to write, just needs to get to the page
- inferno: on fire, ideas pouring out, hyperfocus state
- rekindle: returning after time away, needs to reconnect
- contain: wants to pull everything together and organize

Respond with ONLY this JSON:
{"modeId":"one mode id from the list above","message":"Finn's response in 1-2 sentences. Conversational. No em dashes. Warm but direct. Use the writer's own words back to them."}`,
        messages:[{role:"user",content:`The writer said: "${triageInput.trim()}"

Project: "${project?.title||"untitled"}" (${project?.genre||""}). ${recentCtx} Last position: ${project?.where||"unknown"}. ${project?.stuck?`Focused on: ${project.stuck}.`:""}`}]
      })});
      const d=await r.json();
      if(!d.error){
        const raw=d.content?.filter(b=>b.type==="text").map(b=>b.text).join("")||"";
        const cleaned=raw.replace(/```json\s*/g,"").replace(/```\s*/g,"").trim();
        try{
          const result=JSON.parse(cleaned);
          setTriageResult(result);
        }catch(e){setTriageResult({modeId:"forge",message:"Let me think about that. Let's start in The Forge and go from there."});}
      }
    }catch(e){setTriageResult({modeId:"forge",message:"Something got tangled on my end. Let's start in The Forge."});}
    setTriageLoading(false);
  };
  const cancelReq=()=>{if(abortRef.current){abortRef.current.abort();abortRef.current=null;setLoading(false)}};
  const sparkMsgs=["Saved. Future you will thank you for this.","Flagged. This is a breadcrumb back to the fire.","Noted. This one has heat.","Saved. When the smoke comes, this is your proof."];
  const flagSpark=(c,idx,modeName)=>{const ns=[...sparks,{text:c.substring(0,200),date:new Date().toLocaleDateString(),mode:modeName||mode?.label||"Session",modeId:mode?.id||null}];setSparks(ns);saveStored("tt-sparks",ns);setFlaggedIdx(idx);setTimeout(()=>setFlaggedIdx(null),2500)};

  const send=async()=>{
    if(!input.trim()||loading)return;
    const userText=input.trim();
    setLastThought(userText);saveStored("tt-lastthought",userText);
    const chapStr = project?.chapters ? (Array.isArray(project.chapters) ? project.chapters.filter(c=>c.summary).map(c=>`Ch${c.num}: ${c.summary}`).join(". ") : project.chapters) : "";
    const pCtx = project ? `\n\nPROJECT: "${project.title}". Genre: ${project.genre}. Synopsis: ${project.synopsis}. Protagonist: ${project.protagonist}. Supporting Characters: ${project.supporting}. Antagonist: ${project.antagonist}. Core Setting: ${project.worldSetting}. World Rules: ${project.worldRules}. What People Believe vs Reality: ${project.worldBeliefs}. What Makes This World Dangerous: ${project.worldDanger}. World Tone: ${project.worldTone}. Chapters so far: ${chapStr}. Current point: ${project.where}. Focused on: ${project.stuck}. What excites them: ${project.excites}.${project.currentChapter?` CURRENT CHAPTER TEXT: ${project.currentChapter}`:""}` : "";
    const sparkCtx = sparks.length > 0 ? `\n\nDOPAMINE MAP (moments the writer flagged as exciting): ${sparks.map(s=>s.text).join(" | ")}` : "";
    const userCtx = userName ? `\n\nThe writer's name is ${userName}. Use their name naturally throughout your response, the way a good coach would. Not in every sentence, but enough to feel personal.` : "";
    const profileCtx = userProfile ? `\n\nWriter's profile — use this to calibrate your coaching approach:\n- Experience: ${userProfile.q1?.selected?.join(", ")||"not specified"}\n- Working style: ${userProfile.q2?.selected?.join(", ")||"not specified"}\n- Current goal: ${userProfile.q3?.selected?.join(", ")||"not specified"}\n- Writing pattern: ${userProfile.q4?.selected?.join(", ")||"not specified"}\n- Coaching preference: ${userProfile.q5?.selected?.join(", ")||"not specified"}${userProfile.q2?.text?`\nStyle notes: ${userProfile.q2.text}`:""}${userProfile.q5?.text?`\nCoaching notes: ${userProfile.q5.text}`:""}` : "";
    let containCtx = "";
    if(mode.id==="contain"){
      const modeIds=["diagnose","craft","scene","character","plot","voice","micro","perfectionism","smoke","instinct","simmer","forge","inferno","rekindle"];
      const snippets=[];
      modeIds.forEach(mid=>{
        const saved=loadStored("tt-chat-"+mid);
        if(saved&&saved.length>1){
          const recent=saved.slice(-4).filter(m=>m.role==="assistant").map(m=>m.content.substring(0,300)).join(" ... ");
          if(recent.trim()) snippets.push(`[${mid.toUpperCase()}]: ${recent}`);
        }
      });
      if(snippets.length>0) containCtx=`\n\nRECENT CONVERSATIONS ACROSS ALL MODES (use these to synthesize):\n${snippets.join("\n")}`;
    }
    const nm=[...msgs,{role:"user",content:userText}];setMsgs(nm);setInput("");setLoading(true);
    const ctrl=new AbortController();abortRef.current=ctrl;
    try{
      const r=await fetch("/api/chat",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          system: mode.sys + pCtx + sparkCtx + containCtx + userCtx + profileCtx,
          messages: nm.map(m=>({role:m.role,content:m.content}))
        }),
        signal:ctrl.signal
      });
      const d=await r.json();
      if(d.error){
        setMsgs(p=>[...p,{role:"assistant",content:`Connection issue: ${d.error}. Try again in a moment.`}]);
      } else {
        setMsgs(p=>[...p,{role:"assistant",content:d.content?.filter(b=>b.type==="text").map(b=>b.text).join("\n")||"Connection hiccup."}]);
        const newPulse={mode:mode.label,modeId:mode.id,scene:null,description:userText.substring(0,120),vividLine:null,time:Date.now()};
        setPulse(newPulse);saveStored("tt-pulse",newPulse);
      }
    }catch(e){if(e.name!=="AbortError")setMsgs(p=>[...p,{role:"assistant",content:"Connection hiccup. Try again."}])}
    setLoading(false);abortRef.current=null;
  };

  const handleSetup=async()=>{
    const prevStuck=project?.stuck||"";
    const newStuck=pForm.stuck||"";
    const focusedTimestamp=newStuck!==prevStuck&&newStuck.trim()?new Date().toLocaleDateString():project?.focusedTimestamp||"";
    const p={...pForm,stuck:newStuck.substring(0,100),focusedTimestamp,updated:new Date().toLocaleDateString()};
    setProject(p);saveStored("tt-project",p);
    const existingScenes=loadStored("tt-scenes");
    if((!existingScenes||existingScenes.length===0)&&pForm.chapters&&pForm.chapters.some(c=>c.summary)){
      const newScenes=pForm.chapters.filter(c=>c.summary).map((c,i)=>({id:"s_ch"+c.num,chapter:c.num,scene:1,title:c.summary.substring(0,50),notes:c.summary,text:"",status:"drafting",lastEdited:Date.now()}));
      if(newScenes.length>0){saveScenes(newScenes);setScenes(newScenes)}
    }
    setScreen("project");
  };
  const updateField=(k,v)=>setPForm(prev=>({...prev,[k]:v}));
  const addChapter=()=>setPForm(prev=>({...prev,chapters:[...prev.chapters,{num:prev.chapters.length+1,summary:""}]}));
  const removeChapter=(idx)=>setPForm(prev=>({...prev,chapters:prev.chapters.filter((_,i)=>i!==idx).map((c,i)=>({...c,num:i+1}))}));
  const updateChapter=(idx,val)=>setPForm(prev=>({...prev,chapters:prev.chapters.map((c,i)=>i===idx?{...c,summary:val}:c)}));

  const isFocusMode = mode && (mode.id==="micro"||mode.id==="smoke");

  return (
    <div style={{fontFamily:"'DM Sans',sans-serif",background:"var(--bg-base)",color:"var(--text-primary)",minHeight:"100vh"}} className={theme==="light"?"theme-light":""}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}body{background:var(--bg-base)}

        /* ============================================
           FORGED PEN THEME SYSTEM
           Dark Academia (default) + Light Academia (olive)
           Add class "theme-light" to root div to switch
        ============================================ */

        :root {
          --bg-base: #121010;
          --bg-dark: #141210;
          --bg-write: #161412;
          --bg-deepest: #0F0E0C;
          --bg-card: #1A1816;
          --bg-card-rgb: 26,24,22;
          --bg-card-alt: #1E1A16;
          --border: #221E1A;
          --border-mid: #2A2420;
          --accent: #A8884A;
          --accent-b0: #A8884AB0;
          --accent-90: #A8884A90;
          --accent-80: #A8884A80;
          --accent-70: #A8884A70;
          --accent-60: #A8884A60;
          --accent-40: #A8884A40;
          --accent-30: #A8884A30;
          --accent-20: #A8884A20;
          --accent-15: #A8884A15;
          --accent-0a: #A8884A0A;
          --accent-08: #A8884A08;
          --text-primary: #D8C8AA;
          --text-secondary: #C8B8A0;
          --text-muted: #8A7E6A;
          --text-dim: #6A6050;
          --text-faint: #4A4238;
          --text-deepfaint: #3A3430;
        }

        .theme-light {
          --bg-base: #F0EAE0;
          --bg-dark: #E8E0D4;
          --bg-write: #EDE6DA;
          --bg-deepest: #E0D8CC;
          --bg-card: #E4DDD0;
          --bg-card-rgb: 228,221,208;
          --bg-card-alt: #DDD6C8;
          --border: #C8C0B0;
          --border-mid: #D0C8B8;
          --accent: #5A6B3A;
          --accent-b0: #5A6B3AB0;
          --accent-90: #5A6B3A90;
          --accent-80: #5A6B3A80;
          --accent-70: #5A6B3A70;
          --accent-60: #5A6B3A60;
          --accent-40: #5A6B3A40;
          --accent-30: #5A6B3A30;
          --accent-20: #5A6B3A20;
          --accent-15: #5A6B3A15;
          --accent-0a: #5A6B3A0A;
          --accent-08: #5A6B3A08;
          --text-primary: #1E1C14;
          --text-secondary: #2C2A1E;
          --text-muted: #5A5448;
          --text-dim: #908878;
          --text-faint: #A09888;
          --text-deepfaint: #B0A898;
        }

        ::selection{background:var(--accent-30)}textarea::placeholder,input::placeholder{color:var(--text-dim);font-style:italic}
        @keyframes fu{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fi{from{opacity:0}to{opacity:1}}
        @keyframes pu{0%,100%{opacity:.3}50%{opacity:.8}}
        @keyframes wp{0%,100%{opacity:.55}50%{opacity:1}}
        .ma,.mu{animation:fu .4s ease-out}
        .card{background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:16px;cursor:pointer;transition:all .25s}
        .card:hover{border-color:var(--accent-30);transform:translateY(-1px)}
        .sb{transition:all .2s}.sb:hover:not(:disabled){transform:scale(1.03);filter:brightness(1.1)}
        .cp{cursor:pointer;transition:all .4s}.cp:hover{transform:scale(1.01)}
        .fi{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:10px 14px;color:var(--text-primary);font-family:'Cormorant Garamond',serif;font-size:15px;width:100%;outline:none}.fi:focus{border-color:var(--accent-40)}
        .right-sb{display:none}
        @media(min-width:1100px){.right-sb{display:flex}}
      `}</style>

      {/* LOADING */}
      {authLoading&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"var(--bg-base)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{textAlign:"center"}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:600,color:"var(--accent)"}}>Forged Pen</div>
          <div style={{fontSize:12,color:"var(--text-dim)",marginTop:12}}>Loading...</div>
        </div>
      </div>}

      {/* LOGIN */}
      {!authLoading&&!user&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"var(--bg-base)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
        <div style={{maxWidth:380,width:"100%",textAlign:"center",animation:"fi .6s ease-out"}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:600,color:"var(--accent)",marginBottom:6}}>Forged Pen</div>
          <div style={{fontSize:12,color:"var(--text-dim)",marginBottom:32}}>Your writing coach, not your ghostwriter</div>
          <div style={{textAlign:"left"}}>
            <div style={{marginBottom:14}}>
              <label style={{fontSize:11,color:"var(--text-muted)",display:"block",marginBottom:5}}>Email</label>
              <input value={authEmail} onChange={e=>setAuthEmail(e.target.value)} type="email" placeholder="your@email.com" style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:8,padding:"10px 14px",color:"var(--text-primary)",fontFamily:"'DM Sans',sans-serif",fontSize:14,width:"100%",outline:"none"}}/>
            </div>
            <div style={{marginBottom:20}}>
              <label style={{fontSize:11,color:"var(--text-muted)",display:"block",marginBottom:5}}>Password</label>
              <input value={authPass} onChange={e=>setAuthPass(e.target.value)} type="password" placeholder="Min 6 characters" onKeyDown={e=>{if(e.key==="Enter")handleAuth(authScreen==="signup")}} style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:8,padding:"10px 14px",color:"var(--text-primary)",fontFamily:"'DM Sans',sans-serif",fontSize:14,width:"100%",outline:"none"}}/>
            </div>
            {authError&&<div style={{fontSize:12,color:"#B06848",marginBottom:12,lineHeight:1.5}}>{authError}</div>}
            {authMsg&&<div style={{fontSize:12,color:"#5A7A5C",marginBottom:12,lineHeight:1.5}}>{authMsg}</div>}
            <div className="sb" onClick={()=>handleAuth(authScreen==="signup")} style={{background:"var(--accent)",borderRadius:8,padding:"12px",textAlign:"center",cursor:"pointer",marginBottom:12}}>
              <span style={{fontSize:13,fontWeight:500,color:"var(--bg-deepest)"}}>{authScreen==="signup"?"Create Account":"Sign In"}</span>
            </div>
            <div style={{textAlign:"center"}}>
              <span onClick={()=>{setAuthScreen(authScreen==="login"?"signup":"login");setAuthError("");setAuthMsg("")}} style={{fontSize:12,color:"var(--text-dim)",cursor:"pointer"}}>
                {authScreen==="login"?"Need an account? Sign up":"Already have an account? Sign in"}
              </span>
            </div>
          </div>
          <div style={{marginTop:32,fontSize:10,color:"var(--text-faint)",lineHeight:1.6}}>Your writing syncs across all your devices.<br/>Your content is never used to train AI.</div>
        </div>
      </div>}

      {/* WELCOME */}
      {user&&screen==="welcome"&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:userName?"var(--bg-base)":"#2E2620",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:24,overflowY:"auto"}}>
        <div style={{maxWidth:420,width:"100%",animation:"fi .6s ease-out"}}>

          {/* NEW USER FLOW */}
          {!userName&&<div style={{background:"#EDE6DA",borderRadius:10,padding:"40px 36px",border:"1px solid #C8BC9A"}}>
            <div style={{textAlign:"center",marginBottom:28}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,letterSpacing:"0.18em",textTransform:"uppercase",color:"#A8884A",marginBottom:6}}>Forged Pen</div>
              <div style={{fontSize:11,color:"#8A7860",letterSpacing:"0.14em",textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif"}}>Where Stories Are Shaped</div>
            </div>

            {welcomeStep==="intro"&&<>
              <div style={{borderTop:"1px solid #D8CEB0",paddingTop:28,marginBottom:24}}>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:400,color:"#1E1C14",lineHeight:1.75,marginBottom:16}}>Hey. I'm Finnigan. Finn for short.</p>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:300,color:"#3A3428",lineHeight:1.85,marginBottom:14}}>I'm not here to write your story. That part belongs to you. I'm here for the moments when your plot gets tangled, your words stall, and you can't see the shape of what you're building.</p>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:300,color:"#3A3428",lineHeight:1.85}}>I'm here to coach you through it all or stand away when you don't need me.</p>
              </div>
              <div style={{borderTop:"1px solid #D8CEB0",paddingTop:24}}>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontStyle:"italic",color:"#5A5040",marginBottom:14}}>What should I call you?</p>
                <input autoFocus value={welcomeInput} onChange={e=>setWelcomeInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&welcomeInput.trim()){const n=welcomeInput.trim();setUserName(n);saveStored("tt-username",n);cloudSave("tt-username",n);setWelcomeStep("routing");setWelcomeInput("");}}} placeholder="Your first name, or whatever you'd like" style={{width:"100%",background:"transparent",border:"none",borderBottom:"1px solid #C8BC9A",padding:"8px 0",fontFamily:"'Cormorant Garamond',serif",fontSize:17,color:"#1E1C14",outline:"none",letterSpacing:"0.01em"}}/>
                {welcomeInput.trim()&&<div onClick={()=>{const n=welcomeInput.trim();setUserName(n);saveStored("tt-username",n);cloudSave("tt-username",n);setWelcomeStep("routing");setWelcomeInput("");}} style={{background:"#5A6B3A",borderRadius:7,padding:"11px",textAlign:"center",cursor:"pointer",marginTop:18}}>
                  <span style={{fontSize:13,fontWeight:500,color:"#F0EAE0",fontFamily:"'DM Sans',sans-serif"}}>Continue</span>
                </div>}
              </div>
            </>}

            {welcomeStep==="routing"&&<>
              <div style={{borderTop:"1px solid #D8CEB0",paddingTop:24,marginBottom:20}}>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:"#1E1C14",marginBottom:6}}>Good to meet you, {userName}.</p>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontStyle:"italic",color:"#5A5040"}}>Where are you with your story right now?</p>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {[
                  {id:"idealab",label:"I have an idea I'm still developing",sub:"A spark, a character, a feeling. Something worth building."},
                  {id:"storybible",label:"I've developed my story but haven't started writing yet",sub:"Characters, world, outline. Ready to bring it in."},
                  {id:"manuscript",label:"I have a manuscript in progress",sub:"Already writing. Ready to go deeper."},
                  {id:"forge",label:"I just need to finish what I've started",sub:"The story is there. I need to get out of my own way."}
                ].map(opt=>(
                  <div key={opt.id} onClick={()=>setWelcomeRoute(opt.id)&&setWelcomeStep("response")||setWelcomeRoute(opt.id)||setWelcomeStep("response")} style={{background:welcomeRoute===opt.id?"#F5EEE4":"#F0EAE0",border:"1px solid "+(welcomeRoute===opt.id?"#A8884A":"#C8BC9A"),borderRadius:8,padding:"14px 16px",cursor:"pointer",transition:"all .2s"}}>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"#1E1C14",marginBottom:4}}>{opt.label}</div>
                    <div style={{fontSize:11,color:"#7A6E60",fontFamily:"'DM Sans',sans-serif"}}>{opt.sub}</div>
                  </div>
                ))}
              </div>
            </>}

            {welcomeStep==="response"&&welcomeRoute&&<>
              <div style={{borderTop:"1px solid #D8CEB0",paddingTop:24,marginBottom:24}}>
                {welcomeRoute==="idealab"&&<>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:300,color:"#3A3428",lineHeight:1.85,marginBottom:14}}>Good. Ideas are where everything starts. We don't need a full story yet, just the spark you already have.</p>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:300,color:"#3A3428",lineHeight:1.85,marginBottom:14}}>I'm going to take you to The Forge. There's a space in there called the Idea Lab, and that's where we'll begin. No structure required. Just pour everything out, whatever you know, whatever you're feeling, whatever questions you're sitting with.</p>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:300,color:"#3A3428",lineHeight:1.85}}>We'll build from there, {userName}.</p>
                </>}
                {welcomeRoute==="storybible"&&<>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:300,color:"#3A3428",lineHeight:1.85,marginBottom:14}}>You know your story. You just haven't put it on the page yet.</p>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:300,color:"#3A3428",lineHeight:1.85,marginBottom:14}}>Bring it into Forged Pen. Your Story Bible is where your characters, your world, and your plot live. You can upload documents, input things directly, or both. Once I can see your story, I can coach you.</p>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:300,color:"#3A3428",lineHeight:1.85}}>The Forge is waiting when you're ready, {userName}.</p>
                </>}
                {welcomeRoute==="manuscript"&&<>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:300,color:"#3A3428",lineHeight:1.85,marginBottom:14}}>You can't let your story go, and it refuses to let you go. The only choice is forward, for both of you. I'm here to help you do that.</p>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:300,color:"#3A3428",lineHeight:1.85}}>Bring your work into Forged Pen. You don't have to untangle everything today. We go one thread at a time. What do you need first, {userName}?</p>
                </>}
                {welcomeRoute==="forge"&&<>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:300,color:"#3A3428",lineHeight:1.85,marginBottom:14}}>You know your story. You know what needs to be written. The only thing standing between you and the page is getting there.</p>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:300,color:"#3A3428",lineHeight:1.85}}>The Forge is yours, {userName}. No detours, no setup, just you and your story. I'll be here when you need me and out of your way when you don't.</p>
                </>}
                <div onClick={()=>setWelcomeStep("profile-prompt")} style={{background:"#5A6B3A",borderRadius:7,padding:"11px",textAlign:"center",cursor:"pointer",marginTop:20}}><span style={{fontSize:13,fontWeight:500,color:"#F0EAE0",fontFamily:"'DM Sans',sans-serif"}}>Continue</span></div>
                <div style={{textAlign:"center",marginTop:12}}><span onClick={()=>setWelcomeStep("routing")} style={{fontSize:11,color:"#908878",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>That's not quite right</span></div>
              </div>
            </>}

            {welcomeStep==="profile-prompt"&&<>
              <div style={{borderTop:"1px solid #D8CEB0",paddingTop:24,marginBottom:24}}>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,color:"#1E1C14",lineHeight:1.75,marginBottom:10}}>One last thing before we dive in, {userName}.</p>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,fontWeight:300,color:"#3A3428",lineHeight:1.85,marginBottom:6}}>The more I know about how you think and work, the better I can coach you. Everything you share stays inside Forged Pen. It's never sold, never shared, never used to train AI. It's yours. It just helps me be more useful to you.</p>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,fontWeight:300,color:"#3A3428",lineHeight:1.85,marginBottom:20}}>Would you like to set up your profile now or as we go?</p>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  <div onClick={()=>{setWelcomeStep("profile");setProfileStep(1);}} style={{background:"#5A6B3A",borderRadius:7,padding:"11px",textAlign:"center",cursor:"pointer"}}><span style={{fontSize:13,fontWeight:500,color:"#F0EAE0",fontFamily:"'DM Sans',sans-serif"}}>Let's do it now</span></div>
                  <div onClick={()=>{routeToDestination();}} style={{background:"none",border:"1px solid #C8BC9A",borderRadius:7,padding:"11px",textAlign:"center",cursor:"pointer"}}><span style={{fontSize:13,color:"#5A5040",fontFamily:"'DM Sans',sans-serif"}}>As we go</span></div>
                </div>
              </div>
            </>}

            {welcomeStep==="profile"&&(()=>{
              const q=PROFILE_QUESTIONS[profileStep-1];
              const ans=profileAnswers[q.id];
              const hasAnswer=ans.selected.length>0;
              const isLast=profileStep===PROFILE_QUESTIONS.length;
              return <div style={{borderTop:"1px solid #D8CEB0",paddingTop:24}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
                  <div style={{fontSize:10,color:"#908878",fontFamily:"'DM Sans',sans-serif",letterSpacing:"0.1em",textTransform:"uppercase"}}>Question {profileStep} of {PROFILE_QUESTIONS.length}</div>
                  <div style={{display:"flex",gap:4}}>{PROFILE_QUESTIONS.map((_,i)=><div key={i} style={{width:20,height:3,borderRadius:2,background:i<profileStep?"#5A6B3A":"#D8CEB0"}}/>)}</div>
                </div>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"#1E1C14",lineHeight:1.75,marginBottom:16}}>{q.q}</p>
                {q.disclaimer&&<p style={{fontSize:11,color:"#908878",fontFamily:"'DM Sans',sans-serif",lineHeight:1.6,marginBottom:14,fontStyle:"italic"}}>{q.disclaimer}</p>}
                <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:16}}>
                  {q.opts.map(opt=>{
                    const sel=ans.selected.includes(opt);
                    return <div key={opt} onClick={()=>toggleProfileOption(q.id,opt)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:8,border:"1px solid "+(sel?"#5A6B3A":"#C8BC9A"),background:sel?"#EEF2E8":"#F0EAE0",cursor:"pointer",transition:"all .15s"}}>
                      <div style={{width:16,height:16,borderRadius:q.multi?3:"50%",border:"1px solid "+(sel?"#5A6B3A":"#C8BC9A"),background:sel?"#5A6B3A":"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {sel&&<div style={{width:8,height:8,borderRadius:q.multi?1:"50%",background:"#F0EAE0"}}/>}
                      </div>
                      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"#1E1C14",lineHeight:1.5}}>{opt}</span>
                    </div>;
                  })}
                </div>
                <div style={{marginBottom:16}}>
                  <p style={{fontSize:11,color:"#908878",fontFamily:"'DM Sans',sans-serif",marginBottom:6,fontStyle:"italic"}}>{q.addl}</p>
                  <textarea value={ans.text} onChange={e=>setProfileAnswers(prev=>({...prev,[q.id]:{...prev[q.id],text:e.target.value}}))} placeholder="Optional..." rows={2} style={{width:"100%",background:"transparent",border:"none",borderBottom:"1px solid #C8BC9A",padding:"6px 0",fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"#1E1C14",outline:"none",resize:"none",lineHeight:1.6}}/>
                </div>
                <div style={{display:"flex",gap:8}}>
                  <div onClick={()=>{
                    if(isLast){saveProfile(profileAnswers);routeToDestination();}
                    else setProfileStep(s=>s+1);
                  }} style={{flex:1,background:hasAnswer?"#5A6B3A":"#D8CEB0",borderRadius:7,padding:"10px",textAlign:"center",cursor:hasAnswer?"pointer":"default"}}>
                    <span style={{fontSize:13,fontWeight:500,color:hasAnswer?"#F0EAE0":"#908878",fontFamily:"'DM Sans',sans-serif"}}>{isLast?"Let's go":"Next"}</span>
                  </div>
                  <div onClick={()=>{
                    if(isLast){saveProfile(profileAnswers);routeToDestination();}
                    else setProfileStep(s=>s+1);
                  }} style={{background:"none",border:"1px solid #C8BC9A",borderRadius:7,padding:"10px 14px",cursor:"pointer"}}>
                    <span style={{fontSize:12,color:"#908878",fontFamily:"'DM Sans',sans-serif"}}>Skip</span>
                  </div>
                </div>
                <div style={{textAlign:"center",marginTop:10}}>
                  <span onClick={()=>routeToDestination()} style={{fontSize:11,color:"#908878",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>I'll come back to this</span>
                </div>
              </div>;
            })()}

            <div style={{textAlign:"center",marginTop:16,paddingTop:16,borderTop:"1px solid #D8CEB0"}}>
              <p style={{fontSize:12,color:"#9A8870",lineHeight:1.6,fontFamily:"'DM Sans',sans-serif"}}>Your content never trains AI.<br/>Your story is yours, always.</p>
            </div>
          </div>}

          {/* RETURNING USER */}
          {userName&&<div onClick={()=>{saveSession(null);setScreen("home")}} style={{textAlign:"center",cursor:"pointer",animation:"fi .6s ease-out"}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:600,color:"var(--accent)",marginBottom:6}}>Forged Pen</div>
            {project?<>
              {(()=>{
                const away = getTimeAway();
                const isLongAway = away && (away.includes("day") || (away.includes("hour") && parseInt(away)>=12));
                const nib = <svg width="10" height="14" viewBox="0 0 10 14" style={{verticalAlign:"middle",marginRight:6,opacity:0.5}}><path d="M5 0L6.2 5L5 12L3.8 5Z" fill="var(--accent)"/><circle cx="5" cy="4.5" r="0.8" fill="var(--accent)"/></svg>;
                return <>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"var(--text-primary)",lineHeight:1.8,marginBottom:12,marginTop:16}}>
                    {userName?`Welcome back, ${userName}. `:""}"{project.title}" is right where you left it.{away ? ` It's been ${away}.` : ""}
                  </p>
                  {project.where&&<p style={{fontSize:13,color:"var(--text-muted)",lineHeight:1.7,marginBottom:10,textAlign:"left"}}>{nib}{project.where}</p>}
                  {project.stuck&&project.stuck.trim()&&<p style={{fontSize:13,color:"var(--text-muted)",lineHeight:1.7,marginBottom:10,textAlign:"left"}}>{nib}<span style={{color:"var(--accent-80)",fontSize:10,textTransform:"uppercase",letterSpacing:"0.1em"}}>Focused on: </span>{project.stuck}</p>}
                  {sparks.length>0&&<p style={{fontSize:12,color:"var(--accent-80)",marginBottom:10,textAlign:"left"}}>{nib}{sparks.length} spark{sparks.length>1?"s":""} saved</p>}
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"var(--text-primary)",lineHeight:1.8,marginTop:20,marginBottom:24}}>{isLongAway?"No guilt. The project waited. So did I.":"Let's get to work."}</p>
                </>;
              })()}
            </>:<>
              <p style={{fontSize:12,color:"var(--text-dim)",marginTop:4,marginBottom:20}}>Your writing coach, not your ghostwriter</p>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"var(--text-primary)",lineHeight:1.8,marginBottom:24}}>Good to see you, {userName}. Ready to write?</p>
            </>}
            <p style={{fontSize:11,color:"var(--text-dim)"}}>Tap anywhere to begin</p>
          </div>}

        </div>
      </div>}

      {/* HEADER */}
      {screen!=="welcome"&&screen!=="container"&&<div style={{maxWidth:820,margin:"0 auto",padding:"20px 20px 0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:screen==="chat"?0:20}}>
          <div style={{cursor:"pointer"}} onClick={goHome}>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:600,color:"var(--accent)",letterSpacing:"0.04em"}}>Forged Pen</div>
            <div style={{fontSize:9,color:"var(--text-dim)",letterSpacing:"0.08em",marginTop:3}}>YOUR WRITING COACH, NOT YOUR GHOSTWRITER</div>
          </div>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <span onClick={()=>{const next=theme==="dark"?"light":"dark";setTheme(next);saveStored("tt-theme",next)}} style={{fontSize:16,cursor:"pointer",opacity:.4,padding:"2px 6px"}} title="Toggle theme">{theme==="dark"?"☀":"☾"}</span>
            <span onClick={handleLogout} style={{fontSize:10,color:"var(--text-faint)",cursor:"pointer",padding:"2px 6px"}} title="Sign out">Sign out</span>
            {screen==="chat"&&mode&&<span onClick={goHome} style={{fontSize:12,color:"var(--text-dim)",cursor:"pointer",padding:"4px 0"}}>Back</span>}
          </div>
        </div>
      </div>}

      {/* HOME */}
      {screen==="home"&&<div style={{maxWidth:820,margin:"0 auto",padding:"0 20px 20px",animation:"fu .5s ease-out"}}>
        {/* Quote */}
        <div style={{textAlign:"center",padding:"4px 20px 16px"}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:600,color:"var(--accent-b0)",lineHeight:1.7}}>"{tk.q}"</div>
          <div style={{fontSize:10,color:"var(--text-dim)",marginTop:5}}>{tk.a}</div>
        </div>

        {/* Finn's Read */}
        {(()=>{
          const route=getSmartRoute();
          return <div style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:10,padding:"18px 20px",marginBottom:12,position:"relative"}}>
            <div style={{position:"absolute",top:0,left:20,right:20,height:1,background:`linear-gradient(90deg,transparent,var(--accent-20),transparent)`}}/>
            {project&&<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <div style={{fontSize:12,color:"var(--text-muted)",letterSpacing:"0.08em",fontWeight:500}}>{project.title?.toUpperCase()}</div>
              {project.where&&!triageActive&&<div style={{fontSize:11,color:"var(--text-dim)"}}>{project.where}</div>}
            </div>}
            <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.25em",color:"var(--accent-80)",fontWeight:500,marginBottom:10}}>Finn's read</div>

            {/* Triage result replaces normal message */}
            {triageResult?<>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,color:"var(--text-primary)",lineHeight:1.7,marginBottom:18}}>{triageResult.message}</div>
              <div className="sb" onClick={()=>{const m=MODES.find(x=>x.id===triageResult.modeId);if(m)pick(m);setTriageResult(null);setTriageActive(false);setTriageInput("");}} style={{background:"var(--accent)",border:"none",borderRadius:8,padding:"11px 24px",textAlign:"center",cursor:"pointer",marginBottom:10}}>
                <span style={{fontSize:12,fontWeight:500,color:"var(--bg-deepest)",letterSpacing:"0.03em"}}>Let's go</span>
              </div>
              <div style={{textAlign:"center"}}><span onClick={()=>{setTriageResult(null);setTriageActive(false);setTriageInput("");}} style={{fontSize:11,color:"var(--text-dim)",cursor:"pointer"}}>That's not quite right</span></div>
            </>:triageActive?<>
              {/* Triage input */}
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"var(--text-muted)",lineHeight:1.7,marginBottom:14}}>What's going on right now?</div>
              <div style={{display:"flex",gap:8,alignItems:"flex-end",background:"var(--bg-write)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",marginBottom:10}}>
                <textarea
                  autoFocus
                  value={triageInput}
                  onChange={e=>setTriageInput(e.target.value)}
                  onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();handleTriage()}}}
                  placeholder="One sentence is enough."
                  rows={2}
                  style={{flex:1,background:"none",border:"none",outline:"none",color:"var(--text-primary)",fontFamily:"'Cormorant Garamond',serif",fontSize:15,lineHeight:1.6,resize:"none"}}
                />
                <button onClick={handleTriage} disabled={!triageInput.trim()||triageLoading} style={{width:30,height:30,borderRadius:6,background:"var(--accent)",border:"none",color:"var(--bg-deepest)",fontSize:14,fontWeight:700,cursor:"pointer",flexShrink:0,opacity:!triageInput.trim()||triageLoading?.3:1}}>
                  {triageLoading?"...":"\u2191"}
                </button>
              </div>
              <div style={{textAlign:"center"}}><span onClick={()=>{setTriageActive(false);setTriageInput("");}} style={{fontSize:11,color:"var(--text-dim)",cursor:"pointer"}}>Never mind</span></div>
            </>:<>
              {/* Normal Finn's Read */}
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,color:"var(--text-primary)",lineHeight:1.7,marginBottom:18}}>{route.msg}</div>
              {route.action?<>
                <div className="sb" onClick={()=>pick(MODES.find(m=>m.id===route.action))} style={{background:"var(--accent)",border:"none",borderRadius:8,padding:"11px 24px",textAlign:"center",cursor:"pointer",marginBottom:10}}>
                  <span style={{fontSize:12,fontWeight:500,color:"var(--bg-deepest)",letterSpacing:"0.03em"}}>{route.label}</span>
                </div>
                <div style={{textAlign:"center",display:"flex",justifyContent:"center",gap:20}}>
                  <span onClick={()=>setTriageActive(true)} style={{fontSize:11,color:"var(--text-dim)",cursor:"pointer"}}>I need something different today</span>
                  {route.clearable&&<span onClick={clearStuck} style={{fontSize:11,color:"var(--text-dim)",cursor:"pointer",borderLeft:"1px solid var(--border)",paddingLeft:20}}>Resolved</span>}
                </div>
              </>:<div className="sb" onClick={()=>setScreen("setup")} style={{background:"var(--accent)",border:"none",borderRadius:8,padding:"11px 24px",textAlign:"center",cursor:"pointer"}}>
                <span style={{fontSize:12,fontWeight:500,color:"var(--bg-deepest)",letterSpacing:"0.03em"}}>{route.label}</span>
              </div>}
            </>}
          </div>;
        })()}

        {/* The Forge — moved above Pulse */}
        <div className="card" onClick={initScenes} style={{marginBottom:4,display:"flex",alignItems:"center",gap:14,padding:"14px 18px",border:"1px solid var(--accent-20)"}}>
          <svg width="18" height="18" viewBox="0 0 18 18" style={{flexShrink:0}}><path d="M9 1l1.5 4.5L9 16 7.5 5.5z" fill="none" stroke="var(--accent)" strokeWidth="0.9"/><rect x="7" y="15" width="4" height="1.5" rx="0.5" fill="var(--accent)" opacity="0.3"/></svg>
          <div style={{flex:1}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,fontWeight:600,color:"var(--accent)"}}>The Forge</div>
            <div style={{fontSize:10,color:"var(--text-dim)",marginTop:2}}>{scenes.length>0?`${getTotalWords()} words across ${scenes.length} scene${scenes.length>1?"s":""}. Continue writing.`:"Open your writing space."}</div>
          </div>
          <span style={{color:"var(--text-dim)",fontSize:14}}>&#8594;</span>
        </div>
        {project&&project.chapters&&Array.isArray(project.chapters)&&project.chapters.some(c=>c.summary)&&getTotalWords()<100&&<div onClick={(e)=>{e.stopPropagation();importChaptersToForge()}} style={{textAlign:"center",padding:"6px 0 12px"}}><span style={{fontSize:11,color:"var(--accent-80)",cursor:"pointer"}}>Import {project.chapters.filter(c=>c.summary).length} chapters from Story Bible into The Forge</span></div>}

        {/* The Pulse */}
        {pulse&&<div onClick={()=>{if(pulse.sceneId){setActiveScene(pulse.sceneId);saveStored("tt-activescene",pulse.sceneId);initScenes()}else if(pulse.modeId){const m=MODES.find(x=>x.id===pulse.modeId);if(m)pick(m)}}} style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:8,padding:"12px 16px",marginBottom:12,cursor:"pointer"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
            <div style={{fontSize:9,textTransform:"uppercase",letterSpacing:"0.18em",color:"var(--accent-80)",fontWeight:500}}>The Pulse</div>
            <div style={{fontSize:9,color:"var(--text-dim)"}}>{pulse.mode}{pulse.scene?` / ${pulse.scene.substring(0,40)}`:""}</div>
          </div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-secondary)",lineHeight:1.6}}>{pulse.description}</div>
          {pulse.title&&<div style={{fontSize:10,color:"var(--text-dim)",marginTop:4}}>{pulse.title}</div>}
        </div>}

        {/* Dopamine Map */}
        {sparks.length>0&&<div onClick={()=>setScreen("sparkmap")} className="card" style={{padding:"12px 16px",marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{flex:1}}>
            <div style={{fontSize:9,textTransform:"uppercase",letterSpacing:"0.18em",color:"var(--accent-70)",fontWeight:500,marginBottom:5}}>Dopamine map</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-muted)",fontStyle:"italic"}}>"{(sparks[sparks.length-1]?.text||"").replace(/\*\*/g,"").replace(/\*/g,"").replace(/#{1,6}\s/g,"").substring(0,120)}"</div>
          </div>
          <div style={{fontSize:11,color:"var(--accent)",marginLeft:12,animation:"wp 4s ease-in-out infinite"}}>{sparks.length} spark{sparks.length>1?"s":""}</div>
        </div>}

        {/* Card Grid Row 1 */}
        <div id="fp-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}>
          <div className="card" onClick={()=>project?setScreen("project"):setScreen("setup")}>
            <svg width="16" height="16" viewBox="0 0 16 16" style={{marginBottom:8}}><rect x="3" y="1" width="10" height="13" rx="1.5" fill="none" stroke="#5A7A8A" strokeWidth="1"/><path d="M6 4h4M6 6.5h4M6 9h3" stroke="#5A7A8A" strokeWidth="0.6" opacity="0.5"/></svg>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,fontWeight:600,color:"var(--text-primary)"}}>Story Bible</div>
            <div style={{fontSize:9,color:"var(--text-dim)",marginTop:3}}>{project?project.title:"Your story lives here"}</div>
          </div>
          <div className="card" onClick={()=>setScreen("torch")}>
            <svg width="16" height="16" viewBox="0 0 16 16" style={{marginBottom:8}}><path d="M8 2L9.2 5.8L13 5.8L10 8L11 12L8 9.5L5 12L6 8L3 5.8L6.8 5.8Z" fill="none" stroke="var(--accent)" strokeWidth="0.8"/></svg>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,fontWeight:600,color:"var(--text-primary)"}}>Daily Spark</div>
            <div style={{fontSize:9,color:"var(--text-dim)",marginTop:3}}>Quote, prompt & card</div>
          </div>
          <div className="card" onClick={()=>pick(MODES.find(m=>m.id==="contain"))}>
            <svg width="16" height="16" viewBox="0 0 16 16" style={{marginBottom:8}}><circle cx="8" cy="8" r="5.5" fill="none" stroke="#908050" strokeWidth="0.9"/><path d="M5 8c1.5-2.5 4.5-2.5 6 0c-1.5 2.5-4.5 2.5-6 0z" fill="#908050" opacity="0.1"/></svg>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,fontWeight:600,color:"var(--text-primary)"}}>Contain</div>
            <div style={{fontSize:9,color:"var(--text-dim)",marginTop:3}}>Pull it all together</div>
          </div>
        </div>

        {/* Card Grid Row 2 */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}>
          <div className="card" onClick={()=>{setSubMenu("workshop");setScreen("submenu")}} style={{display:"flex",alignItems:"center",gap:10}}>
            <svg width="16" height="16" viewBox="0 0 16 16" style={{flexShrink:0}}><path d="M4 12L8 3L12 12" fill="none" stroke="var(--accent)" strokeWidth="1"/><circle cx="8" cy="9" r="1.2" fill="var(--accent)" opacity="0.25"/></svg>
            <div><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,fontWeight:600,color:"var(--accent)"}}>Coaching</div><div style={{fontSize:9,color:"var(--text-dim)"}}>Craft feedback</div></div>
          </div>
          <div className="card" onClick={()=>{setSubMenu("neuro");setScreen("submenu")}} style={{display:"flex",alignItems:"center",gap:10}}>
            <svg width="16" height="16" viewBox="0 0 16 16" style={{flexShrink:0}}><circle cx="5.5" cy="5.5" r="3" fill="none" stroke="#5A7A5C" strokeWidth="0.8"/><circle cx="10.5" cy="10.5" r="3" fill="none" stroke="#5A7A5C" strokeWidth="0.8"/></svg>
            <div><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,fontWeight:600,color:"#5A7A5C"}}>Neurodivergent</div><div style={{fontSize:9,color:"var(--text-dim)"}}>Brain support</div></div>
          </div>
        </div>

        {/* Card Grid Row 3 — Inferno removed, now lives in The Forge */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:20}}>
          <div className="card" onClick={()=>pick(MODES.find(m=>m.id==="simmer"))} style={{textAlign:"center",padding:"12px 8px"}}>
            <svg width="14" height="14" viewBox="0 0 14 14" style={{margin:"0 auto 6px",display:"block"}}><ellipse cx="7" cy="9.5" rx="4" ry="2.2" fill="none" stroke="#907860" strokeWidth="0.8"/><path d="M4 9.5c0-3 1.2-4.5 3-4.5s3 1.5 3 4.5" fill="none" stroke="#907860" strokeWidth="0.8"/></svg>
            <div style={{fontSize:10,fontWeight:500,color:"#907860"}}>Simmer</div>
          </div>
          <div className="card" onClick={()=>project?pick(MODES.find(m=>m.id==="rekindle")):null} style={{textAlign:"center",padding:"12px 8px",opacity:project?1:.4}}>
            <svg width="14" height="14" viewBox="0 0 14 14" style={{margin:"0 auto 6px",display:"block"}}><path d="M7 2L8.2 5L11 5L8.8 7L9.5 10L7 8.2L4.5 10L5.2 7L3 5L5.8 5Z" fill="none" stroke="var(--accent)" strokeWidth="0.7"/></svg>
            <div style={{fontSize:10,fontWeight:500,color:"var(--accent)"}}>Rekindle</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{textAlign:"center",padding:"4px 0 16px"}}>
          <div style={{fontSize:10,color:"var(--text-dim)",lineHeight:1.6}}>Forged Pen is a writing craft tool, not a mental health service or diagnostic tool.<br/>If you are in crisis, please reach out to a qualified professional.</div>
        </div>
      </div>}

      {/* DESKTOP RIGHT SIDEBAR */}
      {screen==="home"&&project&&<div className="right-sb" style={{position:"fixed",right:0,top:0,bottom:0,width:260,background:"var(--bg-dark)",borderLeft:"1px solid var(--border)",padding:"22px 18px",flexDirection:"column",overflowY:"auto"}}>

        {sidebarCtx?.toneWord?<>
          <div style={{textAlign:"center",marginBottom:16}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:600,color:"var(--accent)",letterSpacing:"0.1em",textTransform:"uppercase"}}>{sidebarCtx.toneWord}</div>
            <div style={{fontSize:10,color:"var(--text-faint)",textTransform:"uppercase",letterSpacing:"0.15em",marginTop:5}}>Scene Atmosphere</div>
          </div>
          <div style={{height:1,background:"var(--border)",marginBottom:16}}/>
        </>:null}

        {sidebarCtx?.sensoryAnchors?.length>0?<>
          <div style={{marginBottom:16}}>
            <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--text-muted)",fontWeight:500,marginBottom:10}}>Sensory Anchors</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {sidebarCtx.sensoryAnchors.map((a,i)=><div key={i} style={{display:"flex",alignItems:"flex-start",gap:8}}>
                <svg width="14" height="14" viewBox="0 0 16 16" style={{flexShrink:0,marginTop:2}}><circle cx="8" cy="8" r="3" fill="none" stroke="var(--accent)" strokeWidth="0.6" opacity="0.5"/></svg>
                <div><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-secondary)",lineHeight:1.5}}>{a.detail}</div><div style={{fontSize:10,color:"var(--text-dim)",marginTop:1,textTransform:"uppercase",letterSpacing:"0.08em"}}>{a.sense}</div></div>
              </div>)}
            </div>
          </div>
          <div style={{height:1,background:"var(--border)",marginBottom:16}}/>
        </>:null}

        {pulse?<div style={{marginBottom:16,cursor:"pointer"}} onClick={()=>{if(pulse.sceneId){setActiveScene(pulse.sceneId);saveStored("tt-activescene",pulse.sceneId);initScenes()}else if(pulse.modeId){const m=MODES.find(x=>x.id===pulse.modeId);if(m)pick(m)}}}>
          <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--accent-80)",fontWeight:500,marginBottom:8}}>The Pulse</div>
          <div style={{fontSize:11,color:"var(--text-muted)",marginBottom:6,letterSpacing:"0.03em"}}>{pulse.mode}{pulse.scene?` / ${pulse.scene.substring(0,40)}`:""}</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-primary)",lineHeight:1.65,marginBottom:8}}>{pulse.description}</div>
          {(()=>{
            const ctxFresh=sidebarCtx?.mode==="Story Bible"||(sidebarCtx?.time&&lastSession?.time&&sidebarCtx.time>new Date(lastSession.time).getTime()&&(Date.now()-sidebarCtx.time)/(1000*60*60)<4);
            return ctxFresh&&sidebarCtx?.hook?<div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--accent)",lineHeight:1.65,fontStyle:"italic",marginBottom:8}}>"{sidebarCtx.hook}"</div>:null;
          })()}
          <div style={{fontSize:10,color:"var(--accent-60)",marginTop:4}}>Tap to return &#8594;</div>
        </div>:<div style={{marginBottom:16}}>
          <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--accent-80)",fontWeight:500,marginBottom:8}}>The Pulse</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-dim)",fontStyle:"italic"}}>Start a session to light it up</div>
        </div>}
        <div style={{height:1,background:"var(--border)",marginBottom:16}}/>

        {(()=>{
          const ctxFresh=sidebarCtx?.mode==="Story Bible"||(sidebarCtx?.time&&lastSession?.time&&sidebarCtx.time>new Date(lastSession.time).getTime()&&(Date.now()-sidebarCtx.time)/(1000*60*60)<4);
          if(ctxFresh&&sidebarCtx?.nextBeat) return <>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--text-muted)",fontWeight:500,marginBottom:8}}>Next Beat</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-primary)",lineHeight:1.65}}>{sidebarCtx.nextBeat}</div>
              {sidebarCtx.emotionalGoal&&<div style={{fontSize:11,color:"var(--text-muted)",marginTop:8,fontStyle:"italic"}}>Emotional goal: {sidebarCtx.emotionalGoal}</div>}
            </div>
            <div style={{height:1,background:"var(--border)",marginBottom:16}}/>
          </>;
          if(project.where&&project.where.trim()&&project.where.trim().length<80) return <>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--text-muted)",fontWeight:500,marginBottom:8}}>Next Beat</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-primary)",lineHeight:1.65}}>{project.where.trim()}</div>
            </div>
            <div style={{height:1,background:"var(--border)",marginBottom:16}}/>
          </>;
          return null;
        })()}

        {sparks.length>0&&<>
          <div style={{marginBottom:16,cursor:"pointer"}} onClick={()=>setScreen("sparkmap")}>
            <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--accent-60)",fontWeight:500,marginBottom:8}}>Latest Spark</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-muted)",fontStyle:"italic",lineHeight:1.6}}>"{(sparks[sparks.length-1]?.text||"").replace(/\*\*/g,"").replace(/\*/g,"").replace(/#{1,6}\s/g,"").substring(0,100)}"</div>
            <div style={{fontSize:10,color:"var(--text-dim)",marginTop:6,animation:"wp 4s ease-in-out infinite"}}>{sparks.length} spark{sparks.length>1?"s":""}</div>
          </div>
          <div style={{height:1,background:"var(--border)",marginBottom:16}}/>
        </>}

        <div style={{marginBottom:16}}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div><div style={{fontSize:20,color:"var(--text-primary)",fontWeight:500}}>{getTotalWords().toLocaleString()}</div><div style={{fontSize:10,color:"var(--text-dim)",marginTop:2}}>words</div></div>
            <div style={{textAlign:"right"}}><div style={{fontSize:20,color:"var(--text-primary)",fontWeight:500}}>{scenes.length}</div><div style={{fontSize:10,color:"var(--text-dim)",marginTop:2}}>scenes</div></div>
          </div>
        </div>
        <div style={{height:1,background:"var(--border)",marginBottom:16}}/>

        <div style={{fontSize:12,color:"var(--text-muted)",fontStyle:"italic",lineHeight:1.5,marginBottom:16,letterSpacing:"0.01em"}}>{project.genre}</div>

        <div style={{marginTop:"auto",paddingTop:16,borderTop:"1px solid var(--border)"}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-dim)",fontStyle:"italic",lineHeight:1.7}}>Before you close, leave a sentence half-finished. Your brain will pull you back to it.</div>
          <div style={{fontSize:10,color:"var(--text-dim)",marginTop:5,opacity:.6,letterSpacing:"0.05em"}}>The Zeigarnik Effect</div>
        </div>
      </div>}

      {/* SUBMENU */}
      {screen==="submenu"&&<div style={{maxWidth:820,margin:"0 auto",padding:"0 20px 20px",animation:"fu .4s ease-out"}}>
        <div onClick={goHome} style={{fontSize:12,color:"var(--text-dim)",cursor:"pointer",marginBottom:16}}>Back</div>
        {subMenu==="workshop"&&<>
          <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.25em",color:"var(--accent-90)",fontWeight:500,marginBottom:8}}>Coaching</div>
          <p style={{fontSize:13,color:"var(--text-muted)",marginBottom:20,lineHeight:1.6}}>Bring your work. Finn will find what's strong, name what's off, and help you see what you missed.</p>
          {MODES.filter(m=>m.cat==="craft"||m.cat==="intuition").map(m=>{
            const saved=loadStored("tt-chat-"+m.id);
            const lastMsg=saved&&saved.length>1?saved.filter(x=>x.role==="user").pop()?.content:"";
            return <div key={m.id} className="card" onClick={()=>pick(m)} style={{marginBottom:8,padding:"14px 16px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,fontWeight:600,color:"var(--text-primary)"}}>{m.label}</div>
                <div style={{fontSize:10,color:"var(--text-dim)"}}>{m.sub}</div>
              </div>
              {lastMsg&&<div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:"var(--text-dim)",marginTop:6,lineHeight:1.5,fontStyle:"italic"}}>Last: "{lastMsg.substring(0,80)}{lastMsg.length>80?"...":""}"</div>}
            </div>;
          })}
        </>}
        {subMenu==="neuro"&&<>
          <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.25em",color:"#5A7A5C",fontWeight:500,marginBottom:8}}>Neurodivergent Support</div>
          <p style={{fontSize:13,color:"var(--text-muted)",marginBottom:20,lineHeight:1.6}}>For when your brain is the obstacle, not your story.</p>
          {MODES.filter(m=>m.cat==="neuro").map(m=>{
            const saved=loadStored("tt-chat-"+m.id);
            const lastMsg=saved&&saved.length>1?saved.filter(x=>x.role==="user").pop()?.content:"";
            return <div key={m.id} className="card" onClick={()=>pick(m)} style={{marginBottom:8,padding:"14px 16px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,fontWeight:600,color:"var(--text-primary)"}}>{m.label}</div>
                <div style={{fontSize:10,color:"var(--text-dim)"}}>{m.sub}</div>
              </div>
              {lastMsg&&<div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:"var(--text-dim)",marginTop:6,lineHeight:1.5,fontStyle:"italic"}}>Last: "{lastMsg.substring(0,80)}{lastMsg.length>80?"...":""}"</div>}
            </div>;
          })}
        </>}
      </div>}

      {/* STORY BIBLE SETUP */}
      {screen==="setup"&&<div style={{maxWidth:820,margin:"0 auto",padding:"0 20px 20px",animation:"fu .5s ease-out"}}>
        <div onClick={goHome} style={{fontSize:12,color:"var(--text-dim)",cursor:"pointer",marginBottom:16}}>Back</div>
        <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.25em",color:"#5A7A8A",fontWeight:500,marginBottom:8}}>Story Bible</div>
        <p style={{fontSize:13,color:"var(--text-muted)",marginBottom:16,lineHeight:1.6}}>Fill in what you can. Skip what you can't. Come back later. None of this has to be perfect.</p>
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}><BibTab id="overview" label="Overview" active={bibTab==="overview"} onClick={setBibTab}/><BibTab id="characters" label="Characters" active={bibTab==="characters"} onClick={setBibTab}/><BibTab id="world" label="World" active={bibTab==="world"} onClick={setBibTab}/><BibTab id="chapters" label="Chapters" active={bibTab==="chapters"} onClick={setBibTab}/><BibTab id="current" label="Current Chapter" active={bibTab==="current"} onClick={setBibTab}/></div>

        {bibTab==="overview"&&<>
          <FormField label="Project title" k="title" ph="My Novel" value={pForm.title} onChange={updateField}/>
          <FormField label="Genre" k="genre" ph="Contemporary fiction, fantasy, memoir..." value={pForm.genre} onChange={updateField}/>
          <FormField label="What is your story about?" k="synopsis" ph="One sentence is enough to start..." value={pForm.synopsis} onChange={updateField} multi/>

          {!bibExpanded&&<div onClick={()=>setBibExpanded(true)} style={{background:"none",border:"1px dashed var(--border-mid)",borderRadius:8,padding:"10px 16px",color:"var(--text-dim)",fontSize:12,cursor:"pointer",textAlign:"left",marginBottom:14,fontFamily:"'DM Sans',sans-serif"}}>
            <span style={{color:"var(--accent)",marginRight:8}}>+</span>Add more detail — characters, world, where you are, what you're focused on
          </div>}

          {bibExpanded&&<>
            <FormField label="Where are you right now?" k="where" ph="Chapter 3, the confrontation scene" value={pForm.where} onChange={updateField}/>

            <div style={{marginBottom:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
                <label style={{fontSize:12,color:"var(--text-muted)",fontFamily:"'DM Sans',sans-serif"}}>What are you focused on right now?</label>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  {project?.focusedTimestamp&&<span style={{fontSize:9,color:"var(--text-dim)",fontFamily:"'DM Sans',sans-serif"}}>Updated {project.focusedTimestamp}</span>}
                  {pForm.stuck&&<span onClick={()=>updateField("stuck","")} style={{fontSize:9,color:"var(--text-dim)",cursor:"pointer",border:"1px solid var(--border)",borderRadius:4,padding:"1px 7px",fontFamily:"'DM Sans',sans-serif"}}>Clear</span>}
                  <span style={{fontSize:9,color:(pForm.stuck||"").length>90?"#B06848":"var(--text-dim)",fontFamily:"'DM Sans',sans-serif"}}>{(pForm.stuck||"").length} / 100</span>
                </div>
              </div>
              <input className="fi" maxLength={100} placeholder="One sentence. What thread is live right now?" value={pForm.stuck||""} onChange={e=>updateField("stuck",e.target.value)} style={{width:"100%"}}/>
            </div>

            <FormField label="What excites you most about this project?" k="excites" ph="The slow burn, the world, the voice..." value={pForm.excites} onChange={updateField} multi/>

            <div onClick={()=>setBibExpanded(false)} style={{fontSize:11,color:"var(--text-dim)",cursor:"pointer",textAlign:"center",marginBottom:8,fontFamily:"'DM Sans',sans-serif"}}>Show less</div>
          </>}
        </>}

        {bibTab==="characters"&&<><FormField label="Protagonist" k="protagonist" ph="Name, age, core trait, internal conflict, arc..." value={pForm.protagonist} onChange={updateField} multi/><FormField label="Supporting Characters" k="supporting" ph="One per paragraph works best..." value={pForm.supporting} onChange={updateField} multi/><FormField label="Antagonist" k="antagonist" ph="Person, force, or system..." value={pForm.antagonist} onChange={updateField} multi/></>}
        {bibTab==="world"&&<><WorldField label="Core Setting" helper="When and where does this story take place?" example="Northern Michigan, late summer..." k="worldSetting" value={pForm.worldSetting} onChange={updateField}/><WorldField label="World Rules" helper="What can and cannot happen here?" example="Magic exists but only in children..." k="worldRules" value={pForm.worldRules} onChange={updateField}/><WorldField label="Beliefs vs. Reality" helper="What do characters assume that isn't true?" example="The town believes the fires are natural..." k="worldBeliefs" value={pForm.worldBeliefs} onChange={updateField}/><WorldField label="What Makes This World Dangerous" helper="What creates real stakes?" example="If Emma uses too much magic..." k="worldDanger" value={pForm.worldDanger} onChange={updateField}/><WorldField label="Tone" helper="What does this world feel like?" example="Warm but uneasy..." k="worldTone" value={pForm.worldTone} onChange={updateField}/></>}
        {bibTab==="chapters"&&<><p style={{fontSize:12,color:"var(--text-muted)",marginBottom:14,lineHeight:1.5}}>One field per chapter. Keep summaries short.</p>{pForm.chapters.map((ch,idx)=><div key={idx} style={{marginBottom:14}}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:5}}><label style={{fontSize:13,color:"var(--accent)",fontWeight:600}}>Chapter {ch.num}</label>{pForm.chapters.length>1&&<span onClick={()=>removeChapter(idx)} style={{fontSize:11,color:"var(--text-dim)",cursor:"pointer"}}>Remove</span>}</div><textarea className="fi" rows={2} placeholder={`What happens in chapter ${ch.num}...`} value={ch.summary} onChange={e=>updateChapter(idx,e.target.value)} style={{resize:"vertical",fontSize:13}}/></div>)}<Btn onClick={addChapter} s={{width:"100%",background:"none",borderStyle:"dashed",borderColor:"var(--border-mid)",color:"var(--text-muted)",marginBottom:8}}>+ Add Chapter</Btn></>}
        {bibTab==="current"&&<><p style={{fontSize:12,color:"var(--text-muted)",marginBottom:8,lineHeight:1.5}}>Paste the chapter you're currently working on. Finn will reference this text directly.</p><FormField label="Current chapter text" k="currentChapter" ph="Paste your current chapter here..." value={pForm.currentChapter} onChange={updateField} multi/></>}
        <Btn onClick={handleSetup} s={{width:"100%",background:"var(--accent-20)",borderColor:"var(--accent-40)",fontWeight:600,marginTop:8}}>{project?"Update":"Save"} Story Bible</Btn>
      </div>}

      {/* STORY BIBLE VIEW */}
      {screen==="project"&&project&&<div style={{maxWidth:820,margin:"0 auto",padding:"0 20px 20px",animation:"fu .5s ease-out"}}>
        <div onClick={goHome} style={{fontSize:12,color:"var(--text-dim)",cursor:"pointer",marginBottom:16}}>Back</div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.25em",color:"#5A7A8A",fontWeight:500}}>Story Bible</div>
          <div style={{display:"flex",gap:10}}>
            <Btn onClick={()=>pick(MODES.find(m=>m.id==="rekindle"))} s={{background:"var(--accent-15)",fontSize:11,padding:"6px 14px"}}>Rekindle</Btn>
            <Btn onClick={()=>{const pf={...project};if(!Array.isArray(pf.chapters))pf.chapters=pf.chapters?[{num:1,summary:pf.chapters}]:[{num:1,summary:""}];setPForm(pf);setScreen("setup")}} s={{fontSize:11,padding:"6px 14px"}}>Edit</Btn>
          </div>
        </div>
        <div style={{marginBottom:16,position:"relative"}}>
          <input className="fi" placeholder="Search your Story Bible..." value={bibleSearch} onChange={e=>setBibleSearch(e.target.value)} style={{width:"100%",paddingLeft:32}}/>
          <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",fontSize:12,color:"var(--text-dim)"}}>&#128269;</span>
          {bibleSearch&&<span onClick={()=>setBibleSearch("")} style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",fontSize:11,color:"var(--text-dim)",cursor:"pointer"}}>&#10005;</span>}
        </div>
        {!bibleSearch&&<div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
          <BibTab id="overview" label="Overview" active={bibViewTab==="overview"} onClick={setBibViewTab}/>
          <BibTab id="characters" label="Characters" active={bibViewTab==="characters"} onClick={setBibViewTab}/>
          <BibTab id="world" label="World" active={bibViewTab==="world"} onClick={setBibViewTab}/>
          <BibTab id="chapters" label="Chapters" active={bibViewTab==="chapters"} onClick={setBibViewTab}/>
        </div>}
        {bibleSearch&&<div>
          {(()=>{
            const allFields=[["Genre",project.genre,false],["Synopsis",project.synopsis,true],["Protagonist",project.protagonist,true],["Supporting Characters",project.supporting,true],["Antagonist",project.antagonist,true],["Core Setting",project.worldSetting,true],["World Rules",project.worldRules,true],["Beliefs vs Reality",project.worldBeliefs,true],["What Makes It Dangerous",project.worldDanger,true],["Tone",project.worldTone,false],["Where you are",project.where,false],["Focused on",project.stuck,false],["What excites you",project.excites,true]];
            const matches=allFields.filter(([l,v])=>v&&(l.toLowerCase().includes(bibleSearch.toLowerCase())||v.toLowerCase().includes(bibleSearch.toLowerCase())));
            if(matches.length===0)return <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-dim)",fontStyle:"italic"}}>Nothing found for "{bibleSearch}"</p>;
            return matches.map(([l,v,multi])=><ReadField key={l} label={l} value={v} multi={multi}/>);
          })()}
        </div>}
        {!bibleSearch&&bibViewTab==="overview"&&<div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:500,color:"var(--text-primary)",marginBottom:16}}>{project.title||"Untitled"}</div>
          <ReadField label="Genre" value={project.genre}/>
          <ReadField label="What this story is about" value={project.synopsis} multi/>
          <ReadField label="Where you are right now" value={project.where}/>
          {project.stuck&&<div style={{marginBottom:14}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
              <label style={{fontSize:12,color:"var(--text-muted)",fontFamily:"'DM Sans',sans-serif"}}>Focused on right now</label>
              {project.focusedTimestamp&&<span style={{fontSize:9,color:"var(--text-dim)",fontFamily:"'DM Sans',sans-serif"}}>Updated {project.focusedTimestamp}</span>}
            </div>
            <div style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:8,padding:"10px 14px",fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"var(--text-primary)",lineHeight:1.7}}>{project.stuck}</div>
          </div>}
          <ReadField label="What excites you most" value={project.excites} multi/>
        </div>}
        {!bibleSearch&&bibViewTab==="characters"&&<div>
          <ReadField label="Protagonist" value={project.protagonist} multi/>
          <ReadField label="Supporting Characters" value={project.supporting} multi/>
          <ReadField label="Antagonist" value={project.antagonist} multi/>
          {!project.protagonist&&!project.supporting&&!project.antagonist&&<p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-dim)",fontStyle:"italic"}}>No characters added yet. Tap Edit to add them.</p>}
        </div>}
        {!bibleSearch&&bibViewTab==="world"&&<div>
          <ReadField label="Core Setting" value={project.worldSetting} multi/>
          <ReadField label="World Rules" value={project.worldRules} multi/>
          <ReadField label="Beliefs vs Reality" value={project.worldBeliefs} multi/>
          <ReadField label="What Makes This World Dangerous" value={project.worldDanger} multi/>
          <ReadField label="Tone" value={project.worldTone}/>
          {!project.worldSetting&&!project.worldRules&&!project.worldTone&&<p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-dim)",fontStyle:"italic"}}>No world details added yet. Tap Edit to add them.</p>}
        </div>}
        {!bibleSearch&&bibViewTab==="chapters"&&<div>
          {project.chapters&&Array.isArray(project.chapters)&&project.chapters.some(c=>c.summary)?project.chapters.filter(c=>c.summary).map((c,i)=><div key={i} style={{marginBottom:12}}>
            <div style={{fontSize:12,color:"var(--accent)",fontWeight:600,fontFamily:"'DM Sans',sans-serif",marginBottom:4}}>Chapter {c.num}</div>
            <div style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:8,padding:"10px 14px",fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-primary)",lineHeight:1.7}}>{c.summary}</div>
          </div>):<p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-dim)",fontStyle:"italic"}}>No chapters added yet. Tap Edit to add them.</p>}
        </div>}
      </div>}

      {/* DOPAMINE MAP */}
      {screen==="sparkmap"&&<div style={{maxWidth:820,margin:"0 auto",padding:"0 20px 20px",animation:"fu .5s ease-out"}}>
        <div onClick={goHome} style={{fontSize:12,color:"var(--text-dim)",cursor:"pointer",marginBottom:16}}>Back</div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:24}}>
          <div>
            <div style={{fontSize:9,textTransform:"uppercase",letterSpacing:"0.25em",color:"var(--accent-80)",fontWeight:500,marginBottom:6}}>Dopamine Map</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:"var(--text-primary)",fontWeight:500}}>Proof of Fire</div>
            <div style={{fontSize:12,color:"var(--text-dim)",marginTop:4,lineHeight:1.5}}>The moments your brain saw clearly.</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:28,color:"var(--accent)",fontWeight:600,animation:"wp 4s ease-in-out infinite"}}>{sparks.length}</div>
            <div style={{fontSize:10,color:"var(--text-dim)"}}>spark{sparks.length>1?"s":""}</div>
          </div>
        </div>
        <div style={{position:"relative",paddingLeft:28}}>
          <div style={{position:"absolute",left:8,top:0,bottom:0,width:1,background:`linear-gradient(180deg,var(--accent-60),var(--accent-20),var(--accent-08))`}}/>
          {(()=>{
            const labelToId={"Rekindle":"rekindle","Contain the Flames":"contain","Character Deep Dive":"character","Scene Surgery":"scene","Diagnose My Block":"diagnose","Craft Challenge":"craft","Plot Compass":"plot","Voice & Style":"voice","Micro-Mode":"micro","Perfectionism Bypass":"perfectionism","Through the Smoke":"smoke","Instinct Check":"instinct","Simmer Mode":"simmer","The Forge":"forge","The Inferno":"inferno","Session":null};
            return [...sparks].reverse().map((s,i)=>{
              const cleanText=(s.text||"").replace(/\*\*/g,"").replace(/\*/g,"").replace(/#{1,6}\s/g,"");
              const resolvedModeId=s.modeId||(s.mode&&labelToId[s.mode]!==undefined?labelToId[s.mode]:null);
              const canNav=resolvedModeId&&MODES.find(m=>m.id===resolvedModeId);
              return <div key={i} style={{position:"relative",marginBottom:20,animation:"fu .5s ease-out",animationDelay:`${i*0.08}s`,animationFillMode:"both"}}>
                <div style={{position:"absolute",left:-24,top:6,width:10,height:10,borderRadius:"50%",background:"var(--accent)",opacity:Math.max(1-i*0.08,0.3)}}/>
                <div onClick={canNav?()=>{const m=MODES.find(x=>x.id===resolvedModeId);if(m)pick(m);}:undefined} style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:10,padding:"16px 18px",cursor:canNav?"pointer":"default",transition:"border-color .2s"}} className={canNav?"card":""}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                    <div style={{fontSize:9,color:"var(--accent-80)",textTransform:"uppercase",letterSpacing:"0.15em"}}>{s.mode||"Session"}</div>
                    <div style={{display:"flex",gap:10,alignItems:"center"}}>
                      <div style={{fontSize:9,color:"var(--text-dim)"}}>{s.date}</div>
                      {canNav&&<div style={{fontSize:9,color:"var(--accent-60)"}}>Return &#8594;</div>}
                    </div>
                  </div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"var(--text-primary)",lineHeight:1.7,fontStyle:"italic"}}>"{cleanText}"</div>
                </div>
              </div>;
            });
          })()}
        </div>
        <div style={{textAlign:"center",padding:"20px 0 32px"}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:600,color:"var(--accent-90)",lineHeight:1.6}}>The fire was here.<br/>These sparks prove it.</div>
        </div>
      </div>}

      {/* DAILY SPARK */}
      {screen==="torch"&&<div style={{maxWidth:820,margin:"0 auto",padding:"0 20px 20px",animation:"fu .5s ease-out"}}>
        <div onClick={goHome} style={{fontSize:12,color:"var(--text-dim)",cursor:"pointer",marginBottom:16}}>Back</div>
        <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.25em",color:"var(--accent-70)",fontWeight:500,marginBottom:16}}>Daily Spark</div>
        <div style={{marginBottom:24,textAlign:"center"}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:500,color:"var(--accent-90)",lineHeight:1.7}}>"{tk.q}"</div>
          <div style={{fontSize:10,color:"var(--text-dim)",marginTop:8}}>{tk.a}</div>
        </div>
        <div style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:10,padding:"14px 18px",marginBottom:16}}>
          <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.15em",color:"var(--accent-70)",fontWeight:500,marginBottom:6}}>Today's Prompt</div>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"var(--text-primary)",lineHeight:1.7,fontStyle:"italic"}}>{tk.p}</p>
        </div>
        <div className="cp" onClick={()=>setFlipped(!flipped)} style={{background:flipped?"var(--bg-card)":"linear-gradient(135deg,var(--bg-card-alt),var(--bg-card))",border:"1px solid "+(flipped?"var(--border)":"var(--border-mid)"),borderRadius:10,padding:18,textAlign:"center",cursor:"pointer"}}>
          {!flipped?<div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"#9A8AB0",fontWeight:600}}>Pull Today's Card</div>
          :<div style={{textAlign:"left",animation:"fi .6s ease-out"}}>
            <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.15em",color:"#7A6EA0",fontWeight:500,marginBottom:6}}>Today's Card</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,color:"var(--text-primary)",fontWeight:600,marginBottom:8}}>{tk.cn}</div>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-muted)",lineHeight:1.7,marginBottom:12}}>{tk.cl}</p>
            <div style={{background:"var(--bg-base)",borderRadius:8,padding:"10px 12px"}}>
              <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--accent-70)",fontWeight:500,marginBottom:4}}>Micro-Challenge</div>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-primary)",lineHeight:1.6}}>{tk.cx}</p>
            </div>
          </div>}
        </div>
      </div>}

      {/* THE FORGE - WRITING CONTAINER */}
      {screen==="container"&&(()=>{
        const currentScene=scenes.find(s=>s.id===activeScene);
        const chapters=[...new Set(scenes.map(s=>s.chapter))].sort((a,b)=>a-b);
        return <div style={{height:"100vh",display:"grid",gridTemplateColumns:finnOpen?`180px 1fr ${finnWidths[finnPanelSize]}px`:"180px 1fr",transition:"grid-template-columns .3s"}}>
          {/* Left: Scene Nav */}
          <div style={{background:"var(--bg-dark)",borderRight:"1px solid var(--border)",padding:"16px 12px",display:"flex",flexDirection:"column",overflowY:"auto"}}>
            <div style={{marginBottom:14}}>
              <div onClick={goHome} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:600,color:"var(--accent)",cursor:"pointer"}}>Forged Pen</div>
              <div style={{fontSize:8,color:"var(--text-dim)",marginTop:3}}>THE FORGE</div>
            </div>

            {/* Three-mode toggle */}
            <div style={{display:"flex",gap:2,background:"var(--bg-deepest)",borderRadius:8,padding:3,marginBottom:14}}>
              {[["manuscript","Manuscript","var(--accent)"],["idealab","Idea Lab","#9A8AB0"],["inferno","Inferno","#C07848"]].map(([m,label,color])=>(
                <div key={m} onClick={()=>setForgeMode(m)} style={{flex:1,padding:"8px 4px",borderRadius:5,background:forgeMode===m?"var(--bg-card-alt)":"transparent",color:forgeMode===m?color:"var(--text-dim)",fontSize:11,textAlign:"center",cursor:"pointer",transition:"all .2s",fontFamily:"'DM Sans',sans-serif",fontWeight:forgeMode===m?500:400}}>
                  {label}
                </div>
              ))}
            </div>

            {/* Manuscript nav */}
            {forgeMode==="manuscript"&&<>
              <div onClick={()=>{if(scenes.length>0){const savedActive=loadStored("tt-activescene");const found=savedActive&&scenes.find(s=>s.id===savedActive);setActiveScene(found?savedActive:scenes.reduce((a,b)=>b.lastEdited>a.lastEdited?b:a).id)}}} style={{background:"var(--accent)",borderRadius:8,padding:"9px 14px",textAlign:"center",cursor:"pointer",marginBottom:14}}>
                <span style={{fontSize:11,fontWeight:500,color:"var(--bg-deepest)"}}>Continue writing</span>
              </div>
              <div style={{fontSize:9,textTransform:"uppercase",letterSpacing:"0.18em",color:"var(--text-dim)",fontWeight:500,marginBottom:8}}>Chapters</div>
              <div style={{flex:1,overflowY:"auto"}}>
                {chapters.map(ch=>{
                  const chScenes=scenes.filter(s=>s.chapter===ch).sort((a,b)=>a.scene-b.scene);
                  return <div key={ch} style={{marginBottom:10}}>
                    <div style={{fontSize:11,color:"var(--text-muted)",fontWeight:500,padding:"4px 0",marginBottom:2}}>Chapter {ch}</div>
                    {chScenes.map(s=>{
                      const unresolvedMD=(s.modeData||[]).filter(m=>!m.resolved).length;
                      return <div key={s.id} onClick={()=>{setActiveScene(s.id);saveStored("tt-activescene",s.id)}} style={{padding:"6px 12px 6px 18px",borderRadius:5,cursor:"pointer",fontSize:11,color:s.id===activeScene?"var(--text-primary)":"var(--text-dim)",background:s.id===activeScene?"var(--accent-0a)":"transparent",borderLeft:s.id===activeScene?"2px solid var(--accent-60)":"2px solid transparent",transition:"all .2s",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <span>{s.title||`Scene ${s.scene}`}<span style={{fontSize:9,color:"var(--text-dim)",marginLeft:6}}>{getWordCount(s.text)}</span></span>
                        {unresolvedMD>0&&<span style={{fontSize:9,background:"var(--accent-40)",color:"var(--accent)",borderRadius:10,padding:"1px 5px",flexShrink:0}}>{unresolvedMD}</span>}
                      </div>;
                    })}
                    <div onClick={()=>addScene(ch)} style={{padding:"4px 12px 4px 18px",fontSize:10,color:"var(--text-dim)",cursor:"pointer",fontStyle:"italic"}}>+ scene</div>
                  </div>;
                })}
                <div onClick={addChapterWithScene} style={{fontSize:10,color:"var(--text-dim)",cursor:"pointer",fontStyle:"italic",padding:"4px 0"}}>+ chapter</div>
              </div>
              <div style={{borderTop:"1px solid var(--border)",paddingTop:10,marginTop:"auto"}}>
                <div style={{fontSize:9,color:"var(--text-dim)"}}>{getTotalWords()} words total</div>
                <div style={{fontSize:9,color:"var(--text-dim)",marginTop:3}}>Auto-saving</div>
                <label style={{fontSize:11,color:"var(--accent)",cursor:"pointer",marginTop:10,display:"block",background:"var(--bg-card-alt)",border:"1px solid var(--border)",borderRadius:6,padding:"6px 10px",textAlign:"center"}}>
                  Upload .txt
                  <input type="file" accept=".txt" style={{display:"none"}} onChange={e=>{
                    const file=e.target.files?.[0];
                    if(!file)return;
                    const reader=new FileReader();
                    reader.onload=ev=>{
                      const text=ev.target.result;
                      const chapterPattern=/^(chapter\s+\d+|ch\.?\s*\d+|\d+\.)/im;
                      const lines=text.split("\n");
                      const chapterBreaks=[];
                      let currentLines=[];
                      let chNum=0;
                      lines.forEach(line=>{
                        if(chapterPattern.test(line.trim())&&currentLines.join("").trim().length>50){
                          chapterBreaks.push({num:++chNum,text:currentLines.join("\n").trim()});
                          currentLines=[line];
                        } else { currentLines.push(line); }
                      });
                      if(currentLines.join("").trim()){chapterBreaks.push({num:++chNum,text:currentLines.join("\n").trim()});}
                      const chunks=chapterBreaks.length>1?chapterBreaks:[{num:1,text:text.trim()}];
                      const newScenes=chunks.map((c,i)=>({
                        id:"s_upload_"+Date.now()+"_"+i,
                        chapter:c.num,scene:1,
                        title:c.text.split("\n")[0].substring(0,50).trim(),
                        text:c.text,
                        notes:"",sceneNotes:"",modeData:[],
                        status:"drafting",lastEdited:Date.now()
                      }));
                      saveScenes(newScenes);setScenes(newScenes);
                      setActiveScene(newScenes[0].id);saveStored("tt-activescene",newScenes[0].id);
                    };
                    reader.readAsText(file);
                    e.target.value="";
                  }}/>
                </label>
                {getTotalWords()>0&&<div onClick={()=>{
                  const chapters=[...new Set(scenes.map(s=>s.chapter))].sort((a,b)=>a-b);
                  let output=project?project.title+"\n\n":"";
                  chapters.forEach(ch=>{
                    const chScenes=scenes.filter(s=>s.chapter===ch).sort((a,b)=>a.scene-b.scene);
                    output+="Chapter "+ch+"\n\n";
                    chScenes.forEach(s=>{if(s.text&&s.text.trim()){output+=s.text.trim()+"\n\n"}});
                  });
                  const blob=new Blob([output],{type:"text/plain"});
                  const url=URL.createObjectURL(blob);
                  const a=document.createElement("a");
                  a.href=url;a.download=(project?.title||"manuscript").replace(/[^a-zA-Z0-9]/g,"_")+".txt";
                  document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
                }} style={{fontSize:11,color:"var(--accent)",cursor:"pointer",marginTop:6,display:"block",background:"var(--bg-card-alt)",border:"1px solid var(--border)",borderRadius:6,padding:"6px 10px",textAlign:"center"}}>Export manuscript</div>}
              </div>
            </>}

            {/* Idea Lab nav */}
            {forgeMode==="idealab"&&<>
              <div style={{flex:1}}>
                <div style={{fontSize:9,textTransform:"uppercase",letterSpacing:"0.18em",color:"#9A8AB0",fontWeight:500,marginBottom:8}}>Your idea</div>
                <div style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:8,padding:10,marginBottom:10}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:"var(--text-dim)",fontStyle:"italic",lineHeight:1.6}}>Pour everything out. No structure needed.</div>
                </div>
                <div style={{fontSize:9,color:"var(--text-dim)",marginBottom:10}}>{ideaLabText.split(/\s+/).filter(w=>w).length} words</div>
                <div style={{fontSize:9,color:"var(--text-faint)",fontStyle:"italic",marginBottom:10,fontFamily:"'Cormorant Garamond',serif",lineHeight:1.5}}>Your Idea Lab stays exactly as it is. Finn copies, never moves.</div>
                <div onClick={ideaLabText.trim()?handleOrganize:undefined} style={{background:"none",border:"1px solid #9A8AB040",borderRadius:6,padding:"8px 10px",color:ideaLabText.trim()?"#9A8AB0":"var(--text-faint)",fontFamily:"'DM Sans',sans-serif",fontSize:11,cursor:ideaLabText.trim()?"pointer":"default",textAlign:"center"}}>
                  {organizeLoading?"Reading your idea...":"Organize with Finn"}
                </div>
              </div>
              <div style={{borderTop:"1px solid var(--border)",paddingTop:10,marginTop:"auto"}}>
                <div style={{fontSize:9,color:"var(--text-dim)"}}>Auto-saving</div>
              </div>
            </>}

            {/* Inferno nav */}
            {forgeMode==="inferno"&&<>
              <div style={{flex:1}}>
                <div style={{fontSize:9,textTransform:"uppercase",letterSpacing:"0.18em",color:"#C07848",fontWeight:500,marginBottom:8}}>You're on fire</div>
                <div style={{background:"var(--bg-card)",border:"1px solid #C0784820",borderRadius:8,padding:10,marginBottom:12}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:"#C07848",fontStyle:"italic",lineHeight:1.6}}>Don't stop. Don't edit. Just burn.</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:4}}>
                  {["Capture the flood","Channel the heat","Ride the wave — 25 min","Flag everything","Body check","Wind down"].map(tool=>(
                    <div key={tool} onClick={()=>{
                      setFinnOpen(true);
                      const msg=`INFERNO TOOL: ${tool}`;
                      setContainerMsgs(prev=>[...prev,{role:"user",content:msg}]);
                    }} style={{background:"var(--bg-card)",border:"1px solid #C0784815",borderRadius:5,padding:"7px 10px",fontSize:10,color:"#C07848",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{borderTop:"1px solid var(--border)",paddingTop:10,marginTop:"auto"}}>
                <div style={{fontSize:9,color:"#C07848"}}>Session active</div>
                <div style={{fontSize:9,color:"var(--text-dim)",marginTop:3}}>Auto-saving</div>
              </div>
            </>}
          </div>

          {/* Center: Writing Area */}
          <div style={{background:"var(--bg-write)",display:"flex",flexDirection:"column",overflow:"hidden",position:"relative"}}>

            {/* IDEA LAB surface */}
            {forgeMode==="idealab"&&<>
              <div style={{padding:"12px 40px 10px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center",background:"var(--bg-write)"}}>
                <div style={{fontSize:12,color:"#9A8AB0",fontWeight:500,fontFamily:"'DM Sans',sans-serif"}}>Idea Lab</div>
                <div style={{display:"flex",gap:8,alignItems:"center"}}>
                  <span style={{fontSize:10,color:"var(--text-dim)"}}>{ideaLabText.split(/\s+/).filter(w=>w).length} words</span>
                  <span onClick={()=>{if(ideaLabText){const t=ideaLabText.substring(0,200);const ns=[...sparks,{text:t,date:new Date().toLocaleDateString(),mode:"Idea Lab",modeId:"idealab"}];setSparks(ns);saveStored("tt-sparks",ns)}}} style={{fontSize:10,color:"var(--text-dim)",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:4,padding:"3px 8px",cursor:"pointer"}}>This excites me</span>
                </div>
              </div>
              <div style={{flex:1,overflow:"auto",padding:"24px 40px 0"}} onMouseUp={()=>{
                const sel=window.getSelection();
                const text=sel?sel.toString().trim():"";
                if(text.length>3){
                  const range=sel.getRangeAt(0);
                  const rect=range.getBoundingClientRect();
                  setHighlightPopup({visible:true,x:rect.left,y:rect.bottom+8,text});
                } else {
                  setHighlightPopup({visible:false,x:0,y:0,text:""});
                }
              }}>
                <textarea value={ideaLabText} onChange={e=>{setIdeaLabText(e.target.value);saveStored("tt-idealab-text",e.target.value);}} placeholder="Pour everything out. Characters, questions, fragments, feelings. No structure needed. Finn will help you make sense of it." style={{width:"100%",minHeight:300,background:"none",border:"none",outline:"none",resize:"none",fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:"var(--text-primary)",lineHeight:2}}/>
              </div>

              {/* Buckets */}
              <div style={{padding:"12px 40px 16px",borderTop:"1px solid var(--border)"}}>
                <div style={{fontSize:9,color:"var(--text-dim)",textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:10}}>Buckets — select text above to sort</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                  {[["characters","Characters","#5A7A8A"],["plot","Plot Moments","#5A6B3A"],["world","World / Setting","#907860"],["questions","Questions","#7A6EA0"],["fragments","Fragments","#8A7E6A"]].map(([key,label,color])=>(
                    <div key={key} style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:8,padding:"10px 12px",minHeight:60}}>
                      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}>
                        <div style={{width:6,height:6,borderRadius:"50%",background:color,flexShrink:0}}/>
                        <span style={{fontSize:10,fontWeight:500,color:"var(--text-muted)",fontFamily:"'DM Sans',sans-serif"}}>{label}</span>
                        <span style={{fontSize:9,color:"var(--text-dim)",marginLeft:"auto"}}>{(ideaLabBuckets[key]||[]).length}</span>
                      </div>
                      {(ideaLabBuckets[key]||[]).map((item,i)=>(
                        <div key={i} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:"var(--text-secondary)",lineHeight:1.5,marginBottom:4,borderLeft:`2px solid ${color}`,paddingLeft:6}}>{item.text.substring(0,80)}{item.text.length>80?"...":""}</div>
                      ))}
                      {(ideaLabBuckets[key]||[]).length===0&&<div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,color:"var(--text-faint)",fontStyle:"italic"}}>Nothing sorted yet</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight popup */}
              {highlightPopup.visible&&<div style={{position:"fixed",left:highlightPopup.x,top:highlightPopup.y,background:"var(--bg-deepest)",border:"1px solid var(--border)",borderRadius:10,padding:6,zIndex:500,display:"flex",flexDirection:"column",gap:2,minWidth:160,boxShadow:"0 4px 20px rgba(0,0,0,0.3)"}}>
                <div style={{fontSize:9,color:"var(--text-dim)",letterSpacing:"0.15em",textTransform:"uppercase",padding:"3px 8px 5px",borderBottom:"1px solid var(--border)",marginBottom:2,fontFamily:"'DM Sans',sans-serif"}}>Sort into</div>
                {[["characters","Characters","#5A7A8A"],["plot","Plot Moments","#5A6B3A"],["world","World / Setting","#907860"],["questions","Questions","#7A6EA0"],["fragments","Fragments","#8A7E6A"]].map(([key,label,color])=>(
                  <div key={key} onClick={()=>{
                    const newItem={text:highlightPopup.text,id:"il_"+Date.now()};
                    const updated={...ideaLabBuckets,[key]:[...(ideaLabBuckets[key]||[]),newItem]};
                    setIdeaLabBuckets(updated);saveStored("tt-idealab-buckets",updated);
                    setHighlightPopup({visible:false,x:0,y:0,text:""});
                    window.getSelection()?.removeAllRanges();
                  }} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 10px",borderRadius:5,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
                    <div style={{width:6,height:6,borderRadius:"50%",background:color,flexShrink:0}}/>
                    <span style={{fontSize:12,color:"var(--text-primary)"}}>{label}</span>
                  </div>
                ))}
              </div>}
            </>}

            {/* INFERNO surface */}
            {forgeMode==="inferno"&&<>
              <div style={{padding:"12px 40px 10px",borderBottom:"1px solid #C0784830",display:"flex",justifyContent:"space-between",alignItems:"center",background:"var(--bg-write)"}}>
                <div style={{fontSize:12,color:"#C07848",fontWeight:500,fontFamily:"'DM Sans',sans-serif"}}>Inferno</div>
                <div style={{display:"flex",gap:8,alignItems:"center"}}>
                  <span style={{fontSize:10,color:"var(--text-dim)"}}>{infernoText.split(/\s+/).filter(w=>w).length} words</span>
                  <span onClick={()=>{if(infernoText){const t=infernoText.substring(0,200);const ns=[...sparks,{text:t,date:new Date().toLocaleDateString(),mode:"The Inferno",modeId:"inferno"}];setSparks(ns);saveStored("tt-sparks",ns)}}} style={{fontSize:10,color:"var(--text-dim)",background:"var(--bg-card)",border:"1px solid #C0784820",borderRadius:4,padding:"3px 8px",cursor:"pointer"}}>Flag this</span>
                </div>
              </div>
              <div style={{flex:1,overflow:"auto",padding:"24px 40px"}}>
                <textarea value={infernoText} onChange={e=>{setInfernoText(e.target.value);saveStored("tt-inferno-text",e.target.value);}} placeholder="Don't stop. Don't edit. Don't look back. Just burn." style={{width:"100%",height:"100%",minHeight:400,background:"none",border:"none",outline:"none",resize:"none",fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:"var(--text-primary)",lineHeight:2}}/>
              </div>
              <div style={{padding:"10px 40px 14px",borderTop:"1px solid #C0784830",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{fontSize:10,color:"var(--text-dim)"}}>Auto-saved</div>
                <div style={{display:"flex",gap:10}}>
                  <span onClick={()=>{setFinnOpen(!finnOpen);if(!finnOpen){setContainerMsgs([{role:"assistant",content:`You're in Inferno mode. The fire is real. I'm here when you need me. What do you need right now?`}])}}} style={{fontSize:12,color:finnOpen?"#C07848":"#C0784890",background:"var(--bg-card-alt)",border:"1px solid #C0784820",borderRadius:8,padding:"7px 16px",cursor:"pointer",fontWeight:500}}>{finnOpen?"Close Finn":"Ask Finn"}</span>
                  <span onClick={goHome} style={{fontSize:12,color:"var(--text-muted)",cursor:"pointer",padding:"7px 12px",background:"var(--bg-card-alt)",border:"1px solid var(--border)",borderRadius:8}}>Home</span>
                </div>
              </div>
            </>}

            {/* MANUSCRIPT surface */}
            {forgeMode==="manuscript"&&(currentScene?<>
              <div style={{padding:"12px 40px 10px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <span style={{fontSize:11,color:"var(--text-muted)"}}>Chapter {currentScene.chapter}, Scene {currentScene.scene}</span>
                  <span style={{fontSize:10,color:"var(--text-dim)",marginLeft:12}}>{getWordCount(currentScene.text)} words</span>
                </div>
                <div style={{display:"flex",gap:8,alignItems:"center"}}>
                  <span onClick={()=>{if(currentScene.text){const t=currentScene.text.substring(0,200);const ns=[...sparks,{text:t,date:new Date().toLocaleDateString(),mode:"The Forge"}];setSparks(ns);saveStored("tt-sparks",ns)}}} style={{fontSize:10,color:"var(--text-dim)",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:4,padding:"3px 8px",cursor:"pointer"}}>This excites me</span>
                  <input value={currentScene.title||""} onChange={e=>{const updated=scenes.map(s=>s.id===currentScene.id?{...s,title:e.target.value}:s);setScenes(updated)}} placeholder="Scene title (optional)" style={{background:"none",border:"none",outline:"none",color:"var(--text-dim)",fontSize:10,fontFamily:"'DM Sans',sans-serif",width:140,textAlign:"right"}}/>
                </div>
              </div>
              {currentScene.notes&&<div style={{padding:"10px 40px",background:"var(--bg-card-alt)",borderBottom:"1px solid var(--border)"}}>
                <div style={{fontSize:9,color:"var(--accent-70)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:4}}>CHAPTER REFERENCE</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-muted)",lineHeight:1.6,maxWidth:640}}>{currentScene.notes}</div>
              </div>}
              {/* Scene Notes - editable, excluded from export */}
              <div style={{borderBottom:"1px solid var(--border)"}}>
                <div onClick={()=>setSceneNotesOpen(o=>!o)} style={{padding:"6px 40px",display:"flex",alignItems:"center",gap:8,cursor:"pointer",background:"var(--bg-card-alt)"}}>
                  <span style={{fontSize:9,color:"var(--text-dim)",letterSpacing:"0.12em",textTransform:"uppercase"}}>Scene Notes</span>
                  <span style={{fontSize:9,color:"var(--text-dim)",opacity:.5}}>{sceneNotesOpen?"▲":"▼"}</span>
                  {currentScene.sceneNotes&&<span style={{fontSize:9,color:"var(--accent-70)",marginLeft:"auto"}}>has notes</span>}
                </div>
                {sceneNotesOpen&&<div style={{padding:"8px 40px 10px",background:"var(--bg-card-alt)"}}>
                  <textarea value={currentScene.sceneNotes||""} onChange={e=>{const updated=scenes.map(s=>s.id===currentScene.id?{...s,sceneNotes:e.target.value}:s);setScenes(updated);}} placeholder="Click here to add editing reminders, craft notes, things to fix later. Not exported with manuscript." rows={2} style={{width:"100%",background:"var(--bg-base)",border:"1px solid var(--border)",borderRadius:6,padding:"6px 10px",outline:"none",resize:"vertical",fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-primary)",lineHeight:1.6}}/>
                </div>}
              </div>
              {/* Mode Data - coaching notes from sessions */}
              {(currentScene.modeData||[]).filter(m=>!m.resolved).length>0&&<div style={{borderBottom:"1px solid var(--border)"}}>
                {(currentScene.modeData||[]).filter(m=>!m.resolved).map((md,i)=><div key={md.id} style={{padding:"10px 40px",background:`linear-gradient(135deg,var(--bg-card-alt),var(--bg-card))`,borderBottom:i<(currentScene.modeData||[]).filter(m=>!m.resolved).length-1?"1px solid var(--border)":"none"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <div style={{fontSize:9,color:"var(--accent-80)",textTransform:"uppercase",letterSpacing:"0.15em",fontWeight:500}}>{md.modeLabel}</div>
                    <div style={{display:"flex",gap:10,alignItems:"center"}}>
                      <span style={{fontSize:9,color:"var(--text-dim)"}}>{new Date(md.timestamp).toLocaleDateString()}</span>
                      <span onClick={()=>{const updated=scenes.map(s=>s.id===currentScene.id?{...s,modeData:(s.modeData||[]).map(m=>m.id===md.id?{...m,resolved:true}:m)}:s);saveScenes(updated);}} style={{fontSize:9,color:"var(--text-dim)",cursor:"pointer",border:"1px solid var(--border)",borderRadius:4,padding:"2px 6px"}}>Resolve</span>
                    </div>
                  </div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-primary)",lineHeight:1.65,marginBottom:6}}>{md.summary}</div>
                  {md.insights?.filter(i=>i.trim()).map((ins,j)=><div key={j} style={{display:"flex",gap:6,marginBottom:4,alignItems:"flex-start"}}>
                    <div style={{width:3,height:3,borderRadius:"50%",background:"var(--accent)",flexShrink:0,marginTop:7}}/>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:"var(--text-muted)",lineHeight:1.6}}>{ins}</div>
                  </div>)}
                  {md.draftText?.trim()&&<div style={{marginTop:8}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                      <span style={{fontSize:9,color:"var(--accent-70)",textTransform:"uppercase",letterSpacing:"0.1em"}}>Draft</span>
                      <span onClick={()=>{const updated=scenes.map(s=>s.id===currentScene.id?{...s,text:(s.text||"")+"\n\n"+md.draftText}:s);saveScenes(updated);}} style={{fontSize:9,color:"var(--accent)",cursor:"pointer"}}>Copy into scene</span>
                    </div>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-muted)",lineHeight:1.7,fontStyle:"italic",background:"var(--bg-base)",borderRadius:6,padding:"8px 10px"}}>{md.draftText}</div>
                  </div>}
                  {md.suggestedAction&&<div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--text-secondary)",fontStyle:"italic",marginTop:8,paddingTop:8,borderTop:"1px solid var(--border)"}}>{md.suggestedAction}</div>}
                </div>)}
              </div>}
              <div style={{flex:1,overflow:"auto",padding:"24px 40px"}}>
                <textarea ref={writeRef} value={currentScene.text||""} onChange={e=>updateSceneText(currentScene.id,e.target.value)} placeholder="Start writing..." style={{width:"100%",height:"100%",minHeight:400,background:"none",border:"none",outline:"none",resize:"none",fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:"var(--text-primary)",lineHeight:2,letterSpacing:"0.01em"}}/>
              </div>
              <div style={{padding:"10px 40px 14px",borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{fontSize:10,color:"var(--text-dim)"}}>Auto-saved</div>
                <div style={{display:"flex",gap:10}}>
                  <span onClick={()=>{setFinnOpen(!finnOpen);if(!finnOpen&&containerMsgs.length===0){setContainerMsgs([{role:"assistant",content:`I'm reading Chapter ${currentScene.chapter}, Scene ${currentScene.scene}. ${getWordCount(currentScene.text)>0?"I can see what you're writing. Ask me anything about this scene, or tell me what you need.":"Empty page. Tell me what this scene needs to accomplish and I'll help you find the first line."}`}])}}} style={{fontSize:12,color:finnOpen?"var(--accent)":"var(--accent-90)",background:"var(--bg-card-alt)",border:"1px solid var(--border)",borderRadius:8,padding:"7px 16px",cursor:"pointer",fontWeight:500}}>{finnOpen?"Close Finn":"Ask Finn"}</span>
                  <span onClick={goHome} style={{fontSize:12,color:"var(--text-muted)",cursor:"pointer",padding:"7px 12px",background:"var(--bg-card-alt)",border:"1px solid var(--border)",borderRadius:8}}>Home</span>
                </div>
              </div>
            </>:<div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}><p style={{color:"var(--text-dim)"}}>Select a scene or create one.</p></div>)}
          </div>

          {/* Right: Finn Panel */}
          {finnOpen&&<div style={{background:"var(--bg-dark)",borderLeft:"1px solid var(--border)",padding:"16px",display:"flex",flexDirection:"column",overflow:"hidden"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <div>
                <div style={{fontSize:9,textTransform:"uppercase",letterSpacing:"0.18em",color:"var(--accent-80)",fontWeight:500}}>Finn</div>
                {currentScene&&<div style={{fontSize:10,color:"var(--text-dim)",marginTop:2}}>Ch{currentScene.chapter}, Scene {currentScene.scene}</div>}
              </div>
              <div style={{display:"flex",gap:6,alignItems:"center"}}>
                <div style={{display:"flex",gap:2}}>{["small","medium","large"].map(sz=><span key={sz} onClick={()=>setFinnPanelSize(sz)} style={{width:sz==="small"?10:sz==="medium"?14:18,height:10,borderRadius:2,background:finnPanelSize===sz?"var(--accent)":"var(--border-mid)",cursor:"pointer",transition:"background .2s"}}/>)}</div>
                <span onClick={()=>setFinnOpen(false)} style={{fontSize:10,color:"var(--text-dim)",cursor:"pointer",marginLeft:6}}>Close</span>
              </div>
            </div>
            <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:10}}>
              {containerMsgs.map((m,i)=><div key={i} style={{background:m.role==="assistant"?"var(--bg-card)":"var(--bg-card-alt)",border:"1px solid "+(m.role==="assistant"?"var(--border)":"var(--border-mid)"),borderRadius:10,padding:"10px 12px",alignSelf:m.role==="user"?"flex-end":"flex-start",maxWidth:"95%"}}>
                {m.role==="assistant"&&<div style={{fontSize:9,color:"var(--accent-80)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:5}}>Finn</div>}
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"var(--text-primary)",lineHeight:1.7}}>{m.content.split("\n").map((l,j)=><p key={j} style={{marginBottom:l?8:3}}>{l}</p>)}</div>
                {m.role==="assistant"&&i>0&&<span onClick={()=>{const ns=[...sparks,{text:m.content.substring(0,200),date:new Date().toLocaleDateString(),mode:"The Forge"}];setSparks(ns);saveStored("tt-sparks",ns)}} style={{fontSize:9,color:"var(--text-dim)",border:"1px solid var(--border)",borderRadius:4,padding:"2px 6px",marginTop:6,display:"inline-block",cursor:"pointer"}}>This excites me</span>}
              </div>)}
              {loading&&<div style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px"}}><div style={{fontSize:9,color:"var(--accent-80)",marginBottom:5}}>Finn</div><span style={{fontSize:13,color:"var(--text-dim)",fontStyle:"italic"}}>Thinking...</span></div>}
              <div ref={cEndRef}/>
            </div>
            <div style={{borderTop:"1px solid var(--border)",paddingTop:10,marginTop:10}}>
              <div style={{display:"flex",gap:6,alignItems:"flex-end",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 10px"}}>
                <textarea value={containerInput} onChange={e=>{setContainerInput(e.target.value);e.target.style.height="auto";e.target.style.height=Math.min(e.target.scrollHeight,120)+"px"}} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendContainer()}}} placeholder="Ask Finn..." rows={2} style={{flex:1,background:"none",border:"none",outline:"none",color:"var(--text-primary)",fontFamily:"'Cormorant Garamond',serif",fontSize:14,lineHeight:1.5,resize:"none",maxHeight:120,minHeight:40}}/>
                <button className="sb" onClick={sendContainer} disabled={!containerInput.trim()||loading} style={{width:28,height:28,borderRadius:6,background:"var(--accent)",color:"var(--bg-deepest)",fontSize:14,fontWeight:700,border:"none",cursor:"pointer",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:!containerInput.trim()||loading?.3:1}}>{"\u2191"}</button>
              </div>
            </div>
            {project&&<div style={{marginTop:10,paddingTop:8,borderTop:"1px solid var(--border)"}}>
              <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.15em",color:"var(--text-dim)",fontWeight:500,marginBottom:4}}>Story Bible</div>
              <div style={{fontSize:10,color:"var(--text-dim)",lineHeight:1.5}}>{project.protagonist?.substring(0,80)}</div>
              {sparks.length>0&&<><div style={{fontSize:8,textTransform:"uppercase",letterSpacing:"0.15em",color:"var(--accent-50)",fontWeight:500,marginTop:8,marginBottom:4}}>Dopamine Map</div><div style={{fontSize:10,color:"var(--text-dim)"}}>{sparks.length} sparks</div></>}
            </div>}
          </div>}

          {/* ORGANIZE WITH FINN OVERLAY */}
          {organizeOpen&&organizeResult&&<div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(var(--bg-card-rgb),0.6)",zIndex:200,display:"flex",alignItems:"flex-end"}} onClick={e=>{if(e.target===e.currentTarget){setOrganizeOpen(false)}}}>
            <div style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"16px 16px 0 0",padding:"24px 24px 28px",width:"100%",maxHeight:"80%",overflowY:"auto",animation:"fu .3s ease-out"}}>
              <div style={{fontSize:9,textTransform:"uppercase",letterSpacing:"0.22em",color:"#9A8AB0",fontWeight:500,marginBottom:12}}>Organize with Finn</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,color:"var(--text-primary)",lineHeight:1.7,marginBottom:20}}>Here's what I found. Approve what belongs in your Story Bible or Manuscript. You can change your mind on anything.</div>
              {[["characters","Characters","→ Story Bible","#5A7A8A"],["world","World / Setting","→ Story Bible","#907860"],["plot","Plot Moments","→ Manuscript","#5A6B3A"],["questions","Questions","→ Coaching","#7A6EA0"]].map(([key,label,dest,color])=>(organizeResult[key]||[]).length>0&&<div key={key} style={{marginBottom:18}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,paddingBottom:6,borderBottom:"1px solid var(--border)"}}>
                  <div style={{width:7,height:7,borderRadius:"50%",background:color}}/>
                  <span style={{fontSize:11,fontWeight:500,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.08em",fontFamily:"'DM Sans',sans-serif"}}>{label}</span>
                  <span style={{fontSize:10,color:"var(--text-dim)",marginLeft:"auto",fontFamily:"'DM Sans',sans-serif"}}>{dest}</span>
                </div>
                {(organizeResult[key]||[]).map((item,idx)=>(
                  <div key={idx} style={{border:"1px solid var(--border)",borderRadius:8,padding:"10px 12px",marginBottom:8,background:item.status==="approved"?"var(--bg-card)":item.status==="dismissed"?"var(--bg-card)":"var(--bg-card)",opacity:item.status==="dismissed"?.5:1,borderColor:item.status==="approved"?"#5A7A5C40":item.status==="dismissed"?"var(--border)":"var(--border)"}}>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:item.status==="dismissed"?"var(--text-dim)":"var(--text-primary)",lineHeight:1.65,marginBottom:8,textDecoration:item.status==="dismissed"?"line-through":"none"}}>{item.text}</div>
                    <div style={{display:"flex",gap:6,alignItems:"center"}}>
                      {item.status!=="approved"&&<button onClick={()=>updateOrganizeItem(key,idx,"approved")} style={{background:"#5A7A5C",border:"none",borderRadius:5,padding:"4px 12px",fontSize:11,color:"#F0EAE0",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Approve</button>}
                      {item.status!=="dismissed"&&<button onClick={()=>updateOrganizeItem(key,idx,"dismissed")} style={{background:"none",border:"1px solid var(--border)",borderRadius:5,padding:"4px 12px",fontSize:11,color:"var(--text-dim)",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Dismiss</button>}
                      {item.status!=="pending"&&<button onClick={()=>updateOrganizeItem(key,idx,"pending")} style={{background:"none",border:"1px solid var(--border-mid)",borderRadius:5,padding:"4px 10px",fontSize:11,color:"var(--text-dim)",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Undo</button>}
                      {item.status==="approved"&&<span style={{fontSize:11,color:"#5A7A5C",fontFamily:"'DM Sans',sans-serif",marginLeft:4}}>✓ Will be added</span>}
                    </div>
                  </div>
                ))}
              </div>)}
              <div style={{borderTop:"1px solid var(--border)",paddingTop:16,marginTop:4}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,fontStyle:"italic",color:"var(--text-muted)",marginBottom:14,lineHeight:1.6}}>Your Idea Lab stays exactly as it is. Where do you want to go next?</div>
                <div style={{display:"flex",gap:8}}>
                  <div onClick={()=>commitOrganized("bible")} style={{flex:1,background:"var(--accent)",border:"none",borderRadius:8,padding:"11px",textAlign:"center",cursor:"pointer"}}><span style={{fontSize:12,fontWeight:500,color:"var(--bg-deepest)",fontFamily:"'DM Sans',sans-serif"}}>Open Story Bible</span></div>
                  <div onClick={()=>commitOrganized("manuscript")} style={{flex:1,background:"var(--bg-card-alt)",border:"1px solid var(--border)",borderRadius:8,padding:"11px",textAlign:"center",cursor:"pointer"}}><span style={{fontSize:12,color:"var(--text-muted)",fontFamily:"'DM Sans',sans-serif"}}>Open Manuscript</span></div>
                  <div onClick={()=>{commitOrganized("stay");setOrganizeOpen(false);}} style={{flex:1,background:"var(--bg-card-alt)",border:"1px solid var(--border)",borderRadius:8,padding:"11px",textAlign:"center",cursor:"pointer"}}><span style={{fontSize:12,color:"var(--text-dim)",fontFamily:"'DM Sans',sans-serif"}}>Stay in Idea Lab</span></div>
                </div>
              </div>
            </div>
          </div>}

        </div>;
      })()}

      {/* CHAT */}
      {screen==="chat"&&mode&&<div style={{maxWidth:isFocusMode?600:700,margin:"0 auto",display:"flex",flexDirection:"column",height:"calc(100vh - 60px)"}}>
        {isFocusMode&&<div style={{textAlign:"center",padding:"8px 0",fontSize:10,color:"#5A7A5C",letterSpacing:"0.1em"}}>FOCUS MODE</div>}
        {!isFocusMode&&<div style={{padding:"4px 20px 8px",fontSize:11,color:"var(--accent-60)"}}>{mode.label}</div>}
        <div style={{flex:1,overflow:"auto",padding:"8px 20px",display:"flex",flexDirection:"column",gap:14}}>
          {msgs.map((m,i)=><div key={i} className={m.role==="assistant"?"ma":"mu"} style={{display:"flex",width:"100%",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"88%",borderRadius:14,padding:"14px 18px",lineHeight:1.65,...(m.role==="user"?{background:"var(--bg-card-alt)",border:"1px solid var(--border)",borderTopRightRadius:4}:{background:"var(--bg-card)",border:"1px solid var(--border)",borderTopLeftRadius:4})}}>
              {m.role==="assistant"&&<div style={{fontSize:10,fontWeight:500,color:CATS[mode.cat]?.c||"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8}}>Finn</div>}
              <div style={{fontFamily:"'Cormorant Garamond',serif",color:"var(--text-primary)",fontSize:15,lineHeight:1.7}}>{m.content.split("\n").map((l,j)=><p key={j} style={{marginBottom:l?10:4,minHeight:l?undefined:4}}>{l}</p>)}</div>
              {m.role==="assistant"&&i>0&&<>{flaggedIdx===i?<span style={{fontSize:11,color:"var(--accent)",fontStyle:"italic",marginTop:8,display:"block"}}>{sparkMsgs[Math.floor(Math.random()*sparkMsgs.length)]}</span>:<button onClick={()=>flagSpark(m.content,i)} style={{background:"none",border:"1px solid var(--border)",borderRadius:6,color:"var(--text-dim)",fontSize:10,padding:"4px 10px",marginTop:8,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>This excites me</button>}</>}
            </div>
          </div>)}
          {loading&&<div className="ma" style={{display:"flex",width:"100%",alignItems:"flex-start",gap:8}}>
            <div style={{maxWidth:"88%",borderRadius:14,padding:"14px 18px",background:"var(--bg-card)",border:"1px solid var(--border)",borderTopLeftRadius:4,flex:1}}>
              <div style={{fontSize:10,fontWeight:500,color:CATS[mode.cat]?.c||"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8}}>Finn</div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:13,color:"var(--text-dim)",fontStyle:"italic"}}>{loadMsg}</span>
                <span style={{display:"flex",gap:4}}>{[0,.3,.6].map(d=><span key={d} style={{color:"var(--accent)",fontSize:8,animation:"pu 1.2s ease-in-out infinite",animationDelay:`${d}s`}}>&#9679;</span>)}</span>
              </div>
            </div>
            <button onClick={cancelReq} style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:6,color:"var(--text-dim)",fontSize:10,padding:"6px 10px",cursor:"pointer",flexShrink:0,fontFamily:"'DM Sans',sans-serif"}}>Stop</button>
          </div>}
          <div ref={endRef}/>
        </div>
        <div style={{padding:"12px 20px 20px",borderTop:"1px solid var(--border)",background:"var(--bg-base)"}}>
          <div style={{display:"flex",gap:10,alignItems:"flex-end",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:"10px 14px"}}>
            <textarea ref={taRef} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send()}}} placeholder={mode.ph} style={{flex:1,background:"none",border:"none",outline:"none",color:"var(--text-primary)",fontFamily:"'Cormorant Garamond',serif",fontSize:15,lineHeight:1.6,resize:"none",maxHeight:200}} rows={1}/>
            <button className="sb" onClick={send} disabled={!input.trim()||loading} style={{width:34,height:34,borderRadius:8,border:"none",background:"var(--accent)",color:"var(--bg-deepest)",fontSize:16,fontWeight:700,cursor:"pointer",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:!input.trim()||loading?.3:1}}>{"\u2191"}</button>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:8,alignItems:"center"}}>
            <p style={{fontSize:9,color:"var(--text-deepfaint)"}}>Shift+Enter for new line</p>
            <div style={{display:"flex",gap:10,alignItems:"center"}}>
              <span onClick={()=>{if(msgs.length>=2)handleEndSession()}} style={{fontSize:11,color:msgs.length>=2?"var(--text-primary)":"var(--text-faint)",cursor:msgs.length>=2?"pointer":"default",background:msgs.length>=2?"var(--bg-card-alt)":"transparent",border:"1px solid "+(msgs.length>=2?"var(--border)":"transparent"),borderRadius:6,padding:"4px 10px"}}>{endSessionLoading?"Summarizing...":"End Session"}</span>
              <p onClick={newChat} style={{fontSize:9,color:"#5A7A8A",cursor:"pointer"}}>New chat</p>
            </div>
          </div>
        </div>
      </div>}
      {/* END SESSION OVERLAY */}
      {endSessionOpen&&endSessionResult&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.6)",zIndex:200,display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"0 0 0 0"}} onClick={e=>{if(e.target===e.currentTarget){setEndSessionOpen(false);setEndSessionResult(null)}}}>
        <div style={{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"16px 16px 0 0",padding:"28px 24px 32px",maxWidth:640,width:"100%",maxHeight:"85vh",overflowY:"auto",animation:"fu .35s ease-out"}}>
          <div style={{fontSize:9,textTransform:"uppercase",letterSpacing:"0.25em",color:"var(--accent-80)",fontWeight:500,marginBottom:16}}>Session Complete</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:"var(--text-primary)",lineHeight:1.7,marginBottom:20}}>{endSessionResult.summary}</div>
          {endSessionResult.insights?.filter(i=>i.trim()).length>0&&<div style={{marginBottom:20}}>
            <div style={{fontSize:10,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:10}}>What shifted</div>
            {endSessionResult.insights.filter(i=>i.trim()).map((ins,i)=><div key={i} style={{display:"flex",gap:8,marginBottom:8,alignItems:"flex-start"}}>
              <div style={{width:4,height:4,borderRadius:"50%",background:"var(--accent)",flexShrink:0,marginTop:7}}/>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-secondary)",lineHeight:1.6}}>{ins}</div>
            </div>)}
          </div>}
          {endSessionResult.draftText?.trim()&&<div style={{background:"var(--bg-write)",border:"1px solid var(--border)",borderRadius:8,padding:"12px 16px",marginBottom:20}}>
            <div style={{fontSize:10,color:"var(--accent-70)",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:8}}>Draft from this session</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--text-primary)",lineHeight:1.8,whiteSpace:"pre-wrap"}}>{endSessionResult.draftText}</div>
          </div>}
          {endSessionResult.suggestedAction?.trim()&&<div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"var(--accent)",fontStyle:"italic",marginBottom:24}}>{endSessionResult.suggestedAction}</div>}
          <div style={{borderTop:"1px solid var(--border)",paddingTop:18}}>
            <div style={{fontSize:11,color:"var(--text-muted)",marginBottom:12}}>Bring this into The Forge as Mode Data?</div>
            {scenes.length>0&&<select value={endSessionSceneId||""} onChange={e=>setEndSessionSceneId(e.target.value)} style={{width:"100%",background:"var(--bg-card-alt)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",color:"var(--text-primary)",fontFamily:"'DM Sans',sans-serif",fontSize:13,marginBottom:12,outline:"none"}}>
              <option value="">Select a scene...</option>
              {scenes.map(s=><option key={s.id} value={s.id}>Ch{s.chapter}, Scene {s.scene}{s.title?` — ${s.title}`:""}</option>)}
            </select>}
            <div style={{display:"flex",gap:10}}>
              <div onClick={endSessionSceneId&&!endSessionCommitting?commitModeData:undefined} style={{flex:1,background:endSessionSceneId?"var(--accent)":"var(--bg-card-alt)",border:"1px solid "+(endSessionSceneId?"var(--accent)":"var(--border)"),borderRadius:8,padding:"11px",textAlign:"center",cursor:endSessionSceneId?"pointer":"default",opacity:endSessionCommitting?.6:1}}>
                <span style={{fontSize:12,fontWeight:500,color:endSessionSceneId?"var(--bg-deepest)":"var(--text-dim)"}}>Add to The Forge</span>
              </div>
              <div onClick={()=>{setEndSessionOpen(false);setEndSessionResult(null);goHome();}} style={{flex:1,background:"var(--bg-card-alt)",border:"1px solid var(--border)",borderRadius:8,padding:"11px",textAlign:"center",cursor:"pointer"}}>
                <span style={{fontSize:12,color:"var(--text-muted)"}}>Just go home</span>
              </div>
            </div>
          </div>
        </div>
      </div>}

    </div>
  );
}
