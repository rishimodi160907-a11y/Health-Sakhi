import { MoodEntry } from '../types/mood';
import { ThoughtReframerSession } from '../types/reframer';

// ============================================================================
// 1. ELITE DEMO MOOD ENTRIES (FOR MOOD TRACKER & TRENDS)
// ============================================================================
export const DEMO_MOOD_ENTRIES: MoodEntry[] = [
    {
        id: 'demo-mood-1',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'anxiety_1', intensity: 75 }, { emotionId: 'overwhelmed_1', intensity: 80 }],
        compositeValence: -0.3,
        compositeArousal: 0.65,
        dominantFamily: 'Fear',
        triggers: ['Work / Milestones', 'Deadlines'],
        customTriggers: [],
        freeNote: 'Kicking off the final milestone. Feeling acute tension regarding the scope and timeline.',
        source: 'manual',
        createdAt: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-2',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'hope_1', intensity: 65 }, { emotionId: 'focus_1', intensity: 70 }],
        compositeValence: 0.4,
        compositeArousal: 0.35,
        dominantFamily: 'Anticipation',
        triggers: ['Productivity', 'Self-care'],
        customTriggers: [],
        freeNote: 'Entered flow state structuring the design tokens and component hierarchy.',
        source: 'manual',
        createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-3',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'joy_1', intensity: 85 }, { emotionId: 'proud_1', intensity: 80 }],
        compositeValence: 0.75,
        compositeArousal: 0.8,
        dominantFamily: 'Joy',
        triggers: ['Achievement', 'Coding'],
        customTriggers: [],
        freeNote: 'Finished the 3D reactive shader canvas! Visual quality feels remarkably cinematic.',
        source: 'manual',
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-4',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'restlessness_1', intensity: 75 }, { emotionId: 'tired_1', intensity: 85 }],
        compositeValence: -0.4,
        compositeArousal: 0.7,
        dominantFamily: 'Fear',
        triggers: ['Sleep / Fatigue', 'Deadlines'],
        customTriggers: [],
        freeNote: 'Slept under 5 hours. Physical fatigue is amplifying mental irritability.',
        source: 'manual',
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-5',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'frustrated_1', intensity: 90 }, { emotionId: 'angry_1', intensity: 75 }],
        compositeValence: -0.8,
        compositeArousal: 0.85,
        dominantFamily: 'Anger',
        triggers: ['Work / Milestones', 'Technical Roadblock'],
        customTriggers: [],
        freeNote: 'Relational database schema broke with cascading foreign key errors. High stress.',
        source: 'manual',
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-6',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'exhaustion_1', intensity: 80 }, { emotionId: 'sad_1', intensity: 60 }],
        compositeValence: -0.3,
        compositeArousal: -0.45,
        dominantFamily: 'Sadness',
        triggers: ['Health / Recovery', 'Mindfulness'],
        customTriggers: [],
        freeNote: 'Took an intentional step away from the keyboard. Went on a quiet 45-minute nature walk.',
        source: 'manual',
        createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-7',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'relief_1', intensity: 85 }, { emotionId: 'gratitude_1', intensity: 75 }],
        compositeValence: 0.55,
        compositeArousal: 0.2,
        dominantFamily: 'Trust',
        triggers: ['Social Support', 'Collaboration'],
        customTriggers: [],
        freeNote: 'Schema resolved with clean normalization and fallback offline architecture. Deep relief.',
        source: 'manual',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-8',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'content_1', intensity: 75 }, { emotionId: 'joy_1', intensity: 70 }],
        compositeValence: 0.65,
        compositeArousal: 0.45,
        dominantFamily: 'Joy',
        triggers: ['Achievement', 'Productivity'],
        customTriggers: [],
        freeNote: 'End-to-end user journeys working flawlessly. Visuals and animations feel coherent.',
        source: 'manual',
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-9',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'anxiety_1', intensity: 65 }, { emotionId: 'anticipation_1', intensity: 75 }],
        compositeValence: 0.15,
        compositeArousal: 0.6,
        dominantFamily: 'Anticipation',
        triggers: ['Public Speaking', 'Preparation'],
        customTriggers: [],
        freeNote: 'Preparing presentation pitch deck and clinical narrative. Jitters starting to build up.',
        source: 'manual',
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-10',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'anxiety_1', intensity: 80 }, { emotionId: 'doubt_1', intensity: 70 }],
        compositeValence: -0.25,
        compositeArousal: 0.75,
        dominantFamily: 'Fear',
        triggers: ['Public Speaking', 'Judgement'],
        customTriggers: [],
        freeNote: 'Imposter syndrome spike prior to mock evaluation. Used Thought Reframer protocol.',
        source: 'manual',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-11',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'calm_1', intensity: 85 }, { emotionId: 'grounded_1', intensity: 80 }],
        compositeValence: 0.65,
        compositeArousal: 0.35,
        dominantFamily: 'Trust',
        triggers: ['Mindfulness', 'Preparation'],
        customTriggers: [],
        freeNote: 'CBT reframe took hold. Nervous energy channeled into focused preparation.',
        source: 'manual',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'demo-mood-12',
        userId: 'demo-user-pe',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
        timezone: 'Asia/Kolkata',
        emotions: [{ emotionId: 'empowered_1', intensity: 90 }, { emotionId: 'clarity_1', intensity: 85 }],
        compositeValence: 0.85,
        compositeArousal: 0.65,
        dominantFamily: 'Joy',
        triggers: ['Achievement', 'Self-growth'],
        customTriggers: [],
        freeNote: 'Ready for demonstration. The system is solid, accessible, and emotionally grounded.',
        source: 'manual',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    }
];

