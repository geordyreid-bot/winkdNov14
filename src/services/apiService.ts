
import { Observable, AIGeneratedContent, SocialMediaPost, GiftCardSuggestion, Category, GroundedContent } from '@/types';

// --- Mock Data for Safe Browser Rendering ---

const MOCK_AI_CONTENT: AIGeneratedContent = {
    disclaimer: "This is a simulated AI response for demonstration purposes. It is not a medical diagnosis.",
    possibleConditions: [
        { name: "Burnout", likelihood: "high", description: "A state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress." },
        { name: "Stress", likelihood: "medium", description: "Physical and emotional tension usually caused by external pressures." }
    ],
    resources: [
        { title: "Understanding Burnout", type: "article", description: "A comprehensive guide to recognizing and managing burnout." },
        { title: "Mindful Breathing", type: "product", description: "5-minute guided meditation." },
        { title: "Local Support Group", type: "support group", description: "Connect with others experiencing similar challenges." }
    ]
};

const MOCK_GROUNDED_CONTENT: GroundedContent = {
    text: "Here are some local resources found based on your location.",
    sources: [
        { web: { title: "Community Health Clinic", uri: "https://example.com/clinic" } },
        { web: { title: "Mental Health Hotline", uri: "https://example.com/hotline" } }
    ]
};

// --- Service Functions ---

export const generateWinkContent = async (observables: Observable[]): Promise<AIGeneratedContent> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Use observables to simulate "processing" (prevents unused variable warning)
    console.log("Processing observables:", observables);
    return MOCK_AI_CONTENT;
};

export const generateWinkUpdateSuggestions = async (originalObservables: Observable[]): Promise<string[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Processing update for:", originalObservables);
    return [
        "Glad to see you looking more rested today!",
        "You seem to have a bit more energy, which is great.",
        "Just wanted to say you seem more like yourself lately."
    ];
};

export const generateNudgeSuggestions = async (context: string): Promise<string[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Processing context:", context);
    return [
        "Thinking of you!",
        "Sending you some positive vibes today.",
        "Just a quick check-in to say hi.",
        "Hope you're having a gentle day."
    ];
};

export const generateObservableSuggestions = async (description: string): Promise<{ text: string; category: Category }[]> => {
    await new Promise(resolve => setTimeout(resolve, 1200));
    console.log("Processing description:", description);
    return [
        { text: "Seems tired", category: "Physical" },
        { text: "Withdrawn from friends", category: "Social" },
        { text: "Anxious about work", category: "Mental" }
    ];
};

export const generateSocialPosts = async (
    conditions: { name: string; description: string }[],
    resources: { title: string; description: string }[],
    keywords: string
): Promise<SocialMediaPost[]> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Processing inputs for social posts:", conditions, resources);
    return [
        {
            platform: 'X',
            content: `Checking in on your friends matters. #${keywords.split(' ')[0] || 'mentalhealth'} #support`,
            timestamp: new Date() as any, // Type assertion for mock compatibility
            user: { name: 'User', handle: '@user', avatar: '' },
            likes: 0,
            comments: 0
        },
        {
            platform: 'Instagram',
            content: `Sending love to everyone struggling today. You are not alone. #${keywords.split(' ')[0] || 'wellness'}`,
            timestamp: new Date() as any,
            user: { name: 'User', handle: '@user', avatar: '' },
            likes: 0,
            comments: 0
        },
        {
            platform: 'Generic',
            content: `Support comes in many forms. Sometimes just a wink is enough.`,
            timestamp: new Date() as any,
            user: { name: 'User', handle: '@user', avatar: '' },
            likes: 0,
            comments: 0
        }
    ];
};

export const generateGiftCardIdeas = async (prompt: string): Promise<GiftCardSuggestion[]> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Processing prompt:", prompt);
    return [
        { store: "Amazon", category: "General", reasoning: "Versatile for any need." },
        { store: "Starbucks", category: "Food & Drink", reasoning: "A comforting treat." },
        { store: "Calm App", category: "Wellness", reasoning: "For relaxation and peace." }
    ];
};

export interface ModerationResult {
    is_safe: boolean;
    reason?: string;
}

export const moderateCustomObservable = async (text: string): Promise<ModerationResult> => {
    // Mock moderation - always safe for demo
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Moderating text:", text);
    return { is_safe: true };
};

export const findLocalResources = async (
    conditions: { name: string }[],
    location: { latitude: number; longitude: number }
): Promise<GroundedContent> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Finding local resources for:", conditions, location);
    return MOCK_GROUNDED_CONTENT;
};

export const findSocialResources = async (
    conditions: { name: string }[]
): Promise<GroundedContent> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Finding social resources for:", conditions);
    return {
        text: "Here are some online communities that might help.",
        sources: [
            { web: { title: "Reddit Support Group", uri: "https://reddit.com" } },
            { web: { title: "Online Forum", uri: "https://example.com/forum" } }
        ]
    };
};