// Matching logs for useMoodData (Weekly report / patterns)
export const DEMO_MOOD_DATA_LOGS = DEMO_MOOD_ENTRIES.map(e => ({
    id: e.id,
    day: new Date(e.timestamp).toLocaleDateString('en-US', { weekday: 'short' }),
    value: Math.round(((e.compositeValence + 1) / 2) * 9) + 1, // map -1..1 to 1..10
    sentiment: (e.compositeValence > 0.3 ? 'Positive' : e.compositeValence < -0.2 ? 'Negative' : 'Anxious') as any,
    tags: e.triggers,
    timestamp: e.timestamp,
    note: e.freeNote
}));

// ============================================================================
// 2. ELITE CBT SESSIONS (FOR THOUGHT REFRAMER & ANALYTICS)
// ============================================================================
export const DEMO_CBT_SESSIONS: ThoughtReframerSession[] = [
    {
        id: 'demo-cbt-1',
        createdAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
        currentStep: 8,
        isComplete: true,
        situation: 'Preparing architectural presentation for technical review board.',
        contextTags: ['Presentation', 'Technical Review', 'Career'],
        situationDate: '2 weeks ago',
        automaticThought: 'If the panel asks a question about an edge-case benchmark that I cannot answer immediately, they will assume the entire architecture is amateurish and fail us.',
        initialBelief: 85,
        initialEmotions: [
            { emotionId: 'anxiety', intensity: 85 },
            { emotionId: 'inadequacy', intensity: 80 }
        ],
        bodyMapRegions: [
            { region: 'Chest', sensation: 'Constriction' },
            { region: 'Shoulders', sensation: 'Heavy Tension' }
        ],
        identifiedDistortions: ['mind-reading', 'catastrophizing', 'all-or-nothing'],
        evidenceFor: [
            'There are complex asynchronous latency patterns in our audio synthesis pipeline.'
        ],
        evidenceAgainst: [
            'I designed and stress-tested every layer of this pipeline myself.',
            'Experienced evaluators respect "I will pull the exact telemetry and verify that edge case" over bluffing.',
            'No single answer defines the merit of an entire multi-month engineering effort.'
        ],
        reframedThoughts: [
            'Judges evaluate poise, depth of problem-solving, and emotional stability under pressure, not encyclopedic omniscience.',
            'I know the strengths and known boundaries of this codebase better than anyone.'
        ],
        selectedReframe: 'Evaluators value authentic technical integrity over robotic perfection. Saying "let me pull telemetry on that" shows mature engineering discipline.',
        finalBelief: 22,
        finalEmotions: [
            { emotionId: 'calm', intensity: 80 },
            { emotionId: 'confidence', intensity: 75 }
        ],
        beliefShift: 63,
        personalTakeaway: 'Professional poise and clarity under uncertainty build far more trust than pretend infallibility.',
        copingSuggestions: ['Box Breathing (4-4-4-4)', '2-Minute Somatic Grounding'],
        durationMinutes: 14,
        source: 'manual'
    },
    {
        id: 'demo-cbt-2',
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        currentStep: 8,
        isComplete: true,
        situation: 'Breaking database relational tables during a refactoring sprint right before code freeze.',
        contextTags: ['Coding', 'Failure', 'Sprint Pressure'],
        situationDate: '1 week ago',
        automaticThought: 'I ruined the whole sprint and proved I am an irresponsible developer who should not be trusted with infrastructure.',
        initialBelief: 90,
        initialEmotions: [
            { emotionId: 'frustration', intensity: 95 },
            { emotionId: 'shame', intensity: 85 }
        ],
        bodyMapRegions: [
            { region: 'Stomach', sensation: 'Sinking feeling' },
            { region: 'Head', sensation: 'Throbbing pressure' }
        ],
        identifiedDistortions: ['all-or-nothing', 'labeling', 'emotional-reasoning'],
        evidenceFor: [
            'The database tables failed right after my schema migration commit.'
        ],
        evidenceAgainst: [
            'Every engineering team breaks staging databases; that is why migration rollback scripts exist.',
            'We had verified point-in-time snapshots and zero real data loss occurred.',
            'I solved the foreign key circular reference within 3 hours once I stepped away and re-read the docs.'
        ],
        reframedThoughts: [
            'Breakdowns in staging are part of learning database architecture, not a moral failure.',
            'Mistakes are diagnostic telemetry that highlight where idempotent checks are needed.'
        ],
        selectedReframe: 'Bugs are an inevitable aspect of building complex systems, not a character flaw. Normalizing the schema properly will make our app vastly more resilient.',
        finalBelief: 20,
        finalEmotions: [
            { emotionId: 'determined', intensity: 85 },
            { emotionId: 'relief', intensity: 80 }
        ],
        beliefShift: 70,
        personalTakeaway: 'Treat technical errors as diagnostic data, never as personal indictments.',
        copingSuggestions: ['15-minute outdoor walk', 'Rubber Duck Debugging'],
        durationMinutes: 18,
        source: 'manual'
    },
    {
        id: 'demo-cbt-3',
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        currentStep: 8,
        isComplete: true,
        situation: 'Sunday night insomnia anxiety looking ahead at the packed demonstration week.',
        contextTags: ['Sleep', 'Overwhelm', 'Sunday Scaries'],
        situationDate: '4 days ago',
        automaticThought: 'There are too many loose ends; I am going to burn out and crash right before the final presentation.',
        initialBelief: 80,
        initialEmotions: [
            { emotionId: 'dread', intensity: 85 },
            { emotionId: 'overwhelmed', intensity: 80 }
        ],
        bodyMapRegions: [
            { region: 'Chest', sensation: 'Rapid shallow breathing' }
        ],
        identifiedDistortions: ['fortune-telling', 'magnification'],
        evidenceFor: [
            'There are 8 distinct user feedback tickets on our review board.'
        ],
        evidenceAgainst: [
            'Only 2 of those 8 tickets are blockers; the rest are cosmetic enhancements.',
            'Whenever I break down tasks into discrete 45-minute blocks, I make rapid progress.',
            'Worrying in bed late at night never solves a single ticket.'
        ],
        reframedThoughts: [
            'My brain is reacting to a task list as if it were a physical danger.',
            'I only have to execute tomorrow morning’s first priority, not solve the whole week in bed.'
        ],
        selectedReframe: 'Task lists are completed sequentially, not simultaneously in the dark at 1:00 AM. Sleep is my highest-leverage performance tool tonight.',
        finalBelief: 25,
        finalEmotions: [
            { emotionId: 'peace', intensity: 75 },
            { emotionId: 'acceptance', intensity: 80 }
        ],
        beliefShift: 55,
        personalTakeaway: 'When fatigue magnifies fear, the only productive step is rest.',
        copingSuggestions: ['Brain-dump notebook at bedside', 'Progressive Muscle Relaxation'],
        durationMinutes: 12,
        source: 'manual'
    },
    {
        id: 'demo-cbt-4',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        currentStep: 8,
        isComplete: true,
        situation: 'Receiving glowing peer praise for the visual polish and UI design of Health Sakhi.',
        contextTags: ['Imposter Syndrome', 'Praise', 'Self-worth'],
        situationDate: '2 days ago',
        automaticThought: 'They are giving me too much credit; I just glued together open-source libraries and they will realize I am a fraud.',
        initialBelief: 75,
        initialEmotions: [
            { emotionId: 'fraudulence', intensity: 80 },
            { emotionId: 'awkwardness', intensity: 70 }
        ],
        bodyMapRegions: [
            { region: 'Throat', sensation: 'Tightness' }
        ],
        identifiedDistortions: ['discounting-the-positive', 'mind-reading'],
        evidenceFor: [
            'I utilized Three.js, Lucide icons, and Tailwind.'
        ],
        evidenceAgainst: [
            'All modern software leverages libraries; the craftsmanship is in composition, interaction design, and emotional coherence.',
            'Peers gave detailed, specific feedback praising the nuanced mental health UX, not boilerplate styling.',
            'Discounting positive data is an automatic habit, not objective truth.'
        ],
        reframedThoughts: [
            'Using great tools masterfully is what great engineering is.',
            'Accepting praise with graciousness is an act of self-respect.'
        ],
        selectedReframe: 'Composing technology with empathy and aesthetic taste is a real, hard-earned craft. I am allowed to accept genuine recognition.',
        finalBelief: 18,
        finalEmotions: [
            { emotionId: 'gratitude', intensity: 85 },
            { emotionId: 'empowerment', intensity: 80 }
        ],
        beliefShift: 57,
        personalTakeaway: 'Internalizing competence takes as much deliberate practice as debugging code.',
        copingSuggestions: ['Save compliment to Wins document', 'Respond with simple "Thank you"'],
        durationMinutes: 11,
        source: 'manual'
    }
];

// ============================================================================
// 3. ELITE JOURNAL ENTRIES WITH CONVERSATIONS (FOR DIARY & EXPORT)
// ============================================================================
export interface DemoJournalWithConvo {
    id: string;
    created_at: string;
    raw_text: string;
    content: string;
    sentiment: string;
    mood_score: number;
    detected_emotions: string[];
    cognitive_distortions: string[];
    coping_strategies: string[];
    core_insight: string;
    conversation: {
        id: string;
        role: 'user' | 'assistant';
        message: string;
        created_at: string;
    }[];
}

export const DEMO_JOURNAL_ENTRIES: DemoJournalWithConvo[] = [
    {
        id: 'demo-journal-1',
        created_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
        raw_text: `Kicking off the final milestone for Health Sakhi. The vision is ambitious: marrying clinical CBT protocols with generative AI and interactive 3D emotional geometry. Looking at the sheer breadth of components—thought reframers, emotion wheels, mood timelines, and clinical export—my chest feels tight. A familiar voice is whispering that if any single feature is imperfect, the entire exhibition is compromised. Trying to remember that progress is iterative, not all-or-nothing.`,
        content: `Kicking off the final milestone for Health Sakhi. The vision is ambitious: marrying clinical CBT protocols with generative AI and interactive 3D emotional geometry. Looking at the sheer breadth of components—thought reframers, emotion wheels, mood timelines, and clinical export—my chest feels tight. A familiar voice is whispering that if any single feature is imperfect, the entire exhibition is compromised. Trying to remember that progress is iterative, not all-or-nothing.`,
        sentiment: 'Mixed',
        mood_score: 5,
        detected_emotions: ['Overwhelmed', 'Anticipation', 'Anxiety'],
        cognitive_distortions: ['Catastrophizing', 'All-or-Nothing Thinking'],
        coping_strategies: ['Task Decomposition', 'Box Breathing (4-4-4-4)', 'Scope Boundary Setting'],
        core_insight: 'Anxiety is simply biological arousal anticipating future demand. Channeled properly, it is fuel for focus.',
        conversation: [
            {
                id: 'convo-1-1',
                role: 'user',
                message: 'I keep catastrophizing that a live demo bug will ruin months of honest work.',
                created_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000 + 10 * 60 * 1000).toISOString()
            },
            {
                id: 'convo-1-2',
                role: 'assistant',
                message: 'That fear is deeply human before high-stakes milestones. But notice what your mind is doing: treating hypothetical bugs as inevitable catastrophes. Remember, evaluators assess your architectural depth and poise under pressure, not robotic infallibility. Have you mapped out an offline fallback?',
                created_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000 + 12 * 60 * 1000).toISOString()
            },
            {
                id: 'convo-1-3',
                role: 'user',
                message: 'Yes, we have cached state and built-in demo credentials ready.',
                created_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000 + 14 * 60 * 1000).toISOString()
            },
            {
                id: 'convo-1-4',
                role: 'assistant',
                message: 'Then your foundation is secure. You have engineered safety nets. Tonight, let your nervous system register that you are prepared.',
                created_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000 + 15 * 60 * 1000).toISOString()
            }
        ]
    },
    {
        id: 'demo-journal-2',
        created_at: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
        raw_text: `Hit a massive technical wall today. While normalizing our database schemas, foreign key cascades failed across mood logs and journal tables. For three hours, the console was a wall of red exceptions. I caught myself spiraling into self-reproach, thinking "I should have known this." Stepped away, made a cup of green tea, and breathed. Mistakes are simply diagnostics pointing toward better architecture.`,
        content: `Hit a massive technical wall today. While normalizing our database schemas, foreign key cascades failed across mood logs and journal tables. For three hours, the console was a wall of red exceptions. I caught myself spiraling into self-reproach, thinking "I should have known this." Stepped away, made a cup of green tea, and breathed. Mistakes are simply diagnostics pointing toward better architecture.`,
        sentiment: 'Negative',
        mood_score: 3,
        detected_emotions: ['Frustration', 'Exhaustion', 'Self-Doubt'],
        cognitive_distortions: ['Labeling', 'Emotional Reasoning'],
        coping_strategies: ['Physical Step-Away', 'Rubber Duck Debugging', 'Self-Compassion Pause'],
        core_insight: 'Technical roadblocks are not reflections of competence; they are normal milestones in software craftsmanship.',
        conversation: [
            {
                id: 'convo-2-1',
                role: 'user',
                message: 'I felt like an amateur because our database migration broke staging.',
                created_at: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000 + 10 * 60 * 1000).toISOString()
            },
            {
                id: 'convo-2-2',
                role: 'assistant',
                message: 'Take a slow exhale. Every senior distributed systems engineer has broken a migration. The frustration is intense, but what structural vulnerability did this failure reveal?',
                created_at: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000 + 12 * 60 * 1000).toISOString()
            },
            {
                id: 'convo-2-3',
                role: 'user',
                message: 'It showed that tightly coupling auth IDs directly to relational tables makes local offline testing brittle without mocks.',
                created_at: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000 + 14 * 60 * 1000).toISOString()
            },
            {
                id: 'convo-2-4',
                role: 'assistant',
                message: 'Exactly. That single realization will make Health Sakhi enterprise-grade. You just converted acute stress into long-term architectural resilience.',
                created_at: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000 + 15 * 60 * 1000).toISOString()
            }
        ]
    },
    {
        id: 'demo-journal-3',
        created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        raw_text: `Breakthrough day. The normalized schema is live, the offline demo bypass is rock-solid, and the reactive Three.js celestial sphere responds smoothly to emotional valence in real-time. Seeing the dark-mode aesthetic harmonize with clinical cognitive behavioral tools gave me genuine chills. I feel grounded, excited, and proud. Persistent focus always outlasts temporary confusion.`,
        content: `Breakthrough day. The normalized schema is live, the offline demo bypass is rock-solid, and the reactive Three.js celestial sphere responds smoothly to emotional valence in real-time. Seeing the dark-mode aesthetic harmonize with clinical cognitive behavioral tools gave me genuine chills. I feel grounded, excited, and proud. Persistent focus always outlasts temporary confusion.`,
        sentiment: 'Positive',
        mood_score: 8,
        detected_emotions: ['Relief', 'Pride', 'Joy', 'Clarity'],
        cognitive_distortions: [],
        coping_strategies: ['Gratitude Log', 'Mindful Celebration', 'Progress Sharing'],
        core_insight: 'Persistence through emotional ambiguity consistently yields the most meaningful creative triumphs.',
        conversation: [
            {
                id: 'convo-3-1',
                role: 'user',
                message: 'The visual aesthetic and clinical reframer are finally flowing together effortlessly.',
                created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000 + 10 * 60 * 1000).toISOString()
            },
            {
                id: 'convo-3-2',
                role: 'assistant',
                message: 'Savor this sensation deeply! Contrast this calm confidence with the frustration you felt three days ago. Notice how temporary that storm was. How does this achievement reshape how you view upcoming challenges?',
                created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000 + 12 * 60 * 1000).toISOString()
            },
            {
                id: 'convo-3-3',
                role: 'user',
                message: 'It reminds me that friction is just proof that real problem-solving is happening.',
                created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000 + 14 * 60 * 1000).toISOString()
            }
        ]
    },
    {
        id: 'demo-journal-4',
        created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        raw_text: `Conducted an end-to-end rehearsal presentation. Navigating between CBT restructuring, real-time AI journal reflection, and the PDF clinical summary export feels exceptionally powerful. The transitions are fluid. There are still pre-presentation butterflies, but I recognize them as healthy physiological readiness rather than fear.`,
        content: `Conducted an end-to-end rehearsal presentation. Navigating between CBT restructuring, real-time AI journal reflection, and the PDF clinical summary export feels exceptionally powerful. The transitions are fluid. There are still pre-presentation butterflies, but I recognize them as healthy physiological readiness rather than fear.`,
        sentiment: 'Hopeful',
        mood_score: 8,
        detected_emotions: ['Anticipation', 'Confidence', 'Focus'],
        cognitive_distortions: ['Fortune Telling'],
        coping_strategies: ['Positive Visualization', 'Grounding Breathwork'],
        core_insight: 'Reframing anxiety as readiness transforms somatic constriction into kinetic performance.',
        conversation: [
            {
                id: 'convo-4-1',
                role: 'user',
                message: 'My heart rate accelerates whenever I imagine stepping in front of the evaluators.',
                created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 10 * 60 * 1000).toISOString()
            },
            {
                id: 'convo-4-2',
                role: 'assistant',
                message: 'Excitement and fear activate the exact same biological circuits: elevated heart rate and heightened awareness. Re-label that somatic sensation: your body is mobilizing oxygen and focus so you can communicate with impact.',
                created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 12 * 60 * 1000).toISOString()
            }
        ]
    },
    {
        id: 'demo-journal-5',
        created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        raw_text: `Presentation day. Health Sakhi stands as a testament to combining psychological rigor with modern engineering aesthetics. I feel centered, present, and grateful. Regardless of external opinions, we built something authentic that empowers humans to understand and transform their emotional landscape. Ready to share our vision.`,
        content: `Presentation day. Health Sakhi stands as a testament to combining psychological rigor with modern engineering aesthetics. I feel centered, present, and grateful. Regardless of external opinions, we built something authentic that empowers humans to understand and transform their emotional landscape. Ready to share our vision.`,
        sentiment: 'Positive',
        mood_score: 9,
        detected_emotions: ['Serenity', 'Empowerment', 'Gratitude', 'Clarity'],
        cognitive_distortions: [],
        coping_strategies: ['Mindful Presence', 'Diaphragmatic Breathing'],
        core_insight: 'True emotional literacy is not the absence of stress, but the capacity to meet it with self-respect and wisdom.',
        conversation: [
            {
                id: 'convo-5-1',
                role: 'user',
                message: 'We are completely ready.',
                created_at: new Date(Date.now() - 3 * 60 * 60 * 1000 + 10 * 60 * 1000).toISOString()
            },
            {
                id: 'convo-5-2',
                role: 'assistant',
                message: 'You have done the work, both technically and emotionally. Present Health Sakhi with pride. You are prepared.',
                created_at: new Date(Date.now() - 3 * 60 * 60 * 1000 + 12 * 60 * 1000).toISOString()
            }
        ]
    }
];
